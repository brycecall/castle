var app = angular.module("castle", ['ui.router', 'ngMaterial', 'ngMessages', 'ngSha']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/error");
});


app.run(function () {
  // Control to set application in DEBUG mode
  window.debug = function (state) {
    if (state) {
      localStorage.setItem("debug", "true");
    } else {
      localStorage.removeItem("debug");
    }
  }
});
