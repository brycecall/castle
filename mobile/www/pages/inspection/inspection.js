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
  $rootScope.loading = true;
  $scope.camera_manager = camera_manager;
  $scope.numDeleted = 0;
  inspection_manager.mode = "inspection"; // Switch the inspection_manager mode (this is global)

  header_manager.title = "Inspections";
  /*header_manager.setAction("Back", "back", function () {
    $state.go('home');
  });*/
  
  // Init inspection list
  inspection_manager.getInspections().then(function (insArray) {
    $scope.inspections = [];
    for (var i = 0; insArray && i < insArray.length; i++) {
      $scope.inspections.push(JSON.parse(insArray[i]));
    }
    $rootScope.loading = false;
    //Fail
  }, function (promise) {
      $scope.inspections = [];
      console.log(promise.message);
      $rootScope.loading = false;
    }
  );
    
  $scope.newInspection = function () {
    $state.go("inspection_new");
  }

  $scope.goToInspection = function (insId) {
    $rootScope.loading = true;
    inspection_manager.getInspection(insId).then(function(success){
      $state.go('inspection_wizard', {
        'insId': insId
      });
      $rootScope.loading = false;
    }, function(error){
      console.log('Failed to load inspection');
    });
  };

  action_manager.addAction('New Inspection', 'add', function () {
    $scope.newInspection();
  });

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

  $scope.delete = function (index) {
    var toast = $mdToast.simple()
      .textContent('')
      .action('UNDO')
      .highlightAction(true)
      .highlightClass('md-accent')
      .position('bottom')
      .toastClass('highIndex');

    $scope.inspections[index].deleted = true;
    $scope.numDeleted++;
    $mdToast.show(toast).then(function (response) {
      if (response == 'ok') {
        $scope.inspections[index].deleted = false;
        $scope.numDeleted--;
      } else {
        inspection_manager.deleteInspection($scope.inspections[index].guid + ".js");
      }
    }, function () {
      console.log("You delete fast don't ya!");
    });
  }

  $scope.export = function (insId) {
    $rootScope.loading = true;
    var promise = inspection_manager.getInspection(insId);
    promise.then(
      function (result) {
        export_manager.export(result.value, "inspection").then(
          function (result) {
            $rootScope.loading = false;
          },
          function (error) {
            $rootScope.loading = false;
            console.error(error);
          })
      },
      function (error) {
        $rootScope.loading = false;
        console.error(error);
      });
  };

  $scope.rename = function (insId, title, index) {
    var newName = window.prompt("Please enter a new name.", title);
    if(newName) {
      var toast = $mdToast.simple()
        .position('bottom')
        .toastClass('highIndex');
      $scope.inspections[index].insName = newName;
      inspection_manager.update($scope.inspections[index]).then(function () {
        setTimeout(function () {
          toast.textContent('Rename Complete');
          $mdToast.show(toast);
        }, 0);
      });
    }
  };

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

  $scope.startInspection = function () {
    // Generate new inspection from template
    // - Local mods before sending object to filesystem_manager
    $rootScope.loading = true;
    var inspection = $scope.sTemplate;
    inspection.insThemeId = $scope.sTheme.unique;
    inspection.insTemplateId = $scope.sTemplate.rowId;
    inspection.insName = $scope.sName;
    inspection.sections = $scope.sTheme.template.concat(inspection.sections);
    inspection_manager.startInspection(inspection).then(function(success) {
      // Navigate to inspection wizard
      inspection_manager.getInspection(inspection).then(function(success){
        $state.go('inspection_wizard');
        $rootScope.loading = false;
      });
    }, function(error){
        console.log('Error saving inspection to filesystem: ' + error.message);
    });
    // Make sure loading is set to false
    $rootScope.loading = false;
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
      $scope.templates = [];
      for(var i = 0; i < promise.length; i++) {
        $scope.templates.push(JSON.parse(promise[i]));
      }
      console.log($scope.templates);
      $rootScope.loading = false;
    },
    function (promise) {
      $scope.templates = [];
      console.log(promise.message);
      $rootScope.loading = false;
    }
  );

});

app.factory('$', function ($window) {
  return $window.jQuery;
});
