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
          'CREATE TABLE IF NOT EXISTS Answer (ansQuestionId INT, ansValue, ansType, ansInspectionId, ansSourceType, FOREIGN KEY(ansInspectionId) REFERENCES Inspection(rowId), FOREIGN KEY(ansQuestionid) REFERENCES Question(rowId))',
          'CREATE TABLE IF NOT EXISTS Client (cliFirstName, cliLastName, cliAddress, cliCity, cliState, cliZipCode, cliPhone, cliEmail)',
          'CREATE TABLE IF NOT EXISTS Inspection (insLastModified, insLastSubmitted, insJobId INT, insSourceType, insType, insName, insUserId INT, insThemeId INT, insThemeResponseBlob, insTemplateResponseBlob, insOrganizationId, insTemplateTitle, FOREIGN KEY(insOrganizationId) REFERENCES Organization(rowId), FOREIGN KEY(insUserId) REFERENCES User(rowId), FOREIGN KEY(insJobId) REFERENCES Job(rowId), FOREIGN KEY(insThemeId) REFERENCES Theme(rowId))',
          'CREATE TABLE IF NOT EXISTS Job (jobUserId INT, jobDate, jobAddress, jobZipCode, jobCity, jobState, jobStatus, jobSubmittedDate, FOREIGN KEY(jobUserId) REFERENCES User(rowId))',
          'CREATE TABLE IF NOT EXISTS Organization (orgName, orgAddress, orgLogo, orgCity, orgState, orgZipCode)',
          'CREATE TABLE IF NOT EXISTS Question (queTitle, queDescription, queSubSectionId INT, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType, FOREIGN KEY(queInspectionId) REFERENCES Inspection(rowId), FOREIGN KEY(queSubSectionId) REFERENCES SubSection(rowId))',
          'CREATE TABLE IF NOT EXISTS QuestionAnswers (quaQuestionId INT, quaAnswerId INT, quaInspectionId, quaSourceType, FOREIGN KEY (quaQuestionId) REFERENCES Question(rowId), FOREIGN KEY(quaAnswerId) REFERENCES Answer(rowId), FOREIGN KEY(quaInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS ReportHistory (rehInspectionId INT, rehLastModified, rehSubmittedDate, FOREIGN KEY(rehInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS Section (secTitle, secInspectionId INT, secSourceType, FOREIGN KEY(secInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS SubSection (susTitle, susSectionId INT, susInspectionId, susSourceType, FOREIGN KEY(susSectionId) REFERENCES Section(rowId), FOREIGN KEY(susInspectionId) REFRENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS Theme (themeTitle, themeBlob, userId INT, FOREIGN KEY(userId) REFERENCES User(rowId))', 
          'CREATE TABLE IF NOT EXISTS User (usrAddress, usrFirstName, usrLastName, usrPhone, usrEmail, usrType, usrUserAccessId, usrOrganizationId, name, pass, email)',
          'CREATE TABLE IF NOT EXISTS UserAccess (usaTitle, usaOrganizationId, usaEditUsers, usaEditOrgInfo, usaEditTemplate, usaEditRequired, FOREIGN KEY(usaOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS UserOrganizations (usoUserId INT, usoOrganizationId INT, FOREIGN KEY(usoUserId) REFERENCES User(rowId), FOREIGN KEY(usoOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS UserUsers (usuUserId INT, usuUserChildId INT, FOREIGN KEY(usuUserId) REFERENCES User(rowId))',
      ], function () {
        deferred.resolve({message: 'Batch statement completed successfully'});
        public.initThemes();
        public.initTemplates();
        public.initSections();
        public.initSubSections();
        public.initFullInspection();
        public.initReports();
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
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insSourceType, insType, insName, insUserId, insTemplateTitle) Values (?, ?, ?, ?, ?, ?, ?, ?)',
        ['9-12-17', '9-12-17', 10, 'Template', 'Residential', 'Smith Inspection', 1, 'Residential Template']],
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insSourceType, insType, insName, insUserId, insTemplateTitle) Values (?, ?, ?, ?, ?, ?, ?, ?)',
        ['10-1-17', '9-11-17', 9, 'Inspection', 'Residential', 'Jones Inspection', 1, null]],
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insSourceType, insType, insName, insUserId, insTemplateTitle) Values (?, ?, ?, ?, ?, ?, ?, ?)',
        ['6-12-17', '6-12-17', 13, 'Inspection', 'Residential', 'Smith Inspection', 1, null]],
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insSourceType, insType, insName, insUserId, insTemplateTitle) Values (?, ?, ?, ?, ?, ?, ?, ?)',
        ['9-1-17', '9-1-17', 21, 'Inspection', 'Residential', 'Smith Inspection', 1, null]],
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insSourceType, insType, insName, insUserId, insTemplateTitle) Values (?, ?, ?, ?, ?, ?, ?, ?)',
        ['9-12-17', '9-12-17', 1, 'Template', 'Commercial', 'Walmart Inspection', 1, 'Commercial Template']],
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
        'insId': 0, 
        'sections':[
            {
                'title':'Colors',
                'subSections':[
            {
            'title':'Cool Colors',
            'questions':[{
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

      db.executeSql('SELECT rowId as insId, * FROM Inspection WHERE insSourceType = ? ORDER BY insLastSubmitted DESC', ['Inspection'], function (res) {
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
        
      db.executeSql('SELECT * FROM Inspection ins WHERE insSourceType = ?', ['Template'], function(res) {
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
      console.log('db initSections being called');
      var deferred = $q.defer();
      db.sqlBatch([
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Field Notes', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Site', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Exterior', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Roofing', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Structural', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Thermal', , 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Plumbing', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Heating', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Cooling', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Electrical', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Interior', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Life or Safety', 1, 'Template']],
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
    
    public.getSections = function(inspectionId) {
      var inspId = parseInt(inspectionId);
      console.log('db getSections Inspection Id: ' + inspId);
      console.log(typeof(inspId));
      var deferred = $q.defer();
      db.executeSql('SELECT rowId AS [rowId], secTitle AS [title], secInspectionId FROM Section WHERE secInspectionId = ?', [inspId], function(res) {
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
      console.log('db initSubSections');
      var deferred = $q.defer();
      db.sqlBatch([
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Observations', 1, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Evaluation', 2, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Attached Steps or Platforms', 2, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Siding or Wall Cladding', 3, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Wall Fenestrations', 3, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Attached Garage or Carport', 3, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Roof Covering(s)', 4, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Fenestrations', 4, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Gutters & Down-Spouts', 4, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Roof Framing (Visible in Attic)', 5, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Floor Framing', 5, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Foundation', 5, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Attic', 6, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Crawl Spaces or Unfinished Basements', 6, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Interior Ventilation or Exhaust Fans', 6, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Plumbing System', 7, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Faucets or Fixtures', 7, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Water Heater', 7, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Heating System', 8, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Central Furnace or Heat Pump', 8, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Ducting', 8, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Fireplaces or Stoves', 8, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Cooling Systems', 9, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Evaporative Coil or Heat Pump (Inside)', 9, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Compressor or Condenser (Outside)', 9, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Electrical System', 10, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Fixtures, Switches, or Detectors', 10, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Living Room', 11, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Kitchen', 11, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Laundry', 11, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Bathroom(s)', 11, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['General', 11, 1, 'Template']],
        ['INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) Values (?, ?, ?, ?)', ['Concerns', 12, 1, 'Template']],
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
      console.log('db getSubSections');
      var deferred = $q.defer();
      db.executeSql('SELECT rowId AS [rowId], susTitle AS [title], susSectionId FROM SubSection WHERE susSectionId = ?', [sectionId], function(res) {
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
   
   public.getQuestions = function(subSectionId) {
      console.log('db getQuestions');
      var deferred = $q.defer();
      db.executeSql('SELECT rowId AS [rowId], queTitle AS [title], queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription FROM Question WHERE queSubSectionId = ?', [sectionId], function(res) {
        if(res.rows.length > 0) {
          deferred.resolve({row: res.rows, message: 'Successful select from Question'});
        } else {
          deferred.resolve({message: 'No data in Question table'});
        }
      }, function(error) {
        deferred.reject({message: 'Error trying to select from Question table'});
      });
      return deferred.promise;    
   }
   // Insert Necessary Data for Full Inspection
   public.initFullInspection = function() {
     console.log('db initFullInspection');
     var deferred = $q.defer();
     db.sqlBatch([
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Person(s) Present', '', 1, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Person(s) Providing Property Access', '', 1, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Year Built', '', 1, false, true, 'number', 1700, 2017, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Square Feet of the Property', '', 1, false, true, 'number', 0, 50000, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Type of Property', '', 1, false, true, 'radio', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Property Use', '', 1, false, true, 'radio', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Number of Stories', '', 1, false, true, 'radio', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Building Frame', '', 1, false, true, 'radio', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Building Type', '', 1, false, true, 'radio', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Property Configurations', '', 1, false, true, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Property Orientation', '', 1, false, false, 'dropdown', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Vehicle Parking', '', 1, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Utilities', '', 1, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['What Utilities were OFF', '', 1, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Property Occupancy', '', 1, false, true, 'dropdown', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Observation Images', '', 1, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Person(s) Present
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [1, 'Inspector', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [1, 'Buyer', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [1, 'Resident', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [1, 'Builder of Builders Rep', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [1, 'Owner or Seller', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [1, 'Agent', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [1, 'Friends or Other', 'multi', 1, 'Template']],
        // Person(s) Providing Property Access
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [2, 'Inspector', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [2, 'Buyer', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [2, 'Resident', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [2, 'Builder of Builders Rep', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [2, 'Owner or Seller', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [2, 'Agent', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [2, 'Friends or Other', 'multi', 1, 'Template']],
        // Year Built
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [3, null, 'single', 1, 'Template']],
        // Square Feet of the Property
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [4, null, 'single', 1, 'Template']],
        // Type of Property
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [5, 'Single Family', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [5, 'Single Use', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [5, 'Multiple Use', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [5, 'Duplex', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [5, 'Triplex', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [5, 'Multi Family', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [5, 'Detached', 'single', 1, 'Template']],
        // Property Use
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [6, 'Residential', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [6, 'Apartment', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [6, 'Retail Store', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [6, 'Business', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [6, 'Industrial', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [6, 'Commercial', 'single', 1, 'Template']],
        // Number of Stories
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [7, 'Rambler', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [7, 'One Level', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [7, 'Split-Entry', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [7, 'Split-Level', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [7, 'One Story', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [7, 'Two Story', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [7, 'Three Story', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [7, 'Mid-Rise', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [7, 'Multi-Level', 'single', 1, 'Template']],
        // Building Frame
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [8, 'Wood-Framed', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [8, 'Steel-Framed', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [8, 'Concrete', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [8, 'CMU or Block', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [8, 'Masonry', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [8, 'Tilt-Up', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [8, 'Wood-Frame on Steel Carriage', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [8, 'ICF', 'single', 1, 'Template']],
        //Building Type
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'Home', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'Twin Home', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'Town Home', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'Mobile Home', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'Log Home', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'Manucfactured Home', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'Prefabbed Structure', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'Condominium', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'Building', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'Garage', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'Low-Rise', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'Mid-Rise', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [9, 'High-Rise', 'single', 1, 'Template']],
        // Property Configurations
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [10, 'With Lower Parking Garage', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [10, 'With Basement & Garage', 'multi', 1, 'Template']], 
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [10, 'With Garage', 'multi', 1, 'Template']], 
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [10, 'With Garage & Crawlspace', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [10, 'With Full Basement', 'multi', 1, 'Template']], 
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [10, 'With Daylight Basement', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [10, 'With Basement & Crawlspace(s)', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [10, 'With Slab-On-Grade', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [10, 'Over Adjoining Unit(s)', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [10, 'Over Adjoining Basement Unit', 'multi', 1, 'Template']],
        // Property Orientation
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [11, 'North', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [11, 'East', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [11, 'West', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [11, 'South', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [11, 'North-East', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [11, 'North-West', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [11, 'South-East', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [11, 'South-West', 'single', 1, 'Template']],
        // Vehicle Parking
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [12, 'At Curbside', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [12, 'In a Rear Alley', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [12, 'In the Driveway', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [12, 'In an Attached Garage(s)', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [12, 'In a Detached Garage(s)', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [12, 'In an Attached Carport', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [12, 'In a Detached Carport', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [12, 'In a Covered Parking Space', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [12, 'In an Open Parking Space', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [12, 'In a Secured Parking Garage', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [12, 'In an Open Parking Garage', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [12, 'In an Open, Striped Parking Lot', 'multi', 1, 'Template']],
        // Utilities
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [13, 'Electricity', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [13, 'Water', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [13, 'Gas', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [13, 'Oil', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [13, 'Propane', 'multi', 1, 'Template']],
        // What Utilities Were Off
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [14, 'Electricity', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [14, 'Water', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [14, 'Gas', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [14, 'Oil', 'multi', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [14, 'Propane', 'multi', 1, 'Template']],
        // Property occupancy
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [15, 'Occupied', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [15, 'Mostly Occupied', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [15, 'Mostly Vacant', 'single', 1, 'Template']],
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [15, 'Vacant', 'single', 1, 'Template']],
        // Observation Images
        ['INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) Values (?, ?, ?, ?, ?)', [16, null, 'photo', 1, 'Template']],
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
       var inspId = parseInt(inspectionId); // ensure id is an int
       console.log('db getInspectionById ID: ' + inspId);
       console.log(typeof(inspId));
       var deferred = $q.defer();
       db.executeSql(
           'SELECT *, insp.rowid AS [rowId], sec.rowid AS [secRowId], subsec.rowid AS [susRowId], ques.rowid AS [queRowId], ans.rowid AS [ansRowId] FROM Inspection insp JOIN Section sec on sec.secInspectionId = insp.rowid JOIN SubSection subsec ON subsec.susSectionId = sec.rowId LEFT JOIN Question ques ON ques.queSubSectionId = subsec.rowid LEFT JOIN Answer ans ON ans.ansQuestionId = ques.rowid WHERE insp.rowid = ? ORDER BY sec.rowid, subsec.rowid, ques.rowid, ans.rowid'
           , [inspId], function(res) {
           if(res.rows.length > 0) {
             deferred.resolve({row: res.rows, message: "Successful select of all Inspection data for Inspection#: " + inspId});
           } else {
             deferred.resolve({row: [], message: 'No associated tables had data'});
           }
       }, function(error) {
           deferred.reject({message: 'Error executing full inspection select statement: ' + error.message});
       });
       return deferred.promise;
   }
   
   // Copies inspection, section, subsection, question, answer to new rows so they can be altered
   // without affecting the 'master copy'
   public.copyTemplateToInspection = function(inspectionId) {
       
   }
   
   // Overwrite the copied template with the actual data of the save
   public.saveInspection = function(ins) {
     var timestamp = new Date();
     console.log('saveInspection start');
     console.log(ins);
     var deferred = $q.defer();
     // Insert Inspection Table Data
     db.executeSql('INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insSourceType, insType, insName, insUserId, insThemeId, insOrganizationId, insTemplateTitle) VALUES (?,?,?,?,?,?,?,?,?,?)', [timestamp, timestamp, ins.insJobId, ins.insSourceType, ins.insType, ins.insName, ins.insUserId, ins.insThemeId, ins.insOrganizationId, ins.insTemplateTitle], function(res) {
         //if this is successful, attempt to insert section data
         ins.sections.forEach(function(section) {
           db.executeSql('INSERT INTO Section (secTitle, secInspectionId) VALUES (?,?)', [section.title, res.insertId], function(secRes) {
               console.log(section.title + ' section succesfully inserted. ID: ' + secRes.insertId);
               //if this is successful, attempt to insert subsection data
               section.subsections.forEach(function(subsection) {
                 db.executeSql('INSERT INTO SubSection (susTitle, susSectionId) VALUES (?,?)', [subsection.title, secRes.insertId], function(susRes) {
                   console.log(subsection.title + ' subsection successfully inserted. ID: ' + susRes.insertId);
                   // If this is successful, attempt to insert question data
                   subsection.questions.forEach(function(question) {
                     db.executeSql('INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [question.title, question.description, secRes.insertId, (question.answers && question.answers.length > 0) || question.answer, question.validation.isRequired, question.validation.type, question.validation.min, question.validation.max, question.notApplicable, question.showSummaryRemark, question.showDescription], function(queRes) {
                       console.log(question.title + ' question successfully inserted. ID: ' + queRes.insertId); 
                       // If this is successful, attempt to insert answer data
                       question.values.forEach(function(answer) {
                         db.executeSql('INSERT INTO Answer (ansQuestionId, ansValue, ansType) VALUES (?,?,?)', [queRes.insertId, answer.key, ], function(ansRes) {
                           console.log(answer.key + ' answer successfully inserted. ID: ' + ansRes.insertId);
                           // If this is successful, attempt to insert question-answer data
                           if(answer.key == question.answer || (question.answers && question.answers.indexOf(answer.key) > -1)) {
                             db.executeSql('INSERT INTO QuestionAnswers (quaQuestionId, quaAnswerId) VALUES (?,?)', [queRes.insertId, ansRes.insertId], function(queAnsRes) {
                               console.log('Successfully inserted saved answer: ' + answer.key + ' for question title: ' + question.title + '.');
                             }, function(queAnsError) {
                               deferred.reject({message: 'Error with QuestionAnswer save: ' + queAnsError.message});     
                             });
                           }
                         }, function(ansError) {
                           deferred.reject({message: 'Error with Answer save: ' + ansError.message});
                         });
                       });
                     }, function(queError) {
                       deferred.reject({message: 'Error with Question save: ' + queError.message});   
                     });
                   });
                 }, function(susError) {
                   console.log('failed subsec insert: ' + susError.message);
                   deferred.reject({message: 'Error with SubSection save: ' + susError.message});
                 });
               });
           }, function(secError) {
               deferred.reject({message: 'Error with Section save: ' + secError.message});
           });
         });
         deferred.resolve({rowId: res.insertId, message: 'Successful save into inspection table'});
     }, function(error) {
         //if failure, log the failure
         deferred.reject({message: 'Error saving Inspection: ' + error.message}); 
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
