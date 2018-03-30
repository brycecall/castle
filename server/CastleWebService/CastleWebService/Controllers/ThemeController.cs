using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CastleWebService.Models;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Text;
using System.IO.Compression;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Http.Features;
//using System.Net.Http.Headers;
using Microsoft.Net.Http.Headers;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Globalization;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Hosting.Internal;
using Microsoft.WindowsAzure.Storage.Blob;
using Microsoft.WindowsAzure.Storage.Auth;
using Microsoft.WindowsAzure.Storage;

namespace CastleWebService.Controllers
{
    [Produces("application/json")]
    public class ThemeController : Controller
    {

        castle_devContext _db = new castle_devContext();
        string _connectionString = "DefaultEndpointsProtocol=https;AccountName=castlestorage;" +
    "AccountKey=7WUUpnfvNLtliiWew3Yx/KhnRHDAFWtIpPHGt6SIfNHXD1A5cqG8R+Of8sDnlSeMoQtzm7uyBOBi1spYuQXF/w==;" +
    "EndpointSuffix=core.windows.net";

        #region READ Themes
        [HttpGet("api/v1/themes/")]
        public async Task<IEnumerable<Themes>> GetThemesAsync(int userId)
        {
            var query = _db.Themes.Where(x => x.ThemeUserId == userId
                                         && (x.ThemeIsDeleted == 0 || x.ThemeIsDeleted == null)
                                  ).ToList();
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(_connectionString);
            CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
            CloudBlobContainer blobContainer = blobClient.GetContainerReference(InspectionController.THEME);
            for (var i = 0; i < query.Count(); i++)
            {
                var theme = query[i];
                var blob = blobContainer.GetBlobReference(theme.ThemeUnique);
                var blobStream = new MemoryStream();
                await blob.DownloadToStreamAsync(blobStream);
                byte[] byteBlob = blobStream.ToArray();
                query[i].blobStream = Encoding.UTF8.GetString(byteBlob);
            }

            return query;
        }

        [HttpGet("api/v1/theme/")]
        public async Task<Themes> GetThemeAsync(string guid, int userId)
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(_connectionString);
            CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
            CloudBlobContainer blobContainer = blobClient.GetContainerReference(InspectionController.THEME);
            var query = _db.Themes.Where(x => x.ThemeUserId == userId
                                         && (x.ThemeIsDeleted == 0 || x.ThemeIsDeleted == null)
                                         && x.ThemeUnique == guid)
                                  .FirstOrDefault();
            var blob = blobContainer.GetBlobReference(query.ThemeUnique);
            var blobStream = new MemoryStream();
            await blob.DownloadToStreamAsync(blobStream);
            byte[] byteBlob = blobStream.ToArray();
            query.blobStream = Convert.ToBase64String(byteBlob);
            //query.blobStream = Encoding.UTF8.GetString(byteBlob);
            return query;
        }

        [HttpGet("api/v1/themeMeta/")]
        public Dictionary<string, Themes> checkThemeMetadata(int userId)
        {
            var query = _db.Themes.Where(x => (x.ThemeIsDeleted == 0 || x.ThemeIsDeleted == null)
                                              && x.ThemeUserId == userId)
                                       .ToDictionary(x => x.ThemeUnique, x => x);
            return query;
        }
        #endregion

        #region UPDATE/UPSERT

