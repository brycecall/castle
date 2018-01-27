using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Section
    {
        public Section()
        {
            Subsection = new HashSet<Subsection>();
        }

        public int SectionId { get; set; }
        public string SecTitle { get; set; }
        public int SecInspectionId { get; set; }
        public string SecSourceType { get; set; }
        public int? SecOrder { get; set; }

        public Inspection SecInspection { get; set; }
        public ICollection<Subsection> Subsection { get; set; }
    }
}
