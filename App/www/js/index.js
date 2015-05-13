// Create the main module
var fashion = angular.module('fashionApp', ['ngRoute', 'ngTouch', 'ngMaterial']);

// Config - take care of URL routes
fashion.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/create', {
                templateUrl: 'html/create.html',
                controller: 'createController'
            })

            .when('/social', {
                templateUrl: 'html/social.html',
                controller: 'socialController'
            })

            .when('/marketplace', {
                templateUrl: 'html/marketplace.html',
                controller: 'marketplaceController'
            })
        
            .when('/additem', {
                templateUrl: 'html/additem.html',
                controller: 'additemController'
            })
        
            .when('/closet', {
                templateUrl: 'html/closet.html',
                controller: 'closetController'
            })
        
            .when('/account', {
                templateUrl: 'html/account.html',
                controller: 'accountController'
            })
        
            .when('/addpost', {
                templateUrl: 'html/addpost.html',
                controller: 'addpostController'
            })
            .otherwise({
                redirectTo: "/create"
            });
  }]);

// Config - the material design theme
fashion.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('green');
});

// Controller for the index page
fashion.controller('indexController', ['$scope', 'fashionService', '$mdUtil', '$mdSidenav', function($scope, service, $mdUtil, $mdSidenav) {
    // This is a little hacky, bit it works alright, maybe fix latter
    $scope.service = service;
    
    $scope.toggleNavigation = function() {
        var de
        $mdSidenav("main").toggle();
    }
    
    $scope.show_add_icons = false;
    $scope.toggleAdd = function() {
        $scope.show_add_icons = !$scope.show_add_icons;
    }
    
    $scope.navigationPages = [
        {
            title: "Style Studio",
            icon: "pencil",
            link: "#create"
        },
        {
            title: "My Closet",
            icon: "heart",
            link: "#closet"
        },
        {
            title: "Fashion Market",
            icon: "shopping-cart",
            link: "#marketplace"
        },
        {
            title: "Social Stream",
            icon: "share-square",
            link: "#social"
        },
        ];
}]);

// Create the factory / service that is shared among all the controllers
fashion.factory('fashionService', ['$http', '$cacheFactory', '$route',
    function ($http, $cacheFactory, $route) {
        var factory = {},
            cache = $cacheFactory('fashionCache'), // TODO - do we need the cache?
            baseUrl = '', /* 'http://api.thedealio.org:443/bond/'   TODO - change to URL to FashionMe server */
            imageBaseUrl = '', /* http://api.thedealio.org'   TODO - change to URL to FashionMe server */
            notificationId = 0; /* 132479809,    TODO - what is this? is this for PushWoosh? */
        
        // Current page information
        factory.currentPage = {
            title: "Fashion",
            preventNavigation: false,
        };

        
        // Current user information
        factory.currentUser = {
            user_id: 1,
            user_name: "natashia23",
            first_name: "Natashia",
            last_name: "Rominos",
            profile_image: "assets/profile.jpg"
        };

        // Refresh the cache every hour
        setInterval(function() {
            factory.clearCache();
        }, 1800000);  // Update every 30 minutes.
        
        factory.clearCache = function () {
            cache.removeAll();
            $route.reload();
        };

        /* TODO - ADD relavent functions needed to get/send the JSON we need from/to our server */
        //TODO
        factory.getCloset = function () {
            
            // TODO - first test with a dummy JSON object, then test getting the JSON from the endpoint
            return "DUMMY JSON HERE";
            
            /* TODO
            return $http.get(baseUrl + 'ENDPOINTTODO', {
                cache: cache
            });
            */
        };
        //TODO
        factory.addToCloset = function (item) {
            
        };
        

        factory.openExternalUrl = function (url) {
            if (navigator.app) {
                // Android
                navigator.app.loadUrl(url, { openExternal: true });
            }
            else
            {
                // iOS and others
                window.open(url, '_system');
            }
        };

        // Fires when Cordova is fully loaded
        document.addEventListener('deviceready', function () {
            console.log('Cordova Ready!');
            factory.clearCache();
            pushWoosh.init();
        }, false);
        
        return factory;
  }]);
