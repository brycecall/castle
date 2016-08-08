app.controller('accountController', function accountController($rootScope, $scope, castleService, $state, $mdSidenav) {

        castleService.currentPage.toggleNavMenu = true;
        castleService.currentPage.title = "Account";
        castleService.currentPage.icon = "menu";


//            if (castleService.io.user)
//            {
//                $scope.name = castleService.io.user.username;
//                $scope.password = castleService.io.user.plain_password;
//            }
            $scope.error = "";
            $scope.signin = function () {


                if ($scope.email == null || $scope.email == null
                    || $scope.email == "" || $scope.password == "")
                {
                    $scope.error = "Please enter an email and password.";
                    return;
                }

                castleService.io.login($scope.email, $scope.password);
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
                
                castleService.io.createNewUser($scope.email, $scope.password, $scope.name);
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
    
            $scope.signout = function() {
                $scope.username = null;
                castleService.io.logout();
            };
        });