        [HttpPost("api/v1/upsertblob/")]
        public async Task<CastleData> UpsertBlob(IFormFile file, int userId)
        {
            _db.Database.SetCommandTimeout(60);
            string containerName = InspectionController.THEME;

            var result = new CastleData();
            try
            {
                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new ModelMetadataTypeAttributeContractResolver()
                };

                if (file != null && file.Length != 0)
                {
                    var zippedStream = file.OpenReadStream();
                    var name = file.FileName;

                    using (var archive = new ZipArchive(zippedStream))
                    {
                        var entry = archive.Entries.Where(x => x.Name == "manifest.json").FirstOrDefault();
                        var theme = new Themes();

                        if (entry != null)
                        {
                            using (var unzippedEntryStream = entry.Open())
                            {
                                using (StreamReader reader = new StreamReader(unzippedEntryStream))
                                {
                                    string fileString = reader.ReadToEnd();
                                    theme = JsonConvert.DeserializeObject<Themes>(fileString, settings);
                                    CloudStorageAccount storageAccount = CloudStorageAccount.Parse(_connectionString);
                                    CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                                    CloudBlobContainer blobContainer = blobClient.GetContainerReference(containerName);
                                    await blobContainer.CreateIfNotExistsAsync();
                                    CloudBlockBlob blob = blobContainer.GetBlockBlobReference(theme.ThemeUnique);
                                    await blob.UploadFromStreamAsync(zippedStream);
                                }
                            }

                            var existingTheme = _db.Themes.Where(x => x.ThemeUnique == theme.ThemeUnique
                                                                 && x.ThemeUserId == userId)
                                                          .FirstOrDefault();
                            theme.ThemeUserId = userId;
                            if (existingTheme != null)
                            {
                                theme.ThemeId = existingTheme.ThemeId; // Make sure ID doesn't change
                                theme.ThemeUnique = existingTheme.ThemeUnique;
                                theme.ThemeLastModified = DateTime.UtcNow;
                                _db.Entry(existingTheme).CurrentValues.SetValues(theme); // Update values from one to another
                            }
                            else
                            {
                                _db.Add(theme);
                            }

                            await Task.Factory.StartNew(() =>
                            {
                                _db.SaveChanges();
                                result.data = 0;
                                result.message = "Success";
                            });
                        }

                    }
                }

            }
            catch (Exception e)
            {
                result = new CastleData { message = e.Message, data = -1 };
            }

            return result;
        }

        

        [HttpPost("api/v1/UpsertTheme/")]
        public async Task<CastleData> UploadFile(IFormFile file, int userId)
        {
            _db.Database.SetCommandTimeout(60);
            var result = new CastleData();
            try
            {
                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new ModelMetadataTypeAttributeContractResolver(),

                };

                if (file != null && file.Length != 0)
                {
                    var zippedStream = file.OpenReadStream();
                    var name = file.FileName;

                    using (var archive = new ZipArchive(zippedStream))
                    {
                        var entry = archive.Entries.Where(x => x.Name == "manifest.json").FirstOrDefault();
                        var theme = new Themes();
                        byte[] blob;

                        if (entry != null)
                        {
                            using (var unzippedEntryStream = entry.Open())
                            {
                                using (StreamReader reader = new StreamReader(unzippedEntryStream))
                                {
                                    string fileString = reader.ReadToEnd();
                                    theme = JsonConvert.DeserializeObject<Themes>(fileString, settings);
                                }
                            }

                            using (StreamReader reader = new StreamReader(zippedStream))
                            {
                                using (var ms = new MemoryStream())
                                {
                                    zippedStream.CopyTo(ms);
                                    blob = ms.ToArray();
                                    //theme.ThemeBlob = blob;
                                }
                            }

                            var existingTheme = _db.Themes.Where(x => x.ThemeUnique == theme.ThemeUnique
                                                                 && x.ThemeUserId == userId)
                                                          .FirstOrDefault();
                            theme.ThemeUserId = userId;
                            if (existingTheme != null)
                            {
                                theme.ThemeId = existingTheme.ThemeId; // Make sure ID doesn't change
                                theme.ThemeUnique = existingTheme.ThemeUnique;
                                theme.ThemeLastModified = DateTime.UtcNow;
                                _db.Entry(existingTheme).CurrentValues.SetValues(theme); // Update values from one to another
                            }
                            else
                            {
                                _db.Add(theme);
                            }

                            await Task.Factory.StartNew(() =>
                            {
                                _db.SaveChanges();
                                result.data = 0;
                                result.message = "Success";
                            });
                        }

                     }
                }
            }
            catch (Exception e)
            {
                result = new CastleData { message = e.Message, data = -1 };
            }

            return result;
        }
        #endregion

    } // end class



} // end theme