// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('history', {
      url: "/history",
      templateUrl: "pages/history/history.html",
      controller: "history"
    })
  .state('history_preview', {
      url: "/history/preview",
      templateUrl: "pages/history/history_preview.html",
      controller: "history_preview"
    });
});

app.controller('history', function ($scope, $rootScope, $state, $cordovaFile, header_manager) {
  header_manager.title = "Report History";
  
  $scope.reports = [];
  $scope.message = 'Gathering your reports...';
  $rootScope.loading = true;
  
  var file_promise = $cordovaFile.checkDir(cordova.file.externalDataDirectory, ".");
  file_promise.then(function (result) {
    resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (fileSystem) {
        var reader = fileSystem.createReader();
        reader.readEntries(success, error);
      }, error);
    
    var success = function (entries) {
      if (entries.length == 0) {
        $scope.message = "No Reports Found";
      } else {
        $scope.message = "";
      }
      
      for (var i in entries) {
        if (entries[i].name.indexOf(".pdf") > -1) {
          $scope.reports.push(entries[i]);
        }
      }
      $rootScope.loading = false;
    };
      
    var error = function (error) {
      $scope.message = "No Reports Found";
      $rootScope.loading = false;
    }
  }, function(error) {
    $scope.message = "ERROR: Could not access filesystem to load history.";
    $rootScope.loading = false;
  });
  
  $scope.send = function(reportURL) {
    if (window['cordova'] !== undefined ) {
      cordova.plugins.email.open({
        body: "Here is your Home Inspection Report from Castle",
        subject: "Home Inspection Report",
        attachments: reportURL
      })
    }
  };
  
  $scope.preview = function(reportURL) {
    $rootScope.buffer = reportURL;
    $state.go('history_preview');
  };
  
});

app.controller('history_preview', function($scope, $rootScope) {
  var preview_frame = document.querySelector("#preview");

  preview_frame.addEventListener('load', function () {
    setTimeout(function () {
      preview_frame.contentWindow.PDFViewerApplication.open($rootScope.buffer);
      $rootScope.buffer = null;
    }, 500);
  })
})