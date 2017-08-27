var app = angular.module("castle", ['ngRoute', 'ngMaterial']);

app.config(function ($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: "/error"
  });
});
