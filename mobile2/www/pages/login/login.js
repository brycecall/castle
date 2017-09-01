// Register the Page
app.config(function ($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: "pages/login/login.html",
    controller: "login"
  });
});

app.run(function ($rootScope, $location) {
  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    if ($rootScope.authenticated !== true) {
      $location.path("/login");
    }
  })
});

// Define the page controller
app.controller('login', function ($scope, $rootScope, $location, action_manager) {
  console.log('hi');
  $rootScope.authenticated = true; //For DEBUG

  action_manager.addAction("Exit", "close", function () {
    navigator.app.exitApp();
  }, "md-accent");

  action_manager.addAction("Login", "check", function () {
    $rootScope.authenticated = true;
    $location.path("/home");
  });

  action_manager.mode = ACTION_MODES.Action;
})
