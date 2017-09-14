var app = angular.module("castle", ['ui.router', 'ngMaterial', 'ngMessages']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/error");
});
