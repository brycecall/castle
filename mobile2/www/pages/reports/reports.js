// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('reports', {
      url: "/reports",
      templateUrl: "pages/reports/reports.html",
      controller: "reports"
    })
    .state('reports_detail', {
      url: "/reports/detail",
      templateUrl: "pages/reports/reports_detail.html",
      controller: "reports_detail"
    })
    .state('reports_preview', {
      url: "/reports/preview",
      templateUrl: "pages/reports/reports_preview.html",
      controller: "reports_preview"
    })
    .state('reports_send', {
      url: "/reports/send",
      templateUrl: "pages/reports/reports_send.html",
      controller: "reports_send"
    });
});

// Define the page controller
app.controller('reports', function ($scope, $rootScope, camera_manager) {
  console.log('welcome to reports');
  $scope.camera_manager = camera_manager;

});

app.controller('reports_detail', function ($scope, $rootScope) {

});

app.controller('reports_preview', function ($scope, $rootScope) {
  var doc = new jsPDF;
  doc.fromHTML(document.querySelector('body').innerHTML, 15, 15);
  $scope.pdf = doc.output('bloburi');
  console.log($scope.pdf);
});

app.controller('reports_send', function ($scope, $rootScope) {

});
