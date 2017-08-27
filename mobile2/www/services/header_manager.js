app.factory('header', function ($rootScope) {
  var public = {};
  var private = {};

  return public;
});

app.controller('header_manager', function ($scope, $rootScope, header) {
  console.log(header);
});
