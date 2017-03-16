var express = require('express');
var mysql = require('mysql');
var app = express();

var pool = mysql.createPool({
  connectionLimit : 100,
  host     : '162.243.212.249',
  user     : 'boss',
  password : 'AlphaBeta_',
  database : 'castledb'
});


var server = app.listen(8081, function () {
   console.log("Starting!");
});

// Eventually be the default endpoint
app.get("/", function(req, res) {
    
    pool.getConnection(function(err, connection) {
        
        connection.query('SELECT * from User', function (error, results, fields) {
            
          if (error) throw error; // handle query errors
            
          for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
          } 
            
          res.json(results);
            
        });
        
        connection.release(); // release connection
        if (err) throw err; // handle pool connection errors
    });
});



/*
<{usrAddress: }>, string
<{usrFirstName: }>, string 
<{usrLastName: }>, string
<{usrPhone: }>, string
<{usrEmail: }>, string
<{usrType: }>, string
<{usrUserAccessId: }>, string
<{usrOrganizationId: }> string
*/
// create user
app.post("/createUser", function(req, res) {
    pool.getConnection(function(err, connection) {
        
        connection.query('', function (error, results, fields) {
          if (error) {
              res.send(error);
              throw error;
          }  // handle query errors
          res.send("success");
        });
        
        connection.release(); // release connection
        if (err) throw err; // handle pool connection errors
    });
});


/*


*/
app.get("/authenticateUser", function(req, res) {
    pool.getConnection(function(err, connection) {
        
        connection.query('', function (error, results, fields) {
          if (error) {
              res.send(error);
              throw error;
          }  // handle query errors
          res.send("success");
        });
        
        connection.release(); // release connection
        if (err) throw err; // handle pool connection errors
    });
});


