var app = angular.module('fidelity', []);

app.controller('main', function ($scope, $timeout, $) {
  $timeout(function () {
    $scope.castle = castle;
    castle.apply();
  }, 10);
  
  $scope.exists = function (value, array) {
    return $.inArray(value, array) > -1;
  };
});

app.factory('$', function ($window) {
  return $window.jQuery;
});