﻿using System;
using System.Collections.Generic;

namespace CastleWebService.Models
{
    public partial class Inspections
    {
        public Inspections()
        {
            Answers = new HashSet<Answers>();
            Photos = new HashSet<Photos>();
            Questions = new HashSet<Questions>();
            Sections = new HashSet<Sections>();
            Subsections = new HashSet<Subsections>();
        }

        public int InspectionId { get; set; }
        public int InsUserId { get; set; }
        public string InsName { get; set; }
        public string InsSourceType { get; set; }
        public DateTime InsLastModified { get; set; }
        public DateTime? InsLastSubmitted { get; set; }
        public int? InsThemeId { get; set; }
        public string InsThemeResponseBlob { get; set; }
        public string InsTemplateResponseBlob { get; set; }
        public int? InsOrganizationId { get; set; }
        public int? InsTemplateId { get; set; }
        public string InsTemplateTitle { get; set; }
        public byte? InsIsDeleted { get; set; }

        public ICollection<Answers> Answers { get; set; }
        public ICollection<Photos> Photos { get; set; }
        public ICollection<Questions> Questions { get; set; }
        public ICollection<Sections> Sections { get; set; }
        public ICollection<Subsections> Subsections { get; set; }
    }
}