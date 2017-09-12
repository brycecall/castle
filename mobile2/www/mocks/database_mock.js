app.factory('database_mock', function ($q) {
  var public = {};
  var private = {};

  public.initTables = function () {
    console.info("DATABASE: " + arguments);
  };

  public.createUser = function () {
    console.info("DATABASE: " + arguments);
  };

  public.validCredentials = function () {
    console.info("DATABASE: " + arguments);
    var deferred = $q.defer();
    deferred.resolve({
      validCreds: true,
      message: 'name found'
    });
    return deferred.promise;
  };

  return public;
});
