 angular.module('fbiApp').controller('createController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {

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

     $scope.items = [
         {
             'title': 'Site',
             'subpage': [
                 {
                     'title': 'Site',
                     'conditions': 'The inspection of the site includes the building perimeter',
                     'showconditions': true,
                     'limitations': 'According to the Home Inspection Standards of Practice WAC 308-408C-170...',
                     'showlimitations': true,
                     'checkboxes': {
                         'driveway': {
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
                 {
                     'title': 'Attached Decks/Balconies/Porches/Steps',
                     'conditions': 'The inspection of the site includes...',
                     'showconditions': true,
                     'limitations': 'According to the Home Inspection Standards of Practice WAC 308-408C-170....',
                     'showlimitations': true,
                     'checkboxes': {
                         'driveway': {
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
          ]
         },

         {
             'title': 'Exterior',
             'subpage': [
                 {
                     'title': 'Exterior Wall Cladding',
                     'conditions': 'The inspection of the site includes....',
                     'showconditions': true,
                     'limitations': 'According to the Home Inspection Standards of Practice WAC 308-408C-170...',
                     'showlimitations': true,
                     'checkboxes': {
                         'driveway': {
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
         ]
         }
          ];

     $scope.subMenu = $scope.items[0].title;
     $scope.currentPage = 0;
     //     function() {
     //
     //     }


 });

 //Condition: Satisfactory Marginal Poor Pitched towards home
 //Typical cracks Large cracks Root heaving Uneven Trip / falling hazard
 //
 //		Driveway
 //		Patio
 //		Walkways & Steps
 //		Retaining Wall
 //		Safety Fence at
 //		Landscaping
 //		Porch / Stoop
 //		Yard Steps
 //		Deck / Balcony
 //	Safety Concerns
 //		Pre-composed text possibilities
 //	Pictures
 //	Moisture / Pest-Conducive Conditions
 //		Pre-composed text possibilities
 //
 //Exterior
 //	Pre-composed Exterior Components and Limitations
 //	pre-set list to be checked
 //		Exterior Wall Cladding (siding or exterior wall coverings)
 //			Types
 //			Flashing
 //			Trim / Soffit / Fascia
 //		Wall Fenestrations (penetrations through exterior wall)
 //			Window Frame / Trim
 //			Exterior Doors
 //			Caulking
 //	Pictures
 //	Pre-composed Attacked Garage / Carport and Inspection Limitations
 //	pre-set list to be checked
 //		Vehicle Parking
 //			Floor
 //		ATTACHED GARAGE / STORAGE or CARPORT
 //			Firewall
 //			Exterior Service Door
 //			Car Door
 //			Automatic Door Opener
 //Roofing
 //	Pre-composed Roof Covering and Limitations
 //	pre-set list to be checked
 //		Roof Coverings
 //			Style
 //			Roof Covering
 //			Valley(s)
 //			Condition
 //		Fenestrations
 //			Perforations
 //			Skylights / skywalls
 //			Flashings
 //		Gutters & Down-spouts
 //			Type
 //			Down-spout Discharge
 //Structural
 //	Pre-composed Structural Components and Inspection Limitations
 //	pre-set list to be checked
 //		Roof framing (visible in attic)
 //			Roof system
 //			Diaphragm Sheathing
 //		Floor Framing
 //			Sub-Floor System
 //			Joists & Sheathing
 //			Posts (Columns)
 //			Stairs
 //			Basement / Crawl Floor
 //		Foundation
 //			Type
 //			Limited by
 //			WDI / WDO
 //			Cracks
 //			Drainage
 //Thermal
 //	Pre-composed Insulation / ventilation and inspection limitations
 //	pre-set list to be checked
 //		Attic
 //			Access
 //			Insulation
 //			Ventilation
 //			Humidity
 //			Infestation
 //		Crawl Spaces / Unfinished Basements
 //			Access
 //			Viewed
 //			Sub-floor Insulation
 //			Crawl-space Ventilation
 //			Vapor Barrier
 //			Moisture
 //			Infestation
 //		Interior Mechanical Ventilation / Exhaust Fans
 //Plumbing
 //	Pre-composed Plumbing Components and inspection limitations
 //		Plumbing Data
 //			Water Supply Source
 //			Main Water Shut off
 //			Water Pressure
 //			Water Temperature
 //			Waste System
 //	pre-set list to be checked
 //		Plumbing System
 //			Main entry piping
 //			Water lines
 //			Disimilar Metal Connection
 //			DWV Piping
 //		Faucents / Fixtures
 //			Faucets
 //			Accessories
 //			Sinks / Fixtures
 //			Grout condition
 //			Drainage
 //			Toilet
 //			Tub / Shower Surround
 //		Water Heater #1 electric
 //			Exhaust
 //		Water Heater #2 gas
 //			Exhaust
 //Heating / Cooling
 //	Pre-composed Heating System and inspection limitations
 //	pre-set list to be checked
 //		Heating System
 //			Energy Source
 //			Central Furnace or Heat Pump
 //			Ducting
 //	Pre-composed fireplaces / stoves and inspection limitations
 //	pre-set list to be checked
 //		Type
 //		Chimney
 //	Pre-composed Cooling systems and inspection limitations
 //	pre-set list to be checked
 //		Air Conditioning Systems
 //			A/C Type
 //			Energy Source
 //			Evaporative Coil or Heat Pump (inside)
 //			Compressor / Condenser (outside)
 //Electrical
 //	Pre-composed electrical system and inspection limitations
 //	pre-set list to be checked
 //		Electrical System
 //			Main Service Entry
 //			Service Size
 //			Meter locations
 //			Grounding
 //			Main electrical disconnect locations
 //			Main Panel
 //			Branch Wiring
 //			Condition
 //			Fixtures
 //			Switches / Receptacles
 //			Carbon Monoxide Detectors
 //			Smoke Detectors
 //Interior
 //	Pre-composed Interior Components and limitations
 //	pre-set list to be checked
 //		Living Room
 //			Entry Doors
 //			Window(s)
 //			Ceiling Fans
 //			Lights / Switches / Receptacles
 //		Kitchen(s)
 //			Appliances
 //			Cabinets
 //			Countertops
 //			Caulking
 //			Grout
 //			Exhaust Fan
 //			Lights / Switches / Receptacles
 //		Laundry
 //			Appliances
 //			Dryer
 //			Exhaust Fan
 //		Bathroom(s)
 //			Walls / Ceilings
 //			Floors
 //			Caulking
 //			Heat
 //			Exhaust Fan
 //			Lights / Switches / Receptacles
 //		Interior
 //			Walls / Ceilings
 //			Floor Coverings
 //			Interior Doors
 //			Window Types
 //			Lights / Switches / Receptacles
 //Life Safety
 //	Pre-composed life / safety and inspection limitations
 //	pre-set list to be checked
 //		Potential Safety Concerns
 //			Tripping / falling Hazards
 //			Fire Hazards
 //			Pest-related
 //			Building materials




 angular.module('fbiApp').controller('leftController', function ($scope, $timeout, $mdSidenav, $log) {
     $scope.close = function () {
         $mdSidenav('left').close()
             .then(function () {
                 $log.debug("close LEFT is done");
             });

     };
 });
