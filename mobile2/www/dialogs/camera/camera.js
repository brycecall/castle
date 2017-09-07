// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('camera', {
      url: "/camera",
      templateUrl: "dialogs/camera/camera.html",
      controller: "camera",
      onexit: function() {
        camera_manager.stopCamera();
      }
    });
});

// Define the page controller
app.controller('camera', function ($scope, camera_manager, action_manager) {
  $scope.camera_manager = camera_manager;
  camera_manager.startCamera();

//  action_manager.addAction("Capture", "camera", function () {
//    camera_manager.takePicture();
//  })
    
});
