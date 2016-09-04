app.controller('generateController', function ($rootScope, $scope, $mdUtil, $mdDialog, $mdMedia, castleService) {

    $scope.report = castleService.currentReport;
    $scope.currentPage = castleService.currentPage;
    $scope.selectedSection = castleService.selectedSection;
    $scope.rapidRemarks = castleService.rapidRemarks;
    $scope.metaInfo = {
        "firstName":"",
        "lastName":"",
        "address":"",
        "addressTwo":"",
        "city":"",
        "state":"",
        "postalCode":"",
        "reportID":"",
        "reportDate":""
    };

    console.log("Report" + $scope.report);

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

    $scope.initialzeFieldNotesVars = function() {
       for(var i = 0; i < $scope.report.meta.length; i++) {
            var page = $scope.report.meta[i];
            for (var j = 0; j < page.items.length; j++)
            {
                var question = page.items[j];
                switch (question.title) 
                {
                    case "First Name":
                        $scope.metaInfo.firstName = question.value;
                        break;
                    case "Last Name":
                        $scope.metaInfo.lastName = question.value;
                        break;
                    case "Address":
                        $scope.metaInfo.address = question.value;
                        break;
                    case "Address Line 2":
                        $scope.metaInfo.addressTwo = question.value;
                        break;
                    case "City":
                        $scope.metaInfo.city = question.value;
                        break;
                    case "State":
                        $scope.metaInfo.state = question.value;
                        break;
                    case "Postal Code":
                        $scope.metaInfo.postalCode = question.value;
                        break;
                    case "Report ID":
                        $scope.metaInfo.reportID = question.value;
                        break;
                    case "Report Date":
                        $scope.metaInfo.reportDate = question.value;
                        break;
                    default:
                        break;
                }
            }
        }

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






















