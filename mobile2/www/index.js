var app = angular.module("castle", ['ui.router', 'ngMaterial']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/error");
});
