using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CastleWebService.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Newtonsoft.Json;

namespace CastleWebService.Models
{
    [Produces("application/json")]
    [Route("api/Report")]
    public class ReportController : Controller
    {
        castle_devContext _db = new castle_devContext();
        string _connectionString = "DefaultEndpointsProtocol=https;AccountName=castlestorage;" +
"AccountKey=7WUUpnfvNLtliiWew3Yx/KhnRHDAFWtIpPHGt6SIfNHXD1A5cqG8R+Of8sDnlSeMoQtzm7uyBOBi1spYuQXF/w==;" +
"EndpointSuffix=core.windows.net";

        #region READ Reports

        [HttpGet("api/v1/reports/")]
        public async Task<IEnumerable<Reports>> GetReportsAsync(int userId)
        {
            var query = _db.Reports.Where(x => x.ReportUserId == userId
                                        && (x.ReportIsDeleted == 0 || x.ReportIsDeleted == null)
                                 ).ToList();

            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(_connectionString);
            CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
            CloudBlobContainer blobContainer = blobClient.GetContainerReference(InspectionController.REPORT);
            for (var i = 0; i < query.Count(); i++)
            {
                var report = query[i];
                var blob = blobContainer.GetBlobReference(report.ReportUnique);
                var blobStream = new MemoryStream();
                await blob.DownloadToStreamAsync(blobStream);
                byte[] byteBlob = blobStream.ToArray();
                query[i].blobStream = Encoding.UTF8.GetString(byteBlob);
            }

            return query;
        }

        [HttpGet("api/v1/report/")]
        public async Task<Reports> GetReportAsync(string guid, int userId)
        {
            var query = _db.Reports.Where(x => x.ReportUserId == userId
                                        && (x.ReportIsDeleted == 0 || x.ReportIsDeleted == null)
                                        && x.ReportUnique == guid
                                 ).FirstOrDefault();

            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(_connectionString);
            CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
            CloudBlobContainer blobContainer = blobClient.GetContainerReference(InspectionController.REPORT);
            var report = query;
            var blob = blobContainer.GetBlobReference(report.ReportUnique);
            var blobStream = new MemoryStream();
            await blob.DownloadToStreamAsync(blobStream);
            byte[] byteBlob = blobStream.ToArray();
            query.blobStream = Encoding.UTF8.GetString(byteBlob);

            return query;
        }

        #endregion

        #region CREATE Reports
        [HttpPost("api/v1/addreport/")]
        public async Task<CastleData> AddReport(IFormFile file, Reports report, int userId)
        {
            string containerName = InspectionController.REPORT;
            var result = new CastleData();
            try
            {
                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new ModelMetadataTypeAttributeContractResolver()
                };

                if (file != null && file.Length != 0)
                {
                    var guid = new Guid().ToString();
                    var FileStream = file.OpenReadStream();
                    CloudStorageAccount storageAccount = CloudStorageAccount.Parse(_connectionString);
                    CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                    CloudBlobContainer blobContainer = blobClient.GetContainerReference(containerName);
                    await blobContainer.CreateIfNotExistsAsync();
                    CloudBlockBlob blob = blobContainer.GetBlockBlobReference(report.ReportUnique);
                    await blob.UploadFromStreamAsync(FileStream);

                    var existingReport = _db.Reports.Where(x => x.ReportUnique == report.ReportUnique
                                                         && x.ReportUserId == userId)
                                                  .FirstOrDefault();
                    report.ReportUserId = userId;
                    if (existingReport != null)
                    {
                        report.ReportId = existingReport.ReportId; // Make sure ID doesn't change
                        existingReport.ReportUnique = existingReport.ReportUnique;
                        existingReport.ReportLastModified = DateTime.UtcNow;
                        _db.Entry(existingReport).CurrentValues.SetValues(report); // Update values from one to another
                    }
                    else
                    {
                        _db.Add(report);
                    }

                    await Task.Factory.StartNew(() =>
                    {
                        _db.SaveChanges();
                        result.data = 0;
                        result.message = "Success";
                    });
                }

            }
            catch (Exception e)
            {
                result = new CastleData { message = e.Message, data = -1 };
            }

            return result;
        }


        #endregion

    }
}