using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Threading.Tasks;


namespace CastleWebService.Models
{

    [ModelMetadataTypeAttribute(typeof(InspectionsMetaData))]
    public partial class Inspections
    {
    }

    public class InspectionsMetaData
    {
        //[JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        //public int InspectionId { get; set; }
        [JsonIgnore]
        public DateTime InsLastModified { get; set; }
        [JsonIgnore]
        public DateTime? InsLastSubmitted { get; set; }
        [JsonProperty(PropertyName = "guid")]
        public string InsGuid { get; set; }
        [JsonProperty(PropertyName = "hash")]
        public string InsHash { get; set; }
        [JsonIgnore]
        [NotMapped]
        public ICollection<Answers> Answers { get; set; }
        [JsonIgnore]
        [NotMapped]
        public ICollection<Photos> Photos { get; set; }
        [JsonIgnore]
        [NotMapped]
        public ICollection<Questions> Questions { get; set; }
        [JsonIgnore]
        [NotMapped]
        public ICollection<Subsections> Subsections { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "insId")]
        public int InspectionId {get; set;}

        // extra fields
        //[JsonExtensionData]
        //private IDictionary<string, JToken> _catchAll;
    }

    [ModelMetadataTypeAttribute(typeof(SectionsMetaData))]
    public partial class Sections
    {
    }

    public class SectionsMetaData
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "id")]
        public int SectionId { get; set; }
        [JsonProperty(PropertyName = "title")]
        public string SecTitle { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "inspectionId")]
        public int SecInspectionId { get; set; }
        [JsonProperty(PropertyName = "order")]
        public int? SecOrder { get; set; }
        [ForeignKey("SecInspectionId")]
        [NotMapped]
        public Inspections SecInspection { get; set; }
        public ICollection<Subsections> Subsections { get; set; }
    }

    [ModelMetadataTypeAttribute(typeof(SubsectionsMetaData))]
    public partial class Subsections
    {
    }

    public class SubsectionsMetaData
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "id")]
        public int SubsectionId { get; set; }
        [JsonProperty(PropertyName = "title")]
        public string SusTitle { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "sectionId")]
        public int SusSectionId { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "inspectionId")]
        public int SusInspectionId { get; set; }
        [JsonProperty(PropertyName = "order")]
        public int? SusOrder { get; set; }

        [ForeignKey("SusSectionId")]
        [NotMapped]
        public Sections SusSection { get; set; }
        public ICollection<Questions> Questions { get; set; }
        [ForeignKey("SusInspectionId")]
        [NotMapped]
        public Inspections SusInspection { get; set; }

    }

    [ModelMetadataTypeAttribute(typeof(QuestionsMetaData))]
    public partial class Questions
    {
    }

    public class QuestionsMetaData
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "id")]
        public int QuestionId { get; set; }
        [JsonProperty(PropertyName = "title")]
        public string QueTitle { get; set; }
        [JsonProperty(PropertyName = "description")]
        public string QueDescription { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "subsectionId")]
        public int QueSubSectionId { get; set; }
        [JsonProperty(PropertyName = "isAnswered")]
        public int? QueAnswered { get; set; }
        [JsonProperty(PropertyName = "type")]
        public string QueType { get; set; }
        public int? QueRequired { get; set; }
        public int? QueMin { get; set; }
        public int? QueMax { get; set; }
        public string QueValidationType { get; set; }
        [JsonProperty(PropertyName = "notApplicable")]
        public int? QueNotApplicable { get; set; }
        [JsonProperty(PropertyName = "showSummaryRemark")]
        public int? QueShowSummaryRemark { get; set; }
        [JsonProperty(PropertyName = "showDescription")]
        public int? QueShowDescription { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "inspectionId")]
        public int QueInspectionId { get; set; }
        [JsonProperty(PropertyName = "order")]
        public int? QueOrder { get; set; }
        [JsonProperty(PropertyName = "comments")]
        public string QueComments { get; set; }
        [JsonProperty(PropertyName = "privateNotes")]
        public string QuePrivateNotes { get; set; }

        [ForeignKey("QueSubSectionId")]
        [NotMapped]
        public Subsections QueSubSection { get; set; }
        [JsonProperty(PropertyName = "values")]
        public ICollection<Answers> Answers { get; set; }
        public ICollection<Photos> Photos { get; set; }
        [ForeignKey("QueInspectionId")]
        [NotMapped]
        public Inspections QueInspection { get; set; }
    }

    [ModelMetadataTypeAttribute(typeof(PhotosMetaData))]
    public partial class Photos
    {
    }

    public class PhotosMetaData
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "id")]
        public int PhotoId { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "inspectionId")]
        public int PhoInspectionId { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "questionId")]
        public int PhoQuestionId { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "answerId")]
        public int PhoAnswerId { get; set; }
        public string PhoLink { get; set; }
        public string PhoTitle { get; set; }
        public string PhoSourceType { get; set; }
        public int? PhoOrder { get; set; }
        [ForeignKey("PhoAnswerId")]
        [NotMapped]
        public Answers PhoAnswer { get; set; }
        [ForeignKey("PhoInspectionId")]
        [NotMapped]
        public Inspections PhoInspection { get; set; }
        [ForeignKey("PhoQuestionId")]
        public Questions PhoQuestion { get; set; }
    }

    [ModelMetadataTypeAttribute(typeof(AnswersMetaData))]
    public partial class Answers
    {
    }

    public class AnswersMetaData
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "id")]
        public int AnswerId { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "questionId")]
        public int AnsQuestionId { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "inspectionId")]
        public int AnsInspectionId { get; set; }
        [JsonProperty(PropertyName = "key")]
        public string AnsValue { get; set; }
        [JsonProperty(PropertyName = "type")]
        public string AnsType { get; set; }
        [JsonProperty(PropertyName = "checked")]
        public int? AnsChecked { get; set; }
        [JsonProperty(PropertyName = "order")]
        public int? AnsOrder { get; set; }
        [JsonProperty(PropertyName = "autoComment")]
        public string AnsAutoComment { get; set; }

        [ForeignKey("AnsQuestionId")]
        [NotMapped]
        public Questions AnsQuestion { get; set; }
        public ICollection<Photos> Photos { get; set; }
        [ForeignKey("AnsInspectionId")]
        [NotMapped]
        public Inspections AnsInspection { get; set; }
    }

    [ModelMetadataTypeAttribute(typeof(ThemesMetaData))]
    public partial class Themes
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "blob")]
        [NotMapped]
        public string blobStream { get; set; }
    }

    public class ThemesMetaData
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "Id")]
        public int ThemeId { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "UserId")]
        public int ThemeUserId { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "OrganizationId")]
        public int ThemeOrganizationId { get; set; }

        [JsonProperty(PropertyName = "title")]
        public string ThemeTitle { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "blob")]
        [NotMapped]
        public string blobStream { get; set; }

        [JsonProperty(PropertyName = "isDeleted")]
        public byte? ThemeIsDeleted { get; set; }

        [JsonProperty(PropertyName = "db_last_modified")]
        public DateTime ThemeLastModified { get; set; }

        [JsonProperty(PropertyName = "unique")]
        public string ThemeUnique { get; set; }

        [JsonProperty(PropertyName = "hash")]
        public string ThemeHash { get; set; }

        [JsonProperty(PropertyName = "version")]
        public string ThemeVersion { get; set; }

        [JsonProperty(PropertyName = "date_created")]
        public DateTime? ThemeCreatedDate { get; set; }

        [JsonProperty(PropertyName = "last_modified")]
        public DateTime? ThemeLastClientModified { get; set; }

        [ForeignKey("ThemeOrganizationId")]
        [NotMapped]
        [JsonIgnore]
        public Organizations ThemeOrganization { get; set; }

        [ForeignKey("ThemeUserId")]
        [NotMapped]
        [JsonIgnore]
        public Users ThemeUser { get; set; }
    }


    [ModelMetadataTypeAttribute(typeof(ReportsMetaData))]
    public partial class Reports
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "blob")]
        [NotMapped]
        public string blobStream { get; set; }
    }

    public class ReportsMetaData
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "Id")]
        public int ReportId { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "UserId")]
        public int ReportUserId { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "OrganizationId")]
        public int ReportOrganizationId { get; set; }
        [JsonProperty(PropertyName = "title")]
        public string ReportTitle { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "blob")]
        [NotMapped]
        public string blobStream { get; set; }
        [JsonProperty(PropertyName = "unique")]
        public string ReportUnique { get; set; }
        public byte ReportSubmitted { get; set; }
        [JsonProperty(PropertyName = "date_created")]
        public DateTime ReportCreatedDate { get; set; }
        [JsonProperty(PropertyName = "db_last_modified")]
        public DateTime ReportLastModified { get; set; }
        [JsonProperty(PropertyName = "isDeleted")]
        public byte? ReportIsDeleted { get; set; }

        [ForeignKey("ReportOrganizationId")]
        [NotMapped]
        [JsonIgnore]
        public Organizations ReportOrganization { get; set; }

        [ForeignKey("ThemeUserId")]
        [NotMapped]
        [JsonIgnore]
        public Users ReportUser { get; set; }
    }

} // End Namespace
