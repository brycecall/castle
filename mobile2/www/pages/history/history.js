// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('history', {
      url: "/history",
      templateUrl: "pages/history/history.html",
      controller: "history"
    });
});

app.controller('history', function ($scope, $rootScope, $cordovaFile) {
  $scope.reports = [];
  $scope.message = null;
  $rootScope.loading = true;
  
  var file_promise = $cordovaFile.checkDir(cordova.file.externalDataDirectory, ".");
  file_promise.then(function (result) {
    resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (fileSystem) {
        var reader = fileSystem.createReader();
        reader.readEntries(success, error);
      }, error);
    
    var success = function (entries) {
      for (var i in entries) {
        if (entries[i].name.indexOf(".pdf") > -1) {
          $scope.reports.push(new ReportFile(entries[i].nativeURL));
        }
      }
    };
      
    var error = function (error) {
      $scope.message = "No reports found.";
    }
    
    $rootScope.loading = false;
  }, function(error) {
    $scope.message = "Could not load history...";
    $rootScope.loading = false;
  });
  
  var ReportFile = function(filePath) {
    console.log(filePath);
  };
  
});
