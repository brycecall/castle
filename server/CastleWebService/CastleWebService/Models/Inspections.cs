using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Inspections
    {
        public Inspections()
        {
            Photos = new HashSet<Photos>();
            Sections = new HashSet<Sections>();
        }

        public int InspectionId { get; set; }
        public int InsUserId { get; set; }
        public string InsName { get; set; }
        public string InsSourceType { get; set; }
        public DateTime InsLastModified { get; set; }
        public DateTime? InsLastSubmitted { get; set; }
        public string InsThemeGuid { get; set; }
        public string InsThemeResponseBlob { get; set; }
        public string InsTemplateResponseBlob { get; set; }
        public string InsOrganizationGuid { get; set; }
        public string InsTemplateGuid { get; set; }
        public string InsTemplateTitle { get; set; }
        public byte? InsIsDeleted { get; set; }
        public string InsGuid { get; set; }
        public string InsHash { get; set; }

        public Users InsUser { get; set; }
        public ICollection<Photos> Photos { get; set; }
        public ICollection<Sections> Sections { get; set; }
    }
}
