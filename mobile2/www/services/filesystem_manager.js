app.factory('filesystem_manager', function ($q, $cordovaFile, $sha) {
  var public = {};
  var private = {};
    
  document.addEventListener('deviceready', function() {
    // Static variables to be used for directory traversal
    public.inspectionPath = cordova.file.dataDirectory + "inspections/";
    public.templatePath = cordova.file.dataDirectory + "templates/";
  
    // Generates unique id to be used for inspection/template files
    public.generateGuid = function() {
      // TODO: Use username instead of static string
      return $sha.hash(new Date().getTime().toString() + "todo:addusernamehere");
    };
    
    // Saves inspection to file
    public.saveInspection = function(filename, data) {
      var deferred = $q.defer();
      // Ensure filename has .js
      if (filename.indexOf('.js') < 0) {
        filename += ".js";
      }
      // Ensure data is string
      if (typeof(data) !== "string") {
        JSON.stringify(data);
      }

      $cordovaFile.writeFile(public.inspectionPath, filename, data, true)
        .then(function(success) {
          deferred.resolve(success);
        }, function(error){
          deferred.reject(error);
      });
      
      return deferred.promise;
    }
  
    // Saves template to file
    public.saveTemplate = function(filename, data) {
      var deferred = $q.defer();
      // Ensure filename has .js
      if (filename.indexOf('.js') < 0) {
        filename += ".js";
      }
      // Ensure data is string
      if (typeof(data) !== "string") {
        JSON.stringify(data);
      }
      
      $cordovaFile.writeFile(public.templatePath, filename, data, true)
        .then(function(success) {
          deferred.resolve(success);
        }, function(error){
          deferred.reject(error);
      });
      
      return deferred.promise;
    }
  
    // Load template from file
    public.getTemplate = function(filename) {
      var deferred = $q.defer();

      $cordovaFile.readAsText(public.templatePath, filename)
          .then(function(success) {
            deferred.resolve(success);
          }, function(error) {
            deferred.reject(error);
      });
      
      return deferred.promise;
    }
  
    // Load all templates in directory
    public.getTemplates = function() {
      var deferred = $q.defer();
      var promises = [];

      var file_system = resolveLocalFileSystemURL;
      var path = public.templatePath;

      var result = file_system(path, function (fileSystem) {
        var reader = fileSystem.createReader();
        reader.readEntries(success, error);
      }, error);

      var success = function (files) {
        for (var index in files) {
          promises.push(public.getTemplate(files[index].name));
        }
        $q.all(promises).then(function(success){
          deferred.resolve(success);
        }, error);
      };

      var error = function (err) {
        deferred.reject(err);
      }

      return deferred.promise;
    }
  
    // Load inspection from file
    public.getInspection = function(filename) {
      var deferred = $q.defer();

      $cordovaFile.readAsText(public.inspectionPath, filename)
          .then(function(success) {
            deferred.resolve(success);
          }, function(error) {
            deferred.reject(error);
      });
      
      return deferred.promise;
    }
  
    // Load all templates in directory
    public.getInspections = function() {
      var deferred = $q.defer();
      var promises = [];

      var file_system = resolveLocalFileSystemURL;
      var path = public.inspectionPath;

      var result = file_system(path, function (fileSystem) {
        var reader = fileSystem.createReader();
        reader.readEntries(success, error);
      }, error);

      var success = function (files) {
        for (var index in files) {
          promises.push(public.getInspection(files[index].name));
        }
        $q.all(promises).then(function(success){
          deferred.resolve(success);
        }, error);
      };

      var error = function (err) {
        deferred.reject(err);
      }

      return deferred.promise;
    }
    
    // Copy template
    public.copyTemplate = function(template) {
      var deferred = $q.defer();
        
      // Copy incoming template and Edit unique identifiers
      var newTemplate = angular.copy(template);
      newTemplate.guid = public.generateGuid();
      newTemplate.hash = null;
      newTemplate.hash = $sha.hash(newTemplate.toString());

      // Write to file
      public.saveTemplate(newTemplate.guid + ".js", JSON.stringify(newTemplate))
        .then(function(success) {
        deferred.resolve({template: newTemplate});  
      }, function(error) {
        deferred.reject(error);  
      });
        
      return deferred.promise;
    }
    
    // Deletion
    public.deleteTemplate = function(filename) {
      var deferred = $q.defer();

      $cordovaFile.removeFile(public.templatePath, filename).then(function(success){
        deferred.resolve(success);  
      }, function(error){
        deferred.reject(error);  
      });
        
      return deferred.promise;
    }
  });
  return public;
});