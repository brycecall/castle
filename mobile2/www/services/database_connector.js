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
          'CREATE TABLE IF NOT EXISTS Inspection (insLastModified, insLastSubmitted, insJobId, insType, insName, insUserId, insThemeId, insThemeBlob, insTemplateId, insTemplateBlob, FOREIGN KEY(insUserId) REFERENCES User(rowId), FOREIGN KEY(insJobId) REFERENCES Job(rowId), FOREIGN KEY(insThemeId) REFERENCES Theme(rowId), FOREIGN KEY(insTemplateId) REFERENCES Template(rowId))',
          'CREATE TABLE IF NOT EXISTS Job (jobUserId, jobDate, jobAddress, jobZipCode, jobCity, jobState, jobStatus, jobSubmittedDate, FOREIGN KEY(jobUserId) REFERENCES User(rowId))',
          'CREATE TABLE IF NOT EXISTS Organization (orgName, orgAddress, orgLogo, orgCity, orgState, orgZipCode)',
          'CREATE TABLE IF NOT EXISTS Question (queTitle, queType, queSubSectionId, queAnswered, queRequired, FOREIGN KEY(queSubSectionId) REFERENCES SubSection(rowId))',
          'CREATE TABLE IF NOT EXISTS QuestionAnswers (quaQuestionId, quaAnswerId, FOREIGN KEY (quaQuestionId) REFERENCES Question(rowId), FOREIGN KEY(quaAnswerId) REFERENCES Answer(rowId))',
          'CREATE TABLE IF NOT EXISTS ReportHistory (rehInspectionId, rehLastModified, rehSubmittedDate, FOREIGN KEY(rehInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS Section (secTitle, secInspectionId, secColor, FOREIGN KEY(secInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS SubSection (susTitle, susSectionId, FOREIGN KEY(susSectionId) REFERENCES Section(rowId))',
          'CREATE TABLE IF NOT EXISTS Template (temOrganizationId, temTitle, temBlob, FOREIGN KEY(temOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS Theme (themeTitle, themeBlob)', 
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
        tx.executeSql('INSERT INTO User (name, pass, email) VALUES (?,?,?)', [name, pass, email]);
      }, function(error) {
        // TODO: Make sure insertion is unique / report that error to user
        console.log('Error Creating User: ' + error.message);
      }, function() {
          // Successful creation, navigate to home page
          console.log('Successful user creation');
          // TODO: move this part into login controller
          $rootScope.authenticated = true;
          $state.go('home');
      });  
    }
    public.validCredentials = function (name, pass) {
      var deferred = $q.defer();
        
      db.executeSql('SELECT * FROM User WHERE name = ? AND pass = ?', [name, pass], function(res) {
        if (res.rows.length > 0) {
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
    // report init
    public.initReports = function () {
      var deferred = $q.defer();
        
      db.executeSql('INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insType, insName, insUserId) Values (?, ?, ?, ?, ?, ?)', 
                    ['9-12-17', '9-12-17', 10, 'Residential', 'Smith Inspection', 1], function(res) {
        deferred.resolve({success: true, message: 'successful dummy data insertion'});
      }, function(error) {
        deferred.reject({success: false, message: 'failure inserting dummy data'});
      });
      return deferred.promise;
    }
    
    public.getReports = function () {
      var deferred = $q.defer();
        
      db.executeSql('SELECT * FROM Inspection', [], function(res) {
        if(res.rows.length > 0) {
          deferred.resolve({row: res.rows.item(0), message: 'Successful select from Inspection table'});
        } else {
          deferred.resolve({message: 'No data in Inspection table'});    
        }     
      }, function(error) {
        deferred.reject({message: 'Error trying to select from Inspection table'});  
      });
      return deferred.promise;
    }
  });
  return public;
  
});