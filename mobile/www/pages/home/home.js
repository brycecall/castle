// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "pages/home/home.html",
      controller: 'home'
    });
});

// Define the page controller
app.controller('home', function ($scope, $rootScope, header_manager, cloud_connector) {
  header_manager.mode = HEADER_MODES.Banner;
  header_manager.classname = "md-tall";
  console.log('Welcome Home');
    
  // Pop up EULA dialog if it is set
  if ($rootScope.needsEula) {
    $scope.showEula = true;    
  }
    
  $scope.acceptEula = function () {
    // Make call to service
    
  }    
    
  $scope.declineEula = function() {
    navigator.app.exitApp();
  };
})
