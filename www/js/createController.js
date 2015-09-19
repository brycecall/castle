 angular.module('fbiApp').controller('createController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, $mdMedia, $location, $anchorScroll, $rootScope, $window, $routeParams, inspectionService, $mdBottomSheet) {

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

     $scope.report = inspectionService.currentReport;

     //$scope.currentPage = ($routeParams.section == 'default')  ? Object.keys($scope.report)[0] : $routeParams.section;
$scope.currentPage = $routeParams.section;
//         inspectionService.currentPage.title = $scope.currentPage;
//         inspectionService.menuSwitch('back');

     //if ($routeParams.section == 1)
     //alert($routeParams.section);

     $scope.subPage = '';

     $scope.close = function () {
         $mdSidenav('left').close()
             .then(function () {
                 $log.debug("close LEFT is done");
             });

     };


     $scope.alert = '';
     $scope.showMessage = function (event, type, message) {
         //         message.replace('\n', '<br />');

         $mdDialog.show(
             $mdDialog.alert()
             .title(type + ' Message')
             .content(message)
             .ariaLabel('')
             .ok('Close!')
             .targetEvent(event)
         );
     };

     $scope.scrollToTop = function () {
         $timeout(function () {
             document.getElementById("testAgain").scrollTop = 0;
             console.log("called ");
         });
     };

   $scope.navigatePage = function (sectionkey) {
         $scope.close();
         $scope.currentPage = sectionkey;
         inspectionService.currentPage.title = $scope.currentPage;
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

     $scope.selectedPage;
     $scope.changeSelection = function(pagetitle) {
        $scope.selectedPage = pagetitle;
         console.log($scope.selectedPage);
     }

     $scope.openItems = function(showVal) {
        angular.forEach($scope.report[$scope.currentPage][$scope.selectedPage], function(value, key)         {
            value.showvalue = showVal;
        });
     }
     $scope.hideOrShowText = "Hide";

     $scope.filterRequired = function() {
        $scope.hideOrShowText = ($scope.hideOrShowText == "Hide") ? "Show" : "Hide";




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
         alert(testJSON['One']['2Ah']);
         testJSON['One'].hello = {'insert' : 'me'};
//         $.extend
         console.log(JSON.stringify(testJSON, null, 2));
     }

 });






















