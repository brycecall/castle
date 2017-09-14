// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('themes', {
      url: "/themes",
      templateUrl: "pages/themes/themes.html",
      controller: "themes"
    });
});

app.controller('themes', function ($scope, $rootScope) {

});
