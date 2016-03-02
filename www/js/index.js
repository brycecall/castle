// Create the main module
var app = angular.module('fbiApp', ['ui.router', 'ngTouch', 'ngMaterial']);

app.config(
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/account');
        $stateProvider
            .state('create', {
                url: "/create/:section",
                templateUrl: 'html/create.html'
            })

            .state('account', {
                url: '/account',
                templateUrl: 'html/account.html'
            })

            .state('saved', {
                url: '/saved',
                templateUrl: 'html/saved.html'
            })

            .state('generate', {
                url: '/generate',
                templateUrl: 'html/generate.html'
            })

            .state('templates', {
                url: '/templates',
                templateUrl: 'html/templates.html'
            });

    });

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.definePalette('inspectorPallet', {
        '50': 'E8F5E9',
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
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
        'contrastLightColors': undefined
    });

    $mdThemingProvider.theme('default')
        .primaryPalette('inspectorPallet')
        .accentPalette('orange')
});

app.config(function ($mdIconProvider) {
    // Configure URLs for icons specified by [set:]id.
    $mdIconProvider
        .icon('menu', './bower_components/material-design-icons/navigation/svg/production/ic_menu_48px.svg')
        .icon('assignment', './bower_components/material-design-icons/action/svg/production/ic_assignment_48px.svg')
        .icon('book', './bower_components/material-design-icons/action/svg/production/ic_book_48px.svg')
        .icon('account', './bower_components/material-design-icons/action/svg/production/ic_account_box_48px.svg')
        .icon('image', './bower_components/material-design-icons/image/svg/production/ic_image_48px.svg')
        .icon('clear', './bower_components/material-design-icons/content/svg/production/ic_clear_48px.svg')
        .icon('camera', './bower_components/material-design-icons/image/svg/production/ic_camera_48px.svg')
        .icon('cancel','./bower_components/material-design-icons/navigation/svg/production/ic_cancel_48px.svg')
        .icon('add','./bower_components/material-design-icons/content/svg/production/ic_add_48px.svg')
        .icon('close','./bower_components/material-design-icons/navigation/svg/production/ic_close_48px.svg')
        .icon('back','./bower_components/material-design-icons/navigation/svg/production/ic_arrow_back_48px.svg')
        .icon('more_vert','./bower_components/material-design-icons/navigation/svg/production/ic_more_vert_48px.svg')
        .icon('account_circle','./bower_components/material-design-icons/action/svg/production/ic_account_circle_48px.svg')
        .icon('rrAdd','./bower_components/material-design-icons/av/svg/production/ic_playlist_add_48px.svg')
        .icon('rrEdit','./bower_components/material-design-icons/av/svg/production/ic_playlist_add_check_48px.svg')
        .icon('chevron_right','./bower_components/material-design-icons/navigation/svg/production/ic_chevron_right_48px.svg')
        .icon('check_box','./bower_components/material-design-icons/toggle/svg/production/ic_check_box_48px.svg')
        .icon('check_box_outline','./bower_components/material-design-icons/toggle/svg/production/ic_check_box_outline_48px.svg')
        .icon('radio_button_checked','./bower_components/material-design-icons/toggle/svg/production/ic_radio_button_checked_48px.svg')
        .icon('radio_button_unchecked','./bower_components/material-design-icons/toggle/svg/production/ic_radio_button_unchecked_48px.svg')
        .icon('build','./bower_components/material-design-icons/action/svg/production/ic_build_48px.svg');
});

//RESET main navigation values on state change
app.run(function($rootScope, $urlRouter, inspectionService){
    $rootScope.$on('$stateChangeStart',
        function(event){
             inspectionService.currentPage = {
                title: "Inspection",
                preventNavigation: false,
                toggleNavMenu: true,
                icon: "menu",
                link: "account",
                showExtraMenu: false
            };
        });
});




// Controller for the index page
app.controller('indexController', function ($scope, inspectionService, $mdUtil, $mdSidenav) {
    $scope.inspectionService = inspectionService;

    $scope.toggleNavigation = function () {
        $mdSidenav("main").toggle();
    };

    $scope.show_add_icons = false;

    $scope.toggleAdd = function () {
        $scope.show_add_icons = !$scope.show_add_icons;
    };

    $scope.navigationPages = [
        {
            title: "New Report",
            icon: "assignment",
            link: "create({section:'default'})"
        },
        {
            title: "Saved Reports",
            icon: "book",
            link: "saved"
        },
        {
            title: "Account",
            icon: "account",
            link: "account"
        },
        {
            title: "Edit Templates",
            icon: "build",
            link: "templates"
        }
        ];
});




