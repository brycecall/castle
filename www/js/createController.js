 angular.module('fbiApp').controller('createController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, $mdMedia, $location, $anchorScroll, $rootScope, $window) {

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

     $scope.report = reportOne;


     $scope.currentPage = Object.keys($scope.report)[0];
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
         document.getElementById("testAgain").scrollTop = 0;
     };

     $scope.openCamera = function (checkboxkey) {

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


   // device APIs are available
  function onDeviceReady() {
      //alert("Calls when app starts");
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
      document.addEventListener("deviceready",onDeviceReady,false);
  // Called when a photo is successfully retrieved
    function onPhotoDataSuccess(imageData) {
        //alert("Calls after photo is taken, returning to device");

        // Get image handle
        var smallImage = document.getElementById('smallImage');

        // Unhide image elements
        smallImage.style.display = 'block';

        // Show the captured photo
        // The inline CSS rules are used to resize the image
        smallImage.src = "data:image/jpeg;base64," + imageData;
    }

  // Called when a photo is successfully retrieved
    function onPhotoURISuccess(imageURI) {
      //alert("Calls when we change to add item page");

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = imageURI;


        imageLocation = imageURI;
    }

  // Capture Photo button will call this function
  $scope.capturePhoto = function capturePhoto() {
      //alert("Call when button is pressed");

      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, $scope.onFail(), { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

   // A button will call this function
    $scope.getPhoto = function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, $scope.onFail(), { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

   // Called if something bad happens.
    $scope.onFail = function onFail(message) {
      //alert('Failed because: ' + message);
    }

    //Cancel the add opperation
    $scope.cancel = function() {
        window.history.back();
    };

    //Complete the save operation
    $scope.save = function() {
        $scope.addItem();
        window.history.back();
    };

     $scope.exportReport = function() {

     };


 });
