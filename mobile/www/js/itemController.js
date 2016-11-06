 app.controller('itemController', function ($scope, $mdUtil, $mdDialog, $rootScope, 
                                            $stateParams, castleService, $state) {
     $scope.castleService = castleService;
     $scope.report = castleService.currentReport;
     $scope.sectionIndex = $stateParams.sectionIndex;
     $scope.pageIndex = $stateParams.pageIndex;
     $scope.itemIndex = $stateParams.itemIndex;
     castleService.selectedSection = $scope.sectionIndex;
     castleService.selectedPage = $scope.pageIndex;
     $scope.page = $scope.report
           .sections[$scope.sectionIndex]
           .pages[$scope.pageIndex];
     $scope.item = $scope.page.items[$scope.itemIndex];

     castleService.currentPage.showIcon = true;
     castleService.currentPage.title = $scope.report.sections[$scope.sectionIndex]
                                             .pages[$scope.pageIndex].title;
     castleService.currentPage.icon = "back";
     castleService.currentPage.toggleNavMenu = false;
     castleService.currentPage.go = {state:"page", params:{'sectionIndex':$scope.sectionIndex, 
                                                           'pageIndex':$scope.pageIndex}};
     castleService.currentPage.showEditMode = true;

     $scope.subPage = '';
     $scope.isOpen = false;
     $scope.togglePlusMenu = false;
     $scope.showAddItemMenu = false;
     var pictureSource = null;
     var destinationType = null;
     
     $scope.onSwipe = function(direction) {
        var itemIndex = $scope.itemIndex;
        var pageLength = $scope.page.items.length;
        switch(direction) {
            case "left":
                itemIndex++;
                break;
            case "right":
                itemIndex--;
                break;
            default:
                return;
        }
         if (itemIndex >= pageLength || itemIndex < 0)
         {
          $state.go("page", {'sectionIndex':$scope.sectionIndex, 
                             'pageIndex':$scope.pageIndex});
         }
         else 
         {
         $state.go("item", {'sectionIndex':$scope.sectionIndex, 
                            'pageIndex':$scope.pageIndex,
                            'itemIndex':itemIndex
                           });
         }
     };


     $scope.itemSet = function() {
        return ($scope.item.type !== undefined
             && $scope.item.type !== null 
             && $scope.item.type !== '')
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
     
     $scope.buffer = [];
     $scope.remove = function(level, index) {
         $scope.buffer = level.splice(index, 1);
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
     
 /********************************************************
  * Plus Menu
  ***********************************************************/

     $scope.itemTypes = {
         "types": {
             "checkbox": "checkbox",
             "radio": "radio",
             "select": "dropdown",
             "presettext" : "paragraph",
             "number": "number",
             "text": "text",
             "date": "date"
         },
         "type": ""
     };

     $scope.addSubQuestion = function(newstuff) 
     {
        var stuff = {
            "title": newstuff,
            "c": false
        }
        $scope.item.content.push(stuff);
     };
     
     $scope.newItem = {
         "title": '',
         "required": false,
         "showvalue": true,
         "type": '',
         "value": '',
         "content": []
     };
     
    $scope.toggleAnswered = function(value) {
        if (value != null && value != undefined)
        {
            //only modify the answeredCount if the value of answered changed
            if ($scope.item.answered != value)
            {
                $scope.item.answered = value;
                $scope.page.answeredCount += (value) ? 1 : -1;
            }
        }
        else
        {
            $scope.item.answered = !$scope.item.answered;
            $scope.page.answeredCount += ($scope.item.answered) ? 1 : -1;
        }
    };
     
     $scope.clearQuestion = function(item) 
     {
         $scope.toggleAnswered(false);
         item.value = ''; 
         if (item.type === 'checkbox')
         {
            for(var i = 0; i < item.content.length; i++)
            {
                item.content[i].c = false;
            }
         }
         //item.content = []; 
     };
     $scope.removeIMG = function (source, index) {
         source.splice(index, 1);
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
                 "rrVal":"",
                 "content":[],
                 "value":""
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

    $scope.getItemType = function(type){
        var result = "Select a Question Type";
        if (type != null && type != "" && type != undefined) {
            result = $scope.itemTypes.types[type];
        }
        return result;
    };
 });
