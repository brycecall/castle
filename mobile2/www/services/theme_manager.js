app.factory('theme_manager', function ($rootScope, $http, $window, $sce, $q) {
  var public = {};
  var private = {};

  private.themeRoot = "themes";

  public.current = null;

  public.update = function () {
    var defered = $q.defer();

    if (window['cordova'] == undefined) {
      // Desktop Browser Implementation
      defered.resolve(["a94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde8", "b94d27b9934d3e08a52e52d7da7dabfac484ef237a5380ee9088f7ace2efcde1"]);

    } else {
      // Device Implementation
      var file_system = resolveLocalFileSystemURL;
      var path = cordova.file.applicationDirectory + "www/themes/";

      var result = file_system(path, function (fileSystem) {
        var reader = fileSystem.createReader();
        reader.readEntries(success, error);
      }, error);

      var success = function (files) {
        var themes = [];
        for (var index in files) {
          themes.push(files[index].name);
        }
        private.updateThemeDatabase(themes);
      };

      var error = function (err) {
        defered.reject(err);
      }
    }

    return defered.promise;
  }

  private.updateThemeDatabase = function (theme) {
    // TODO: Perform the Update to the DB here
  }

  public.getThemes = function () {
    var defered = $q.defer();

    return defered.promise;
  }

  public.getThemeManifest = function (key) {
    var defered = $q.defer();
    var resource = private.themeRoot + "/" + key + "/manifest.json";
    $sce.trustAsUrl(resource);

    $http.get(resource)
      .then(function (response) {
          response.data['entry_point'] = private.themeRoot + "/" + key + "/" + response.data['entry_point'];
          response.data['preview'] = private.themeRoot + "/" + key + "/" + response.data['preview'];
          response.data['thumbnail'] = private.themeRoot + "/" + key + "/" + response.data['thumbnail'];
          public.current = response;
          defered.resolve(response.data);
        },
        function (error) {
          defered.reject(error);
        });
    return defered.promise;
  };

  public.getThemeEntryPoint = function (key) {
    var defered = $q.defer();
    var manifest_promise = public.getThemeManifest(key);

    manifest_promise.then(
      function (manifest) {
        defered.resolve(manifest.entry_point);
      },
      function (error) {
        defered.reject(error);
      });
    return defered.promise;
  };

  public.getThemeTemplate = function (key) {
    var defered = $q.defer();
    var manifest_promise = public.getThemeManifest(key);

    manifest_promise.then(
      function (manifest) {
        defered.resolve(manifest.template);
      },
      function (error) {
        defered.reject(error);
      });
    return defered.promise;

  };

  public.getThemeMetadata = function (key) {
    var defered = $q.defer();
    var manifest_promise = public.getThemeManifest(key);

    manifest_promise.then(
      function (manifest) {
        delete manifest.template;
        defered.resolve(manifest);
      },
      function (error) {
        defered.reject(error);
      });
    return defered.promise;

  }

  return public;
});
