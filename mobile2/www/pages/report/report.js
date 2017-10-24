// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('report', {
      url: "/report/{insId}",
      templateUrl: "pages/report/report.html",
      controller: "report"
    });
});

app.controller('report', function ($scope, $rootScope, $timeout, $stateParams, $state, $q, $cordovaFile, header_manager, theme_manager, action_manager, inspection_manager) {
  $rootScope.loading = false;
  var preview_frame = document.querySelector("#preview");
  var render_frame = document.querySelector("#render");
  var inspection_buffer = null;
  var report_buffer = null;

  var start_time = new Date();
  var end_time = null;

  $scope.report = false;
  $scope.insId = $stateParams.insId;
  $scope.message = null;

  $scope.message = "Getting your template of choice ready...";

  var inspection_promise = inspection_manager.getInspection($scope.insId);
  inspection_promise.then(function (inspection) {

    var theme_promise = theme_manager.getThemeManifest(inspection.insThemeId);
    theme_promise.then(function (manifest) {

      var entry_point = manifest.entry_point;
      if ($rootScope.debug) {
        entry_point = "http://localhost:8080/" + inspection.insThemeId + "/";
      }

      render_frame.addEventListener('load', function (event) {
        end_time = new Date();
        console.log("Loading previewer took " + (end_time.getTime() - start_time.getTime()) / 1000 + "sec");
        start_time = new Date();

        var object = {};
        object.manifest = manifest;
        object.meta = manifest.template;
        object.data = inspection;
        inspection_buffer = inspection;

        object.apply = function () {
          $scope.message = "Doing some more magic...";
          if ($rootScope.debug) {
            return;
          }

          end_time = new Date();
          console.log("Theme application took " + (end_time.getTime() - start_time.getTime()) / 1000 + "sec");
          start_time = new Date();

          var data = render_frame.contentDocument.querySelector('html').outerHTML;

          if (window['pdf'] !== undefined) {
            pdf.htmlToPDF({
              data: data,
              documentSize: "A4",
              landscape: "portrait",
              type: "base64"
            }, function (data) {
              $scope.message = "Saving you a ton of time...";

              end_time = new Date();
              console.log("Generation the report took " + (end_time.getTime() - start_time.getTime()) / 1000 + "sec");
              start_time = new Date();

              data = data.replace('\n', '');
              data = "data:application/pdf;base64," + data;
              $scope.report = true;
              report_buffer = data;

              saveReport().then(
                function (result) {
                  end_time = new Date();
                  console.log("Saving the report took " + (end_time.getTime() - start_time.getTime()) / 1000 + "sec");
                  start_time = new Date();

                  preview_frame.contentWindow.PDFViewerApplication.open(cordova.file.externalDataDirectory + inspection_buffer.insName + ".pdf");

                  end_time = new Date();
                  console.log("Rendering the preview took " + (end_time.getTime() - start_time.getTime()) / 1000 + "sec");
                  start_time = new Date();

                  action_manager.enable();
                },
                function (error) {
                  console.error(error);
                  $scope.report = false;
                  report_buffer = null;
                });

            }, function (error) {
              $scope.report = false;
              report_buffer = null;
            });
          }
        };

        // But the castle object on the iframe
        render_frame.contentWindow.castle = object;
      }, true);

      render_frame.src = entry_point;
    });
  });

  var saveReport = function () {
    var defered = $q.defer();

    if (!$scope.report) {
      defered.reject("No report defined.");
    }

    var report = report_buffer.replace("data:application/pdf;base64,", '');
    report = base64Blob(report, "application/pdf");

    $cordovaFile.writeFile(cordova.file.externalDataDirectory, inspection_buffer.insName + ".pdf", report, true)
      .then(function (result) {
        defered.resolve(result);
      }, function (error) {
        defered.reject(error);
      });

    return defered.promise;
  };

  // SEE: https://ourcodeworld.com/articles/read/230/how-to-save-a-pdf-from-a-base64-string-on-the-device-with-cordova
  var base64Blob = function (b64Data, contentType, sliceSize) {
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

    var blob = new Blob(byteArrays, {
      type: contentType
    });
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
        attachments: report_buffer.replace("data:application/pdf;base64,", 'base64:Home Inspection.pdf//')
      })
    }
  }, 'md-accent');

  action_manager.addAction("Edit", 'mode_edit', function () {
    $state.go('inspection_section', {
      'insId': inspection_buffer.insId
    });
  });

});
