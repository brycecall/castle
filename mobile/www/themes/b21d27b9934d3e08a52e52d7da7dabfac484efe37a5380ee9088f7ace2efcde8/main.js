var app = angular.module('modern', []);

app.controller('main', function ($scope, $timeout, $) {
  $scope.castle = castle;
  
  // Wait for the DOM to render
  $timeout(function () {
    castle.apply();
  }, 0);
  
  $scope.exists = function (value, array) {
    return $.inArray(value, array) > -1;
  };
  
  var summary_buffer = [];
  $scope.summary_counter = function(comment) {
    if (comment && comment != "" && summary_buffer.indexOf(comment) < 0){
      summary_buffer.push(comment);
      return summary_buffer.length;
    }
    return summary_buffer.indexOf(comment) + 1;
  }
});

app.factory('$', function ($window) {
  return $window.jQuery;
});