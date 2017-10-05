// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('themes', {
      url: "/themes",
      templateUrl: "pages/themes/themes.html",
      controller: "themes"
    })
    .state('theme_preview', {
      url: "/themes/preview",
      templateUrl: "pages/themes/theme_preview.html",
      controller: "theme_preview"
    });
});

app.controller('themes', function ($scope, $rootScope, $state, theme_manager, header_manager) {
  $scope.themes = null;

  var theme_promise = theme_manager.update();
  theme_promise.then(function (themes) {
    $scope.themes = [];
    for (var index in themes) {
      var theme = themes[index];
      var theme_promise = theme_manager.getThemeManifest(theme);
      theme_promise.then(function (data) {
        $scope.themes.push(data);
      })
    }
  });

  header_manager.title = "Themes";

  header_manager.mode = HEADER_MODES.Action;
  header_manager.setAction("Back", "back", function () {
    $state.go('home');
  });

  $scope.sort = "";
  $scope.sort_filters = [
    "Name",
    "Type",
    "Date"
  ];

  $scope.edit = function (theme) {
    console.log(theme);
    theme_manager.current = theme;
    $state.go("theme_edit");
  };

  $scope.preview = function (theme) {
    theme_manager.current = theme;
    $state.go("theme_preview");
  };
});

// TODO: we may want to not use this at all...
app.controller('theme_edit', function ($scope, $rootScope, theme_manager) {
  $scope.theme = theme_manager.current;
  $scope.update = function () {
    theme_manager.saveTheme($scope.theme);
  }
});

app.controller('theme_preview', function ($scope, $rootScope, theme_manager) {
  var preview_frame = document.querySelector("#preview");
  var preview_url = "../../../" + theme_manager.current.preview;

  preview_frame.addEventListener('load', function () {
    setTimeout(function () {
      preview_frame.contentWindow.PDFViewerApplication.open(preview_url);
    }, 500);
  })

});
