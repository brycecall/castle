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
        public const string TEMPLATE = "Template";
        public const string INSPECTION = "Inspection";
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
            var settings = new JsonSerializerSettings
            {
                ContractResolver = new ModelMetadataTypeAttributeContractResolver(),
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };
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
        public async Task<Stream> GetInspections(int userId, string sourceType = ALL)
        {
            var result = await Task.Factory.StartNew(() =>
            {
                var query = GetFullInspection().Where(x => x.InsUserId == userId
                                            && (sourceType == ALL || x.InsSourceType == sourceType))
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
        public CastleData UpsertInspection([FromBody]object iinspection, int userId)
        {
            var result = new CastleData();
            try
            {
                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new ModelMetadataTypeAttributeContractResolver()
                };

                var inspection = JsonConvert.DeserializeObject<Inspections>(iinspection.ToString(), settings);

                var existingInspection = _db.Inspections.Where(x => x.InspectionId == inspection.InspectionId && x.InsUserId == userId).FirstOrDefault();

                if (existingInspection != null)
                {
                    inspection.InspectionId = existingInspection.InspectionId; // Make sure ID doesn't change
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

        [HttpGet("api/v1/themes/{userId}")]
        public List<Themes> GetThemes(int userId)
        {
            var query = _db.Themes.Where(x => x.ThemeUserId == userId)
                                 .ToList();
            return query;  
        }

        [HttpGet("api/v1/theme/{themeId}/{userId}")]
        public Themes GetTheme(int themeId, int userId)
        {
            var query = _db.Themes.Where(x => x.ThemeUserId == userId
                                         && x.ThemeId == themeId)
                                 .FirstOrDefault();
            return query;
        }

    } // end class
} // end namespace
