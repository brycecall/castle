app.factory('database', function($rootScope, $state) {
  var private = {};
  private.dbOptions = {
      'name': 'castle.db',
      'location': 'default'
  };
  var public = {};
  var db = null;    
  document.addEventListener('deviceready', function() {
    db = window.sqlitePlugin.openDatabase(private.dbOptions);
      
    public.createUser = function (name, pass, email) {
      console.log('Creating User');
      db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS User (name, pass, email)');
        tx.executeSql('INSERT INTO User VALUES (?,?,?)', [name, pass, email]);
      }, function(error) {
        // TODO: Make sure insertion is unique / report that error to user
        console.log('Error Creating User: ' + error.message);
      }, function() {
          // Successful creation, navigate to home page
          console.log('Successful user creation');
          $rootScope.authenticated = true;
          $state.go('home');
      });  
    }
    public.validCredentials = function (name, pass) {
      db.executeSql('SELECT * FROM User WHERE name = ? AND pass = ?', [name, pass], function(res) {
        if (res.rows.length > 0) {
          $rootScope.authenticated = true;
          $state.go("home");
        } else {
          $rootScope.authenticated = false;
        }
       }, function(error) {
         console.log('Error attempting SELECT to check user credentials');
       }); 
     }
  });
  return public;
  
});