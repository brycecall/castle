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

app.controller('report', function ($scope, $rootScope, $state, $q, $timeout, header_manager, theme_manager) {
  var preview_frame = document.querySelector("#preview");
  var render_frame = document.querySelector("#render");

  $scope.report = null;

  var entry_promise = theme_manager.getThemeEntryPoint("fidelity_residential");

  entry_promise.then(function (entry_point) {
    var entry_point = entry_point;
    var manifest_promise = theme_manager.getThemeManifest("fidelity_residential");

    manifest_promise.then(function (manifest) {
      render_frame.addEventListener('load', function (event) {
        var object = {};
        object.manifest = manifest;
        object.data = {};

        object.apply = function () {
          // Timeout to force render
          $timeout(function () {
            var data = render_frame.contentDocument.querySelector('html').outerHTML;

            if (window['pdf'] !== undefined) {
              pdf.htmlToPDF({
                data: data,
                documentSize: "A4",
                landscape: "portrait",
                type: "base64"
              }, function (data) {
                data = data.replace('\n', '');
                data = "data:application/pdf;base64," + data;
                $scope.report = data;
                preview_frame.contentWindow.PDFViewerApplication.open(data);
              });
            }
          }, 500);
        }

        // But the castle object on the iframe
        render_frame.contentWindow.castle = object;
      }, true);

      render_frame.src = entry_point;
    });
  });

  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction("Back", "back", function () {
    window.history.back();
  });



  $scope.send = function () {
    if (window['cordova'] !== undefined && report) {
      cordova.plugins.email.open({
        body: "Here is your report!!!",
        subject: "Home Inspection Report from Castle",
        attachments: $scope.report.replace("data:application/pdf;base64,", 'base64:Home Inspection.pdf//')
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
