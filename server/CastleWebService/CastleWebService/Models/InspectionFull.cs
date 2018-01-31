using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
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

        public int SectionId { get; set; }
        public string SecTitle { get; set; }

        public int SecInspectionId { get; set; }
        public string SecSourceType { get; set; }
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

        public int SubsectionId { get; set; }
        public string SusTitle { get; set; }
        public int SusSectionId { get; set; }
        public int SusInspectionId { get; set; }
        public string SusSourceType { get; set; }
        public int? SusOrder { get; set; }

        [ForeignKey("SusSectionId")]
        [NotMapped]
        public Sections SusSection { get; set; }
        public ICollection<Questions> Questions { get; set; }

    }

    [ModelMetadataTypeAttribute(typeof(QuestionsMetaData))]
    public partial class Questions
    {
    }

    public class QuestionsMetaData
    {

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

        [ForeignKey("QueSubSectionId")]
        [NotMapped]
        public Subsections QueSubSection { get; set; }
        public ICollection<Answers> Answers { get; set; }
        public ICollection<Photos> Photos { get; set; }
    }

    [ModelMetadataTypeAttribute(typeof(PhotosMetaData))]
    public partial class Photos
    {
    }

    public class PhotosMetaData
    {
        public int PhotoId { get; set; }
        public int PhoInspectionId { get; set; }
        public int PhoQuestionId { get; set; }
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
        public int AnswerId { get; set; }
        public int AnsQuestionId { get; set; }
        public int AnsInspectionId { get; set; }
        public string AnsValue { get; set; }
        public string AnsType { get; set; }
        public string AnsSourceType { get; set; }
        public int? AnsChecked { get; set; }
        public int? AnsOrder { get; set; }
        public string AnsAutoComment { get; set; }

        [ForeignKey("AnsQuestionId")]
        [NotMapped]
        public Questions AnsQuestion { get; set; }
        public ICollection<Photos> Photos { get; set; }
    }



} // End Namespace
