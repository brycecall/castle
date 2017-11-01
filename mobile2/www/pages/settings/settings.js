// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('settings', {
      url: "/settings",
      templateUrl: "pages/settings/settings.html",
      controller: "settings"
    });
});

app.controller('settings', function ($scope, $rootScope, $cordovaCapture, database, theme_manager) {

  $scope.wipeDatabase = function() {
    var sure = confirm("WARNING!!!\n\nThis will clear all inspection data in the app.\n\nAre you sure you want to do this?");
    
    if (sure) {
      $rootScope.loading = true;
      database.initTables()
      .then (function() {
        $scope.reload();
      }, function (error) {
        theme_manager.clearThemes();
        $rootScope.loading = false;
        alert(error);
      });
    }
  };
  
  $scope.reload = function() {
    window.location.reload();
  }
});
