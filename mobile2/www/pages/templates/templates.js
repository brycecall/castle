// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('templates', {
      url: "/templates",
      templateUrl: "pages/templates/templates.html",
      controller: "templates"
    });
});

app.controller('templates', function ($scope, $rootScope) {

});
