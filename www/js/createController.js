 angular.module('fbiApp').controller('createController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, $mdMedia, $anchorScroll, $rootScope, $window, $stateParams, inspectionService, $mdBottomSheet) {

     $scope.toggleLeft = buildToggler('left');




     /**
      * Build handler to open/close a SideNav; when animation finishes
      * report completion in console
      */
     function buildToggler(navID) {
         var debounceFn = $mdUtil.debounce(function () {
             $mdSidenav(navID)
                 .toggle()
                 .then(function () {
                     $log.debug("toggle " + navID + " is done");

                 });
         }, 300);

         return debounceFn;
     }

//     $scope.go = function(pPath) {
//        $location.path(pPath);
//     }

     $scope.report = inspectionService.currentReport;

         //$scope.currentSection = ($stateParams.section == 'default')  ? Object.keys($scope.report)[0] : $stateParams.section;
    $scope.currentSection = $stateParams.section;
    $scope.selectedPage = inspectionService.selectedPage;
    $scope.changeSelection = function(pagetitle) {
        $scope.selectedPage = pagetitle;
        inspectionService.selectedPage = pagetitle;
         console.log($scope.selectedPage);
     }


//         inspectionService.currentPage.title = $scope.currentSection;
//         inspectionService.menuSwitch('back');

     //if ($stateParams.section == 1)
     //alert($stateParams.section);

     $scope.subPage = '';

     $scope.close = function () {
         $mdSidenav('left').close()
             .then(function () {
                 $log.debug("close LEFT is done");
             });

     };


     $scope.alert = '';
     $scope.showMessage = function (event, type, message) {
         $mdDialog.show(
             $mdDialog.alert()
             .title(type + ' Message')
             .content(message)
             .ariaLabel('')
             .ok('Close!')
             .targetEvent(event)
         );
     };

     $scope.showAddItemMenu = false;
     $scope.toggleAddItemMenu = function() {
         inspectionService.backdrop = !inspectionService.backdrop;
         $scope.showAddItemMenu = !$scope.showAddItemMenu;
     }

     $scope.showItemDialog = function (event) {
            $mdDialog.show({
              controller: 'createController',
              templateUrl: 'itemDialog.html',
              parent: angular.element(document.body),
              targetEvent: event,
              clickOutsideToClose:true,
              preserveScope:true,
            });
     };

   $scope.addPageToReport = function(newPage) {
        $scope.report[$scope.currentSection][newPage] = {};
        console.log(JSON.stringify($scope.report[$scope.currentSection][newPage], null, 2));
   }

     $scope.showPageDialog = function (event) {
            $mdDialog.show({
              controller: 'createController',
              templateUrl: 'pageDialog.html',
              parent: angular.element(document.body),
              targetEvent: event,
              clickOutsideToClose:true,
              preserveScope:true,
            });
     };

    $scope.cancelDialog = function() {
        $mdDialog.cancel();
    };


    $scope.hideShowOptions = hideShowOptions;
    $scope.filterRequired = function() {
        if (hideShowOptions.text == "Hide")
        {
           hideShowOptions.showNonRequired = false;
           hideShowOptions.text  = "Show";
        }
        else
        {
            hideShowOptions.showNonRequired = true;
            hideShowOptions.text  = "Hide";
        }
    }


     $scope.scrollToTop = function () {
         $timeout(function () {
             document.getElementById("testAgain").scrollTop = 0;
             console.log("called ");
         });
     };


   $scope.navigatePage = function (sectionkey) {
         $scope.close();
         $scope.currentSection = sectionkey;
         inspectionService.currentPage.title = $scope.currentSection;
         inspectionService.menuSwitch('back');
     };


     $scope.notSorted = function (obj) {
         return obj ? Object.keys(obj) : [];
     };

//
//     $scope.$watch(function() { return $mdMedia('gt-md'); }, function(big) {
//        console.log(big);
//      });

     $scope.images = [];



    var pictureSource;
    var destinationType;
    var imageLocation;
    var cameraDestination;

   // device APIs are available
    function onDeviceReady() {
      //alert("Calls when app starts");
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

  document.addEventListener("deviceready",onDeviceReady,false);


/********************************************************
* CAMERA
***********************************************************/

    // Called when a photo is successfully retrieved (DATA_URL)
    function onPhotoDataSuccess(imageData) {
        //alert("Calls after photo is taken, returning to device");

        // Show the captured photo
        $scope.$apply(function () {
            cameraDestination = "data:image/jpeg;base64," + imageData;
        });
    }



  // Called when a photo is successfully retrieved
    function onPhotoURISuccess(imageURI) {
        //alert("Calls when we change to add item page");

        $scope.$apply(function () {
            cameraDestination.i = imageURI;
        });
    }

  // Capture Photo button will call this function
   $scope.capturePhoto = function capturePhoto() {
      //alert("Call when button is pressed");

      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, $scope.onFail(), {
        quality: 50,
//        encodingType : encodingType.PNG,
//        targetWidth:260,
//        targeHeight: 260,
        correctOrientation: true,
        destinationType: destinationType.DATA_URL });

    }

   // A button will call this function
    $scope.getPhoto = function getPhoto(source) {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(onPhotoURISuccess, $scope.onFail(), {
        quality: 50,
//        encodingType : encodingType.PNG,
//        targetWidth:260,
//        targeHeight: 260,
        correctOrientation: true,
        destinationType: destinationType.FILE_URI,
        sourceType: source });


    }

    $scope.capturePagePhoto = function(listValue, itemVal) {
        var imgJSON = {'title':'', 'i':''};
        imgJSON.title = listValue;
        itemVal.content.push(imgJSON);
        cameraDestination = itemVal.content[itemVal.content.length - 1];
        $scope.getPhoto(1);
    }

    $scope.togglePlusMenu = false;

     $scope.togglePlusMenus = function() {
         $scope.togglePlusMenu = !$scope.togglePlusMenu;
         $scope.captureAppendixPhoto();
     }


    $scope.captureAppendixPhoto = function() {

        var imgJSON = {'title':'', 'i':''}
        var source = $scope.report['Photo Appendix']['Additional Photos for Further Clarification']['Photo Appendix Images'].content;
        source.push(imgJSON);
        cameraDestination = source[source.length - 1];
        $scope.getPhoto(1);


    }

    $scope.removeIMG = function(pJSONIMG, source) {
        source.splice(source.indexOf(pJSONIMG), 1);
    }

     $scope.isOpen = false;

     $scope.openItems = function(showVal) {
        angular.forEach($scope.report[$scope.currentSection][$scope.selectedPage], function(value, key) {
            value.showvalue = showVal;
        });
     }

    $scope.initCameraAction = function(pCheckboxval) {
        var imgJSON = {'i':''};
        pCheckboxval.i.push(imgJSON);
        cameraDestination = pCheckboxval.i[pCheckboxval.i.length - 1];
        $scope.getPhoto(1);
     }


    // Called if something bad happens.
    $scope.onFail = function onFail(message) {
      // alert('Failed because: ' + message);
    }

    //Cancel the add opperation
    $scope.cancel = function() {
        window.history.back();
    }

    //Complete the save operation
    $scope.save = function() {
        $scope.addItem();
        window.history.back();
    }

     $scope.exportReport = function() {

     }


     $scope.toggleItem = function(pItem) {
        pItem.showvalue = !pItem.showvalue;
     }


    $scope.openBottomSheet = function() {
        $mdBottomSheet.show({
          templateUrl: 'addItem.html'
        });
    }


     $scope.appendReport = function() {
         var testJSON = {
                'One' : {
                     '1Ah': 'ah1',
                     '2Ah' : 'ah2'
                },
                'Two' : {
                     '3Ah': 'ah3',
                     '4Ah' : 'ah4'
                }
          };

         console.log(JSON.stringify(testJSON, null, 2));
       //  alert(testJSON['One']['2Ah']);
         testJSON['One'] = {'insert' : 'me'};
//         $.extend
         console.log(JSON.stringify(testJSON, null, 2));
     }



    $scope.itemTypes = {

        "types" : {
            "checkbox" : "checkbox",
            "radio" : "radio",
            "select" : "image",
           // "presettext" : "Preset Message",
            "number" : "Number",
            "text" : "Text",
            "date" : "Date"
        },
        "type" : ""
    }


    $scope.newItem = {
        'title': '',
        'content': {
            'required': false,
            'showvalue' : true,
            'type': '',
            //'value': '',
            'value': {
            },
            'content': []
        }
    }

    $scope.removeItem = function(toRemove, theType) {
        if (theType == "radio")
            $scope.newItem.content.content.splice( toRemove, 1 );
        else
             delete $scope.newItem.content.value[toRemove];
    }

    $scope.addItemToReport = function() {
        console.log("Section: " + $scope.currentSection + " Page: " + $scope.selectedPage + " Title: " + $scope.newItem.title);
        $scope.report[$scope.currentSection][$scope.selectedPage][$scope.newItem.title] = $scope.newItem.content;
        console.log(JSON.stringify($scope.report[$scope.currentSection][$scope.selectedPage][$scope.newItem.title], null, 2));
        $scope.resetNewItem();
    }

    $scope.resetNewItem = function() {
        $scope.newItem = {
                'title': '',
                'content': {
                    'required': false,
                    'showvalue' : true,
                    'type': '',
                    'value': {
                    },
                    'content': []
                }
            }
    }

    $scope.resetNewItemValueContents = function() {
         $scope.newItem.content.content =[];
         $scope.newItem.content.value = {};
    }

    $scope.addNewItem = function(theType, theValue) {
            var newJSON;
                switch (theType)
                {
                    case 'checkbox':
                        newJSON =  {'c':false, 'i':[]};
                        $scope.newItem.content.value[theValue] = newJSON;
                        break;
                    case 'radio':
                    case 'select':
                        $scope.newItem.content.content.push(theValue);
                        break;
                }

        console.log(JSON.stringify($scope.newItem, null, 2));
    }


 });






















