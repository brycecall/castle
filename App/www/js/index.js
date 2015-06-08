// Create the main module
var inspection = angular.module('fbiApp', ['ngRoute', 'ngTouch', 'ngMaterial', 'ngMdIcons']);

//var express = require('express');
//var mongoose = require('mongoose');
//var config = require('config');
//var passport = require('passport');
//var expressSession = require('express-session');
//mongoose.connect(config.mongoUri);
//var userService = require('./services/user-service');
//var passportConfig = require('./auth/passport-config');
//passportConfig();
//
//
//inspection.use(passport.initialize());
//inspection.use(passport.session());
//inspection.use(express.static(path.join(__dirname, 'public')));
//inspection.user(expressSession()
//                {
//                    secret: 'getting hungry',
//                    saveUninitialized: false,
//                    resave: false
//                }
//               ));

// Config - take care of URL routes
inspection.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/create', {
                templateUrl: 'html/create.html',
                controller: 'createController'
            })

            .when('/saved', {
                templateUrl: 'html/saved.html',
                controller: 'savedController'
            })

            .otherwise({
                redirectTo: "/create"
            });
  }]);

// Config - the material design theme
inspection.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('blue');
});

// Controller for the index page
inspection.controller('indexController', ['$scope', 'inspectionService', '$mdUtil', '$mdSidenav', function($scope, service, $mdUtil, $mdSidenav) {
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
            title: "New Report",
            icon: "pencil",
            link: "#create"
        },
        {
            title: "Saved Reports",
            icon: "heart",
            link: "#closet"
        },
        ];
}]);

// Create the factory / service that is shared among all the controllers
inspection.factory('inspectionService', ['$http', '$cacheFactory', '$route',
    function ($http, $cacheFactory, $route) {
        var factory = {},
            cache = $cacheFactory('inspectionCache'), // TODO - do we need the cache?
            baseUrl = '', /* 'http://api.thedealio.org:443/bond/'   TODO - change to URL to inspectionMe server */
            imageBaseUrl = '', /* http://api.thedealio.org'   TODO - change to URL to inspectionMe server */
            notificationId = 0; /* 132479809,    TODO - what is this? is this for PushWoosh? */
        
        // Current page information
        factory.currentPage = {
            title: "Inspection",
            preventNavigation: false,
        };

        
        // Current user information
        factory.currentUser = {
            user_id: 1,
            user_name: "natashia23",
            first_name: "Natashia",
            last_name: "Rominos",
            profile_image: "img/Favicon.gif"
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


 