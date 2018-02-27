using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CastleWebService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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

        [HttpPost("api/v1/adduser/{founderKey}")]
        public object InsertUsers([FromBody]object userObj, string founderKey)
        {
            var result = new CastleData();
            try
            {
                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new ModelMetadataTypeAttributeContractResolver()
                };

                var user = JsonConvert.DeserializeObject<Users>(userObj.ToString(), settings);

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


        [HttpGet("api/v1/users/{orgId}")]
        public IEnumerable<Users> GetUsers(int orgId)
        {
            var query = _db.Users.Where(x => x.UsrOrganizationId == orgId).ToList();
            return query;
        }


        [HttpGet("api/v1/deleteuser/{userId}")]
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
		
		[HttpPost("api/v1/validateuser/")]
        public CastleData ValidateUser([FromBody]object userObj)
        {
            var result = new CastleData();
            try
            {
                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new ModelMetadataTypeAttributeContractResolver()
                };
                var user = JsonConvert.DeserializeObject<Users>(userObj.ToString(), settings);

                var getUser = _db.Users.Where(x => (x.UsrUsername == user.UsrUsername) && (x.UsrPassword == user.UsrPassword)).FirstOrDefault();

                //user.UsrIsDeleted = 1;
                //_db.SaveChanges();
                if (getUser != null)
                {
                    result.data = getUser.UserId;
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

        [HttpPost("api/v1/updateuser/")]
        public CastleData UpdateUser([FromBody]object userObj)
        {
            var result = new CastleData();
            try
            {
                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new ModelMetadataTypeAttributeContractResolver()
                };
                var user = JsonConvert.DeserializeObject<Users>(userObj.ToString(), settings);

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

        [HttpPost("api/v1/insertAutoComment/{userId}")]
        public object InsertAutoComment([FromBody]object autoCommentObj, int userId)
        {
            var result = new CastleData();
            try
            {
                // Deserialize autoComment
                var autoComment = JsonConvert.DeserializeObject<AutoComment>(autoCommentObj.ToString());
                autoComment.AcUserId = userId;

                // Create AutoComment row
                _db.AutoComment.Add(autoComment);
                _db.SaveChanges();

                result.data = autoComment.AutoCommentId;
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