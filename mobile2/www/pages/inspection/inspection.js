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
    .state('inspection_detail', {
      url: "/inspection/detail/{insId}/{sectionIndex}/{subsectionIndex}/{questionIndex}",
      templateUrl: "pages/inspection/inspection_detail.html",
      controller: "inspection_detail",
      params: {
        'insId': null,
        'sectionIndex': '0',
        'subsectionIndex': '0',
        'questionIndex': '0',
        'photoMode':'0'
      }
    })
    .state('inspection_photo', {
      url: "/inspection/photo/{insId}/{sectionIndex}/{subsectionIndex}/{questionIndex}",
      templateUrl: "pages/inspection/inspection_photo.html",
      controller: "inspection_photo",
      params: {
        'insId': null,
        'sectionIndex': '0',
        'subsectionIndex': '0',
        'questionIndex': '0'
      }
    });
});

app.service('shareService', function ($state) {
  var shareService = {};
  shareService.navigate = function (insId, sectionIndex, subsectionIndex) {
    if (insId && sectionIndex && subsectionIndex) {
      $state.go('inspection_detail', {
        'insId': insId,
        'sectionIndex': sectionIndex ? sectionIndex : 0,
        'subsectionIndex': subsectionIndex ? subsectionIndex : 0
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
    $state.go('inspection_detail', {
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
  inspection_manager.returnLocation = {
    'name': $state.current.name,
    'params': $state.params
  };
  action_manager.addAction('Start', 'check', function () {
    $scope.startInspection();
  });


  /*   $scope.startInspection = function() {
         inspection_manager.insertInspectionFromTemplate($scope.sTemplate.rowId).then(function(data) {
            setTimeout(function() {
              $rootScope.loading = false;
              $state.go('inspection_detail', {
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
            $state.go('inspection_detail', {
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

app.controller('inspection_detail', function ($rootScope, $scope, $, $state, header_manager, camera_manager, action_manager, inspection_manager, $transition$, shareService) {
  $scope.insId = $transition$.params().insId;
  $scope.sectionIndex = $transition$.params().sectionIndex;
  $scope.subsectionIndex = $transition$.params().subsectionIndex;
  $scope.questionIndex = $transition$.params().questionIndex;
  $scope.photoMode = $transition$.params().photoMode;
  inspection_manager.mode = "inspection";
  inspection_manager.returnLocation = {
    'name': $state.current.name,
    'params': $transition$.params()
  };
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'check', function () {
    $rootScope.loading = true;
    //inspection_manager.saveInspection()
      //.then(function () {
        $rootScope.loading = false;
        window.history.back();
      //});
  });

  header_manager.addAction("Photo Mode", "shutter_camera", function () {
      $state.go("inspection_photo", {'insId':$scope.insId});
  }, 'md-raised md-accent');
    
  $scope.edit = function () {
    $state.go('template_detail', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': $scope.subsectionIndex,
      'questionIndex': $scope.questionIndex
    });
  };

  $scope.navigate = shareService.navigate;
  $scope.otherValue = {
    'singleSelect': '',
    'value': null
  };
  $scope.question = {};
  $scope.questionCount = -1;
  $scope.navChange = function (loc) {
    switch (loc) {
      case "section":
        $scope.subsectionIndex = 0;
        $scope.questionIndex = 0;
        break;
      case "subsection":
        $scope.questionIndex = 0;
        break;
      default:
    }
    $scope.questionCount = $scope.inspection.sections[$scope.sectionIndex]
      .subsections[$scope.subsectionIndex]
      .questions.length;
    $scope.question = $scope.inspection.sections[$scope.sectionIndex]
      .subsections[$scope.subsectionIndex]
      .questions[$scope.questionIndex];
      $scope.otherValue = {
        'singleSelect': '',
        'value': null
      };
  };
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
        //      $scope.sectionId = $scope.inspection.sections[$scope.sectionIndex].sectionId;
        //      $scope.subsectionId = $scope.inspection.sections[$scope.sectionIndex]
        //                                   .subsections[$scope.subsectionIndex].subsectionId;
        //      $scope.questions = $scope.inspection.sections[$scope.sectionIndex]
        //                                   .subsections[$scope.subsectionIndex].questions;
        attachPhotos();

        $scope.showListBottomSheet = function () {
          $scope.alert = '';
          $mdBottomSheet.show({
            templateUrl: 'bottom-sheet-list-template.html',
            controller: 'ListBottomSheetCtrl'
          }).then(function (clickedItem) {
            $scope.alert = clickedItem['name'] + ' clicked!';
          }).catch(function (error) {
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

  action_manager.mode = ACTION_MODES.Action;
    var hideButton = '';
     if ($scope.photoMode === '1') {
         hideButton = 'hide';
     }
  action_manager.addAction("Previous", "keyboard_arrow_left", function () {
    navigateQuestions(false);
  }, 'md-raised ' + hideButton); 
  action_manager.addAction("Photo", "shutter_camera", function () {
    //$scope.addPhotos()
    //todo: add photo
  }, 'md-raised bigicon md-accent');
  action_manager.addAction("Next", "keyboard_arrow_right", function () {
    navigateQuestions(true);
  }, 'md-raised ' + hideButton);

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
    if (camera_manager.photos.length > 0) {
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

app.controller('inspection_photo', function ($rootScope, $scope, $, $state, header_manager, camera_manager, action_manager, inspection_manager, $transition$, shareService) {
  $scope.insId = $transition$.params().insId;
  $scope.sectionIndex = $transition$.params().sectionIndex;
  $scope.subsectionIndex = $transition$.params().subsectionIndex;
  $scope.questionIndex = $transition$.params().questionIndex;
  $scope.step = 0;
  $scope.message = "Choose a Section";
 
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'check', function () {
    $rootScope.loading = true;
        $rootScope.loading = false;
        window.history.back();
  });
  header_manager.addAction("Wizard Mode", "shutter_camera", function () {
      $state.go("inspection_detail", {'insId':$scope.insId});
  }, 'md-raised md-accent');
    
  inspection_manager.mode = "inspection";
  inspection_manager.returnLocation = {
    'name': $state.current.name,
    'params': $transition$.params()
  };
  $scope.chipList = []; 
  inspection_manager.getInspection($scope.insId)
    .then(
      function (data) {
        $rootScope.loading = false;
        $scope.inspection = data.value;
        $scope.chipList = $scope.inspection.sections;
      },
      function (data) {
        $rootScope.loading = false;
        console.log("Error... no question exists in the database");
      }
    );
    
    $scope.stepUp = function(index) {
        $scope.step++;
        switch($scope.step) {
            case 1:
                $scope.sectionIndex = index;
                $scope.message = "Choose a Subsection";
                $scope.chipList = $scope.inspection.sections[index].subsections;
                break;
            case 2:
                $scope.subsectionIndex = index;
                $scope.message = "Choose a Question";
                $scope.chipList = $scope.inspection.sections[$scope.sectionIndex].subsections[index].questions;
                break;
            case 3:
                $scope.question = index;
                $state.go('inspection_detail', {
                    'insId': $scope.insId,
                    'sectionIndex': $scope.sectionIndex,
                    'subsectionIndex': $scope.subsectionIndex,
                    'questionIndex': $scope.question,
                    'photoMode':'1'
                });
                break;
            case 4:
                break;
            default:
        }
    };

  $scope.stepDownTo = function(index) {
     if (index < $scope.step) {
        $scope.step = index;
        switch(index) {
            case 0:
                $scope.message = "Choose a Section";
                $scope.chipList = $scope.inspection.sections;
                break;
            case 1:
                $scope.message = "Choose a Subsection";
                $scope.chipList = $scope.inspection.sections[$scope.sectionIndex].subsections;
                break;
            case 2:
                $scope.message = "Choose a Question";
                $scope.chipList = $scope.inspection.sections[$scope.sectionIndex].subsections[$scope.subsectionIndex].questions;
                break;
            default:
        }
     }
  }; 

});