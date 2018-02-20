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
    public class ThemeController : Controller
    {

        castle_devContext _db = new castle_devContext();

        [HttpGet("api/v1/themes/{userId}")]
        public List<string> GetThemes(int userId)
        {
            var query = _db.Themes.Where(x => x.ThemeUserId == userId).Select(x => x.ThemeBlob)
                                 .ToList();
            return query;
        }

        [HttpGet("api/v1/theme/{themeId}/{userId}")]
        public string GetTheme(int themeId, int userId)
        {
            var query = _db.Themes.Where(x => x.ThemeUserId == userId
                                         && x.ThemeId == themeId).Select(x => x.ThemeBlob)
                                 .FirstOrDefault();
            return query;
        }

        [HttpGet("api/v1/themeMeta/{userId}")]
        public Dictionary<string, Themes> checkThemeMetadata(int userId)
        {
            var query = _db.Themes.Where(x => (x.ThemeIsDeleted == 0 || x.ThemeIsDeleted == null)
                                              && x.ThemeUserId == userId)
                                       .ToDictionary(x => x.ThemeUnique, x => x);
            return query;
        }


    }
}