// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('themes', {
      url: "/themes",
      templateUrl: "pages/themes/themes.html",
      controller: "themes"
    })
    .state('theme_edit', {
      url: "/themes/edit",
      templateUrl: "pages/themes/theme_edit.html",
      controller: "theme_edit"
    })
    .state('theme_preview', {
      url: "/themes/preview",
      templateUrl: "pages/themes/theme_preview.html",
      controller: "theme_preview"
    });
});

app.controller('themes', function ($scope, $rootScope, $state, theme_manager, header_manager) {
  $scope.themes = [
    {
      "hello": "hi"
    },
    {
      "hello": "hi"
    },
    {
      "hello": "hi"
    },
    {
      "hello": "hi"
    },
    {
      "hello": "hi"
    }
  ];

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
    $state.go("theme_edit", {
      "theme": theme
    });
  };

  $scope.preview = function (theme) {
    console.log(theme);
    $state.go("theme_preview", {
      "theme": theme
    });
  };
});

app.controller('theme_edit', function () {});

app.controller('theme_preview', function () {});
