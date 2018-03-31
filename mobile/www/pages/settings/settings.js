// Register the Page
app.config(function ($stateProvider) {
    $stateProvider
        .state('settings', {
            url: "/settings",
            templateUrl: "pages/settings/settings.html",
            controller: "settings"
        });
});

app.controller('settings', function ($scope, $rootScope, $cordovaCapture, $timeout, $q, theme_manager, header_manager, filesystem_manager, $state, cloud_connector, $mdToast, message_manager) {
    header_manager.title = "Settings";

    $scope.acTitle = "";
    $scope.acText = "";

    $scope.addAutoComment = function () {
        var autoComment = {
            acKey: $scope.acTitle,
            acAutoComment: $scope.acText
        };
        var toast = $mdToast.simple()
            .position('bottom')
            .toastClass('highIndex');
        // Call cloud_connector to insert new auto comment
        cloud_connector.insertAutoComment(autoComment).then(function (success) {
            setTimeout(function () {
                toast.textContent('Successfully Added!');
                $mdToast.show(toast);
            });
        }, function (error) {
            setTimeout(function () {
                toast.textContent('Failure Adding Auto Comment!');
                $mdToast.show(toast);
            });
        });
        $scope.acTitle = "";
        $scope.acText = "";
    }

    $scope.wipeDatabase = function () {
        var sure = confirm("WARNING!!!\n\nThis will clear all inspection data in the app.\n\nAre you sure you want to do this?");

        if (sure) {
            $rootScope.loading = true;
            //message_manager.register("assets/login_background.jpg", "Goober");
            //message_manager.register("assets/login_background.jpg", "Goober doober");
            //message_manager.register("assets/login_background.jpg", "Goober dinglober");
            
            filesystem_manager.resetThemes().then(function () {
                filesystem_manager.init(true).then(function (success) {
                    console.log('Folders deleted successfully');
                    //console.log(success);
                    $rootScope.loading = false;
                    $scope.reload();
                }, function (error) {
                    console.log('Error deleting folders');
                    console.log(error);
                    $scope.reload();
                });
            });
        }
    };
    $scope.logout = function () {
        $rootScope.authenticated = false;
        $rootScope.userId = null;
        localStorage.setItem("userId", null);
        $state.go("login");
    }

    $scope.reload = function () {
        window.location.reload();
    }
});
