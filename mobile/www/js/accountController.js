app.controller('accountController', function accountController($rootScope, $scope, inspectionService, $state, $mdSidenav) {

        inspectionService.currentPage.toggleNavMenu = true;
        inspectionService.currentPage.title = "Account";
        inspectionService.currentPage.icon = "menu";


            if (inspectionService.io.user)
            {
                $scope.name = inspectionService.io.user.username;
                $scope.password = inspectionService.io.user.plain_password;
            }
            $scope.error = "";
            $scope.signin = function () {


                if ($scope.email == null || $scope.email == null
                    || $scope.email == "" || $scope.password == "")
                {
                    $scope.error = "Please enter an email and password.";
                    return;
                }

                inspectionService.io.login($scope.email, $scope.password);
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
                
                inspectionService.io.createNewUser($scope.email, $scope.password, $scope.name);
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
                    inspectionService.io.refresh();
                };
            $rootScope.createUser_handler = $rootScope.authenticateUser_handler;
    
            $scope.signout = function() {
                $scope.username = null;
                inspectionService.io.logout();
            };
        });
