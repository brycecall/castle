app.factory('export_manager', function ($rootScope, $cordovaFile, $sha, $q, theme_manager, inspection_manager) {
  var public = {};
  var private = {};

  private.session_id = null;
  private.session_path = null;

  public.export = function (resource, type) {
    private.session_id = $sha.hash(resource.toString()).substr(0, 12);
    private.session_path = cordova.file.cacheDirectory + private.session_id;
    var promise = null;

    $cordovaFile.createDir(cordova.file.cacheDirectory, private.session_id, true)
      .then(function () {

        switch (type) {
          case "inspection":
            if (!resource.insId)
              promise = private.saveInspection(resource);
            else
              promise = private.saveInspection(resource.insId);
            break;
          case "template":
            if (!resource.insId)
              promise = private.saveTemplate(resource);
            else
              promise = private.saveTemplate(resource.insId);
            break;
          case "theme":
            if (!resource.unique)
              promise = private.saveTheme(resource);
            else
              promise = private.saveTheme(resource.unique);
            break;
          default:
            throw type + " is not a valid export type.";
            break;
        }

        promise.then(function (result) {
          JJzip.zip(private.session_path, {
              target: cordova.file.externalDataDirectory,
              name: private.session_id
            },
            function (result) {
              $cordovaFile.copyFile(cordova.file.externalDataDirectory, private.session_id + ".zip", cordova.file.externalDataDirectory, private.session_id + ".castle")
                .then(
                  function (result) {
                    console.log(result);
                    if (window['cordova'] !== undefined && result) {
                      cordova.plugins.email.open({
                          attachments: cordova.file.externalDataDirectory + private.session_id + ".castle"
                        },
                        function (result) {
                          $cordovaFile.removeRecursively(cordova.file.cacheDirectory, private.session_id);
                          $cordovaFile.removeFile(cordova.file.externalDataDirectory, private.session_id + ".zip");
                          $cordovaFile.removeFile(cordova.file.externalDataDirectory, private.session_id + ".castle");

                          private.session_id = null;
                          private.session_path = null;
                        }
                      );
                    }
                  }
                );
            },
            function (error) {
              console.error(error);
              private.session_id = null;
              private.session_path = null;
            });
        });
      });
  }

  public.import = function (file) {
    // TODO: make this work
  }

  private.saveInspection = function (insId) {
    var defered = $q.defer();
    var templateId = null;
    var themeId = null;

    var inspection_promise = inspection_manager.getInspection(insId);
    inspection_promise.then(
      function (inspection) {
        templateId = inspection.insTemplateId;
        themeId = inspection.insThemeId;

        // Make sure the DB is in sync with the exporting inspection
        // TODO: inspection_manager.updateInspection();

        $cordovaFile.writeFile(private.session_path + "/", "inspection.json", JSON.stringify(inspection), true)
          .then(
            function (result) {
              private.saveTemplate(templateId)
                .then(
                  function (result) {
                    private.saveTheme(themeId)
                      .then(
                        function (result) {
                          defered.resolve(result);
                        }
                      )
                  }
                )
            },
            function (error) {
              defered.reject(error);
            })
      },
      function (error) {
        defered.reject(error);
      })

    return defered.promise;
  };

  private.saveTemplate = function (insId) {
    var defered = $q.defer();

    var template_promise = inspection_manager.getInspection(insId);
    template_promise.then(
      function (template) {
        $cordovaFile.writeFile(private.session_path + "/", "template.json", JSON.stringify(template), true)
          .then(
            function (result) {
              defered.resolve(result);
            },
            function (error) {
              defered.reject(error);
            }
          )
      },
      function (error) {
        defered.reject(error);
      })

    return defered.promise;
  };

  private.saveTheme = function (unique) {
    if (!private.session_id) {
      return;
    }

    return $cordovaFile.copyDir(cordova.file.dataDirectory + "themes/", unique, private.session_path + "/", "theme");
  };

  return public;
});
