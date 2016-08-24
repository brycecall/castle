// Main module
var app = angular.module('castleApp', ['ui.router', 'ngMaterial', 'ui.sortable']);

// Default color used to override the nav bar
app.constant('DEFAULT_COLOR', '#009688'); //4CAF50

// Default server url for rest service
app.constant('SERVER_URL', 'http://dev.maurasoftware.com:9526');

// Page Router
app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/account');
        $stateProvider
            .state('create', {
                url: "/create/:section",
                templateUrl: 'html/create.html',
                params: {
                    sectionIndex: 'default'
                }
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
            })
        
            .state('inspection', {
                url: "/inspection/:sectionIndex",
                templateUrl: 'html/inspection.html',
                params: {
                    sectionIndex: 'default'
                }
            })
        
            .state('page', {
                url: '/inspection/{sectionIndex}/{pageIndex}',
                templateUrl: 'html/page.html'
            })
        
            .state('item', {
                url: '/inspection/{sectionIndex}/{pageIndex}/{itemIndex}',
                templateUrl: 'html/item.html'
            })
            ;

});

// Theme Provider
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
    })
   .definePalette('newOrange', {
        '50':  '#FFF3E0',
        '100': '#FFE0B2',
        '200': '#FFCC80',
        '300': '#FFB74D',
        '400': '#FFA726',
        '500': '#FF9800',
        '600': '#FB8C00',
        '700': '#F57C00',
        '800': '#EF6C00',
        '900': '#E65100',
        'A100':'#FFD180',
        'A200':'#FFAB40',
        'A400':'#FF9100',
        'A700':'#FF6D00',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
        'contrastLightColors': undefined
    });

    $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('blue')
});

