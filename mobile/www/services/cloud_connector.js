app.factory('cloud_connector', function ($rootScope, $q, $sha, $cordovaFile, httpService, theme_manager) {
    var public = {};
    var private = {};

    /*** GLOBAL ***/
    public.sync = function () {
        public.syncThemes();
    };

    /*** THEMES ***/
    public.syncThemes = function () {
        var promises = [];

        promises.push(httpService.submitRemote({
            method: "GET",
            url: "/themes",
            useBaseUrl: true,
            params: {
                user: $rootScope.userId,
                token: null
            }
        }));

        promises.push(theme_manager.getThemes());

        $q.all(promises).then(
            function (data) {
                /*var user_themes = data.themes;
                for (var i = 0; i < themes.length; i++) {
                  
                  private.downloadTheme(themes[i].id);
                }*/
            },
            function (error) {
                console.warn(error);
            })
    };

    private.downloadTheme = function (themeId) {
        httpService.submitRemote({
            method: "GET",
            url: "/themes/download",
            useBaseUrl: true,
            params: {
                user: $rootScope.userId,
                theme: themeId,
                token: null
            }
        }).then(
            function (data) {
                //TODO: unzip the binary file recieved into the active themes folder
                console.log(data);
            },
            function (error) {
                console.warn(error);
            })
    };

    private.uploadTheme = function (themeId) {
        //TODO: get the theme from the local active themes folder

        // Compress the theme

        // Send the compressed theme as binary data

        // Confirm that the server received the theme
    }

    /*** TEMPLATES ***/
    public.syncTemplates = function () {

    };

    return public;
});
