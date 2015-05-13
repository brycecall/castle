angular.module('fashionApp').controller('socialController', ['$scope', 'fashionService', function($scope, fashionService) {
    fashionService.currentPage.title = "Social";
}]);