// Icon Provider
app.config(function ($mdIconProvider) {
    // Configure URLs for icons specified by [set:]id.
    $mdIconProvider
        .icon('menu', './bower_components/material-design-icons/navigation/svg/production/ic_menu_48px.svg')
        .icon('new_report', './bower_components/material-design-icons/action/svg/production/ic_assignment_48px.svg')
        .icon('book', './bower_components/material-design-icons/action/svg/production/ic_book_48px.svg')
        .icon('account', './bower_components/material-design-icons/action/svg/production/ic_account_box_48px.svg')
        .icon('image', './bower_components/material-design-icons/image/svg/production/ic_image_48px.svg')
        .icon('clear', './bower_components/material-design-icons/content/svg/production/ic_clear_48px.svg')
        .icon('camera', './bower_components/material-design-icons/image/svg/production/ic_camera_48px.svg')
        .icon('cancel','./bower_components/material-design-icons/navigation/svg/production/ic_cancel_48px.svg')
        .icon('add','./bower_components/material-design-icons/content/svg/production/ic_add_48px.svg')
        .icon('remove','./bower_components/material-design-icons/content/svg/production/ic_remove_48px.svg')
        .icon('close','./bower_components/material-design-icons/navigation/svg/production/ic_close_48px.svg')
        .icon('back','./bower_components/material-design-icons/navigation/svg/production/ic_arrow_back_48px.svg')
        .icon('more_vert','./bower_components/material-design-icons/navigation/svg/production/ic_more_vert_48px.svg')
        .icon('more_horiz','./bower_components/material-design-icons/navigation/svg/production/ic_more_horiz_48px.svg')
        .icon('account_circle','./bower_components/material-design-icons/action/svg/production/ic_account_circle_48px.svg')
        .icon('rrAdd','./bower_components/material-design-icons/av/svg/production/ic_playlist_add_48px.svg')
        .icon('rrEdit','./bower_components/material-design-icons/av/svg/production/ic_playlist_add_check_48px.svg')
        .icon('chevron_right','./bower_components/material-design-icons/navigation/svg/production/ic_chevron_right_48px.svg')
        .icon('check','./bower_components/material-design-icons/navigation/svg/production/ic_check_48px.svg')
        .icon('check_box','./bower_components/material-design-icons/toggle/svg/production/ic_check_box_48px.svg')
        .icon('check_box_outline','./bower_components/material-design-icons/toggle/svg/production/ic_check_box_outline_48px.svg')
        .icon('radio_button_checked','./bower_components/material-design-icons/toggle/svg/production/ic_radio_button_checked_48px.svg')
        .icon('radio_button_unchecked','./bower_components/material-design-icons/toggle/svg/production/ic_radio_button_unchecked_48px.svg')
        .icon('build','./bower_components/material-design-icons/action/svg/production/ic_build_48px.svg')
        .icon('switch_camera','./bower_components/material-design-icons/image/svg/production/ic_switch_camera_48px.svg')
        .icon('crop_free','./bower_components/material-design-icons/image/svg/production/ic_crop_free_48px.svg')
        .icon('add_to_photos','./bower_components/material-design-icons/image/svg/production/ic_add_to_photos_48px.svg')
        .icon('delete', './bower_components/material-design-icons/action/svg/production/ic_delete_48px.svg')
        .icon('clear_selection', './bower_components/material-design-icons/action/svg/production/ic_settings_backup_restore_48px.svg')
        .icon('new_report_folder', './bower_components/material-design-icons/file/svg/production/ic_create_new_folder_48px.svg')
        .icon('reverse', './bower_components/material-design-icons/action/svg/production/ic_swap_vertical_circle_48px.svg')
        .icon('sort', './bower_components/material-design-icons/content/svg/production/ic_sort_48px.svg')
        .icon('check_box', './bower_components/material-design-icons/toggle/svg/production/ic_check_box_48px.svg')
        .icon('check_box_outline_blank', './bower_components/material-design-icons/toggle/svg/production/ic_check_box_outline_blank_48px.svg')
        .icon('expand_more', './bower_components/material-design-icons/navigation/svg/production/ic_expand_more_48px.svg')
        .icon('add_circle_outline', './bower_components/material-design-icons/content/svg/production/ic_add_circle_outline_48px.svg')
        .icon('keyboard_arrow_right', './bower_components/material-design-icons/hardware/svg/production/ic_keyboard_arrow_right_48px.svg')
        .icon('keyboard_arrow_down', './bower_components/material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_48px.svg')
        .icon('keyboard_arrow_up', './bower_components/material-design-icons/hardware/svg/production/ic_keyboard_arrow_up_48px.svg')
        .icon('mode_edit', './bower_components/material-design-icons/editor/svg/production/ic_mode_edit_48px.svg')
        .icon('arrow_drop_down_circle', './bower_components/material-design-icons/navigation/svg/production/ic_arrow_drop_down_circle_48px.svg')
        .icon('arrow_drop_down', './bower_components/material-design-icons/navigation/svg/production/ic_arrow_drop_down_48px.svg')
        .icon('subject', './bower_components/material-design-icons/action/svg/production/ic_subject_48px.svg')
        .icon('today', './bower_components/material-design-icons/action/svg/production/ic_today_48px.svg')
        .icon('watch_later', './bower_components/material-design-icons/action/svg/production/ic_watch_later_48px.svg')
        .icon('iso', './bower_components/material-design-icons/image/svg/production/ic_iso_48px.svg')
        .icon('error', './bower_components/material-design-icons/alert/svg/production/ic_error_48px.svg')
        .icon('short_text', './bower_components/material-design-icons/editor/svg/production/ic_short_text_48px.svg')
        .icon('work', './bower_components/material-design-icons/action/svg/production/ic_work_48px.svg')
        .icon('looks_one', './bower_components/material-design-icons/image/svg/production/ic_looks_one_48px.svg')
        .icon('clear_all', './bower_components/material-design-icons/communication/svg/production/ic_clear_all_48px.svg')
        ;
});

// Reset main navigation values on state change to default values
// This is meant to be overridden in each page individually
app.run(function($rootScope, $urlRouter, castleService, DEFAULT_COLOR){
    $rootScope.$on('$stateChangeStart',
        function(event){
             castleService.currentPage =
             {
                title: "Inspection",
                preventNavigation: false,
                toggleNavMenu: true,
                icon: "menu",
                link: "account",
                go: {state:"account"},
                showExtraMenu: false,
                color: DEFAULT_COLOR,
            };
        });
});

