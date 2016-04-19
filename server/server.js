// Libraries
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Firebase = require("firebase");
var firebase = new Firebase("https://maura-inspector-pro.firebaseio.com/");

/************************************
 * Retrieve report via HTML
 *************************************/
// TODO: Setup as HTTPS site so that tranfer on website and API is encrypted
app.set('port', 8080);

var http_hanlder = function () {
    console.log("FBI Server running on *:" + app.get('port'));
};

http.listen(app.get('port'), http_hanlder);
app.use('/', express.static(__dirname + '/report_view'));


/************************************
 * FBI API
 *************************************/
var connection_handler = function (socket) {
    var initialize = function () {
        console.log(socket.id + ' user connected');
    };

    var send_report_handler = function (data) {
        // Check the format of the report
        // TODO: Check more than just the id
        if (!data.payload.id)
            data.payload.id = helpers.generateGUID();

        var reports_ref = firebase.child("Organizations/FBI/Reports");
        
        // Populate report data
        var object = {};
        object[data.payload.id] = data.payload;
        
        // Submit to database
        reports_ref.update(object, function() {
            refresh_handler(data)
        });
    };

    var delete_report_handler = function (data) {
        console.log(data);
        data = "ERROR: Not yet implemented.";
        socket.emit("update", data);
    };

    var refresh_handler = function (data) {
        console.log(data);
        var reports_ref = firebase.child("Organizations/FBI/Reports");

        reports_ref.on("value", function (report_val) {
            console.log(report_val.val());
            data.payload = report_val.val();
            socket.emit("update", data);
        }, function (error) {
            console.log(error);
            socket.emit("update", "Could not get reports.");
        });

    };

    var authenticate_user_handler = function (data) {
        console.log(data);

        firebase.authWithPassword({
            email: data.payload.username,
            password: data.payload.password
        }, function handler(error, authResponse) {
            if (error)
                data.payload = error;
            else {
                data.user = authResponse;
                data.user.username = data.payload.username;
                data.payload = null; // Payload must be null if sucessful!
            }

            socket.emit("update", data);
        });
    };

    var create_user_handler = function (data) {
        console.log(data);

        firebase.createUser({
            email: data.payload.username,
            password: data.payload.password
        }, function handler(error, authResponse) {
            if (error)
                data.payload = error;
            else {
                authenticate_user_handler(data);
            }
        });
    };

    socket.on('send report', send_report_handler);
    socket.on('delete report', delete_report_handler);
    socket.on('refresh', refresh_handler);
    socket.on('authenticate user', authenticate_user_handler);
    socket.on('create user', create_user_handler);

    initialize();
};
io.on('connection', connection_handler);


/************************************
 * HELPERS
 *************************************/
var helpers = function () {
    var instance = {};

    instance.generateGUID = function () {
        var d = new Date().getTime();
        var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return guid;
    };
    
    return instance;
}();