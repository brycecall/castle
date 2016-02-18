app.factory('connectService',

    /**************************
     *    CONNECT SERVICE
     **************************/
    function ($rootScope) {
        //var socket = io("http://dev.maurasoftware.com:8080");
        var socket = io("http://127.0.0.1:8080");
        var instance = {};

        var authenticated_user = null;

        // Private
        var emit = function (event, payload) {
            if (!authenticated_user) {
                try {
                    authenticated_user = JSON.parse(localStorage.getItem('authenticated_user'));
                } catch (err) {
                    authenticated_user = null;
                }
            }

            if (authenticated_user)
                var object = new emitObject(authenticated_user.token, event, payload);
            else
                var object = new emitObject(null, event, payload);

            socket.emit(event, object);
        };

        // Client Emitters
        instance.sendReport = function (report) {
            emit(UPDATE_EVENTS.send_report, report);
        };

        instance.deleteReport = function (report) {
            emit(UPDATE_EVENTS.delete_report, report.id);
        };

        instance.refresh = function () {
            emit(UPDATE_EVENTS.refresh, null);
        };

        instance.login = function (username, password) {
            var user_credentials = new user(username, password, null);
            emit(UPDATE_EVENTS.authenticate_user, user_credentials);
        };

        instance.logout = function () {
            socket = null; // Disconnect from socket.io
            localStorage.setItem('authenticated_user', null);
            authenticated_user = null;
        };

        instance.createNewUser = function (username, password, meta) {
            var user_credentials = new user(username, password, meta);
            emit(UPDATE_EVENTS.create_user, user_credentials);
        };

        // Client Listeners
        var updateHandler = function (data) {
            console.log("UPDATE!");

            switch (data.event) {
            case UPDATE_EVENTS.authenticate_user:
                localStorage.setItem('authenticated_user', JSON.stringify(data.user));
                authenticated_user = data.user;
                $rootScope.authenticateUser_handler(data);
                break;
            case UPDATE_EVENTS.create_user:
                authenticated_user = data.user;
                $rootScope.createUser_handler(data);
                break;
            case UPDATE_EVENTS.refresh:
                $rootScope.refresh_handler(data);
                break;
            case UPDATE_EVENTS.delete_report:
                $rootScope.deleteReport_handler(data);
                break;
            case UPDATE_EVENTS.send_report:
                $rootScope.sendReport_handler(data);
                break;
            default:
                alert("Oops!  There was an error...\n\nPlease contact customer support.\n\n" + data);
            }
            
            // TODO: Add an angular ui refresh so that the updates show up in the UI.
        };
        socket.on("update", updateHandler);

        return instance;
    });

/**************************
 *    CUSTOM DATA TYPES
 **************************/
function user(username, password, meta) {
    this.username = username;
    this.password = password;
    this.meta = meta;
}

function emitObject(user, event, payload) {
    this.user = user;
    this.event = event;
    this.payload = payload;
}

/**************************
 *    CUSTOM DATA TYPES
 **************************/
var UPDATE_EVENTS = function () {
    var instance = {};

    instance.send_report = "send report";
    instance.delete_report = "delete report";
    instance.refresh = "refresh";
    instance.authenticate_user = "authenticate user";
    instance.create_user = "create user";

    return instance;
}();