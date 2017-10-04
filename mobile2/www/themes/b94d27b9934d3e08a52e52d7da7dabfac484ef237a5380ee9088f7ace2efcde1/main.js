var app = angular.module('fidelity', []);

app.controller('main', function ($scope, $timeout) {
  $timeout(function () {
    $scope.manifest = castle.manifest;
    $scope.inspection = castle.inspection;

    console.log($scope.manifest);
    castle.apply();
  }, 10);
})
