using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Inspection
    {
        public Inspection()
        {
            Answer = new HashSet<Answer>();
            Photo = new HashSet<Photo>();
            Question = new HashSet<Question>();
            Section = new HashSet<Section>();
            Subsection = new HashSet<Subsection>();
        }

        public int InspectionId { get; set; }
        public int InsUserId { get; set; }
        public string InsName { get; set; }
        public string InsSourceType { get; set; }
        public DateTime? InsLastModified { get; set; }
        public DateTime? InsLastSubmitted { get; set; }
        public int? InsThemeId { get; set; }
        public string InsThemeResponseBlob { get; set; }
        public string InsTemplateResponseBlob { get; set; }
        public int? InsOrganizationId { get; set; }
        public int? InsTemplateId { get; set; }
        public string InsTemplateTitle { get; set; }
        public byte? InsIsDeleted { get; set; }

        public ICollection<Answer> Answer { get; set; }
        public ICollection<Photo> Photo { get; set; }
        public ICollection<Question> Question { get; set; }
        public ICollection<Section> Section { get; set; }
        public ICollection<Subsection> Subsection { get; set; }
    }
}
