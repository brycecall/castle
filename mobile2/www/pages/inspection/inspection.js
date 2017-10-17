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
    .state('inspection_section', {
      url: "/inspection/section/{insId}",
      templateUrl: "pages/inspection/inspection_section.html",
      controller: "inspection_section",
      params: {
        insId: null
      }
    })
    .state('inspection_subsection', {
      url: "/inspection/subsection/{insId}/{sectionIndex}",
      templateUrl: "pages/inspection/inspection_subsection.html",
      controller: "inspection_subsection",
      params: {
        'insId': null,
        'sectionIndex': null,
      }
    })
    .state('inspection_question', {
      url: "/inspection/subsection/{insId}/{sectionIndex}/{subsectionIndex}",
      templateUrl: "pages/inspection/inspection_question.html",
      controller: "inspection_question",
      params: {
        'insId': null,
        'sectionIndex': null,
        'subsectionIndex': null
      }
    })
    .state('inspection_detail', {
      url: "/inspection/detail/{insId}/{sectionIndex}/{subsectionIndex}/{questionIndex}",
      templateUrl: "pages/inspection/inspection_detail.html",
      controller: "inspection_detail",
      params: {
        'insId': null,
        'sectionIndex': null,
        'subsectionIndex': null,
        'questionIndex': null
      }
    });
});

/*app.run(function ($transitions, inspection_manager) {
  $transitions.onExit({}, function (trans) {
      if (trans.$from().name == 'camera') {
        camera_manager.stopCamera();
      }

      var fromStateName = trans.$from().name;
      if ( fromStateName != 'camera' && fromStateName != 'camera_preview' ) {
         camera_manager.returnState = {
             'name':trans.$from().name,
             'params':trans.params('from')
        }
      }
      
  });
});*/

app.service('shareService', function ($state) {
  var shareService = {};
  shareService.navigate = function (insId, sectionIndex, subsectionIndex) {
    if (insId && sectionIndex && subsectionIndex) {
      $state.go('inspection_question', {
        'insId': insId,
        'sectionIndex': sectionIndex,
        'subsectionIndex': subsectionIndex
      });
    } else if (insId && sectionIndex) {
      $state.go('inspection_subsection', {
        'insId': insId,
        'sectionIndex': sectionIndex
      });
    } else if (insId) {
      $state.go('inspection_section', {
        'insId': insId
      });
    }
  };
  return shareService;
});

