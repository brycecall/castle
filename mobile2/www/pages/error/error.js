// Register the Page
app.config(function($routeProvider){
  $routeProvider.when('/error', {
    templateUrl: "pages/error/error.html",
    controller: "error"
  });
});

// Define the page controller
app.controller('error', function($scope, $rootScope) {
  console.log('hi');
})