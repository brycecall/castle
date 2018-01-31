// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('templates', {
      url: "/templates",
      templateUrl: "pages/templates/templates.html",
      controller: "templates"
    })
    .state('template_new', {
      url: "/templates",
      templateUrl: "pages/templates/template_new.html",
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
        'questionIndex': null,
        'mode':'template'
      }
    });
});

app.controller('templates', function ($scope, $rootScope, $state, header_manager, camera_manager, action_manager, inspection_manager, $mdToast, $cordovaFile, filesystem_manager) {
  // Switch the inspection_manager mode (this is global)
  inspection_manager.mode = "template";
  $rootScope.loading = true;
  var templates = inspection_manager.getTemplates();
  templates.then(
    //Success
    function (promise) {
      $scope.templates = [];
      for(var i = 0; i < promise.length; i++) {
        $scope.templates.push(JSON.parse(promise[i]));
      }
      $rootScope.loading = false;
    },
    function (promise) {
      $scope.templates = [];
      console.log(promise.message);
      $rootScope.loading = false;
    }
  );
  $scope.numDeleted = 0;

  $scope.delete = function(index, list) {
    var toast = $mdToast.simple()
      .textContent('')
      .action('UNDO')
      .highlightAction(true)
      .highlightClass('md-accent')
      .position('bottom')
      .toastClass('highIndex');
    
    $scope.templates[index].deleted = true;
    $scope.numDeleted++;
    $mdToast.show(toast).then(function (response) {
      if (response == 'ok') {
        $scope.templates[index].deleted = false;
        $scope.numDeleted--;
      } else {
        inspection_manager.deleteInspection(list[index].guid + ".js");
      }
    }, function () {
      console.log("You delete fast don't ya!");
    });
  };
    
  $scope.edit = function (index) {
    inspection_manager.getInspection($scope.templates[index]).then(function(success){
      $state.go('template_section', {
        'insId': $scope.insId 
      });
    }, function(error){
      console.log('Failed to load inspection');
    });
  };
    
  $scope.copy = function (ins) {
    // Spinny spins
    $rootScope.loading = true;

    inspection_manager.copy(ins).then(function(success){
      $scope.templates.push(success.template);
    }, function(error){
      console.log('Error: ');
      console.log(error);
    });

    $rootScope.loading = false;
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
  });

  $scope.camera_manager = camera_manager;
  action_manager.addAction('New Template', 'add', function () {
      
//      inspection_manager.setInspectionCache({
//          "insTemplateTitle":"",
//          "instype":"template",
//          "sections":[]
//      });
//      var insId = inspection_manager.saveInspection();
      var template = {
          "insTemplateTitle":"",
          "instype":"template",
          "sections":[]
      };
      inspection_manager.loadNewTemplate().then(function(data){
          template = data;
          $scope.templates.push(template);
      }, function(data){
          console.log("Failure!");
      });
//      template = inspection_manager.loadNewTemplate();
//      $scope.templates.push(template);
      
  });
});

app.service('templateShareService', function ($state, $mdToast, $q) {
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
    var deferRemove = $q.defer();
    var toast = $mdToast.simple()
      .textContent('')
      .action('UNDO')
      .highlightAction(true)
      .highlightClass('md-accent')
      .position('bottom')
      .toastClass('highIndex');
    
    list[index].deleted = true;
    $mdToast.show(toast).then(function (response) {
      if (response == 'ok') {
        list[index].deleted = false;
        deferRemove.resolve({
          value: -1
        });
      } else {
        deferRemove.resolve({
          value: 1
        });
      }
    }, function () {
      console.log("You delete fast don't ya!");
        deferRemove.resolve({
          value: 1
        });
    });
    return deferRemove.promise;
  };
    
   shareService.getCrumbyClass = function(location){
    var result = '';
    var currentState = $state.current.name;
    if (location == currentState) {
        result = 'md-accent active';
    }
    return result;  
   }; 
    
  return shareService;
});

