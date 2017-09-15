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
      var deferred = $q.defer();
      public.dropAllTables();
      console.log('calling initTables');
      // Batch script to create all tables in db
      db.sqlBatch([
          'CREATE TABLE IF NOT EXISTS Answer (ansQuestionId INT, ansValue, ansType, FOREIGN KEY(ansQuestionid) REFERENCES Question(rowId))',
          'CREATE TABLE IF NOT EXISTS Client (cliFirstName, cliLastName, cliAddress, cliCity, cliState, cliZipCode, cliPhone, cliEmail)',
          'CREATE TABLE IF NOT EXISTS Inspection (insLastModified, insLastSubmitted, insJobId INT, insType, insName, insUserId INT, insThemeId INT, insThemeResponseBlob, insTemplateId INT, insTemplateResponseBlob, FOREIGN KEY(insUserId) REFERENCES User(rowId), FOREIGN KEY(insJobId) REFERENCES Job(rowId), FOREIGN KEY(insThemeId) REFERENCES Theme(rowId), FOREIGN KEY(insTemplateId) REFERENCES Template(rowId))',
          'CREATE TABLE IF NOT EXISTS Job (jobUserId INT, jobDate, jobAddress, jobZipCode, jobCity, jobState, jobStatus, jobSubmittedDate, FOREIGN KEY(jobUserId) REFERENCES User(rowId))',
          'CREATE TABLE IF NOT EXISTS Organization (orgName, orgAddress, orgLogo, orgCity, orgState, orgZipCode)',
          'CREATE TABLE IF NOT EXISTS Question (queTitle, queDescription, queSubSectionId INT, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, FOREIGN KEY(queSubSectionId) REFERENCES SubSection(rowId))',
          'CREATE TABLE IF NOT EXISTS QuestionAnswers (quaQuestionId INT, quaAnswerId INT, FOREIGN KEY (quaQuestionId) REFERENCES Question(rowId), FOREIGN KEY(quaAnswerId) REFERENCES Answer(rowId))',
          'CREATE TABLE IF NOT EXISTS ReportHistory (rehInspectionId INT, rehLastModified, rehSubmittedDate, FOREIGN KEY(rehInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS Section (secTitle, secInspectionId INT, FOREIGN KEY(secInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS SubSection (susTitle, susSectionId INT, FOREIGN KEY(susSectionId) REFERENCES Section(rowId))',
          'CREATE TABLE IF NOT EXISTS Template (temOrganizationId INT, temTitle, temBlob, userId INT, FOREIGN KEY(userId) REFERENCES User(rowId), FOREIGN KEY(temOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS Theme (themeTitle, themeBlob, userId INT, FOREIGN KEY(userId) REFERENCES User(rowId))', 
          'CREATE TABLE IF NOT EXISTS User (usrAddress, usrFirstName, usrLastName, usrPhone, usrEmail, usrType, usrUserAccessId, usrOrganizationId, name, pass, email)',
          'CREATE TABLE IF NOT EXISTS UserAccess (usaTitle, usaOrganizationId, usaEditUsers, usaEditOrgInfo, usaEditTemplate, usaEditRequired, FOREIGN KEY(usaOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS UserOrganizations (usoUserId INT, usoOrganizationId INT, FOREIGN KEY(usoUserId) REFERENCES User(rowId), FOREIGN KEY(usoOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS UserUsers (usuUserId INT, usuUserChildId INT, FOREIGN KEY(usuUserId) REFERENCES User(rowId))',
      ], function () {
        deferred.resolve({message: 'Batch statement completed successfully'});
        public.initReports();
        public.initThemes();
        public.initTemplates();
        public.initSections();
        public.initSubSections();
        public.initFullInspection();
      }, function (error) {
        deferred.reject({message: 'Error processing batch: ' + error.message});
      });
      return deferred.promise;
    }
    
    public.dropAllTables = function () {
      var deferred = $q.defer();
      // Batch script to create all tables in db
      db.sqlBatch([
          'DROP TABLE IF EXISTS Answer',
          'DROP TABLE IF EXISTS Client',
          'DROP TABLE IF EXISTS Inspection',
          'DROP TABLE IF EXISTS Job',
          'DROP TABLE IF EXISTS Organization',
          'DROP TABLE IF EXISTS Question',
          'DROP TABLE IF EXISTS QuestionAnswers',
          'DROP TABLE IF EXISTS ReportHistory',
          'DROP TABLE IF EXISTS Section',
          'DROP TABLE IF EXISTS SubSection',
          'DROP TABLE IF EXISTS Template',
          'DROP TABLE IF EXISTS Theme',
          'DROP TABLE IF EXISTS User',
          'DROP TABLE IF EXISTS UserAccess',
          'DROP TABLE IF EXISTS UserOrganizations',
          'DROP TABLE IF EXISTS UserUsers',
      ], function () {
        deferred.resolve({message: 'Batch drop statement completed successfully'});
      }, function (error) {
        deferred.reject({message :'Error processing batch: ' + error.message});
      });
      return deferred.promise;
    }
    
    public.createUser = function (name, pass, email) {
      var deferred = $q.defer();
        
      db.transaction(function (tx) {
        tx.executeSql('INSERT INTO User (name, pass, email) VALUES (?,?,?)', [name, pass, email]);
      }, function (error) {
        // TODO: Make sure insertion is unique / report that error to user
        deferred.reject({message: 'Error Creating User: ' + error.message});
      }, function () {
        // Successful creation, navigate to home page
        deferred.resolve({message: 'Successful user creation'});
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
    
 /* TODO actually use the database */
  public.getInspection = function (id) {
    var deferred = $q.defer();
    deferred.resolve({
        insLastModified: '9-12-17', 
        insLastSubmitted: '9-12-17', 
        insJobId: 10, 
        insType: 'Residential', 
        insName: 'Smith Inspection', 
        insUserId: 1,
        'rowId':0, 
        'sections':[{'subSections':[{'questions':[{
        'title': 'What are your favorite colors?',
        'description': 'Just pick the ones you actually like.',
        'type': 'photo',
        'values': [
          {
            'key': 'orange',
            'remark': ''
                },
          {
            'key': 'red'
                },
          {
            'key': 'green'
                },
          {
            'key': 'pink'
                },
          {
            'key': 'purple mountain majesty'
                },
          {
            'key': 'yellow'
                }
            ],
        'answers': [
                'orange'
            ],
        'answer': null,
        'value': null,
        'validation': {
          'type': 'number',
          'min': null,
          'max': null,
          'isRequired': true
        },
        'notApplicable': false,
        'severity': null,
        'showSummaryRemark':true,
        'showDescription':true,
        'photos':[]
      }]}]}]});
    return deferred.promise;
  };

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
      db.executeSql('SELECT rowId AS [rowId], * FROM Section', [], function(res) {
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
    
   public.initSubSections = function() {
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
   
   public.getSubSections = function(sectionId) {
      var deferred = $q.defer();
      db.executeSql('SELECT rowId AS [rowId], * FROM SubSection WHERE susSectionId = ?', [sectionId], function(res) {
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
   
   // Insert Necessary Data for Full Inspection
   public.initFullInspection = function() {
     var deferred = $q.defer();
     db.sqlBatch([
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Person(s) Present', '', 1, false, false, 'checkbox', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Person(s) Providing Property Access', '', 1, false, false, 'checkbox', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Year Built', '', 1, false, true, 'number', 1700, 2017, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Square Feet of the Property', '', 1, false, true, 'number', 0, 50000, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Type of Property', '', 1, false, true, 'radio', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Property Use', '', 1, false, true, 'radio', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Number of Stories', '', 1, false, true, 'radio', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Building Frame', '', 1, false, true, 'radio', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Building Type', '', 1, false, true, 'radio', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Property Configurations', '', 1, false, true, 'checkbox', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Property Orientation', '', 1, false, false, 'dropdown', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Vehicle Parking', '', 1, false, false, 'checkbox', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Utilities', '', 1, false, false, 'checkbox', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['What Utilities were OFF', '', 1, false, false, 'checkbox', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Property Occupancy', '', 1, false, true, 'dropdown', null, null, false, true, true]],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Observation Images', '', 1, false, false, 'photo', null, null, false, true, true]],
        // Person(s) Present
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [1, 'Inspector', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [1, 'Buyer', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [1, 'Resident', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [1, 'Builder of Builders Rep', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [1, 'Owner or Seller', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [1, 'Agent', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [1, 'Friends or Other', 'multi']],
        // Person(s) Providing Property Access
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [2, 'Inspector', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [2, 'Buyer', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [2, 'Resident', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [2, 'Builder of Builders Rep', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [2, 'Owner or Seller', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [2, 'Agent', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [2, 'Friends or Other', 'multi']],
        // Year Built
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [3, null, 'single']],
        // Square Feet of the Property
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [4, null, 'single']],
        // Type of Property
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [5, 'Single Family', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [5, 'Single Use', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [5, 'Multiple Use', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [5, 'Duplex', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [5, 'Triplex', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [5, 'Multi Family', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [5, 'Detached', 'single']],
        // Property Use
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [6, 'Residential', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [6, 'Apartment', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [6, 'Retail Store', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [6, 'Business', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [6, 'Industrial', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [6, 'Commercial', 'single']],
        // Number of Stories
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [7, 'Rambler', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [7, 'One Level', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [7, 'Split-Entry', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [7, 'Split-Level', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [7, 'One Story', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [7, 'Two Story', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [7, 'Three Story', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [7, 'Mid-Rise', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [7, 'Multi-Level', 'single']],
        // Building Frame
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [8, 'Wood-Framed', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [8, 'Steel-Framed', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [8, 'Concrete', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [8, 'CMU or Block', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [8, 'Masonry', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [8, 'Tilt-Up', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [8, 'Wood-Frame on Steel Carriage', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [8, 'ICF', 'single']],
        //Building Type
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'Home', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'Twin Home', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'Town Home', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'Mobile Home', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'Log Home', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'Manucfactured Home', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'Prefabbed Structure', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'Condominium', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'Building', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'Garage', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'Low-Rise', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'Mid-Rise', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [9, 'High-Rise', 'single']],
        // Property Configurations
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [10, 'With Lower Parking Garage', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [10, 'With Basement & Garage', 'multi']], 
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [10, 'With Garage', 'multi']], 
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [10, 'With Garage & Crawlspace', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [10, 'With Full Basement', 'multi']], 
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [10, 'With Daylight Basement', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [10, 'With Basement & Crawlspace(s)', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [10, 'With Slab-On-Grade', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [10, 'Over Adjoining Unit(s)', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [10, 'Over Adjoining Basement Unit', 'multi']],
        // Property Orientation
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [11, 'North', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [11, 'East', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [11, 'West', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [11, 'South', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [11, 'North-East', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [11, 'North-West', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [11, 'South-East', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [11, 'South-West', 'single']],
        // Vehicle Parking
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [12, 'At Curbside', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [12, 'In a Rear Alley', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [12, 'In the Driveway', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [12, 'In an Attached Garage(s)', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [12, 'In a Detached Garage(s)', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [12, 'In an Attached Carport', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [12, 'In a Detached Carport', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [12, 'In a Covered Parking Space', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [12, 'In an Open Parking Space', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [12, 'In a Secured Parking Garage', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [12, 'In an Open Parking Garage', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [12, 'In an Open, Striped Parking Lot', 'multi']],
        // Utilities
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [13, 'Electricity', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [13, 'Water', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [13, 'Gas', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [13, 'Oil', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [13, 'Propane', 'multi']],
        // What Utilities Were Off
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [14, 'Electricity', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [14, 'Water', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [14, 'Gas', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [14, 'Oil', 'multi']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [14, 'Propane', 'multi']],
        // Property occupancy
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [15, 'Occupied', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [15, 'Mostly Occupied', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [15, 'Mostly Vacant', 'single']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [15, 'Vacant', 'single']],
        // Observation Images
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType) Values (?, ?, ?)', [16, null, 'photo']],
        //['INSERT INTO QuestionAnswers (quaQuestionId INT, quaAnswerId INT) VALUES (?, ?)', []],
        //['INSERT INTO SubSection (susTitle, susSectionId) Values (?, ?)', []],
        //['INSERT INTO Section (secTitle, secInspectionId) Values (?, ?)', []],
        //['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insType, insName, insUserId, insThemeId, insThemeResponseBlob, insTemplateId, insTemplateResponseBlob) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', []],
      ], function (res) {
        deferred.resolve({
          success: true,
          message: 'successful full inspection dummy data insertion'
        });
      }, function (error) {
        deferred.reject({
          success: false,
          message: 'failure inserting full inspection dummy data ' + error.message
        });
      });
       return deferred.promise;
   }
   
   public.getInspectionById = function(inspectionId) {
       var deferred = $q.defer();
       db.executeSql('SELECT * FROM Answer AS ans LEFT JOIN Question AS ques ON ques.rowid = ans.ansQuestionId LEFT JOIN SubSection AS subsec ON subsec.rowid = ques.queSubSectionId LEFT JOIN Section AS sec ON sec.rowid = subsec.susSectionId LEFT JOIN Inspection AS insp on insp.rowid = sec.secInspectionId WHERE insp.rowid = ?', [inspectionId], function(res) {
           if(res.rows.length > 0) {
             deferred.resolve({row: res.rows, message: "Successful select of all Inspection data for Inspection#: " + inspectionId});
           } else {
             deferred.resolve({row: [], message: 'No associated tables had data'});
           }
       }, function(error) {
           deferred.reject({message: 'Error executing full inspection select statement: ' + error.message});
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
