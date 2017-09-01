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
app.controller('login', function ($scope, $rootScope, $location, action, database) {
  console.log('hi');
    
  // Execute db initialization to insert dummy data user info
  document.addEventListener('deviceready', function() {
      database.initDb();
  });

  action.addAction("accept", "check", function () {
    if(database.validCredentials($scope.user.name, $scope.user.pass)) {
      $rootScope.authenticated = true;
      $location.path("/home");   
    } else {
      console.log('Access Denied!!!!!!!!!!!!!!!!');
    }
  });
    
  action.mode = ACTION_MODES.Confirm;
})
