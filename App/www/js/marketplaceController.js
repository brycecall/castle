angular.module('fashionApp').controller('marketplaceController', ['$scope', 'fashionService', function($scope, fashionService) {
    fashionService.currentPage.title = "Marketplace";
}]);