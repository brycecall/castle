using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CastleWebService.Models;
using Newtonsoft.Json;

namespace CastleWebService.Controllers
{

    [Produces("application/json")]
    public class InspectionController : Controller
    {
        castle_devContext _db = new castle_devContext();
        public InspectionController() { }

        [HttpGet("api/v1/inspection/{insId}/{userId}")]
        public Inspections GetInspection(int insId, int userId)
        {
            var query = _db.Inspections.Where(x => x.InspectionId == insId && x.InsUserId == userId).FirstOrDefault();
            return query;
        }

        [HttpGet("api/v1/inspections/{userId}")]
        public async Task<List<Inspections>> GetInspections(int userId)
        {
            var query = await Task.Factory.StartNew(() =>  {
                return _db.Inspections.Select(x => x).Where(x => x.InsUserId == userId).Take(50).ToList();
            });
            return query;
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



        //[HttpGet("api/v1/upsertFullInspection/{userId}")]
        //public async Task<CastleData> UpsertFullInspection([FromBody]Inspections inspection,  int userId)
        //{
        //    var result = new CastleData();
        //    try
        //    {
        //        var query = await Task.Factory.StartNew(() =>
        //        {
        //            return


        //            _db.Inspections.Select(x => x).Where(x => x.InsUserId == userId).Take(50).ToList();


        //        });
        //    }
        //    catch (Exception e) {

        //    }
        //    return result;
        //}





    }
}
