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

namespace CastleWebService.Controllers
{
    [Produces("application/json")]
    public class ThemeController : Controller
    {

        castle_devContext _db = new castle_devContext();

        #region READ Themes
        [HttpGet("api/v1/themes/")]
        public IEnumerable<string> GetThemes(int userId)
        {
            var query = _db.Themes.Where(x => x.ThemeUserId == userId
                                         && (x.ThemeIsDeleted == 0 || x.ThemeIsDeleted == null)
                                         )
                                  .Select(x => x.ThemeBlob)
                                  .ToList()
                                  .Select(x => Encoding.UTF8.GetString(x));
            return query;
        }

        [HttpGet("api/v1/theme/")]
        public String GetTheme(string guid, int userId)
        {
            var query = _db.Themes.Where(x => x.ThemeUserId == userId
                                         && (x.ThemeIsDeleted == 0 || x.ThemeIsDeleted == null)
                                         && x.ThemeUnique == guid).Select(x => x.ThemeBlob)
                                  .FirstOrDefault();
            Response.ContentType = "application/json; charset=utf-8";

            return Encoding.UTF8.GetString(query);
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
                                theme.ThemeBlob = blob;
                            }
                        }

                        var existingTheme = _db.Themes.Where(x => x.ThemeUnique == theme.ThemeUnique
                                                             && x.ThemeUserId == userId)
                                                      .FirstOrDefault();
                        theme.ThemeUserId = userId;
                        if (existingTheme != null)
                        {
                            theme.ThemeId = existingTheme.ThemeId; // Make sure ID doesn't change
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

                //var path = Path.Combine(
                //            Directory.GetCurrentDirectory(), "wwwroot",
                //            name);

                //using (var stream = new FileStream(path, FileMode.Create))
                //{
                //    await file.CopyToAsync(stream);
                //}
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