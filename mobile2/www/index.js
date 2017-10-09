var app = angular.module("castle", ['ngCordova', 'ui.router', 'ngMaterial', 'ngMessages', 'ngSha']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/error");
});

// Control to set application in DEBUG mode
app.run(function ($rootScope) {
  window.debug = function (state) {
    if (state) {
      localStorage.setItem("debug", "true");
    } else {
      localStorage.removeItem("debug");
    }
    $rootScope.debug = state;
  }
  $rootScope.debug = (localStorage.getItem("debug") == "true" ? true : false);
});

app.run(function (theme_manager) {
  document.addEventListener('deviceready', theme_manager.init);
});

// Detect if the app is running on a Low Res Screen (we need to scale for usability)
app.run(function ($rootScope) {
  $rootScope.enlarge = false;
  if (window.innerWidth < 652 && window.innerWidth > 425) {
    $rootScope.enlarge = true;
  }
})