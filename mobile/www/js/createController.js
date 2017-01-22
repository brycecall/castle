 app.controller('createController', function ($scope, $mdUtil, $mdDialog, 
                                              $rootScope, $stateParams, 
                                              castleService, $state, firebaseIO, 
                                              $timeout) {
     $scope.castleService = castleService;
     $scope.type = $stateParams.type;
     castleService.reportTemplate = null;
     $scope.templates = [];
     $scope.report = null;
     $scope.title = "New Job";
     if($scope.type !== 'info') {
        castleService.currentReport = null;
     } else {
        $scope.title = "Job Information";
         castleService.currentPage.downMenu = [
             {
                 title: castleService.currentReport.data.job
                                     .reportInf.reportTitle.value || "untitled",
                 link:"inspection({'sectionIndex':'default'})"
             }
         ];
     castleService.currentPage.showDownMenu = true;
     }
    

     // change main header image and title
     castleService.currentPage.showIcon = true;
     castleService.currentPage.toggleNavMenu = true;
     castleService.currentPage.title = $scope.title;
     castleService.currentPage.icon = "menu";
     castleService.currentPage.showEditMode = false;
     
     $scope.rapidRemarks = castleService.rapidRemarks;
     $scope.editMode = false;
     $scope.toggleEditMode = function() {
        castleService.editMode = !castleService.editMode;
        if (castleService.editMode) {
            castleService.currentPage.color = '#000';
            
        } else {
            castleService.currentPage.color = castleService.defaultColor;
            castleService.currentPage.title = $scope.title;
        }
     };

     $scope.subPage = '';
     $scope.isOpen = false;
     $scope.togglePlusMenu = false;
     $scope.showAddItemMenu = false;
     
     window.onload = function() {
         if ($scope.type !== 'info') {
             firebaseIO.getTemplateMeta().then(function(data) {
                 $timeout(function() {
                     $scope.templates = data;
                 });
             }, function(error) {
                 console.log(error);
                 $state.go("account");
             });
         } else {
             console.log("We got here! Wha?");
             
                 $timeout(function() {
                      $scope.report = castleService.currentReport;
                 });
             console.log($scope.report);
         }
     }();
     
     $scope.selectTemplate = function(sTemplate) {
         //console.log(sTemplate);
         //firebaseIO.insertTemplate(castleService.reportTemplates[0]);
         if (sTemplate) {
             
             firebaseIO.getTemplateData(sTemplate.$id)
                       .then(function(template) {
                 $timeout(function() {
                     castleService.currentReport = template.val();
                     $scope.report = castleService.currentReport;
                 });
             }, function(error) {
                 console.log("Error: " + error);
             });
         }
     };
     
     $scope.saveJob = function() {
         if (castleService.currentReport) {
            for (var i = 0; i < castleService.currentReport.data.jobStatic.length; i++) {
                var job = castleService.currentReport.data.jobStatic[i];
                castleService.currentReport.data.job = job.key;
                for (var j = 0; j < job.items; j++) {
                    castleService.currentReport
                                 .data.job[job.key] = job.items[j].key;
                    castleService.currentReport
                                 .data.job[job.key][job.items[j].key] = job.items[j].value;
                }
            }
         
         
             var key = firebaseIO.insertReport(castleService.currentReport);
             firebaseIO.getReport(key).then(function(data) {
                castleService.currentReport = data;
                $state.go("inspection", {sectionIndex:'default'});
             }, function(error) {
                console.log("Error retrieving the report: \n" + error);
             });
         }
         else {
            console.log("Save Job failed. Report cannot be undefined");
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


    $scope.showRequiredDialog = function(event) {
        var confirm = $mdDialog.confirm()
            .title("Not all required questions have been ansered")
            .textContent("Are you sure you want to continue?")
        ;
    };

 });
