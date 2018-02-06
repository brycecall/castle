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
      } else {
		return trans.router.stateService.target('login');//$state.go("login");
	  }
    } else if ($rootScope.authenticated == true && trans.$to().name == 'login') {
	  navigator.app.exitApp();
    }
  });
});

// Define the page controller
app.controller('login', function ($scope, $rootScope, $state, action_manager, header_manager, database, httpService) {
  header_manager.disable();

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
        && $scope.new_user.email 
        && $scope.new_user.founders_access_code) {
	  var validCreate = httpService.submitRemote({
	    method: 'POST',
		url: 'api/v1/adduser/' + $scope.new_user.founders_access_code,
		data: {
		  UsrUsername: $scope.new_user.username,
		  UsrPassword: $scope.new_user.password,
		  UsrEmail: $scope.new_user.email
		},
		params: null,
		useBaseUrl: true
	  });
	  validCreate.then(function(success) {
		// Credentials found
		if (success.data !== -1) {
	      $rootScope.authenticated = true;
		  $rootScope.userId = success.data;
		  localStorage.setItem("userId", success.data);
          $state.go("home");
		} else {
		  // TODO: Show visible error on page
		  console.log(success.message);
		}
	  }, function(error) {
		// TODO: Show visible error on login page
		console.log(error);
	  });      
    
  };
    
 $scope.login = function(event) {
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
		  UsrPassword: $scope.user.password
		},
		params: null,
		useBaseUrl: true
	  });
	  validLogin.then(function(success) {
		if (success.data >= 0) {
		  // Credentials found
	      $rootScope.authenticated = true;
		  $rootScope.userId = success.data;
		  localStorage.setItem("userId", success.data);
          $state.go("home");
		} else {
		  console.log(success.message);
		}
	  }, function(error) {
		// TODO: Show visible error on login page
		console.log(error);
	  });
    }
  };
    
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


