var app = angular.module("castle", ['ngCordova', 'ui.router', 'ngMaterial', 'ngMessages', 'ngSha', 'ui.sortable']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/error");
});

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('pink')
  $mdThemingProvider.theme('templateTheme')
    .primaryPalette('blue')
    .accentPalette('pink');
});

// Save the previous state
app.run(function ($transitions, $rootScope, $state) {
  $transitions.onStart({}, function (event) {
    event.router.globals.current.params = event.router.globals.current.params;
    $state.previous = event.router.globals.current;
  });
});

// Init the loading value
app.run(function ($rootScope, $timeout) {
  $rootScope.loading = false;
  var handle = null;
  $rootScope.$watch('loading', function(oldValue, newValue) {
    if (handle) {
      $timeout.cancel(handle);
    }
    
    if (newValue) {
      // Auto-timeout after 30 secs
      handle = $timeout(function() {
        $rootScope.loading = false;
      }, (15 * 1000));
    }
  })
})

// Control to set application in DEBUG mode
app.run(function ($rootScope, database, theme_manager) {
  window.debug = function (state) {
    if (state) {
      localStorage.setItem("debug", "true");
      //database.initTables();
    } else {
      localStorage.removeItem("debug");
    }
    $rootScope.debug = state;
  }
  $rootScope.debug = (localStorage.getItem("debug") == "true" ? true : false);
  
  window.reset = function() {
    database.initTables();
    theme_manager.clearThemes();
  }
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
app.run(function (database, $timeout, $interval, $rootScope) {
  var database_ready = (localStorage.getItem("database_ready") == "true" ? true : false);
  if (database_ready) {
    console.log("Database has already been initialized, skipping...");
  } else {
    $rootScope.loading = true;
    
    var handle = $interval(function () {
      if (window['sqlitePlugin'] != undefined) {
        database.initTables();
        localStorage.setItem("database_ready", "true");
        $interval.cancel(handle);
        $rootScope.loading = false;
      }
    }, 5000);

    $timeout(function () {
      $interval.cancel(handle);
      console.warn("Database could not be initialized");
      $rootScope.loading = false;
    }, 10000);
  }
});

app.run(function ($sha) {
  $sha.setConfig();
});
