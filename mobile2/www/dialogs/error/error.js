// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('error', {
      url: "/error",
      templateUrl: "dialogs/error/error.html",
      controller: "error"
    });
});


// Define the page controller
app.controller('error', function ($scope, $rootScope) {
  console.log('hi');
})
