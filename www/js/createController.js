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

 function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
//      var largeImage = document.getElementById('largeImage');
//
//      // Unhide image elements
//      //
//      largeImage.style.display = 'block';
//
//      // Show the captured photo
//      // The inline CSS rules are used to resize the image
//      //
//      largeImage.src = imageURI;

        $scope.images.add(imageURI);

    };

function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    };


    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    };


    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    };

    function onFail(message) {
      alert('Failed because: ' + message);
    };


 });
