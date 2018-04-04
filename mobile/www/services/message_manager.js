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
    }

    return public;
});

app.controller('message', function ($scope, $timeout, $window, message_manager) {
    $scope.service = message_manager;
    $scope.current = 0;

    $scope.messages = [];

    var messages = JSON.parse(localStorage.getItem("messages"));
    if (messages && messages.length > 0) {
        $scope.messages = messages;
    };

    $scope.next = function () {
        if ($scope.current < messages.length - 1) {
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
});
