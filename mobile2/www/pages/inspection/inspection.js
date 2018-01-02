// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('inspection', {
      url: "/inspection",
      templateUrl: "pages/inspection/inspection.html",
      controller: "inspection"
    })
    .state('inspection_new', {
      url: "/inspection/new",
      templateUrl: "pages/inspection/inspection_new.html",
      controller: "inspection_new"
    })
});

app.service('shareService', function ($state) {
  var shareService = {};
  shareService.navigate = function (insId, sectionIndex, subsectionIndex) {
    if (insId && sectionIndex && subsectionIndex) {
      $state.go('inspection_wizard', {
        'insId': insId,
        'sectionIndex': sectionIndex ? sectionIndex : 0,
        'subsectionIndex': subsectionIndex ? subsectionIndex : 0
      });
    }
  };
  return shareService;
});

// Define the page controller
app.controller('inspection', function ($scope, $rootScope, $state, header_manager, camera_manager, action_manager, inspection_manager, export_manager, $mdToast) {
  $scope.inspections = [];
  $rootScope.loading = true;

  // Switch the inspection_manager mode (this is global)
  inspection_manager.mode = "inspection";

  $scope.goToInspection = function (insId) {
    $state.go('inspection_wizard', {
      'insId': insId
    });
  };

  $scope.goToPreview = function (insId) {
    $state.go('report', {
      'insId': insId
    });
  };

  $scope.send = function (insId) {
    $state.go('report', {
      'insId': insId,
      'quickSend': true
    });
  }

  $scope.openMenu = function ($mdMenu, ev) {
    $mdMenu.open(ev);
  };
  var toast = $mdToast.simple()
    .textContent('')
    .action('UNDO')
    .highlightAction(true)
    .highlightClass('md-accent')
    .position('bottom');

  $scope.delete = function (index) {
    $scope.inspections[index].deleted = true;
    $mdToast.show(toast).then(function (response) {
      if (response == 'ok') {
        $scope.inspections[index].deleted = false;
      }
    }, function () {
      console.log("You delete fast don't ya!");
    });
  }

  $scope.export = function (insId) {
    var promise = inspection_manager.getInspection(insId);
    promise.then(
      function (result) {
        $rootScope.loading = false;
        export_manager.export(result.value, "inspection");
      },
      function (error) {
        $rootScope.loading = false;
        console.error(error);
      });
  }

  $scope.inspections = [];
  $scope.sort = "";
  $scope.sort_filters = [
    "Name",
    "Type",
    "Date"
  ];

  $scope.state = "";
  $scope.state_filters = [
    "New",
    "Started",
    "Complete",
    "Sent",
    "Archived"
  ];

  header_manager.title = "Inspections";
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction("Back", "back", function () {
    $state.go('home');
  });

  $scope.camera_manager = camera_manager;
  action_manager.addAction('New Inspection', 'add', function () {
    $state.go("inspection_new");
  });

  var inspections = inspection_manager.getInspections();
  inspections.then(
    //Success
    function (promise) {
      console.log(promise.message);
      console.log(promise.row);
      for (var i = 0; promise.row && i < promise.row.length; i++) {
        $scope.inspections.push(promise.row.item(i));
      }
      $rootScope.loading = false;
      //Fail
    },
    function (promise) {
      $rootScope.loading = false;
      console.log(promise.message);
    }
  );
});

app.controller('inspection_new', function ($rootScope, $scope, $state, inspection_manager, theme_manager, action_manager, header_manager) {
  $scope.themes = [];
  $scope.templates = [];
  inspection_manager.mode = "inspection";
  inspection_manager.returnLocation = {
    'name': $state.current.name,
    'params': $state.params
  };
  action_manager.addAction('Start', 'check', function () {
    $scope.startInspection();
  });
  header_manager.title = "New Inspection";
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction("Back", "back", function () {
    $state.go('inspection');
  });

  /*   $scope.startInspection = function() {
         inspection_manager.insertInspectionFromTemplate($scope.sTemplate.rowId).then(function(data) {
            setTimeout(function() {
              $rootScope.loading = false;
              $state.go('inspection_wizard', {
                'insId': data.inspectionId
              });}, 6000);
         }, function(){
            console.log('Error saving inspection: ' + data.message);    
         });
     };    */

  $scope.startInspection = function () {
    var promise = inspection_manager.getInspection($scope.sTemplate.rowId);
    promise.then(function (data) {
      $rootScope.loading = true;
      var inspection = data.value;
      inspection.insThemeId = $scope.sTheme.unique;
      inspection.insTemplateId = $scope.sTemplate.rowId;
      inspection.insName = $scope.sName;
      inspection.sections = $scope.sTheme.template.concat(inspection.sections);

      inspection_manager.saveInspection().then(
        function (savedIns) {
          console.log('Successful save. Inserted Inspection Id: ' + savedIns.insId);
          // Simulate loading
          setTimeout(function () {
            $rootScope.loading = false;
            $state.go('inspection_wizard', {
              'insId': savedIns.insId
            });
          }, 6000);
        },
        function (saveError) {
          console.log('Error saving inspection: ' + saveError.message);
        }
      );
    }, function (getErr) {
      $rootScope.loading = false;
      console.log(getErr.message);
    });
  }

  // Get themes & templates
  var themeGetter = theme_manager.update();
  themeGetter.then(
    //Success
    function (promise) {
      for (var i in promise) {
        var manifest_promise = theme_manager.getThemeManifest(promise[i]);
        manifest_promise.then(function (data) {
          $scope.themes.push(data);
        })
      }
      //Fail
    },
    function (promise) {
      console.log(promise.message);
    }
  );

  var templateGetter = inspection_manager.getTemplates();
  templateGetter.then(
    //Success
    function (promise) {
      console.log(promise.message);
      for (var i = 0; promise.row && i < promise.row.length; i++) {
        $scope.templates.push(promise.row.item(i));
      }
      //Fail
    },
    function (promise) {
      console.log(promise.message);
    }
  );

});

app.factory('$', function ($window) {
  return $window.jQuery;
});
