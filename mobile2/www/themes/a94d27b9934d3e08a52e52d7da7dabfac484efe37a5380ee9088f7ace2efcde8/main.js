var app = angular.module('fidelity', []);

app.controller('main', function ($scope, $timeout) {
  $timeout(function () {
    $scope.castle = castle;

    console.log($scope.manifest);
    castle.apply();
  }, 10);
})
