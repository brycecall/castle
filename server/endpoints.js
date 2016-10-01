var express = require('express');
var app = express();
var Firebase = require("firebase");
var firebase = new Firebase("https://maura-inspector-pro.firebaseio.com/");

// api/insert/user
// -inputs: personal name, email, password hash
//      => "name", "email", "pw"
// - returns: "status" 'success' or 'failure'
//            "reason" (string reflecting error)
app.post('/api/insert/user/', function(req, res){
    //do magic to connect to firebase db
    
    //insert row
    firebase.createUser({
        name: req.param("name"),
        email: req.param("email"),
        password: req.param("pw")
    }, function(error, userData) {
        if(error){
            console.log("Error creating user:", error);
        } else {
            console.log("Successfully created user account with uid:", userData.uid);
        }
    });

    
    //respond with status
    res.send("");
    
})

// api/authuser
// -inputs: email, password hash
//      => "email", "pw"
// - returns: "status" 'success' or 'failure'
//            "reason" (string reflecting error)
app.post('/api/authuser/', function(req, res){
    
})

// api/insert/inspection
// -inputs: report JSON object
//      => "inspection"
// - returns: "id" id of report upon insertion to db
//            "status" 'success' or 'failure'
//            "reason" (string reflecting error)
app.post('/api/insert/inspection/', function(req, res){
    
})

// api/update/inspection
// -inputs: id, report JSON object
//      => "id", "inspection"
// - returns: "status" 'success' or 'failure'
//            "reason" (string reflecting error)
app.post('/api/update/inspection/', function(req, res){
    
})

// api/select/inspections/email/type/sortfield/ascending/startdate/enddate
// -inputs: email, 
//          type(inspection/template) default=inspection, 
//          sortfield (optional) default=date, 
//          ascending (optional) default=false, 
//          startdate (optional) default=currentdate - 1month, 
//          enddate (optional) default=currentdate
// - returns: array of JSON inspections
app.get('/api/select/inspections/email/type/sortfield/ascending/startdate/enddate/', function(req, res){
    
})

// api/select/inspections/meta/email/type/sortfield/ascending/startdate/enddate
// -inputs: email, 
//          type(inspection/template) default=inspection, 
//          sortfield (optional) default=date, 
//          ascending (optional) default=false, 
//          startdate (optional) default=currentdate - 1month, 
//          enddate (optional) default=currentdate
// - returns: array of JSON inspections
app.get('/api/select/inspections/meta/email/type/sortfield/ascending/startdate/enddate/', function(req, res){
    
})

// api/select/inspection/id
// -inputs: id
// returns: JSON object of report
app.get('/api/select/inspection/id/', function(req, res){
    
})

// api/delete/inspection/id
// api/select/users

// api/getreport
// -inputs: report id (hash id?), username?(to make sure they are authorized to view report)
// - returns full report 
app.get('/api/getreport', function(req,res){
    
})