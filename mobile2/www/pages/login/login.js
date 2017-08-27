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
app.controller('login', function ($scope, $rootScope, $location, action) {
  console.log('hi');
  $rootScope.authenticated = true;  //For DEBUG

  action.addAction("accept", "check", function () {
    $rootScope.authenticated = true;
    $location.path("/home");
  });
  action.mode = ACTION_MODES.Confirm;
})