// Create the factory / service that is shared among all the controllers
app.factory('inspectionService', function ($rootScope, connectService) {
    var factory = {};

    factory.io = connectService;
    factory.reports = null;
    factory.currentReport = reportOne;
    factory.backdrop = false;
    factory.selectedPage = null;
    factory.currentSection = null;
    factory.rapidRemarks = rapidRemarks;
    factory.reportTemplates = [
        {"title":"reportOne", "reportKey":"AHRDF-sdf4-sd34sd-3SDF"}
    ];

    //factory.serverURL = "http://dev.maurasoftware.com:9526";
    
    //TODO: change when send and delete differ
    $rootScope.deleteReport_handler = $rootScope.refresh_handler;
    $rootScope.sendReport_handler = $rootScope.refresh_handler;
    $rootScope.refresh_handler = function(data) {
        console.log("UPDATE ALL REPORTS");
        factory.reports = data.payload;
        console.info(factory.reports);
    };

    // TODO: change this to use the connect service user instead (for persist)
    // Current user information
    factory.currentUser = {
        user_id: 1,
        name: "",
        user_name: "",
        profile_image: "img/rod.png",
        loggedIn:false
    };

    // Current page information
    factory.currentPage = {
        title: "Inspection",
        preventNavigation: false,
        toggleNavMenu: true,
        icon: "menu",
        link: "account",
        showExtraMenu: false
    };

    factory.hideShowOptions = {
        'text': 'Hide',
        'showNonRequired': true
    };

    factory.filterRequired = function(param) {
        if (factory.hideShowOptions.showNonRequired) {
            factory.hideShowOptions.showNonRequired = false;
            factory.hideShowOptions.text = "Show";
        } else {
            factory.hideShowOptions.showNonRequired = true;
            factory.hideShowOptions.text = "Hide";
        }
        console.log("CALLED: " + factory.hideShowOptions.showNonRequired);
    };


    factory.openItems = function (showVal) {
        angular.forEach(factory.currentReport.sections[factory.currentSection].pages[factory.selectedPage].items, function(itemval, itemkey) {
            itemval.showvalue = showVal;
        });
    };

    //Setup data
    factory.init = function () {
        if (factory.currentUser.id === null) {
            $location.path("/signin");
            return false;
        }
        return true;
    };

    //Endpoint respondant
    factory.request = function (endpoint, jsonData) {
        var response;

        if (jsonData) {
            console.log(JSON.parse(JSON.stringify(jsonData)));

            var config = {
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'plain/text'
                }
            };

            response = $http.post(factory.serverURL + endpoint, jsonData, config);
        } else {
            console.log("GET " + endpoint);
            response = $http.get(factory.serverURL + endpoint);
        }


        return response;

    };

    factory.navigateExternalUrl = function (url) {
        if (navigator.app) {
            navigator.app.loadUrl(url, {
                openExternal: true
            });
        } else {
            window.open(url, '_system');
        }
    };

    // Fires when Cordova is fully loaded
    document.addEventListener('deviceready', function () {
        console.log('Cordova Ready!');
        //factory.clearCache();
    }, false);

    // Always to a refresh on index load, just to keep up to date.
    factory.io.refresh();
    
    return factory;
});

//****** Likely will be replaced by connectService *******
// app.service("reportService", function () {

//     var theReport = {};

//     return {
//         getTheReport: function () {
//             return theReport;
//         },
//         setTheReport: function (value) {
//             theReport = value;
//         }
//     };

// });


// app.service("serverService", function ($http, $q) {
//     return ({
//         getReport: getReport

//     });

//     function getReport() {
//         console.log("Get Report Called");
//         var request = $http({
//             method: "GET",
//             url: "http://dev.maurasoftware.com:9526/report/c/1",
//             params: {
//                 action: "GET"
//             }
//         });
//         return (request.then(handleSuccess, handleError));
//     }

//     function handleError(response) {
//         if (!angular.isObject(response.data) ||
//             !response.data.message
//         ) {
//             return ($q.reject("An unknown error occurred."));
//         }
//         return ($q.reject(response.data.message));
//     }

//     function handleSuccess(response) {
//         return (response.data);
//     }
// });
