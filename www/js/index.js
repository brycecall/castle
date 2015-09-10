// Create the main module
var inspection = angular.module('fbiApp', ['ngRoute', 'ngTouch', 'ngMaterial']);

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

    function ($routeProvider, $anchorScroll) {
        $routeProvider
            .when('/create/:section', {
                templateUrl: 'html/create.html',
                controller: 'createController'
            })

            .when('/account', {
                templateUrl: 'html/account.html',
                controller: 'savedController'
            })

            .when('/saved', {
                templateUrl: 'html/saved.html',
                controller: 'savedController'
            })

            .when('/generate', {
                templateUrl: 'html/generate.html',
                controller: 'generateController'
            })

            .otherwise({
                redirectTo: '/create/default'
            });
  }]);

// Config - the material design theme
inspection.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('green', {
      'default': '500', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    .accentPalette('orange')
//      , {
//      'default': '500', // by default use shade 400 from the pink palette for primary intentions
//      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
//      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
//      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
//    });
});

// Controller for the index page
inspection.controller('indexController', ['$scope', 'inspectionService', '$mdUtil', '$mdSidenav', '$location', '$anchorScroll', function($scope, service, $mdUtil, $mdSidenav, $anchorScroll, $location) {
    // This is a little hacky, bit it works alright, maybe fix latter
    $scope.service = service;
    
    $scope.toggleNavigation = function() {
        var de;
        $mdSidenav("main").toggle();
    }
    
    $scope.show_add_icons = false;
    $scope.toggleAdd = function() {
        $scope.show_add_icons = !$scope.show_add_icons;
    }
    
    $scope.scrollToTop = function() {
        $anchorScroll();
    }

    $scope.navigationPages = [
        {
            title: "New Report",
            icon: "./bower_components/material-design-icons/action/svg/design/ic_assignment_48px.svg",
            link: "#create"
        },
        {
            title: "Saved Reports",
            icon: "./bower_components/material-design-icons/action/svg/design/ic_book_48px.svg",
            link: "#saved"
        }
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
            user_name: "Rod",
            first_name: "Rod",
            last_name: "Beacham",
            profile_image: "img/rod.png"
        };

        // Refresh the cache every hour
        setInterval(function() {
            factory.clearCache();
        }, 1800000);  // Update every 30 minutes.
        
        factory.clearCache = function () {
            cache.removeAll();
            $route.reload();
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
            //pushWoosh.init();
        }, false);
        
        return factory;
  }]);


