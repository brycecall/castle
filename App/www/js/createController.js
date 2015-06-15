 angular.module('fbiApp').controller('createController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog) {

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




     //
     //Field Notes
     //    Property Description
     //        age
     //        square footage
     //        single or multi-family
     //        residential or commercial
     //        Stories/levels
     //        Frame
     //        crawl space or other spaces
     //        Utilities
     //            on or off
     //            locations
     //
     //    Inspection Conditions
     //        vacant or in-use
     //        inspection duration (begin and end time of inspection)
     //        Weather conditions
     //        Attenders
     //            inspector, clients, agents
     //        Who provided access to the building
     //        Disclaimer of scope

     $scope.report = {
         'Site': {
             'Site': {
                 'conditions': 'The inspection of the site includes the building perimeter',
                 'showconditions': true,
                 'limitations': 'According to the Home Inspection Standards of Practice WAC 308-408C-170...',
                 'showlimitations': true,
                 'checkboxes': {
                     'Driveway': {
                         'n/a': false,
                         'Concrete': false,
                         'Asphalt': false,
                         'Pavers/stone/brick': false,
                         'Dirt/gravel': false

                     },
                     'Patio': {
                         'n/a': false,
                         'Concrete': false,
                         'Asphalt': false,
                         'Pavers/stone/brick': false,
                         'Dirt/gravel': false
                     },
                     'Walkways and Steps': {
                         'n/a': false,
                         'Uneven': false,
                         'Large cracks': false,
                         'Root heaving': false,
                         'Moss build-up': false,
                         'Missing spacers': false,
                         'Settled': false,
                         'Trip hazard': false,
                         'Missing handrails': false,
                         'Missing safety glass': false
                     }
                 },
                 'images': [
                     {
                         'title': 'default title',
                         'url': 'path',
                         'required': false
                         }
                 ]

             },
             'Attached Decks/Balconies/Porches/Steps': {
                 'conditions': 'The inspection of the site includes...',
                 'showconditions': true,
                 'limitations': 'According to the Home Inspection Standards of Practice WAC 308-408C-170....',
                 'showlimitations': true,
                 'checkboxes': {
                     'Driveway': {
                         'n/a': false,
                         'Concrete': false,
                         'Asphalt': false,
                         'Pavers/stone/brick': false,
                         'Dirt/gravel': false

                     },
                     'Patio': {
                         'n/a': false,
                         'Concrete': false,
                         'Asphalt': false,
                         'Pavers/stone/brick': false,
                         'Dirt/gravel': false
                     },
                     'Walkways and Steps': {
                         'n/a': false,
                         'Uneven': false,
                         'Large cracks': false,
                         'Root heaving': false,
                         'Moss build-up': false,
                         'Missing spacers': false,
                         'Settled': false,
                         'Trip hazard': false,
                         'Missing handrails': false,
                         'Missing safety glass': false
                     }
                 },
                 'images': [
                     {
                         'title': 'default title',
                         'url': 'path',
                         'required': false
                         }
                 ]

             }
         },

         'Exterior': {
             'Exterior Wall Cladding': {
                 'conditions': 'The inspection of the site includes....',
                 'showconditions': true,
                 'limitations': 'According to the Home Inspection Standards of Practice WAC 308-408C-170...',
                 'showlimitations': true,
                 'checkboxes': {
                     'Driveway': {
                         'n/a': false,
                         'Concrete': false,
                         'Asphalt': false,
                         'Pavers/stone/brick': false,
                         'Dirt/gravel': false

                     },
                     'Patio': {
                         'n/a': false,
                         'Concrete': false,
                         'Asphalt': false,
                         'Pavers/stone/brick': false,
                         'Dirt/gravel': false
                     },
                     'Walkways and Steps': {
                         'n/a': false,
                         'Uneven': false,
                         'Large cracks': false,
                         'Root heaving': false,
                         'Moss build-up': false,
                         'Missing spacers': false,
                         'Settled': false,
                         'Trip hazard': false,
                         'Missing handrails': false,
                         'Missing safety glass': false
                     }
                 },
                 'images': [
                     {
                         'title': 'default title',
                         'url': 'path',
                         'required': false
                         }
                 ]
             }
         }
     };

     $scope.currentPage = 'Site';
     $scope.subPage = 'Site';

     $scope.close = function () {
         $mdSidenav('left').close()
             .then(function () {
                 $log.debug("close LEFT is done");
             });

     };

     $scope.alert = '';
     $scope.showMessage = function (event) {
         $mdDialog.show(
             $mdDialog.alert()
             .title('Conditions Message')
             .content($scope.items[0].subpage[0].conditions)
             .ariaLabel('')
             .ok('Close!')
             .targetEvent(event)
         );
     };


     $scope.navigatePage = function(sectionkey) {
        $scope.currentPage = sectionkey;
         $scope.close();
     }

     $scope.openCamera = function (checkboxkey) {

     };

 });

// angular.module('fbiApp').controller('leftController', function ($scope, $timeout, $mdSidenav, $log) {
//     $scope.close = function () {
//         $mdSidenav('left').close()
//             .then(function () {
//                 $log.debug("close LEFT is done");
//             });
//
//     };
// });
