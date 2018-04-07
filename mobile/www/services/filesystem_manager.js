app.factory('filesystem_manager', function ($q, $cordovaFile, $cordovaFileTransfer, $rootScope, $sce, $http, filesystem_mock, message_manager) {
    var public = {};
    var private = {};
    if (window.cordova) {
        // Static variables to be used for directory traversal
        private.inspectionPath = cordova.file.dataDirectory + "inspections/";
        private.templatePath = cordova.file.dataDirectory + "templates/";
        private.themePath = cordova.file.dataDirectory + "themes/";
        
    } else {
        return filesystem_mock;
    }
        
    
    // General Init Method
    public.init = function (force) {
        var defered = $q.defer();
        
        // Check if the themes folder has been created in the data directory, if not, copy the defaults from www
        $cordovaFile.checkDir(cordova.file.dataDirectory, "themes")
            .then(
                function (result) {
                    if (force === true) {
                        init();
                    } else {
                        console.log("Data has already been initialized, skipping...");
                    }
                },
                function (error) {
                    console.warn(error);
                    init();
                })

        function init() {
            var queue = [];
            console.log("INITIALIZING ALL DATA!!!");
            message_manager.register("assets/idea.jpg", "Welcome to Castle by Invenio!");
            message_manager.register("assets/feedback.jpg", 'We do software differently!  Use the <md-icon md-svg-icon="help_outline"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" /></svg></md-icon> to submit feedback and help shape the future.');
            message_manager.register("assets/gift.jpg", "We've got the basics down, but this is just the beginning. We need your help to make the vision a reality.");
            message_manager.register("assets/paper.jpg", "Let's get to it, and let us know what you think.");

            queue.push(public.resetThemes());
            queue.push(private.deleteInit());
            $q.all(queue).then(defered.resolve, defered.reject);
        }
        
        return defered.promise;
    };
    
    // Load reports from public file location
    public.getReports = function () {
        var deferred = $q.defer();
        var result = {
            "message":"ERROR: Could not access filesystem to load history.", 
            "data":[]
        };
        
        var file_promise = $cordovaFile.checkDir(cordova.file.externalDataDirectory, ".");
        file_promise.then(function (resultData) {
          resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (fileSystem) {
              var reader = fileSystem.createReader();
              reader.readEntries(function(success){
                  result.message = "";
                  result.data = success;
                  deferred.resolve(result);
              }, function(error){
                  result.message = "No Reports Found";
                  result.data = error;
                  deferred.reject(result);
              });
            }, function(error){
                result.data = error;
                deferred.reject(result);
          });
        }, function(error) {
            result.data = error;
            deferred.reject(result);
        });
        
        return deferred.promise;
    };

    // Generates unique id to be used for inspection/template files
    public.generateGuid = function () {
        // TODO: Use username instead of static string
        return $rootScope.hash(new Date().getTime().toString() + $rootScope.userId);
    };

    // Saves inspection to file
    public.saveInspection = function (filename, data) {
        var deferred = $q.defer();
        // Ensure filename has .json
        if (filename.indexOf('.json') < 0) {
            filename += ".json";
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
        // Ensure filename has .json
        if (filename.indexOf('.json') < 0) {
            filename += ".json";
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

        var result = file_system(path, function (fileSystem) {
            var reader = fileSystem.createReader();
            reader.readEntries(success, error);
        }, error);

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

    // Load all inspections in directory
    public.getInspections = function () {
        var deferred = $q.defer();
        var promises = [];

        var file_system = resolveLocalFileSystemURL;
        var path = private.inspectionPath;

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

        var result = file_system(path, function (fileSystem) {
            var reader = fileSystem.createReader();
            reader.readEntries(success, error);
        }, error);

        return deferred.promise;
    };

    // Copy template
    public.copyTemplate = function (newTemplate) {
        var deferred = $q.defer();

        // Write to file
        public.saveTemplate(newTemplate.guid + ".json", JSON.stringify(newTemplate))
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
        public.saveInspection(template.guid + ".json", JSON.stringify(template))
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
    private.deleteInit = function () {
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
                //newTemp.resolve(success);
                private.copyDefaultTemplates()
                    .then(function (success) {
                        newTemp.resolve(success);
                    }, function (error) {
                        newTemp.reject(error);
                        console.log(error);
                    });
            }, function (error) {
                newTemp.reject(error);
                console.log(error);
            });
        }, function (error) {
            // File not found error, go ahead and attempt add
            if (error.code === 1) {
                $cordovaFile.createDir(cordova.file.dataDirectory, "templates", true).then(function (success) {
                    private.copyDefaultTemplates()
                        .then(function (success) {
                            newTemp.resolve(success);
                        }, function (error) {
                            newTemp.reject(error);
                            console.log(error);
                        });
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
    public.saveThemeBlob = function (url, metadata) {
        var defered = $q.defer();

        var polling_handle = setInterval(function () {
            console.info(progress_buffer + "MB downloaded");
        }, 1000);
        var progress_buffer = 0;

        $cordovaFileTransfer.download(url, cordova.file.cacheDirectory + "/" + metadata.unique + ".castle", null, false)
            .then(
                // Success Function
                function (file) {
                    JJzip.unzip(file.nativeURL, {
                            "target": cordova.file.dataDirectory + "/themes/" + metadata.unique + "/"
                        },
                        function (result) {
                            $cordovaFile.removeFile(cordova.file.cacheDirectory, metadata.unique + ".castle");
                            $cordovaFile.moveDir(cordova.file.dataDirectory + "/themes/" + metadata.unique + "/", "theme",  cordova.file.dataDirectory + "/themes/", metadata.unique + "/");
                            clearInterval(polling_handle);
                            defered.resolve(result);
                        },
                        function (error) {
                            clearInterval(polling_handle);
                            defered.reject(error);
                        }
                    );
                },
                // Error Function
                function (error) {
                    clearInterval(polling_handle);
                    defered.reject(error);
                },
                // Progress Function
                function (progress) {
                    progress_buffer = (progress.loaded / 1000000).toFixed(3);
                }
            );

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

    private.copyDefaultTemplates = function () {
        return $cordovaFile.copyDir(cordova.file.applicationDirectory, "www/templates", cordova.file.dataDirectory, "templates")
            .then(
                function (result) {
                    console.log(result);
                    private.templatePath = result.nativeURL;
                    public.getTemplates();
                }
            );
    }

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
