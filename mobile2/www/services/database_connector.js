app.factory('database', function() {
  var private = {};
  private.dbOptions = {
      'name': 'demo.db',
      'location': 'default'
  };
  var public = {};
  var db = null;    
  document.addEventListener('deviceready', function() {
    db = window.sqlitePlugin.openDatabase(private.dbOptions);
      
    public.initDb = function () {
      console.log('initDb executing');
      db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS User (name, pass)');
        tx.executeSql('INSERT INTO User VALUES (?,?)', ['test', 'test']);
        tx.executeSql('INSERT INTO User VALUES (?,?)', ['poo@test.com', 'test']);
      }, function(error) {
        console.log('Transaction ERROR: ' + error.message);
      }, function() {
        console.log('Successful dummy data insertion');
      });       
    }
    public.validCredentials = function (name, pass) {    
      console.log('checkCreds executing');
      db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM User WHERE name = ? AND pass = ?;', [name, pass]), function(tx, res) {
          console.log('Number of rows that match user creds: ' + res.rows.length);
            if (res.rows.length > 0) {
              console.log('We should authenticate');
              return true;
            } else {
              console.log('do not authenticate');
              return false;
            }
        } 
      }), function(error) {
          console.log('Transaction checkCreds ERROR: ' + error.message);
      }
    }
  });
  console.log(public);
  return public;
  
});