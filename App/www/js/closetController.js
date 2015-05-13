angular.module('fashionApp').controller('closetController', ['$scope', 'fashionService', function($scope, fashionService) {
    fashionService.currentPage.title = "Closet";
}]);