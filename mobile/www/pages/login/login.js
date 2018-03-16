// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state("login", {
      url: "/login",
      templateUrl: "pages/login/login.html",
      controller: "login"
    });
});

app.run(function ($state, $transitions, $rootScope) {
	
  var userId = localStorage.getItem("userId");
  if(userId && parseInt(userId) > 0) {
    $rootScope.userId = userId;
	$rootScope.authenticated = true;  
  }
  var first = true;
  $transitions.onStart({}, function (trans) {
	if (first === true && $rootScope.authenticated === true && $rootScope.userId) {
	  first = false;
	  $state.go("home"); 	  
	}
    if ($rootScope.authenticated !== true && trans.$to().name !== 'login') {
      // User isn't authenticated. Redirect to a new Target State
      if (!$rootScope.debug) {
        return trans.router.stateService.target('login');
      }
    } else if ($rootScope.authenticated == true && trans.$to().name == 'login') {
	  navigator.app.exitApp();
    }
  });
});

// Define the page controller
app.controller('login', function ($scope, $rootScope, $state, action_manager, header_manager, httpService, $sha) {
  // TODO: Should localStorage failData be saved to a scope variable?
  header_manager.disable();

  $scope.serverErrorMessage;
  $scope.accountLocked;
  $scope.locked = localStorage.getItem("deviceLocked");
  $scope.user = {};
  $scope.new_user = {};
    
  var selectedTab = 0;    
  $scope.selectTab = function(input) {
      selectedTab = input;
  } 

  action_manager.addAction("Exit", "close", function () {
    $scope.user = {};
    $scope.new_user = {};
    document.activeElement.blur();
  }, "md-accent");

$scope.register = function() {
       var isValid = $("#register")[0].reportValidity();
       console.log("Register called");
       console.log("Form isValid = " + isValid);
    // Register new user
    if (isValid && $scope.new_user.username 
        && $scope.new_user.password 
        && $scope.new_user.email) {
	  var validCreate = httpService.submitRemote({
	    method: 'POST',
		url: 'api/v1/adduser',
		data: {
		  UsrUsername: $scope.new_user.username,
		  UsrPassword: $sha.hash($scope.new_user.password),
		  UsrEmail: $scope.new_user.email
		},
		params: null,
		useBaseUrl: true
	  });
	  validCreate.then(function(success) {
          success = success.data;
		// Credentials found
		if (success.data > -1) {
          checkSuccessLogin();
	      $rootScope.authenticated = true;
		  $rootScope.userId = success.data;
		  localStorage.setItem("userId", success.data);
          $state.go("home");
		} else {
          $scope.serverRegisterErrorMessage = success.data;
		  console.log(success.message);
          //TODO: protect against too many accounts being created on one device
          //checkFailLoginAttempts();
		}
	  }, function(error) {
		console.log(error);
          error = error.data;
        if (error) {
            $scope.serverRegisterErrorMessage = error.message;
        } else {
            $scope.serverRegisterErrorMessage = "Failed to connect. Are you connected to the internet?";
        }
          //TODO: protect against too many accounts being created on one device
          //checkFailLoginAttempts();
	  });      
    }
  };
    
 $scope.login = function() {
       var isValid = $("#login")[0].reportValidity();
       console.log("Login called");
       console.log("Form isValid = " + isValid);
    if (isValid && $scope.user.username && $scope.user.password) {
	  // Check if credentials are valid
	  var validLogin = httpService.submitRemote({
	    method: 'POST',
		url: 'api/v1/validateuser/',
		data: {
		  UsrUsername: $scope.user.username,
		  UsrPassword: $sha.hash($scope.user.password)
		},
		params: null,
		useBaseUrl: true
	  });
	  validLogin.then(function(success) {
          success = success.data;
		if (success.data > 0) {
          checkSuccessLogin();
		  // Credentials found
	      $rootScope.authenticated = true;
		  $rootScope.userId = success.data;
		  localStorage.setItem("userId", success.data);
          localStorage.setItem("failCount", "0");
          localStorage.setItem("failDateTime", "");
          $state.go("home");
          $scope.accountLocked = false;
        // Service returns -1 if account is locked
		} else if (success.data == -1) {
          $scope.accountLocked = true;
          $scope.serverErrorMessage = success.message;
        } else {
          $scope.accountLocked = false;
          $scope.serverErrorMessage = success.message;
          // Service returns -1 if username/password don't match
          if (success.data == -2) {
                checkFailLoginAttempts();
          }
		  console.log(success.message);
		}
	  }, function(error) {
          error = error.data;
		console.log(error);
        if (error.data) {
            if (error.data == -1 || error.data == -2) {
                checkFailLoginAttempts();
            }
            $scope.serverErrorMessage = error.message;
        } else {
            $scope.serverErrorMessage = "Failed to connect. Are you connected to the internet?";          
        }
        
	  });
    }
  };

  // Placeholder for when device is locked for too many failed logins
  $scope.doNothing = function() {
    console.log("It's pretty tough doing nothing.");
  }
  
  var checkFailLoginAttempts = function() {
    // 86400000 = number of milliseconds in 24 hours.
    var timeToLock = 86400000;
    // Track failed attempts to prevent DDOS-esqueness
    var failDateTime = Date.parse(localStorage.getItem("failDateTime"));
    var failCount = parseInt(localStorage.getItem("failCount"));
    var numLocks = parseInt(localStorage.getItem("numTimesLocked"));
    // Reset fail data if it's been longer than 24 hours, or it hasn't been set
    if ((failDateTime && ((new Date() - failDateTime) > timeToLock)) || !failDateTime) {
      failDateTime = new Date();
      failCount = 1;
      localStorage.setItem("failCount", failCount);
      localStorage.setItem("failDateTime", failDateTime.toString());
      // Device should not be locked if we're passed the allotted timeframe
      // or if no failDateTime is set
      localStorage.removeItem("deviceLocked");
      $scope.locked = false;
    // Otherwise, just increment the failCount
    } else {
      failCount++;
      localStorage.setItem("failCount", failCount);
    }  
    // Block device from making requests if 5 fail attempts within 24 hours
    if (failCount >= 5 && ((new Date() - failDateTime) <= timeToLock)) {
      $scope.locked = true;
      localStorage.setItem("deviceLocked", "true");
      localStorage.setItem("numTimesLocked", numLocks ? ++numLocks : 1);
    }
  }
  
  var checkSuccessLogin = function() {
    // Successful Login - Remove fail data
    localStorage.removeItem("failCount");
    localStorage.removeItem("failDateTime");
  }
  
  action_manager.addAction("Login", "check", function () {
    // submit the forms
    if (selectedTab == 1) {
        $scope.register();
    } else {
        $scope.login();
    } 
  });
  action_manager.mode = ACTION_MODES.Action;
    
});


