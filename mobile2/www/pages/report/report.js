// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('report', {
      url: "/report/{insId}",
      templateUrl: "pages/report/report.html",
      controller: "report"
    });
});

app.controller('report', function ($scope, $rootScope, $timeout, $stateParams, $q, $cordovaFile, header_manager, theme_manager, action_manager, inspection_manager) {
  var preview_frame = document.querySelector("#preview");
  var render_frame = document.querySelector("#render");

  $scope.report = null;
  $scope.inspection = null;
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
          $scope.inspection = inspection;

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

  var saveReport = function() {
    var defered = $q.defer();
    
    if (!$scope.report) {
      defered.reject("No report defined.");
    }
    
    var report = $scope.report.replace("data:application/pdf;base64,", '');
    report = base64Blob(report, "application/pdf");
    
    $cordovaFile.writeFile(cordova.file.externalDataDirectory, $scope.inspection.insName + ".pdf", report, true);
    
    return defered.promise;
  };
  
  // SEE: https://ourcodeworld.com/articles/read/230/how-to-save-a-pdf-from-a-base64-string-on-the-device-with-cordova
  var base64Blob = function(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
}
  
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction("Back", "back", function () {
    window.history.back();
  });

  action_manager.disable();
  action_manager.mode = ACTION_MODES.Action;
  action_manager.addAction("Send", 'send', function () {
    saveReport();
    if (window['cordova'] !== undefined && $scope.report) {
      cordova.plugins.email.open({
        body: "Here is your report!!!",
        subject: "Home Inspection Report from Castle",
        attachments: $scope.report.replace("data:application/pdf;base64,", 'base64:Home Inspection.pdf//')
      })
    }
  }, 'md-accent');

  action_manager.addAction("Save", 'save', function () {
    saveReport();
    window.history.back();
  });

});
