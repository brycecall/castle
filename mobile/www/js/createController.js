 app.controller('createController', function ($scope, $mdUtil, $mdDialog, 
                                              $rootScope, $stateParams, 
                                              castleService, $state, firebaseIO) {
     $scope.castleService = castleService;
     $scope.selectedSection = $stateParams.sectionIndex;
     $scope.castleService.selectedSection = $scope.selectedSection;
     $scope.selectedPage = castleService.selectedPage;
     castleService.reportTemplate = null;
     castleService.currentReport = null;
     $scope.templates = [];
     $scope.report = null;
     
     // change main header image and title
     castleService.currentPage.showIcon = true;
     castleService.currentPage.toggleNavMenu = true;
     castleService.currentPage.title = "New Job";
     castleService.currentPage.icon = "menu";
     castleService.currentPage.showEditMode = false;
     
     $scope.rapidRemarks = castleService.rapidRemarks;
     $scope.finishedRequired = false;
     $scope.editMode = false;
     
     $scope.toggleEditMode = function() {
        castleService.editMode = !castleService.editMode;
        castleService.currentPage.color = editMode ? '#000' : 
            castleService.defaultColor;
     };

     $scope.subPage = '';
     $scope.isOpen = false;
     $scope.togglePlusMenu = false;
     $scope.showAddItemMenu = false;
     var pictureSource = null;
     var destinationType = null;

     window.onload = function() {
         firebaseIO.getTemplateMeta().then(function(data) {
             $scope.templates = data;
         }, function(error) {
             console.log(error);
             $state.go("account");
         });
     }();
     
     $scope.selectTemplate = function(sTemplate) {
         //console.log(sTemplate);
         //firebaseIO.insertTemplate(castleService.reportTemplates[0]);
         if (sTemplate) {
             firebaseIO.getTemplate(sTemplate.$id)
                       .then(function(template) {
                 console.log(template);
                 castleService.currentReport = template;
                 $scope.report = template;
             }, function(error) {
                 console.log("Error: " + error);
             });
         }
     };
          
     $scope.addToSelectedImages = function(index) {
        var safeIndex = $.inArray(index, castleService.selectedImages);
        if(safeIndex == -1) {
            castleService.selectedImages.push(index);
        } else {
            castleService.selectedImages.splice(safeIndex, 1);
        }
     };

     $scope.buffer = [];
     $scope.remove = function(level, index) {
         $scope.buffer = level.splice(index, 1);
     };
     
     $scope.clearSelection = function() {
        castleService.selectedImages = [];
     };

     $scope.setItem = function(item, val) {
         item.value = val;
     };

     $scope.getAsDate = function(dateString) {
         return new Date(dateString);
     };

     // a method for maintaining order in javascript/json objects
     $scope.notSorted = function (obj) {
         return obj ? Object.keys(obj) : [];
     };

     // device APIs are available
     function onDeviceReady() {
         pictureSource = navigator.camera.PictureSourceType;
         destinationType = navigator.camera.DestinationType;
     }

     document.addEventListener("deviceready", onDeviceReady, false);

     // select a new page
     $scope.changeSelection = function (index, pagetitle) {
         $scope.selectedPage = index;
         castleService.selectedPage = index;
        // console.log($scope.selectedPage + ' ' + pagetitle);
     };

     // output = !input
     $scope.toggleItem = function (pItem) {
         pItem.showvalue = !pItem.showvalue;
     };




 });
