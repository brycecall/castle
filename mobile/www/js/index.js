// Main module
var app = angular.module('castleApp', ['ui.router', 'ngMaterial', 
                                       'ui.sortable', 'firebase']);

// Default color used to override the nav bar
app.constant('DEFAULT_COLOR', '#009688'); //4CAF50

// Default server url for rest service
app.constant('SERVER_URL', 'http://dev.maurasoftware.com:9526');

// Page Router
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/account');
    $stateProvider
        .state('create', {
            url: "/create/{type}",
            templateUrl: 'html/create.html',
            params: {
                type:'new'
            }
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
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'html/dashboard.html'
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
        '500': '424242',
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
        .icon('swap_vert', './mdicons/ic_swap_vert_24px.svg')
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
        .icon('looks_one', './mdicons/numeric.svg')
        .icon('clear_all', './mdicons/ic_clear_all_24px.svg')
        .icon('visibility', './mdicons/ic_visibility_24px.svg')
        .icon('collections', './mdicons/ic_collections_24px.svg')
        .icon('save', './mdicons/ic_save_24px.svg')
        .icon('perm_media', './mdicons/ic_perm_media_24px.svg')
        .icon('schedule', './mdicons/ic_schedule_24px.svg')
        .icon('dashboard', './mdicons/ic_dashboard_24px.svg')
        .icon('message', './mdicons/ic_message_24px.svg')
        ;
});

// Reset main navigation values on state change to default values
// This is meant to be overridden in each page individually
app.run(function($rootScope, $urlRouter, $state, castleService, firebaseService, 
                 $firebaseAuth, $q){
    console.log("app run start");
    $rootScope.first = true;
    firebaseService.init();
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            // check if user is still authenticated
            console.log(firebaseService.isAuth + " and " + $firebaseAuth().$getAuth());
            if (firebaseService.isAuth) {
                console.log("Signed in as: " + firebaseService.userId);
            } else if (!$state.is('account') && toState.name != 'account') {
                event.preventDefault();
                console.log("User not authenticated");
                $state.go('account');
            }
            $rootScope.first = false;
            castleService.currentPage.title = "";
            castleService.currentPage.preventNavigation = false;
            castleService.currentPage.toggleNavMenu = true;
            castleService.currentPage.icon = "menu";
            castleService.currentPage.link = "account";
            castleService.currentPage.go = {state:"account"};
            castleService.currentPage.showEditMode = false;
            castleService.currentPage.showDownMenu = false;
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
    
    $scope.toggleEditMode = function(input) {
        if(input === null || input === undefined) {
            castleService.editMode = !castleService.editMode;
        }
        else {
            castleService.editMode = input;
        }
        
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
            title: "Dashboard",
            icon: "dashboard",
            link: "dashboard"
        },
        {
            title: "New Job",
            icon: "new_report",
            link: "create"
        },
        {
            title: "Saved Jobs",
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
    
    $scope.openMenu = function($mdOpenMenu, $event) {
        $mdOpenMenu($event);
    };

});

 /********************************************************
  * CAMERA
  ***********************************************************/
  app.factory('cameraService', function() {
      var factory = {};
     // Retrieve image file location from specified source
     factory.capture = function(sourceType, source, isDataUrl) {
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
                 source.push(imageData);
             });
             
            }, factory.onFail, {
             quality: 50,
             correctOrientation: true,
             destinationType: destination,
             sourceType: sourceType
         });
     };

     factory.removeIMG = function(source, index) {
         source.splice(index, 1);
     };

     // set up object with image array then adds photos to the array
     factory.capturePhoto = function(list, index, isDataUrl) {
         if (list[index] == null) {
             list[index] = [];
         }
         factory.capture(1, list[index], isDataUrl);
     };

     // Called if something bad happens.
     factory.onFail = function(message) {
          console.log('Failed because: ' + message);
     };
      
     return factory;
});

