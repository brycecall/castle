app.factory('database_mock', function ($q) {
  var public = {};
  var private = {};

  public.initTables = function () {
    console.info("DATABASE: " + arguments);
  };
    
  public.getReports = function() {
    console.info("DATABASE: " + arguments);
      var columns = [{insLastModified: '9-12-17', insLastSubmitted: '9-12-17', insJobId: 10, insType: 'Residential', insName: 'Smith Inspection', insUserId: 1},
                {insLastModified: '10-1-17', insLastSubmitted: '9-11-17', insJobId: 9, insType: 'Residential', insName: 'Jones Inspection', insUserId: 1},
                {insLastModified: '6-12-17', insLastSubmitted: '6-12-17', insJobId: 13, insType: 'Residential', insName: 'Smith Inspection', insUserId: 1},
                {insLastModified: '9-1-17', insLastSubmitted: '9-1-17', insJobId: 21, insType: 'Residential', insName: 'Smith Inspection', insUserId: 1},
                {insLastModified: '9-12-17', insLastSubmitted: '9-12-17', insJobId: 1, insType: 'Commercial', insName: 'Walmart Inspection', insUserId: 1}
               ];
    var deferred = $q.defer();
    deferred.resolve({
      row: {
          length:5,
          item: function(index){
              return columns[index];
          }
      },message: 'Successful database select'
    });
    return deferred.promise;
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
