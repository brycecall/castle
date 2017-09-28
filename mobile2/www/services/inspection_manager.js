app.factory('inspection_manager', function (database, $q) {
    var private = {};
    var public = {};

    private.inspection = {};
    
  // Init themes & templates
  /*var themeData = database.initThemes();
  themeData.then(
      //Success
      function(promise) {
        console.log(promise.message);
      }, 
      //Fail
      function(promise) {
        console.log(promise.message);
      }
  );*/
  /*var templateData = database.initTemplates();
  templateData.then(
      //Success
      function(promise) {
        console.log(promise.message);
      }, 
      //Fail
      function(promise) {
        console.log(promise.message);
      }
  );*/
    public.getInspection = function(id) {
        console.log('Inspection Manager Get Inspection ID: ' + id);
        var defer = $q.defer();

        if (angular.equals(private.inspection, {}) || (private.inspection.rowId + '') !== id) {
                database.getInspectionById(id).then(
                function (promise) {
                // Build Inspection Fields
                private.inspection.insLastModified = promise.row.item(0).insLastModified;
                private.inspection.insLastSubmitted = promise.row.item(0).insLastSubmitted;
                private.inspection.insJobId = promise.row.item(0).insJobId;
                private.inspection.insType = promise.row.item(0).insType;
                private.inspection.insName = promise.row.item(0).insName;
                private.inspection.insUserId = promise.row.item(0).insUserId;
                private.inspection.rowId = promise.row.item(0).rowId;
                private.inspection.insId = promise.row.item(0).rowId;
                private.inspection.sections = [];
                var i = 0;
                var increment = 0;
                do {
                    // Build section
                    var section = {
                      title: promise.row.item(i).secTitle,
                      subsections: []
                    }
                    // Build subsections
                    for (var j = i; promise.row.item(i).secRowId == promise.row.item(j).secRowId; j++) {
                      // Build subsection
                      var subsection = {
                          title: promise.row.item(j).susTitle,
                          questions: []
                      }                        
                      // Build questions
                      // Validation check to make sure there are questions (many subs dont have them currently but this will likely not be the case in the future)
                      if (promise.row.item(j).queRowId) {
                        for (var k = j; promise.row.item(j).susRowId == promise.row.item(k).susRowId; k++) {
                          // Build question object
                          var question = {
                              title: promise.row.item(k).queTitle,
                              description: promise.row.item(k).queDescription,
                              type: promise.row.item(k).queType,
                              values: [],
                              validation: {
                                type: null,
                                min: promise.row.item(k).queMin,
                                max: promise.row.item(k).queMax,
                                isRequired: promise.row.item(k).queRequired
                              },
                              notApplicable: promise.row.item(k).queNotApplicable,
                              severity: null,
                              showSummaryRemark: promise.row.item(k).queShowSummaryRemark,
                              showDescription: promise.row.item(k).queShowDescription,
                              photos: []
                          }                          
                          // Build answers
                          for (var l = k; promise.row.item(k).queRowId == promise.row.item(l).queRowId; l++) {
                            var answer = {
                                key: promise.row.item(l).ansValue,
                                remark: ''
                            }
                            question.values.push(answer);
                            // Use increment variable to track progress in promise.row data block
                            increment = l;
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
                      section.subsections.push(subsection);
                    }
                    private.inspection.sections.push(section);
                    i = increment + 1;
                } while (i < promise.row.length - 1);
                   defer.resolve(private.inspection);
                },
                function (promise) {
                    private.inspection = {}; //failure eh?
                    defer.reject(private.inspection);
                    console.log('failure: ' + promise.message)
                }
            );
        } else {
            defer.resolve(private.inspection);
        }
        return defer.promise;
    };
    
    public.getReports = function() {
        return database.getReports();
    };
    
    public.getThemes = function() {
        return database.getThemes();
    };
    
    public.getTemplates = function() {
        return database.getTemplates();
    };
    
    public.initSections = function() {
        return database.initSections();
    };
    
    public.getSections = function(insId) {
        var defer = $q.defer();
        var sections = [];
        public.getInspection(insId).then(function(data){
            sections = data.sections;
            defer.resolve(sections);
        }, function() {
            defer.reject(sections);
        });
        return defer.promise;
    };
    
    public.getSection = function(insId, sectionIndex) {
        var defer = $q.defer();
        var section = {};
        public.getInspection(insId).then(function(data){
            if (data.sections) {
                section = data.sections[sectionIndex];
                defer.resolve(section);
            } else {
                defer.reject(section);
            }
        }, function() {
            defer.reject(section);
        });
        return defer.promise;
       // return database.getSections();
    };

    public.initFullInspection = function() {
        return database.initFullInspection();
    }

    public.getSubSections = function(insId, sectionIndex) {
        var defer = $q.defer();
        var section = {};
        var subsections = [];
        public.getInspection(insId).then(function(data) {
            if (data.sections) {
                section = data.sections[sectionIndex];
                if (section.subsections) {
                    subsections = section.subsections;
                    defer.resolve(subsections);
                } else {
                    defer.reject(subsections);
                }
                    
            } else {
                defer.reject(subsections);
            }
        }, function() {
            defer.reject(subsections);
        });
        return defer.promise;
        //return database.getSubSections();
    };
    
    public.getSubSection = function(insId, sectionIndex, subsectionIndex) {
        var defer = $q.defer();
        var section = {};
        var subsection = {};
        /* load private.inspection */
        public.getInspection(insId).then(
            function(data){
                if (private.inspection.sections) {
                    section = private.inspection.sections[sectionIndex];
                    if (section.subsections) {
                        subsection = section.subsections[subsectionIndex];
                        defer.resolve(subsection);
                    } else {
                        defer.reject(subsection);
                    }
                } else {
                    defer.reject(subsection);
                }
            }, function(data){
                defer.reject(subsection);
            }
        );
    
        return defer.promise;
    };
    
    
    public.getQuestions = function(insId, sectionIndex, subsectionIndex) {
        var defer = $q.defer();
        var section = {};
        var subsection = {};
        var questions = [];
        /* load private.inspection */
        public.getInspection(insId).then(
            function(data){
                if (private.inspection.sections) {
                    section = private.inspection.sections[sectionIndex];
                    if (section.subsections) {
                        subsection = section.subsections[subsectionIndex];
                        if (subsection.questions) {
                            questions = subsection.questions;
                            defer.resolve(questions);
                        } else {
                            defer.reject(questions);
                        }
                    } else {
                        defer.reject(questions);
                    }
                } else {
                    defer.reject(questions);
                }
            }, function(data){
                defer.reject(questions);
            }
        );
        return defer.promise;
    };
    
    public.getQuestion = function(insId, sectionIndex, subsectionIndex, questionIndex) {
        var defer = $q.defer();
        var section = {};
        var subsection = {};
        var question = {};
        /* load private.inspection */
        public.getInspection(insId).then(
            function(data){
                if (private.inspection.sections) {
                    section = private.inspection.sections[sectionIndex];
                    if (section.subsections) {
                        subsection = section.subsections[subsectionIndex];
                        if (subsection.questions) {
                            question = subsection.questions[questionIndex];
                            defer.resolve({ 'value':question });
                        } else {
                            defer.reject(question);
                        }
                    } else {
                        defer.reject(question);
                    }
                } else {
                    defer.reject(question);
                }
            }, function(data){
                defer.reject(question);
            }
        );
        return defer.promise;    
    };

    return public;
});