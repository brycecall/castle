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

        [HttpGet("api/v1/themes/{userId}")]
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

        [HttpGet("api/v1/theme/{themeId}/{userId}")]
        public String GetTheme(int themeId, int userId)
        {
            var query = _db.Themes.Where(x => x.ThemeUserId == userId
                                         && (x.ThemeIsDeleted == 0 || x.ThemeIsDeleted == null)
                                         && x.ThemeId == themeId).Select(x => x.ThemeBlob)
                                  .FirstOrDefault();
            Response.ContentType = "application/json; charset=utf-8";

            return Encoding.UTF8.GetString(query);
        }

        [HttpGet("api/v1/themeMeta/{userId}")]
        public Dictionary<string, Themes> checkThemeMetadata(int userId)
        {
            var query = _db.Themes.Where(x => (x.ThemeIsDeleted == 0 || x.ThemeIsDeleted == null)
                                              && x.ThemeUserId == userId)
                                       .ToDictionary(x => x.ThemeUnique, x => x);
            return query;
        }

        [HttpPost("api/v1/UpsertTheme1/")]
        public async Task<CastleData> UploadFile(IFormFile file)
        {

            _db.Database.SetCommandTimeout(60);
            var result = new CastleData();
            try
            {
                var userId = 1;
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

        [Produces("application/json")]
        //[DisableFormValueModelBindingAttribute]
        //[Consumes("application/json", "application/json-patch+json", "multipart/form-data","application/x-www-form-urlencoded", "application/zip")]
        [RequestSizeLimit(valueCountLimit: 947483648)]
        [HttpPost("api/v1/UpsertTheme/")]
        public async Task<CastleData> UpsertThemeAsync() 
        {
            var test = Request;

            var files = await Request.ReadFormAsync();
            var themeFile = files.Files.FirstOrDefault();

            // full path to file in temp location
            var filePath = Path.GetTempFileName();
            var userId = 1;


            //using (var stream = new FileStream(filePath, FileMode.Create))
            //{
            //    await formFile.CopyToAsync(stream);
            //}

            var result = new CastleData();


            try
            {
                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new ModelMetadataTypeAttributeContractResolver()
                };

                var zippedStream = themeFile.OpenReadStream();
                var name = themeFile.FileName;

                using (var archive = new ZipArchive(zippedStream))
                {
                    var entry = archive.Entries.FirstOrDefault();

                    if (entry != null)
                    {
                        using (var unzippedEntryStream = entry.Open())
                        {
                            using (var ms = new MemoryStream())
                            {
                                var theme = JsonConvert.DeserializeObject<Themes>(unzippedEntryStream.ToString(), settings);

                                var existingTheme = _db.Themes.Where(x => x.ThemeUnique == theme.ThemeUnique
                                                                     && x.ThemeUserId == userId)
                                                              .FirstOrDefault();

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

                                _db.SaveChanges();
                                result.data = 0;
                                result.message = "Success";


                                unzippedEntryStream.CopyTo(ms);
                                var unzippedByteArray = ms.ToArray();

                                Encoding.Default.GetString(unzippedByteArray);
                            }
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
    } // end class

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    public class DisableFormValueModelBindingAttribute : Attribute, IResourceFilter
    {
        public void OnResourceExecuting(ResourceExecutingContext context)
        {
            var formValueProviderFactory = context.ValueProviderFactories
                    .OfType<FormValueProviderFactory>()
                    .FirstOrDefault();
            if (formValueProviderFactory != null)
            {
                context.ValueProviderFactories.Remove(formValueProviderFactory);
            }

            var jqueryFormValueProviderFactory = context.ValueProviderFactories
                .OfType<JQueryFormValueProviderFactory>()
                .FirstOrDefault();
            if (jqueryFormValueProviderFactory != null)
            {
                context.ValueProviderFactories.Remove(jqueryFormValueProviderFactory);
            }
        }

        public void OnResourceExecuted(ResourceExecutedContext context)
        {
        }
    }


    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    public class RequestSizeLimitAttribute : Attribute, IAuthorizationFilter, IOrderedFilter
    {
        private readonly FormOptions _formOptions;

        public RequestSizeLimitAttribute(int valueCountLimit)
        {
            _formOptions = new FormOptions()
            {
                // tip: you can use different arguments to set each properties instead of single argument
                KeyLengthLimit = valueCountLimit,
                ValueCountLimit = valueCountLimit,
                ValueLengthLimit = valueCountLimit

                // uncomment this line below if you want to set multipart body limit too
                // MultipartBodyLengthLimit = valueCountLimit
            };
        }

        public int Order { get; set; }

        // taken from /a/38396065
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var contextFeatures = context.HttpContext.Features;
            var formFeature = contextFeatures.Get<IFormFeature>();

            if (formFeature == null || formFeature.Form == null)
            {
                // Setting length limit when the form request is not yet being read
                contextFeatures.Set<IFormFeature>(new FormFeature(context.HttpContext.Request, _formOptions));
            }
        }
    }





} // end theme