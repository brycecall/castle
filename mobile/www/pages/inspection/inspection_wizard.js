// Register the Page
app.config(function ($stateProvider) {
    $stateProvider
        .state('inspection_wizard', {
            url: "/inspection/detail/{insId}/{sectionIndex}/{subsectionIndex}/{questionIndex}",
            templateUrl: "pages/inspection/inspection_wizard.html",
            controller: "inspection_wizard",
            params: {
                'insId': null,
                'sectionIndex': '0',
                'subsectionIndex': '0',
                'questionIndex': '0',
                'photoMode': '0' //todo make null
            }
        })
        .state('inspection_question_step', {
            url: "/inspection/question/{insId}/{sectionIndex}/{subsectionIndex}/{questionIndex}",
            templateUrl: "pages/inspection/inspection_question_step.html",
            controller: "inspection_wizard",
            params: {
                'insId': null,
                'sectionIndex': '0',
                'subsectionIndex': '0',
                'questionIndex': '0',
                'photoMode': '1'
            }
        });
});

app.controller('inspection_wizard', function ($rootScope, $scope, $, $state, header_manager, camera_manager, action_manager, inspection_manager, $transition$, shareService, $timeout, $mdDialog, $mdToast) {
    $scope.validateSeverityClass = '';
    $scope.rapidModePhoto = camera_manager.rapidModePhoto;
    $scope.insParams = {
        'insId': $transition$.params().insId,
        'sectionIndex': $transition$.params().sectionIndex,
        'subsectionIndex': $transition$.params().subsectionIndex,
        'questionIndex': $transition$.params().questionIndex,
        'photoMode': $transition$.params().photoMode
    };
    inspection_manager.mode = "inspection";
    inspection_manager.returnLocation = {
        'name': $state.current.name,
        'params': $transition$.params()
    };
    $scope.currentStateName = $state.current.name;
    header_manager.title = "Inspection Editor";
    header_manager.mode = HEADER_MODES.Action;
    action_manager.mode = ACTION_MODES.Action;
    
    if ($scope.insParams.photoMode === '1') { //Photo Mode
        //Header
        header_manager.setAction('Done', 'check', function () {
            $rootScope.loading = false;
        }, 'hide');
        header_manager.addAction("Wizard Mode", "shutter_camera", function () {
            if ($scope.question.severity != '' && $scope.question.severity !== undefined && $scope.question.severity !== null) {
              $state.go("inspection_wizard", {
                  'insId': $scope.insParams.insId,
                  'photoMode': null
              });
            } else {
              $scope.validateSeverityClass = 'answerMe';
            }
        }, 'md-raised md-accent');
        
        // Footer Actions
        if ($scope.currentStateName == 'inspection_wizard') {
            action_manager.addAction("Photo", "shutter_camera", function () {
                $scope.addPhotos(0, 0);
            }, 'md-raised md-accent');
            action_manager.addAction("Done", "check", function () {
                if ($scope.question.severity != '' && $scope.question.severity !== undefined && $scope.question.severity !== null) {
                    $state.go("inspection_photo", {
                        'insId': $scope.insParams.insId
                    });
                } else {
                    $scope.validateSeverityClass = 'answerMe';
                }

            }, 'md-raised ');
        }
    } else { //Wizard Mode
        //Header
        header_manager.setAction('Done', 'check', function () {
            $rootScope.loading = false;
            $state.go('inspection');
        });
        header_manager.addAction("Photo Mode", "shutter_camera", function () {
            $state.go("inspection_photo", {
                'insId': $scope.insParams.insId
            });
        }, 'md-raised md-accent');
        
        //Footer Actions
        action_manager.addAction("Previous", "keyboard_arrow_left", function () {
            navigateQuestions(false);
        }, 'md-raised ');
        action_manager.addAction("Photo", "shutter_camera", function () {
            $scope.addPhotos(0, 0);
        }, 'md-raised bigicon md-accent');
        action_manager.addAction("Next", "keyboard_arrow_right", function () {
            navigateQuestions(true);
        }, 'md-raised ');
    }

    header_manager.addAction("Edit Question", "mode_edit", function () {
        $state.go("template_detail", {
            'insId': $scope.insParams.insId,
            'sectionIndex': $scope.insParams.sectionIndex,
            'subsectionIndex': $scope.insParams.subsectionIndex,
            'questionIndex': $scope.insParams.questionIndex,
            'mode':'inspection'
        });
    }, 'md-raised md-accent');


    $scope.addPhotos = function (index, value) {
        console.log('add photos index: ' + index + ' value: ' + value);
        camera_manager.answerID = index;
        camera_manager.title = $scope.question.title;
        $state.current.params = $scope.insParams;
        $state.go('camera', $state.current.params);
    };

    $scope.edit = function () {
        $state.go('template_detail', {
            'insId': $scope.insParams.insId,
            'sectionIndex': $scope.insParams.sectionIndex,
            'subsectionIndex': $scope.insParams.subsectionIndex,
            'questionIndex': $scope.insParams.questionIndex
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
                $scope.insParams.subsectionIndex = 0;
                $scope.insParams.questionIndex = 0;
                break;
            case "subsection":
                $scope.insParams.questionIndex = 0;
                break;
            default:
        }

        $scope.questionCount = $scope.inspection.sections[$scope.insParams.sectionIndex]
            .subsections[$scope.insParams.subsectionIndex]
            .questions.length;
        $scope.question = $scope.inspection.sections[$scope.insParams.sectionIndex]
            .subsections[$scope.insParams.subsectionIndex]
            .questions[$scope.insParams.questionIndex];
        $scope.otherValue = {
            'singleSelect': '',
            'value': null
        };
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

    $scope.commentBox = "";

    $scope.inspection = inspection_manager.getPrivateInspection();
    $scope.questionCount = $scope.inspection.sections[$scope.insParams.sectionIndex]
                    .subsections[$scope.insParams.subsectionIndex]
                    .questions.length;
    $scope.question = $scope.inspection.sections[$scope.insParams.sectionIndex]
                    .subsections[$scope.insParams.subsectionIndex]
                    .questions[$scope.insParams.questionIndex];
    attachPhotos();
                  
    if ( $scope.currentStateName == 'inspection_wizard' &&
         !angular.equals({}, $scope.rapidModePhoto) ) {
      //Add the rapid photo mode photo
      $scope.question.photos.push($scope.rapidModePhoto);
      camera_manager.rapidModePhoto = {};
    }
	
	$scope.remove = function(photos, index) {
	  var tempPhoto = angular.copy(photos[index]);
	  //photos.splice(index, 1);
	  $scope.question.photos.splice(index, 1);
	  // Delete photo from question.photos array
	  if (photos && photos.length > 0) {
	    var toast = $mdToast.simple()
        .textContent('')
        .action('UNDO')
        .highlightAction(true)
        .highlightClass('md-accent')
        .position('bottom')
        .toastClass('highIndex');
	
	    $mdToast.show(toast).then(function (response) {
          if (response == 'ok') {
            // Undo deletion, reinsert photo at index
			//photos.splice(tempPhoto, 0, index);
			$scope.question.photos.splice(index, 0, tempPhoto);
          } else {
			// Do nothing, photo has been deleted
          }
        }, function () {
          console.log("You delete fast don't ya!");
        });
	  }
	}
	
    var navigateQuestions = function (forward) {
        if ($scope.questionCount !== -1 && $scope.questionCount > 1) {
            var newQuestionIndex = $scope.insParams.questionIndex;
            var newSubsectionIndex = $scope.insParams.subsectionIndex;
            var newSectionIndex = $scope.insParams.sectionIndex;
            if (forward) {
                if ($scope.insParams.questionIndex >= $scope.questionCount - 1) {
                    newQuestionIndex = 0;
                    // Check subsection indexing. Iterate to new section if in last subsection
                    if (newSubsectionIndex >= $scope.inspection.sections[$scope.insParams.sectionIndex].subsections.length - 1) {
                      newSubsectionIndex = 0;
                      if (newSectionIndex >= $scope.inspection.sections.length -1) {
                        newSectionIndex = 0;
                      } else {
                        newSectionIndex++;
                      }
                    } else {
                      newSubsectionIndex++;
                    }
                } else {
                    newQuestionIndex++;
                }
            } else {
                if ($scope.insParams.questionIndex <= 0) {
                  // Navigate to last question of previous subsection
                  //newQuestionIndex = $scope.questionCount - 1;
                  // If first subsection, we need to decrement sectionIndex
                  if (newSubsectionIndex == 0) {
                    // If first section, we need to go to the last section, subsection, question
                    if (newSectionIndex == 0) {
                      newSectionIndex = $scope.inspection.sections.length - 1;
                      newSubsectionIndex = $scope.inspection.sections[newSectionIndex].subsections.length - 1;
                      newQuestionIndex = $scope.inspection.sections[newSectionIndex].subsections[newSubsectionIndex].questions.length - 1;
                    } else {
                      // If first subsection, we need to go to previous section, last subsection, last question
                      newSectionIndex--;
                      newSubsectionIndex = $scope.inspection.sections[newSectionIndex].subsections.length - 1;
                      newQuestionIndex = $scope.inspection.sections[newSectionIndex].subsections[newSubsectionIndex].questions.length - 1;
                    }
                  } else {
                    // Otherwise, decrement the subsectionIndex and go to last question
                    newSubsectionIndex--;
                    newQuestionIndex = $scope.inspection.sections[newSectionIndex].subsections[newSubsectionIndex].questions.length - 1;
                  }
                } else {
                  // Otherwise, just decrement the questionIndex
                  newQuestionIndex--;
                }
            }
            // Update insParams
            $scope.insParams.sectionIndex = newSectionIndex;
            $scope.insParams.subsectionIndex = newSubsectionIndex;
            $scope.insParams.questionIndex = newQuestionIndex;
            $scope.questionCount = $scope.inspection.sections[newSectionIndex].subsections[newSubsectionIndex].questions.length;
            $scope.question = $scope.inspection.sections[newSectionIndex].subsections[newSubsectionIndex].questions[newQuestionIndex];
            // Save individual question when navigating
            var update = inspection_manager.saveInspection();
            update.then(function(success) {
              // Successful save, store timestamp for easy access to 'last saved'
              console.log('success update question');
              $rootScope.lastSaved = new Date();
            }, function(error) {
              //Display toast if there is a failure saving question
              console.log('fail update question');
              action_manager.showFailureMessageToast('Failure to save question');
            });
        }
    };

    $scope.toggle = function (answer) {
      if (answer.checked == undefined) {
        answer.checked = true;
      } else {
        answer.checked = !answer.checked;
      }

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

    $scope.toggleRadio = function (answer) {
        $scope.question.answer = answer.key;
        if (answer.autoComment !== null && answer.autoComment !== undefined && $scope.question.comments.indexOf(answer.autoComment) < 0) {
            $scope.question.comments = answer.autoComment;
        }
    }
    
    $scope.setAnswer = function(answer) {
        $scope.question.answer = answer;
    };

    $scope.exists = function (value, array) {
        return $.inArray(value, array) > -1;
    };

    $scope.setSeverity = function (value) {
      // If button is selected a second time,
      // remove selected effect
      if(value == $scope.question.severity) {
        $scope.question.severity = "";
        $scope.question.isAnswered = 0;
        // Decrement answered counts across all layers
        if ($scope.inspection.sections[$scope.insParams.sectionIndex].subsections[$scope.insParams.subsectionIndex].numAnswered ==
           $scope.inspection.sections[$scope.insParams.sectionIndex].subsections[$scope.insParams.subsectionIndex].questions.length) {
          if ($scope.inspection.sections[$scope.insParams.sectionIndex].numAnswered == $scope.inspection.sections[$scope.insParams.sectionIndex].subsections.length) {
            if ($scope.inspection.numAnswered == $scope.inspection.sections.length) {
              $scope.inspection.numAnswered--;
            }
            $scope.inspection.sections[$scope.insParams.sectionIndex].numAnswered--;
          }
          $scope.inspection.sections[$scope.insParams.sectionIndex].subsections[$scope.insParams.subsectionIndex].numAnswered--;
        }
      // First time selecting severity
      } else if ($scope.question.severity == "" || $scope.question.severity == null) {
        $scope.validateSeverityClass = '';
        $scope.question.severity = value;
        $scope.question.isAnswered = 1;
        // Increment answered counts across all layers
        $scope.inspection.sections[$scope.insParams.sectionIndex].subsections[$scope.insParams.subsectionIndex].numAnswered++;
        if ($scope.inspection.sections[$scope.insParams.sectionIndex].subsections[$scope.insParams.subsectionIndex].numAnswered ==
           $scope.inspection.sections[$scope.insParams.sectionIndex].subsections[$scope.insParams.subsectionIndex].questions.length) {
          $scope.inspection.sections[$scope.insParams.sectionIndex].numAnswered++;
          if ($scope.inspection.sections[$scope.insParams.sectionIndex].numAnswered == $scope.inspection.sections[$scope.insParams.sectionIndex].subsections.length) {
            $scope.inspection.numAnswered++;
          }
        }
      // Changed severity from one option to a different one
      } else {
        $scope.question.severity = value;
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

    $scope.stepDownTo = function (index) {
        
        //Put the photo back in the camera_manager
        camera_manager.rapidModePhoto = $scope.rapidModePhoto;

        //Remove the photo from the inspection
        if ($scope.question.photos.length > 0) {
                   var photoIndex = $scope.question.photos.indexOf($scope.rapidModePhoto);
                      if (photoIndex > -1) {
                        $scope.question.photos.splice(photoIndex, 1);
                      }
        }
        
        switch (index) {
            case 0:
                $state.go('inspection_photo', {
                    'insId': $scope.insParams.insId,
                    'sectionIndex': $scope.insParams.sectionIndex,
                    'subsectionIndex': $scope.insParams.subsectionIndex,
                    'questionIndex': $scope.insParams.questionIndex
                });
                break;
            case 1:
            case 2:
            case 3:
                $state.go('inspection_photo_meta', {
                    'insId': $scope.insParams.insId,
                    'sectionIndex': $scope.insParams.sectionIndex,
                    'subsectionIndex': $scope.insParams.subsectionIndex,
                    'questionIndex': $scope.insParams.questionIndex
                });
                break;
            default:
        }
    };

    $scope.stepUp = function (index) {
        if ($scope.question.type == 'checkbox') {
            camera_manager.rapidModePhoto.title = $scope.question.values[index].key;
        } else {
            camera_manager.rapidModePhoto.title = $scope.question.answer;
        }
        
        $state.go('inspection_wizard', {
            'insId': $scope.insParams.insId,
            'sectionIndex': $scope.insParams.sectionIndex,
            'subsectionIndex': $scope.insParams.subsectionIndex,
            'questionIndex': $scope.insParams.questionIndex,
            'photoMode': '1'
        });
    };
    
    function PreviewDialogController($scope, $mdDialog, locals) {
        $scope.photo = locals.photo;
        $scope.cancel = function() {
          $mdDialog.cancel();
        };

    }
    
    $scope.showFullScreen = function(ev, photo) {
      $mdDialog.show({
        controller: PreviewDialogController,
        templateUrl: './dialogs/camera/preview_fullscreen.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true,
        locals: {'photo':photo}
      });
    };
    
});
