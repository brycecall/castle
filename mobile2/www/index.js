var app = angular.module("castle", ['ngCordova', 'ui.router', 'ngMaterial', 'ngMessages', 'ngSha', 'ui.sortable']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/error");
});

app.config(function ($mdThemingProvider) {
  $mdThemingProvider.definePalette('castlePallete', {
  '50': 'e1e6e9',
  '100': 'b5c1c8',
  '200': '8397a4',
  '300': '516d80',
  '400': '2c4e64',
  '500': '072f49',
  '600': '062a42',
  '700': '052339',
  '800': '041d31',
  '900': '021221',
  'A100': '5d9eff',
  'A200': '2a7fff',
  'A400': '0063f6',
  'A700': '0058dd',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': [
    '50',
    '100',
    '200',
    'A100'
  ],
  'contrastLightColors': [
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'A200',
    'A400',
    'A700'
  ]
});
    
  $mdThemingProvider.definePalette('castlePalleteAccent', {
  '50': 'f5f6e6',
  '100': 'e7e9bf',
  '200': 'd7da95',
  '300': 'c7cb6b',
  '400': 'bbbf4b',
  '500': 'afb42b',
  '600': 'a8ad26',
  '700': '9fa420',
  '800': '969c1a',
  '900': '868c10',
  'A100': 'e7e9bf',
  'A200': 'afb42b',
  'A400': 'a8ad26',
  'A700': '9fa420',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    'A100',
    'A200',
    'A400',
    'A700'
  ],
  'contrastLightColors': [
    '900'
  ]
});
    
  $mdThemingProvider.theme('default')
    .primaryPalette('castlePallete')
    .accentPalette('castlePalleteAccent');

    
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

// Set loading screen in between page transitions
app.run(function ($transitions, $rootScope) {
  $transitions.onStart({}, function (event) {
    $rootScope.loading = true;
  })

  $transitions.onSuccess({}, function (event) {
    $rootScope.loading = false;
  });
});

// Init the loading value
app.run(function ($rootScope, $timeout, header_manager) {
  $rootScope.loading = false;
  var handle = null;
  $rootScope.$watch('loading', function (oldValue, newValue) {
    if (handle) {
      $timeout.cancel(handle);
    }

    if (newValue) {
      // Auto-timeout after 15 secs
      handle = $timeout(function () {
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

  window.reset = function () {
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
