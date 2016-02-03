app.factory('connectService', 
function () {
    var socket = null;
    var instance = {};
    
    var authenticated_user = new user("", "", null);
    
    // Client Emitters
    instance.getReports = function() {
        var object = new emitObject(authenticated_user, null);
        socket.emit("get user reports", object);
    };
    instance.getReport = function(report) {
        var object = new emitObject(authenticated_user, report.id);
        socket.emit("get report", object);
    };
    instance.sendReport = function(report) {
        var object = new emitObject(authenticated_user, report);
        socket.emit("send report", object);
    };
    instance.deleteReport = function(report) {
        var object = new emitObject(authenticated_user, report.id);
        socket.emit("delete report", object);
    };
    
    instance.login = function(username, password) {
        // TODO: setup SSL connection (unsecured currently)
        socket = io(); // Connect to socket.io
        
        var user_credentials = new user(username, password, null);
        
        var object = new emitObject(authenticated_user, user_credentials);
        socket.emit("authenticate user", object);
    };
    instance.logout = function() {
        socket = null; // Disconnect from socket.io
    };
    instance.createNewUser = function(new_user) {
        var object = new emitObject(authenticated_user, new_user);
        socket.emit("create user", object);
    };
    
    // Client Listeners
    var readyHandler = function(data) {
        console.log(data);
    }
    socket.on("ready", readyHandler);
    var loginHandler = function(data) {
        if (data)
            authenticated_user = data;
        else
            console.log("User not authenticated.");
    }
    socket.on("ready user", loginHandler);
    
    return instance;
});

function user(username, token, meta) {
    // TODO: Attempt login on object creation
    
    // TODO: populate after login.
    this.username = username;
    this.secret = ""; // Used for password when first authenticating
    this.token = token;
    this.meta = meta;
}

function emitObject(user, payload) {
    this.user = user;
    this.payload = payload;
}