app.controller('template_new', function ($rootScope, $scope, $state, $rootScope, inspection_manager, theme_manager, header_manager) {
  header_manager.title = "New Template";
  
  $scope.themes = [];
  $scope.templates = [];
  $scope.toSection = function (insId) {
    $rootScope.loading = true;
    $state.go('inspection_wizard', {
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
      for (var i = 0; promise.row && i < promise.row.length; i++) {
        $scope.templates.push(promise.row.item(i));
      }
      $rootScope.loading = false;
    },
    function (promise) {
      console.log(promise.message);
      $rootScope.loading = false;
    }
  );

});

app.controller('template_section', function ($rootScope, $scope, inspection_manager, header_manager, $state, templateShareService, action_manager) {
  $scope.template = inspection_manager.getPrivateInspection();
  $scope.sections = $scope.template.sections || [];
  $rootScope.loading = false;
  header_manager.title = "Edit " + inspection_manager.mode.charAt(0).toUpperCase() + inspection_manager.mode.substr(1);
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    inspection_manager.clearInspection();
    console.log(inspection_manager.mode);
    switch (inspection_manager.mode) {
      case "theme":
        $state.go('themes');
        break;
      case "template":
        $state.go('templates');
        break;
      case "inspection":
        $state.go(inspection_manager.returnLocation.name, inspection_manager.returnLocation.params);
        break;
    }
  });
  $scope.numDeleted = 0;
  $scope.getCrumbyClass = templateShareService.getCrumbyClass;
  $scope.navigate = templateShareService.navigate;
  $scope.remove = function(index, list) {
    var adjustNum = templateShareService.remove(index, list);
    adjustNum.then(function(success) {
      $scope.numDeleted += success.value;
      if(success.value == 1) {
        $scope.sections.splice(index, 1);  
      }
    }, function(error) {
      $scope.numDeleted += error.value;
    });
  };

  action_manager.addAction('Save', 'save', function () {
    $rootScope.loading = true;
    inspection_manager.saveInspection().then(function() {
      $rootScope.loading = false;
      action_manager.showSuccessMessageToast('Save Success');
    }, function(){
        $rootScope.loading = false;
        action_manager.showFailureMessageToast('Save Failure');
    });
    switch (inspection_manager.mode) {
      case "theme":
        $state.go('themes');
        break;
      case "template":
        break;
      case "inspection":
        $state.go(inspection_manager.returnLocation.name, inspection_manager.returnLocation.params);
        break;
    }
  });

  $scope.goToSubsection = function (sectionIndex) {
    $state.go('template_subsection', {
      'insId': $scope.insId,
      'sectionIndex': sectionIndex
    });
  };

  $scope.addSection = function () {
    $scope.sections.push({
      'id': null,
      'title': '',
      'inspectionId': parseInt($scope.insId),
      'sourceType': 'template',
      'subsections':[]
    });

    setTimeout(function() {
      $('.ng-empty').focus();
    });
  };
});

app.controller('template_subsection', function ($rootScope, $scope, inspection_manager, header_manager, $state, $stateParams, templateShareService, action_manager) {
  $scope.insId = $stateParams.insId;
  $scope.sectionIndex = $stateParams.sectionIndex;
  $scope.template = inspection_manager.getPrivateInspection();
  $scope.subsections = $scope.template.sections[$scope.sectionIndex].subsections || [];
  header_manager.title = "Edit " + $scope.template.sections[$scope.sectionIndex].title + " Section";
  $scope.getCrumbyClass = templateShareService.getCrumbyClass;
  $scope.navigate = templateShareService.navigate;
  $scope.numDeleted = 0;
  $scope.remove = function(index, list) {
    var adjustNum = templateShareService.remove(index, list);
    adjustNum.then(function(success) {
      $scope.numDeleted += success.value;
      if(success.value == 1) {
        $scope.subsections.splice(index, 1);  
      }
    }, function(error) {
      $scope.numDeleted += error.value;    
    });
  };

  header_manager.title = "Edit Section";
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    $state.go('template_section', {
      'insId': $scope.insId
    });
  });
  
  action_manager.addAction('Save', 'save', function () {
    $rootScope.loading = true;
    inspection_manager.saveInspection().then(function() {
      $rootScope.loading = false;
      action_manager.showSuccessMessageToast('Save Success');
    }, function(){
      $rootScope.loading = false;
      action_manager.showFailureMessageToast('Save Failure');
    });
    switch (inspection_manager.mode) {
      case "theme":
        $state.go('themes');
        break;
      case "template":
        break;
      case "inspection":
        $state.go(inspection_manager.returnLocation.name, inspection_manager.returnLocation.params);
        break;
    }
  });
  
  $scope.addSubsection = function () {
    $scope.subsections.push({
      'id': null,
      'title': '',
      'sectionId': null,
      'inspectionId': parseInt($scope.insId),
      'sourceType': 'template',
      'questions':[]
    });
    setTimeout(function() {
      $('.ng-empty').focus();
    });
  };

  $scope.questionDrill = function (subsectionIndex) {
    $state.go('template_question', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': subsectionIndex
    });
  };
});

