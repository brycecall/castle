app.factory('filesystem_manager', function ($q, $cordovaFile, $sha) {

    
    var public = {};
    var private = {};

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
        
      // Write to file
      public.saveTemplate(newTemplate.guid + ".js", JSON.stringify(newTemplate))
        .then(function(success) {
        deferred.resolve({template: newTemplate});  
      }, function(error) {
        deferred.reject(error);  
      });

      return deferred.promise;
    }
    
    // Generate inspection from template file 
    public.copyTemplateToInspection = function(template) {
      var deferred = $q.defer();

      // Write to file
      public.saveInspection(template.guid + ".js", JSON.stringify(template))
        .then(function(success) {
        deferred.resolve(success);  
      }, function(error) {
        deferred.reject(error);  
      });

      return deferred.promise;
    }
    
    // Deletion Template
    public.deleteTemplate = function(filename) {
      var deferred = $q.defer();

      $cordovaFile.removeFile(public.templatePath, filename).then(function(success){
        deferred.resolve(success);  
      }, function(error){
        deferred.reject(error);  
      });
        
      return deferred.promise;
    }
    
    // Deletion Inspection
    public.deleteInspection = function(filename) {
      var deferred = $q.defer();

      $cordovaFile.removeFile(public.inspectionPath, filename).then(function(success){
        deferred.resolve(success);  
      }, function(error){
        deferred.reject(error);  
      });
        
      return deferred.promise;
    }
    
    // Delete all template & inspection data
    public.deleteInit = function() {
      var deferred = $q.defer();
      // Promises to track the different events involved with deleteInit
      var templateDefer = $q.defer();
      var inspectionDefer = $q.defer();
      var newTemp = $q.defer();
      var newInsp = $q.defer();
      var newFile = $q.defer();
      var promises = [templateDefer.promise, inspectionDefer.promise, newTemp.promise, newInsp.promise, newFile.promise];    
        
      // Delete & Add Temp Dir, then add default template file
      $cordovaFile.removeRecursively(cordova.file.dataDirectory, "templates").then(function(success){
        templateDefer.resolve(success);
        $cordovaFile.createDir(cordova.file.dataDirectory, "templates", true).then(function(success) {
          newTemp.resolve(success);
          // Add default template to template directory (done here to ensure the directory is available)
          $cordovaFile.writeFile(public.templatePath, "default_template.js", JSON.stringify(defaultTemplate), true)
            .then(function(success) {
              newFile.resolve(success);
            }, function(error) {
              newFile.reject(error);
              console.log(error);
            });
        }, function(error) {
          newTemp.reject(error);
          console.log(error);
        });
      }, function(error){
        // File not found error, go ahead and attempt add
        if(error.code === 1) {
          $cordovaFile.createDir(cordova.file.dataDirectory, "templates", true).then(function(success) {
            newTemp.resolve(success);
            // Add default template to template directory (done here to ensure the directory is available)
            $cordovaFile.writeFile(public.templatePath, "default_template.js", JSON.stringify(defaultTemplate), true)
              .then(function(success) {
                newFile.resolve(success);
              }, function(error) {
                newFile.reject(error);
                console.log(error);
              });
          }, function(error) {
            newTemp.reject(error);
            templateDefer.reject(error);
            newFile.reject(error);
            console.log(error);
          });
        } else {
          templateDefer.reject(error);
        }
      });
        
      // Wipe Inspection folder, re-create
      $cordovaFile.removeRecursively(cordova.file.dataDirectory, "inspections").then(function(success){
        inspectionDefer.resolve(success);
        $cordovaFile.createDir(cordova.file.dataDirectory, "inspections", true)
          .then(function(success) {
            newInsp.resolve(success);
          }, function(error) {
            newInsp.reject(error);
            console.log(error);
          });
      }, function(error){
        if (error.code === 1) {
          $cordovaFile.createDir(cordova.file.dataDirectory, "inspections", true)
          .then(function(success) {
            newInsp.resolve(success);
          }, function(error) {
            newInsp.reject(error);
            inspectionDefer.reject(error);
            console.log(error);
          });
        } else {
          inspectionDefer.reject(error);
        }
        console.log(error);
      });

      $q.all(promises).then(function(success){
        deferred.resolve(success); 
      }, function(error) {
        deferred.reject(error);
      });
        
      console.log(promises);
      return deferred.promise;
    }
  return public;
});