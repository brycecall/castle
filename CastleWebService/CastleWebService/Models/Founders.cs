using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Founders
    {
        public int FoundersId { get; set; }
        public string FoKey { get; set; }
        public int? FoUsersId { get; set; }

        public Users FoUsers { get; set; }
    }
}
