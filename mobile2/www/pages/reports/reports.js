// Register the Page
app.config(function($routeProvider){
  $routeProvider.when('/reports', {
    templateUrl: "pages/reports/reports.html",
    controller: "reports"
  });
  
  $routeProvider.when('/reports/detail', {
    templateUrl: "pages/reports/reports_detail.html",
    controller: "reports_detail"
  });
  
  $routeProvider.when('/reports/preview', {
    templateUrl: "pages/reports/reports_preview.html",
    controller: "reports_preview"
  });
});

// Define the page controller
app.controller('reports', function($scope, $rootScope, camera) {
    console.log('welcome to reports');
    $scope.camera = camera;

});

app.controller('reports_detail', function($scope, $rootScope) {
  
});

app.controller('reports_preview', function($scope, $rootScope) {
  
});