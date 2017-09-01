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
app.controller('home', function ($scope, $rootScope, $state, action_manager) {
  console.log('Welcome Home');

  action_manager.addAction("New Appointment", "watch_later", function () {
    console.log("NEW APT");
  });
  action_manager.addAction("Create Report", "mode_edit", function () {
    console.log("CREATE");
    $state.go("reports");
  });
  action_manager.addAction("Send a Report", "send", function () {
    console.log("CREATE");
  });
})