// Controller for the index page
app.controller('indexController', function ($scope, castleService, $mdUtil, $mdSidenav, $state) {
    $scope.castleService = castleService;

    $scope.toggleNavigation = function () {
        $mdSidenav("main").toggle();
    };
    
    $scope.menuNavigation = function() {
      if (castleService.currentPage.toggleNavMenu) {
          $scope.toggleNavigation();
      } else if (!castleService.currentPage.preventNavigation) {
          $state.go(castleService.currentPage.go.state, castleService.currentPage.go.params);
      }
    };

    $scope.show_add_icons = false;

    $scope.toggleAdd = function () {
        $scope.show_add_icons = !$scope.show_add_icons;
    };

    $scope.navigationPages = [
        {
            title: "New Inspection",
            icon: "new_report",
            link: "inspection({sectionIndex:'default'})"
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
            title: "Templates",
            icon: "work",
            link: "templates"
        }
        ];

});

// Create the factory / service that is shared among all the controllers
app.factory('castleService', function ($rootScope, $state, DEFAULT_COLOR) {
    var factory = {};
    factory.reports = null;
    factory.currentReport = reportOne;
    factory.backdrop = false;
    factory.selectedPage = null;
    factory.selectedSection = null;
    factory.rapidRemarks = rapidRemarks;
    factory.reportTemplates = [
        {
         "title":"Standard Template", 
         "id":"AHRDF-sdf4-sd34sd-1234",
         "type":"Home Inspection"
        },
        {
         "title":"Idaho", 
         "id":"AHRDF-sdf4-sd34sd-1235",
         "type":"Home Inspection"
        },
        {
         "title":"Operating Agreement", 
         "id":"AHRDF-sdf4-sd34sd-1236",
         "type":"For Winners"
        },
        {
         "title":"Tutorial", 
         "id":"AHRDF-sdf4-sd34sd-1237",
         "type":"Safety Home Inspection"
        }
        
    ];
    
    factory.reportTemplate = null;
    factory.editMode = false;
    
    factory.toggle = function(input) {
        input = !input;
    };
    
    //factory.serverURL = "http://dev.maurasoftware.com:9526";
    
    //TODO: change when send and delete differ
//    $rootScope.deleteReport_handler = $rootScope.refresh_handler;
//    $rootScope.sendReport_handler = $rootScope.refresh_handler;
//    $rootScope.refresh_handler = function(data) {
//        console.log("UPDATE ALL REPORTS");
//        factory.reports = data.payload;
//        console.info(factory.reports);
//    };

    // Current page information
    factory.currentPage = {
        title: "Inspection",
        preventNavigation: false,
        toggleNavMenu: true,
        icon: "menu",
        link: "account",
        go: {state:"account"},
        showExtraMenu: false,
        showAccount: true,
        color: DEFAULT_COLOR,
        showIcon:true
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
        angular.forEach(
            factory.currentReport
                   .sections[factory.selectedSection]
                   .pages[factory.selectedPage]
                   .items, 
                   function(itemval, itemkey) {
                       itemval.showvalue = showVal;
                   });
    };

    //Setup data
    factory.init = function () {
        if (factory.io.user === null) {
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

    factory.assignPhotoMode = false;
    factory.photoAppendixIndex = null;
    factory.selectedImages = [];
    factory.headerLocked = false;
    factory.cancelAssignPhotoMode = function() 
    {
        factory.headerLocked = false;
        factory.currentPage.color = DEFAULT_COLOR;
        factory.assignPhotoMode = false;
        factory.selectedImages = [];
        if (factory.photoAppendixIndex != null)
            $state.go("create",{'sectionIndex':factory.photoAppendixIndex});
    };

    // Fires when Cordova is fully loaded
    document.addEventListener('deviceready', function () {
        console.log('Cordova Ready!');
        //factory.clearCache();
    }, false);

    // Always to a refresh on index load, just to keep up to date.
//    factory.io.refresh();
    
     factory.isInArray = function (value, array) {
        return ($.inArray(value, array) == -1) ? false : true;
     }
    
    return factory;
});

// Rest service
app.factory('restService', function ($http, $q, SERVER_URL) {
    var factory = {};

    factory.sendRequest = function(method, url, data) {    
        $http({
             method: method,
             url: SERVER_URL + url,
             headers: {
               'Content-Type': 'application/json'
             },
             data: data
        }).then(

        function successCallback(response) {
            console.log(response.data);
            return response.data;
        }, 
        function errorCallback(response) {
            console.log(error);
            return {'status':'error'};
        });
    };


    factory.user = {
                        "name":"",
                        "email":"",
                        "pw":""
                   };


    //  adding a user to the firebase db  
    //  expected result
    //	{
    //		"status":"", //success, failure
    //		"reason":"" //some error codes that make sense to us
    //	}
    factory.insertUser = function(data) {
        var url = "api/insert/user/";
        var result = factory.sendRequest("POST", url, data);
    };


    //authenticating a user in the firebase db  
    //api/authuser/
    //POST (JSON)
    //	{
    //		"email":"",
    //		"pw":""
    //	}
    //return	
    //	{
    //		"status":"", //success, failure
    //		"reason":"" //invalid email, invalid password, "" if successful
    //	}
    factory.authUser = function(data) {
        var url = "api/authuser/";
        var result = factory.sendRequest("POST", url, data);
        return result;
    };

    //inserting an inspection
    //api/insert/inspection/
    //POST (JSON)
    //	{} //inspection JSON
    //return
    //	{
    //		"id":"" //report id
    //	}
    factory.insertInspection = function(data) {
        var url = "api/insert/inspection/";
        var result = factory.sendRequest("POST", url, data);
        return result;
    };

    //inserting an inspection from an id
    //api/insert/inspection/{id}
    //POST (JSON)
    //	{
    //		"id":"", //report id
    //		"inspection": {} //report JSON
    //	}
    //return 
    //	{
    //		"status":"", //success, failure
    //		"reason":"" //"" if successful
    //	}
    factory.insertInspectionById = function(data, id) {
        var url = "api/insert/inspection/" + id;
        var result = factory.sendRequest("POST", url, data);
        return result;
    };

    //updating an inspection
    //api/update/inspection/
    //POST (JSON)
    //	{
    //		"id":"", //report id
    //		"inspection": {} //report JSON
    //	}
    //return 
    //	{
    //		"status":"", //success, failure
    //		"reason":"" //"" if successful
    //	}
    factory.updateInspection = function(data) {
        var url = "api/update/inspection/";
        var result = factory.sendRequest("POST", url, data);
        return result;
    };

    //Accurately return a new date object adjusted by the number of days
    factory.addDays = function(date, days) {
        return new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + days,
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        );
    };

    //selecting inspections from a user
    //api/select/inspections/{email}/{type}/{sortfield = date}/{ascending=false}/{startdate = today-month}/{enddate=today}
    //GET
    //return
    //[] //array of inspection JSON objects
    //note:
    //type //inspection, template
    factory.selectInspectionByEmail = function(email, type, sortField = "date", ascending = false, startDate, endDate) {
        var url = "api/select/inspections/" + email + "/" + type + "/";
        if (startDate == null || startDate == undefined)
        {
            startDate = factory.addDays(new Date, -30).toUTCString();
        }
        if (endDate == null || endDate == undefined)
        {
            endDate = new Date().toUTCString();
        }
        url += sortField + "/" + ascending + "/" + startDate + "/" + endDate + "/";
        return factory.sendRequest("GET", url);
    };

    //selecting inspections from a user
    //api/select/inspections/meta/{email}/{type}/{sortfield = date}/{ascending=false}/{startdate = today-month}/{enddate=today}
    //GET
    //return
    //[] //array of inspection meta data JSON objects
    //note:
    //type //inspection, template
    factory.selectInspectionMetaByEmail = function(email, type, sortField = "date", ascending = false, startDate, endDate) {
        var url = "api/select/meta/inspections/" + email + "/" + type + "/";
        if (startDate == null || startDate == undefined)
        {
            startDate = factory.addDays(new Date, -30).toUTCString();
        }
        if (endDate == null || endDate == undefined)
        {
            endDate = new Date().toUTCString();
        }
        url += sortField + "/" + ascending + "/" + startDate + "/" + endDate + "/";
        return factory.sendRequest("GET", url);
    };

    //selecting inspections by id
    //api/select/inspection/{id}
    //GET
    //return
    //{} //inspection json object
    factory.selectInspectionByUser = function(id) {
        var url = "api/select/inspections/" + id + "/";
        return factory.sendRequest("GET", url);
    };

    //deleting an inspection
    //api/delete/inspection/{id}
    //DELETE (JSON)
    //return 
    //	{
    //		"status":"", //success, failure
    //		"reason":"" //"" if successful
    //	}
    factory.deleteInspection = function(id) {
        var url = "api/delete/inspection/" + id + "/";
        return factory.sendRequest("DELETE", url);
    };

    //selecting a user
    //api/select/user

    //deleting a user
    //api/delete/user

});
