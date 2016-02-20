app.controller('generateController', function ($rootScope, $scope, $mdUtil, $mdDialog, $mdMedia, inspectionService) {

    $scope.report = inspectionService.currentReport;
   // $scope.report = reportOne;
    $scope.currentPage = inspectionService.currentPage;
    $scope.currentSection = inspectionService.currentSection;
    $scope.clientInfo = null;
    $scope.reportId = null;
    $scope.reportDate = null;

    $scope.findInReport = function(titleToFind, listToSearch) {
        for (var listKey in listToSearch) {
            var listItem = listToSearch[listKey];
            if (listItem.title == titleToFind) {
                return listItem;
            }
        }
        return null;
    };

    $scope.initialzeFieldNotesVars = function() {
        var section = $scope.findInReport("Field Notes", $scope.report.sections);
        var page = $scope.findInReport("Client Info", section.pages);
        $scope.clientinfo = $scope.findInReport("Clientinfo", page.items);
        $scope.reportId = $scope.findInReport("Report ID", page.items);
        $scope.reportDate = $scope.findInReport("Report Date", page.items);

    };
    $scope.initialzeFieldNotesVars();


    $scope.getSummaryItems = function(item) {
        if (item.type == 'radio') {
                return item.content;
        }
    };



 });






















