using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class AutoComment
    {
        public int AutoCommentId { get; set; }
        public int AcUserId { get; set; }
        public string AcKey { get; set; }
        public string AcAutoComment { get; set; }

        public Users AcUser { get; set; }
    }
}
