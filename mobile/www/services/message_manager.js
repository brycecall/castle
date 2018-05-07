app.factory('message_manager', function ($rootScope, $sce) {
    var public = {};
    var private = {};

    public.register = function (image, text) {
        var trust = $sce.trustAsHtml(text);
        var messages = JSON.parse(localStorage.getItem("messages"));
        messages = (messages ? messages : []);
        messages.push({
            "image": image,
            "text": text
        });
        localStorage.setItem("messages", JSON.stringify(messages));
    };

    public.show = function () {
        public._visible = true;
    };

    // Setup initial load
    public.init = function () {
        public.register("assets/idea.jpg", "Welcome to Castle by Invenio!");
        public.register("assets/feedback.jpg", 'We do software differently!  Use the <md-icon md-svg-icon="help_outline"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" /></svg></md-icon> to submit feedback and help shape the future.');
        public.register("assets/gift.jpg", "We've got the basics down, but this is just the beginning. We need your help to make the vision a reality.");
        public.register("assets/paper.jpg", "Let's get to it, and let us know what you think.");
    };

    public._visible = false;

    return public;
});

app.controller('message', function ($scope, $rootScope, $timeout, $window, message_manager) {
    $scope.service = message_manager;
    $scope.current = 0;

    $scope.messages = [];

    var messages = JSON.parse(localStorage.getItem("messages"));
    if (messages && messages.length > 0) {
        $scope.messages = messages;
    };

    $scope.next = function () {
        if ($scope.current < $scope.messages.length - 1) {
            $scope.current++;
        }
    }

    $scope.previous = function () {
        if ($scope.current > 0) {
            $scope.current--;
        }
    }

    $scope.clear = function () {
        $scope.messages = [];
        localStorage.removeItem("messages");
    }

    $scope.$watch("service._visible", function (newVal, newOld) {
        if (newVal == false) {
            return;
        }

        var messages = JSON.parse(localStorage.getItem("messages"));
        if (messages && messages.length > 0) {
            $scope.messages = messages;
        };
        $scope.service._visible = false;
    });
    
    $rootScope.version_promise.then(function () {
        var app_version = localStorage.getItem("version");
        if (app_version != $rootScope.version) {
            $scope.service.init();
            $scope.service.show();
        }

        localStorage.setItem("version", $rootScope.version);
    });
});
