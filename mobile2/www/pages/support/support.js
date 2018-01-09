// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('support', {
      url: "/support",
      templateUrl: "pages/support/support.html",
      controller: "support"
    });
});

app.controller('support', function ($scope, $rootScope, header_manager) {
  header_manager.title = "Support";
});
