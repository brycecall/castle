app.controller('templateController', function ($scope, inspectionService, $state) {
    $scope.inspectionService = inspectionService;
    $scope.reportTemplates = [];
    inspectionService.currentPage.title = "Templates";

    $scope.defaultReport = reportOne;
    $scope.switchReport = function(sReport) {
        inspectionService.currentReport = sReport;
        $state.go("create");
    };

    $scope.reverse = false;
    $scope.orderAttribute = 'date';
    $scope.orderAttributeOptions = ['date', 'title'];



});
