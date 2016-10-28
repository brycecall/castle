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

var phantom = require('phantom');   

phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {
        // TODO: Authenticate user to firebase db
        
        // Set size of the browser window if needed
        page.property('viewportSize', {width: 1920, height: 1080}).then(function() {
            
        });
        // TODO: Change URL
        page.open("http://www.google.com").then(function(status) {
            console.log('Status ' + status);
            page.render('google.pdf').then(function() {
                console.log('Page Rendered');
                ph.exit();
            });
        });
    });
});