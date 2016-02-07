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
                $rootScope.authenticateUser_handler = function(data) {
                    console.log("AUTH");
                    if (data.payload !== null)
                        $scope.error = data.payload.code;
                    else
                        $state.go("saved");
                    inspectionService.io.refresh();
                };
            };

            $scope.signout = function() {
                inspectionService.currentUser = {user_id: null, name: null};
                $scope.username = null;
            };
        });
