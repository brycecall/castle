 app.controller('itemController', function ($scope, $mdUtil, $mdDialog, $rootScope, $stateParams, castleService, $state) {
     $scope.castleService = castleService;
     $scope.report = castleService.currentReport;
     $scope.sectionIndex = $stateParams.sectionIndex;
     $scope.pageIndex = $stateParams.pageIndex;
     $scope.itemIndex = $stateParams.itemIndex;
     castleService.selectedSection = $scope.sectionIndex;
     castleService.selectedPage = $scope.pageIndex;
     $scope.item = $scope.report
           .sections[$scope.sectionIndex]
           .pages[$scope.pageIndex]
           .items[$scope.itemIndex];

     castleService.currentPage.showIcon = true;
     castleService.currentPage.title = $scope.report.sections[$scope.sectionIndex].pages[$scope.pageIndex].title;
     castleService.currentPage.icon = "back";
     castleService.currentPage.toggleNavMenu = false;
     castleService.currentPage.go = {state:"page", params:{'sectionIndex':$scope.sectionIndex, 'pageIndex':$scope.pageIndex}};
     castleService.currentPage.showExtraMenu = true;

     $scope.subPage = '';
     $scope.isOpen = false;
     $scope.togglePlusMenu = false;
     $scope.showAddItemMenu = false;
     var pictureSource = null;
     var destinationType = null;

     $scope.addToSelectedImages = function(index) {
        var safeIndex = $.inArray(index, castleService.selectedImages);
        if(safeIndex == -1) {
            castleService.selectedImages.push(index);
        } else {
            castleService.selectedImages.splice(safeIndex, 1);
        }
     };

     $scope.sortableOptions = {
         'ui-floating': false,
          handle: '.handle',
          containment: "parent"
     };
     
     $scope.isInArray = function (value, array) {
        return ($.inArray(value, array) == -1) ? false : true;
     };

     $scope.getAnsweredIcon = function(answered) {
         return (answered === true) ? 'check' : 'check_box_outline_blank';
     };


     $scope.clearSelection = function() {
        castleService.selectedImages = [];
     };


     $scope.enterAssignPhotosMode = function() {
         castleService.assignPhotoMode = true;
         castleService.currentPage.showIcon = false;
         castleService.currentPage.title = "Assign Photo";
         castleService.currentPage.showExtraMenu = false;
         castleService.photoAppendixIndex = $scope.sectionIndex;
         $state.go("create",{sectionIndex:'default'});
     };

     $scope.assignPhotos = function(subItem, action) {
         if (subItem.i == null)
             subItem.i = [];
         
         var photoAppendix = $scope.report.sections[castleService.photoAppendixIndex].pages[0].items[0].content;

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
     
     
     $scope.setItemType = function(val) {
         $scope.item.type = val;
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

 
     // output = !input
     $scope.toggleItem = function (pItem) {
         pItem.showvalue = !pItem.showvalue;
     };



      $scope.linkRemark = function(remarkItem, rItem, clear) {
            if (clear) {
                remarkItem.rrTitle = null;
                remarkItem.rrVal = null;
                $scope.rItem.rrTitle = null;
                $scope.rItem.rrVal = null;
            } else {
                remarkItem.rrTitle = rItem.rrTitle;
                remarkItem.rrVal = rItem.rrVal;
            }
      };


      $scope.addRapidRemark = function (remarkTitle, remarkValue, itemIndex, checkboxIndex) {
             console.log("Add rapid remark");
             $scope.report.sections[$scope.sectionIndex]
                 .pages[$scope.selectedPage]
                 .items[$rootScope.itemIndex]
                 .content[$rootScope.checkboxIndex]
                 .rrTitle = remarkTitle;
             $scope.report.sections[$scope.sectionIndex]
                 .pages[$scope.selectedPage]
                 .items[$rootScope.itemIndex]
                 .content[$rootScope.checkboxIndex]
                 .rrVal = remarkValue;
            //console.log(JSON.stringify($scope.report.sections[$scope.sectionIndex].pages[$scope.selectedPage], null, 2));
         };


     $scope.editRapidRemarks = function($event) {
          $mdDialog
             .show({
                 controller: 'itemController',
                 templateUrl: './html/editRapidRemarks.html',
                 parent: angular.element(document.body),
                 targetEvent: event,
                 clickOutsideToClose: true
             });
     };

     $scope.addNewRapidRemark = function(remarkKey, remarkTitle, remarkValue) {
        var remark = {"title":remarkTitle, "value":remarkValue};
         castleService.rapidRemarks[remarkKey].content.push(remark);
         $scope.remarkTitle = null;
         $scope.remarkValue = null;
     };

     $scope.addNewRemarkSection = function(sectionTitle) {
         var rapidRemark = {"title":sectionTitle, "content":[]};
        castleService.rapidRemarks.push(rapidRemark);
         $scope.sectionTitle = null;
     };

     $scope.showRapidRemarksDialog = function (event, itemIndex, checkboxIndex) {
          $rootScope.itemIndex = itemIndex;
          $rootScope.checkboxIndex = checkboxIndex;

                  //console.log("ItemIndex: " + itemIndex + " checkboxindex: " +  checkboxIndex);
          $mdDialog
             .show({
                 controller: 'itemController',
                 templateUrl: './html/rapidRemarksDialog.html',
                 parent: angular.element(document.body),
                 targetEvent: event,
                 clickOutsideToClose: true
                // ,preserveScope: true
             }).finally(function(){
              $rootScope.itemIndex = null;
              $rootScope.checkboxIndex = null;
           // console.log("FINALLY!");
          });
     };



     $scope.cancelDialog = function () {
         $mdDialog.cancel();
     };


 /********************************************************
  * CAMERA
  ***********************************************************/


     // Retrieve image file location from specified source
     $scope.capturePhoto = function(sourceType, source, isArray, isDataUrl) {
         var destination = destinationType.DATA_URL;
         if (!isDataUrl) {
             destination = destinationType.FILE_URI;
         }

        navigator.camera.getPicture(function(imageData) {
             //console.log("Image Data: " + imageData);

             if (isDataUrl) {
                imageData = "data:image/jpeg;base64," + imageData
             }

             $scope.$apply(function () {
                 if (isArray) {
                    source.push(imageData);
                 } else {
                    source = (imageData);
                 }
             });

            }, onFail, {
             quality: 50,
             correctOrientation: true,
             destinationType: destination,
             sourceType: sourceType
         });
     };


     $scope.removeIMG = function (source, index) {
         source.splice(index, 1);
     };

     // set up object with image array then adds photos to the array
     $scope.initCameraAction = function (item, isArray, isDataUrl, title) {
         var array = [];
         if (item.i == null) {
             item["i"] = array;
         }
         $scope.capturePhoto(1, item.i, isArray, isDataUrl);
     };

     // Called if something bad happens.
     function onFail(message) {
          console.log('Failed because: ' + message);
     };

     //Cancel the add opperation
     $scope.cancel = function () {
         window.history.back();
     };

     //Complete the save operation
     $scope.save = function () {
         $scope.addItem();
         window.history.back();
     };


      $scope.getIcon = function(type)
     {
         var result = "error";
         switch (type)
         {
             case 'checkbox':
                 result = "check_box";
                 break;
             case 'radio':
                 result = "radio_button_checked";
                 break;
             case 'select':
                 result = "arrow_drop_down_circle";
                 break;
             case 'presettext':
                 result = "subject";
                 break;
             case 'text':
                 result = "short_text";
                 break;
             case 'date':
                 result = "today";
                 break;
             case 'time':
                 result = "watch_later";
                 break;
             case 'number':
                 result = "iso";
                 break
             case 'image':
                 result = "image";
                 break
             default:
                 result = "error";
                 break;
         }
         return result;
     };
     
 /********************************************************
  * Plus Menu
  ***********************************************************/

     $scope.itemTypes = {
         "types": {
             "checkbox": "checkbox",
             "radio": "radio",
             "select": "dropdown",
             // "presettext" : "Preset Message",
             "number": "number",
             "text": "text",
             "date": "date"
         },
         "type": ""
     };

     $scope.newItem = {
         "title": '',
         "required": false,
         "showvalue": true,
         "type": '',
         "value": '',
         "content": []
     };

     $scope.removeItem = function (toRemove, theType) {
             $scope.newItem.content.splice(toRemove, 1);
     };

     $scope.addItemToReport = function () {
         //console.log("sectionIndex " + $scope.sectionIndex + " Page: " + $scope.selectedPage + " Title: " + $scope.newItem.title);
         $scope.report.sections[$scope.sectionIndex].pages[$scope.selectedPage].items.push($scope.newItem);
         $scope.resetNewItem();
     };

     $scope.resetNewItem = function () {
         $scope.newItem = {
             'title': '',
             'required': false,
             'showvalue': true,
             'type': '',
             'content': [],
             'value': ''
         };
     };

     $scope.resetNewItemValueContents = function () {
             $scope.newItem.title = '';
             $scope.newItem.content = [];
             $scope.newItem.value = {};
             $scope.newItem.required = false;
             $scope.newItem.showvalue = true;
     };

     $scope.addNewItem = function (theType, theValue) {
         var newValue = {
                 "title":theValue,
                 "c": false,
                 "rrTitle":"",
                 "rrVal":""
             };

         switch (theType) {
             case 'checkbox':
             case 'radio':
             case 'select':
                 $scope.newItem.content.push(newValue);
                 break;
         }
        // console.log(JSON.stringify($scope.newItem, null, 2));
     };




 });
