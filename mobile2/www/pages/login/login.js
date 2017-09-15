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
    if ($rootScope.authenticated !== true && trans.$to().name !== 'login') {
      // User isn't authenticated. Redirect to a new Target State
      var debug = localStorage.getItem("debug");
      if (debug !== "true") {
        return trans.router.stateService.target('login');
      }
    } else if ($rootScope.authenticated == true && trans.$to().name == 'login') {
      navigator.app.exitApp();
    }
  });
});

// Define the page controller
app.controller('login', function ($scope, $rootScope, $state, action_manager, header_manager, database) {
  header_manager.disable();

  $scope.user = {};
  $scope.new_user = {};

  action_manager.addAction("Exit", "close", function () {
    $scope.user = {};
    $scope.new_user = {};
    document.activeElement.blur();
  }, "md-accent");

  action_manager.addAction("Login", "check", function () {
    database.initTables();

    if ($scope.new_user.username && $scope.new_user.password && $scope.new_user.email) {
      database.createUser($scope.new_user.username, $scope.new_user.password, $scope.new_user.email);
    } else {
      var valid = database.validCredentials($scope.user.username, $scope.user.password);
      valid.then(
        //success - valid user
        function (promise) {
          console.log(promise.message);
          $rootScope.authenticated = true;
          $state.go("home");
        },
        //fail - invalid user
        function (promise) {
          console.log(promise.message);
        }
      );
    }

  });

  action_manager.mode = ACTION_MODES.Action;
});
