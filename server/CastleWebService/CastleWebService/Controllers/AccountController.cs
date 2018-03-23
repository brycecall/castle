using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
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
        public AccountController() { }

        #region CREATE Users

        [HttpPost("api/v1/insertAutoComment/")]
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

        [HttpPost("api/v1/adduser")]
        public object InsertUsers([FromBody]object userObj)
        {
            var result = new CastleData();
            try
            {
                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new ModelMetadataTypeAttributeContractResolver()
                };

                var user = JsonConvert.DeserializeObject<Users>(userObj.ToString(), settings);

                var userExists = _db.Users.Where(x => x.UserId == user.UserId || x.UsrUsername == user.UsrUsername).Count() > 0;
                if (userExists)
                {
                    result.data = -2;
                    result.message = "Username already exists!";
                }
                else {
                    // Add random key to send for email validation
                    Random random = new System.Random();
                    user.UsrEmailToken = random.Next(1000000, 999999999).ToString();

                    // Send email to user account
                    SmtpClient client = new SmtpClient("smtp.office365.com");
                    client.UseDefaultCredentials = false;
                    client.Port = 587;
                    client.EnableSsl = true;
                    client.Credentials = new NetworkCredential("jordanballs@invenio.xyz", "MoneyBalls101");

                    MailMessage mailMessage = new MailMessage();
                    mailMessage.IsBodyHtml = true;
                    mailMessage.From = new MailAddress("castle-donotreply@invenio.xyz");
                    mailMessage.To.Add(user.UsrUsername);
                    mailMessage.Body = "<a href='https://api.castle.invenio.xyz/api/v1/verifyemail/" + user.UsrEmailToken + "' target='_blank'>Click to confirm Castle Account Registration.</a>";
                    mailMessage.Subject = "Castle Account Confirmation";
                    client.Send(mailMessage);

                    // Create user row
                    _db.Users.Add(user);
                    _db.SaveChanges();

                    result.data = user.UserId;
                    result.message = "Success";
                }
            }
            catch (Exception e)
            {
                result = new CastleData { message = e.Message, data = -100 };
            }

            return result;
        }
        #endregion

        #region READ Users
        [HttpGet("api/v1/users/")]
        public IEnumerable<Users> GetUsers(int orgId)
        {
            var query = _db.Users.Where(x => x.UsrOrganizationId == orgId).ToList();
            return query;
        }
        #endregion

        #region UPDATE users
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
        #endregion

        #region DELETE Users
        [HttpGet("api/v1/deleteuser/")]
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
        #endregion

        #region Validate Users
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

                if (getUser == null)
                {
                    result.data = -2;
                    result.message = "Incorrect Username or Password.";
                }
                else if (getUser.UsrAccountLocked == 1)
                {
                    result.data = -1;
                    result.message = "Account locked!";
                }
                else if (getUser != null)
                {
                    result.data = getUser.UserId;
                    result.message = "Success";
                }
            }
            catch (Exception e)
            {
                result = new CastleData { message = e.Message, data = -100 };
            }

            return result;
        }

        [HttpGet("api/v1/verifyemail/{token}")]
        public ActionResult ValidateRegistration(string token)
        {
            var result = new CastleData();

            try
            {
                // Get user that matches the token
                var getUser = _db.Users.Where(x => x.UsrEmailToken == token).FirstOrDefault();
                if (getUser == null)
                {
                    result.data = -2;
                    result.message = "<html><body><a style='font-weight: bold;'>Account Already Confirmed!</a></body></html>";
                }
                else
                {
                    // Null the token to allow user login
                    getUser.UsrEmailToken = null;

                    // Save changes
                    _db.Entry(getUser).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    _db.SaveChanges();

                    result.data = 0;
                    result.message = "<html><body><a style='font-weight: bold;'>User Account Confirmed!</a></body></html>";
                }
            }
            catch (Exception e)
            {
                result = new CastleData { message = e.Message, data = -100 };
            }

            return Content(result.message, "text/html");
        }
        #endregion

    } //END Class
} //END Namespace