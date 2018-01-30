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
    [ModelMetadataType(typeof(InspectionsMetaData))]
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
        


        // extra fields
        //[JsonExtensionData]
        //private IDictionary<string, JToken> _catchAll;
    }


}
