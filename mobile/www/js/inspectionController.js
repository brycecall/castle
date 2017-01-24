 app.controller('inspectionController', function ($scope, $mdUtil, $mdDialog, 
                                                  $rootScope, $stateParams, castleService, 
                                                  $state, $timeout, firebaseIO, $q, cameraService) {
     $scope.castleService = castleService;
     $scope.selectedSection = $stateParams.sectionIndex;
     $scope.castleService.selectedSection = $scope.selectedSection;
     $scope.selectedPage = castleService.selectedPage;
     $scope.report = castleService.currentReport.data;

     
     // change main header image and title
     castleService.currentPage.showIcon = true;
     castleService.currentPage.toggleNavMenu = true;
     castleService.currentPage.title = $scope.report.job.reportInf.reportTitle.value 
                                        || "No report loaded"; 
     castleService.currentPage.icon = "menu";
     castleService.currentPage.showEditMode = true;
     castleService.currentPage.downMenu = [
         {
             title:"Job Information",
             link:"create({'type':'info'})"
         }
     ];
     castleService.currentPage.showDownMenu = true;
     
     $scope.rapidRemarks = castleService.rapidRemarks;
     $scope.finishedRequired = false;
     $scope.editMode = false;

//     castleService.reportTemplate = reportOne;
     //$scope.report = reportOne; //REMOVE after testing
     $scope.subPage = '';
     $scope.isOpen = false;
     $scope.togglePlusMenu = false;
     $scope.showAddItemMenu = false;
     var pictureSource = null;
     var destinationType = null;
     
     $scope.capturePhoto = function(array, index, isDataUrl) {
         if (array) {
            cameraService.capturePhoto(array, index, isDataUrl);
         } else {
            cameraService.capturePhoto(castleService.currentReport, "photoAppendix", true);
         }
     };  
     
     
     $scope.isSectionComplete = function(section) {
         var total = section.pages.length;
         var count = 0;
         for (var i = 0; i < total; i++) {
            if (section.pages[i].answeredCount >= section.pages[i].items.length) {
                count++;
            }
            else
            {
                return false;
            }
         }
         return (count >= total);
     };
     
     
    $scope.savedDialog = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title('Saved Successfully!')
        .textContent('Your report has been saved to the cloud.')
        .ariaLabel('Saved successfully dialog')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };
     $scope.saveReport = function() {
         firebaseIO.setReport(castleService.currentReport)
                   .then(function() {
                        console.log("Success");
                        $scope.savedDialog();
                    }, function(error){
                        console.log("Error: " + error);
         });
     };

     $scope.saveAsTemplate = function() {
         
         var template = castleService.currentReport;
          template.photoAppendix = [];
          for (var sectionkey in template.sections) {
             var section = template.sections[sectionkey];
             if (section.answeredCount) {
                section.answeredCount = 0;
             }
             for (var pagekey in section.pages) {
                var page = section.pages[pagekey];
                 if (page.answeredCount) {
                    page.answeredCount = 0;
                 }
                 for (var itemkey in page.items) {
                     var item = page.items[itemkey];
                     if (item.value) {
                        if (item.type == "presettext") {
                           item.showvalue = false;
                        } else if (item.type == "image") {
                           item.i = [];
                        } else {
                            item.value = ""
                        }
                     }
                     item.answered = false;
                        
                     for (var subItemKey in item.content) {
                          var subItem = item.content[subItemKey];
                          if (subItem.i) {
                            subItem.i = [];
                          }
                          if (subItem.c) {
                            subItem.c = false;
                          }
                          
                     }
                }
             }
          }
         //console.log("Template: ");
         //console.log(template);
         

//         
//         firebaseIO.setTemplate(template)
//                   .then(function() {
//                        console.log("Success");
//                        $scope.savedDialog();
//                    }, function(error){
//                        console.log("Error: " + error);
//         });
     };

     $scope.addToSelectedImages = function(index) {
        var safeIndex = $.inArray(index, castleService.selectedImages);
        if (safeIndex == -1) {
            castleService.selectedImages.push(index);
        } else {
            castleService.selectedImages.splice(safeIndex, 1);
        }
     };

     $scope.buffer = [];
     $scope.remove = function(level, index) {
         $scope.buffer = level.splice(index, 1);
     };
     
     $scope.accordianIndex = -1;
     $scope.toggleAccordianIndex = function(index) {
         
         if (index == $scope.accordianIndex)
         {
            $scope.accordianIndex = -1;
         }
         else
         {
            $scope.accordianIndex = index;
         }
     };
     $scope.setAccordianIndex = function(index) {
            $scope.accordianIndex = index;
     };
     $scope.matchesAccordianIndex = function(index) {
        return (index == $scope.accordianIndex);
     };
     
     $scope.getTemplate = function() {
        
     };
     
     $scope.addSection = function(array, index) {
         
         var template = {
              "title": "",
              "color": "#000000",
              "pages": []
         }
         array.splice(index, 0, template);
     };
     
     $scope.addNewSection = function(array) {
         var template = {
              "title": "",
              "color": "#000000",
              "pages": []
         }
         array.push(template);
         
         $timeout(function(){ 
            document.getElementById('sectionId' + (array.length -1)).focus();
         }, 0);
         
       };
     
    $scope.addNewSubSection = function(array) {
         var template = {
              "title": "",
              "answeredCount":0,
              "items": [
              ]
         }
         array.push(template);
         
         $timeout(function(){ 
            document.getElementById('subSectionId' + (array.length -1)).focus();
         }, 0);
         
    };
     
     $scope.addSubsection = function(array, index) {
         
         var template = {
              "title": "NEW SUBSECTION TITLE",
              "color": "#000000",
              "answeredCount":0,
              "items": [
              ]
         }
         array.splice(index, 0, template);
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
         castleService.photoAppendixIndex = $scope.selectedSection;
         $state.go("create",{sectionIndex:'default'});
     };

     
     $scope.editItemDialog = function($event, item) {
//         $rootScope.itemIndex = itemIndex;
//         $rootScope.pageIndex = $scope.page;
//         $rootScope.sectionIndex = $scope.section;
         $rootScope.item = item;
    
          $mdDialog
             .show({
                 controller: 'itemController',
                 templateUrl: 'html/item.html',
                 parent: angular.element(document.body),
                 targetEvent: event,
                 clickOutsideToClose: false,
                 fullscreen: true
             });
     };
     
     
     $scope.assignPhotos = function(subItem, action) {
         if (subItem.i == null)
             subItem.i = [];
         
         var photoAppendix = $scope.report.sections[castleService.photoAppendixIndex]
                                   .pages[0].items[0].content;

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
     
     // check sections and pages to see if they have any required questions in them
     // returning false allows these to be deleted. true prevents it.
     $scope.sectionHasRequired = function(section) {
            
     };
     $scope.pageHasRequired = function(page) {
         
     };
     
     // Publish report to PDF
     $scope.publishReportPDF = function() {
         var report = document.querySelctor("");
     };
     
//     // Save report to server
//     $scope.saveReport = function() {
//         console.info("Sending report " + $scope.report.name + " with id #" + $scope.report.id);
//         // Must use angular.fromJson and angular.toJson to remove angular added $$hashkey.
//         castleService.io.sendReport(angular.fromJson(angular.toJson($scope.report)));
//     }
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
         $scope.report.sections[$scope.selectedSection]
               .pages[$scope.selectedPage].items[$rootScope.itemIndex]
               .content[$rootScope.checkboxIndex].rrTitle = remarkTitle;
         $scope.report.sections[$scope.selectedSection]
               .pages[$scope.selectedPage].items[$rootScope.itemIndex]
               .content[$rootScope.checkboxIndex].rrVal = remarkValue;
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
         //console.log("sectionIndex " + $scope.selectedSection + " Page: " + $scope.selectedPage + " Title: " + $scope.newItem.title);
         $scope.report.sections[$scope.selectedSection]
               .pages[$scope.selectedPage].items.push($scope.newItem);
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
     
     $scope.logstuff = function(stuff) {
        console.log(stuff);
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
         $scope.report.sections[$scope.selectedSection]
               .pages.push({'title':newPage, "items":[]});
         //console.log(JSON.stringify($scope.report[$scope.selectedSection][newPage], null, 2));
     };



 });
