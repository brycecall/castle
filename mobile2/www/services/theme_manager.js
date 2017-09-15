app.factory('theme_manager', function ($rootScope, $http, $window, $sce, $q) {
  var public = {};
  var private = {};

  private.themeRoot = "themes";

  public.getThemeManifest = function (key) {
    var defered = $q.defer();
    var resource = private.themeRoot + "/" + key + "/manifest.json";
    $sce.trustAsUrl(resource);

    $http.get(resource)
      .then(function (reponse) {
          defered.resolve(reponse.data);
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
        defered.resolve(private.themeRoot + "/" + key + "/" + manifest.entry_point);
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
