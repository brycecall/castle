app.controller('generateController', function ($rootScope, $scope, $mdUtil, $mdDialog, $mdMedia, castleService) {

    $scope.report = castleService.currentReport.data;
    $scope.job = $scope.report.job;
    $scope.currentPage = castleService.currentPage;
    $scope.selectedSection = castleService.selectedSection;
    $scope.rapidRemarks = castleService.rapidRemarks;
    


    $scope.findInReport = function(titleToFind, listToSearch) {
        for (var listKey in listToSearch) {
            var listItem = listToSearch[listKey];
            if (listItem.title == titleToFind) {
                return listItem;
            }
        }
        return null;
    };

    castleService.currentPage.title = "Preview Report";
    castleService.currentPage.icon = "back";
    castleService.currentPage.toggleNavMenu = false;
    castleService.currentPage.link = "inspection({sectionIndex:'default'})";
    castleService.currentPage.go = {state:"inspection", params:{sectionIndex:'default'}};
    castleService.currentPage.showExtraMenu = false;

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






















