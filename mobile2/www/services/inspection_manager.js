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
        if (angular.equals(private.inspection, {}) || private.inspection.rowId !== id) {
            database.getInspection(id).then(
                function (promise) {
                    private.inspection = promise; //success
                },
                function (promise) {
                    private.inspection = {}; //failure eh?
                }
            );
        } 
        return private.inspection;
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
        var sections = [];
        /* load private.inspection */
        public.getInspection(insId);
        
        if (private.inspection.sections) {
            sections = private.inspection.sections;
        }
        return sections;
       // return database.getSections();
    };
    
    public.getSection = function(insId, sectionId) {
        var section = {};
        /* load private.inspection */
        public.getInspection(insId);
        
        if (private.inspection.sections) {
            section = private.inspection.sections[sectionId];
        }
        return section;
       // return database.getSections();
    };
    
    public.initSubSections = function() {
        return database.initSubSections();
    };
    
    public.initFullInspection = function() {
        return database.initFullInspection();
    }

/*    public.getSubSections = function(sectionId) {
        return database.getSubSections(sectionId);
    };*/
    
    public.getInspectionById = function(id) {
        return database.getInspectionById(id);
    }

    public.getSubSections = function(insId, sectionId) {
        var section = {};
        var subSections = [];
        /* load private.inspection */
        public.getInspection(insId);
        if (private.inspection.sections) {
            section = private.inspection.sections[sectionId];
            if (section.subSections) {
                subSections = section.subSections;
            }
        }
        return subSections;
        //return database.getSubSections();
    };
    
    public.getSubSection = function(insId, sectionId, subSectionId) {
        var section = {};
        var subsection = {};
        /* load private.inspection */
        public.getInspection(insId);
        
        if (private.inspection.sections) {
            section = private.inspection.sections[sectionId];
            if (section.subSections) {
                subsection = section.subSections[subSectionId];
            }
        }
        return subsection;
    };
    
    
    public.getQuestions = function(insId, sectionId, subSectionId) {
        var section = {};
        var subsection = {};
        var questions = [];
        /* load private.inspection */
        public.getInspection(insId);
        if (private.inspection.sections) {
            section = private.inspection.sections[sectionId];
            if (section.subSections) {
                subsection = section.subSections[subSectionId];
                if (subsection.questions) {
                    questions = subsection.questions;
                }
            }
        }
        return questions;
    };
    
    public.getQuestion = function(insId, sectionId, subSectionId, questionId) {
        var section = {};
        var subsection = {};
        var question = {};
        /* load private.inspection */
        public.getInspection(insId);
        if (private.inspection.sections) {
            section = private.inspection.sections[sectionId];
            if (section.subSections) {
                subsection = section.subSections[subSectionId];
                if (subsection.questions) {
                    question = subsection.questions[questionId];
                }
            }
        }
        return question;
    };

    return public;
});