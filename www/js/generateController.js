app.controller('generateController', function ($rootScope, $scope, $mdUtil, $mdDialog, $mdMedia, inspectionService) {

    $scope.report = inspectionService.currentReport;
  //  $scope.report = reportOne;
    $scope.currentPage = inspectionService.currentPage;
    $scope.currentSection = inspectionService.currentSection;
    $scope.rapidRemarks = inspectionService.rapidRemarks;
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
        $scope.currentSection = $scope.findInReport("Field Notes", $scope.report.sections);
        $scope.currentPage = $scope.findInReport("Client Info", $scope.currentSection.pages);
        $scope.clientInfo = $scope.findInReport("Clientinfo", $scope.currentPage.items);
        $scope.reportId = $scope.findInReport("Report ID", $scope.currentPage.items);
        $scope.reportDate = $scope.findInReport("Report Date", $scope.currentPage.items);
    };
    $scope.initialzeFieldNotesVars();


    $scope.getSummaryItems = function() {
        for (var sectionKey in $scope.report.sections) {
            var section = $scope.report.sections[sectionKey];
            for (var pageKey in section.pages) {
                var page = section.pages[pageKey];
                for (var itemKey in page.items) {
                    var item = page.items[itemKey];
                    if (item.type == 'radio' || item.type == 'checkbox') {
                        for (var subitemKey in item.content) {
                            var subitem = item.content[subitemKey];
                            if (subitem.rrTitle != null && subitem.rrVal != null && subitem.c == true) {
                                $scope.rapidRemarks[subitem.rrTitle].showValue = true;
                                $scope.rapidRemarks[subitem.rrTitle].content[subitem.rrVal].showValue = true;
                            }
                        }
                    }
                }
            }
        }
       // console.log($scope.rapidRemarks);
    };
    $scope.getSummaryItems();

    $scope.getAllItemImages = function(ItemContent) {
        var allImages = [];
        for (var contentkey in ItemContent) {
             var imageItem = ItemContent[contentkey];
             for (var imageKey in imageItem.i) {
                var imageAndTitle = {"i":imageItem.i[imageKey], "title":imageItem.title};
                allImages.push(imageAndTitle);
             }
        }
        return allImages;
    };


 });






















