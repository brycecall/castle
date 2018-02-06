// Server connection
//app.constant('BASE_URL', 'http://localhost:51802/');
app.constant('BASE_URL', 'https://api.castle.invenio.xyz/');
//app.constant('BASE_URL', 'http://localhost:62326/');

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
app.factory('httpService', ['$http', '$q', 'pendingRequests', 'BASE_URL', function($http, $q, pendingRequests, BASE_URL) {
    var private = {};
    var public = {};
	
    public.submitRemote = function(incRequest, cancellable) {
        var canceller = $q.defer();
		
		if(incRequest.useBaseUrl) {
		  incRequest.url = BASE_URL + incRequest.url;
		}

        if (cancellable) {
            pendingRequests.add({
              url: incRequest.url,
              canceller: canceller
            });
        }

        var request = {
            method: incRequest.method, //GET, POST, PUT, DELETE, OPTIONS
            url: incRequest.url, // absolute url to submit the request to
            cache: false, // enable or disable client side caching
            data: incRequest.data, // Request message Data
            params: incRequest.params, // GET Parameters
            timeout: canceller.promise // Will cancel the query if the promise is resolved
        }

        //Request gets cancelled if the timeout-promise is resolved
        var requestPromise = $http(request);

        //Once a request has failed or succeeded, remove it from the pending list
        requestPromise.finally(function() {
            if (cancellable) {
                pendingRequests.remove(incRequest.url);
            }
        });
        
        return requestPromise;
    }
    
      return public;
}]);

