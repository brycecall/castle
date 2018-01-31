﻿using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Users
    {
        public Users()
        {
            Founders = new HashSet<Founders>();
            Themes = new HashSet<Themes>();
        }

        public int UserId { get; set; }
        public int? UsrOrganizationId { get; set; }
        public string UsrUsername { get; set; }
        public string UsrPassword { get; set; }
        public string UsrFirstName { get; set; }
        public string UsrLastName { get; set; }
        public string UsrPhone { get; set; }
        public string UsrEmail { get; set; }
        public string UsrAddress { get; set; }
        public string UsrCity { get; set; }
        public string UsrState { get; set; }
        public string UsrZip { get; set; }

        public ICollection<Founders> Founders { get; set; }
        public ICollection<Themes> Themes { get; set; }
    }
}