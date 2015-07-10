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

     //     Field Notes
     //         Property Description
     //             age
     //             square footage
     //             single or multi-family
     //             residential or commercial
     //             Stories/levels
     //             Frame
     //             crawl space or other spaces
     //             Utilities
     //                 on or off
     //                 locations
     //
     //         Inspection Conditions
     //             vacant or in-use
     //             inspection duration (begin and end time of inspection)
     //             Weather conditions
     //             Attenders
     //                 inspector, clients, agents
     //             Who provided access to the building
     //             Disclaimer of scope

     $scope.report = {
         'Field Notes': {
             'Field Notes From Site Evaluation': {
                 'clientinfo': {
                     'type': 'clientinfo',
                     'value': {
                         'firstName': '',
                         'lastName': '',
                         'address': '',
                         'addressTwo': '',
                         'city': '',
                         'state': '',
                         'postalCode': ''
                     }
                 },
                 'Conditions': {
                     'type': 'presettext',
                     'showcontent': true,
                     'content': 'This Report concerns the visual [INSERT OPTION] inspection of an approximately [CALCULATE & INSERT AGE] old, [INSERT SQFT], [INSERT TYPE OF HOME],[INSERT PROPERTY USE],[INSERT NUMBER OF STORIES],[INSERT HOUSE FRAME],[INSERT PROPERTY TYPE],[INSERT CONFIGURATIONS], built in [INSERT YEAR].  The main entrance, driveway, or street access appeared to be facing predominantely toward the [INSERT PROPERTY ORIENTATION].  The street surface was [INSERT DRIVEWAY TYPE], and vehicle parking was available [INSERT VEHICLE PARKING]. ...   The locations of the main utility controls, shut-off valves, and/or disconnects are noted in the applicable mechanical sections.'
                 },

                 'Limitations': {
                     'type': 'presettext',
                     'content': 'Detached outbuildings, seasonally visible defects, poorly accessible components, areas that may have been hidden and/ or areas containing significant furnishings or storage are not included in the scope of this inspection.',
                         'showcontent': true

                 },
                 'Inspection Type': { //Wants a "Spin the Dial"
                     'type': 'checkbox',
                     'value': {
                         'Full': false,
                         'Partial': false,
                         'Abbreviated': false,
                         'Ancillary': false,
                         'Limited': false,
                         '203(k)': false,
                         'Rehabilitation': false
                     }
                 },
                 'Year Built': { //Wants a "Spin the Dial"
                     'type': 'checkbox',
                     'value': {
                         '1': false,
                         '2': false,
                         '3': false,
                         '4': false,
                         'Spin Dial': false
                     }
                 },
                 'Squarefeet of the Property': { //NEEDS NUMBER ENTRY
                     'type': 'number',
                     'label': 'Enter Squarefeet Here',
                     'value:':''
                 },
                 'Type of Home': {
                     'type': 'checkbox',
                     'value': {

                         'Single Family': false,
                         'Single Use': false,
                         'Multiple Use': false,
                         'Duplex': false,
                         'Triplex': false,
                         'Multi Family': false,
                         'Detatched': false,
                         'OTHER (NEED MORE DATA)': false
                     }
                 },

                 'Property Use': {
                     'type': 'checkbox',
                     'value': {
                         'Residential': false,
                         'Apartment': false,
                         'Retail Store': false,
                         'Business': false,
                         'Industrial': false,
                         'Commercial': false
                     }
                 },
                 'Height of Home (In Stories)': {
                     'type': 'checkbox',
                     'value': {
                         '1 Story': false,
                         '2 Story': false,
                         '3 Story': false,
                         'More! (NEED MORE DATA)': false
                     }
                 },
                 'House Frame': {
                     'type': 'checkbox',
                     'value': {
                         'Wood-Framed': false,
                         'Brick & Mortar (Maybe?)': false,
                         'OTHER (NEED MORE DATA)': false
                     }
                 },
                 'HOME?': {
                     'type': 'checkbox',
                     'value': {
                         'Home': false,
                         'OTHER (NEED MORE DATA)': false
                     }
                 },
                 'Crawlspace': {
                     'type': 'checkbox',
                     'value': {
                         'Available': false
                     }
                 },
                 'Number of Stories': {
                     'type': 'checkbox',
                     'value': {
                         'Rambler': false,
                         'One Level': false,
                         'Split-Entry': false,
                         'Split-Level': false,
                         'One Story': false,
                         '1 1/2 Story': false,
                         'Two-Story': false,
                         'Three-Story': false,
                         'Mid-Rise': false,
                         'Multi-Level': false
                     }
                 },
                 'House Frame': { //radio
                     'type': 'radio',
                     'content': [
                         'Wood-Framed',
                         'Steel-Framed',
                         'Concrete',
                         'CMU/Block',
                         'Masonry',
                         'Tilt-Up',
                         'Wood-Frame on Steel Carriage',
                         'ICF'
                     ],
                     'value':''
                 },
                 'Property Type': { //radio
                     'type': 'radio',
                     'content': [
                         'Home',
                         'Twin Home',
                         'Town Home',
                         'Mobile Home',
                         'Log Home',
                         'Manufactured Home',
                         'Prefabbed Structure',
                         'Condominium',
                         'Building',
                         'Garage',
                         'Low-Rise',
                         'Mid-Rise',
                         'High-Rise'
                     ],
                     'value': ''
                 },
                 'Configurations': { //CHECKBOXES
                     'type': 'checkbox',
                     'value': {
                         'w/ Lower Parking Garage': false,
                         'w/ Basement & Garage': false,
                         'w/ Garage': false,
                         'w/ Garage & Crawlspace': false,
                         'w/ Full Basement': false,
                         'w/ Daylight Basement': false,
                         'w/ Basement & Crawlspace(s)': false,
                         'w/ Crawlspace': false,
                         'w/ Slab-On-Grade': false,
                         'Over Adjoining Unit(s)': false,
                         'Over Adjoining Basement Unit': false
                     }
                 },
                 'Property Orientation': {
                     'type': 'radio',
                     'content': [
                         'North',
                         'East',
                         'West',
                         'South',
                         'North-East',
                         'North-West',
                         'South-East',
                         'South-West'
                     ],
                     'value':''
                 },
                 'Vehicle Parking': { //CHECKBOXES
                     'type': 'checkbox',
                     'value': {
                         'At Curbside': false,
                         'In a Rear Alley': false,
                         'In the Driveway': false,
                         'In Attached Garage(s)': false,
                         'In a Detached Garage': false,
                         'In an Attached Carport': false,
                         'In a Detached Carport': false,
                         'In a Covered Parking Space': false,
                         'In an Open Parking Space': false,
                         'In a Secured Parking Garage': false,
                         'In an Open Parking Garage': false,
                         'In an Open,Striped Parking Lot': false
                     }
                 },
                 'Utilities': { //radio
                     'type': 'radio',
                     'value': {
                         'Electricity': false,
                         'Electricity and Water': false,
                         'Electricity, Water, and Gas': false,
                         'Electricity, Water, and Oil': false,
                         'Electricity and Propane': false,
                         'Electricity, Water, and Propane': false
                     }
                 },
                 'Any Utilities OFF': { //Checkboxes
                     'type': 'checkbox',
                     'value': {
                         'Electricity': false,
                         'Water': false,
                         'Gas': false,
                         'Oil': false,
                         'Propane': false
                     }
                 },
                 'direction': { //radio
                     'type': 'radio',
                     'value': {
                         'North': false,
                         'East': false,
                         'West': false,
                         'South': false,
                         'North-East': false,
                         'North-West': false,
                         'South-East': false,
                         'South-West': false
                     }

                 }
                 //ADD: "Built in 1987"




             }
         },
         'Site': {
             'Site': {
                 'Conditions': {
                     'type': 'presettext',

                         'content': 'The inspection of the site includes the building perimeter, land grade, and water drainage directly adjacent to the foundation; trees and vegetation that adversely affect the structure; walks, grade steps, driveways, patios, and retaining walls contiguous with the structure.\n The report describes the material used for driveways, walkways, patios and other flatwork around the home, the serviceability of the driveways, steps, walkways, patios, flatwork and retaining walls contiguous with the structure, proper grading and drainage slope, vegetation in close proximity to the home, and a description of any deficiencies of these systems or components.',
                         'showcontent': true

                 },
                 'Limitations': {
                     'type': 'presettext',

                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-170 of the Washington State Dept. of Licensing, the inspector is not required to: (1)inspect fences, privacy walls or retaining walls that are not contiguous with the structure, (2)report the condition of soil, trees, shrubs or vegetation unless they adversely affect the structure, (3)evaluate hydrological or geological conditions, (4)determine the adequacy of bulkheads, sea-walls, break- walls, and docks.',
                         'showcontent': true

                 },
                 'Driveway': {
                     'type': 'checkbox',
                     'value': {
                         'n/a': false,
                         'Concrete': false,
                         'Asphalt': false,
                         'Pavers/stone/brick': false,
                         'Dirt/gravel': false
                     }
                 },
                 'Driveway Condition': {
                     'type': 'checkbox',
                     'value': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Pitched towards home': false,
                         'Typical cracks': false,
                         'Large cracks': false,
                         'Root heaving': false,
                         'Uneven': false,
                         'Trip/Falling Hazard': false
                     }
                 },
                 'Patio': {
                     'type': 'checkbox',
                     'value': {
                         'n/a': false,
                         'Concrete': false,
                         'Paver/stone/brick': false,
                         'Wood/Composite': false,
                         'Covered': false
                     }
                 },
                 'Patio Condition': {
                     'type': 'checkbox',
                     'value': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Typical cracks': false,
                         'Large cracks': false,
                         'Gaps': false,
                         'Holes': false,
                         'Mildew': false,
                         'Damage': false,
                         'Settled': false,
                         'Uneven Surface': false,
                         'Trip/Falling Hazard': false
                     }
                 },
                 'Walkways and Steps': {
                     'type': 'checkbox',
                     'value': {
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
                 'Retaining Wall': {
                     'type': 'checkbox',
                     'value': {
                         'None': false,
                         'TYPE (Needs Greater Definition)': false
                     }
                 },
                 'Retaining Wall Condition': {
                     'type': 'checkbox',
                     'value': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Damaged': false,
                         'Leaning': false,
                         'Leaking/Drainage Concern': false,
                         'Trip/Falling Hazard': false
                     }
                 },
                 'Safety Fencing at': {
                     'type': 'checkbox',
                     'value': {
                         'n/a': false,
                         'Water Feature': false,
                         'Drop-off/Retaining Wall': false,
                         'Steep Slope': false,
                         'TYPE (Needs Greater Definition)': false
                     }
                 },
                 'Safety Fencing Condition': {
                     'type': 'checkbox',
                     'value': {
                         'Satisfactory': false,
                         'Maginal': false,
                         'Poor': false,
                         'Missing': false,
                         'Trip/Falling Hazard': false,
                         'Leaning': false,
                         'Damaged': false,
                         'Verify Adequate Height': false,
                         'Hazardous': false,
                         'Re-Evaluate': false
                     }
                 },
                 'Landscaping': {
                     'type': 'checkbox',
                     'value': {
                         'Not Inspected': false,
                         'Poor Earth-to-Wood Separation': false,
                         'Yard Steps': false,
                         'Drainage': false,
                         'Negative Surrounding Grade (sloping toward building)': false,
                         'Overgrown Foliage': false,
                         'Re-Evaluate': false
                     }
                 },
                 //INCLUDE PRESET TEXT: "Safety Concerns: Uneven edges at settling cracks in concrete drives or walkways may pose potential trip hazards, and should be improved to provide a safe walking surface. Safe and secure handrails and guard rails are recommended at all stairways, and where landing heights pose a potential falling hazard."

             },
             'Attached Decks/Balconies/Porches/Steps': {
                 'Porch/Stoop': {
                     'type': 'checkbox',
                     'value': {
                         'n/a': false,
                         'Concrete': false,
                         'Pavers/Stone/Brick': false,
                         'Wood/Composite': false,
                         'Covered': false
                     }
                 },
                 'Porch/Stoop Condition': {
                     'type': 'checkbox',
                     'value': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Verify Attachment': false,
                         'Loose/Missing Railings': false,
                         'Trip Hazard(s)': false,
                         'Typical Cracks': false,
                         'Large Cracks': false,
                         'Gaps/Holes': false,
                         'Weathered Finish': false,
                         'Damaged': false,
                         'Settled': false,
                         'Earth Contact': false,
                         'Mildew': false,
                         'Fungal Rot/Probed': false,
                         'Re-Evaluate': false
                     }
                 },
                 'Yard Steps': {
                     'type': 'checkbox',
                     'value': {
                         'n/a': false,
                         'Concrete': false,
                         'Uneven': false,
                         'Large Cracks': false,
                         'Root Heaving': false,
                         'Moss Build-Up': false,
                         'Missing Spacers': false,
                         'Settled': false,
                         'Trip Hazard': false,
                         'Missing Handrails': false,
                         'Missing Safety Glass': false
                     }
                 },
                 'Deck/Balcony': {
                     'type': 'checkbox',
                     'value': {
                         'n/a': false,
                         'Raised': false,
                         'Covered': false,
                         'Wood/Composite': false,
                         'Verity Attachment': false
                     }
                 },
                 'Deck/Balcony Condition': {
                     'type': 'checkbox',
                     'value': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Loose/Missing Railings': false,
                         'Weathered Finish': false,
                         'Damaged': false,
                         'Settled': false,
                         'Earth Contact': false,
                         'Mildew': false,
                         'Fungal Rot/Probed': false,
                         'Re-Evaluate': false
                     }
                 }
             }
         }

     };


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
