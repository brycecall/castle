﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CastleWebService.Models;

namespace CastleWebService.Controllers
{

    [Produces("application/json")]
    public class InspectionController : Controller
    {
        castle_devContext _db = new castle_devContext();
        public InspectionController() { }

        [HttpGet("api/inspection/{insId}/{userId}")]
        public Inspection GetInspection(int insId, int userId)
        {
            var query = _db.Inspection.Where(x => x.InspectionId == insId && x.InsUserId == userId).FirstOrDefault();
            return query;
        }

        [HttpGet("api/inspections/{userId}")]
        public async Task<List<Inspection>> GetInspections(int userId)
        {
            var query = await Task.Factory.StartNew(() =>  {
                return _db.Inspection.Select(x => x).Where(x => x.InsUserId == userId).Take(50).ToList();
            });
            return query;
        }

        [HttpGet("api/deleteinspection/{insId}/{userId}")]
        public CastleData DeleteInspection(int insId, int userId)
        {
            var result = new CastleData();
            try
            {
                var inspection = _db.Inspection.Where(x => x.InspectionId == insId && x.InsUserId == userId).FirstOrDefault();
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

        [HttpPost("api/upsertinspection/{userId}")]
        public CastleData UpsertInspection([FromBody]Inspection inspection, int userId)
        {
            var result = new CastleData();
            try
            {
                var existingInspection = _db.Inspection.Where(x => x.InspectionId == inspection.InspectionId && x.InsUserId == userId).FirstOrDefault();

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



        //[HttpGet("api/upsertFullInspection/{userId}")]
        //public async Task<CastleData> UpsertFullInspection([FromBody]Inspection inspection,  int userId)
        //{
        //    var result = new CastleData();
        //    try
        //    {
        //        var query = await Task.Factory.StartNew(() =>
        //        {
        //            return


        //            _db.Inspection.Select(x => x).Where(x => x.InsUserId == userId).Take(50).ToList();


        //        });
        //    }
        //    catch (Exception e) {

        //    }
        //    return result;
        //}





    }
}
