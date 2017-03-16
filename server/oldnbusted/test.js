// helpful guide: https://www.npmjs.com/package/phantom

/* 
    Supported file extensions for phantom: 
    PDF
    PNG
    JPEG
    BMP
    PPM
    GIF support depends on the build of Qt used
*/
var firebase = new Firebase("https://maura-inspector-pro.firebaseio.com/");
var phantom = require('phantom');   

phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {
        // TODO: Authenticate user to firebase db
        var username = test@test.com;
        var password = tester;
        firebase.authWithPassword({
            email: username,
            password: password
        }, function handler(error, authResponse) {
            if (error)
                console.log(error);
            else {
                console.log('Connection Successful');
            }
        });            
        
        // Set size of the browser window if needed
        page.property('viewportSize', {width: 1920, height: 1080}).then(function() {
            
        });
        // TODO: Change URL
        page.open("http://www.google.com"/*report endpoint*/).then(function(status) {
            console.log('Status ' + status);
            page.render('google.pdf').then(function() {
                console.log('Page Rendered');
                ph.exit();
            });
        });
    });
});