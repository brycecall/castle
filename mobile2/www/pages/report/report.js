// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('report', {
      url: "/report/{insId}",
      templateUrl: "pages/report/report.html",
      controller: "report"
    });
});

app.controller('report', function ($scope, $rootScope, $timeout, $stateParams, header_manager, theme_manager, action_manager, inspection_manager) {
  var preview_frame = document.querySelector("#preview");
  var render_frame = document.querySelector("#render");

  $scope.report = null;
  $scope.insId = $stateParams.insId;

  // TODO: This is currently hard coded
  var entry_promise = theme_manager.getThemeEntryPoint("a94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde8");

  entry_promise.then(function (entry_point) {
    var entry_point = entry_point;
    // TODO: This is currently hard coded
    var manifest_promise = theme_manager.getThemeManifest("a94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde8");

    manifest_promise.then(function (manifest) {
      var inspection_promise = inspection_manager.getInspection($scope.insId);

      inspection_promise.then(function (inspection) {
        render_frame.addEventListener('load', function (event) {
          var object = {};
          object.manifest = manifest;
          object.meta = manifest.template;
          object.data = inspection;

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
                  action_manager.enable();
                }, function (error) {
                  $scope.report = "null";
                });
              }
            }, 500);
          }

          // But the castle object on the iframe
          render_frame.contentWindow.castle = object;
        }, true);

        render_frame.src = entry_point;
      })
    });
  });

  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction("Back", "back", function () {
    window.history.back();
  });

  action_manager.disable();
  action_manager.mode = ACTION_MODES.Action;
  action_manager.addAction("Send", 'send', function () {
    if (window['cordova'] !== undefined && $scope.report) {
      cordova.plugins.email.open({
        body: "Here is your report!!!",
        subject: "Home Inspection Report from Castle",
        attachments: $scope.report.replace("data:application/pdf;base64,", 'base64:Home Inspection.pdf//')
      })
    }
  }, 'md-accent');

  action_manager.addAction("Save", 'save', function () {
    window.history.back();
  });

});
