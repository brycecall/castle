// Server connection
//app.constant('BASE_URL', 'http://localhost:55587/');
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


app.factory('cloud_connector', function ($rootScope, $q, $sha, $cordovaFile, httpService) {
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

    public.addUser = function (username, password, email, foundersKey) {
        return httpService.submitRemote({
            method: 'POST',
            url: 'api/v1/adduser/' + foundersKey,
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
            url: "api/v1/themeMeta/" + $rootScope.userId,
            useBaseUrl: true,
            params: {
                user: $rootScope.userId,
                token: null
            }
        }).then(
            function (response) {
                for (var key in response.data) {
                    var metadata = response.data[key];
                    // TODO: Check that the hash is different from the one stored on the device for that theme
                    
                    private.downloadTheme(metadata['Id'])
                        .then(function (data) {
                            console.log(data);
                            defered.resolve();
                        });
                }
            },
            function (error) {
                defered.reject(error);
            });
        return defered.promise;
    };

    private.downloadTheme = function (themeId) {
        var defered = $q.defer();

        httpService.submitRemote({
            method: "GET",
            url: "api/v1/theme/" + themeId + "/" + $rootScope.userId,
            useBaseUrl: true,
            params: {
                user: $rootScope.userId,
                theme: themeId,
                token: null
            }
        }).then(
            function (response) {
                //TODO: unzip the binary file recieved into the active themes folder
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
            url: 'api/v1/upsertinspection/' + $rootScope.userId,
            data: inspection,
            params: null,
            useBaseUrl: true
        });
    };

    public.getInspectionFromCloud = function (inspectionID) {
        return httpService.submitRemote({
            method: 'GET',
            url: 'api/v1/inspection/' + inspectionID + '/' + $rootScope.userId,
            params: null,
            useBaseUrl: true
        });
    };


    /*** TEMPLATES / INSPECTIONS ***/
    public.getInspectionsMetadata = function (type) {
        return httpService.submitRemote({
            method: 'GET',
            url: 'api/v1/inspectionsMeta/' + $rootScope.userId + '/' + type,
            params: null,
            useBaseUrl: true
        });
    };

    return public;
});
