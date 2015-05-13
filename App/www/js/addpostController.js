angular.module('fashionApp').controller('addpostController', ['$scope', 'fashionService', function($scope, fashionService) {
    fashionService.currentPage.title = "Social";
}]);