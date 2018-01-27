using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Photo
    {
        public int PhotoId { get; set; }
        public int PhoInspectionId { get; set; }
        public int PhoQuestionId { get; set; }
        public int PhoAnswerId { get; set; }
        public string PhoLink { get; set; }
        public string PhoTitle { get; set; }
        public string PhoSourceType { get; set; }
        public int? PhoOrder { get; set; }

        public Answer PhoAnswer { get; set; }
        public Inspection PhoInspection { get; set; }
        public Question PhoQuestion { get; set; }
    }
}
