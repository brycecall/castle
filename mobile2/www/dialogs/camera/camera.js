// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('camera', {
      url: "/camera",
      templateUrl: "dialogs/camera/camera.html",
      controller: "camera"
    });
});

// Define the page controller
app.controller('camera', function ($scope, camera_manager) {
    $scope.camera_manager = camera_manager;
});
