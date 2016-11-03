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
                url: "/create",
                templateUrl: 'html/create.html'
            })

            .state('account', {
                url: '/account',
                templateUrl: 'html/account.html'
            })
        
            .state('photoAppendix', {
                url: '/images',
                templateUrl: 'html/photoAppendix.html'
            })

            .state('saved', {
                url: '/saved/:schedule',
                templateUrl: 'html/saved.html',
                params: {
                    schedule:null
                }
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
        .icon('menu', './mdicons/ic_menu_24px.svg')
        .icon('new_report', './mdicons/ic_assignment_24px.svg')
        .icon('book', './mdicons/ic_book_24px.svg')
        .icon('account', './mdicons/ic_account_box_24px.svg')
        .icon('image', './mdicons/ic_image_24px.svg')
        .icon('clear', './mdicons/ic_clear_24px.svg')
        .icon('camera', './mdicons/ic_photo_camera_24px.svg')
        .icon('cancel','./mdicons/ic_cancel_24px.svg')
        .icon('add','./mdicons/ic_add_24px.svg')
        .icon('remove','./mdicons/ic_remove_24px.svg')
        .icon('close','./mdicons/ic_close_24px.svg')
        .icon('back','./mdicons/ic_arrow_back_24px.svg')
        .icon('more_vert','./mdicons/ic_more_vert_24px.svg')
        .icon('more_horiz','./mdicons/ic_more_horiz_24px.svg')
        .icon('account_circle','./mdicons/ic_account_circle_24px.svg')
        .icon('rrAdd','./mdicons/ic_playlist_add_24px.svg')
        .icon('rrEdit','./mdicons/ic_playlist_add_check_24px.svg')
        .icon('chevron_right','./mdicons/ic_chevron_right_24px.svg')
        .icon('check','./mdicons/ic_check_24px.svg')
        .icon('check_box','./mdicons/ic_check_box_24px.svg')
        .icon('radio_button_checked','./mdicons/ic_radio_button_checked_24px.svg')
        .icon('radio_button_unchecked','./mdicons/ic_radio_button_unchecked_24px.svg')
        .icon('build','./mdicons/ic_build_24px.svg')
        .icon('switch_camera','./mdicons/ic_switch_camera_24px.svg')
        .icon('crop_free','./mdicons/ic_crop_free_24px.svg')
        .icon('add_to_photos','./mdicons/ic_add_to_photos_24px.svg')
        .icon('delete', './mdicons/ic_delete_24px.svg')
        .icon('clear_selection', './mdicons/ic_settings_backup_restore_24px.svg')
        .icon('new_report_folder', './mdicons/ic_create_new_folder_24px.svg')
        .icon('reverse', './mdicons/ic_swap_vertical_circle_24px.svg')
        .icon('sort', './mdicons/ic_sort_24px.svg')
        .icon('check_box', './mdicons/ic_check_box_24px.svg')
        .icon('check_box_outline_blank', './mdicons/ic_check_box_outline_blank_24px.svg')
        .icon('expand_more', './mdicons/ic_expand_more_24px.svg')
        .icon('add_circle_outline', './mdicons/ic_add_circle_outline_24px.svg')
        .icon('keyboard_arrow_right', './mdicons/ic_keyboard_arrow_right_24px.svg')
        .icon('keyboard_arrow_down', './mdicons/ic_keyboard_arrow_down_24px.svg')
        .icon('keyboard_arrow_up', './mdicons/ic_keyboard_arrow_up_24px.svg')
        .icon('mode_edit', './mdicons/ic_mode_edit_24px.svg')
        .icon('arrow_drop_down_circle', './mdicons/ic_arrow_drop_down_circle_24px.svg')
        .icon('arrow_drop_down', './mdicons/ic_arrow_drop_down_24px.svg')
        .icon('subject', './mdicons/ic_subject_24px.svg')
        .icon('today', './mdicons/ic_today_24px.svg')
        .icon('watch_later', './mdicons/ic_watch_later_24px.svg')
        .icon('iso', './mdicons/ic_iso_24px.svg')
        .icon('error', './mdicons/ic_error_24px.svg')
        .icon('short_text', './mdicons/ic_short_text_24px.svg')
        .icon('work', './mdicons/ic_work_24px.svg')
        .icon('looks_one', './mdicons/ic_looks_one_24px.svg')
        .icon('clear_all', './mdicons/ic_clear_all_24px.svg')
        .icon('visibility', './mdicons/ic_visibility_24px.svg')
        .icon('collections', './mdicons/ic_collections_24px.svg')
        .icon('save', './mdicons/ic_save_24px.svg')
        .icon('perm_media', './mdicons/ic_perm_media_24px.svg')
        ;
});