app.controller('template_question', function ($rootScope, $scope, inspection_manager, header_manager, $state, $stateParams, templateShareService, action_manager) {
  $scope.insId = $stateParams.insId;
  $scope.sectionIndex = $stateParams.sectionIndex;
  $scope.subsectionIndex = $stateParams.subsectionIndex;
  //$scope.template = inspection_manager.getPrivateInspection();
  $scope.questions = inspection_manager.getQuestions($scope.insId, $scope.sectionIndex, $scope.subsectionIndex);//$scope.template.sections[$scope.sectionIndex].subsections[$scope.subsectionIndex].questions || [];
  header_manager.title = "Edit Test Subsection";
  $scope.getCrumbyClass = templateShareService.getCrumbyClass;
  $scope.navigate = templateShareService.navigate;
  $scope.numDeleted = 0;
  $scope.remove = function(index, list) {
    var adjustNum = templateShareService.remove(index, list);
    adjustNum.then(function(success) {
      $scope.numDeleted += success.value;
      if(success.value == 1) {
        $scope.questions.splice(index, 1);  
      }
    }, function(error) {
      $scope.numDeleted += error.value;    
    });
  };
  
  header_manager.title = "Edit Subsection";
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'back', function () {
    $state.go('template_subsection', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex
    });
  });
  action_manager.addAction('Save', 'save', function () {
    $rootScope.loading = true;
    inspection_manager.saveInspection().then(function() {
      $rootScope.loading = false;
      action_manager.showSuccessMessageToast('Save Success');
    }, function() {
      $rootScope.loading = false;
      action_manager.showFailureMessageToast('Save Failure');
    });
    switch (inspection_manager.mode) {
      case "theme":
        $state.go('themes');
        break;
      case "template":
        break;
      case "inspection":
        $state.go(inspection_manager.returnLocation.name, inspection_manager.returnLocation.params);
        break;
    }
  });
  $scope.addQuestion = function () {
    $scope.questions.push({
      'id': null,
      'title': '',
      'description': '',
      'subsectionId': null,
      'inspectionId': parseInt($scope.insId),
      'sourceType': 'template',
      'type': '',
      'values': [],
      'validation': {
        'type': '',
        'min': null,
        'max': null,
        'isRequired': 0
      },
      'answers': [],
      'answer': null,
      'severity': null,
      'notApplicable': 0,
      'showSummaryRemark': 1,
      'showDescription': 1,
      'photos': []
    });
    setTimeout(function() {
      $('.ng-empty').focus();
    });
  };
    
  $scope.questionDrill = function (questionIndex) {
    $state.go('template_detail', {
      'insId': $scope.insId,
      'sectionIndex': $scope.sectionIndex,
      'subsectionIndex': $scope.subsectionIndex,
      'questionIndex': questionIndex
    });
  };

});

