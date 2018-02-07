app.factory('inspection_manager', function ($q, theme_manager, $sha, filesystem_manager) {
  var private = {};
  var public = {};
  private.inspections = {};
  private.inspection = {};
  public.mode = "inspection";
  public.returnLocation = {'name':'inspection', params:{}}
  public.getPrivateInspection = function() {
    return private.inspection;
  }
  public.getInspection = function (ins) {
    var defer = $q.defer();
    var promise = defer.promise;
    
    switch (public.mode) {
      case "inspection":
        console.log('Inspection Manager - Get Inspection');
        if ((angular.equals(private.inspection, {}) || (private.inspection.rowId + '') !== ins.insId)
		  && ins === undefined) {
		  var mockdefer = $q.defer();
          private.inspection = defaultTemplate;
          mockdefer.resolve({ "value":defaultTemplate });
          promise = mockdefer.promise;
        } else if (typeof(ins) == "object") {
          private.inspection = ins;
          defer.resolve();
        } else {
          defer.reject();
        }
        break;
      case "template":
        console.log('Inspection Manager - Get Template');
        if ((angular.equals(private.inspection, {}) || (private.inspection.rowId + '') !== ins.insId)
		  && ins === undefined) {
		  var mockdefer = $q.defer();
          private.inspection = defaultTemplate;
          mockdefer.resolve({ "value":defaultTemplate })
          promise = mockdefer.promise;
        } else if (typeof(ins) == "object") {
          private.inspection = ins;
          defer.resolve();
        } else {
          defer.reject();
        }
        break;
      case "theme":
        console.log('Inspection Manager - Get Theme ID: ' + ins.insId);
        promise = private.loadFromThemeManager(ins.insId);
        break;
      default:
        defer.reject(public.mode + " is not a valid type.");
    }

    return promise;
  };
    
  public.copy = function(ins) {
    var deferred = $q.defer();
      
    switch (public.mode) {
      case "inspection":
        private.copyInspection(ins);
        break;
      case "template":
        private.copyTemplate(ins).then(function(success){
          deferred.resolve(success);    
        }, function(error){
          deferred.reject(error);    
        });
        break;
      default:
        deferred.reject(public.mode + " is not a valid type.");
    }
      
    return deferred.promise;
  }
    
  private.copyInspection = function(ins) {
    var deferred = $q.defer();
      
    filesystem_manager.copyInspection(ins).then(function(success){
      deferred.resolve(success);    
    }, function(error) {
      deferred.reject(error);    
    });
      
    return deferred.promise;
  }
  
  private.copyTemplate = function(ins) {
    var deferred = $q.defer();
      
    filesystem_manager.copyTemplate(ins).then(function(success){
      console.log(success);
      deferred.resolve(success);    
    }, function(error) {
      console.log(error);
      deferred.reject(error);    
    });
      
    return deferred.promise;
  }
  
  private.loadTemplateFromFile = function(filename) {
    var deferred = $q.defer();
    
    if (angular.equals(private.inspection, {}) || (private.inspection.rowId + '') !== id) {
      filesystem_manager.getTemplate(filename).then(function(success) {
        private.inspection = JSON.parse(success);
        deferred.resolve({value: success});
      }, function(error) {
        deferred.reject({value: error});
      });
    } else {
      deferred.resolve({value: private.inspection});
    }

    return deferred.promise;
  }
  
  private.loadInspectionFromFile = function(filename) {
    var deferred = $q.defer();
      
    if (angular.equals(private.inspection, {}) || (private.inspection.rowId + '') !== id) {
      filesystem_manager.getInspection(filename).then(function(success) {
        private.inspection = JSON.parse(success);
        deferred.resolve({value: success});
      }, function(error) {
        deferred.reject({value: error});
      });
    } else {
      deferred.resolve({value: private.inspection});
    }

    return deferred.promise;
  }
  
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
    var tempDefer = $q.defer();

    filesystem_manager.getInspections()
      .then(function(success) {
        tempDefer.resolve(success);
      }, function(error) {
        tempDefer.reject(error);
    });
    return tempDefer.promise;
    // SQLite
  };


  public.getTemplates = function () {
    var tempDefer = $q.defer();

    filesystem_manager.getTemplates()
      .then(function(success) {
        tempDefer.resolve(success);
      }, function(error) {
        tempDefer.reject(error);
    });
    return tempDefer.promise;
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
    //var defer = $q.defer();
    //var questions = [];
    /*public.getInspection(insId).then(function (data) {
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
    });*/
    return private.inspection.sections[sectionIndex].subsections[subsectionIndex].questions;//defer.promise;
  };

  public.getQuestion = function (insId, sectionIndex, subsectionIndex, questionIndex) {
    /*var defer = $q.defer();
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
    });*/
    return private.inspection.sections[sectionIndex].subsections[subsectionIndex].questions[questionIndex];//defer.promise;
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
  
  public.saveInspection = function () {
    var defer = $q.defer();
    var promise = defer.promise;

    switch (public.mode) {
      case "inspection":
        promise = private.saveInspectionToFile();
        break;
      case "template":
        promise = private.saveTemplateToFile();
        break;
      case "theme":
        promise = private.saveToThemeManager();
        break;
      default:
        defer.reject(public.mode + " is not a valid type.");
    }

    return promise;
  };
    
  public.startInspection = function(template) {
    var deferred = $q.defer();

    private.copyTemplateToInspection(template).then(function(success){
      deferred.resolve(success);
    }, function(error){
      deferred.reject(error);
    });

    return deferred.promise;
  }
  
  private.copyTemplateToInspection = function (template) {
    var deferred = $q.defer();
      
    filesystem_manager.copyTemplateToInspection(template).then(function(success){
      deferred.resolve(success);
    }, function(error){
      deferred.reject(error);
    });
      
    return deferred.promise;
  }
  
  public.deleteInspection = function (filename) {
    var defer = $q.defer();
    var promise = defer.promise;

    switch (public.mode) {
      case "inspection":
        promise = private.deleteInspectionFile(filename);
        break;
      case "template":
        promise = private.deleteTemplateFile(filename);
        break;
      case "theme":
        //TODO, theme delete?
        break;
      default:
        defer.reject(public.mode + " is not a valid type.");
    }

    return promise;
  };
    
  private.deleteInspectionFile = function(filename) {
    var deferred = $q.defer();
      
    filesystem_manager.deleteInspection(filename).then(function(success) {
      deferred.resolve(success);
    }, function(error) {
      deferred.reject(error);    
    });
      
    return deferred.promise;
  }
    
  private.deleteTemplateFile = function(filename) {
    var deferred = $q.defer();
      
    // Call filesystem function for deletion
    filesystem_manager.deleteTemplate(filename).then(function(success){
      deferred.resolve(success);    
    }, function(error) {
      deferred.reject(error);    
    })
      
    return deferred.promise;
  }

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
    
  public.update = function(ins) {
    var deferTitle = $q.defer();
    
    private.updateInspectionFile(ins).then(function(success){
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

  // Uses parameter instead of private.inspection
  // (inspection.html page)
  private.updateInspectionFile = function(ins) {
    var deferUpdate = $q.defer();
    // Update hash
    ins.hash = null;
    ins.lastModified = new Date();
    ins.hash = $sha.hash(ins.toString());

    filesystem_manager.saveInspection(ins.guid + '.js', JSON.stringify(ins)).then(function(success){
      deferUpdate.resolve({
        message: success.message
      });
    }, function(error){
      deferUpdate.reject({
        message: error.message
      });
    });
    
    return deferUpdate.promise;
  };
  
  private.saveTemplateToFile = function() {
    var deferred = $q.defer();
    // If no guid is already associated, add one
    if (!private.inspection.guid) {
      private.inspection.guid = filesystem_manager.generateGuid();   
    }
    private.inspection.hash = null;
    private.inspection.hash = $sha.hash(private.inspection.toString());

    filesystem_manager.saveTemplate(private.inspection + ".js", JSON.stringify(private.inspection))
      .then(function(success) {
        deferred.resolve({value: success});
      }, function(error) {
        deferred.reject({value: reject});
      }
    );
      
    return deferred.promise;
  }
  
  private.saveInspectionToFile = function() {
    var deferred = $q.defer();
    // If no guid is already associated, add one
    if (!private.inspection.guid) {
      private.inspection.guid = filesystem_manager.generateGuid();   
    }
    private.inspection.hash = null;
	private.inspection.lastModified = new Date();
    private.inspection.hash = $sha.hash(private.inspection.toString());

    filesystem_manager.saveInspection(private.inspection.guid + ".js", JSON.stringify(private.inspection))
      .then(function(success) {
        deferred.resolve({value: success});
      }, function(error) {
        deferred.reject({value: reject});
      }
    );
      
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
