angular.module('fbiApp').controller('accountController', ['$scope', 'inspectionService', '$location', '$mdSidenav',
        function accountController($scope, inspectionService, $location, $mdSidenav) {

        inspectionService.currentPage.toggleNavMenu = true;
        inspectionService.currentPage.title = "Sign In";
        inspectionService.currentPage.icon = "./bower_components/material-design-icons/navigation/svg/design/ic_menu_48px.svg";


            $scope.username = inspectionService.currentUser.name;
            $scope.password = null;
            $scope.error = "";
            $scope.signin = function () {




                inspectionService.console($scope.username + " " +$scope.password, inspectionService.INFO);

                if ($scope.username == null || $scope.password == null
                    || $scope.username == "" || $scope.password == "")
                {
                    $scope.error = "Please enter a username and password.";
                    return;
                }

                inspectionService.request("/user/login", {username:$scope.username, password:$scope.password}).success(function(data) {
                    if (data.status)
                    {
                        inspectionService.currentUser.name = $scope.username;
                        inspectionService.currentUser.user_id = data.id;
                        $scope.password = null;
                        $location.path("/saved");
                    }
                    else
                    {
                        $scope.error = "Incorrect username or password, please try again.";
                        return;
                    }
                }).error( function(data) {
                    $scope.error = "Server error! Oops...";
                });
            };

            $scope.signout = function() {
                inspectionService.currentUser = {user_id: null, name: null};
                $scope.username = null;
            };

            inspectionService.console("signinConroller load complete", inspectionService.INFO);
        }]);
