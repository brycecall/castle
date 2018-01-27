using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Theme
    {
        public int ThemeId { get; set; }
        public int ThemeUserId { get; set; }
        public int ThemeOrganizationId { get; set; }
        public string ThemeTitle { get; set; }
        public string ThemeBlob { get; set; }

        public Organization ThemeOrganization { get; set; }
        public Users ThemeUser { get; set; }
    }
}
