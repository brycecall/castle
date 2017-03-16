var castle = function () {
    var instance = {};
    //var socket = io("http://dev.maurasoftware.com:8080");
    var socket = io();

    // PRIVATE //
    var report_hash = null;
    var report_view = null;

    var emit = function (event, payload) {
        if (!instance.user) {
            try {
                instance.user = JSON.parse(localStorage.getItem('authenticated_user'));
            } catch (err) {
                instance.user = null;
            }
        }

        if (instance.user)
            var object = new emitObject(instance.user.token, event, payload);
        else
            var object = new emitObject(null, event, payload);

        socket.emit(event, object);
    };

    var update_handler = function (data) {
        instance.report = data.payload.Reports[report_hash];
        if (instance.report === undefined)
            instance.report = null;

        console.log(instance.report);
    };

    // PUBLIC //
    instance.report = null;
    instance.init = function () {
        report_hash = window.location.href.split("#")[1];
        report_view = document.querySelector("#report_view");

        // Verify that it is a guid
        if (!report_hash.match(/^(\{{0,1}([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}\}{0,1})$/))
            report_hash = null;

        console.log(report_hash);
        instance.refresh();
    };

    instance.refresh = function () {
        emit(UPDATE_EVENTS.refresh, null);
    };

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

    var UPDATE_EVENTS = function () {
        var instance = {};

        instance.send_report = "send report";
        instance.delete_report = "delete report";
        instance.refresh = "refresh";
        instance.authenticate_user = "authenticate user";
        instance.create_user = "create user";

        return instance;
    }();



    // SOCKET EVENT HANDLERS //
    socket.on("update", update_handler);

    window.addEventListener('load', instance.init);
    return instance;
}();
