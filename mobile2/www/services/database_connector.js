app.factory('database', function ($rootScope, $state, $q, database_mock) {
  var private = {};
  private.dbOptions = {
    'name': 'castle.db',
    'location': 'default'
  };
  var public = {};
  var db = null;

  document.addEventListener('deviceready', function () {
    db = window.sqlitePlugin.openDatabase(private.dbOptions);
  });

  // General use insert function to be used by controllers
  /*public.insert = function(query, params) {
      var deferred = $q.defer();
      
      db.executeSql(query, params, function(res) {
        console.log('Success: ' + res.rowsAffected);
        deferred.resolve({success: true, message: 'successful insertion of query: ' + query + ' using params: ' + params});
      }, function(error) {
        deferred.reject({success: false, message: 'error inserting using query: ' + query + ' using params: ' + params});
      });
      return deferred.promise;
  }*/

  if (window['sqlitePlugin'] == undefined) {
    public = database_mock;
  } else {
    public.initTables = function () {
      console.log('calling initTables');
      // Batch script to create all tables in db
      db.sqlBatch([
          'CREATE TABLE IF NOT EXISTS Answer (ansQuestionId, value, answerCol, FOREIGN KEY(ansQuestionid) REFERENCES Question(rowId))',
          'CREATE TABLE IF NOT EXISTS Client (cliFirstName, cliLastName, cliAddress, cliCity, cliState, cliZipCode, cliPhone, cliEmail)',
          'CREATE TABLE IF NOT EXISTS Inspection (insLastModified, insLastSubmitted, insJobId, insType, insName, insUserId, insThemeId, insThemeResponseBlob, insTemplateId, insTemplateResponseBlob, FOREIGN KEY(insUserId) REFERENCES User(rowId), FOREIGN KEY(insJobId) REFERENCES Job(rowId), FOREIGN KEY(insThemeId) REFERENCES Theme(rowId), FOREIGN KEY(insTemplateId) REFERENCES Template(rowId))',
          'CREATE TABLE IF NOT EXISTS Job (jobUserId, jobDate, jobAddress, jobZipCode, jobCity, jobState, jobStatus, jobSubmittedDate, FOREIGN KEY(jobUserId) REFERENCES User(rowId))',
          'CREATE TABLE IF NOT EXISTS Organization (orgName, orgAddress, orgLogo, orgCity, orgState, orgZipCode)',
          'CREATE TABLE IF NOT EXISTS Question (queTitle, queType, queSubSectionId, queAnswered, queRequired, FOREIGN KEY(queSubSectionId) REFERENCES SubSection(rowId))',
          'CREATE TABLE IF NOT EXISTS QuestionAnswers (quaQuestionId, quaAnswerId, FOREIGN KEY (quaQuestionId) REFERENCES Question(rowId), FOREIGN KEY(quaAnswerId) REFERENCES Answer(rowId))',
          'CREATE TABLE IF NOT EXISTS ReportHistory (rehInspectionId, rehLastModified, rehSubmittedDate, FOREIGN KEY(rehInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS Section (secTitle, secInspectionId, FOREIGN KEY(secInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS SubSection (susTitle, susSectionId, FOREIGN KEY(susSectionId) REFERENCES Section(rowId))',
          'CREATE TABLE IF NOT EXISTS Template (temOrganizationId, temTitle, temBlob, userId, FOREIGN KEY(userId) REFERENCES User(rowId), FOREIGN KEY(temOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS Theme (themeTitle, themeBlob, userId, FOREIGN KEY(userId) REFERENCES User(rowId))', 
          'CREATE TABLE IF NOT EXISTS User (usrAddress, usrFirstName, usrLastName, usrPhone, usrEmail, usrType, usrUserAccessId, usrOrganizationId, name, pass, email)',
          'CREATE TABLE IF NOT EXISTS UserAccess (usaTitle, usaOrganizationId, usaEditUsers, usaEditOrgInfo, usaEditTemplate, usaEditRequired, FOREIGN KEY(usaOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS UserOrganizations (usoUserId, usoOrganizationId, FOREIGN KEY(usoUserId) REFERENCES User(rowId), FOREIGN KEY(usoOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS UserUsers (usuUserId, usuUserChildId, FOREIGN KEY(usuUserId) REFERENCES User(rowId))',
      ], function () {
        console.log('Batch statement completed successfully');
      }, function (error) {
        console.log('Error processing batch: ' + error.message);
      });
    }
    public.createUser = function (name, pass, email) {
      console.log('Creating User');
      db.transaction(function (tx) {
        tx.executeSql('INSERT INTO User (name, pass, email) VALUES (?,?,?)', [name, pass, email]);
      }, function (error) {
        // TODO: Make sure insertion is unique / report that error to user
        console.log('Error Creating User: ' + error.message);
      }, function () {
        // Successful creation, navigate to home page
        console.log('Successful user creation');
        // TODO: move this part into login controller
        $rootScope.authenticated = true;
        $state.go('home');
      });
    }
    public.validCredentials = function (name, pass) {
      var deferred = $q.defer();

      db.executeSql('SELECT * FROM User WHERE name = ? AND pass = ?', [name, pass], function (res) {
        if (res.rows.length > 0) {
          deferred.resolve({
            validCreds: true,
            message: 'name found'
          });
        } else {
          console.log('Username not found in database');
          deferred.resolve({
            validCreds: false,
            message: 'name not found'
          });
        }
      }, function (error) {
        console.log('Error attempting SELECT to check user credentials');
        deferred.reject({
          validCreds: false,
          message: 'error attempting to execute SQL'
        });
      });
      return deferred.promise;
    }
    // report init
    public.initReports = function () {
      var deferred = $q.defer();

      db.sqlBatch([
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insType, insName, insUserId) Values (?, ?, ?, ?, ?, ?)',
        ['9-12-17', '9-12-17', 10, 'Residential', 'Smith Inspection', 1]],
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insType, insName, insUserId) Values (?, ?, ?, ?, ?, ?)',
        ['10-1-17', '9-11-17', 9, 'Residential', 'Jones Inspection', 1]],
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insType, insName, insUserId) Values (?, ?, ?, ?, ?, ?)',
        ['6-12-17', '6-12-17', 13, 'Residential', 'Smith Inspection', 1]],
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insType, insName, insUserId) Values (?, ?, ?, ?, ?, ?)',
        ['9-1-17', '9-1-17', 21, 'Residential', 'Smith Inspection', 1]],
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insType, insName, insUserId) Values (?, ?, ?, ?, ?, ?)',
        ['9-12-17', '9-12-17', 1, 'Commercial', 'Walmart Inspection', 1]],
      ], function (res) {
        deferred.resolve({
          success: true,
          message: 'successful dummy data insertion'
        });
      }, function (error) {
        deferred.reject({
          success: false,
          message: 'failure inserting dummy data'
        });
      });
      return deferred.promise;
    }

    public.getReports = function () {
      var deferred = $q.defer();

      db.executeSql('SELECT * FROM Inspection ORDER BY insLastSubmitted DESC', [], function (res) {
        if (res.rows.length > 0) {
          deferred.resolve({
            row: res.rows,
            message: 'Successful select from Inspection table'
          });
        } else {
          deferred.resolve({
            message: 'No data in Inspection table'
          });
        }
      }, function (error) {
        deferred.reject({
          message: 'Error trying to select from Inspection table'
        });
      });
      return deferred.promise;
    }

    public.initThemes = function() {
      var deferred = $q.defer();
      db.executeSql('INSERT INTO Theme(themeTitle, themeBlob, userId) VALUES (?, ?, ?)', 
                    ['Home Theme', 'a whole bunch of text', 1], function(res) {
        deferred.resolve({message: 'Theme insertion successful'});  
      }, function(error) {
        deferred.resolve({message: 'Theme insertion failed: ' + error.message});
      });
      return deferred.promise;
    }
    
    public.initTemplates = function() {
      var deferred = $q.defer();
      db.executeSql('INSERT INTO Template(temOrganizationId, temTitle, temBlob, userId) VALUES (?, ?, ?, ?)', 
                    [1, 'Home Template', 'a whole bunch more text', 1], function(res) {
        deferred.resolve({message: 'Template insertion successful'});  
      }, function(error) {
        deferred.resolve({message: 'Template insertion failed: ' + error.message});
      });
      return deferred.promise;
    }
    
    public.getThemes = function() {
      var deferred = $q.defer();
        
      db.executeSql('SELECT * FROM Theme', [], function(res) {
          if(res.rows.length > 0) {
            deferred.resolve({row: res.rows, message: 'Successful select from Theme table'});
          } else {
            deferred.resolve({message: 'No data in Theme table'});
          }
      }, function(error) {
          deferred.reject({message: 'Error trying to select from Theme table'});
      }); 
      return deferred.promise;
    }
    
    public.getTemplates = function() {
      var deferred = $q.defer();
        
      db.executeSql('SELECT * FROM Template', [], function(res) {
          if(res.rows.length > 0) {
            deferred.resolve({row: res.rows, message: 'Successful select from Template table'});
          } else {
            deferred.resolve({message: 'No data in Template table'});
          }
      }, function(error) {
          deferred.reject({message: 'Error trying to select from Template table'});
      }); 
      return deferred.promise;
    }

    public.initSections = function() {
      var deferred = $q.defer();
      db.sqlBatch([
        ['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', ['Field Notes', 1]],
        ['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', ['Site', 1]],
        ['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', ['Exterior', 1]],
        ['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', ['Roofing', 1]],
        ['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', ['Structural', 1]],
        ['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', ['Thermal', 1]],
        ['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', ['Plumbing', 1]],
        ['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', ['Heating', 1]],
        ['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', ['Cooling', 1]],
        ['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', ['Electrical', 1]],
        ['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', ['Interior', 1]],
        ['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', ['Life or Safety', 1]],
      ], function (res) {
        deferred.resolve({
          success: true,
          message: 'successful dummy data insertion'
        });
      }, function (error) {
        deferred.reject({
          success: false,
          message: 'failure inserting dummy data'
        });
      });
      return deferred.promise;        
    }
    
    public.getSections = function() {
      var deferred = $q.defer();
      db.executeSql('SELECT rowId, * FROM Section', [], function(res) {
        if(res.rows.length > 0) {
          deferred.resolve({row: res.rows, message: 'Successful select from Section'});
        } else {
          deferred.resolve({message: 'No data in Section table'});
        }
      }, function(error) {
        deferred.reject({message: 'Error trying to select from Section table'});
      });
      return deferred.promise;
    }
    
   public.initSubSection = function() {
      var deferred = $q.defer();
      db.sqlBatch([
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Observations', 1]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Evaluation', 2]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Attached Steps or Platforms', 2]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Siding or Wall Cladding', 3]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Wall Fenestrations', 3]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Attached Garage or Carport', 3]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Roof Covering(s)', 4]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Fenestrations', 4]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Gutters & Down-Spouts', 4]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Roof Framing (Visible in Attic)', 5]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Floor Framing', 5]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Foundation', 5]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Attic', 6]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Crawl Spaces or Unfinished Basements', 6]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Interior Ventilation or Exhaust Fans', 6]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Plumbing System', 7]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Faucets or Fixtures', 7]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Water Heater', 7]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Heating System', 8]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Central Furnace or Heat Pump', 8]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Ducting', 8]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Fireplaces or Stoves', 8]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Cooling Systems', 9]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Evaporative Coil or Heat Pump (Inside)', 9]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Compressor or Condenser (Outside)', 9]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Electrical System', 10]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Fixtures, Switches, or Detectors', 10]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Living Room', 11]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Kitchen', 11]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Laundry', 11]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Bathroom(s)', 11]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['General', 11]],
        ['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', ['Concerns', 12]],
      ], function (res) {
        deferred.resolve({
          success: true,
          message: 'successful dummy data insertion'
        });
      }, function (error) {
        deferred.reject({
          success: false,
          message: 'failure inserting dummy data'
        });
      });
      return deferred.promise;           
   }
   
   public.getSubSection = function() {
      var deferred = $q.defer();
      db.executeSql('SELECT rowId, * FROM SubSection', [], function(res) {
        if(res.rows.length > 0) {
          deferred.resolve({row: res.rows, message: 'Successful select from SubSection'});
        } else {
          deferred.resolve({message: 'No data in SubSection table'});
        }
      }, function(error) {
        deferred.reject({message: 'Error trying to select from SubSection table'});
      });
      return deferred.promise;       
   }
   
   /* SELECT USAGE
     var select = database.select('SELECT * FROM USER', []);
     select.then(
         function(promise) {
           console.log(promise.message);
           for(var i=0; i < promise.rows.length; i++) {
             console.log(promise.rows.item(i));
           }
         }, function(promise) {
           console.log(promise.message);
         }
     );
   */
   public.select = function(query, params) {
     var deferred = $q.defer();
     db.executeSql(query, params, function(res) {
       if(res.rows.length > 0) {
           deferred.resolve({rows: res.rows, message: 'Successful select'});
       } else {
           deferred.resolve({rows: [], message: 'No items found with current query: ' + query});
       }
     }, function(error) {
        deferred.reject({message: 'Error trying to run select query: ' + query});
     });
     return deferred.promise;
   }
  }
  return public;
});
