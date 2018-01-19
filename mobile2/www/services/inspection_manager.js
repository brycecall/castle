app.factory('inspection_manager', function (database, $q, theme_manager) {
  var private = {};
  var public = {};

  private.inspection = {};
  public.mode = "inspection";
  public.returnLocation = {'name':'inspection', params:{}}

  public.getInspection = function (id) {
    var defer = $q.defer();
    var promise = defer.promise;
    id = id.toString();
    
    switch (public.mode) {
      case "inspection":
      case "template":
        console.log('Inspection Manager - Get Inspection ID: ' + id);
        if (window['sqlitePlugin'] === undefined) {
            var mockdefer = $q.defer();
            if (angular.equals(private.inspection, {}) || (private.inspection.rowId + '') !== id) {
                private.inspection = defaultTemplate;
                mockdefer.resolve({ "value":defaultTemplate })
                promise = mockdefer.promise;
            } else {
                mockdefer.resolve({ "value":private.inspection })
                promise = mockdefer.promise;
            }
        } else {
            promise = private.loadFromDatabase(id);
        }
        break;
      case "theme":
        console.log('Inspection Manager - Get Theme ID: ' + id);
        promise = private.loadFromThemeManager(id);
        break;
      default:
        defer.reject(public.mode + " is not a valid type.");
    }

    return promise;
  };
    

  private.loadFromDatabase = function (id) {
    var defer = $q.defer();
    if (angular.equals(private.inspection, {}) || (private.inspection.rowId + '') !== id) {
      database.getInspectionById(id).then(
        function (promise) {
          private.inspection = {};
          // Build Inspection Fields
          private.inspection.insThemeId = promise.row.item(0).insThemeId;
          private.inspection.insTemplateId = promise.row.item(0).insTemplateId;
          private.inspection.insTemplateTitle = promise.row.item(0).insTemplateTitle;
          private.inspection.insLastModified = promise.row.item(0).insLastModified;
          private.inspection.insLastSubmitted = promise.row.item(0).insLastSubmitted;
          private.inspection.insJobId = promise.row.item(0).insJobId;
          private.inspection.insType = promise.row.item(0).insType;
          private.inspection.insName = promise.row.item(0).insName;
          private.inspection.insUserId = promise.row.item(0).insUserId;
          private.inspection.rowId = promise.row.item(0).rowId;
          private.inspection.insId = promise.row.item(0).rowId;
          private.inspection.insSourceType = promise.row.item(0).insSourceType;
          private.inspection.numAnswered = 0;
          private.inspection.sections = [];
          
          var i = 0;
          var increment = 0;
          do {
            // Build section
            var section = {
              id: promise.row.item(i).secRowId,
              title: promise.row.item(i).secTitle,
              sourceType: promise.row.item(i).secSourceType,
              inspectionId: promise.row.item(i).secInspectionId,
              order: promise.row.item(i).secOrder,
              numAnswered: 0,
              subsections: []
            }
            // Build subsections
            for (var j = i; promise.row.item(j) && promise.row.item(i).secRowId == promise.row.item(j).secRowId; j++) {
              // Build subsection
              var subsection = {
                id: promise.row.item(j).susRowId,
                title: promise.row.item(j).susTitle,
                sectionId: promise.row.item(j).susSectionId,
                inspectionId: promise.row.item(j).susInspectionId,
                sourceType: promise.row.item(j).susSourceType,
                order: promise.row.item(j).susOrder,
                numAnswered: 0,
                questions: []
              }
              // Build questions
              // Validation check to make sure there are questions (many subs dont have them currently but this will likely not be the case in the future)
              if (promise.row.item(j).queRowId) {
                for (var k = j; promise.row.item(k) && promise.row.item(j).susRowId == promise.row.item(k).susRowId; k++) {
                  // Build question object
                  var question = {
                    id: promise.row.item(k).queRowId,
                    title: promise.row.item(k).queTitle,
                    description: promise.row.item(k).queDescription,
                    subsectionId: promise.row.item(k).queSubSectionId,
                    sectionId: promise.row.item(k).secRowId,
                    inspectionId: promise.row.item(k).queInspectionId,
                    sourceType: promise.row.item(k).sourceType,
                    type: promise.row.item(k).queType,
                    values: [],
                    validation: {
                      type: promise.row.item(k).queValidationType,
                      min: promise.row.item(k).queMin,
                      max: promise.row.item(k).queMax,
                      isRequired: promise.row.item(k).queRequired
                    },
                    answer: null,
                    answers: [],
                    isAnswered: promise.row.item(k).queAnswered,
                    notApplicable: promise.row.item(k).queNotApplicable,
                    severity: null,
                    showSummaryRemark: promise.row.item(k).queShowSummaryRemark,
                    showDescription: promise.row.item(k).queShowDescription,
                    order: promise.row.item(k).queOrder,
                    comments: promise.row.item(k).queComments,
                    privateNotes: promise.row.item(k).quePrivateNotes,
                    photos: []
                  }
                  // Build answers
                  for (var l = k; promise.row.item(l) && promise.row.item(k).queRowId == promise.row.item(l).queRowId; l++) {
                    var answer = {
                      id: promise.row.item(l).ansRowId,
                      key: promise.row.item(l).ansValue,
                      questionId: promise.row.item(l).ansQuestionId,
                      sourceType: promise.row.item(l).ansSourceType,
                      inspectionId: promise.row.item(l).ansInspectionId,
                      type: promise.row.item(l).ansType,
                      checked: promise.row.item(l).ansChecked,
                      autoComment: promise.row.item(l).ansAutoComment,
                      order: promise.row.item(l).ansOrder,
                      photos: []
                    }
                    question.values.push(answer);
                    // Check to see if this answer was a selected answer by inspector
                    if (promise.row.item(l).ansChecked) {
                      // If multi, push onto answers list. Otherwise, store in single answer key.
                      if (promise.row.item(l).ansType !== 'multi') {
                        question.answer = answer.key;
                      }
                    }
                    if (promise.row.item(l).ansRowId) {
                      for (var m = l; promise.row.item(m) && promise.row.item(l).ansRowId == promise.row.item(m).ansRowId; m++) {
                        if (promise.row.item(m).phoRowId) {
                          var photo = {
                            id: promise.row.item(m).phoRowId,
                            link: promise.row.item(m).phoLink,
                            title: promise.row.item(m).phoTitle,
                            questionId: promise.row.item(m).phoQuestionId,
                            answerId: promise.row.item(m).phoAnswerId,
                            inspectionId: promise.row.item(m).phoInspectionId,
                            sourceType: promise.row.item(m).phoSourceType,
                            order: promise.row.item(m).phoOrder
                          }
                          answer.photos.push(photo);
                          question.photos.push(photo);
                        }
                        // Use increment variable to track progress in promise.row data block
                        increment = m;
                      }
                    }
                    if (question.isAnswered) {
                      subsection.numAnswered++;
                    }
                    if (increment > l) {
                      l = increment;
                    } else {
                      increment = l;
                    }
                  }
                  k = increment;
                  subsection.questions.push(question);
                }
                j = increment;
              } else {
                // This needs to happen if there are no questions for a subsection, otherwise
                // increment will be tracked in questions loop
                increment++;
              }
              // If subsections.numAnswered = subsections.length, 
              // then all subsections have been answered for that section
              if (subsection.numAnswered == subsection.questions.length) {
                section.numAnswered++;
              }
              section.subsections.push(subsection);
            }
            // If inspection.numAnswered = sections.length,
            // then all sections are complete
            if (section.numAnswered == section.subsections.length) {
              inspection.numAnswered++;
            }
            private.inspection.sections.push(section);
            i = increment + 1;
          } while (i <= promise.row.length - 1);
          defer.resolve({ "value":private.inspection });
        },
        function (promise) {
          private.inspection = {}; //failure eh?
          defer.reject({ "value":private.inspection });
          console.log('failure: ' + promise.message)
        }
      );
    } else {
      defer.resolve({ "value":private.inspection });
    }

    return defer.promise;
  };

  private.loadFromThemeManager = function (id) {
    var defer = $q.defer();

    theme_manager.getThemeManifest(id)
      .then(
        function (result) {
          theme_manager.current = result;

          private.inspection.insThemeId = id;
          private.inspection.insTemplateId = null;
          private.inspection.insTemplateTitle = result.title;
          private.inspection.insSourceType = "theme";
          private.inspection.insLastModified = result.last_modified;
          private.inspection.insLastSubmitted = result.date_created;
          private.inspection.insJobId = null;
          private.inspection.insType = null;
          private.inspection.insName = result.title;
          private.inspection.insUserId = null;
          private.inspection.rowId = null;
          private.inspection.insId = id;
          private.inspection.sections = result.template;

          defer.resolve({ value: private.inspection });
        },
        function (error) {
          private.inspection = {}; //failure eh?
          defer.reject(private.inspection);
          console.error(error.message);
        })

    return defer.promise;
  };

  public.getInspectionCache = function () {
    return private.inspection;
  };

  public.setInspectionCache = function (input) {
    private.inspection = input;
  };

  public.getInspections = function () {
    return database.getInspections();
  };


  public.getTemplates = function () {
    return database.getTemplates();
  };

  public.initSections = function () {
    return database.initSections();
  };



  public.getDBSections = function (insId) {
    var defer = $q.defer();
    var sections = [];
    database.getSections(insId).then(function (data) {
      var section = {};
      for (var i = 0; i < data.row.length; i++) {
        section.title = data.row.item(i).title;
        sections.push(section);
        section = {};
      }
      defer.resolve(sections);
    }, function () {
      defer.reject(sections);
    });
    return defer.promise;
  };

  public.getSections = function (insId) {
    var defer = $q.defer();
    var sections = [];
    public.getInspection(insId).then(function (data) {
      try {
        sections = data.value.sections;
        defer.resolve({
          'value': sections
        });
      } catch (e) {
        defer.reject(sections);
      }
    }, function () {
      defer.reject(sections);
    });
    return defer.promise;
  };

  public.getSection = function (insId, sectionIndex) {
    var defer = $q.defer();
    var section = {};
    public.getInspection(insId).then(function (data) {
      try {
        section = data.value.sections[sectionIndex];
        defer.resolve({
          'value': section
        });
      } catch (e) {
        defer.reject(section);
      }
    }, function () {
      defer.reject(section);
    });
    return defer.promise;
  };

  public.initFullInspection = function () {
    return database.initFullInspection();
  }

  public.getSubsections = function (insId, sectionIndex) {
    var defer = $q.defer();
    var subsections = [];
    public.getInspection(insId).then(function (data) {
      try {
        subsections = data.value.sections[sectionIndex].subsections;
        defer.resolve({
          'value': subsections
        });
      } catch (e) {
        console.log('Exception: ');
        console.log(e);
        defer.reject(subsections);
      }
    }, function () {
      defer.reject(subsections);
    });
    return defer.promise;
  };

  public.getSubSection = function (insId, sectionIndex, subsectionIndex) {
    var defer = $q.defer();
    var subsection = {};
    public.getInspection(insId).then(function (data) {
      try {
        subsection = data.value.sections[sectionIndex]
          .subsections[subsectionIndex];
        defer.resolve({
          'value': subsection
        });
      } catch (e) {
        console.log('Exception: ');
        console.log(e);
        defer.reject(subsection);
      }
    }, function () {
      defer.reject(subsection);
    });
    return defer.promise;
  };


  public.getQuestions = function (insId, sectionIndex, subsectionIndex) {
    var defer = $q.defer();
    var questions = [];
    public.getInspection(insId).then(function (data) {
      try {
        questions = data.value.sections[sectionIndex]
          .subsections[subsectionIndex].questions;
        defer.resolve({
          'value': questions
        });
      } catch (e) {
        console.log('Exception: ');
        console.log(e);
        defer.reject(questions);
      }
    }, function () {
      defer.reject(questions);
    });
    return defer.promise;
  };

  public.getQuestion = function (insId, sectionIndex, subsectionIndex, questionIndex) {
    var defer = $q.defer();
    var question = {};
    public.getInspection(insId).then(function (data) {
      try {
        question = data.value.sections[sectionIndex]
          .subsections[subsectionIndex]
          .questions[questionIndex];
        defer.resolve({
          'value': question
        });
      } catch (e) {
        console.log('Exception: ');
        console.log(e);
        defer.reject(question);
      }
    }, function () {
      defer.reject(question);
    });
    return defer.promise;
  };

  public.updateQuestion = function (insParams) {
    var deferPubUpdQuestion = $q.defer();
    var questionToUpdate = private.inspection.sections[insParams.sectionIndex].subsections[insParams.subsectionIndex].questions[insParams.questionIndex];
    private.updateQuestion(questionToUpdate, private.inspection.insId, public.mode).then(function(success) {
      deferPubUpdQuestion.resolve({
        message: 'success in public.updateQuestion'
      });
    }, function(error) {
      deferPubUpdQuestion.reject({
        message: 'Fail - public.updateQuestion: ' + error.message 
      });
    });

    return deferPubUpdQuestion.promise;
  };
  
  public.insertInspectionFromTemplate = function(templateId) {
     return database.insertFullInspectionFromTemplate(templateId);
  }

  public.saveInspection = function () {
    var defer = $q.defer();
    var promise = defer.promise;

    switch (public.mode) {
      case "inspection":
      case "template":
        promise = private.saveToDatabase();
        break;
      case "theme":
        promise = private.saveToThemeManager();
        break;
      default:
        defer.reject(public.mode + " is not a valid type.");
    }

    return promise;
  };
    
  public.deleteInspection = function (inspectionId) {
    var defer = $q.defer();
    var promise = defer.promise;

    switch (public.mode) {
      case "inspection":
      case "template":
        promise = private.deleteFromDatabase(inspectionId);
        break;
      case "theme":
        //TODO, theme delete?
        break;
      default:
        defer.reject(public.mode + " is not a valid type.");
    }

    return promise;
  };

  public.updateInspection = function () {
    var defer = $q.defer();
    var promise = defer.promise;

    switch (public.mode) {
      case "inspection":
      case "template":
        promise = private.updateDatabase();
        break;
      case "theme":
        promise = private.saveToThemeManager();
        break;
      default:
        defer.reject(public.mode + " is not a valid type.");
    }

    return promise;
  };
    
  public.updateInspectionMetadata = function () {
    var updInspMetadata = $q.defer();
    
    private.updateInsMetadata().then(function(success) {
      updInspMetadata.resolve({
        message: success.message  
      });
    }, function(error) {
      updInspMetadata.reject({
        message: error.message 
      });
    });
      
    return updInspMetadata.promise;
  };
    
  public.updateTitle = function(id, title) {
    var deferTitle = $q.defer();
    
    private.updateInspectionTitle(id, title).then(function(success){
      deferTitle.resolve({
        message: success.message 
      });
    }, function(error){
      deferTitle.resolve({
        message: error.message
      });    
    });
      
    return deferTitle.promise;
  };
    
  public.updateTemplate = function () {
    var defer = $q.defer();
    var promise = defer.promise;
      
    switch (public.mode) {
        case "inspection":
        case "template":
          promise = private.updateDBTemplate();
          break;
        case "theme":
          promise = private.saveToThemeManager();
          break;
        default:
          defer.reject(public.mode + " is not a valid type.");
    }
      
    return promise;
  };
  
  public.loadNewTemplate = function() {
      var deferred = $q.defer();

      private.inspection = {
          "insTemplateTitle":"",
          "insSourcetype":"template",
          "sections":[]
      };
      public.mode = "template";
      
      private.saveToDatabase().then(
         function (data) {
            console.log(data.message);
            private.inspection.insId = data.insId;
            private.inspection.rowId = data.insId;
            deferred.resolve(private.inspection);
      }, function (data) {
            console.log(data.message);
            deferred.resolve(private.inspection);
      });
      
      return deferred.promise;
  };    
    
  public.clearInspection = function () {
    private.inspection = {};
    console.log('Inspection Object cleared!');
  };
  
  private.updateDBTemplate = function() {
    var deferred = $q.defer();
      
    database.updateTemplate(private.inspection).then(function (data) {
      console.log(data.message);
      deferred.resolve();
    }, function (data) {
      console.log(data.message);
      deferred.reject();
    });

    return deferred.promise; 
  };
  
  private.updateInsMetadata = function() {
    var deferUpdateInsMetadata = $q.defer();
    
    database.updateInspectionMetadata(private.inspection).then(function(data) {
      deferUpdateInsMetadata.resolve({
        message: data.message
      });
    }, function(error){
      deferUpdateInsMetadata.reject({
        message: error.message
      });
    });
      
    return deferUpdateInsMetadata.promise;
  };

  private.updateInspectionTitle = function(inspectionId, inspectionTitle) {
    var deferTitle = $q.defer();
    
    database.updateInspectionTitle(inspectionId, inspectionTitle).then(function(success){
      deferTitle.resolve({
        message: success.message
      });
    }, function(error){
      deferTitle.reject({
        message: error.message
      });
    });
    
    return deferTitle.promise;
  };
  
  private.updateDatabase = function() {
    var deferred = $q.defer();

    database.updateInspection(private.inspection).then(function (data) {
      console.log(data.message);
      deferred.resolve();
    }, function (data) {
      console.log(data.message);
      deferred.reject();
    });

    return deferred.promise;
  };
    
  private.updateQuestion = function(question, insId, sourceType) {
    var deferUpdateQuestion = $q.defer();
      
    database.updateInspectionQuestion(question, insId, sourceType).then(function(success) {
      deferUpdateQuestion.resolve({
        message: 'Successful question update'
      });
    }, function(error) {
      deferUpdateQuestion.reject({
        message: 'Failure to update question: ' + error.message
      });
    });
      
    return deferUpdateQuestion.promise;
  };

  private.saveToDatabase = function () {
    var deferred = $q.defer();

    database.saveInspection(private.inspection, public.mode).then(function (data) {
      console.log('success parameter private.saveToDatabase: ');
      console.log(data);
      deferred.resolve({insId: data.inspectionId});
    }, function (data) {
      console.log(data.message);
      deferred.reject({message: data.message});
    });

    return deferred.promise;
  };

  private.deleteFromDatabase = function (inspectionId) {
    var deferred = $q.defer();

    database.deleteInspectionById(inspectionId).then(function(data) {
      deferred.resolve({message: 'Successful inspection deletion'});
    }, function(data) {
      deferred.reject(data.message);
    });

    return deferred.promise;
  }

  private.saveToThemeManager = function () {
    var defer = $q.defer();

    theme_manager.current.title = private.inspection.insTemplateTitle;
    theme_manager.current.template = private.inspection.sections;
    theme_manager.saveTheme(theme_manager.current);
    
    return defer.promise;
  };

  return public;
});
