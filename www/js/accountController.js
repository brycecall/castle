app.controller('accountController', function accountController($scope, inspectionService, $location, $mdSidenav) {

        inspectionService.currentPage.toggleNavMenu = true;
        inspectionService.currentPage.title = "Account";
        inspectionService.currentPage.icon = "menu";


            $scope.username = inspectionService.currentUser.name;
            $scope.password = inspectionService.currentUser.password;
            $scope.error = "";
            $scope.signin = function () {


                if ($scope.username == null || $scope.password == null
                    || $scope.username == "" || $scope.password == "")
                {
                    $scope.error = "Please enter a username and password.";
                    return;
                }

                inspectionService.io.login($scope.username, $scope.password);

                // inspectionService.request("/user/login", {username:$scope.username, password:$scope.password}).success(function(data) {
                //     if (data.status)
                //     {
                //         inspectionService.currentUser.name = $scope.username;
                //         inspectionService.currentUser.user_id = data.id;
                //         $scope.password = null;
                //         $location.path("/saved");
                //     }
                //     else
                //     {
                //         $scope.error = "Incorrect username or password, please try again.";
                //         return;
                //     }
                // }).error( function(data) {
                //     $scope.error = "Server error! Oops...";
                // });
            };

            $scope.signout = function() {
                inspectionService.currentUser = {user_id: null, name: null};
                $scope.username = null;
            };
        });
