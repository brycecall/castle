// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state("login", {
      url: "/login",
    templateUrl: "pages/login/login.html",
    controller: "login"
  });
});

app.run(function ($transitions, $rootScope) {
  $transitions.onStart({}, function (trans) {
    //TODO: use real authentication
    if ($rootScope.authenticated !== true && trans.$to().name !== 'login') {
      // User isn't authenticated. Redirect to a new Target State
      return trans.router.stateService.target('login');
    }
});
});

// Define the page controller
app.controller('login', function ($scope, $rootScope, $state, action_manager, database) {
  console.log('hi');
    
  $scope.user = {};
  $scope.new_user = {};

  action_manager.addAction("Exit", "close", function () {
    $scope.user = {};
    $scope.new_user = {};
    document.activeElement.blur();
  }, "md-accent");

  action_manager.addAction("Login", "check", function () {
    database.validCredentials($scope.user.username, $scope.user.password);
    //  $rootScope.authenticated = true;
    //  $state.go("home");
    //} else {
    //  console.log('Access Denied!!!!!!!!!!!!!!!!');
    //}
  });
    
  action_manager.addAction("Register", "check", function() {
    database.createUser($scope.new_user.username, $scope.new_user.password, $scope.new_user.email); 
  });

  action_manager.mode = ACTION_MODES.Action;
});
