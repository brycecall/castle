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
      database.dropAllTables().then(function (result) {
        console.log(result.message)
      }, function (error) {
        console.error(error.message);
      });
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

// Initialize the database if it hasn't been yet
app.run(function (database, $timeout, $interval) {
  var database_ready = (localStorage.getItem("database_ready") == "true" ? true : false);
  if (database_ready) {
    console.log("Database has already been initialized, skipping...");
  } else {
    var handle = $interval(function () {
      if (window['sqlitePlugin'] != undefined) {
        database.initTables();
        localStorage.setItem("database_ready", "true");
        $interval.cancel(handle);
      }
    }, 1000);

    $timeout(function () {
      $interval.cancel(handle);
    }, 5000);
  }
});

app.run(function ($sha) {
  $sha.setConfig();
});
