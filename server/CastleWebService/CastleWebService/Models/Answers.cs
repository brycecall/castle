using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Answers
    {
        public Answers()
        {
            Photos = new HashSet<Photos>();
        }

        public int AnswerId { get; set; }
        public int AnsQuestionId { get; set; }
        public int AnsInspectionId { get; set; }
        public string AnsValue { get; set; }
        public string AnsType { get; set; }
        public string AnsSourceType { get; set; }
        public int? AnsChecked { get; set; }
        public int? AnsOrder { get; set; }
        public string AnsAutoComment { get; set; }

        public Inspections AnsInspection { get; set; }
        public Questions AnsQuestion { get; set; }
        public ICollection<Photos> Photos { get; set; }
    }
}
