// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('templates', {
      url: "/templates",
      templateUrl: "pages/templates/templates.html",
      controller: "templates"
    })
    .state('template_section', {
      url: "/template/section/{insId}",
      templateUrl: "pages/templates/template_section.html",
      controller: "template_section",
      params: {
        insId: null
      }
    })
    .state('template_subsection', {
      url: "/template/subsection/{insId}/{sectionIndex}",
      templateUrl: "pages/templates/template_subsection.html",
      controller: "template_subsection",
      params: {
        'insId': null,
        'sectionIndex': null,
      }
    })
    .state('template_question', {
      url: "/template/subsection/{insId}/{sectionIndex}/{subsectionIndex}",
      templateUrl: "pages/templates/template_question.html",
      controller: "template_question",
      params: {
        'insId': null,
        'sectionIndex': null,
        'subsectionIndex': null
      }
    })
    .state('template_detail', {
      url: "/template/detail/{insId}/{sectionIndex}/{subsectionIndex}/{questionIndex}",
      templateUrl: "pages/templates/template_detail.html",
      controller: "template_detail",
      params: {
        'insId': null,
        'sectionIndex': null,
        'subsectionIndex': null,
        'questionIndex': null
      }
    });
});

app.controller('templates', function ($scope, $rootScope, $state, header_manager, camera_manager, action_manager, inspection_manager) {
  $scope.templates = [];

  // Switch the inspection_manager mode (this is global)
  inspection_manager.mode = "template";

  $scope.edit = function (insId) {
    $state.go('template_section', {
      'insId': insId
    });
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

  header_manager.title = "Templates";
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction("Back", "back", function () {
    $state.go('home');
    inspection_manager.clearInspection();
  });

  $scope.camera_manager = camera_manager;
  action_manager.addAction('New Template', 'add', function () {
    $state.go("template_new");
    //  
  });

  var templates = inspection_manager.getTemplates();
  templates.then(
    //Success
    function (promise) {
      console.log(promise.message);
      console.log(promise.row);
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

app.service('templateShareService', function ($state) {
  var shareService = {};
  shareService.navigate = function (insId, sectionIndex, subsectionIndex) {
    if (insId && sectionIndex && subsectionIndex) {
      $state.go('template_question', {
        'insId': insId,
        'sectionIndex': sectionIndex,
        'subsectionIndex': subsectionIndex
      });
    } else if (insId && sectionIndex) {
      $state.go('template_subsection', {
        'insId': insId,
        'sectionIndex': sectionIndex
      });
    } else if (insId) {
      $state.go('template_section', {
        'insId': insId
      });
    }
  };

  shareService.remove = function (index, list) {
    list.splice(index, 1);
  };
  return shareService;
});

// Define the page controller
app.controller('template', function ($scope, $rootScope, $state, header_manager, camera_manager, action_manager, inspection_manager) {
  $scope.templates = [];

  $scope.goToInspection = function (insId) {
    $state.go('template_section', {
      'insId': insId
    });
  };

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

  header_manager.title = "Templates";
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction("Back", "back", function () {
    $state.go('home');
    inspection_manager.clearInspection();
  });

  $scope.camera_manager = camera_manager;
  action_manager.addAction('New Template', 'add', function () {
    $state.go("template_new");
    //  
  });

  var templates = inspection_manager.getTemplates();
  templates.then(
    //Success
    function (promise) {
      console.log(promise.message);
      console.log(promise.row);
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

app.controller('template_new', function ($scope, $state, $rootScope, inspection_manager, theme_manager) {
  $scope.themes = [];
  $scope.templates = [];
  $scope.toSection = function (insId) {
    $state.go('inspection_section', {
      'insId': 1
    });
  }

  // Get themes & templates
  var themeGetter = theme_manager.getThemes();
  themeGetter.then(
    //Success
    function (promise) {
      for (var i in promise) {
        var manifest_promise = theme_manager.getThemeManifest(promise[i]);
        manifest_promise.then(function (data) {
          $scope.themes.push(data.title)
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

app.controller('template_section', function ($scope, inspection_manager, header_manager, $state, $stateParams, templateShareService, action_manager) {
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    console.log(inspection_manager.mode);
    switch (inspection_manager.mode) {
      case "theme":
        $state.go('themes');
        break;
      case "template":
        $state.go('templates');
        break;
      case "inspection":
        $state.go('inspection');
        break;
    }
  });
  $scope.insId = $stateParams.insId;
  $scope.navigate = templateShareService.navigate;
  $scope.remove = templateShareService.remove;

  action_manager.addAction('Save', 'save', function () {
    inspection_manager.updateTemplate();
  });

  // All the sections for a specific inspection/report
  $scope.sections = [];

  $scope.goToSubsection = function (sectionIndex) {
    $state.go('template_subsection', {
      'insId': $scope.insId,
      'sectionIndex': sectionIndex
    });
  };

  $scope.addSection = function () {
    $scope.sections.push({
      'title': ''
    });
      //console.log(inspection_manager.getInspectionCache());
  };
  
  inspection_manager.getSections($scope.insId).then(
    function(data) {
        $scope.sections = data.value;
    },
    function(data) {
        console.log("Error... no sections exist in the database");
    }
  );

});

app.controller('template_subsection', function ($scope, inspection_manager, header_manager, $state, $stateParams, templateShareService, action_manager) {
  $scope.insId = $stateParams.insId;
  $scope.sectionIndex = $stateParams.sectionIndex;
  $scope.navigate = templateShareService.navigate;
  $scope.remove = templateShareService.remove;
  // All the sections for a specific inspection/report
  $scope.subsections = [];
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    $state.go('template_section', {
      'insId': $scope.insId
    });
  });
  action_manager.addAction('Save', 'save', function () {
    inspection_manager.updateTemplate();
  });
  $scope.addSubsection = function () {
    $scope.subsections.push({
      'title': ''
    });
  };
  inspection_manager.getSubsections($scope.insId, $scope.sectionIndex).then(
    function (data) {
      $scope.subsections = data.value || [];
    },
    function (data) {
      console.log("Error... no subsections exist in the database");
    }
  );
  $scope.questionDrill = function (subsectionIndex) {
    $state.go('template_question', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': subsectionIndex
    });
  };
});

app.controller('template_question', function ($scope, inspection_manager, header_manager, $state, $stateParams, templateShareService, action_manager) {
  $scope.insId = $stateParams.insId;
  $scope.sectionIndex = $stateParams.sectionIndex;
  $scope.subsectionIndex = $stateParams.subsectionIndex;
  $scope.navigate = templateShareService.navigate;
  $scope.remove = templateShareService.remove;
  // All the sections for a specific inspection/report
  $scope.questions = [];
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    $state.go('template_subsection', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': $scope.subsectionIndex
    });
  });
  action_manager.addAction('Save', 'save', function () {
    inspection_manager.updateTemplate();
  });
  $scope.addQuestion = function () {
    $scope.questions.push({
      'title': ''
    });
  };

  inspection_manager.getQuestions($scope.insId, $scope.sectionIndex, $scope.subsectionIndex).then(
    function (data) {
      $scope.questions = data.value;
    },
    function (data) {
      console.log("Error... no questions exist in the database");
    }
  );

  $scope.questionDrill = function (questionIndex) {
    $state.go('template_detail', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': $scope.subsectionIndex,
      'questionIndex': questionIndex
    });
  };

});

app.controller('template_detail', function ($scope, $, $state, header_manager, camera_manager, action_manager, inspection_manager, $stateParams, templateShareService) {
  $scope.insId = $stateParams.insId;
  $scope.sectionIndex = $stateParams.sectionIndex;
  $scope.subsectionIndex = $stateParams.subsectionIndex;
  $scope.questionIndex = $stateParams.questionIndex;
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    $state.go('template_question', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': $scope.subsectionIndex
    });
  });

  $scope.navigate = templateShareService.navigate;
  $scope.remove = templateShareService.remove;
  $scope.otherValue = {
    'singleSelect': '',
    'value':null
  };
    
    $scope.sortOptions = {
        'ui-floating': false, 
        'handle': '.handle', 
        'containment': '#sortParent'
    };
    
  $scope.question = {};
  $scope.questionCount = -1;
  inspection_manager.getQuestions($scope.insId, $scope.sectionIndex, $scope.subsectionIndex).then(
    function (data) { 
        $scope.questionCount = data.value.length;
        $scope.question = data.value[$scope.questionIndex];
        console.log($scope.question.type);
    },
    function (data) {
      console.log("Error... no question exists in the database");
    }
  );

  $scope.newRadioVal = {'value':null};
  $scope.addRadio = function() {
      var exists = false;
      for (var i = 0; i < $scope.question.values.length; i++) {
          if ($scope.question.values[i].key == $scope.newRadioVal.value) {
              exists = true;
              break;
          }
      }
      
        if ($scope.newRadioVal && !exists) {
            $scope.question.values.push({'key':$scope.newRadioVal.value});
        }
      $scope.newRadioVal.value = null;
     
  };
    
  var navigateQuestions = function (forward) {
    if ($scope.questionCount !== -1 && $scope.questionCount > 1) {
      var newQuestionIndex = $scope.questionIndex;
      if (forward) {
        if ($scope.questionIndex >= $scope.questionCount - 1) {
          newQuestionIndex = 0;
        } else {
          newQuestionIndex++;
        }
      } else {
        if ($scope.questionIndex <= 0) {
          newQuestionIndex = $scope.questionCount - 1;
        } else {
          newQuestionIndex--;
        }
      }
      $state.go('template_detail', {
        'insId': $scope.insId,
        'sectionIndex': $scope.sectionIndex,
        'subsectionIndex': $scope.subsectionIndex,
        'questionIndex': newQuestionIndex
      });
    }
  };

  action_manager.mode = ACTION_MODES.Action;
  action_manager.addAction("Previous", "keyboard_arrow_left", function () {
    navigateQuestions(false);
  }, 'md-raised');
  action_manager.addAction('Save', 'save', function () {
    inspection_manager.updateTemplate();
  });
  action_manager.addAction("Next", "keyboard_arrow_right", function () {
    navigateQuestions(true);
  }, 'md-raised');

  $scope.addPhotos = function () {
    angular.copy($scope.question.photos, camera_manager.photos);
    $state.go('camera');
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
      camera_manager.photos = [];
    }
  })();

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
    
  
    
  $scope.add = function(list, value) {
      list.push({'key':value});
  };

});

//app.factory('$', function ($window) {
//  return $window.jQuery;
//});
