app.factory('filesystem_mock', function ($q, $cordovaFile, $sha) {
  var public = {};
  var private = {};
  
    // Static variables to be used for directory traversal
    public.inspectionPath = "inspections/";
    public.templatePath   = "templates/";
    private.stringDefaultTemplate = JSON.stringify(defaultTemplate);
    private.createSuccessPromise = function() {
      var successObj = {
          message: "success",
          data:true
      };
      var deferred = $q.defer();
      deferred.resolve(successObj);
      return deferred.promise;
    }
    
    // Generates unique id to be used for inspection/template files
    public.generateGuid = function() {
      // TODO: Use username instead of static string
      return $sha.hash(new Date().getTime().toString() + "todo:addusernamehere");
    };
      
    // Saves inspection to file
    public.saveInspection = function(filename, data) {
        return private.createSuccessPromise();
    }
    
    // Saves template to file
    public.saveTemplate = function(filename, data) {
        return private.createSuccessPromise();
    }
  
    // Load template from file
    public.getTemplate = function(filename) {
      var deferred = $q.defer();
      deferred.resolve(private.stringDefaultTemplate);
      return deferred.promise;
    }
  
    // Load all templates in directory
    public.getTemplates = function() {
      var deferred = $q.defer();
      var newTemplate = angular.copy(private.stringDefaultTemplate);
      deferred.resolve([private.stringDefaultTemplate, newTemplate]);
      return deferred.promise;
    }
  
    // Load inspection from file
    public.getInspection = function(filename) {
      var deferred = $q.defer();
      deferred.resolve(private.stringDefaultTemplate);
      return deferred.promise;
    }
  
    // Load all templates in directory
    public.getInspections = function() {
      var deferred = $q.defer();
      deferred.resolve([private.stringDefaultTemplate]);
      return deferred.promise;
    }

    // Copy template
    public.copyTemplate = function(template) {
      var deferred = $q.defer();
      deferred.resolve({template: private.stringDefaultTemplate});  
      return deferred.promise;
    }

    // Generate inspection from template file 
    public.copyTemplateToInspection = function(template) {
      var deferred = $q.defer();
      var newTemplate = angular.copy(template);
      deferred.resolve(template);
      return deferred.promise;
    }
    
    // Deletion Template
    public.deleteTemplate = function(filename) {
        return private.createSuccessPromise();
    }
    
    // Deletion Inspection
    public.deleteInspection = function(filename) {
        return private.createSuccessPromise();
    }
    
    // Delete all template & inspection data
    public.deleteInit = function() {
        return private.createSuccessPromise();
    }
  return public;
});