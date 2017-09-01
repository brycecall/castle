// Register the Page
app.config(function($routeProvider) {
  $routeProvider.when('/camera', {
    templateUrl: "dialogs/camera/camera.html",
    controller: "camera"
  });
});


// Define the page controller
app.controller('camera', function ($scope, $location, camera_manager) {
    $scope.camera_manager = camera_manager;
    
});
