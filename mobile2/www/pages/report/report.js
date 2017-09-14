// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('report', {
      url: "/report",
      templateUrl: "pages/report/report.html",
      controller: "report"
    })
    .state('report_render', {
      url: "/report/render",
      templateUrl: "pages/report/report_render.html",
      controller: "report_render"
    })
    .state('report_send', {
      url: "/report/send",
      templateUrl: "pages/report/report_send.html",
      controller: "report_send"
    });
});

app.controller('report', function ($scope, $rootScope, $sce, $document) {
  var preview_frame = document.querySelector("#preview");
  var pdf_data = null;

  if (window['pdf'] !== undefined) {
    pdf.htmlToPDF({
      data: "<html>" + +"</html>",
      documentSize: "A4",
      landscape: "portrait",
      type: "base64"
    }, function (data) {
      data = data.replace('\n', '');
      pdf_data = "data:application/pdf;base64," + data;
      preview_frame.contentWindow.PDFViewerApplication.open(pdf_data);
    });
  }

});

app.controller('report_send', function ($scope, $rootScope) {

});

app.controller('report_render', function ($scope, $rootScope) {

});
