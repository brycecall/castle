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

app.controller('inspection_wizard', function ($rootScope, $scope, $, $state, header_manager, camera_manager, action_manager, inspection_manager, $transition$, shareService, $timeout, $mdDialog) {
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
            $state.go("inspection_wizard", {
                'insId': $scope.insParams.insId,
                'photoMode': null
            });
        }, 'md-raised md-accent');
        
        // Footer Actions
        if ($scope.currentStateName == 'inspection_wizard') {
            action_manager.addAction("Photo", "shutter_camera", function () {
                $scope.addPhotos(0, 0);
            }, 'md-raised md-accent');
            action_manager.addAction("Done", "check", function () {
                $state.go("inspection_photo", {
                    'insId': $scope.insParams.insId
                });
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
    $scope.navChange = function (loc, index) {
        switch (loc) {
            case "section":
                if ($scope.insParams.sectionIndex != index) {
                    $scope.insParams.subsectionIndex = 0;
                    $scope.insParams.questionIndex = 0;
                }
                $scope.insParams.sectionIndex = index;
                break;
            case "subsection":
                if ($scope.insParams.subsectionIndex != index) {
                    $scope.insParams.questionIndex = 0;
                }
                $scope.insParams.subsectionIndex = index;
                break;
            case "question":
                $scope.insParams.questionIndex = index;
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

    $scope.commentBox = "";

    inspection_manager.getInspection($scope.insParams.insId)
        .then(
            function (data) {
                $rootScope.loading = false;
                $scope.inspection = data.value;
                $scope.questionCount = $scope.inspection.sections[$scope.insParams.sectionIndex]
                    .subsections[$scope.insParams.subsectionIndex]
                    .questions.length;
                $scope.question = $scope.inspection.sections[$scope.insParams.sectionIndex]
                    .subsections[$scope.insParams.subsectionIndex]
                    .questions[$scope.insParams.questionIndex];
                attachPhotos();
                $scope.rapidModePhoto.isRapid = true;
                if ($scope.question.photos.length >0) {
                       var photoIndex = $scope.question.photos.indexOf($scope.rapidModePhoto);
                          if (photoIndex > -1) {
                            $scope.question.photos.splice(photoIndex, 1);
                          }
                }
                $scope.question.photos.push($scope.rapidModePhoto);
                
                
                //        $scope.$watch('otherValue.value', function (newVal, oldVal) {
                //          var list = $scope.question.answers;
                //          var index = $scope.question.answers.indexOf(oldVal);
                //          if (index > -1) {
                //            $scope.question.answers.splice(index, 1);
                //          }
                //          if (newVal) {
                //            $scope.question.answers.push(newVal);
                //          }
                //        });
                //
                //        $scope.$watch('otherValue.singleSelect', function (newVal, oldVal) {
                //          if (newVal) {
                //            $scope.question.answer = newVal;
                //          }
                //        });
                //
                //        $scope.$watch('question.answer', function (newVal, oldval) {
                //          if (newVal && ($scope.question.type == 'text' || $scope.question.type == 'textarea')) {
                //            $scope.question.values[0].key = newVal;
                //          }
                //        });



            },
            function (data) {
                $rootScope.loading = false;
                console.log("Error... no question exists in the database");
            }
        );

    var navigateQuestions = function (forward) {
        if ($scope.questionCount !== -1 && $scope.questionCount > 1) {
            var newQuestionIndex = $scope.insParams.questionIndex;
            if (forward) {
                if ($scope.insParams.questionIndex >= $scope.questionCount - 1) {
                    newQuestionIndex = 0;
                } else {
                    newQuestionIndex++;
                }
            } else {
                if ($scope.insParams.questionIndex <= 0) {
                    newQuestionIndex = $scope.questionCount - 1;
                } else {
                    newQuestionIndex--;
                }
            }
            $state.go('inspection_wizard', {
                'insId': $scope.insParams.insId,
                'sectionIndex': $scope.insParams.sectionIndex,
                'subsectionIndex': $scope.insParams.subsectionIndex,
                'questionIndex': newQuestionIndex
            });
        }
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

    $scope.toggle = function (answer) {

        if (answer.checked == undefined) {
            answer.checked = true;
        } else {
            answer.checked = !answer.checked;
        }
        //     // String replace Comment and remove associated autoComment
        //     $scope.commentBox = $scope.commentBox.replace(item.autoComment, '');
        //    
        //     // Push autoComment from selected answer
        //     if(item.autoComment !== null && item.autoComment !== undefined && $scope.commentBox.indexOf(item.autoComment) < 0) {
        //       $scope.commentBox += item.autoComment;
        //     }

    };

    $scope.toggleRadio = function (answer) {
        if (answer.autoComment !== null && answer.autoComment !== undefined && $scope.commentBox.indexOf(answer.autoComment) < 0) {
            $scope.commentBox = answer.autoComment;
        }
    }

    $scope.exists = function (value, array) {
        return $.inArray(value, array) > -1;
    };

    $scope.setSeverity = function (value) {
      // If button is selected a second time,
      // remove selected effect
      if(value == $scope.question.severity) {
        $scope.question.severity = "";
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
