var app = angular.module("castle", ['ui.router', 'ngMaterial']);

app.config(function ($urlRouterProvider) {
     $urlRouterProvider.otherwise("/error");
});
