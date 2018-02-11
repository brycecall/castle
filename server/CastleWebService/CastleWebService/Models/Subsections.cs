using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Subsections
    {
        public Subsections()
        {
            Questions = new HashSet<Questions>();
        }

        public int SubsectionId { get; set; }
        public string SusTitle { get; set; }
        public int SusSectionId { get; set; }
        public int SusInspectionId { get; set; }
        public int? SusOrder { get; set; }

        public Sections SusSection { get; set; }
        public ICollection<Questions> Questions { get; set; }
    }
}
