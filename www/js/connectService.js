app.factory('connectService', 

/**************************
 *    CONNECT SERVICE
 **************************/
function ($rootScope) {
    var socket = io("http://127.0.0.1:8080");
    var instance = {};
    
    var authenticated_user = new user("", "", null);
    
    // Private
    var emit = function(event, payload) {
        var object = new emitObject(authenticated_user, event, payload);
        socket.emit(event, object);
    };
    
    // Client Emitters
    instance.sendReport = function(report) {
        emit(UPDATE_EVENTS.send_report, report);
    };
    instance.deleteReport = function(report) {
        emit(UPDATE_EVENTS.delete_report, report.id);
    };
    instance.login = function(username, password) {
        var user_credentials = new user(username, password, null);
        emit(UPDATE_EVENTS.authenticate_user, user_credentials);
    };
    instance.logout = function() {
        socket = null; // Disconnect from socket.io
    };
    instance.createNewUser = function(new_user) {
        emit(UPDATE_EVENTS.create_user, new_user);
    };
    
    // Client Listeners
    var updateHandler = function(data) {
        console.log("UPDATE!");
        
        switch (data.event) {
            case UPDATE_EVENTS.authenticate_user:
                $rootScope.authenticateUser_handler(data);
                break;
            case UPDATE_EVENTS.create_user:
                $rootScope.createUser_handler(data);
                break;
            case UPDATE_EVENTS.delete_report:
                $rootScope.deleteReport_handler(data);
                break;
            case UPDATE_EVENTS.send_report:
                $rootScope.sendReport_handler(data);
                break;
            default:
                alert("Oops!  There was an error:\n" + data);
        }
        
        console.log(data);
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
var UPDATE_EVENTS = function() {
    var instance = {};
    
    instance.send_report = "send report";
    instance.delete_report = "delete report";
    instance.authenticate_user = "authenticate user";
    instance.create_user = "create user";
    
    return instance;
}();