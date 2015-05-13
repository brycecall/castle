angular.module('fashionApp').controller('accountController', ['$scope', 'fashionService', function($scope, fashionService) {
    fashionService.currentPage.title = 
        (fashionService.currentUser.first_name ? fashionService.currentUser.first_name + "'s" : "My ") + " Account ";
}]);