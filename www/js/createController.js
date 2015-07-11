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

 });
