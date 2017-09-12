// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('camera', {
      url: "/camera",
      templateUrl: "dialogs/camera/camera.html",
      controller: "camera"
    })
    .state('camera_preview', {
      url: "/camera_preview",
      templateUrl: "dialogs/camera/camera_preview.html",
      controller: "camera_preview"
    })
    ;
});

app.run(function ($transitions, camera_manager) {
  $transitions.onExit({}, function (trans) {
      if (trans.$from().name == 'camera') {
        camera_manager.stopCamera();
      }
  });
});


// Define the page controller
app.controller('camera', function ($scope, camera_manager) {
  $scope.camera_manager = camera_manager;
  camera_manager.startCamera();
    
});


// Define the page controller
app.controller('camera_preview', function ($scope, $mdToast, $mdDialog) {
    var private = {};
    private.deletedPhotoIndexes = [];
    
    $scope.photos = [
        {link:'../../assets/Castle-Logo-Main.png'},
        {link:'../../assets/Castle-Logo-Main.png'},
        {link:'../../assets/Castle-Logo-Main.png'},
        {link:'../../assets/Castle-Logo-Main.png'},
        {link:'../../assets/Castle-Logo-Main.png'}
    ];
    
    

    private.showActionToast = function() {
        var pinTo = 'bottom';
        var toast = $mdToast.simple()
          .textContent('Photo Deleted')
          .action('UNDO')
          .highlightAction(true)
          .highlightClass('md-accent')
          .position(pinTo);

        $mdToast.show(toast).then(function(response) {
          if ( response == 'ok' ) {
             var index = private.deletedPhotoIndexes.pop();
             $scope.photos[index].deleted = false;
          }
        });
    };

    $scope.remove = function(list, index) {
        $scope.photos[index].deleted = true;
        private.deletedPhotoIndexes.push(index);
        private.showActionToast();
    };
 
    function preview_fullscreen($scope, $mdDialog, locals) {
      $scope.photo = locals.photo;
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    }
    
    $scope.showFullScreen = function(ev, photo) {
      $mdDialog.show({
        controller: preview_fullscreen,
        templateUrl: './dialogs/camera/preview_fullscreen.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true,
        locals: {'photo':photo}
      });
    };
    
});







