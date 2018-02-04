// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('settings', {
      url: "/settings",
      templateUrl: "pages/settings/settings.html",
      controller: "settings"
    });
});

app.controller('settings', function ($scope, $rootScope, $cordovaCapture, $timeout, $q, database, theme_manager, header_manager, filesystem_manager, $state) {
  header_manager.title = "Settings";
  
  $scope.wipeDatabase = function () {
    var sure = confirm("WARNING!!!\n\nThis will clear all inspection data in the app.\n\nAre you sure you want to do this?");

    if (sure) {
      var promises = [];
      $rootScope.loading = true;
      promises.push(theme_manager.clearThemes());
      promises.push(filesystem_manager.deleteInit());
      
      $q.all(promises)
      .then(function(success){
        console.log('Folders deleted successfully');
        console.log(success);
        $scope.reload();
      }, function(error) {
        console.log('Error deleting folders');
        console.log(error);
      });
      $rootScope.loading = false;

      // SQLLite init code
      /*database.initTables()
        .then(function (success) {
          $timeout(function () {
            $scope.reload();
          }, 1000);
        }, function (error) {
          $rootScope.loading = false;
          alert(error);
        });*/
    }
  };
  $scope.logout = function () {
    $rootScope.authenticated = false;
	$rootScope.userId = null;
	localStorage.setItem("userId", "");
	$state.go("login");
  }

  $scope.reload = function () {
    window.location.reload();
  }
});
