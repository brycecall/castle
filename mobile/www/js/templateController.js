app.controller('templateController', function ($scope, castleService, $state) {
    $scope.castleService = castleService;
    $scope.reportTemplates = [];
    castleService.currentPage.title = "Templates";

    $scope.defaultReport = reportOne;
    $scope.switchReport = function(sReport) {
        castleService.currentReport = sReport;
        $state.go("create");
    };

    $scope.reverse = false;
    $scope.orderAttribute = 'date';
    $scope.orderAttributeOptions = ['date', 'title'];



});
