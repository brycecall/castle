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
                   private.inspection = promise.value; //success
                   //console.log(private.inspection);
//                   for (var i = 0; i < promise.row.length; i++) {
//                     console.log(promise.row.item(i));
//                   }
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
        public.getInspection(insId).then(function(data){
            try {
                sections = data.sections;
                defer.resolve({'value':sections});
            } catch(e) {
                defer.reject(sections);
            }
        }, function() {
            defer.reject(sections);
        });
        return defer.promise;
    };
    
    public.getDBSections = function(insId) {
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
            try {
                section = data.sections[sectionIndex];
                defer.resolve({'value':section});
            } catch(e) {
                defer.reject(section);
            }
        }, function() {
            defer.reject(section);
        });
        return defer.promise;
    };

    public.initFullInspection = function() {
        return database.initFullInspection();
    }

    public.getSubsections = function(insId, sectionIndex) {
        var defer = $q.defer();
        var subsections = [];
        public.getInspection(insId).then(function(data){
            try {
                subsections = data.sections[sectionIndex].subsections;
                defer.resolve({'value':subsections});
            } catch(e) {
                console.log('Exception: ');
                console.log(e);
                defer.reject(subsections);
            }
        }, function() {
            defer.reject(subsections);
        });
        return defer.promise;
    };
    
    public.getSubSection = function(insId, sectionIndex, subsectionIndex) {
        var defer = $q.defer();
        var subsection = {};
        public.getInspection(insId).then(function(data){
            try {
                subsection = data.sections[sectionIndex]
                                  .subsections[subsectionIndex];
                defer.resolve({'value':subsection});
            } catch(e) {
                console.log('Exception: ');
                console.log(e);
                defer.reject(subsection);
            }
        }, function() {
            defer.reject(subsection);
        });
        return defer.promise;
    };
    
    
    public.getQuestions = function(insId, sectionIndex, subsectionIndex) {
        var defer = $q.defer();
        var questions = [];
        public.getInspection(insId).then(function(data){
            try {
                questions = data.sections[sectionIndex]
                                .subsections[subsectionIndex].questions;
                defer.resolve({'value':questions});
            } catch(e) {
                console.log('Exception: ');
                console.log(e);
                defer.reject(questions);
            }
        }, function() {
            defer.reject(questions);
        });
        return defer.promise;
    };
    
    public.getQuestion = function(insId, sectionIndex, subsectionIndex, questionIndex) {
        var defer = $q.defer();
        var question = {};
        public.getInspection(insId).then(function(data){
            try {
                question = data.sections[sectionIndex]
                                .subsections[subsectionIndex]
                                .questions[questionIndex];
                defer.resolve({'value':question});
            } catch(e) {
                console.log('Exception: ');
                console.log(e);
                defer.reject(question);
            }
        }, function() {
            defer.reject(question);
        });
        return defer.promise;
    };

    return public;
});