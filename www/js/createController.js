 app.controller('createController', function ($scope, $mdUtil, $mdDialog, $rootScope, $stateParams, inspectionService) {

     $scope.currentSection = $stateParams.section;
     inspectionService.currentSection = $scope.currentSection;
     $scope.selectedPage = inspectionService.selectedPage;
     $scope.report = inspectionService.currentReport;
     $scope.report = reportOne; //REMOVE after testing
     $scope.subPage = '';
     $scope.isOpen = false;
     $scope.togglePlusMenu = false;
     $scope.images = [];
     $scope.showAddItemMenu = false;
     var pictureSource;
     var destinationType;
     var imageLocation;
     var cameraDestination;

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
         inspectionService.selectedPage = index;
        // console.log($scope.selectedPage + ' ' + pagetitle);
     }

     // change main header image and title
     if ($scope.currentSection == "default") {
         inspectionService.currentPage.toggleNavMenu = true;
         inspectionService.currentPage.title = "Inspection";
         inspectionService.currentPage.icon = "menu";

     } else {
         inspectionService.currentPage.title = $scope.report.sections[$scope.currentSection].title;
         inspectionService.currentPage.icon = "back";
         inspectionService.currentPage.toggleNavMenu = false;
         inspectionService.currentPage.link = "create({section:'default'})";
         inspectionService.currentPage.showExtraMenu = true;
     }

     // validate that all required items have been filled out
     $scope.checkRequired = function () {
         //TODO: validate that all required items have been filled out
     }

     // output = !input
     $scope.toggleItem = function (pItem) {
         pItem.showvalue = !pItem.showvalue;
     }

     // Replace mdDialog?
//     $scope.toggleAddItemMenu = function () {
//          $scope.toggleItem(inspectionService.backdrop);
//          $scope.toggleItem($scope.showAddItemMenu);
//     }

     $scope.showItemDialog = function (event) {
         $mdDialog.show({
             controller: 'createController',
             templateUrl: 'itemDialog.html',
             parent: angular.element(document.body),
             targetEvent: event,
             clickOutsideToClose: true,
             preserveScope: true,
         });
     };

     $scope.showPageDialog = function (event) {
         $mdDialog.show({
             controller: 'createController',
             templateUrl: 'pageDialog.html',
             parent: angular.element(document.body),
             targetEvent: event,
             clickOutsideToClose: true,
             preserveScope: true,
         });
     };

     $scope.cancelDialog = function () {
         $mdDialog.cancel();
     };


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
             destinationType: destinationType.DATA_URL
         });

     };

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
             sourceType: source
         });


     };

     $scope.removeIMG = function (pJSONIMG, source) {
         source.splice(source.indexOf(pJSONIMG), 1);
     };

     $scope.initCameraAction = function (pCheckboxval) {
         var imgJSON = {};
         pCheckboxval.i.push(imgJSON);
         cameraDestination = pCheckboxval.i[pCheckboxval.i.length - 1];
         $scope.getPhoto(1);
     };


     // Called if something bad happens.
     $scope.onFail = function onFail(message) {
          alert('Failed because: ' + message);
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

     $scope.capturePagePhoto = function (listValue, itemVal) {
         var imgJSON = {
             'title': '',
             'i': ''
         };
         imgJSON.title = listValue;
         itemVal.content.push(imgJSON);
         cameraDestination = itemVal.content[itemVal.content.length - 1];
         $scope.getPhoto(1);
     };

 /********************************************************
  * Plus Menu
  ***********************************************************/

     //TODO: Fix this for new JSON structure
     $scope.captureAppendixPhoto = function () {
         var imgJSON = {
             'title': '',
             'i': ''
         }
         var source = $scope.report['Photo Appendix']['Additional Photos for Further Clarification']['Photo Appendix Images'].content;
         source.push(imgJSON);
         cameraDestination = source[source.length - 1];
         $scope.getPhoto(1);
     };

     $scope.itemTypes = {
         "types": {
             "checkbox": "checkbox",
             "radio": "radio",
             "select": "image",
             // "presettext" : "Preset Message",
             "number": "Number",
             "text": "Text",
             "date": "Date"
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
         //console.log("Section: " + $scope.currentSection + " Page: " + $scope.selectedPage + " Title: " + $scope.newItem.title);
         $scope.report.sections[$scope.currentSection].pages[$scope.selectedPage].items.push($scope.newItem);
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

     $scope.addPageToReport = function (newPage) {
         $scope.report.sections[$scope.currentSection].pages.push({'title':newPage, "items":[]});
         //console.log(JSON.stringify($scope.report[$scope.currentSection][newPage], null, 2));
     };

//     function jambaJSON() {
//         for (var sectionkey in reportOne.sections) {
//             var section = reportOne.sections[sectionkey];
//            for (var pagekey in section.pages) {
//                var page = section.pages[pagekey];
//                for (var itemkey in page.items) {
//                    var item = page.items[itemkey];
//
//                    if (item.type == 'radio' || item.type == 'select') {
//                        var tcontent = [];
//
//                        if (item.content != []) {
//                            for (var i in item.content) {
//                                var key = "";
//                                for (key in item.content[i]);
//                                var temp = {'title':i,'rrTitle':key, 'rrVal':item.content[i][key]};
//                                tcontent.push(temp);
//                            }
//                            reportOne.sections[sectionkey].pages[pagekey].items[itemkey].content = tcontent;
//                        }
//                    } else if (item.type == 'checkbox') {
//                        var tcontent = [];
//                        for (var i in item.value) {
//                            var temp = {'title':i,'c':false};
//                            tcontent.push(temp);
//                        }
//                        reportOne.sections[sectionkey].pages[pagekey].items[itemkey].content = tcontent;
//                        item.value = [];
//                        reportOne.sections[sectionkey].pages[pagekey].items[itemkey].value = [];
//                    }
//                }
//            }
//         }
//         console.log(JSON.stringify(reportOne, null, 2));
//     }
//
//     jambaJSON();

 });
