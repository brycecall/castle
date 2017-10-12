var app = angular.module("castle", ['ngCordova', 'ui.router', 'ngMaterial', 'ngMessages', 'ngSha', 'ui.sortable']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/error");
});

// Control to set application in DEBUG mode
app.run(function ($rootScope, database) {
  window.debug = function (state) {
    if (state) {
      localStorage.setItem("debug", "true");
      database.initTables();
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

// Detect if the app is running on small high Res Screen (we need to scale for usability)
app.run(function ($rootScope) {
  // TODO: figure out how to actually do this...
  /*$rootScope.enlarge = false;
  if (window.innerWidth < 652 && window.innerWidth > 425) {
    $rootScope.enlarge = true;
  }*/
})

app.run(function (database) {
  var database_initialized = (localStorage.getItem("database_init") == "true" ? true : false);
  if (!database_initialized) {
    var promise = database.initTables();
    promise.then(function (result) {
      localStorage.setItem("database_init", "true");
    });
  }
})

app.run(function ($sha) {
  $sha.setConfig();
});
