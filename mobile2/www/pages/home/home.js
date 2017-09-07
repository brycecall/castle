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
app.controller('home', function ($scope, $rootScope) {
  console.log('Welcome Home');
})
