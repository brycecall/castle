 app.controller('pageController', function ($scope, $mdUtil, $mdDialog, $rootScope, 
                                            $stateParams, castleService, $state, 
                                            $timeout, cameraService) {
     $scope.castleService = castleService;
     $scope.report = castleService.currentReport.data;
     $scope.sectionIndex = $stateParams.sectionIndex;
     $scope.pageIndex = $stateParams.pageIndex;
     $scope.page = $scope.report.sections[$scope.sectionIndex].pages[$scope.pageIndex];
     
     // change main header image and title
     castleService.currentPage.showIcon = true;
     castleService.currentPage.title = $scope.report.job.reportInf.reportTitle 
                                        || "No report loaded"; 
     castleService.currentPage.icon = "back";
     castleService.currentPage.toggleNavMenu = false;
     castleService.currentPage.go = {state:"inspection", params:{'sectionIndex':'default'}};
     castleService.currentPage.showEditMode = true;
     
     $scope.rapidRemarks = castleService.rapidRemarks;
     //castleService.reportTemplate = reportOne;
     //$scope.report = reportOne; //REMOVE after testing
     $scope.subPage = '';
     $scope.isOpen = false;
     $scope.togglePlusMenu = false;
     $scope.showAddItemMenu = false;
     var pictureSource = null;
     var destinationType = null;
     $scope.editMode = false;

     $scope.addToSelectedImages = function(index) {
        var safeIndex = $.inArray(index, castleService.selectedImages);
        if(safeIndex == -1) {
            castleService.selectedImages.push(index);
        } else {
            castleService.selectedImages.splice(safeIndex, 1);
        }
     };
     
     $scope.remove = function(level, index) {
         $scope.buffer = level.splice(index, 1);
     };
     
     $scope.isItemSet = function(item) {
        return (item.type !== null && 
                item.type !== undefined && 
                item.type !== '')
     };

     $scope.addQuestion = function(array, index) {
         
         var template = {
              "title": "NEW QUESTION TITLE",
              "content": [],
              "value":""
         }
         array.splice(index, 0, template);
     };
     
     $scope.addNewQuestion = function(array) {
         var template = {
              "title": "",
              "content": [],
              "value":""
         }
         
         array.push(template);
         
         $timeout(function(){ 
            document.getElementById('questionId' + (array.length -1)).focus();
         }, 0);
     };

     $scope.getAnsweredIcon = function(answered) {
         return (answered === true) ? 'check' : 'check_box_outline_blank';
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
                 result = "looks_one";
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
         castleService.io.sendReport(angular.fromJson(angular.toJson($scope.report)));
     }
     $rootScope.sendReport_handler = function(data) {
       if (data.payload.id !== null)
           {
               alert("Report Saved.");
               castleService.reports = data.payload;
           }
     };

     // output = !input
     $scope.toggleItem = function (pItem) {
         pItem.showvalue = !pItem.showvalue;
     };

     // Replace mdDialog?
//     $scope.toggleAddItemMenu = function () {
//          $scope.toggleItem(castleService.backdrop);
//          $scope.toggleItem($scope.showAddItemMenu);
//     }
     


     $scope.showItemDialog = function (event) {
         $mdDialog.show({
             controller: 'pageController',
             templateUrl: './html/itemDialog.html',
             parent: angular.element(document.body),
             targetEvent: event,
             clickOutsideToClose: true,
             preserveScope: true,
         });
     };

     $scope.showPageDialog = function (event) {
         $mdDialog.show({
             controller: 'pageController',
             templateUrl: './html/pageDialog.html',
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
             $scope.report.sections[$scope.selectedSection].pages[$scope.selectedPage].items[$rootScope.itemIndex].content[$rootScope.checkboxIndex].rrTitle = remarkTitle;
             $scope.report.sections[$scope.selectedSection].pages[$scope.selectedPage].items[$rootScope.itemIndex].content[$rootScope.checkboxIndex].rrVal = remarkValue;
            //console.log(JSON.stringify($scope.report.sections[$scope.selectedSection].pages[$scope.selectedPage], null, 2));
         };


     $scope.editRapidRemarks = function($event) {
          $mdDialog
             .show({
                 controller: 'createController',
                 templateUrl: 'editRapidRemarks.html',
                 parent: angular.element(document.body),
                 targetEvent: event,
                 clickOutsideToClose: true,
                 fullscreen: true
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
                 controller: 'createController',
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


     $scope.capturePhoto = function(array, index, isDataUrl) {
         if (array) {
            cameraService.capturePhoto(array, index, isDataUrl);
         } else {
            cameraService.capturePhoto(castleService.currentReport, "photoAppendix", true);
         }
        
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
         //console.log("sectionIndex " + $scope.selectedSection + " Page: " + $scope.selectedPage + " Title: " + $scope.newItem.title);
         $scope.report.sections[$scope.sectionIndex].pages[$scope.pageIndex].items.push($scope.newItem);
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
         //console.log(JSON.stringify($scope.report[$scope.selectedSection][newPage], null, 2));
     };



 });
