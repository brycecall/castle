// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('inspection_photo', {
      url: "/inspection/photo/{insId}/{sectionIndex}/{subsectionIndex}/{questionIndex}",
      templateUrl: "pages/inspection/inspection_camera.html",
      controller: "inspection_photo",
      params: {
        'insId': null,
        'sectionIndex': '0',
        'subsectionIndex': '0',
        'questionIndex': '0'
      }
    })
    .state('inspection_photo_meta', {
      url: "/inspection/photo/{insId}/{sectionIndex}/{subsectionIndex}/{questionIndex}",
      templateUrl: "pages/inspection/inspection_photo.html",
      controller: "inspection_photo",
      params: {
        'insId': null,
        'sectionIndex': '0',
        'subsectionIndex': '0',
        'questionIndex': '0'
      }
    })
    ;
});

app.controller('inspection_photo', function ($rootScope, $scope, $, $state, 
                                              header_manager, camera_manager, 
                                              action_manager, inspection_manager, 
                                              $transition$, shareService) {
  $scope.insId = $transition$.params().insId;
  $scope.sectionIndex = $transition$.params().sectionIndex;
  $scope.subsectionIndex = $transition$.params().subsectionIndex;
  $scope.questionIndex = $transition$.params().questionIndex;
  $scope.camera_manager = camera_manager;    
  $scope.step = 0;
  $scope.selectedChip = {
      'section':{
          title:'section title'
      },
      'subsection': {
          title:'subsection title'
      }
  };
  $scope.message = "Choose a Section";
  
  header_manager.title = "Inspection Editor";
  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction('Back', 'check', function () {
    $rootScope.loading = true;
        $rootScope.loading = false;
        window.history.back();
  });
  header_manager.addAction("Wizard Mode", "shutter_camera", function () {
      $state.go("inspection_wizard", {'insId':$scope.insId});
  }, 'md-raised md-accent');
    
  inspection_manager.mode = "inspection";
  inspection_manager.returnLocation = {
    'name': $state.current.name,
    'params': $transition$.params()
  };
  $scope.chipList = []; 
  $scope.location = 'section';
  $scope.substep = 0;
  $scope.stepUpSubstep = function(index) {
      console.log($scope.location);
        switch($scope.location) {
            case 'section':
                $scope.sectionIndex = index;
                $scope.message = "Choose a Subsection";
                $scope.chipList = $scope.inspection.sections[index].subsections;
                $scope.selectedChip.section.title = $scope.inspection.sections[index].title;
                $scope.location = 'subsection';
                $scope.substep = 1;
                break;
            case 'subsection':
                $scope.subsectionIndex = index;
                $scope.message = "Choose a Question";
                $scope.chipList = $scope.inspection.sections[$scope.sectionIndex].subsections[index].questions;
                $scope.selectedChip.subsection.title = $scope.inspection.sections[$scope.sectionIndex].subsections[index].title;
                $scope.location = 'question';
                $scope.substep = 2;
                break;
            case 'question':
                $scope.questionIndex = index;
                $state.go('inspection_question_step', {
                    'insId': $scope.insId,
                    'sectionIndex': $scope.sectionIndex,
                    'subsectionIndex': $scope.subsectionIndex,
                    'questionIndex': $scope.questionIndex,
                    'photoMode':'1'
                });
                break;
            default:
        }
    };
  $scope.stepDownSubstep = function(location) {
        $scope.location = location;
        switch(location) {
            case 'section':
                $scope.message = "Choose a Section";
                $scope.chipList = $scope.inspection.sections;
                $scope.substep = 0;
                break;
            case 'subsection':
                $scope.message = "Choose a Subsection";
                $scope.chipList = $scope.inspection.sections[$scope.sectionIndex].subsections;
                $scope.substep = 1;
                break;
            default:
        }
  };
    
  $scope.stepDownTo = function(index) {
     if (index < $scope.step) {
        $state.go('inspection_photo', {
            'insId': $scope.insId
        });
     }
  }; 
    
  $scope.camera_manager.cameraCallback.method = function() {
      console.log("good");
      $state.go('inspection_photo_meta', {
         'insId': $scope.insId
      });
  };
    
  $scope.flashModeIcon = 'flash_auto'; 
  $scope.setFlashMode = function(mode, icon) {
      camera_manager.changeFlashMode(mode);
      $scope.flashModeIcon = icon;
  };
    
  $scope.changeZoom = function(zoom) {
      camera_manager.changeZoom(zoom);
  };
    
  (function init() {
    if ($state.current.name == 'inspection_photo') {
        $rootScope.loading = false;
        camera_manager.startCamera();
        $scope.step = 0;
    } else {
      $scope.step = 1;
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
    }
      
  })();
    
});