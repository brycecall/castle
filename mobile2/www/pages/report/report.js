// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('report', {
      url: "/report",
      templateUrl: "pages/report/report.html",
      controller: "report"
    })
    .state('report_send', {
      url: "/report/send",
      templateUrl: "pages/report/report_send.html",
      controller: "report_send"
    });
});

app.factory('report_manager', function ($rootScope, $timeout) {
  var public = {};
  var private = {};

  public.currentReport = {};

  public.getReportAsHTML = function (id, callback) {
    public.currentReport = public.getReport(id);

    // Force the apply phase to run
    $timeout(function () {
      var content = document.querySelector("#render").innerHTML;
      callback(content);
    }, 0);
  }

  public.getReportAsPDF = function (id, callback) {
    public.getReportAsHTML(id, function (data) {
      if (window['pdf'] !== undefined) {
        pdf.htmlToPDF({
          data: "<html>" + data + "</html>",
          documentSize: "A4",
          landscape: "portrait",
          type: "base64"
        }, function (data) {
          data = data.replace('\n', '');
          data = "data:application/pdf;base64," + data;
          callback(data);
        });
      }
    });
  }

  public.getReport = function (id) {
    return {
      item: "TODO: report data here..."
    }
  };

  public.getSection = function (id) {

  };

  public.getQuestion = function (id) {

  };

  return public;
});


app.controller('report', function ($scope, $rootScope, $state, header_manager, report_manager) {
  var preview_frame = document.querySelector("#preview");
  var report = null;

  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction("Back", "back", function () {
    window.history.back();
  });

  report_manager.getReportAsPDF(null, function (data) {
    report = data;
    preview_frame.contentWindow.PDFViewerApplication.open(data);
  })

  $scope.send = function () {
    if (window['cordova'] !== undefined && report) {
      cordova.plugins.email.open({
        body: "Here is your report!!!",
        subject: "Home Inspection Report from Castle",
        attachments: report.replace("data:application/pdf;base64,", 'base64:Home Inspection.pdf//')
      })
    }
  }

  $scope.save = function () {
    window.history.back();
  }

});

app.controller('report_send', function ($scope, $rootScope, header_manager) {
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction("Back", "back", function () {
    window.history.back();
  });

});

app.controller('report_render', function ($scope, $rootScope, report_manager) {
  $scope.data = report_manager.currentReport;
});
