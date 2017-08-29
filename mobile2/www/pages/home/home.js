// Register the Page
app.config(function ($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: "pages/home/home.html",
    controller: "home"
  });
});

// Define the page controller
app.controller('home', function ($scope, $rootScope, action, $location) {
  console.log('Welcome Home');

  action.addAction("New Appointment", "watch_later", function () {
    console.log("NEW APT");
  });
  action.addAction("Create Report", "mode_edit", function () {
    console.log("CREATE");
    $location.path("/reports")
  });
  action.addAction("Send a Report", "send", function () {
    console.log("CREATE");
  });
})
