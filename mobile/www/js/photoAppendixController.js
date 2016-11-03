 app.controller('photoAppendixController', function ($scope, $mdUtil, $mdDialog, 
                                                     $rootScope, $stateParams, 
                                                     castleService, $state) {
     $scope.castleService = castleService;
     $scope.report = castleService.currentReport;

     $scope.enterAssignPhotosMode = function() {
         castleService.assignPhotoMode = true;
         castleService.currentPage.showIcon = false;
         castleService.currentPage.title = "Assign Photo";
         castleService.currentPage.showExtraMenu = false;
         castleService.photoAppendixIndex = $scope.sectionIndex;
         $state.go("inspection");
     };

     $scope.assignPhotos = function(subItem, action) {
         if (subItem.i == null)
             subItem.i = [];
         
         var photoAppendix = $scope.report.photoAppendix;

         for(var i = 0; i < castleService.selectedImages.length; i++) {
             var index = castleService.selectedImages[i];
             if (index >= 0 && index < photoAppendix.length) {
                 if (action == 'assign') {
                    subItem.i.push( photoAppendix[index] );
                 } else if (action == 'accept') {
                    photoAppendix.splice(index, 1);
                 } else if (action == 'cancel') {
                     var removeIndex = $.inArray(photoAppendix[index], subItem.i)
                     if (removeIndex > -1) {
                         subItem.i.splice(removeIndex, 1);
                     }
                 }
             }
         }
         
         if (action == 'assign') {
             subItem.a = true;
         } else if (action == 'cancel' || action == 'accept') {
             subItem.a = false;
         }
         
         if (action == 'accept')
            castleService.cancelAssignPhotoMode();
     };
     
     $scope.clearSelection = function() {
        castleService.selectedImages = [];
     };
     
     $scope.buffer = [];
     $scope.remove = function(level, index) {
         $scope.buffer = level.splice(index, 1);
     };
    
     $scope.isInArray = function (value, array) {
        return ($.inArray(value, array) == -1) ? false : true;
     };
     
     $scope.deletePhotos = function() {
         for (var i = 0; i < castleService.selectedImages.length; i++) {
              console.log(castleService.selectedImages[i]);
             $scope.report.photoAppendix.splice(castleService.selectedImages[i], 1);
         }
         castleService.selectedImages = [];
     };
     
     // a method for maintaining order in javascript/json objects
     $scope.notSorted = function (obj) {
         return obj ? Object.keys(obj) : [];
     };
     
     $scope.addToSelectedImages = function(index) {
        var safeIndex = $.inArray(index, castleService.selectedImages);
        if(safeIndex == -1) {
            castleService.selectedImages.push(index);
        } else {
            castleService.selectedImages.splice(safeIndex, 1);
        }
     };

     // device APIs are available
     function onDeviceReady() {
         pictureSource = navigator.camera.PictureSourceType;
         destinationType = navigator.camera.DestinationType;
     }

     document.addEventListener("deviceready", onDeviceReady, false);

 
     // output = !input
     $scope.toggleItem = function (pItem) {
         pItem.showvalue = !pItem.showvalue;
     };
    
 });
