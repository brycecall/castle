// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('inspection', {
      url: "/inspection",
      templateUrl: "pages/inspection/inspection.html",
      controller: "inspection"
    })
    .state('inspection_detail', {
      url: "/inspection/detail",
      templateUrl: "pages/inspection/inspection_detail.html",
      controller: "inspection_detail"
    })
    .state('inspection_new', {
      url: "/inspection/new",
      templateUrl: "pages/inspection/inspection_new.html",
      controller: "inspection_new"
    });
});


// Define the page controller
app.controller('inspection', function ($scope, $rootScope, $state, $sha, header_manager, camera_manager, action_manager, database) {
  $scope.reports = [];
  $sha.setConfig();
  $scope.hash = $sha.hash("hello world");

  header_manager.title = "Inspection";

  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction("Back", "back", function () {
    $state.go('home');
  });

  $scope.camera_manager = camera_manager;
  action_manager.addAction('New Inspection', 'add', function () {
    $state.go("inspection_new");
    //  
  });
  //insert dummy report data
  /*    var reportData = database.initReports();
      reportData.then(
          //Success
          function (promise) {
              console.log(promise.message);
               //Fail
          },function (promise) {
              console.log(promise.message);
               //Fail
          }
      );*/

  var reports = database.getReports();
  reports.then(
    //Success
    function (promise) {
      console.log(promise.message);
      console.log(promise.row);
      for (var i = 0; i < promise.row.length; i++) {
        $scope.reports.push(promise.row.item(i));
      }
      //Fail
    },
    function (promise) {
      console.log(promise.message);
    }
  );

});




app.controller('inspection_new', function ($scope, $rootScope, database) {
  $scope.themes = [];
  $scope.templates = [];

  // Init themes & templates
  /*var themeData = database.initThemes();
  themeData.then(
      //Success
      function(promise) {
        console.log(promise.message);
      }, 
      //Fail
      function(promise) {
        console.log(promise.message);
      }
  );*/
  /*var templateData = database.initTemplates();
  templateData.then(
      //Success
      function(promise) {
        console.log(promise.message);
      }, 
      //Fail
      function(promise) {
        console.log(promise.message);
      }
  );*/

  // Get themes & templates
  var themeGetter = database.getThemes();
  themeGetter.then(
    //Success
    function (promise) {
      console.log(promise.message);
      console.log(promise.row);
      for (var i = 0; i < promise.row.length; i++) {
        $scope.themes.push(promise.row.item(i));
      }
      //Fail
    },
    function (promise) {
      console.log(promise.message);
    }
  );

  var templateGetter = database.getTemplates();
  templateGetter.then(
    //Success
    function (promise) {
      console.log(promise.message);
      for (var i = 0; i < promise.row.length; i++) {
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

app.controller('inspection_detail', function ($scope, $) {
  $scope.question = {
    'title': 'What are your favorite colors?',
    'description': 'Just pick the ones you actually like.',
    'type': 'radioButton',
    'values': [
      {
        'key': 'orange',
        'remark': ''
            },
      {
        'key': 'red'
            },
      {
        'key': 'green'
            },
      {
        'key': 'pink'
            },
      {
        'key': 'purple mountain majesty'
            },
      {
        'key': 'yellow'
            }
        ],
    'answers': [
            'orange'
        ],
    'answer': null,
    'value': null,
    'validation': {
      'type': 'number',
      'min': null,
      'max': null,
      'isRequired': true
    },
    'notApplicable': false,
    'severity': null
  };

  $scope.otherValue = {
    'value': '',
    'singleSelect': ''
  };

  $scope.$watch('otherValue.value', function (newVal, oldVal) {
    var list = $scope.question.answers;
    var index = $scope.question.answers.indexOf(oldVal);
    if (index > -1) {
      $scope.question.answers.splice(index, 1);
    }
    if (newVal) {
      $scope.question.answers.push(newVal);
    }
  });

  $scope.$watch('otherValue.singleSelect', function (newVal, oldVal) {
    $scope.question.answer = newVal;
  });

  $scope.editSummaryRemarks = function () {

  };

  $scope.toggle = function (item, list, ignoreEmpty) {
    var index = list.indexOf(item);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      if (ignoreEmpty) {
        if (item) {
          list.push(item);
        }
      } else {
        list.push(item);
      }
    }
  };



  $scope.exists = function (value, array) {
    return $.inArray(value, array) > -1;
  };

  $scope.setSeverity = function (value) {
    $scope.question.severity = value;
  };

  $scope.severityList = [
    {
      'icon': 'cancel',
      'title': 'Non-Issue'
        },
    {
      'icon': 'info_outline',
      'title': 'Informational'
        },
    {
      'icon': 'warning',
      'title': 'Minor Concerns'
        },
    {
      'icon': 'error',
      'title': 'Major Concerns'
        }
    ];

});
