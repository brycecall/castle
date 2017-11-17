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

/*app.run(function ($transitions, $rootScope) {
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

/*app.run(function ($transitions, $rootScope) {
  $transitions.onStart({}, function (trans) {
      var fromStateName = trans.$to().name;
      $rootScope.previousState = {
             'name':trans.$from().name,
             'params':trans.params('from')
      };
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
  $rootScope.loading = true;
  
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

app.controller('inspection_new', function ($rootScope, $scope, $state, inspection_manager, theme_manager, action_manager) {
  $scope.themes = [];
  $scope.templates = [];
  inspection_manager.mode = "inspection";
  inspection_manager.returnLocation = { 'name': $state.current.name, 'params':$state.params };
  action_manager.addAction('Start', 'check', function () {
    $scope.startInspection();
  });


/*   $scope.startInspection = function() {
       inspection_manager.insertInspectionFromTemplate($scope.sTemplate.rowId).then(function(data) {
          setTimeout(function() {
            $rootScope.loading = false;
            $state.go('inspection_section', {
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
        function(savedIns) {
          console.log('Successful save. Inserted Inspection Id: ' + savedIns.insId);
          // Simulate loading
          setTimeout(function() {
            $rootScope.loading = false;
            $state.go('inspection_section', {
              'insId': savedIns.insId
            });}, 6000);
        }, function(saveError) {
          console.log('Error saving inspection: ' + saveError.message);    
        }
      );
    }, function(getErr) {
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

app.controller('inspection_section', function ($rootScope, $scope, inspection_manager, action_manager, header_manager, $state, $transition$, shareService) {
  $rootScope.loading = true;
  
  inspection_manager.mode = "inspection";
  inspection_manager.returnLocation = { 'name': $state.current.name, 'params':$transition$.params() };
  $scope.insId = $transition$.params().insId;
  $scope.edit = function() {
    $state.go('template_section', {
      'insId': $scope.insId
    });
  };  
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    inspection_manager.clearInspection();
    $state.go('inspection');
  });
  
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
    
  inspection_manager.getInspection($scope.insId).then(
    function (data) {
      $rootScope.loading = false;
      $scope.inspection = data.value;
      $scope.sections = $scope.inspection.sections;
    },
    function (data) {
        $rootScope.loading = false;
      console.log("Error... no sections exist in the database");
    }
  );
  
  action_manager.addAction("Save", "save", function() {
    $rootScope.loading = true;
    inspection_manager.updateInspection().then(function() {
      $rootScope.loading = false;
    }, function(){
        $rootScope.loading = false;
    });
  });
    
  $scope.rapidMode = false;

});

app.controller('inspection_subsection', function ($rootScope, $scope, inspection_manager, action_manager, header_manager, $state, $transition$, shareService) {
  $scope.insId = $transition$.params().insId;
  $scope.sectionIndex = $transition$.params().sectionIndex;
  $scope.navigate = shareService.navigate;
  inspection_manager.mode = "inspection";
  inspection_manager.returnLocation = { 'name': $state.current.name, 'params':$transition$.params() };
  // All the sections for a specific inspection/report
  $scope.subsections = [];
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    $state.go('inspection_section', {
      'insId': $scope.insId
    });
  });
  $scope.edit = function() {
    $state.go('template_subsection', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex
    });
  };  
  inspection_manager.getSubsections($scope.insId, $scope.sectionIndex).then(
    function (data) {
      $rootScope.loading = false;
      $scope.subsections = data.value;
      console.log($scope.subsections);
    },
    function (data) {
      $rootScope.loading = false;
      console.log("Error... no subsections exist in the database");
    }
  );
    
  action_manager.addAction("Save", "save", function() {
    $rootScope.loading = true;
    inspection_manager.updateInspection().then(function() {
      $rootScope.loading = false;
    }, function(){
        $rootScope.loading = false;
    });
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

app.controller('inspection_question', function ($rootScope, $scope, inspection_manager, action_manager, header_manager, $state, $transition$, shareService) {
  $scope.insId = $transition$.params().insId;
  $scope.sectionIndex = $transition$.params().sectionIndex;
  $scope.subsectionIndex = $transition$.params().subsectionIndex;
  $scope.navigate = shareService.navigate;
  inspection_manager.mode = "inspection";
  inspection_manager.returnLocation = { 'name': $state.current.name, 'params':$transition$.params() };
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
  $scope.edit = function() {
    $state.go('template_question', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': $scope.subsectionIndex
    });
  };  
  inspection_manager.getQuestions($scope.insId, $scope.sectionIndex, $scope.subsectionIndex).then(
    function (data) {
      $rootScope.loading = false;
      $scope.questions = data.value;
    },
    function (data) {
      $rootScope.loading = false;
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

app.controller('inspection_detail', function ($rootScope, $scope, $, $state, header_manager, camera_manager, action_manager, inspection_manager, $transition$, shareService) {
  $scope.insId = $transition$.params().insId;
  $scope.sectionIndex = $transition$.params().sectionIndex;
  $scope.subsectionIndex = $transition$.params().subsectionIndex;
  $scope.questionIndex = $transition$.params().questionIndex;
  inspection_manager.mode = "inspection";
  inspection_manager.returnLocation = { 'name': $state.current.name, 'params':$transition$.params() };
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    $state.go('inspection_question', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': $scope.subsectionIndex
    });
  });

  $scope.edit = function() {
    $state.go('template_detail', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': $scope.subsectionIndex,
      'questionIndex':$scope.questionIndex
    });
  };  
    
  $scope.navigate = shareService.navigate;
  $scope.otherValue = {
    'singleSelect': '',
    'value': null
  };
  $scope.question = {};
  $scope.questionCount = -1;
  inspection_manager.getInspection($scope.insId)
                    .then(
    function (data) {
      $rootScope.loading = false;
      $scope.inspection = data.value;
      $scope.questionCount = $scope.inspection.sections[$scope.sectionIndex]
                                   .subsections[$scope.subsectionIndex]
                                   .questions.length;
      $scope.question = $scope.inspection.sections[$scope.sectionIndex]
                                   .subsections[$scope.subsectionIndex]
                                   .questions[$scope.questionIndex];
      $scope.sectionId = $scope.inspection.sections[$scope.sectionIndex].sectionId;
      $scope.subsectionId = $scope.inspection.sections[$scope.sectionIndex]
                                   .subsections[$scope.subsectionIndex].subsectionId;
      console.log($scope.question);
      attachPhotos();

      $scope.showListBottomSheet = function() {
        $scope.alert = '';
        $mdBottomSheet.show({
          templateUrl: 'bottom-sheet-list-template.html',
          controller: 'ListBottomSheetCtrl'
        }).then(function(clickedItem) {
          $scope.alert = clickedItem['name'] + ' clicked!';
        }).catch(function(error) {
          // User clicked outside or hit escape
        });
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
        if (newVal) {
          $scope.question.answer = newVal;
        }
      });

      $scope.$watch('question.answer', function (newVal, oldval) {
        if (newVal && ($scope.question.type == 'text' || $scope.question.type == 'textarea')) {
          $scope.question.values[0].key = newVal;
        }
      });
    },
    function (data) {
        $rootScope.loading = false;
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

  //action_manager.mode = ACTION_MODES.Action;
/*  action_manager.addAction("Previous", "keyboard_arrow_left", function () {
    navigateQuestions(false);
  }, 'md-raised');*/
  action_manager.addAction("Save", "save", function() {
    $rootScope.loading = true;
    inspection_manager.updateInspection().then(function() {
      $rootScope.loading = false;
    });
    //  $scope.showListBottomSheet();
  }, 'md-raised');
/*  action_manager.addAction("Next", "keyboard_arrow_right", function () {
    navigateQuestions(true);
  }, 'md-raised');*/

  $scope.addPhotos = function (index, value) {
      console.log('add photos index: ' + index + ' value: ' + value);
      camera_manager.answerID = index;
      camera_manager.title = $scope.question.title;
      if (value !== null && value !== undefined) {
        camera_manager.title += ": " + value;
      }
    $state.go('camera');
  };


  var attachPhotos = function () {
    if (camera_manager.photos.length > 0 ) {
        if (!$scope.question.photos) {
            $scope.question.photos = [];
        }
        
        for (var photoIndex in camera_manager.photos) {
          var photo = camera_manager.photos[photoIndex];
          if (!photo.deleted) {
              photo.answerId = camera_manager.answerID;
              photo.title = camera_manager.title;
             $scope.question.photos.push(photo);
          }
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
