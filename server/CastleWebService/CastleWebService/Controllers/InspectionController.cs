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

namespace CastleWebService.Controllers
{

    [Produces("application/json")]
    public class InspectionController : Controller
    {
        public const string TEMPLATE = "template";
        public const string INSPECTION = "inspection";
        public const string THEME = "theme";
        public const string ALL = "ALL";


        castle_devContext _db = new castle_devContext();
        public InspectionController() { }


        public IQueryable<Inspections> GetFullInspection() {
            var query = _db.Inspections.Where(x => (x.InsIsDeleted == 0 || x.InsIsDeleted == null))
                                       .Include(x => x.Sections)
                                           .ThenInclude(x => x.Subsections)
                                           .ThenInclude(x => x.Questions)
                                           .ThenInclude(x => x.Answers)
                                       .Include(x => x.Sections)
                                           .ThenInclude(x => x.Subsections)
                                           .ThenInclude(x => x.Questions)
                                           .ThenInclude(x => x.Photos)
                                       ;
            return query;
        }

        public Stream DeserializeJSON(string jsonString) {
            Response.ContentType = "application/json; charset=utf-8";
            return new MemoryStream(Encoding.UTF8.GetBytes(jsonString));
        }

        [HttpGet("api/v1/inspection/{insId}/{userId}")]
        public Stream GetInspection(int insId, int userId)
        {
            var query = GetFullInspection().Where(x => x.InspectionId == insId
                                                   && x.InsUserId == userId)
                                           .FirstOrDefault();

            var settings = new JsonSerializerSettings
            {
                ContractResolver = new ModelMetadataTypeAttributeContractResolver(),
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };

            var Jsonquery = JsonConvert.SerializeObject(query, settings);
            return DeserializeJSON(Jsonquery);
        }

        [HttpGet("api/v1/inspections/{userId}/{sourceType?}")]
        public async Task<Stream> GetInspections(int userId, string sourceType = INSPECTION)
        {
            var result = await Task.Factory.StartNew(() =>
            {
                var query = GetFullInspection().Where(x => x.InsUserId == userId
                                            && x.InsSourceType == sourceType)
                                          .ToList();
                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new ModelMetadataTypeAttributeContractResolver(),
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                };

                var Jsonquery = JsonConvert.SerializeObject(query, settings);
                return DeserializeJSON(Jsonquery);
            });
            return result;
        }

        [HttpGet("api/v1/deleteinspection/{insId}/{userId}")]
        public CastleData DeleteInspection(int insId, int userId)
        {
            var result = new CastleData();
            try
            {
                var inspection = _db.Inspections.Where(x => x.InspectionId == insId && x.InsUserId == userId).FirstOrDefault();
                inspection.InsIsDeleted = 1;
                inspection.InsLastModified = DateTime.UtcNow;
                _db.SaveChanges();
                result.data = 0;
                result.message = "Success";
            }
            catch (Exception e) {
                result = new CastleData { message = e.Message, data = -1 };
            }

            return result;
        }

        [HttpPost("api/v1/upsertinspection/{userId}")]
        public CastleData UpsertInspection([FromBody]object iInspection, int userId)
        {
            var result = new CastleData();
            try
            {
                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new ModelMetadataTypeAttributeContractResolver()
                };

                var inspection = JsonConvert.DeserializeObject<Inspections>(iInspection.ToString(), settings);

                var existingInspection = _db.Inspections.Where(x => x.InspectionId == inspection.InspectionId && x.InsUserId == userId).FirstOrDefault();

                if (existingInspection != null)
                {
                    inspection.InspectionId = existingInspection.InspectionId; // Make sure ID doesn't change
                    inspection.InsLastModified = DateTime.UtcNow;
                    _db.Entry(existingInspection).CurrentValues.SetValues(inspection); // Update values from one to another
                }
                else {
                    _db.Add(inspection);
                }

                _db.SaveChanges();
                result.data = 0;
                result.message = "Success";
            }
            catch (Exception e)
            {
                result = new CastleData { message = e.Message, data = -1 };
            }

            return result;
        }

        [HttpGet("api/v1/inspectionsMeta/{userId}/{sourceType}")]
        public Dictionary<string, Inspections> CheckInspections(int userId, string sourceType = TEMPLATE)
        {
            var query = _db.Inspections.Where(x => (x.InsIsDeleted == 0 || x.InsIsDeleted == null)
                                              && x.InsUserId == userId
                                              && x.InsSourceType == sourceType)
                                       .ToDictionary(x => x.InsGuid, x => x);
            return query;
        }


        

    } // end class
} // end namespace


/// <summary>
/// Zip and Unzip in memory using System.IO.Compression.
/// </summary>
/// <remarks>
/// Include System.IO.Compression in your project.
/// </remarks>
//public static class ZipHelper
//{
//    /// <summary>
//    /// Zips a string into a zipped byte array.
//    /// </summary>
//    /// <param name="textToZip">The text to be zipped.</param>
//    /// <returns>byte[] representing a zipped stream</returns>
//    public static byte[] Zip(string textToZip)
//    {
//        using (var memoryStream = new MemoryStream())
//        {
//            using (var zipArchive = new ZipArchive(memoryStream, ZipArchiveMode.Create, true))
//            {
//                var demoFile = zipArchive.CreateEntry("zipped.txt");

//                using (var entryStream = demoFile.Open())
//                {
//                    using (var streamWriter = new StreamWriter(entryStream))
//                    {
//                        streamWriter.Write(textToZip);
//                    }
//                }
//            }

//            return memoryStream.ToArray();
//        }
//    }

//    /// <summary>
//    /// Unzip a zipped byte array into a string.
//    /// </summary>
//    /// <param name="zippedBuffer">The byte array to be unzipped</param>
//    /// <returns>string representing the original stream</returns>
//    public static string Unzip(byte[] zippedBuffer)
//    {
//        using (var zippedStream = new MemoryStream(zippedBuffer))
//        {
//            using (var archive = new ZipArchive(zippedStream))
//            {
//                var entry = archive.Entries.FirstOrDefault();

//                if (entry != null)
//                {
//                    using (var unzippedEntryStream = entry.Open())
//                    {
//                        using (var ms = new MemoryStream())
//                        {
//                            unzippedEntryStream.CopyTo(ms);
//                            var unzippedArray = ms.ToArray();

//                            return Encoding.Default.GetString(unzippedArray);
//                        }
//                    }
//                }

//                return null;
//            }
//        }
//    }
//}
