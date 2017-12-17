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
        'questionIndex': '0',
        'startIndex':null
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
        'questionIndex': '0',
        'startIndex':null
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
  var startIndex = $transition$.params().startIndex;
  $scope.step = 0;
  $scope.message = "Choose a Section";
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
  $scope.stepUp = function(index) {
        $scope.step++;
        switch($scope.step) {
            case 0:
                break 
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
                $scope.questionIndex = index;
                $state.go('inspection_wizard', {
                    'insId': $scope.insId,
                    'sectionIndex': $scope.sectionIndex,
                    'subsectionIndex': $scope.subsectionIndex,
                    'questionIndex': $scope.questionIndex,
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
  inspection_manager.getInspection($scope.insId)
    .then(
      function (data) {
        $rootScope.loading = false;
        $scope.inspection = data.value;
         if (startIndex != null) {
            startIndex = parseInt(startIndex);
            $scope.step = startIndex + 1;
            $scope.stepDownTo(startIndex);
         } else {
            $scope.chipList = $scope.inspection.sections;
         }
      },
      function (data) {
        $rootScope.loading = false;
        console.log("Error... no question exists in the database");
      }
    );
  })();
    
});