// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('history', {
      url: "/history",
      templateUrl: "pages/history/history.html",
      controller: "history"
    });
});

app.controller('history', function ($scope, $rootScope) {

});
