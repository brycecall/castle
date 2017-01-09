app.controller('accountController', function accountController($rootScope, $scope, castleService, $state, $mdSidenav, firebaseService) {
        $scope.firebaseService = firebaseService;
        castleService.currentPage.toggleNavMenu = true;
        castleService.currentPage.title = "Account";
        castleService.currentPage.icon = "menu";
//        castleService.currentPage.color = "#424242";


//            if (castleService.io.user)
//            {
//                $scope.name = castleService.io.user.username;
//                $scope.password = castleService.io.user.plain_password;
//            }
            $scope.error = "";

            // User account functions
            $scope.signin = function () {
                
                if ($scope.email == null || $scope.email == null
                    || $scope.email == "" || $scope.password == "")
                {
                    $scope.error = "Please enter an email and password.";
                    return;
                }
                firebaseService.signIn($scope.email, $scope.password);
            };
            $scope.register = function() {
                if (!$scope.name || !$scope.email || !$scope.password || !$scope.passwordTwo)
                    {
                        $scope.error = "Please provide all of the information requested.";
                        return;
                    }
                
                if ($scope.password !== $scope.passwordTwo)
                    {
                        $scope.error = "Paswords do not match.";
                        $scope.password = "";
                        $scope.passwordTwo = "";
                        return;
                    }
                
              firebaseService.createNewUser($scope.email, $scope.password);
            };
    
            $scope.signout = function() {
                firebaseService.signOut();
            };
    
            $scope.regWithGoogle = function() {
             //TODO register with google yo
            };

            $rootScope.authenticateUser_handler = function(data) {
                    console.log("AUTH");
                    console.info(data);
                    if (data.payload !== null)
                        {
                            $scope.error = data.payload.code;
                        }
                    else
                        {
                            $state.go("saved");
                        }
                    castleService.io.refresh();
                };
            $rootScope.createUser_handler = $rootScope.authenticateUser_handler;
    

        });
