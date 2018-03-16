app.factory('theme_manager', function ($rootScope, $http, $window, $sce, $q, filesystem_manager) {
    var public = {};
    var private = {};

    //private.themeRoot = "cdvfile://localhost/files/themes/";
    private.themes = [];

    public.current = null;

    public.update = function () {
        var defered = $q.defer();
        
        filesystem_manager.getThemes()
        .then(function(themes) {
            private.themes = themes;
            defered.resolve(themes);
        });
        
        return defered.promise;
    };

    public.getThemes = function () {
        var defered = $q.defer();
        defered.resolve(private.themes);
        return defered.promise;
    };

    public.getThemeManifest = function (key) {
        return filesystem_manager.getThemeManifest(key);
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
        return filesystem_manager.saveThemeManifest(theme);
    };

    return public;
});
