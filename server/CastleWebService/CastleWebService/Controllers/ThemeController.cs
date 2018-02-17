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

    }
}