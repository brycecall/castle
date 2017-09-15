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
      controller: "inspection_detail",
      params: {
        'questionId': null
      }
    })
    .state('inspection_new', {
      url: "/inspection/new",
      templateUrl: "pages/inspection/inspection_new.html",
      controller: "inspection_new"
    })
    .state('inspection_section', {
      url: "/inspection/section/{insId}",
      templateUrl: "pages/inspection/inspection_section.html",
      controller: "inspection_section",
      params: {
          insId:null
      }
    })
    .state('inspection_subsection', {
      url: "/inspection/subsection/{insId}/{sectionIndex}",
      templateUrl: "pages/inspection/inspection_subsection.html",
      controller: "inspection_subsection",
      params: {
          'insId':null,
          'sectionIndex':null,
      }
    })
    .state('inspection_question', {
      url: "/inspection/subsection/{insId}/{sectionIndex}/{subsectionIndex}",
      templateUrl: "pages/inspection/inspection_question.html",
      controller: "inspection_question",
      params: {
          'insId':null,
          'sectionIndex':null,
          'subsectionIndex':null
      }
    })
    .state('inspection_detail', {
      url: "/inspection/detail/{insId}/{sectionIndex}/{subsectionIndex}/{questionIndex}",
      templateUrl: "pages/inspection/inspection_detail.html",
      controller: "inspection_detail",
      params: {
          'insId':null,
          'sectionIndex':null,
          'subsectionIndex':null,
          'questionIndex':null
      }
    });
});


// Define the page controller
app.controller('inspection', function ($scope, $rootScope, $state, header_manager, camera_manager, action_manager, inspection_manager) {
  $scope.inspections = [];
 
  var getInsp = inspection_manager.getInspectionById(1);
  getInsp.then(
    function(promise) {
      console.log(promise.message);
      for (var i = 0; i < promise.row.length; i++) {
        $scope.inspections.push(promise.row.item(i));
        console.log(promise.row.item(i));
      }
    }, function(promise) {
      console.log(promise.message);
    }
  )
  
  $scope.reports = [];
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
    //  
  });

  var reports = inspection_manager.getReports();
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

app.controller('inspection_new', function ($scope, $state, $rootScope, inspection_manager) {
  $scope.themes = [];
  $scope.templates = [];
  $scope.toSection = function(insId) {
      $state.go('inspection_section', { 'insId': 0});
  }

  // Get themes & templates
  var themeGetter = inspection_manager.getThemes();
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

  var templateGetter = inspection_manager.getTemplates();
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

app.controller('inspection_section', function($scope, inspection_manager, header_manager, $state, $stateParams) {
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    $state.go('inspection');
  });
  $scope.insId = $stateParams.insId;
  // All the sections for a specific inspection/report
  $scope.sections = [];

  inspection_manager.getSections($scope.insId).then(
    function(data){
        $scope.sections = data;
    },
    function(data){
        console.log("Error... no sections exist in the database");
    }
  );
    
});

app.controller('inspection_subsection', function($scope, inspection_manager, header_manager, $state, $stateParams) {
  $scope.insId = $stateParams.insId;
  $scope.sectionIndex = $stateParams.sectionIndex;
  // All the sections for a specific inspection/report
  $scope.subsections = [];
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function() {
         $state.go('inspection_section', {'insId':$scope.insId});
  });


  // Init Section Data
  // Only run once to generate data in db
  var initSubsection = inspection_manager.initSubSections();
  initSubsection.then(
    function(promise) {
      console.log(promise.message);
    }, function(promise) {
      console.log(promise.message);    
    }
  );
    
  inspection_manager.getSubSections($scope.insId, $scope.sectionIndex).then(
    function(data){
        $scope.subsections = data;
    },
    function(data){
        console.log("Error... no subsections exist in the database");
    }
  );

    $scope.questionDrill = function(subsectionIndex) {
        $state.go('inspection_question', {
            'insId':$scope.insId,
            'sectionIndex':$scope.sectionIndex,
            'subsectionIndex':subsectionIndex
        });
    };
    
});


app.controller('inspection_question', function($scope, inspection_manager, header_manager, $state, $stateParams) {
  $scope.insId = $stateParams.insId;
  $scope.sectionIndex = $stateParams.sectionIndex;
  $scope.subsectionIndex = $stateParams.subsectionIndex;
  // All the sections for a specific inspection/report
  $scope.questions = [];
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function() {
         $state.go('inspection_subsection', {
             'insId':$scope.insId,
             'sectionIndex':$scope.sectionIndex,
             'subsectionIndex':$scope.subsectionIndex                         
         });
  });
  
  inspection_manager.getQuestions($scope.insId, $scope.sectionIndex, $scope.subsectionIndex).then(
    function(data){
        $scope.questions = data;
    },
    function(data){
        console.log("Error... no questions exist in the database");
    }
  );

    $scope.questionDrill = function(questionIndex) {
        $state.go('inspection_detail', {
            'insId':$scope.insId,
            'sectionIndex':$scope.sectionIndex,
            'subsectionIndex':$scope.subsectionIndex,
            'questionIndex':questionIndex
        });
    };
});

app.factory('$', function ($window) {
  return $window.jQuery;
});

app.controller('inspection_detail', function ($scope, $, $state, header_manager, camera_manager, action_manager, inspection_manager, $stateParams) {
  $scope.insId = $stateParams.insId;
  $scope.sectionIndex = $stateParams.sectionIndex;
  $scope.subsectionIndex = $stateParams.subsectionIndex;
  $scope.questionIndex = $stateParams.questionIndex;  
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function() {
         $state.go('inspection_question', {
             'insId':$scope.insId, 
             'sectionIndex':$scope.sectionIndex,
             'subsectionIndex':$scope.subsectionIndex
         });
  });
  action_manager.mode = ACTION_MODES.Action;
  action_manager.addAction("Previous", "keyboard_arrow_left", function () {}, 'md-raised');
  action_manager.addAction("Next", "keyboard_arrow_right", function () {}, 'md-raised');

  $scope.addPhotos = function () {
    angular.copy($scope.question.photos, camera_manager.photos);
    $state.go('camera');
  };

  $scope.question = {
    'title': 'What are your favorite colors?',
    'description': 'Just pick the ones you actually like.',
    'type': 'photo',
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
    'severity': null,
    'showSummaryRemark': true,
    'showDescription': true,
    'photos': []
  };

  $scope.otherValue = {
    'value': '',
    'singleSelect': ''
  };

  (function () {
    if ($scope.question.type == 'photo') {
      $scope.question.photos = [];
      for (var photoIndex in camera_manager.photos) {
        var photo = camera_manager.photos[photoIndex];
        if (!photo.deleted) {
          $scope.question.photos.push(photo);
        }
      }
    }
    camera_manager.photos = [];
  })();

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
    if (newVal) {
      $scope.question.answer = newVal;
    }

  });

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
