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