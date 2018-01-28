using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CastleWebService.Models
{
    public class InspectionFull
    {
        public InspectionFull()
        {
            Section = new HashSet<Section>();
        }

        public int InspectionId { get; set; }
        public int InsUserId { get; set; }
        public string InsName { get; set; }
        public string InsSourceType { get; set; }
        public DateTime? InsLastModified { get; set; }
        public DateTime? InsLastSubmitted { get; set; }
        public int? InsThemeId { get; set; }
        public int? InsOrganizationId { get; set; }
        public int? InsTemplateId { get; set; }
        public string InsTemplateTitle { get; set; }
        public byte? InsIsDeleted { get; set; }

        public ICollection<Section> Section { get; set; }

        // extra fields
        [JsonExtensionData]
        private IDictionary<string, JToken> _catchAll;
    }


}
