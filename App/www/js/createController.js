angular.module('fashionApp').controller('createController', ['$scope', 'fashionService', function($scope, fashionService) {
    fashionService.currentPage.title = "Create";
}]);