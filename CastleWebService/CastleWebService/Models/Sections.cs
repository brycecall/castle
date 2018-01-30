using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Sections
    {
        public Sections()
        {
            Subsections = new HashSet<Subsections>();
        }

        public int SectionId { get; set; }
        public string SecTitle { get; set; }
        public int SecInspectionId { get; set; }
        public string SecSourceType { get; set; }
        public int? SecOrder { get; set; }

        public Inspections SecInspection { get; set; }
        public ICollection<Subsections> Subsections { get; set; }
    }
}
