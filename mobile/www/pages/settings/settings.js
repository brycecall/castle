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

            filesystem_manager.resetThemes().then(function () {
                filesystem_manager.init(true).then(function (success) {
                    localStorage.clear();
                    message_manager.register("assets/idea.jpg", "Welcome to Castle by Invenio!");
                    message_manager.register("assets/feedback.jpg", 'We do software differently!  Use the <md-icon md-svg-icon="help_outline"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" /></svg></md-icon> to submit feedback and help shape the future.');
                    message_manager.register("assets/gift.jpg", "We've got the basics down, but this is just the beginning. We need your help to make the vision a reality.");
                    message_manager.register("assets/paper.jpg", "Let's get to it, and let us know what you think.");
                    console.log('Data reset successfully');
                    //console.log(success);
                    $rootScope.loading = false;
                    $scope.reload();
                }, function (error) {
                    console.error('Error resetting data...');
                    console.error(error);
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
