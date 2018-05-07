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
    $scope.selectedAutoComment = {};
    
    $scope.autoComments = [];
    cloud_connector.getAutoComments($rootScope.userId).then(function (success) {
        // TODO: stuff goes here to test getautocomment connector
        for (var i = 0; i < success.data.length; i++) {
          $scope.autoComments.push(success.data[i]);
        }
        console.log($scope.autoComments);        
    }, function (error) {
        //
        console.log(error);
    });
    
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
            $scope.autoComments.push(autoComment);
        }, function (error) {
            setTimeout(function () {
                toast.textContent('Failure Adding Auto Comment!');
                $mdToast.show(toast);
            });
        });
        $scope.acTitle = "";
        $scope.acText = "";
    }
    
    $scope.editAutoComment = function () {
        console.log(this.selectedAutoComment);
        cloud_connector.editAutoComment(this.selectedAutoComment).then(function(success) {
           console.log('success'); 
        }, function(error){
           console.log(error);
        });
        
    }

    $scope.wipeDatabase = function () {
        var sure = confirm("WARNING!!!\n\nThis will clear all inspection data in the app.\n\nAre you sure you want to do this?");

        if (sure) {
            $rootScope.loading = true;

            filesystem_manager.resetThemes().then(function () {
                filesystem_manager.init(true).then(function (success) {
                    localStorage.clear();
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
