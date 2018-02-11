using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Reflection;
using Microsoft.Extensions.Caching.Memory;

namespace CastleWebService
{

    public class ModelMetadataTypeAttributeContractResolver : DefaultContractResolver
    {
        private IMemoryCache _cache = new MemoryCache(new MemoryCacheOptions());
        IList<JsonProperty> _jsonProperties = new List<JsonProperty>();

        public ModelMetadataTypeAttributeContractResolver()
        {
            // Default from https://github.com/aspnet/Mvc/blob/dev/src/Microsoft.AspNetCore.Mvc.Formatters.Json/JsonSerializerSettingsProvider.cs
            this.NamingStrategy = new CamelCaseNamingStrategy();
        }

        const string ModelMetadataTypeAttributeName = "Microsoft.AspNetCore.Mvc.ModelMetadataTypeAttribute";
        const string ModelMetadataTypeAttributeProperty = "MetadataType";

        protected override IList<JsonProperty> CreateProperties(Type type, MemberSerialization memberSerialization)
        {
            // Look for cache key
            if (!_cache.TryGetValue(type, out _jsonProperties))
            {

                // Set cache options to never remove
                var cacheEntryOptions = new MemoryCacheEntryOptions().SetPriority(CacheItemPriority.NeverRemove);

                _jsonProperties = base.CreateProperties(type, memberSerialization);

                var propertyOverrides = GetModelMetadataTypes(type)
                    .SelectMany(t => t.GetProperties())
                    .ToLookup(p => p.Name, p => p);

                foreach (var property in _jsonProperties)
                {
                    var metaProperty = propertyOverrides[property.UnderlyingName].FirstOrDefault();
                    if (metaProperty != null)
                    {
                        // track property name
                        var jsonPropertyAttribute = metaProperty.GetCustomAttributes<JsonPropertyAttribute>().FirstOrDefault();
                        if (jsonPropertyAttribute != null)
                        {
                            property.PropertyName = jsonPropertyAttribute.PropertyName;
                            property.NullValueHandling = jsonPropertyAttribute.NullValueHandling;
                        }
                        // track ignore attribute
                        var jsonIgnoreAttribute = metaProperty.GetCustomAttributes<JsonIgnoreAttribute>().FirstOrDefault();
                        if (jsonIgnoreAttribute != null) {

                            property.Ignored = true;
                        }
                        // can track more if needs be
                    }
                }

                // Save data in cache
                _cache.Set(type, _jsonProperties, cacheEntryOptions);
            }

            return _jsonProperties;
        }

        static Type GetModelMetadataType(Attribute attribute)
        {
            var type = attribute.GetType();
            if (type.FullName == ModelMetadataTypeAttributeName)
            {
                var property = type.GetProperty(ModelMetadataTypeAttributeProperty);
                if (property != null && property.CanRead)
                {
                    return property.GetValue(attribute, null) as Type;
                }
            }
            return null;
        }

        static Type[] GetModelMetadataTypes(Type type)
        {
            var query = from t in type.BaseTypesAndSelf()
                        from a in t.GetCustomAttributes(false).Cast<System.Attribute>()
                        let metaType = GetModelMetadataType(a)
                        where metaType != null
                        select metaType;
            return query.ToArray();
        }
    }

    public static partial class TypeExtensions
    {
        public static IEnumerable<Type> BaseTypesAndSelf(this Type type)
        {
            while (type != null)
            {
                yield return type;
                type = type.BaseType;
            }
        }
    }

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMemoryCache();
            services.AddCors();
            services.AddMvc().AddJsonOptions(o =>
            {
                o.SerializerSettings.ContractResolver = new ModelMetadataTypeAttributeContractResolver();
                //o.SerializerSettings.ContractResolver = new Newtonsoft.Json.Serialization.DefaultContractResolver();
               // o.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.Objects;
            }
            );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            app.UseMvc();
        }
    }
    
}
