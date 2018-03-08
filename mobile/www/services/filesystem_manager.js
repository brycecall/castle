app.factory('filesystem_manager', function ($q, $cordovaFile, $rootScope, $sce, $http) {
    var public = {};
    var private = {};
    if (window.cordova) {
        // Static variables to be used for directory traversal
        private.inspectionPath = cordova.file.dataDirectory + "inspections/";
        private.templatePath = cordova.file.dataDirectory + "templates/";
        private.themePath = cordova.file.dataDirectory + "themes/";
    }
    
    // General Init Method
    public.init = function() {
        // Check if the themes folder has been created in the data directory, if not, copy the defaults from www
        $cordovaFile.checkDir(cordova.file.dataDirectory, "themes")
            .then(
                function (result) {
                    console.log("Themes have already been loaded, skipping...");
                },
                function (error) {
                    console.log("Loading default themes...");
                    private.copyDefaultThemes();
                })
    };
    
    // Generates unique id to be used for inspection/template files
    public.generateGuid = function () {
        // TODO: Use username instead of static string
        return $rootScope.hash(new Date().getTime().toString() + $rootScope.userId);
    };

    // Saves inspection to file
    public.saveInspection = function (filename, data) {
        var deferred = $q.defer();
        // Ensure filename has .js
        if (filename.indexOf('.js') < 0) {
            filename += ".js";
        }
        // Ensure data is string
        if (typeof (data) !== "string") {
            JSON.stringify(data);
        }

        $cordovaFile.writeFile(private.inspectionPath, filename, data, true)
            .then(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    // Saves template to file
    public.saveTemplate = function (filename, data) {
        var deferred = $q.defer();
        // Ensure filename has .js
        if (filename.indexOf('.js') < 0) {
            filename += ".js";
        }
        // Ensure data is string
        if (typeof (data) !== "string") {
            JSON.stringify(data);
        }

        $cordovaFile.writeFile(private.templatePath, filename, data, true)
            .then(function (success) {
                console.log(success);
                deferred.resolve(success);
            }, function (error) {
                console.log(error);
                deferred.reject(error);
            });

        return deferred.promise;
    };

    // Load template from file
    public.getTemplate = function (filename) {
        var deferred = $q.defer();

        $cordovaFile.readAsText(private.templatePath, filename)
            .then(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    // Load all templates in directory
    public.getTemplates = function () {
        var deferred = $q.defer();
        var promises = [];

        var file_system = resolveLocalFileSystemURL;
        var path = private.templatePath;

        var result = file_system(path, function (fileSystem) {
            var reader = fileSystem.createReader();
            reader.readEntries(success, error);
        }, error);

        var success = function (files) {
            for (var index in files) {
                promises.push(public.getTemplate(files[index].name));
            }
            $q.all(promises).then(function (success) {
                deferred.resolve(success);
            }, error);
        };

        var error = function (err) {
            deferred.reject(err);
        }

        return deferred.promise;
    };

    // Load inspection from file
    public.getInspection = function (filename) {
        var deferred = $q.defer();

        $cordovaFile.readAsText(private.inspectionPath, filename)
            .then(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    // Load all templates in directory
    public.getInspections = function () {
        var deferred = $q.defer();
        var promises = [];

        var file_system = resolveLocalFileSystemURL;
        var path = private.inspectionPath;

        var result = file_system(path, function (fileSystem) {
            var reader = fileSystem.createReader();
            reader.readEntries(success, error);
        }, error);

        var success = function (files) {
            for (var index in files) {
                promises.push(public.getInspection(files[index].name));
            }
            $q.all(promises).then(function (success) {
                deferred.resolve(success);
            }, error);
        };

        var error = function (err) {
            deferred.reject(err);
        }

        return deferred.promise;
    };

    // Copy template
    public.copyTemplate = function (newTemplate) {
        var deferred = $q.defer();

        // Write to file
        public.saveTemplate(newTemplate.guid + ".js", JSON.stringify(newTemplate))
            .then(function (success) {
                deferred.resolve({
                    'template': newTemplate
                });
            }, function (error) {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    // Generate inspection from template file 
    public.copyTemplateToInspection = function (template) {
        var deferred = $q.defer();

        // Write to file
        public.saveInspection(template.guid + ".js", JSON.stringify(template))
            .then(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    // Deletion Template
    public.deleteTemplate = function (filename) {
        var deferred = $q.defer();

        $cordovaFile.removeFile(private.templatePath, filename).then(function (success) {
            deferred.resolve(success);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    };

    // Deletion Inspection
    public.deleteInspection = function (filename) {
        var deferred = $q.defer();

        $cordovaFile.removeFile(private.inspectionPath, filename).then(function (success) {
            deferred.resolve(success);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    };

    // Delete all template & inspection data
    public.deleteInit = function () {
        var deferred = $q.defer();
        // Promises to track the different events involved with deleteInit
        var templateDefer = $q.defer();
        var inspectionDefer = $q.defer();
        var newTemp = $q.defer();
        var newInsp = $q.defer();
        //var newFile = $q.defer();
        var promises = [templateDefer.promise, inspectionDefer.promise, newTemp.promise, newInsp.promise /*, newFile.promise*/ ];

        // Delete & Add Temp Dir
        $cordovaFile.removeRecursively(cordova.file.dataDirectory, "templates").then(function (success) {
            templateDefer.resolve(success);
            $cordovaFile.createDir(cordova.file.dataDirectory, "templates", true).then(function (success) {
                newTemp.resolve(success);
                /*        Commented out for now, writes default template   
                          // Add default template to template directory (done here to ensure the directory is available)
                          $cordovaFile.writeFile(private.templatePath, "default_template.js", JSON.stringify(defaultTemplate), true)
                            .then(function(success) {
                              newFile.resolve(success);
                            }, function(error) {
                              newFile.reject(error);
                              console.log(error);
                            });*/
            }, function (error) {
                newTemp.reject(error);
                console.log(error);
            });
        }, function (error) {
            // File not found error, go ahead and attempt add
            if (error.code === 1) {
                $cordovaFile.createDir(cordova.file.dataDirectory, "templates", true).then(function (success) {
                    newTemp.resolve(success);
                    // Add default template to template directory (done here to ensure the directory is available)
                    // Commented out for now, creates local file from default template object
                    /*            $cordovaFile.writeFile(private.templatePath, "default_template.js", JSON.stringify(defaultTemplate), true)
                                  .then(function(success) {
                                    newFile.resolve(success);
                                  }, function(error) {
                                    newFile.reject(error);
                                    console.log(error);
                                  });*/
                }, function (error) {
                    newTemp.reject(error);
                    templateDefer.reject(error);
                    //newFile.reject(error);  *commented out, adds local copy of default template*
                    console.log(error);
                });
            } else {
                templateDefer.reject(error);
            }
        });

        // Wipe Inspection folder, re-create
        $cordovaFile.removeRecursively(cordova.file.dataDirectory, "inspections").then(function (success) {
            inspectionDefer.resolve(success);
            $cordovaFile.createDir(cordova.file.dataDirectory, "inspections", true)
                .then(function (success) {
                    newInsp.resolve(success);
                }, function (error) {
                    newInsp.reject(error);
                    console.log(error);
                });
        }, function (error) {
            if (error.code === 1) {
                $cordovaFile.createDir(cordova.file.dataDirectory, "inspections", true)
                    .then(function (success) {
                        newInsp.resolve(success);
                    }, function (error) {
                        newInsp.reject(error);
                        inspectionDefer.reject(error);
                        console.log(error);
                    });
            } else {
                inspectionDefer.reject(error);
            }
            console.log(error);
        });

        $q.all(promises).then(function (success) {
            deferred.resolve(success);
        }, function (error) {
            deferred.reject(error);
        });

        console.log(promises);
        return deferred.promise;
    };

    // Get a list of all installed themes
    public.getThemes = function () {
        var defered = $q.defer();

        if (window['cordova'] == undefined) {
            // Desktop Browser Implementation
            private.themes = ["a94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde8"]
            defered.resolve(private.themes);

        } else {
            // Device Implementation
            var file_system = resolveLocalFileSystemURL;
            var path = private.themePath;

            var result = file_system(path, function (fileSystem) {
                var reader = fileSystem.createReader();
                reader.readEntries(success, error);
            }, error);

            var success = function (files) {
                var themes = [];
                for (var index in files) {
                    // Ignore all files
                    if (files[index].isDirectory) {
                        themes.push(files[index].name);
                    }
                }
                private.themes = themes;
                defered.resolve(themes);
            };

            var error = function (err) {
                defered.reject(err);
            }
        }

        return defered.promise;
    };

    // Load a theme from the on-device themes loaded
    public.getThemeManifest = function (themeId) {
        var defered = $q.defer();
        var resource = private.themePath + themeId + "/manifest.json";
        $sce.trustAsUrl(resource);

        $http.get(resource)
            .then(function (response) {
                    if (response.data.entry_point.indexOf("themes") !== 0) {
                        response.data.entry_point = private.themePath + response.data.unique + "/" + response.data.entry_point;
                        response.data.preview = private.themePath + response.data.unique + "/" + response.data.preview;
                        response.data.thumbnail = private.themePath + response.data.unique + "/" + response.data.thumbnail;
                    }
                    defered.resolve(response.data);
                },
                function (error) {
                    defered.reject(error);
                });
        return defered.promise;
    };

    // Save the manifest of a theme to the filesystem
    public.saveThemeManifest = function (theme) {
        var defered = $q.defer();
        theme.hash = $rootScope.hash(JSON.stringify(theme));
        theme.last_modified = (new Date()).toISOString();

        // Remove the theme root dir
        theme.entry_point = theme.entry_point.split(theme.unique + '/')[1];
        theme.preview = theme.preview.split(theme.unique + '/')[1];
        theme.thumbnail = theme.thumbnail.split(theme.unique + '/')[1];

        $cordovaFile.writeFile(cordova.file.dataDirectory, "themes/" + theme.unique + "/manifest.json", JSON.stringify(theme), true)
            .then(
                function (result) {
                    console.log(result);
                },
                function (error) {
                    console.log(error);
                }
            );

        return defered.promise;
    };

    // Saves base64 encoded zip file of the theme
    public.saveThemeBlob = function (blob) {
        var defered = $q.defer();
        
        console.log("Blob Data: " + blob);
        defered.resolve();
        
        return defered.promise;
    };

    // Reset all themes back to defaults
    public.resetThemes = function () {
        var defered = $q.defer();

        // Resolve either way (since we wanted to just delete the directory either way)
        $cordovaFile.removeRecursively(cordova.file.dataDirectory, "themes").then(
            function (data) {
                private.copyDefaultThemes().then(function () {
                    defered.resolve(data);
                });
            },
            function (data) {
                private.copyDefaultThemes().then(function () {
                    defered.resolve(data);
                });
            })

        return defered.promise;
    };

    private.copyDefaultThemes = function () {
        return $cordovaFile.copyDir(cordova.file.applicationDirectory, "www/themes", cordova.file.dataDirectory, "themes")
            .then(
                function (result) {
                    console.log(result);
                    private.themePath = result.nativeURL;
                    public.getThemes();
                });
    };

    // Copy a theme
    public.copyTheme = function (themeId) {
        // TODO
        throw "NOT IMPLEMENTED";
    };

    return public;
});

app.run(function (filesystem_manager) {
    document.addEventListener('deviceready', filesystem_manager.init);
});
