// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('inspection', {
      url: "/inspection",
      templateUrl: "pages/inspection/inspection.html",
      controller: "inspection"
    })
    .state('inspection_detail', {
      url: "/inspection/detail",
      templateUrl: "pages/inspection/inspection_detail.html",
      controller: "inspection_detail"
    })
    .state('report_preview', {
      url: "/report/preview",
      templateUrl: "pages/inspection/report_preview.html",
      controller: "report_preview"
    })
    .state('report_send', {
      url: "/report/send",
      templateUrl: "pages/inspection/report_send.html",
      controller: "report_send"
    });
});

// Define the page controller
app.controller('inspection', function ($scope, $rootScope, camera_manager) {
  console.log('welcome to inspection');
  $scope.camera_manager = camera_manager;

});

app.controller('inspection_detail', function ($scope, $rootScope) {

});

app.controller('inspection_preview', function ($scope, $rootScope) {

});

app.controller('inspection_send', function ($scope, $rootScope) {

});
