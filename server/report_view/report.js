var fbi = function () {
    var instance = {};
    var socket = io();
    
    var authenticated_user = null;

    var init = function () {
        authenticated_user = new user("", "", null);
        socket.emit("authenticate user", authenticated_user);
    };
    instance.init = init;

    socket.on("ready", function (data) {
        console.log(data);
    });
    
    socket.on("ready user", function (data) {
        console.log("AUTHENTICATED");
        console.info(data);
        var object = new emitObject(authenticated_user, "");
        socket.emit("get user reports", object);
    })

    init();
    return instance;
}();

function user(username, token, meta) {
    // TODO: Attempt login on object creation

    // TODO: populate after login.
    this.username = username;
    this.token = token;
    this.meta = meta;
}

function emitObject(user, payload) {
    this.user = user;
    this.payload = payload;
}