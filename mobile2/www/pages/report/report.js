// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('report', {
      url: "/report/{insId}/{quickSend}",
      templateUrl: "pages/report/report.html",
      controller: "report",
      params: {
        'quickSend': 'false'
      }
    });
});

app.controller('report', function ($scope, $rootScope, $sha, $timeout, $interval, $stateParams, $state, $q, $cordovaFile, header_manager, theme_manager, action_manager, inspection_manager) {
  $rootScope.loading = false;
  //var preview_frame = document.querySelector("#preview");
  var render_frame = document.querySelector("#render");
  var inspection_buffer = null;

  var start_time = new Date();
  var end_time = null;

  $scope.report = false;
  $scope.insId = $stateParams.insId;
  $scope.message = null;

  $scope.message = "Getting your template of choice ready...";

  var inspection_promise = inspection_manager.getInspection($scope.insId);
  inspection_promise.then(function (data) {
    var inspection = data.value;

    // Cache all of the images on the filesystem to avoid MemOut Issues
    var cache_promise = storeImageCache(inspection);
    cache_promise.then(function (inspection) {

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

            $scope.report = true;

            if ($stateParams.quickSend != "false") {
              sendEmail();
            }

            action_manager.enable();
          };

          object.go = function (object) {
            $rootScope.loading = true;

            // The object is an inspection
            if (object.sections) {
              $state.go('inspection_wizard', {
                'insId': object.insId
              });
            } else

              // The object is a section
              if (object.subsections) {
                $state.go('inspection_wizard', {
                  'insId': object.inspectionId,
                  'sectionIndex': object.id
                });
              } else

                // The object is a subsection
                if (object.questions) {
                  $state.go('inspection_wizard', {
                    'insId': object.inspectionId,
                    'sectionIndex': object.sectionId,
                    'subsectionIndex': object.id
                  });
                } else

            // The object is a question
            {
              $state.go('inspection_wizard', {
                'insId': object.inspectionId,
                'sectionIndex': object.sectionId,
                'subsectionIndex': object.subsectionId,
                'questionIndex': object.id
              });
            }
          };

          // Put the castle object on the iframe
          render_frame.contentWindow.castle = object;
        }, true);

        render_frame.src = entry_point;
      });
    });
  });

  var storeImageCache = function (template) {
    var defered = $q.defer();

    // Create the cache directory
    $cordovaFile.createDir(cordova.file.cacheDirectory, "images", true)
      .then(function (entry) {

        // Recursive Object Parser
        var parseObject = function (object) {
          var keys = Object.keys(object);
          for (var i = 0; i < keys.length; i++) {
            if (keys[i] == "photos") {
              var photos = object[keys[i]];
              for (var j = 0; j < photos.length; j++) {
                storeImage(photos[j], object, j);
              }
            }

            var buffer = object[keys[i]];
            var type = (buffer ? (typeof buffer).toLowerCase() : null);
            if ((type == "object" || type == "array")) {
              parseObject(object[keys[i]]);
            }
          }
        };

        var worker_counter = 0;
        var storeImage = function (photo, object, loc) {
          $scope.message = "Saving Image " + photo.title;

          if (photo && photo.link && photo.link.indexOf("file") == 0) {
            console.log(photo.link + " has already been saved.  Skipping...");
            return;
          }

          var buffer = {};
          buffer.photo = photo.link.toString(); // Make a deep string copy
          buffer.filename = $sha.hash(photo.link) + ".jpg";

          object.photos[loc].link = entry.nativeURL + buffer.filename;

          var worker = new Worker("pages/report/cache_worker.js");
          worker.onmessage = function (message) {
            console.log(message.data);
            $cordovaFile.writeFile(entry.nativeURL, message.data.filename, message.data.photo, true)
              .then(
                function (image_entry) {
                  worker_counter--;
                },
                function (error) {
                  worker_counter = 0;
                  defered.reject(error);
                });
          }
          worker.onerror = function (error) {
            worker_counter = 0;
            defered.reject(error);
          }
          worker_counter++;
          worker.postMessage(buffer);
        }

        parseObject(template);

        var handle = $interval(
          function () {
            if (worker_counter == 0) {
              $interval.cancel(handle);
              defered.resolve(template);
            }
          }, 300);

      });

    return defered.promise;
  };

  var clearImageCache = function () {
    // TODO
  };

  var sendEmail = function () {
    if (window['cordova'] !== undefined && $scope.report) {
      cordova.plugins.email.open({
        body: "Home Inspection Report created using Castle",
        subject: "Home Inspection Report",
        attachments: cordova.file.externalDataDirectory + inspection_buffer.insName + ".pdf"
      })
    }
  };

  var createPDF = function (callback) {
    $rootScope.loading = true;
    var data = render_frame.contentDocument.querySelector('html').outerHTML;
    
    if (window['pdf'] !== undefined) {
      pdf.htmlToPDF({
        data: data,
        documentSize: "A4",
        landscape: "portrait",
        type: "file",
        fileName: inspection_buffer.insName + ".pdf"
      }, function (data) {
        end_time = new Date();
        console.log("Generation the report took " + (end_time.getTime() - start_time.getTime()) / 1000 + "sec");
        start_time = new Date();
        
        if (callback) {
          callback();
        }
        $rootScope.loading = false;
      }, function (error) {
        $scope.report = false;
        $rootScope.loading = false;
      });
    }
  };
  
  var openPDF = function() {
    cordova.plugins.fileOpener2.open(cordova.file.externalDataDirectory + inspection_buffer.insName + ".pdf", 'application/pdf');
  };
  
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction("Back", "back", function () {
    window.history.back();
  });

  action_manager.disable();
  action_manager.mode = ACTION_MODES.Action;
  action_manager.addAction("Send", 'send', function() {
    createPDF(sendEmail);
  }, 'md-accent');

  action_manager.addAction("Preview", 'search', function () {
    createPDF(openPDF);
  }, 'md-warn');
  
  action_manager.addAction("Edit", 'mode_edit', function () {
    $state.go('inspection_wizard', {
      'insId': inspection_buffer.insId
    });
  });

});
