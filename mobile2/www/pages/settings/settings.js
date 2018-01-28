// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('settings', {
      url: "/settings",
      templateUrl: "pages/settings/settings.html",
      controller: "settings"
    });
});

app.controller('settings', function ($scope, $rootScope, $cordovaCapture, $timeout, database, theme_manager, header_manager, $cordovaFile) {
  header_manager.title = "Settings";
  
  $scope.wipeDatabase = function () {
    var sure = confirm("WARNING!!!\n\nThis will clear all inspection data in the app.\n\nAre you sure you want to do this?");

    if (sure) {
      $rootScope.loading = true;
      theme_manager.clearThemes();
        
      // Replace template and inspection folders with empty ones
      $cordovaFile.createDir(cordova.file.dataDirectory, "templates", true)
        .then(function(success) {
        console.log('Templates createDir Success');
        console.log(success);
      }, function(error) {
        console.log('Templates createDir Error: ' + error.message);  
      });
      $cordovaFile.createDir(cordova.file.dataDirectory, "inspections", true)
        .then(function(success) {
        console.log('Inspections createDir success');
        console.log(success);
      }, function(error) {
        console.log('Inspections createDir Error: ' + error.message);  
      });
      // Add default template to template directory
      $cordovaFile.writeFile(cordova.file.dataDirectory + "templates/", "default_template.js", JSON.stringify(defaultTemplate), true)
        .then(function(success) {
        console.log('Write Default Template success');
        console.log(success);
      }, function(error) {
        console.log('Write Default Template error: ' + error.message);  
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

  $scope.reload = function () {
    window.location.reload();
  }
});
