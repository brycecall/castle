 app.controller('itemController', function ($scope, $mdUtil, $mdDialog, $rootScope, $stateParams, inspectionService, $state) {
     $scope.inspectionService = inspectionService;
     $scope.report = inspectionService.currentReport;
     $scope.sectionIndex = $rootScope.sectionIndex;
     $scope.pageIndex = $rootScope.pageIndex;
     $scope.itemIndex = $rootScope.itemIndex;
     $scope.item = $rootScope.item;
     //$scope.item = inspectionService.currentReport.sections[$scope.sectionIndex].pages[$scope.pageIndex].items[$scope.itemIndex];
     
//     
//     inspectionService.currentPage.showIcon = true;
//     inspectionService.currentPage.title = $scope.report.sections[$scope.sectionIndex].pages[$scope.pageIndex].title;
//     inspectionService.currentPage.icon = "back";
//     inspectionService.currentPage.toggleNavMenu = false;
//     inspectionService.currentPage.go = {state:"create", params:{section:$scope.sectionIndex}};
//     inspectionService.currentPage.showExtraMenu = true;


     $scope.subPage = '';
     $scope.isOpen = false;
     $scope.togglePlusMenu = false;
     $scope.showAddItemMenu = false;
     var pictureSource = null;
     var destinationType = null;

     $scope.addToSelectedImages = function(index) {
        var safeIndex = $.inArray(index, inspectionService.selectedImages);
        if(safeIndex == -1) {
            inspectionService.selectedImages.push(index);
        } else {
            inspectionService.selectedImages.splice(safeIndex, 1);
        }
     };

     $scope.isInArray = function (value, array) {
        return ($.inArray(value, array) == -1) ? false : true;
     };

     $scope.getAnsweredIcon = function(answered) {
         return (answered === true) ? 'check' : 'check_box_outline_blank';
     };


     $scope.clearSelection = function() {
        inspectionService.selectedImages = [];
     };


     $scope.enterAssignPhotosMode = function() {
         inspectionService.assignPhotoMode = true;
         inspectionService.currentPage.showIcon = false;
         inspectionService.currentPage.title = "Assign Photo";
         inspectionService.currentPage.showExtraMenu = false;
         inspectionService.photoAppendixIndex = $scope.sectionIndex;
         $state.go("create",{section:'default'});
     };

     $scope.assignPhotos = function(subItem, action) {
         if (subItem.i == null)
             subItem.i = [];
         
         var photoAppendix = $scope.report.sections[inspectionService.photoAppendixIndex].pages[0].items[0].content;

         for(var i = 0; i < inspectionService.selectedImages.length; i++) {
             var index = inspectionService.selectedImages[i];
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
            inspectionService.cancelAssignPhotoMode();
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
         inspectionService.selectedPage = index;
        // console.log($scope.selectedPage + ' ' + pagetitle);
     };

   $scope.showRequiredDialog = function (event) {
        var confirm = $mdDialog.confirm()
              .title('Not all required items have been completed')
              .textContent('Are you sure you want to continue?')
              .ariaLabel('Required items incomplete')
              .targetEvent(event)
              .ok('continue anyway')
              .cancel('finish up first');
        $mdDialog.show(confirm).then(function() {
          $state.go('generate');
        }, function() {
         
        });
      };
     
     // validate that all required items have been filled out
     $scope.checkRequired = function () {
         //TODO: validate that all required items have been filled out
          for (var sectionkey in $scope.report.sections) {
             var section = $scope.report.sections[sectionkey];
            for (var pagekey in section.pages) {
                var page = section.pages[pagekey];
                for (var itemkey in page.items) {
                    var item = page.items[itemkey];
                    if (item.required === true && item.answered === false) {
                        $scope.finishedRequired =  false;
                        $scope.showRequiredDialog();
                        return false;
                    }
                }
            }
          }
     $state.go('generate');
    return true;
        // $scope.saveReport();
     };
     
     // Publish report to PDF
     $scope.publishReportPDF = function() {
         var report = document.querySelctor("");
     }
     
     // Save report to server
     $scope.saveReport = function() {
         console.info("Sending report " + $scope.report.name + " with id #" + $scope.report.id);
         // Must use angular.fromJson and angular.toJson to remove angular added $$hashkey.
         inspectionService.io.sendReport(angular.fromJson(angular.toJson($scope.report)));
     }
     $rootScope.sendReport_handler = function(data) {
       if (data.payload.id !== null)
           {
               alert("Report Saved.");
               inspectionService.reports = data.payload;
           }
     };

     // output = !input
     $scope.toggleItem = function (pItem) {
         pItem.showvalue = !pItem.showvalue;
     };

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


//      $scope.clearRapidRemarks = function(remarkItem, rItem) {
//            remarkItem.rrTitle = remarkItem.rItem.rrTitle;
//            remarkItem.rrVal   = remarkItem.rItem
//      };

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
             $scope.report.sections[$scope.sectionIndex].pages[$scope.selectedPage].items[$rootScope.itemIndex].content[$rootScope.checkboxIndex].rrTitle = remarkTitle;
             $scope.report.sections[$scope.sectionIndex].pages[$scope.selectedPage].items[$rootScope.itemIndex].content[$rootScope.checkboxIndex].rrVal = remarkValue;
            //console.log(JSON.stringify($scope.report.sections[$scope.sectionIndex].pages[$scope.selectedPage], null, 2));
         };


     $scope.editRapidRemarks = function($event) {
          $mdDialog
             .show({
                 controller: 'createController',
                 templateUrl: 'editRapidRemarks.html',
                 parent: angular.element(document.body),
                 targetEvent: event,
                 clickOutsideToClose: true
             });
     };

     $scope.addNewRapidRemark = function(remarkKey, remarkTitle, remarkValue) {
        var remark = {"title":remarkTitle, "value":remarkValue};
        inspectionService.rapidRemarks[remarkKey].content.push(remark);
         $scope.remarkTitle = null;
         $scope.remarkValue = null;
     };

     $scope.addNewRemarkSection = function(sectionTitle) {
         var rapidRemark = {"title":sectionTitle, "content":[]};
        inspectionService.rapidRemarks.push(rapidRemark);
         $scope.sectionTitle = null;
     };

     $scope.showRapidRemarksDialog = function (event, itemIndex, checkboxIndex) {
          $rootScope.itemIndex = itemIndex;
          $rootScope.checkboxIndex = checkboxIndex;
                  //console.log("ItemIndex: " + itemIndex + " checkboxindex: " +  checkboxIndex);
          $mdDialog
             .show({
                 controller: 'createController',
                 templateUrl: 'rapidRemarksDialog.html',
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

     $scope.previewReport = function($event) {
          $mdDialog
             .show({
                 //controller: 'generateController',
                 templateUrl: './html/generate.html',
                 parent: angular.element(document.body),
                 targetEvent: event,
                 clickOutsideToClose: true
                // ,preserveScope: true
             })
            .finally(function(){
                // Reset Rapid Remark show/hide values
                for (var remarkSectionKey in $scope.rapidRemarks) {
                    var remarkSection = $scope.rapidRemarks[remarkSectionKey];
                    remarkSection.showValue = false;
                    for (var remarkKey in remarkSection.content) {
                        var remark = remarkSection.content[remarkKey];
                        remark.showValue = false;
                    }
                }
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


 /********************************************************
  * Plus Menu
  ***********************************************************/

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
         //console.log("Section: " + $scope.sectionIndex + " Page: " + $scope.selectedPage + " Title: " + $scope.newItem.title);
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

     $scope.addPageToReport = function (newPage) {
         $scope.report.sections[$scope.sectionIndex].pages.push({'title':newPage, "items":[]});
         //console.log(JSON.stringify($scope.report[$scope.sectionIndex][newPage], null, 2));
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
