using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Questions
    {
        public Questions()
        {
            Answers = new HashSet<Answers>();
            Photos = new HashSet<Photos>();
        }

        public int QuestionId { get; set; }
        public string QueTitle { get; set; }
        public string QueDescription { get; set; }
        public int QueSubSectionId { get; set; }
        public int? QueAnswered { get; set; }
        public string QueType { get; set; }
        public int? QueRequired { get; set; }
        public int? QueMin { get; set; }
        public int? QueMax { get; set; }
        public string QueValidationType { get; set; }
        public int? QueNotApplicable { get; set; }
        public int? QueShowSummaryRemark { get; set; }
        public int? QueShowDescription { get; set; }
        public int QueInspectionId { get; set; }
        public string QueSourceType { get; set; }
        public int? QueOrder { get; set; }
        public string QueComments { get; set; }
        public string QuePrivateNotes { get; set; }

        public Subsections QueSubSection { get; set; }
        public ICollection<Answers> Answers { get; set; }
        public ICollection<Photos> Photos { get; set; }
    }
}
