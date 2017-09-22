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
                   //private.inspection = promise.value; //success
                   //console.log(private.inspection);
                   for (var i = 0; i < promise.row.length; i++) {
                     console.log(promise.row.item(i));
                   }
                   defer.resolve(private.inspection);
                   console.log(promise.message);
                },
                function (promise) {
                    private.inspection = {}; //failure eh?
                    defer.reject(private.inspection);
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
        database.getSections(insId).then(function(data){
            var section = {};
            for (var i = 0; i < data.row.length; i++) {
              section.title = data.row.item(i).title;
              sections.push(section);
              section = {};
            }
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
                            defer.resolve({'value':questions});
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