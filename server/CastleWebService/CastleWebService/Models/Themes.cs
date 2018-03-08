using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Themes
    {
        public int ThemeId { get; set; }
        public int ThemeUserId { get; set; }
        public int ThemeOrganizationId { get; set; }
        public string ThemeTitle { get; set; }
        public byte[] ThemeBlob { get; set; }
        public byte? ThemeIsDeleted { get; set; }
        public DateTime ThemeLastModified { get; set; }
        public string ThemeUnique { get; set; }
        public string ThemeHash { get; set; }
        public string ThemeVersion { get; set; }
        public DateTime? ThemeCreatedDate { get; set; }
        public DateTime? ThemeLastClientModified { get; set; }

        public Organizations ThemeOrganization { get; set; }
        public Users ThemeUser { get; set; }
    }
}
