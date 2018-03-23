// Server connection
//app.constant('BASE_URL', 'http://localhost:53326/');
app.constant('BASE_URL', 'https://api.castle.invenio.xyz/');
//app.constant('BASE_URL', 'http://localhost:62326/');

app.factory('pendingRequests', function () {
    var private = {};
    var public = {};

    private.pending = [];
    public.get = function () {
        return private.pending;
    };

    public.add = function (request) {
        private.pending.push(request);
    };

    public.remove = function (url) {
        private.pending = private.pending.filter(function (p) {
            return p.url !== url;
        });
    };

    public.cancelAll = function () {
        angular.forEach(private.pending, function (p) {
            p.canceller.resolve();
        });
        private.pending.length = 0;
    };

    return public;
});


// This service wraps $http to make sure pending requests are tracked 
app.factory('httpService', ['$http', '$q', 'pendingRequests', 'BASE_URL', function ($http, $q, pendingRequests, BASE_URL) {
    var private = {};
    var public = {};

    public.submitRemote = function (incRequest, cancellable) {
        var canceller = $q.defer();

        if (incRequest.useBaseUrl) {
            incRequest.url = BASE_URL + incRequest.url;
        }

        if (cancellable) {
            pendingRequests.add({
                url: incRequest.url,
                canceller: canceller
            });
        }

        var request = {
            method: incRequest.method, //GET, POST, PUT, DELETE, OPTIONS
            url: incRequest.url, // absolute url to submit the request to
            cache: false, // enable or disable client side caching
            data: incRequest.data, // Request message Data
            params: incRequest.params, // GET Parameters
            timeout: canceller.promise // Will cancel the query if the promise is resolved
        }

        //Request gets cancelled if the timeout-promise is resolved
        var requestPromise = $http(request);

        //Once a request has failed or succeeded, remove it from the pending list
        requestPromise.finally(function () {
            if (cancellable) {
                pendingRequests.remove(incRequest.url);
            }
        });

        return requestPromise;
    }

    return public;
}]);


app.factory('cloud_connector', function ($rootScope, $q, $sha, $cordovaFile, httpService, filesystem_manager, theme_manager) {
    var public = {};
    var private = {};

    /*** GLOBAL ***/
    public.sync = function () {
        public.syncThemes();
    };

    public.validateUser = function (username, password) {
        return httpService.submitRemote({
            method: 'POST',
            url: 'api/v1/validateuser/',
            data: {
                UsrUsername: username,
                UsrPassword: password
            },
            params: null,
            useBaseUrl: true
        });
    };

    public.addUser = function (username, password, email) {
        return httpService.submitRemote({
            method: 'POST',
            url: 'api/v1/adduser/',
            data: {
                UsrUsername: username,
                UsrPassword: password,
                UsrEmail: email
            },
            params: null,
            useBaseUrl: true
        });
    };

    /*** THEMES ***/
    public.syncThemes = function () {
        var defered = $q.defer();

        httpService.submitRemote({
            method: "GET",
            url: "api/v1/themeMeta/",
            useBaseUrl: true,
            params: {
                userId: $rootScope.userId,
                token: null
            }
        }).then(
            function (response) {
                if (Object.keys(response.data).length == 0) {
                    defered.resolve();
                }
                
                for (var key in response.data) {
                    (function (metadata, key) {
                        theme_manager.getThemeManifest(metadata['unique'])
                            .then(
                                function (result) {
                                    if (result.hash != metadata.hash) {
                                        downloadThemeBlob(key);
                                    }
                                },
                                function (error) {
                                    downloadThemeBlob(key);
                                }
                            );
                    }(response.data[key], key))
                }

                function downloadThemeBlob(key) {
                    private.downloadTheme(response.data[key]["unique"])
                        .then(function (data) {
                            filesystem_manager.saveThemeBlob(data).then(function () {
                                defered.resolve();
                            });
                        });
                };
            },
            function (error) {
                defered.reject(error);
            });
        
        return defered.promise;
    };

    private.downloadTheme = function (guid) {
        var defered = $q.defer();

        httpService.submitRemote({
            method: "GET",
            url: "api/v1/theme/",
            useBaseUrl: true,
            params: {
                userId: $rootScope.userId,
                guid: guid,
                token: null
            }
        }).then(
            function (response) {
                defered.resolve(response.data);
            },
            function (error) {
                defered.reject(error);
            });

        return defered.promise;
    };

    private.uploadTheme = function (themeId) {
        //TODO: get the theme from the local active themes folder

        // Compress the theme

        // Send the compressed theme as binary data

        // Confirm that the server received the theme
    }

    public.saveInspectionToCloud = function (inspection) {
        return httpService.submitRemote({
            method: 'POST',
            url: 'api/v1/upsertinspection/',
            data: inspection,
            params: {
                userId: $rootScope.userId
            },
            useBaseUrl: true
        });
    };

    public.getInspectionFromCloud = function (guid) {
        return httpService.submitRemote({
            method: 'GET',
            url: 'api/v1/inspection/',
            params: {
                userId: $rootScope.userId,
                guid: guid
            },
            useBaseUrl: true
        });
    };

    /*** TEMPLATES / INSPECTIONS ***/
    public.getInspectionsMetadata = function (type) {
        return httpService.submitRemote({
            method: 'GET',
            url: 'api/v1/inspectionsMeta/',
            params: {
                userId: $rootScope.userId,
                sourceType: type
            },
            useBaseUrl: true
        });
    };

    /*** AUTO COMMENTS ***/
    public.insertAutoComment = function (autoComment) {
        return httpService.submitRemote({
            method: 'POST',
            url: 'api/v1/insertAutoComment/',
            data: autoComment,
            params: {
                userId: $rootScope.userId
            },
            useBaseUrl: true
        });
    }

    return public;
});
