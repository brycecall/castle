// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('templates', {
      url: "/templates",
      templateUrl: "pages/templates/templates.html",
      controller: "templates"
    });
});

app.controller('templates', function ($scope, $rootScope, header_manager) {
  header_manager.title = "Templates";
  $scope.templates = [
    {
      "hello": "hi"
    },
    {
      "hello": "hi"
    },
    {
      "hello": "hi"
    },
    {
      "hello": "hi"
    },
    {
      "hello": "hi"
    }
  ];

  $scope.reports = [
    1, 2, 3, 4
  ]
});
