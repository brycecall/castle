using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Reports
    {
        public int ReportId { get; set; }
        public int ReportUserId { get; set; }
        public int ReportOrganizationId { get; set; }
        public string ReportTitle { get; set; }
        public string ReportUnique { get; set; }
        public byte ReportSubmitted { get; set; }
        public DateTime ReportCreatedDate { get; set; }
        public DateTime ReportLastModified { get; set; }
        public byte? ReportIsDeleted { get; set; }

        public Organizations ReportOrganization { get; set; }
        public Users ReportUser { get; set; }
    }
}
