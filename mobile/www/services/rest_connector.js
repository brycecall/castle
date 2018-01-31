app.factory('pendingRequests', function() {
    var private = {};
    var public = {};
    
    private.pending = [];
    public.get = function() {
      return private.pending;
    };
      
    public.add = function(request) {
      private.pending.push(request);
    };
      
    public.remove = function(url) {
      private.pending = private.pending.filter(function(p) {
          return p.url !== url;
      });
    };
      
    public.cancelAll = function() {
      angular.forEach(private.pending, function(p) {
        p.canceller.resolve();
      });
      private.pending.length = 0;
    };
    
    return public;
});


// This service wraps $http to make sure pending requests are tracked 
app.factory('httpService', ['$http', '$q', 'pendingRequests', function($http, $q, pendingRequests) {
    var private = {};
    var public = {};
    
    public.submitRemote = function(method, url, params, data, cancellable) {
        var canceller = $q.defer();

        if (cancellable) {
            pendingRequests.add({
              url: url,
              canceller: canceller
            });
        }

        var request = {
            method: method, //GET, POST, PUT, DELETE, OPTIONS
            url: url, // absolute url to submit the request to
            cache: false, // enable or disable client side caching
            data: data, // Request message Data
            params: params, // GET Parameters
            timeout: canceller.promise // Will cancel the query if the promise is resolved
        }

        //Request gets cancelled if the timeout-promise is resolved
        var requestPromise = $http(url, { timeout: canceller.promise });

        //Once a request has failed or succeeded, remove it from the pending list
        requestPromise.finally(function() {
            if (cancellable) {
                pendingRequests.remove(url);
            }
        });
        
        return requestPromise;
    }
    
      return public;
}]);

