app.factory('database', function ($rootScope, $state, $q, database_mock, databaseInit) {
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
      
    public.initDefaultTemplate = databaseInit.initDefaultTemplate(db);
    public.initTables = databaseInit.initTables(db);
    public.initSubSections = databaseInit.initSubSections(db);
    public.initSections = databaseInit.initSections(db);
    public.dropAllTables = databaseInit.dropAllTables(db);
    public.initTemplates = databaseInit.initTemplates(db);
    public.initThemes = databaseInit.initThemes(db);
      
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
        ['9-12-17', '9-12-17', 10, 'template', 'Residential', 'Smith Inspection', 1, 'Residential Template']],
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insSourceType, insType, insName, insUserId, insTemplateTitle) Values (?, ?, ?, ?, ?, ?, ?, ?)',
        ['10-1-17', '9-11-17', 9, 'inspection', 'Residential', 'Jones Inspection', 1, null]],
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insSourceType, insType, insName, insUserId, insTemplateTitle) Values (?, ?, ?, ?, ?, ?, ?, ?)',
        ['6-12-17', '6-12-17', 13, 'inspection', 'Residential', 'Smith Inspection', 1, null]],
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insSourceType, insType, insName, insUserId, insTemplateTitle) Values (?, ?, ?, ?, ?, ?, ?, ?)',
        ['9-1-17', '9-1-17', 21, 'inspection', 'Residential', 'Smith Inspection', 1, null]],
      ['INSERT INTO Inspection (insLastModified, insLastSubmitted, insJobId, insSourceType, insType, insName, insUserId, insTemplateTitle) Values (?, ?, ?, ?, ?, ?, ?, ?)',
        ['9-12-17', '9-12-17', 1, 'template', 'Commercial', 'Walmart Inspection', 1, 'Commercial Template']],
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

      db.executeSql('SELECT rowId as insId, * FROM Inspection WHERE insSourceType = ? ORDER BY insLastSubmitted DESC', ['inspection'], function (res) {
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

      db.executeSql('SELECT rowid AS [rowId], * FROM Inspection ins WHERE insSourceType = ?', ['template'], function (res) {
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
          message: 'Error trying to select from Template table ' + error.message
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

    public.getInspectionById = function (inspectionId) {
      var inspId = parseInt(inspectionId); // ensure id is an int
      console.log('db getInspectionById ID: ' + inspId);
      var deferred = $q.defer();
      db.executeSql(
        'SELECT *, insp.rowid AS [rowId], sec.rowid AS [secRowId], subsec.rowid AS [susRowId], ques.rowid AS [queRowId], ans.rowid AS [ansRowId], qua.rowid AS [quaRowId], pho.rowid AS [phoRowId] FROM Inspection insp LEFT JOIN Section sec on sec.secInspectionId = insp.rowid LEFT JOIN SubSection subsec ON subsec.susSectionId = sec.rowId LEFT JOIN Question ques ON ques.queSubSectionId = subsec.rowid LEFT JOIN Answer ans ON ans.ansQuestionId = ques.rowid LEFT JOIN Photo pho ON pho.phoAnswerId = ans.rowid LEFT JOIN QuestionAnswers qua on qua.quaQuestionId = ques.rowid AND qua.quaAnswerId = ans.rowid WHERE insp.rowid = ? ORDER BY sec.rowid, subsec.rowid, ques.rowid, ans.rowid, pho.rowid', [inspId],
        function (res) {
          if (res.rows.length > 0) {
            deferred.resolve({
              row: res.rows,
              message: "Successful select of all Inspection data for Inspection#: " + inspId
            });
          } else {
            deferred.reject({
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
    
  
  function buildUpdateQuery(inputObj, tableName, tablePrefix, excludeObj) {
      var objKeys = Object.keys(inputObj);
      var result = {
        query:'',
        params:[]
      };
      if (!excludeObj) {
          excludeObj = {};
      }
      if (objKeys.length > 0) {
          var queryStatement = 'UPDATE ' + tableName + ' SET ';
          var queryParams = [];
          var keysLength = objKeys.length;
          for (var i = 0; i < keysLength; i++) {
               var key = objKeys[i];
               var value = inputObj[key];
              if (!excludeObj[key] && value === undefined && Object.prototype.toString.call( value ) !== '[object Array]') {
               queryStatement += tablePrefix + key + " = ?, "
               queryParams.push(value);
            }
          }
          if (queryStatement.endsWith(', ')) {
              queryStatement = queryStatement.substr(0, queryStatement.length - 2);
          }
          result.query = queryStatement;
          result.params = queryParams;
      }
      return result;
  }
      
    private.insertInspectionFromTemplate = function(templateId) {
      var deferred = $q.defer();
      var startDate = new Date();
      db.executeSql("INSERT INTO Inspection \
             SELECT ? as insLastModified, insLastSubmitted, insJobId, ? as insSourceType, insType, insName, insThemeResponseBlob, insTemplateResponseBlob, \
                    insUserId, insThemeId, insOrganizationId, insTemplateId, insTemplateTitle \
             FROM   Inspection \
             WHERE  rowId = ?", [startDate, "inspection", templateId], 
      function(data)  {
          deferred.resolve({
                  rowId: data.insertId,
                  message: 'Successful save into inspection table from template'
          });
      }, 
      function(error){
        deferred.reject({
          message: 'Error saving Inspection: ' + error.message
        });
      });
      return deferred.promise;
    };
      

      
    private.insertSectionFromTemplate = function(templateId, inspectionId) {
      var deferred = $q.defer();
          db.executeSql("INSERT INTO Section \
                 SELECT secTitle, ? as secSourceType, ? as secInspectionId  \
                 FROM   Section \
                 WHERE  secInspectionId = ?", ["inspection", inspectionId, templateId], 
      function(data)  {
          deferred.resolve({
                  rowId: data.insertId,
                  message: 'Successful save into section table from template'
          });
      }, 
      function(error){
        deferred.reject({
          message: 'Error saving section: ' + error.message
        });
      });
      return deferred.promise;
    };  
      
    private.insertSubsectionFromTemplate = function(templateId, inspectionId, sectionId) {
      var deferred = $q.defer();
          db.executeSql("INSERT INTO Subsection \
                 SELECT susTitle, ? as susSourceType, ? as susInspectionId, ? as susSectionId  \
                 FROM   Subsection \
                 WHERE  susInspectionId = ?", ["inspection", inspectionId, sectionId, templateId], 
      function(data)  {
          deferred.resolve({
                  rowId: data.insertId,
                  message: 'Successful save into subsection table from template'
          });
      }, 
      function(error){
        deferred.reject({
          message: 'Error saving section: ' + error.message
        });
      });
      return deferred.promise;
    };
      
    private.insertQuestionsFromTemplate = function(templateId, inspectionId, subsectionId) {
      var deferred = $q.defer();
          db.executeSql("INSERT INTO Question \
                 SELECT ? as queSourceType, ? as queInspectionId, ? as queSubSectionId, queTitle, \
                        queDescription, queAnswered, queRequired, \
                        queType, queMin, queMax, queValidationType, queNotApplicable, \
                        queShowSummaryRemark, queShowDescription,  \
                 FROM   Question \
                 WHERE  queInspectionId = ?", ["inspection", inspectionId, subsectionId, templateId], 
      function(data)  {
          deferred.resolve({
                  rowId: data.insertId,
                  message: 'Successful save into subsection table from template'
          });
      }, 
      function(error){
        deferred.reject({
          message: 'Error saving questions: ' + error.message
        });
      });
      return deferred.promise;
    };
                    
    //TODO: chain the promises to make a full inspection from a template
    public.insertFullInspectionFromTemplate = function(templateId) 
    {
        var deferred = $q.defer();
        var fullInspectionPromise = private.insertInspectionFromTemplate(templateId).then(function(insData)
        {
            var inspectionId = insData.rowId;
            private.insertSectionFromTemplate( templateId, inspectionId ).then(function(insSecData)
            {
                console.log(insSecData);
                public.getSections(inspectionId).then(function(secData) 
                {
                    var sectionRows = secData.row;
                    for (var i = 0; i < sectionRows.length; i++) 
                    {
                        private.insertSubsectionFromTemplate( templateId, inspectionId, sectionRows[i].rowId ).then(function(insSubsecData)
                        {
                            console.log(insSubsecData);
                            public.getSubSections(sectionId).then(function(subsecData)
                            {
                                var subsectionRows = subsecData.row;
                                for (var j = 0; j < sectionRows.length; j++)
                                {
                                    private.insertQuestionsFromTemplate(templateId, inspectionId, subsectionId).then(function(questionData){
                                        
                                    }, function(data){deferred.reject(data);});
                                }
                            }, function(data){deferred.reject(data);});
                            deferred.resolve({"inspectionId":inspectionId});
                        }, function(data){deferred.reject(data);});
                    }
               }, function(data){deferred.reject(data);});
                
            }, function(secData){
                secData.row
            });
            console.log(insData);

        }, function(data){deferred.reject(data);});
        return deferred.promise;
    };

                
                
                                   
                            
      
    // Overwrite the copied template with the actual data of the save
    public.saveInspection = function (ins, sourceType) {
      var timestamp = new Date();
      console.log('saveInspection start. saving type: ' + sourceType);
      console.log(ins);
      var deferred = $q.defer();
      // Insert Inspection Table Data
      db.executeSql('INSERT INTO Inspection (insLastModified, insJobId, insSourceType, insType, insName, insUserId, insThemeId, insOrganizationId, insTemplateId, insTemplateTitle) VALUES (?,?,?,?,?,?,?,?,?,?)', [timestamp, ins.insJobId, sourceType, ins.insType, ins.insName, ins.insUserId, ins.insThemeId, ins.insOrganizationId, ins.insTemplateId, ins.insTemplateTitle], function (res) {
        //if this is successful, attempt to insert section data
        ins.sections.forEach(function (section) {
          var secSourceType = sourceType;
          db.executeSql('INSERT INTO Section (secTitle, secInspectionId, secSourceType) VALUES (?,?,?)', [section.title, res.insertId, secSourceType], function (secRes) {
            //console.log(section.title + ' section succesfully inserted. ID: ' + secRes.insertId);
            //if this is successful, attempt to insert subsection data
            section.subsections.forEach(function (subsection) {
              var subsecSourceType = secSourceType;
              db.executeSql('INSERT INTO SubSection (susTitle, susSectionId, susInspectionId, susSourceType) VALUES (?,?,?,?)', [subsection.title, secRes.insertId, res.insertId, subsecSourceType], function (susRes) {
                //console.log(subsection.title + ' subsection successfully inserted. ID: ' + susRes.insertId + ' saved to Inspection#: ' + res.insertId);
                // If this is successful, attempt to insert question data
                subsection.questions.forEach(function (question) {
                  var queSourceType = subsecSourceType;
                  var tempQuestion = question;
                  var inspectionRes = res;
                  db.executeSql('INSERT INTO Question (queTitle, queDescription, queSubSectionId, queAnswered, queRequired, queType, queMin, queMax, queValidationType, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [tempQuestion.title, tempQuestion.description, susRes.insertId, (tempQuestion.answers && tempQuestion.answers.length > 0) || tempQuestion.answer, tempQuestion.validation.isRequired, tempQuestion.type, tempQuestion.validation.min, tempQuestion.validation.max, tempQuestion.validation.type, tempQuestion.notApplicable, tempQuestion.showSummaryRemark, tempQuestion.showDescription, inspectionRes.insertId, queSourceType], function (queRes) {
                    //console.log(tempQuestion.title + ' tempQuestion successfully inserted. ID: ' + queRes.insertId + ' saved to Inspection#: ' + res.insertId + ' and subSectionId: ' + susRes.insertId);
                    // If this is successful, attempt to insert answer data
                    tempQuestion.values.forEach(function (answer) {
                      var ansSourceType = queSourceType;
                      var tempAnswer = answer;
                      db.executeSql('INSERT INTO Answer (ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) VALUES (?,?,?,?,?)', [queRes.insertId, answer.key, answer.type, inspectionRes.insertId, ansSourceType], function (ansRes) {
                        //console.log(answer.key + ' answer successfully inserted. ID: ' + ansRes.insertId + ' saved to Inspection#: ' + res.insertId);
                        // If this is successful, attempt to insert question-answer data
                        if (answer.key == tempQuestion.answer || (tempQuestion.answers && tempQuestion.answers.indexOf(answer.key) > -1)) {
                          var queAnsSourceType = ansSourceType;
                          db.executeSql('INSERT INTO QuestionAnswers (quaQuestionId, quaAnswerId, quaInspectionId, quaSourceType) VALUES (?,?,?,?)', [queRes.insertId, ansRes.insertId, inspectionRes.insertId, queAnsSourceType], function (queAnsRes) {
                            //console.log('Successfully inserted saved answer: ' + answer.key + ' for question title: ' + tempQuestion.title + '.');
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
                    // Save photo data from Question photos array
                    tempQuestion.photos.forEach(function(photo) {
                      var phoQueRes = queRes;
                      var phoAnsRes = ansRes;
                      var tempPhoto = photo;
                      var phoSourceType = queSourceType;
                      db.executeSql('INSERT INTO Photo (phoLink, phoTitle, phoQuestionId, phoAnswerId, phoInspectionId, phoSourceType) VALUES (?,?,?,?,?,?)', [tempPhoto.link, tempPhoto.title, phoQueRes.insertId, phoAnsRes.insertId, inspectionRes.insertId, phoSourceType], function(phoRes) {
                        //console.log('Successfully inserted photo: ' + tempQuestion.photos[i]); 
                      }, function(phoError) {
                        console.log('Failure inserting photo: ' + tempQuestion.photos[i]);
                        deferred.reject({
                          message: 'Error with Photo save: ' + phoError.message
                        });
                      });    
                    });
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
            //if this is successful, attempt to update subsection data
            section.subsections.forEach(function (subsection) {
              db.executeSql('UPDATE SubSection SET susTitle = ?, susSectionId = ?, susInspectionId = ?, susSourceType = ? WHERE rowId = ? AND susInspectionId = ?', [subsection.title, subsection.sectionId, subsection.inspectionId, subsection.sourceType, subsection.id, subsection.inspectionId], function (susRes) {
                //console.log(subsection.title + ' subsection successfully updated.');
                // If this is successful, attempt to update question data
                subsection.questions.forEach(function (question) {
                  public.updateInspectionQuestion(question, ins.insId, ins.insSourceType).then(function(promise){
                    //console.log('Successful question insert: ' + promise.message);
                  }, function(error) {
                    deferred.reject({message: 'Error updating question: ' + error.message}); 
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
    
    public.updateInspectionQuestion = function (question, insId, insSourceType) {
      var questionDefer = $q.defer();
      db.executeSql('UPDATE Question SET queTitle=?, queDescription=?, queSubSectionId=?, queAnswered=?, queRequired=?, queType=?, queMin=?, queMax=?, queValidationType=?, queNotApplicable=?, queShowSummaryRemark=?, queShowDescription=?, queInspectionId=?, queSourceType=? WHERE rowid = ? AND queInspectionId = ?', [question.title, question.description, question.subsectionId, (question.answers && question.answers.length > 0) || question.answer, question.validation.isRequired, question.type, question.validation.min, question.validation.max, question.validation.type, question.notApplicable, question.showSummaryRemark, question.showDescription, question.inspectionId, insSourceType, question.id, question.inspectionId], function (queRes) {
        var tempQuestion = question;
        // Delete all rows in QuestionAnswers for this tempQuestion before looping through and inserting again
        db.executeSql('DELETE FROM QuestionAnswers WHERE quaQuestionId = ? and quaInspectionId = ?', [tempQuestion.id, tempQuestion.inspectionId], function(deleteRes) {
          //console.log('Successful delete of Question: ' + tempQuestion.title + ' stored Answers for InspectionId: ' + tempQuestion.inspectionId);
        }, function(delError) {
          //console.log('Failure to delete Question: ' + tempQuestion.title + ' stored Answers for InspectionId: ' + tempQuestion.inspectionId);
          //console.log('Error message for delete failure: ' + delError.message);
          questionDefer.reject({message: 'Failure deleting QuestionAnswers ' + delError.message});
        });
        // Delete all previous photos
        db.executeSql('DELETE FROM Photo WHERE phoQuestionId = ? AND phoInspectionId = ?', [tempQuestion.id, tempQuestion.inspectionId], function(deleteRes) {
          //console.log('Successful delete of Photos from Question: ' + tempQuestion.title);    
        }, function(delError) {
          console.log('Failure to delete Question: ' + tempQuestion.title);
          console.log('Error message for delete failure: ' + delError.message);
          questionDefer.reject({message: 'Failure deleting Photos: ' + delError.message});
        });
        //console.log(tempQuestion.title + ' tempQuestion successfully updated.');
        // If this is successful, attempt to update answer data
        tempQuestion.values.forEach(function(answer) {
          var ansInsId = insId;
          var ansInsSourceType = insSourceType;
          public.updateAnswers(tempQuestion, answer, queRes, ansInsId, ansInsSourceType).then(function(promise) {
            //console.log('Success updating answers');
            //console.log(promise.message);
          }, function(error) {
            console.log('Error savings answers: ' + error.message);
            questionDefer.reject({message: 'Error saving Answers: ' + error.message});
          });
        });
        // Replace deleted photos for the 'update'
        tempQuestion.photos.forEach(function(photo) {
          public.insertInspectionPhoto(photo, tempQuestion, insSourceType).then(function(promise) {
            //console.log('Successful photo insert');
          }, function(error) {
            questionDefer.reject({message: 'Error saving photos: ' + error.message});
          });
        });
        questionDefer.resolve({message: 'Success updating question'});
      }, function (queError) {
        questionDefer.reject({
          message: 'Error with Question update: ' + queError.message
        });
      });
      return questionDefer.promise;           
    }
    
    public.insertInspectionPhoto = function(photo, phoQuestion, phoInsSourceType) {
      var insertPhotoDefer = $q.defer();
      db.executeSql('INSERT INTO Photo (phoLink, phoTitle, phoQuestionId, phoAnswerId, phoInspectionId, phoSourceType) VALUES (?,?,?,?,?,?)', [photo.link, photo.title, phoQuestion.id, photo.answerId, phoQuestion.inspectionId, phoInsSourceType], function(phoRes) {
        console.log('Successfully inserted Photo: ' + photo.title);
        insertPhotoDefer.resolve({message: 'Successfully inserted Photo: ' + photo.title});
      }, function(phoError) {
        console.log('Error: ' + phoError.message);
        insertPhotoDefer.reject({
          message: 'Error with Photo update: ' + phoError.message 
        });
      });
      return insertPhotoDefer.promise;
    }
    
    public.updateAnswers = function(ansQuestion, answer, queRes, ansInsId, ansInsSourceType) {
      var ansDefer = $q.defer();
        db.executeSql('UPDATE Answer SET ansQuestionId=?, ansValue=?, ansType=?, ansInspectionId=?, ansSourceType=? WHERE rowid=? AND ansInspectionId=?', [answer.questionId, answer.key, answer.type, answer.inspectionId, ansInsSourceType, answer.id, answer.inspectionId], function (ansRes) {
          // If this is successful, attempt to insert question-answer data
          if (answer.key == ansQuestion.answer || (ansQuestion.answers && ansQuestion.answers.indexOf(answer.key) > -1)) {
            db.executeSql('INSERT INTO QuestionAnswers (quaQuestionId, quaAnswerId, quaInspectionId, quaSourceType) VALUES (?,?,?,?)', [ansQuestion.id, answer.id, ansInsId, ansInsSourceType], function (queAnsRes) {
              ansDefer.resolve({message: 'Successfully inserted saved answer'});
            }, function (queAnsError) {
              ansDefer.reject({
                message: 'Error with QuestionAnswer update: ' + queAnsError.message
              });
            });
          } else {
           ansDefer.resolve({message: 'Success saved Answer. This answer is not a QuestionAnswer.'});
          }
        }, function (ansError) {
          ansDefer.reject({
            message: 'Error with Answer update: ' + ansError.message
          });
        });  
      return ansDefer.promise;
    }
    
    public.updateTemplate = function(template) {
      console.log(template);
      // Update Inspection table info
      var timestamp = new Date();
      var deferred = $q.defer();
      db.executeSql('UPDATE Inspection SET insLastModified = ?, insUserId = ?, insOrganizationId = ?, insTemplateTitle = ? WHERE rowid = ?', [timestamp, template.insUserId, template.insOrganizationId, template.insTemplateTitle, template.rowId], function(res) {
        console.log('Successful update of Inspection table for Template.');
      }, function(err) {
        deferred.reject({message: 'Error updating Inspection table for Template: ' + err.message});
      });
    
      var photoIds = [];
      var answerIds = [];
      var questionIds = [];
      var subsectionIds = [];
      var sectionIds = [];
      template.sections.forEach(function(section) {
        sectionIds.push(section.id);
        section.subsections.forEach(function(subsection) {
          subsectionIds.push(subsection.id);
          subsection.questions.forEach(function(question) {
            questionIds.push(question.id);
            question.values.forEach(function(answer) {
              answerIds.push(answer.id);
            });
            question.photos.forEach(function(photo) {
              photoIds.push(photo.id);
            })
          });
        });
      });
      //console.log(photoIds);
      //console.log(answerIds);
      //console.log(questionIds);
      //console.log(subsectionIds);
      //console.log(sectionIds);
        
      // Remove deleted photos
      db.executeSql('DELETE FROM Photo WHERE rowid NOT IN (?) AND phoInspectionId = ?', [photoIds, template.rowId], function(res) {
        //console.log('Successful Delete of deleted photos in updateTemplate');
      }, function(err) {
        deferred.reject({message: 'Error deleting Photos in updateTemplate: ' + err.message});  
      });
      // Remove deleted answers
      db.executeSql('DELETE FROM Answer WHERE rowid NOT IN (?) AND ansInspectionId = ?', [answerIds, template.rowId], function(res) {
        //console.log('Successful Delete of Answers in updateTemplate');
      }, function(err) {
        deferred.reject({message: 'Error deleting Answers in updateTemplate: ' + err.message});
      });
      // Remove deleted questions
      db.executeSql('DELETE FROM Question WHERE rowid NOT IN (?) AND queInspectionId = ?', [questionIds, template.rowId], function(res) {
        //console.log('Successful Delete of Questions in updateTemplate');
      }, function(err) {
        deferred.reject({message: 'Error deleting Questions in updateTemplate: ' + err.message});  
      });
      // Remove deleted subsections
      db.executeSql('DELETE FROM SubSection WHERE rowid NOT IN (?) AND susInspectionId = ?', [subsectionIds, template.rowId], function(res) {
        //console.log('Successful Delete of SubSections in updateTemplate');
      }, function(err) {
        deferred.reject({message: 'Error deleting SubSections in updateTemplate: ' + err.message});  
      });
      // Remove deleted sections
      db.executeSql('DELETE FROM Section WHERE rowid NOT IN (?) AND secInspectionId = ?', [sectionIds, template.rowId], function(res) {
        //console.log('Successful Delete of Sections in updateTemplate');
      }, function(err) {
        deferred.reject({message: 'Error deleting Sections in updateTemplate: ' + err.message});  
      });
        
      // INSERT / REPLACE ON CONFLICT Section loop
      template.sections.forEach(function(section) {
        var tempSection = section;
        //console.log(tempSection);
        db.executeSql('INSERT OR REPLACE INTO Section (rowid, secTitle, secInspectionId, secSourceType) VALUES (?,?,?,?)', [tempSection.id, tempSection.title, tempSection.inspectionId, tempSection.sourceType], function(secRes) {
          //console.log('Successful Upsert to Section. InsertId: ' + res.insertId);
          // INSERT / REPLACE ON CONFLICT SubSection loop
          tempSection.subsections.forEach(function(subsection) {
            var tempSubsection = subsection;
            var sectionId = secRes.insertId;
            //console.log(tempSubsection);
            db.executeSql('INSERT OR REPLACE INTO SubSection (rowid, susTitle, susSectionId, susInspectionId, susSourceType) VALUES (?,?,?,?,?)', [subsection.id, tempSubsection.title, sectionId, tempSubsection.inspectionId, tempSubsection.sourceType], function(susRes) {
              //console.log('Success Upsert to SubSection: ' + res.insertId);
              // INSERT / REPLACE ON CONFLICT Question loop
              tempSubsection.questions.forEach(function(question) {
                var tempQuestion = question;
                var subsectionId = susRes.insertId;
                //console.log(tempQuestion);
                db.executeSql('INSERT OR REPLACE INTO Question (rowid, queTitle, queDescription, queSubSectionId, queType, queRequired, queMin, queMax, queValidationType, queNotApplicable, queShowSummaryRemark, queShowDescription, queInspectionId, queSourceType) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [tempQuestion.id, tempQuestion.title, tempQuestion.description, subsectionId, tempQuestion.type, tempQuestion.validation.isRequired, tempQuestion.validation.min, tempQuestion.validation.max, tempQuestion.validation.type, tempQuestion.notApplicable, tempQuestion.showSummaryRemark, tempQuestion.showDescription, tempQuestion.inspectionId, tempQuestion.sourceType], function(queRes) {
                  //console.log('Success upsert to Question: ' + queRes.insertId);
                  // INSERT / REPLACE ON CONFLICT Answer loop
                  tempQuestion.values.forEach(function(answer) {
                    var tempAnswer = answer;
                    var questionId = queRes.insertId;
                    //console.log(tempAnswer);
                    db.executeSql('INSERT OR REPLACE INTO Answer (rowid, ansQuestionId, ansValue, ansType, ansInspectionId, ansSourceType) VALUES (?,?,?,?,?,?)', [tempAnswer.id, questionId, tempAnswer.key, tempAnswer.type, tempAnswer.inspectionId, tempAnswer.sourceType], function (ansRes) {
                      //console.log('Success upsert to Answer: ' + ansRes.insertId);
                    }, function(err) {
                      deferred.reject({message: 'Failure to upsert to Answer: ' + err.message});
                    }); 
                  });
                  // Insert photo data to template
                  tempQuestion.photos.forEach(function(photo) {
                    var phoTempQuestion = tempQuestion;
                    var tempPhoto = photo;
                    db.executeSql('INSERT OR REPLACE INTO Photo (rowid, phoLink, phoTitle, phoQuestionId, phoAnswerId, phoInspectionId, phoSourceType) VALUES(?,?,?,?,?,?,?)', [tempPhoto.id, tempPhoto.link, tempPhoto.title, phoTempQuestion.id, tempPhoto.answerId, phoTempQuestion.inspectionId, tempPhoto.sourceType], function(phoRes) {
                      //console.log('Successfully inserted Photo: ' + phoTempQuestion.photos[i]);                            
                    }, function(phoError) {
                      deferred.reject({
                        message: 'Error with Photo update: ' + phoError.message 
                      });
                    });
                  });                  
                }, function(err) {
                  console.log('Failure upsert to Question');
                  deferred.reject({message: 'Failure to upsert to Question: ' + err.message});
                });
              });
            }, function(err) {
              console.log('Failure upsert to SubSection: ' + err.message);
              deferred.reject({message: 'Failure upsert to SubSection: ' + err.message});
            });
          });
        }, function(err) {
          console.log('Failure upsert to Section: ' + err.message);
          deferred.reject({message: 'Failure upsert to Section: ' + err.message});
        });
      });
      deferred.resolve({message: 'Successful upsert of template'});

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
    
    public.getPhotosForAnswer = function(answerId) {
      var deferred = $q.defer();
      db.executeSql('SELECT * FROM Photo WHERE phoAnswerId = ?', [answerId], function (res) {
        if (res.rows.length > 0) {
          deferred.resolve({
            row: res.rows,
            message: 'Successful select all question photos from Photo table'
          });
        } else {
          deferred.resolve({
            message: 'No data in Photo table for Answer: ' + answerId
          });
        }
      }, function (error) {
        deferred.reject({
          message: 'Error trying to select for Answer from Photo table: ' + error.message
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
    };
    
    // For debuggery
    window.query = function(query, params) {
      db.executeSql(query, params, function (res) {
        console.info(res);
      });
    };
    
  });
  return public;
});
