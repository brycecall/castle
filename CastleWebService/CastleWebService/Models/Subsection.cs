using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Subsection
    {
        public Subsection()
        {
            Question = new HashSet<Question>();
        }

        public int SubsectionId { get; set; }
        public string SusTitle { get; set; }
        public int SusSectionId { get; set; }
        public int SusInspectionId { get; set; }
        public string SusSourceType { get; set; }
        public int? SusOrder { get; set; }

        public Inspection SusInspection { get; set; }
        public Section SusSection { get; set; }
        public ICollection<Question> Question { get; set; }
    }
}
