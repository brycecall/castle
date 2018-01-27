using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Answer
    {
        public Answer()
        {
            Photo = new HashSet<Photo>();
        }

        public int AnswerId { get; set; }
        public int AnsQuestionId { get; set; }
        public int AndInspectionId { get; set; }
        public string AnsValue { get; set; }
        public string AnsType { get; set; }
        public string AnsSourceType { get; set; }
        public int? AnsChecked { get; set; }
        public int? AnsOrder { get; set; }
        public string AnsAutoComment { get; set; }

        public Inspection AndInspection { get; set; }
        public Question AnsQuestion { get; set; }
        public ICollection<Photo> Photo { get; set; }
    }
}
