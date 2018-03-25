using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Organizations
    {
        public Organizations()
        {
            Reports = new HashSet<Reports>();
        }

        public int OrganizationId { get; set; }
        public string OrgName { get; set; }
        public string OrgState { get; set; }
        public string OrgCity { get; set; }
        public string OrgAddress { get; set; }
        public string OrgZipCode { get; set; }
        public string OrgLogo { get; set; }
        public DateTime OrgLastModifed { get; set; }
        public byte? OrgIsDeleted { get; set; }

        public ICollection<Reports> Reports { get; set; }
    }
}