// Create the factory / service that is shared among all the controllers
app.factory('castleService', function ($rootScope, $state, DEFAULT_COLOR) {
    var factory = {};
    factory.reports = reportTemplates;
    factory.currentReport = {};
    factory.backdrop = false;
    factory.selectedPage = null;
    factory.selectedSection = null;
    factory.rapidRemarks = rapidRemarks;
    factory.reportTemplates = reportTemplates;
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
        //console.log("CALLED: " + factory.hideShowOptions.showNonRequired);
    };

    //Setup data
    factory.init = function () {
        if (factory.io.user === null) {
            $location.path("/signin");
            return false;
        }
        return true;
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
        $state.go("photoAppendix");
    };
    
    factory.assignPhotos = function(array, action) {
         if (array.i == null) {
             array.i = [];
         }
         var photoAppendix = factory.currentReport.photoAppendix;

         for(var i = 0; i < factory.selectedImages.length; i++) {
             var index = factory.selectedImages[i];
             if (index >= 0 && index < photoAppendix.length) {
                 if (action == 'assign') {
                    array.i.push( photoAppendix[index] );
                 } else if (action == 'accept') {
                    photoAppendix.splice(index, 1);
                 } else if (action == 'cancel') {
                     var removeIndex = $.inArray(photoAppendix[index], array.i)
                     if (removeIndex > -1) {
                         array.i.splice(removeIndex, 1);
                     }
                     
                 }
             }
         }
         if (action == 'assign') {
             array.a = true;
         } else if (action == 'cancel' || action == 'accept') {
             array.a = false;
         }
         if (action == 'accept')
            factory.cancelAssignPhotoMode();
     };
    
    //Accurately return a new date object adjusted by the number of days
//    factory.addDays = function(date, days) {
//        return new Date(
//            date.getFullYear(),
//            date.getMonth(),
//            date.getDate() + days,
//            date.getHours(),
//            date.getMinutes(),
//            date.getSeconds(),
//            date.getMilliseconds()
//        );
//    };

    // Fires when Cordova is fully loaded
    document.addEventListener('deviceready', function () {
        console.log('Cordova Ready!');
    }, false);

    return factory;
});






// Firebase service
app.factory( 'firebaseService', function($firebaseAuth, $firebaseObject, 
                                         $firebase, $state) {
    var factory = {};
    
    // Create authObj which allows access to AngularFire functions
    factory.authObj = $firebaseAuth();
    factory.isAuth = false;
    factory.userId = null;
    
    factory.init = function() {
        console.log("firebaseService init");
        var authData1 = factory.authObj.$getAuth();
        if (authData1) {
            console.log("we are here: " + authData1);
            factory.userId = authData1.uid;
            factory.isAuth = true;
        }
        
        factory.authObj.$onAuthStateChanged(function(authData) {
          if (authData) {
            factory.userId = authData.uid;
            console.log("Logged in as:", factory.userId);
            factory.isAuth = true;

          } else {
              factory.userId = null;
              factory.isAuth = false;
              console.log("Logged out");
          }
        });
    };
    
    // Create user
    factory.createNewUser = function(email, password) {
      factory.authObj.$createUserWithEmailAndPassword(email, password).then(function(userData) {
          console.log("User " + userData.uid + " created successfully!");
      }) 
    };
    
    // Sign in
    factory.signIn = function(email, password) {
        factory.authObj.$signInWithEmailAndPassword(email, password).then(function(response) {
            console.log("Login Success: " + response.uid);
            factory.userId = response.uid;
            $state.go('dashboard');
            factory.isAuth = true;
        }).catch(function(error) {
            console.log("Error: " + error);
        });
    };
    
    factory.signOut = function() {
        factory.authObj.$signOut().then(function(response) {
            console.log("Sign out successful");
            factory.userId = null;
        }).catch(function(error) {
            console.log("Error signing out: " + error);
        });
    };
    return factory;
});