// Reset main navigation values on state change to default values
// This is meant to be overridden in each page individually
app.run(function($rootScope, $urlRouter, castleService, DEFAULT_COLOR){
    $rootScope.$on('$stateChangeStart',
        function(event){
            castleService.currentPage.title = "Account";
            castleService.currentPage.preventNavigation = false;
            castleService.currentPage.toggleNavMenu = true;
            castleService.currentPage.icon = "menu";
            castleService.currentPage.link = "account";
            castleService.currentPage.go = {state:"account"};
            castleService.currentPage.showEditMode = false;
        });
});

// Controller for the index page
app.controller('indexController', function ($scope, castleService, 
                                            $mdSidenav, $state) {
    $scope.castleService = castleService;
    $scope.showMainNav = true;

    $scope.toggleNavigation = function () {
        $mdSidenav("main").toggle();
    };
    
    $scope.toggleEditMode = function() {
        castleService.editMode = !castleService.editMode;
        castleService.currentPage.color = castleService.editMode ? '#555' : 
            castleService.defaultColor;
     };
    
    $scope.menuNavigation = function() {
      if (castleService.currentPage.toggleNavMenu) {
          $scope.toggleNavigation();
      } else if (!castleService.currentPage.preventNavigation) {
          $state.go(castleService.currentPage.go.state, 
                    castleService.currentPage.go.params);
      }
    };

    $scope.show_add_icons = false;

    $scope.toggleAdd = function () {
        $scope.show_add_icons = !$scope.show_add_icons;
    };

    $scope.navigationPages = [
        {
            title: "New Job",
            icon: "new_report",
            link: "create({sectionIndex:'default'})"
        },
        {
            title: "Scheduled Jobs",
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

 /********************************************************
  * CAMERA
  ***********************************************************/
  app.factory('cameraService', function() {
      var factory = {};
     // Retrieve image file location from specified source
     factory.capturePhoto = function(sourceType, source, isArray, isDataUrl) {
         var destination = destinationType.DATA_URL;
         if (!isDataUrl) {
             destination = destinationType.FILE_URI;
         }
         navigator.camera.getPicture(function(imageData) {
             //console.log("Image Data: " + imageData);
             if (isDataUrl) {
                imageData = "data:image/jpeg;base64," + imageData
             }
             factory.$apply(function () {
                 if (isArray) {
                    source.push(imageData);
                 } else {
                    source = (imageData);
                 }
             });
            }, factory.onFail, {
             quality: 50,
             correctOrientation: true,
             destinationType: destination,
             sourceType: sourceType
         });
     };

     factory.removeIMG = function (source, index) {
         source.splice(index, 1);
     };

     // set up object with image array then adds photos to the array
     factory.initCameraAction = function (item, isArray, isDataUrl, title) {
         var array = [];
         if (item.i == null) {
             item["i"] = array;
         }
         factory.capturePhoto(1, item.i, isArray, isDataUrl);
     };

     // Called if something bad happens.
     factory.onFail = function(message) {
          console.log('Failed because: ' + message);
     };
});

// Create the factory / service that is shared among all the controllers
app.factory('castleService', function ($rootScope, $state, DEFAULT_COLOR) {
    var factory = {};
    factory.reports = null;
    factory.currentReport = reportTemplates[0];
    factory.backdrop = false;
    factory.selectedPage = null;
    factory.selectedSection = null;
    factory.rapidRemarks = rapidRemarks;
    factory.reportTemplates = reportTemplates;
//        [
//        {
//         "title":"Standard Template", 
//         "id":"AHRDF-sdf4-sd34sd-1234",
//         "type":"Home Inspection"
//        },
//        {
//         "title":"Idaho", 
//         "id":"AHRDF-sdf4-sd34sd-1235",
//         "type":"Home Inspection"
//        },
//        {
//         "title":"Operating Agreement", 
//         "id":"AHRDF-sdf4-sd34sd-1236",
//         "type":"For Winners"
//        },
//        {
//         "title":"Tutorial", 
//         "id":"AHRDF-sdf4-sd34sd-1237",
//         "type":"Safety Home Inspection"
//        }
//        
//    ];
    
    factory.reportTemplate = null;
    
    factory.toggle = function(input) {
        input = !input;
    };
    
    //factory.serverURL = "http://dev.maurasoftware.com:9526";

    // Current page information
    factory.currentPage = {
        title: "Inspection",
        preventNavigation: false,
        toggleNavMenu: true,
        icon: "menu",
        link: "account",
        go: {state:"account"},
        showEditMode: false,
        showAccount: true,
        //color: DEFAULT_COLOR,
        showIcon:true
    };
    
    factory.defaultColor = DEFAULT_COLOR;
    factory.editMode = false;
    factory.setEditMode = function(input) {
        factory.editMode = input;
        factory.currentPage.color = editMode ? '#555' : DEFAULT_COLOR;
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
