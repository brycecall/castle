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
          'questionId':null
      }
    })
    .state('inspection_new', {
      url: "/inspection/new",
      templateUrl: "pages/inspection/inspection_new.html",
      controller: "inspection_new"
    })
    .state('inspection_section', {
      url: "/inspection/section",
      templateUrl: "pages/inspection/inspection_section.html",
      controller: "inspection_section"
    })
    .state('inspection_subsection', {
      url: "/inspection/subsection",
      templateUrl: "pages/inspection/inspection_subsection.html",
      controller: "inspection_subsection",
      params: {
          'sectionId':null
      }
    })
    ;
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
  $scope.toSection = function() {
      $state.go('inspection_section');
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

app.controller('inspection_section', function($scope, inspection_manager, header_manager, $state) {
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function() {
         $state.go('inspection');
  });
    
  // All the sections for a specific inspection/report
  $scope.sections = [];
        
  var sectionGetter = inspection_manager.getSections();
  sectionGetter.then(
    function(promise) {
      console.log(promise.message);
      for (var i = 0; i < promise.row.length; i++) {
        $scope.sections.push(promise.row.item(i));
      }
    }, function(promise) {
      console.log(promise.message);
    }
  );
  
});

app.controller('inspection_subsection', function($scope, inspection_manager, header_manager, $state, $stateParams) {
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function() {
         $state.go('inspection_section');
  });
  // Section ID passed in to tell us which subSections to use
  $scope.sectionId = $stateParams.sectionId;
  console.log('Section Id: ' + $scope.sectionId);    
  // All the sections for a specific inspection/report
  $scope.subsections = [];

  var subsectionGetter = inspection_manager.getSubSections($scope.sectionId);
  subsectionGetter.then(
    function(promise) {
      console.log(promise.message);
      console.log(promise.row);
      for (var i = 0; i < promise.row.length; i++) {
        $scope.subsections.push(promise.row.item(i));
      }
    }, function(promise) {
      console.log(promise.message);
    }
  );
});

app.factory('$', function ($window) {
  return $window.jQuery;
});

app.controller('inspection_detail', function ($scope, $, $state, header_manager, camera_manager, action_manager, inspection_manager) {
    

    
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function() {
         $state.go('inspection_subsection');
  });
  action_manager.mode = ACTION_MODES.Action;
  action_manager.addAction("Previous", "keyboard_arrow_left", function () {
  },'md-raised');
  action_manager.addAction("Next", "keyboard_arrow_right", function () {
  },'md-raised');
    
  $scope.addPhotos = function() {
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
    'showSummaryRemark':true,
    'showDescription':true,
    'photos':[]
  };

  $scope.otherValue = {
    'value': '',
    'singleSelect': ''
  };
    
  (function() {
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
