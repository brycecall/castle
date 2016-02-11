app.controller('accountController', function accountController($rootScope, $scope, inspectionService, $state, $mdSidenav) {

        inspectionService.currentPage.toggleNavMenu = true;
        inspectionService.currentPage.title = "Account";
        inspectionService.currentPage.icon = "menu";


            $scope.name = inspectionService.currentUser.name;
            $scope.password = inspectionService.currentUser.password;
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
                            inspectionService.currentUser = null;
                        }
                    else
                        {
                            inspectionService.currentUser = {};
                            inspectionService.currentUser.loggedIn = true;
                            inspectionService.currentUser.name = data.user.username;
                            inspectionService.currentUser.user_name = data.user.username;
                            inspectionService.currentUser.user_id = data.user.uid;
                            inspectionService.currentUser.profile_image = data.user.password.profileImageURL;
                            $state.go("saved");
                        }
                    inspectionService.io.refresh();
                };
            $rootScope.createUser_handler = $rootScope.authenticateUser_handler;
    
            $scope.signout = function() {
                inspectionService.currentUser = {user_id: null, name: null};
                $scope.username = null;
            };
        });
