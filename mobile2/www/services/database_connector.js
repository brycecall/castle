app.factory('database', function($rootScope, $state, $q) {
  var private = {};
  private.dbOptions = {
      'name': 'castle.db',
      'location': 'default'
  };
  var public = {};
  var db = null;    
  document.addEventListener('deviceready', function() {
    db = window.sqlitePlugin.openDatabase(private.dbOptions);
    
    public.initTables = function() {
      console.log('calling initTables');
        // Batch script to create all tables in db
      db.sqlBatch([
          'CREATE TABLE IF NOT EXISTS Answer (ansQuestionId, value, answerCol, FOREIGN KEY(ansQuestionid) REFERENCES Question(rowId))',
          'CREATE TABLE IF NOT EXISTS Client (cliFirstName, cliLastName, cliAddress, cliCity, cliState, cliZipCode, cliPhone, cliEmail)',
          'CREATE TABLE IF NOT EXISTS Inspection (insLastModified, insLastSubmitted, insJobId, insType, insName, insUserId, FOREIGN KEY(insUserId) REFERENCES User(rowId), FOREIGN KEY(insJobId) REFERENCES Job(rowId))',
          'CREATE TABLE IF NOT EXISTS InspectionHistory (inhInspectionId, inhLastModified, inhSubmittedDate, FOREIGN KEY(inhInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS Job (jobUserId, jobDate, jobAddress, jobZipCode, jobCity, jobState, jobStatus, jobSubmittedDate, FOREIGN KEY(jobUserId) REFERENCES User(rowId))',
          'CREATE TABLE IF NOT EXISTS Organization (orgName, orgAddress, orgLogo, orgCity, orgState, orgZipCode)',
          'CREATE TABLE IF NOT EXISTS Question (queTitle, queType, queSubSectionId, queAnswered, queRequired, FOREIGN KEY(queSubSectionId) REFERENCES SubSection(rowId))',
          'CREATE TABLE IF NOT EXISTS QuestionAnswers (quaQuestionId, quaAnswerId, FOREIGN KEY (quaQuestionId) REFERENCES Question(rowId), FOREIGN KEY(quaAnswerId) REFERENCES Answer(rowId))',
          'CREATE TABLE IF NOT EXISTS Section (secTitle, secInspectionId, secColor, FOREIGN KEY(secInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS SubSection (susTitle, susSectionId, FOREIGN KEY(susSectionId) REFERENCES Section(rowId))',
          'CREATE TABLE IF NOT EXISTS Template (temOrganizationId, temTitle, FOREIGN KEY(temOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS User (usrAddress, usrFirstName, usrLastName, usrPhone, usrEmail, usrType, usrUserAccessId, usrOrganizationId, name, pass, email)',
          'CREATE TABLE IF NOT EXISTS UserAccess (usaTitle, usaOrganizationId, usaEditUsers, usaEditOrgInfo, usaEditTemplate, usaEditRequired, FOREIGN KEY(usaOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS UserOrganizations (usoUserId, usoOrganizationId, FOREIGN KEY(usoUserId) REFERENCES User(rowId), FOREIGN KEY(usoOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS UserUsers (usuUserId, usuUserChildId, FOREIGN KEY(usuUserId) REFERENCES User(rowId))',
      ], function() {
          console.log('Batch statement completed successfully');
      }, function(error) {
          console.log('Error processing batch: ' + error.message);
      });
    }
    public.createUser = function (name, pass, email) {
      console.log('Creating User');
      db.transaction(function(tx) {
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
      var valid = false;
      var deferred = $q.defer();
        
      db.executeSql('SELECT * FROM User WHERE name = ? AND pass = ?', [name, pass], function(res) {
        if (res.rows.length > 0) {
          valid = true;
          console.log('valid set to true');
          deferred.resolve({validCreds: true, message: 'name found'});
        } else {
          console.log('Username not found in database');
          deferred.resolve({validCreds: false, message: 'name not found'});
        }
       }, function(error) {
         console.log('Error attempting SELECT to check user credentials');
         deferred.reject({validCreds: false, message: 'error attempting to execute SQL'});
       });
     return deferred.promise;
     }
  });
  return public;
  
});