app.controller('template_detail', function ($scope, $, $state, header_manager, camera_manager, action_manager, inspection_manager, $stateParams, templateShareService, $rootScope) {
  $scope.insId = $stateParams.insId;
  $scope.sectionIndex = $stateParams.sectionIndex;
  $scope.subsectionIndex = $stateParams.subsectionIndex;
  $scope.questionIndex = $stateParams.questionIndex;
  //$scope.template = inspection_manager.getPrivateInspection();
  $scope.question = inspection_manager.getQuestion($scope.insId, $scope.sectionIndex, $scope.subsectionIndex, $scope.questionIndex);//$scope.template.sections[$scope.sectionIndex].subsections[$scope.subsectionIndex].questions[$scope.questionIndex] || [];
  $scope.questionCount = inspection_manager.getQuestions($scope.insId, $scope.sectionIndex, $scope.subsectionIndex).length;//$scope.template.sections[$scope.sectionIndex].subsections[$scope.subsectionIndex].questions.length || -1;
  $scope.mode = $stateParams.mode;
  $scope.getCrumbyClass = templateShareService.getCrumbyClass;
  header_manager.mode = HEADER_MODES.Action;
    if ($scope.mode == "inspection") {
        header_manager.title = "Edit Question";
    } else {
       header_manager.title = "Edit " + inspection_manager.mode.charAt(0).toUpperCase() + inspection_manager.mode.substr(1);
    }

    if ($scope.mode == 'inspection')
    {
          header_manager.setAction('Back', 'back', function () {
          }, 'hide');
    } else {
          header_manager.setAction('Back', 'back', function () {
            $state.go('template_question', {
              'insId': $scope.insId,
              'sectionIndex': $scope.sectionIndex,
              'subsectionIndex': $scope.subsectionIndex
            });
          });

    }

    
$scope.questionTypes = [
        {
            key:"text"
        },
        {
            key:"photo"
        },
        {
            key:"checkbox"
        },
        {
            key:"radio"
        },
        {
            key:"textarea"
        }
    ];
  $scope.lastValue = null;
  $scope.openType = function() {
      if ($scope.question.value) {
            $scope.lastTypeValue = $scope.question.value;
      }
  };
  $scope.changeType = function() {
     if (!$scope.question.type || $scope.lastTypeValue !== $scope.question.type ) {
         $scope.question.values = [];
         if ($scope.question.type == 'checkbox') {
             $scope.question.values.push({'key':''});
         }
         $scope.question.answers = [];
         $scope.question.answer = null;
         $scope.question.notApplicable = 0;
     }
  };  
  $scope.navigate = templateShareService.navigate;
  $scope.numDeleted = 0;
  $scope.remove = function(index, list) {
    var adjustNum = templateShareService.remove(index, list);
    adjustNum.then(function(success) {
      $scope.numDeleted += success.value;
      if(success.value == 1) {
        $scope.question.values.splice(index, 1);  
      }
    }, function(error) {
      $scope.numDeleted += error.value;    
    });
  };
  $scope.otherValue = {
    'singleSelect': '',
    'value':null
  };
    
  $scope.sortOptions = {
    'ui-floating': false, 
    'handle': '.handle', 
    'containment': '#sortParent'
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

  attachPhotos();

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
    
  if ($scope.mode == "inspection") {
      
      action_manager.addAction("Cancel", "close", function () {
          $state.go('inspection_wizard', {
            'insId': $scope.insId,
            'sectionIndex': $scope.sectionIndex,
            'subsectionIndex': $scope.subsectionIndex,
            'questionIndex': $scope.questionIndex
          });
      }, "md-accent");

      action_manager.addAction('Save', 'check', function () {
          
        inspection_manager.updateInspection().then(function() {
            $rootScope.loading = false;
            action_manager.showSuccessMessageToast('Save Success');
            $state.go('inspection_wizard', {
              'insId': $scope.insId,
              'sectionIndex': $scope.sectionIndex,
              'subsectionIndex': $scope.subsectionIndex,
              'questionIndex': $scope.questionIndex
            });
        }, function() {
            $rootScope.loading = false;
            action_manager.showFailureMessageToast('Save Failure');
        });
      }, 'md-raised');
      
  }  else {
      action_manager.addAction("Previous", "keyboard_arrow_left", function () {
        navigateQuestions(false);
      }, 'md-raised');
      action_manager.addAction('Save', 'save', function () {
        inspection_manager.saveInspection().then(function() {
            $rootScope.loading = false;
            action_manager.showSuccessMessageToast('Save Success');
        }, function() {
            $rootScope.loading = false;
            action_manager.showFailureMessageToast('Save Failure');
        });
        switch (inspection_manager.mode) {
          case "theme":
            $state.go('themes');
            break;
          case "template":
            break;
          case "inspection":
            $state.go(inspection_manager.returnLocation.name, inspection_manager.returnLocation.params);
            break;
        }
      }, 'md-raised');
      action_manager.addAction("Next", "keyboard_arrow_right", function () {
        navigateQuestions(true);
      }, 'md-raised');
    
  }

  $scope.addPhotos = function (index, value) {
      camera_manager.answerID = index;
      camera_manager.title = $scope.question.title;
      if (value !== null && value !== undefined) {
        camera_manager.title += ": " + value;
      }
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

  $scope.toggle = function (answer) {
    if (answer.checked == undefined) {
      answer.checked = true;
    } else {
      answer.checked = !answer.checked;
    }
      
    // Comments Box magickery
    if (answer.autoComment) {
        if($scope.question.comments == undefined) {
          $scope.question.comments = answer.autoComment;
        } else if (answer.checked && $scope.question.comments.indexOf(answer.autoComment) < 0) {
          // Checked box, add 
          $scope.question.comments += ' ' + answer.autoComment;
        } else if (!answer.checked && $scope.question.comments.indexOf(answer.autoComment) >= 0) {
          // Unchecked box, remove string from question comments
          $scope.question.comments = $scope.question.comments.replace(answer.autoComment, '');
        }
    }
  };

  $scope.exists = function (value, array) {
    return $.inArray(value, array) > -1;
  };

  $scope.setSeverity = function (value) {
    // If button is selected a second time,
    // remove selected effect
    if(value == $scope.question.severity) {
      $scope.question.severity = "";
      $scope.question.notApplicable = false; 
    } else {
      $scope.question.severity = value;
      $scope.question.notApplicable = true;
    }
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
      list.push({
          'id': null,
          'key':value,
          'questionId': null,
          'sourceType': 'template',
          'inspectionId': parseInt($scope.insId),
          'type': '',
          'remark': ''          
      });
  };

});



//app.factory('$', function ($window) {
//  return $window.jQuery;
//});
