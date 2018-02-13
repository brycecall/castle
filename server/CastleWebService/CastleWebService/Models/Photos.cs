using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Photos
    {
        public int PhotoId { get; set; }
        public int PhoInspectionId { get; set; }
        public int PhoQuestionId { get; set; }
        public int PhoAnswerId { get; set; }
        public string PhoLink { get; set; }
        public string PhoTitle { get; set; }
        public int? PhoOrder { get; set; }

        public Answers PhoAnswer { get; set; }
        public Inspections PhoInspection { get; set; }
        public Questions PhoQuestion { get; set; }
    }
}
