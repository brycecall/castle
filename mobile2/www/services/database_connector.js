app.factory('database', function ($rootScope, $state, $q, database_mock) {
  var private = {};
  private.dbOptions = {
    'name': 'castle.db',
    'location': 'default'
  };
  var public = {};
  var db = null;

  if (window['sqlitePlugin'] == undefined) {
    public = database_mock;
  }
  document.addEventListener('deviceready', function () {
    db = window.sqlitePlugin.openDatabase(private.dbOptions);

    public.initTables = function () {
      var deferred = $q.defer();
      public.dropAllTables();
      console.log('calling initTables');
      // Batch script to create all tables in db
      db.sqlBatch([
          'CREATE TABLE IF NOT EXISTS Answer (ansQuestionId INT, ansValue, ansType, ansInspectionId, ansSourceType, FOREIGN KEY(ansInspectionId) REFERENCES Inspection(rowId), FOREIGN KEY(ansQuestionid) REFERENCES Question(rowId))',
          'CREATE TABLE IF NOT EXISTS Client (cliFirstName, cliLastName, cliAddress, cliCity, cliState, cliZipCode, cliPhone, cliEmail)',
          'CREATE TABLE IF NOT EXISTS Inspection (insLastModified, insLastSubmitted, insJobId INT, insSourceType, insType, insName, insUserId INT, insThemeId INT, insThemeResponseBlob, insTemplateResponseBlob, insOrganizationId, insTemplateId, insTemplateTitle, FOREIGN KEY(insOrganizationId) REFERENCES Organization(rowId), FOREIGN KEY(insUserId) REFERENCES User(rowId), FOREIGN KEY(insJobId) REFERENCES Job(rowId), FOREIGN KEY(insThemeId) REFERENCES Theme(rowId))',
          'CREATE TABLE IF NOT EXISTS Job (jobUserId INT, jobDate, jobAddress, jobZipCode, jobCity, jobState, jobStatus, jobSubmittedDate, FOREIGN KEY(jobUserId) REFERENCES User(rowId))',
          'CREATE TABLE IF NOT EXISTS Organization (orgName, orgAddress, orgLogo, orgCity, orgState, orgZipCode)',
          'CREATE TABLE IF NOT EXISTS Photo (phoBase64, phoQuestionId, phoInspectionId, FOREIGN KEY(phoQuestionId) REFERENCES Question(rowId), FOREIGN KEY(phoInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS Question (queTitle, queDescription, queSubSectionId INT, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType, FOREIGN KEY(queInspectionId) REFERENCES Inspection(rowId), FOREIGN KEY(queSubSectionId) REFERENCES SubSection(rowId))',
          'CREATE TABLE IF NOT EXISTS QuestionAnswers (quaQuestionId INT, quaAnswerId INT, quaInspectionId, quaSourceType, FOREIGN KEY (quaQuestionId) REFERENCES Question(rowId), FOREIGN KEY(quaAnswerId) REFERENCES Answer(rowId), FOREIGN KEY(quaInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS ReportHistory (rehInspectionId INT, rehLastModified, rehSubmittedDate, FOREIGN KEY(rehInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS Section (secTitle, secInspectionId INT, secSourceType, FOREIGN KEY(secInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS SubSection (susTitle, susSectionId INT, susInspectionId, susSourceType, FOREIGN KEY(susSectionId) REFERENCES Section(rowId), FOREIGN KEY(susInspectionId) REFERENCES Inspection(rowId))',
          'CREATE TABLE IF NOT EXISTS Theme (themeTitle, themeBlob, userId INT, FOREIGN KEY(userId) REFERENCES User(rowId))',
          'CREATE TABLE IF NOT EXISTS User (usrAddress, usrFirstName, usrLastName, usrPhone, usrEmail, usrType, usrUserAccessId, usrOrganizationId, name, pass, email)',
          'CREATE TABLE IF NOT EXISTS UserAccess (usaTitle, usaOrganizationId, usaEditUsers, usaEditOrgInfo, usaEditTemplate, usaEditRequired, FOREIGN KEY(usaOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS UserOrganizations (usoUserId INT, usoOrganizationId INT, FOREIGN KEY(usoUserId) REFERENCES User(rowId), FOREIGN KEY(usoOrganizationId) REFERENCES Organization(rowId))',
          'CREATE TABLE IF NOT EXISTS UserUsers (usuUserId INT, usuUserChildId INT, FOREIGN KEY(usuUserId) REFERENCES User(rowId))',
      ], function (res) {
        public.initThemes();
        public.initTemplates();
        public.initSections();
        public.initSubSections();
        public.initDefaultTemplate();
        deferred.resolve({
          message: 'Batch statement for default Template data completed successfully'
        });
      }, function (error) {
        deferred.reject({
          message: 'Error processing batch: ' + error.message
        });
      });
      return deferred.promise;
    }

    public.dropAllTables = function () {
      console.log('Dropping All Tables');
      var deferred = $q.defer();
      // Batch script to create all tables in db
      db.sqlBatch([
          'DROP TABLE IF EXISTS Answer',
          'DROP TABLE IF EXISTS Client',
          'DROP TABLE IF EXISTS Inspection',
          'DROP TABLE IF EXISTS Job',
          'DROP TABLE IF EXISTS Organization',
          'DROP TABLE IF EXISTS Photo',
          'DROP TABLE IF EXISTS Question',
          'DROP TABLE IF EXISTS QuestionAnswers',
          'DROP TABLE IF EXISTS ReportHistory',
          'DROP TABLE IF EXISTS Section',
          'DROP TABLE IF EXISTS SubSection',
          'DROP TABLE IF EXISTS Theme',
          'DROP TABLE IF EXISTS User',
          'DROP TABLE IF EXISTS UserAccess',
          'DROP TABLE IF EXISTS UserOrganizations',
          'DROP TABLE IF EXISTS UserUsers',
      ], function () {
        deferred.resolve({
          message: 'Batch drop statement completed successfully'
        });
      }, function (error) {
        deferred.reject({
          message: 'Error processing batch: ' + error.message
        });
      });
      return deferred.promise;
    }

    public.createUser = function (name, pass, email) {
      var deferred = $q.defer();

      db.transaction(function (tx) {
        tx.executeSql('INSERT INTO User (name, pass, email) VALUES (?,?,?)', [name, pass, email]);
      }, function (error) {
        // TODO: Make sure insertion is unique / report that error to user
        deferred.reject({
          message: 'Error Creating User: ' + error.message
        });
      }, function () {
        // Successful creation, navigate to home page
        deferred.resolve({
          message: 'Successful user creation'
        });
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
          message: 'failure inserting dummy data initreport'
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
        'rowId': 0,
        'insId': 0,
        'sections': [
          {
            'title': 'Colors',
            'subSections': [
              {
                'title': 'Cool Colors',
                'questions': [{
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
                  'showSummaryRemark': true,
                  'showDescription': true,
                  'photos': []
      }]
              }]
          }]
      });
      return deferred.promise;
    };

    public.getInspections = function () {
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

    public.initThemes = function () {
      var deferred = $q.defer();
      db.executeSql('INSERT INTO Theme(themeTitle, themeBlob, userId) VALUES (?, ?, ?)', ['Home Theme', 'a whole bunch of text', 1], function (res) {
        deferred.resolve({
          message: 'Theme insertion successful'
        });
      }, function (error) {
        deferred.resolve({
          message: 'Theme insertion failed: ' + error.message
        });
      });
      return deferred.promise;
    }

    public.initTemplates = function () {
      console.log('db initTemplates being called');
      var timestamp = new Date();
      var deferred = $q.defer();
      db.executeSql('INSERT INTO Inspection (insLastModified, insLastSubmitted, insSourceType, insType, insUserId, insTemplateTitle) Values (?, ?, ?, ?, ?, ?)', [timestamp, timestamp, 'Template', 'Residential', 1, 'Residential Template'], function (res) {
        deferred.resolve({
          rowId: res.insertId,
          message: 'Template insertion successful'
        });
      }, function (error) {
        deferred.reject({
          message: 'Template insertion failed: ' + error.message
        });
      });
      return deferred.promise;
    }

    public.getThemes = function () {
      var deferred = $q.defer();

      db.executeSql('SELECT * FROM Theme', [], function (res) {
        if (res.rows.length > 0) {
          deferred.resolve({
            row: res.rows,
            message: 'Successful select from Theme table'
          });
        } else {
          deferred.resolve({
            message: 'No data in Theme table'
          });
        }
      }, function (error) {
        deferred.reject({
          message: 'Error trying to select from Theme table'
        });
      });
      return deferred.promise;
    }

    public.getTemplates = function () {
      var deferred = $q.defer();

      db.executeSql('SELECT rowid AS [rowId], * FROM Inspection ins WHERE insSourceType = ?', ['Template'], function (res) {
        if (res.rows.length > 0) {
          deferred.resolve({
            row: res.rows,
            message: 'Successful select from Template table'
          });
        } else {
          deferred.resolve({
            message: 'No data in Template table'
          });
        }
      }, function (error) {
        deferred.reject({
          message: 'Error trying to select from Template table'
        });
      });
      return deferred.promise;
    }

    public.initSections = function () {
      console.log('db initSections being called');
      var deferred = $q.defer();
      db.sqlBatch([
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Field Notes', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Site', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Exterior', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Roofing', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Structural', 1, 'Template']],
        ['INSERT INTO Section (secTitle, secInspectionId, secSourceType) Values (?, ?, ?)', ['Thermal', 1, 'Template']],
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
          message: 'failure inserting dummy data section ' + error.message
        });
      });
      return deferred.promise;
    }

    public.getSections = function (inspectionId) {
      var inspId = parseInt(inspectionId);
      console.log('db getSections Inspection Id: ' + inspId);
      console.log(typeof (inspId));
      var deferred = $q.defer();
      db.executeSql('SELECT rowId AS [rowId], secTitle AS [title], secInspectionId FROM Section WHERE secInspectionId = ?', [inspId], function (res) {
        if (res.rows.length > 0) {
          deferred.resolve({
            row: res.rows,
            message: 'Successful select from Section'
          });
        } else {
          deferred.resolve({
            message: 'No data in Section table'
          });
        }
      }, function (error) {
        deferred.reject({
          message: 'Error trying to select from Section table'
        });
      });
      return deferred.promise;
    }

    public.initSubSections = function () {
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
          message: 'failure inserting dummy data subsection'
        });
      });
      return deferred.promise;
    }

    public.getSubSections = function (sectionId) {
      console.log('db getSubSections');
      var deferred = $q.defer();
      db.executeSql('SELECT rowId AS [rowId], susTitle AS [title], susSectionId FROM SubSection WHERE susSectionId = ?', [sectionId], function (res) {
        if (res.rows.length > 0) {
          deferred.resolve({
            row: res.rows,
            message: 'Successful select from SubSection'
          });
        } else {
          deferred.resolve({
            message: 'No data in SubSection table'
          });
        }
      }, function (error) {
        deferred.reject({
          message: 'Error trying to select from SubSection table'
        });
      });
      return deferred.promise;
    }

    public.getQuestions = function (subSectionId) {
      console.log('db getQuestions');
      var deferred = $q.defer();
      db.executeSql('SELECT rowId AS [rowId], queTitle AS [title], queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription FROM Question WHERE queSubSectionId = ?', [sectionId], function (res) {
        if (res.rows.length > 0) {
          deferred.resolve({
            row: res.rows,
            message: 'Successful select from Question'
          });
        } else {
          deferred.resolve({
            message: 'No data in Question table'
          });
        }
      }, function (error) {
        deferred.reject({
          message: 'Error trying to select from Question table'
        });
      });
      return deferred.promise;
    }
    // Insert Necessary Data for Full Inspection
    public.initDefaultTemplate = function () {
      console.log('db initDefaultTemplate');
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
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 2, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 2, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Driveway', '', 2, false, false, 'radio', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Driveway Condition', '', 2, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Patio', '', 2, false, false, 'radio', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Patio Condition', '', 2, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Walkways and Steps', '', 2, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Retaining Wall', '', 2, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Retaining Wall Condition', '', 2, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Safety Fencing Location', '', 2, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Safety Fencing Type', '', 2, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Safety Fencing Condition', '', 2, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Landscaping', '', 2, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Safety Concern', '', 2, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Evaluation Images', '', 2, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Porch or Stoop', '', 3, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Porch or Stoop Condition', '', 3, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Yard Steps', '', 3, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Deck or Balcony', '', 3, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Deck or Balcony Condition', '', 3, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Moisture Conditions', '', 3, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Attached Steps or Platforms Images', '', 3, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 4, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 4, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Types of Wall Cladding', '', 4, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Wall Cladding Condition', '', 4, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Flashing at Fenestrations', '', 4, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Trim or Soffit or Fascia', '', 4, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Trim or Soffit or Fascia Condition', '', 4, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Siding or Wall Cladding Images', '', 4, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Window Frame or Trim', '', 5, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Window Frame or Trim Condition', '', 5, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Exterior Doors', '', 5, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Exterior Doors Condition', '', 5, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Caulking', '', 5, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Wall Fenestrations Images', '', 5, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Attached Garage or Carport Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 6, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 6, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Vehicle Parking', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Floor', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Floor Condition', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Firewall Location', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Firewall Condition', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Firedoor Location', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Exterior Service Door', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Exterior Service Door Condition', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Car Door', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Car Door Condition', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Automatic Door Opener', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Safety Reverse', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition', '', 6, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Attached Garage or Carport Images', '', 6, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Roof Covering(s) Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 7, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 7, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Roof Covering(s)', '', 7, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Viewed Roof From', '', 7, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Style(s)', '', 7, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Pitch', '', 7, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Age of Roof Covering', '', 7, false, false, 'number', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Number of Layers of Roof Covering', '', 7, false, false, 'number', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Roof Covering', '', 7, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Roof Covering Condition', '', 7, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Valley(s)', '', 7, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Valley(s) Condition', '', 7, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Roof Covering(s) Images', '', 7, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Roofing - Fenestrations Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Perforations (through-roof)', '', 8, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Perforations Condition(s)', '', 8, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Skylights or Skywalls', '', 8, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Skylights or Skywalls Condition', '', 8, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Flashing(s)', '', 8, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Flashing(s) Condition', '', 8, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Fenestrations Images', '', 8, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Roof - Gutters & Down-Spouts Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Type', '', 9, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Gutters & Down-Spouts Condition', '', 9, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Down-Spout Discharge', '', 9, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Down-Spout Discharge Condition', '', 9, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Gutters or Down Spouts Images', '', 9, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Structural - Roof Framing (Visible in Attic) Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 10, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 10, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Roof System', '', 10, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Diaphragm Sheathing', '', 10, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Diaphragm Sheathing Condition', '', 10, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Missing or Inadequate', '', 10, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Roof Framing Images', '', 10, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Structural - Floor Framing Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Notice', '', 11, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Sub-Floor System', '', 11, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Beams (Girders)', '', 11, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Joists & Sheathing', '', 11, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['I-Beams', '', 11, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Diaphragm', '', 11, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Posts(Columns)', '', 11, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Posts(Columns) Condition', '', 11, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Stairs', '', 11, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Stairs Condition', '', 11, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Inadequate', '', 11, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Basement or Crawl Floor', '', 11, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Basement or Crawl Floor Condition', '', 11, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Floor Framing Images', '', 11, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Structural - Foundation Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Type of Foundation', '', 12, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition of Foundation', '', 12, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limited By', '', 12, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['WDI or WDO (Wood-Destroying)', '', 12, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Cracks', '', 12, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Drainage', '', 12, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Sump Pump', '', 12, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Foundation Images', '', 12, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Thermal - Attic Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 13, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 13, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Access', '', 13, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Location', '', 13, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Viewed', '', 13, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Attic Insulation Location', '', 13, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Attic Insulation Quantity (in)', '', 13, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Attic Insulation Type', '', 13, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Attic Insulation Condition', '', 13, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Attic Ventilation', '', 13, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition of Ventilation', '', 13, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Humidity', '', 13, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Infestation', '', 13, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Ventilation Notice', '', 13, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Attic Images', '', 13, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Thermal - Crawl Spaces or Unfinished Basements
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Access', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Location', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Viewed', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Sub-Floor Insulation Location', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Sub-Floor Insulation Type', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Sub-Floor Insulation Retention', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Sub-Floor Insulation Condition', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Crawl-Space Ventilation', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition of Crawl-Space Ventilation', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Vapor Barrier', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Moisture', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Drainage', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Infestation', '', 14, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Crawl Space or Basement Images', '', 14, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Thermal - Interior Ventilation or Exhaust Fans Question
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Whole House Ventilation', '', 15, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Whole House Ventilation Condition', '', 15, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Moisture Reduction Fans', '', 15, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition of Moisture Reduction Fans', '', 15, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Moisture Notice', '', 15, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Interior Ventilation or Exhaust Fan Images', '', 15, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Plumbing - Plumbing System Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 16, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 16, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Water Supply Source', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Main Water Shut Off Valve Location', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Water Pressure', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Water Temperature', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Waste System', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Main Entry Piping', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Main Entry Piping Condition', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Pressure (psi)', '', 16, false, false, 'number', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Pressure', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Water Lines', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition of Water Lines', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Lead (other than solder joints)', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Disimlar Metal Connection (Potential Electrolysis)', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['DMV Piping', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition of DMV Piping', '', 16, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Plumbing System Images', '', 16, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Plumbing - Faucets or Fixtures Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Faucets', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Leaking', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Faucets or Fixtures Location', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Accessories', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Disposer', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Dishwasher', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Dishwasher Condition', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Sinks or Fixtures', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Grout Condition', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Drainage', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Sinks or Fixtures Location', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Toilet', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Tub or Shower Surround(s)', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition of Tub or Shower Surround(s)', '', 17, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Faucet or Fixtures Images', '', 17, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Plumbing - Water Heater Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Energy Source', '', 18, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Brand Name', '', 18, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Approximate Age (Years Old)', '', 18, false, false, 'number', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Capacity (in Gallons)', '', 18, false, false, 'dropbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Model Number', '', 18, false, false, 'text', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Serial Number', '', 18, false, false, 'text', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Water Temperature', '', 18, false, false, 'number', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition', '', 18, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['TPRV Connection', '', 18, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Exhaust', '', 18, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Water Heater Images', '', 18, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Heating - Heating System Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 19, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 19, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Energy Source(s)', '', 19, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['System Type', '', 19, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Boiler', '', 19, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Heat Pump', '', 19, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Stove', '', 19, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Solar', '', 19, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Heating System Images', '', 19, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Heating - Central Furnace or Heat Pump Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Brand Name', '', 20, false, false, 'dropdown', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Capacity', '', 20, false, false, 'dropdown', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Year of Manufacture', '', 20, false, false, 'number', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Model Number', '', 20, false, false, 'text', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Serial Number', '', 20, false, false, 'text', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Posted Service History', '', 20, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Posted Service History Condition', '', 20, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Central Furnace or Heat Pump Images', '', 20, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Heating - Ducting Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Ducts', '', 21, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Reduced Vent', '', 21, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Filter', '', 21, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Disconnect or Typical Safety Controls', '', 21, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Ducting Images', '', 21, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Heating - Fireplaces or Stoves Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 22, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 22, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Fireplace or Stove Type', '', 22, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Mantle or Hearth', '', 22, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Firebox', '', 22, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Damper', '', 22, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Chimney', '', 22, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Fireplace or Stoves Images', '', 22, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Cooling - Cooling Systems Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 23, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 23, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Temperature Differential', '', 23, false, false, 'number', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Air Conditioner Type', '', 23, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Energy Source', '', 23, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Cooling Systems Images', '', 23, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Cooling - Evaporative Coil or Heat Pump (Inside) Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Brand Name', '', 24, false, false, 'dropdown', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Capacity', '', 24, false, false, 'dropdown', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Year of Manufacture', '', 24, false, false, 'number', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Model Number', '', 24, false, false, 'text', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Serial Number', '', 24, false, false, 'text', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Evaporative Coil or Heat Pump Images', '', 24, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Cooling - Compressor or Condenser (Outside)
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Brand Name', '', 25, false, false, 'dropdown', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Capacity', '', 25, false, false, 'dropdown', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Year of Manufacture', '', 25, false, false, 'number', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Model Number', '', 25, false, false, 'text', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Serial Number', '', 25, false, false, 'text', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Compressor or Condenser Condition', '', 25, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Refrigerant Lines', '', 25, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Compressor or Condensor Images', '', 25, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Electrical - Electrical System Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 26, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 26, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Main Service Entry', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition of Main Service Entry', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Ground Connection', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Meter Location', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Meter Condition', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Grounding', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Ground Wiring', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition of Main Electrical Disconnect', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Main Electrical Disconnect Location', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Main Panel', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Reason for Non Evaluation', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Breakers or Fuses', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Service Size (AMPS)', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Service Size (VOLTS)', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Breaker(s)', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Location', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Branch Wiring', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition of Branch Wiring', '', 26, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Electrical System Images', '', 26, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Electrical - Fixtures, Switches, or Detectors Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Fixtures', '', 27, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Fixtures Condition', '', 27, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Switches or Receptacles', '', 27, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition of Switches or Receptacles', '', 27, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Carbon Monoxide Detectors', '', 27, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Smoke Detectors', '', 27, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Caution Label', '', 27, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Fixtures, Switches, or Detectors Images', '', 27, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Interior - Living Room Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 28, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 28, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Entry Door(s)', '', 28, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Entry Door(s) Condition', '', 28, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Weatherstrip', '', 28, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Window(s)', '', 28, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Ceiling Fan', '', 28, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Heat Source', '', 28, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Light, Switches, or Receptacles (Refer To Electrical Section)', '', 28, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Comments', '', 28, false, false, 'text', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Living Room Images', '', 28, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Interior - Kitchen Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Appliances', '', 29, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Cabinets', '', 29, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Countertops', '', 29, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Countertops Condition', '', 29, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Backsplash & Self Edge', '', 29, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Caulking', '', 29, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Grout', '', 29, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Exhaust Fan', '', 29, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Heat Source', '', 29, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Lights or Switches or Receptacles (Refer To Electrical Section)', '', 29, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Kitchen Images', '', 29, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Interior - Laundry Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Appliances', '', 30, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Dryer', '', 30, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Exhausted', '', 30, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Exhaust Appears', '', 30, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Exhaust Fan', '', 30, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Laundry Images', '', 30, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Interior - Bathroom(s)
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Walls or Ceilings', '', 31, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Condition of Walls or Ceilings', '', 31, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Floors', '', 31, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Caulking', '', 31, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Heat', '', 31, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Exhaust Fan', '', 31, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Lights or Switches or Receptacles (Refer To Electrical Section)', '', 31, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Bathroom Images', '', 31, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Interior - General Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Walls or Ceilings', '', 32, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Walls or Ceilings Condition', '', 32, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Floor Coverings', '', 32, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Floor Coverings Condition', '', 32, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Interior Doors', '', 32, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Interior Doors Condition', '', 32, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Window Type(s)', '', 32, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Window(s) Condition', '', 32, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Safety Concern', '', 32, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Lights or Switches or Receptacles (Refer To Electrical Section) or DUPLICATE?!?!', '', 32, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['General Images', '', 32, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
        // Life or Safety - Potential Safety Concern Questions
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Conditions', '', 33, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Limitations', '', 33, false, false, 'textarea', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Tripping or Falling Hazard(s)', '', 33, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Fire Hazards', '', 33, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Pest Related', '', 33, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Poison Baits', '', 33, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Building Materials (Refer To Specific Sections)', '', 33, false, false, 'checkbox', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Comments', '', 33, false, false, 'text', null, null, false, true, true, 1, 'Template']],
        ['INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['Potential Safety Concern Images', '', 33, false, false, 'photo', null, null, false, true, true, 1, 'Template']],
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
        ['INSERT INTO QuestionAnswers (quaQuestionId, quaAnswerId) VALUES (?,?)', [1, 1]],
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

    public.getInspectionById = function (inspectionId) {
      var inspId = parseInt(inspectionId); // ensure id is an int
      console.log('db getInspectionById ID: ' + inspId);
      console.log(typeof (inspId));
      var deferred = $q.defer();
      db.executeSql(
        'SELECT *, insp.rowid AS [rowId], sec.rowid AS [secRowId], subsec.rowid AS [susRowId], ques.rowid AS [queRowId], ans.rowid AS [ansRowId], qua.rowid AS [quaRowId] FROM Inspection insp JOIN Section sec on sec.secInspectionId = insp.rowid JOIN SubSection subsec ON subsec.susSectionId = sec.rowId JOIN Question ques ON ques.queSubSectionId = subsec.rowid LEFT JOIN Answer ans ON ans.ansQuestionId = ques.rowid LEFT JOIN Photo pho ON pho.phoInspectionId = insp.rowid AND pho.phoQuestionId = ques.rowid LEFT JOIN QuestionAnswers qua on qua.quaQuestionId = ques.rowid AND qua.quaAnswerId = ans.rowid WHERE insp.rowid = ? ORDER BY sec.rowid, subsec.rowid, ques.rowid, ans.rowid', [inspId],
        function (res) {
          if (res.rows.length > 0) {
            deferred.resolve({
              row: res.rows,
              message: "Successful select of all Inspection data for Inspection#: " + inspId
            });
          } else {
            deferred.resolve({
              row: [],
              message: 'No associated tables had data'
            });
          }
        },
        function (error) {
          deferred.reject({
            message: 'Error executing full inspection select statement: ' + error.message
          });
        });
      return deferred.promise;
    }

    // Overwrite the copied template with the actual data of the save
    public.saveInspection = function (ins) {
      var timestamp = new Date();
      console.log('saveInspection start');
      console.log(ins);
      var deferred = $q.defer();
      // Insert Inspection Table Data
      db.executeSql('INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insSourceType, insType, insName, insUserId, insThemeId, insOrganizationId, insTemplateId, insTemplateTitle) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [timestamp, timestamp, ins.insJobId, ins.insSourceType, ins.insType, ins.insName, ins.insUserId, ins.insThemeId, ins.insOrganizationId, ins.insTemplateId, ins.insTemplateTitle], function (res) {
        //if this is successful, attempt to insert section data
        ins.sections.forEach(function (section) {
          db.executeSql('INSERT INTO Section (secTitle, secInspectionId, secSourceType) VALUES (?,?,?)', [section.title, res.insertId, ins.insSourceType], function (secRes) {
            //console.log(section.title + ' section succesfully inserted. ID: ' + secRes.insertId);
            //if this is successful, attempt to insert subsection data
            section.subsections.forEach(function (subsection) {
              db.executeSql('INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) VALUES (?,?,?,?)', [subsection.title, secRes.insertId, res.insertId, ins.insSourceType], function (susRes) {
                //console.log(subsection.title + ' subsection successfully inserted. ID: ' + susRes.insertId + ' saved to Inspection#: ' + res.insertId);
                // If this is successful, attempt to insert question data
                subsection.questions.forEach(function (question) {
                  db.executeSql('INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [question.title, question.description, susRes.insertId, (question.answers && question.answers.length > 0) || question.answer, question.validation.isRequired, question.type, question.validation.min, question.validation.max, question.notApplicable, question.showSummaryRemark, question.showDescription, res.insertId, ins.insSourceType], function (queRes) {
                    //console.log(question.title + ' question successfully inserted. ID: ' + queRes.insertId + ' saved to Inspection#: ' + res.insertId + ' and subSectionId: ' + susRes.insertId);
                    // If this is successful, attempt to insert answer data
                    question.values.forEach(function (answer) {
                      db.executeSql('INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) VALUES (?,?,?,?,?)', [queRes.insertId, answer.key, answer.type, res.insertId, ins.insSourceType], function (ansRes) {
                        //console.log(answer.key + ' answer successfully inserted. ID: ' + ansRes.insertId + ' saved to Inspection#: ' + res.insertId);
                        // If this is successful, attempt to insert question-answer data
                        if (answer.key == question.answer || (question.answers && question.answers.indexOf(answer.key) > -1)) {
                          db.executeSql('INSERT INTO QuestionAnswers (quaQuestionId, quaAnswerId, quaInspectionId, quaSourceType) VALUES (?,?,?,?)', [queRes.insertId, ansRes.insertId, res.insertId, ins.insSourceType], function (queAnsRes) {
                            //console.log('Successfully inserted saved answer: ' + answer.key + ' for question title: ' + question.title + '.');
                          }, function (queAnsError) {
                            deferred.reject({
                              message: 'Error with QuestionAnswer save: ' + queAnsError.message
                            });
                          });
                        }
                      }, function (ansError) {
                        deferred.reject({
                          message: 'Error with Answer save: ' + ansError.message
                        });
                      });
                    });
                    // Also save photo data from Question
                    for (var i = 0; question.photos && i < question.photos.length; i++) {
                      db.executeSql('INSERT INTO Photo (phoBase64, phoQuestionId, phoInspectionId) VALUES (?,?,?)', [question.photos[i], queRes.insertId, res.insertId], function(phoRes) {
                        //console.log('Successfully inserted photo: ' + question.photos[i]); 
                      }, function(phoError) {
                        //console.log('Failure inserting photo: ' + question.photos[i]);
                        deferred.reject({
                          message: 'Error with Photo save: ' + phoError.message
                        });
                      });    
                    }
                  }, function (queError) {
                    deferred.reject({
                      message: 'Error with Question save: ' + queError.message
                    });
                  });
                });
              }, function (susError) {
                //console.log('failed subsec insert: ' + susError.message);
                deferred.reject({
                  message: 'Error with SubSection save: ' + susError.message
                });
              });
            });
          }, function (secError) {
            deferred.reject({
              message: 'Error with Section save: ' + secError.message
            });
          });
        });
        deferred.resolve({
          rowId: res.insertId,
          message: 'Successful save into inspection table'
        });
      }, function (error) {
        //if failure, log the failure
        deferred.reject({
          message: 'Error saving Inspection: ' + error.message
        });
      });
      return deferred.promise;
    }
    
    // Overwrite the copied template with the actual data of the save
    public.updateInspection = function (ins) {
      var timestamp = new Date();
      console.log('updateInspection start');
      console.log(ins);
      var deferred = $q.defer();
      // Update Inspection Table Data
      db.executeSql('UPDATE Inspection SET insLastModified = ?, insJobId = ?, insSourceType = ?, insType = ?, insName = ?, insUserId = ?, insThemeId = ?, insOrganizationId = ?, insTemplateId = ?, insTemplateTitle = ? WHERE rowid = ?', [timestamp, ins.insJobId, ins.insSourceType, ins.insType, ins.insName, ins.insUserId, ins.insThemeId, ins.insOrganizationId, ins.insTemplateId, ins.insTemplateTitle, ins.insId], function (res) {
        //if this is successful, attempt to update section data
        ins.sections.forEach(function (section) {
          db.executeSql('UPDATE Section SET secTitle = ?, secInspectionId = ?, secSourceType = ? WHERE rowid = ? AND secInspectionId = ?', [section.title, section.inspectionId, section.sourceType, section.id, section.inspectionId], function (secRes) {
            console.log(section.title + ' section succesfully updated.');
            //if this is successful, attempt to update subsection data
            section.subsections.forEach(function (subsection) {
              db.executeSql('UPDATE SubSection SET susTitle = ?, susSectionId = ?, susInspectionId = ?, susSourceType = ? WHERE rowId = ? AND susInspectionId = ?', [subsection.title, subsection.sectionId, subsection.inspectionId, subsection.sourceType, subsection.id, subsection.inspectionId], function (susRes) {
                console.log(subsection.title + ' subsection successfully updated.');
                // If this is successful, attempt to update question data
                subsection.questions.forEach(function (question) {
                  db.executeSql('UPDATE Question SET queTitle=?, queDescription=?, queSubSectionId=?, queAnswered=?, queRequired=?, queType=?, queMin=?, queMax=?, queNotApplicable=?, queShowSummaryRemark=?, queShowDescription=?, queInspectionId=?, queSourceType=? WHERE rowid = ? AND queInspectionId = ?', [question.title, question.description, question.subsectionId, (question.answers && question.answers.length > 0) || question.answer, question.validation.isRequired, question.type, question.validation.min, question.validation.max, question.notApplicable, question.showSummaryRemark, question.showDescription, question.inspectionId, ins.insSourceType, question.id, question.inspectionId], function (queRes) {
                    // Delete all rows in QuestionAnswers for this question before looping through and inserting again
                    db.executeSql('DELETE FROM QuestionAnswers WHERE quaQuestionId = ? and quaInspectionId = ?', [question.id, question.inspectionId], function(deleteRes) {
                      console.log('Successful delete of Question: ' + question.title + ' stored Answers for InspectionId: ' + question.inspectionId);    
                    }, function(delError) {
                      console.log('Failure to delete Question: ' + question.title + ' stored Answers for InspectionId: ' + question.inspectionId);
                      console.log('Error message for delete failure: ' + delError.message);
                    });
                    // Delete all previous photos
                    db.executeSql('DELETE FROM Photo WHERE phoQuestionId = ? AND phoInspectionId = ?', [question.id, question.inspectionId], function(deleteRes) {
                      console.log('Successful delete of Photos from Question: ' + question.title);    
                    }, function(delError) {
                      console.log('Failure to delete Question: ' + question.title);
                      console.log('Error message for delete failure: ' + delError.message);
                    });
                    console.log(question.title + ' question successfully updated.');
                    // If this is successful, attempt to update answer data
                    question.values.forEach(function (answer) {
                      db.executeSql('UPDATE Answer SET ansQuestionId=?, ansValue=?, ansType=?, ansInspectionId=?, ansSourceType=? WHERE rowid=? AND inspectionId=?', [answer.questionId, answer.key, answer.type, answer.inspectionId, answer.sourceType, answer.id, answer.inspectionId], function (ansRes) {
                        console.log(answer.key + ' answer successfully updated');
                        // If this is successful, attempt to insert question-answer data
                        if (answer.key == question.answer || (question.answers && question.answers.indexOf(answer.key) > -1)) {
                          db.executeSql('INSERT INTO QuestionAnswers (quaQuestionId, quaAnswerId, quaInspectionId, quaSourceType) VALUES (?,?,?,?)', [queRes.insertId, ansRes.insertId, res.insertId, ins.insSourceType], function (queAnsRes) {
                            console.log('Successfully inserted saved answer: ' + answer.key + ' for question title: ' + question.title + '.');
                          }, function (queAnsError) {
                            deferred.reject({
                              message: 'Error with QuestionAnswer update: ' + queAnsError.message
                            });
                          });
                        }
                      }, function (ansError) {
                        deferred.reject({
                          message: 'Error with Answer update: ' + ansError.message
                        });
                      });
                        
                      // Replace deleted photos for the 'update'
                      for (var i = 0; question.photos && i < question.photos.length; i++) {
                        db.executeSql('INSERT INTO Photo (phoBase64, phoQuestionId, phoInspectionId) VALUES (?,?,?)', [question.photos[i], question.id, question.inspectionId], function(phoRes) {
                          console.log('Successfully inserted Photo: ' + question.photos[i]);                            
                        }, function(phoError) {
                          deferred.reject({
                            message: 'Error with Photo update: ' + phoError.message 
                          });
                        });
                      }
                    });
                  }, function (queError) {
                    deferred.reject({
                      message: 'Error with Question update: ' + queError.message
                    });
                  });
                });
              }, function (susError) {
                deferred.reject({
                  message: 'Error with SubSection update: ' + susError.message
                });
              });
            });
          }, function (secError) {
            deferred.reject({
              message: 'Error with Section update: ' + secError.message
            });
          });
        });
        deferred.resolve({
          rowId: res.insertId,
          message: 'Successful update for inspection table'
        });
      }, function (error) {
        //if failure, log the failure
        deferred.reject({
          message: 'Error updating Inspection: ' + error.message
        });
      });
      return deferred.promise;
    }
    
    public.getPhotos = function() {
      var deferred = $q.defer();

      db.executeSql('SELECT * FROM Photo', [], function (res) {
        if (res.rows.length > 0) {
          deferred.resolve({
            row: res.rows,
            message: 'Successful select all Photos in Photo table'
          });
        } else {
          deferred.resolve({
            message: 'No data in Photo table'
          });
        }
      }, function (error) {
        deferred.reject({
          message: 'Error trying to select from Photo table ' + error.message
        });
      });
      return deferred.promise;    
    }
    
    public.getPhotosForInspection = function(insId) {
      var deferred = $q.defer();
      db.executeSql('SELECT * FROM Photo WHERE phoInspectionId = ?', [insId], function (res) {
        if (res.rows.length > 0) {
          deferred.resolve({
            row: res.rows,
            message: 'Successful select all inspection photos from Photo table'
          });
        } else {
          deferred.resolve({
            message: 'No data in Photo table'
          });
        }
      }, function (error) {
        deferred.reject({
          message: 'Error trying to select from Photo table: ' + error.message
        });
      });
      return deferred.promise;    
    }
    
    public.getPhotosForQuestion = function(questionId) {
      var deferred = $q.defer();
      db.executeSql('SELECT * FROM Photo WHERE phoQuestionId = ?', [questionId], function (res) {
        if (res.rows.length > 0) {
          deferred.resolve({
            row: res.rows,
            message: 'Successful select all question photos from Photo table'
          });
        } else {
          deferred.resolve({
            message: 'No data in Photo table for Question: ' + questionId
          });
        }
      }, function (error) {
        deferred.reject({
          message: 'Error trying to select for Question from Photo table: ' + error.message
        });
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
    public.select = function (query, params) {
      var deferred = $q.defer();
      db.executeSql(query, params, function (res) {
        if (res.rows.length > 0) {
          deferred.resolve({
            rows: res.rows,
            message: 'Successful select'
          });
        } else {
          deferred.resolve({
            rows: [],
            message: 'No items found with current query: ' + query
          });
        }
      }, function (error) {
        deferred.reject({
          message: 'Error trying to run select query: ' + query
        });
      });
      return deferred.promise;
    }
  });
  return public;
});
