// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('settings', {
      url: "/settings",
      templateUrl: "pages/settings/settings.html",
      controller: "settings"
    });
});

app.controller('settings', function ($scope, $rootScope, $cordovaCapture, $timeout, database, theme_manager, header_manager) {
  header_manager.title = "Settings";
  
  $scope.wipeDatabase = function () {
    var sure = confirm("WARNING!!!\n\nThis will clear all inspection data in the app.\n\nAre you sure you want to do this?");

    if (sure) {
      $rootScope.loading = true;
      theme_manager.clearThemes();
      database.initTables()
        .then(function (success) {
          $timeout(function () {
            $scope.reload();
          }, 1000);
        }, function (error) {
          $rootScope.loading = false;
          alert(error);
        });
    }
  };

  $scope.reload = function () {
    window.location.reload();
  }
});
