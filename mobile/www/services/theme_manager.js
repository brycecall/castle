app.factory('theme_manager', function ($rootScope, $http, $window, $sce, $q, $sha, $cordovaFile) {
  var public = {};
  var private = {};

  private.themeRoot = "cdvfile://localhost/files/themes/";
  private.themes = [];

  public.current = null;

  public.init = function () {
    // Check if the themes folder has been created in the data directory, if not, copy the defaults from www
    $cordovaFile.checkDir(cordova.file.dataDirectory, "themes")
      .then(
        function (result) {
          console.log("Themes have already been loaded, skipping...");
        },
        function (error) {
          console.log("Loading default themes...");
          private.copyDefaultThemes();
        })
  }

  private.copyDefaultThemes = function () {
    return $cordovaFile.copyDir(cordova.file.applicationDirectory, "www/themes", cordova.file.dataDirectory, "themes")
      .then(
        function (result) {
          console.log(result);
          private.themeRoot = result.nativeURL;
          public.update();
        });
  }

  public.clearThemes = function () {
    var defered = $q.defer();
    
    // Resolve either way (since we wanted to just delete the directory either way)
    $cordovaFile.removeRecursively(cordova.file.dataDirectory, "themes").then(
    function(data) {
      defered.resolve(data);
    }, function(data) {
      defered.resolve(data);
    })
    
    return defered.promise;
  }

  public.update = function () {
    var defered = $q.defer();

    if (window['cordova'] == undefined) {
      // Desktop Browser Implementation
      private.themes = ["a94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde8"]
      defered.resolve(private.themes);

    } else {
      // Device Implementation
      var file_system = resolveLocalFileSystemURL;
      var path = private.themeRoot;

      var result = file_system(path, function (fileSystem) {
        var reader = fileSystem.createReader();
        reader.readEntries(success, error);
      }, error);

      var success = function (files) {
        var themes = [];
        for (var index in files) {
          themes.push(files[index].name);
        }
        private.themes = themes;
        defered.resolve(themes);
      };

      var error = function (err) {
        defered.reject(err);
      }
    }

    return defered.promise;
  }

  private.updateThemeDatabase = function (theme) {
    // TODO: Perform the Update to the DB here
  };

  public.getThemes = function () {
    var defered = $q.defer();
    defered.resolve(private.themes);
    return defered.promise;
  }

  public.getThemeManifest = function (key) {
    var defered = $q.defer();
    var resource = private.themeRoot + key + "/manifest.json";
    $sce.trustAsUrl(resource);

    $http.get(resource)
      .then(function (response) {
          if (response.data.entry_point.indexOf("themes") !== 0) {
            response.data.entry_point = private.themeRoot + response.data.unique + "/" + response.data.entry_point;
            response.data.preview = private.themeRoot + response.data.unique + "/" + response.data.preview;
            response.data.thumbnail = private.themeRoot + response.data.unique + "/" + response.data.thumbnail;
          }
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

  };

  public.saveTheme = function (theme) {
    var defered = $q.defer();
    theme.hash = $sha.hash(JSON.stringify(theme));
    theme.last_modified = (new Date()).toISOString();

    // Remove the theme root dir
    theme.entry_point = theme.entry_point.split(theme.unique + '/')[1];
    theme.preview = theme.preview.split(theme.unique + '/')[1];
    theme.thumbnail = theme.thumbnail.split(theme.unique + '/')[1];
    
    $cordovaFile.writeFile(cordova.file.dataDirectory, "themes/" + theme.unique + "/manifest.json", JSON.stringify(theme), true)
      .then(
        function (result) {
          console.log(result);
        },
        function (error) {
          console.log(error);
        }
      );

    return defered.promise;
  };

  public.copyTheme = function (theme) {
    //TODO: modify the manifest in memory then copy the theme folder and save the new manifest
  }

  private.generateHash = function (theme) {
    return $sha.hash(JSON.stringify(theme));
  }

  return public;
});
