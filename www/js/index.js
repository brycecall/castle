// Create the main module
var inspection = angular.module('fbiApp', ['ui.router', 'ngTouch', 'ngMaterial']);

inspection.config(
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/create/default');
        $stateProvider
            .state('create', {
                url: "/create/:section",
                templateUrl: 'html/create.html',
               // controller: 'createController'
            })

            .state('account', {
                url: '/account',
                templateUrl: 'html/account.html',
               // controller: 'accountController'
            })

            .state('saved', {
                url: '/saved',
                templateUrl: 'html/saved.html',
                //controller: 'savedController'
            })

            .state('generate', {
                url: '/generate',
                templateUrl: 'html/generate.html',
                //controller: 'generateController'
            })
  });

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
inspection.factory('inspectionService', ['$http','$location', '$cacheFactory',                      function ($http, $location, $cacheFactory) {
        var factory = {};
        var service = {};
        factory.serverURL = "http://dev.maurasoftware.com:9526";
        //factory.serverURL = "localhost";

        // Current user information
        factory.currentUser = {
            user_id: 1,
            name: "Rod Beacham",
            user_name: "Rod",
            first_name: "Rod",
            last_name: "Beacham",
            profile_image: "img/rod.png"
        }
        
        // Current page information
        factory.currentPage = {
            title: "Inspection",
            preventNavigation: false,
            icon: "./bower_components/material-design-icons/navigation/svg/design/ic_menu_48px.svg"
        }

        factory.currentReport = reportOne;
        factory.backdrop = false;
        factory.selectedPage;

        //Setup data
        factory.init = function() {
            if (factory.currentUser.id == null)
            {
                $location.path("/signin");
                return false;
            }
            return true;
        };

        //Endpoint respondant
        factory.request = function(endpoint, jsonData) {
            var response;

            if (jsonData)
            {
                console.log(JSON.parse(JSON.stringify(jsonData)));

                var config = {
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'plain/text'
                    }
                };

                response = $http.post(factory.serverURL + endpoint, jsonData, config);
            }
            else
            {
                console.log("GET " + endpoint);
                response = $http.get(factory.serverURL + endpoint);
            }


            return response;

        };

        // Debug output control
        factory.ERROR = 1;
        factory.WARN = 2;
        factory.INFO = 3;
        window.debug = false;
        factory.console = function (message, level, stack) {
            if (!window.debug && level == factory.ERROR)
                console.error(message);
            else if (window.debug)
            {
                var buffer = message;

                if (stack)
                    message += "\n" + (new Error()).stack.substr(7);

                message = (new Date()).toLocaleTimeString() + "::" +
                    factory.console.caller.name + ":: " + message;

                switch (level) {
                    case factory.ERROR:
                        console.error(message);
                        alert(buffer);
                        break;
                    case factory.WARN:
                        console.warn(message);
                        break;
                    case factory.INFO:
                        console.info(message);
                        break;
                    default:
                        console.log(message);
                        break;
                }
            }
        };


        factory.navigateExternalUrl = function (url) {
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
            //factory.clearCache();
            //pushWoosh.init();
        }, false);

        factory.console("inspector factory ready!", service.INFO);
        return factory;
  }]);


