// Create the main module
var inspection = angular.module('fbiApp', ['ui.router', 'ngTouch', 'ngMaterial']);

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
//inspection.config(['$routeProvider',
//
//    function ($routeProvider, $anchorScroll) {
//        $routeProvider
//            .when('/create/:section', {
//                templateUrl: 'html/create.html',
//                controller: 'createController'
//            })
//
//            .when('/account', {
//                templateUrl: 'html/account.html',
//                controller: 'savedController'
//            })
//
//            .when('/saved', {
//                templateUrl: 'html/saved.html',
//                controller: 'savedController'
//            })
//
//            .when('/generate', {
//                templateUrl: 'html/generate.html',
//                controller: 'generateController'
//            })
//
//            .otherwise({
//                redirectTo: '/create/default'
//            });
//  }]);

inspection.config(
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/create/default');
        $stateProvider
            .state('create', {
                url: "/create/:section",
                templateUrl: 'html/create.html',
                controller: 'createController'
            })

            .state('account', {
                url: '/account',
                templateUrl: 'html/account.html',
                controller: 'savedController'
            })

            .state('saved', {
                url: '/saved',
                templateUrl: 'html/saved.html',
                controller: 'savedController'
            })

            .state('generate', {
                url: '/generate',
                templateUrl: 'html/generate.html',
                controller: 'generateController'
            })
  });

// Config - the material design theme
//inspection.config(function($mdThemingProvider) {
//  $mdThemingProvider.theme('default')
//    .primaryPalette('green', {
//      'default': '500',
//      'hue-1': '100',
//      'hue-2': '600',
//      'hue-3': 'A100',
//    })
//    .accentPalette('orange'),
//  });

inspection.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('inspectorPallet', {
     '50':  'E8F5E9',
     '100': 'C8E6C9',
     '200': 'A5D6A7',
     '300': '81C784',
     '400': '66BB6A',
     '500': '4CAF50',
     '600': '43A047',
     '700': '388E3C',
     '800': '2E7D32',
     '900': '1B5E20',
    'A100': 'B9F6CA',
    'A200': '69F0AE',
    'A400': '00E676',
    'A700': '00C853',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'


  });

    $mdThemingProvider.theme('default')
        .primaryPalette('inspectorPallet')
        .accentPalette('orange')

});


// Controller for the index page
inspection.controller('indexController', ['$scope', 'inspectionService', '$mdUtil', '$mdSidenav', '$anchorScroll', '$rootScope', function($scope, service, $mdUtil, $mdSidenav, $anchorScroll, $rootScope) {
    // This is a little hacky, bit it works alright, maybe fix latter
    $scope.service = service;
    
    $scope.toggleNavigation = function() {
          $mdSidenav("main").toggle();
    }
    
    $scope.show_add_icons = false;

    $scope.toggleAdd = function() {
        $scope.show_add_icons = !$scope.show_add_icons;
    }
    
    $scope.scrollToTop = function() {
        $anchorScroll();
    }

//    $scope.go = function(pPath) {
//        var loc = $location.path(pPath);
//        console.log(loc);
//    };

    $scope.navigationPages = [
        {
            title: "New Report",
            icon: "./bower_components/material-design-icons/action/svg/design/ic_assignment_48px.svg",
            link: "create({section:'default'})"
        },
        {
            title: "Saved Reports",
            icon: "./bower_components/material-design-icons/action/svg/design/ic_book_48px.svg",
            link: "saved"
        },
        {
            title: "Account",
            icon: "./bower_components/material-design-icons/action/svg/design/ic_account_box_48px.svg",
            link: "account"
        }
        ];
    }]);




// Create the factory / service that is shared among all the controllers
inspection.factory('inspectionService', ['$http', '$cacheFactory',
    function ($http, $cacheFactory) {
        var factory = {},
            cache = $cacheFactory('inspectionCache'), // TODO - do we need the cache?
            baseUrl = '', /* 'http://api.thedealio.org:443/bond/'   TODO - change to URL to inspectionMe server */
            imageBaseUrl = '', /* http://api.thedealio.org'   TODO - change to URL to inspectionMe server */
            notificationId = 0; /* 132479809,    TODO - what is this? is this for PushWoosh? */
        
        // Current page information
        factory.currentPage = {
            title: "Inspection",
            preventNavigation: false,
            icon: "./bower_components/material-design-icons/navigation/svg/design/ic_menu_48px.svg"
        }

        factory.currentReport = reportOne;
        factory.backdrop = false;
        factory.selectedPage;

        // Current user information
        factory.currentUser = {
            user_id: 1,
            user_name: "Rod",
            first_name: "Rod",
            last_name: "Beacham",
            profile_image: "img/rod.png"
        }


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
        }

        // Fires when Cordova is fully loaded
        document.addEventListener('deviceready', function () {
            console.log('Cordova Ready!');
            factory.clearCache();
            //pushWoosh.init();
        }, false);
        
        return factory;
  }]);


