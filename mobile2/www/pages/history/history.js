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
  $scope.reports = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
  ];
});