// Define the page controller
app.controller('inspection', function ($scope, $rootScope, $state, header_manager, camera_manager, action_manager, inspection_manager, export_manager) {
  $scope.inspections = [];

  // Switch the inspection_manager mode (this is global)
  inspection_manager.mode = "inspection";

  $scope.goToInspection = function (insId) {
    $state.go('inspection_section', {
      'insId': insId
    });
  };

  $scope.goToPreview = function (insId) {
    $state.go('report', {
      'insId': insId
    });
  };

  $scope.export = function (insId) {
    var promise = inspection_manager.getInspection(insId);
    promise.then(
      function (result) {
        export_manager.export(result, "inspection");
      },
      function (error) {
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
      //Fail
    },
    function (promise) {
      console.log(promise.message);
    }
  );
});

app.controller('inspection_new', function ($scope, $state, $rootScope, inspection_manager, theme_manager, action_manager) {
  $scope.themes = [];
  $scope.templates = [];

  action_manager.addAction('Start', 'check', function () {
    $scope.startInspection();
  });

  $scope.startInspection = function () {
    var promise = inspection_manager.getInspection($scope.sTemplate.rowId);
    promise.then(function (inspection) {
      inspection.insThemeId = $scope.sTheme.unique;
      inspection.insTemplateId = $scope.sTemplate.rowId;
      inspection.insName = $scope.sName;
      
      inspection_manager.saveInspection().then(
        function(savedIns) {
          console.log('Successful save. Inserted Inspection Id: ' + savedIns.insId);
          // Simulate loading
          setTimeout(function() {
            $state.go('inspection_section', {
              'insId': savedIns.insId
            });}, 4000);
        }, function(saveError) {
          console.log('Error saving inspection: ' + saveError.message);    
        }
      );
    }, function(getErr) {
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

app.controller('inspection_section', function ($scope, inspection_manager, action_manager, header_manager, $state, $stateParams, shareService) {
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    inspection_manager.clearInspection();
    $state.go('inspection');
  });
  $scope.insId = $stateParams.insId;
  console.log('Section InspectionId: ' + $scope.insId);
  $scope.navigate = shareService.navigate;
  // All the sections for a specific inspection/report
  $scope.sections = [];
  $scope.goToSubsection = function (sectionIndex) {
    $state.go('inspection_subsection', {
      'insId': $scope.insId,
      'sectionIndex': sectionIndex
    });
  };
  
  inspection_manager.getSections($scope.insId).then(
    function (data) {
      $scope.sections = data.value;
    },
    function (data) {
      console.log("Error... no sections exist in the database");
    }
  );
  
  action_manager.addAction("Save", "save", function() {
    inspection_manager.updateInspection();
  });

});

app.controller('inspection_subsection', function ($scope, inspection_manager, action_manager, header_manager, $state, $stateParams, shareService) {
  $scope.insId = $stateParams.insId;
  $scope.sectionIndex = $stateParams.sectionIndex;
  $scope.navigate = shareService.navigate;
  // All the sections for a specific inspection/report
  $scope.subsections = [];
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    $state.go('inspection_section', {
      'insId': $scope.insId
    });
  });

  inspection_manager.getSubsections($scope.insId, $scope.sectionIndex).then(
    function (data) {
      $scope.subsections = data.value;
      console.log($scope.subsections);
    },
    function (data) {
      console.log("Error... no subsections exist in the database");
    }
  );
    
  action_manager.addAction("Save", "save", function() {
    inspection_manager.updateInspection();
  });
  
  $scope.questionDrill = function (subsectionIndex) {
    console.log('inspectionId: ' + $scope.insId);
    console.log('sectionIndex: ' + $scope.sectionIndex);
    console.log('subsectionIndex: ' + subsectionIndex);
    $state.go('inspection_question', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': subsectionIndex
    });
  };

});


app.controller('inspection_question', function ($scope, inspection_manager, action_manager, header_manager, $state, $stateParams, shareService) {
  $scope.insId = $stateParams.insId;
  $scope.sectionIndex = $stateParams.sectionIndex;
  $scope.subsectionIndex = $stateParams.subsectionIndex;
  $scope.navigate = shareService.navigate;
  // All the sections for a specific inspection/report
  $scope.questions = [];
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    $state.go('inspection_subsection', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': $scope.subsectionIndex
    });
  });

  inspection_manager.getQuestions($scope.insId, $scope.sectionIndex, $scope.subsectionIndex).then(
    function (data) {
      $scope.questions = data.value;
    },
    function (data) {
      console.log("Error... no questions exist in the database");
    }
  );

  action_manager.addAction("Save", "save", function() {
    inspection_manager.updateInspection();
  });
    
  $scope.questionDrill = function (questionIndex) {
    $state.go('inspection_detail', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': $scope.subsectionIndex,
      'questionIndex': questionIndex
    });
  };

});

app.factory('$', function ($window) {
  return $window.jQuery;
});

app.controller('inspection_detail', function ($scope, $, $state, header_manager, camera_manager, action_manager, inspection_manager, $stateParams, shareService) {
  $scope.insId = $stateParams.insId;
  $scope.sectionIndex = $stateParams.sectionIndex;
  $scope.subsectionIndex = $stateParams.subsectionIndex;
  $scope.questionIndex = $stateParams.questionIndex;
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    $state.go('inspection_question', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': $scope.subsectionIndex
    });
  });

  $scope.navigate = shareService.navigate;
  $scope.otherValue = {
    'singleSelect': '',
    'value': null
  };
  $scope.question = {};
  $scope.questionCount = -1;
  inspection_manager.getQuestions($scope.insId, $scope.sectionIndex, $scope.subsectionIndex).then(
    function (data) {
      $scope.questionCount = data.value.length;
      $scope.question = data.value[$scope.questionIndex];
      attachPhotos();

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

    },
    function (data) {
      console.log("Error... no question exists in the database");
    }
  );

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
      $state.go('inspection_detail', {
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
  action_manager.addAction("Save", "save", function() {
    inspection_manager.updateInspection();
  });
  action_manager.addAction("Next", "keyboard_arrow_right", function () {
    navigateQuestions(true);
  }, 'md-raised');

  $scope.addPhotos = function () {
    angular.copy($scope.question.photos, camera_manager.photos);
    $state.go('camera');
  };


  var attachPhotos = function () {
    if (camera_manager.photos.length > 0) {
      $scope.question.photos = [];
    }
    for (var photoIndex in camera_manager.photos) {
      var photo = camera_manager.photos[photoIndex];
      if (!photo.deleted) {
        $scope.question.photos.push(photo);
      }
    }
    camera_manager.photos = [];
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
