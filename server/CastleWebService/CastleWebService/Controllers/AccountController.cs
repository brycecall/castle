using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CastleWebService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CastleWebService.Controllers
{

    [Produces("application/json")]
    public class AccountController : Controller
    {

        private castle_devContext _db = new castle_devContext();
        public AccountController() {}
        //public AccountController(castle_devContext db) {
        //    _db = db;
        //}

        [HttpPost("api/adduser/{founderKey}")]
        public object InsertUsers([FromBody]Users user, string founderKey)
        {
            var result = new CastleData();
            try
            {
                // Check if founderKey is available.
                var keyQuery = _db.Founders.Where(x => (x.FoKey == founderKey) && (x.FoUsersId == null)).FirstOrDefault();
                // Is available, do insert and update
                if (keyQuery != null)
                {
                    // Create user row
                    _db.Users.Add(user);
                    _db.SaveChanges();
                    // Update Founders
                    keyQuery.FoUsersId = user.UserId;
                    _db.Founders.Update(keyQuery);
                    _db.SaveChanges();
                    result.data = user.UserId;
                    result.message = "Success";
                }
                else
                {
                    result.message = "Invalid Founder's Key.";
                    result.data = -1;
                }
            }
            catch (Exception e)
            {
                result = new CastleData { message = e.Message, data = -1 };
            }

            return result;
        }


        [HttpGet("api/users/{orgId}")]
        public IEnumerable<Users> GetUsers(int orgId)
        {
            var query = _db.Users.Where(x => x.UsrOrganizationId == orgId).ToList();
            return query;
        }


        [HttpGet("api/deleteuser/{userId}")]
        public CastleData DeleteUser(int userId)
        {
            var result = new CastleData();
            try
            {
                var user = _db.Users.Where(x => x.UserId == userId).FirstOrDefault();
                //user.UsrIsDeleted = 1;
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
		
		[HttpPost("api/validateuser/")]
        public CastleData ValidateUser([FromBody]Users user)
        {
            var result = new CastleData();
            try
            {
                var getUser = _db.Users.Where(x => (x.UsrUsername == user.UsrUsername) && (x.UsrPassword == user.UsrPassword)).FirstOrDefault();
                //user.UsrIsDeleted = 1;
                //_db.SaveChanges();
                if (getUser != null)
                {
                    result.data = user.UserId;
                    result.message = "Success";
                }
                else
                {
                    result.data = 0;
                    result.message = "user not found";
                }
            }
            catch (Exception e)
            {
                result = new CastleData { message = e.Message, data = -1 };
            }

            return result;
        }

        [HttpPost("api/updateuser/")]
        public CastleData UpdateUser([FromBody]Users user)
        {
            var result = new CastleData();
            try
            {
                var existingUser = _db.Users.Where(x => x.UserId == user.UserId).FirstOrDefault();

                    user.UserId = existingUser.UserId; // Make sure ID doesn't change
                    _db.Entry(existingUser).CurrentValues.SetValues(user); // Update values from one to another

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




    }
}