// Firebase service
app.factory('firebaseIO', function($firebaseAuth, $firebaseArray, $firebaseObject,
                                    $firebase, $state, firebaseService) {
    var factory = {};
    factory.insertUser = function (displayName, email) {
       return firebase.database().ref('users/').push({
          displayName: displayName,
          email: email
       }).key;
    };
    
    factory.setUserData = function (displayName, email) {
       firebase.database().ref('users/' + firebaseService.userId).set({
         displayName: displayName,
         email: email
       });
    };
    
    // inserts a new report generating a new unique id
    factory.insertReport = function(report) {
        console.log("insertReport");
        console.log(report);
        
        if (!report.data.job.reportInf.reportTitle.value) {
            report.data.job.reportInf.reportTitle.value = "new report";
        }
        if (!report.data.job.reportInf.reportDate.value) {
            report.data.job.reportInf.reportDate.value = new Date().getTime();
        }
        
        var key = firebase.database()
                          .ref('reports/' + firebaseService.userId)
                          .push(report)
                          .key;
        firebase.database()
                .ref('users/' + firebaseService.userId + '/reports/' + key)
                .set({
                    title: report.data.job.reportInf.reportTitle.value,
                    date: new Date(report.data.job.reportInf.reportDate.value).getTime()
                });
        return key;
    };
    
    // insert a new report generating a new unique id
    factory.insertTemplate = function(template) {
       if (!template.data.templateStatic.title) {
           template.data.templateStatic.title = "new template";
       }
       if (!template.data.templateStatic.date || template.data.templateStatic.date == "") {
           template.data.templateStatic.date = new Date().getTime();
       }
       var key = firebase.database()
                         .ref('templates/' + firebaseService.userId)
                         .push(template)
                         .key;
       firebase.database().ref('users/' + firebaseService.userId + '/templates/' + key)
                          .set(template.data.templateStatic);
      return key;
    };
    
    // update report
    factory.setReport = function(report, reportId) {
        try {
            if (reportId) {
                firebase.database()
                        .ref('reports/' + reportId)
                        .set(report);
            } else {
              return report.$save();
            }
        } catch(e) {
            console.log(e);
        }
    };
    
    // get a report by its identifier
    factory.getReport = function(id) {
        var query = firebase.database().ref('reports/' + firebaseService.userId + '/' + id);
        var item = $firebaseObject(query);
        return item.$loaded();
      // return query.once("value");
    };
    
    // get a report data only by its identifier
    factory.getReportData = function(id) {
        var query = firebase.database()
                            .ref('reports/' + firebaseService.userId + '/' + id)
                            .once("value");
        return query;
      // return query.once("value");
    };
    
    // get a report by its identifier
    factory.getTemplate = function(id) {
        var query = firebase.database().ref('templates/' + firebaseService.userId + '/' + id);
        var item = $firebaseObject(query);
        return item.$loaded();
      // return query.once("value");
    };
    
    // get a report by its identifier
    factory.getTemplateData = function(id) {
        var query = firebase.database()
                            .ref('templates/' + firebaseService.userId + '/' + id)
        .once("value");
        return query;
      // return query.once("value");
    };
    
    // gets report data 
    factory.getTemplateMeta = function (startDate, endDate) {
        console.log(firebaseService.userId);
        var query = firebase.database().ref('users/' + firebaseService.userId + '/templates');
        var list = $firebaseArray(query);
        //return query.once("value");
        return list.$loaded();
    };
    
    // gets report data 
    factory.getReportMeta = function (startDate, endDate) {
        console.log(firebaseService.userId);
        var query = firebase.database().ref('users/' + firebaseService.userId + '/reports');
        var list = $firebaseArray(query);
        //list.$destroy();
        return list.$loaded();
        //return list.$loaded();
    };
    
    // shouldn't be called
    factory.getReports = function(startDate, endDate) {
        var query = firebase.database().ref('reports/' + firebaseService.userId);
        var list = $firebaseArray(query);
        return list.$loaded(); 
    }
    
    return factory;
});