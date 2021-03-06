app.factory('inspection_manager', function ($q, theme_manager, $sha, filesystem_manager, filesystem_mock, $rootScope) {
    var private = {};
    var public = {};

    if (!window.cordova) {
        console.log("Loading filesystem mock");
        filesystem_manager = filesystem_mock;
    }

    private.inspections = {};
    private.inspection = {};
    public.mode = "inspection";
    public.returnLocation = {
        'name': 'inspection',
        params: {}
    }

    public.getPrivateInspection = function () {
        return private.inspection;
    }

    public.getInspection = function (ins) {
        var defer = $q.defer();
        var promise = defer.promise;

        switch (public.mode) {
            case "inspection":
                console.log('Inspection Manager - Get Inspection');
                if (typeof (ins) == "string") {
                    filesystem_manager.getInspection(ins + '.json').then(
                        function (inspection) {
                            private.inspection = inspection;
                            defer.resolve(private.inspection);
                        }, function (error) {
                            defer.reject({message:"Inspection not found"});
                        }
                    );
                } else if ((angular.equals(private.inspection, {}) || (private.inspection.guid + '') !== ins.guid) &&
                    ins === undefined) {
                    var mockdefer = $q.defer();
                    private.inspection = defaultTemplate;
                    mockdefer.resolve({
                        "value": defaultTemplate
                    });
                    promise = mockdefer.promise;
                } else if (typeof (ins) == "object") {
                    private.inspection = ins;
                    defer.resolve(private.inspection);
                } else {
                    defer.reject({message: "what the eefffff?!"});
                }
                break;
            case "template":
                console.log('Inspection Manager - Get Template');
                if ((angular.equals(private.inspection, {}) || (private.inspection.guid + '') !== ins.guid) &&
                    ins === undefined) {
                    var mockdefer = $q.defer();
                    private.inspection = defaultTemplate;
                    mockdefer.resolve({
                        "value": defaultTemplate
                    })
                    promise = mockdefer.promise;
                } else if (typeof (ins) == "object") {
                    private.inspection = ins;
                    defer.resolve(private.inspection);
                } else if (typeof(ins) == "string") {
                    filesystem_manager.getTemplate(ins + '.json').then(
                        function (inspection) {
                            private.inspection = inspection;
                            defer.resolve(private.inspection);
                        }, function (error) {
                            defer.reject({message:"Template not found"});
                        }
                    );
                } else {
                    defer.reject();
                }
                break;
            case "theme":
                console.log('Inspection Manager - Get Theme ID: ' + ins.unique);
                promise = private.loadFromThemeManager(ins.unique);
                break;
            default:
                defer.reject(public.mode + " is not a valid type.");
        }

        return promise;
    };

    public.copy = function (ins) {
        var deferred = $q.defer();
        var newInspection = angular.copy(ins);
        newInspection.guid = filesystem_manager.generateGuid();
        newInspection.syncIcon = ""
        switch (public.mode) {
            case "inspection":
                private.copyInspection(newInspection);
                break;
            case "template":
                private.copyTemplate(newInspection).then(function (success) {
                    deferred.resolve(success);
                }, function (error) {
                    deferred.reject(error);
                });
                break;
            default:
                deferred.reject(public.mode + " is not a valid type.");
        }

        return deferred.promise;
    }

    private.copyInspection = function (ins) {
        var deferred = $q.defer();
        
        filesystem_manager.copyInspection(ins).then(function (success) {
            deferred.resolve(success);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    private.copyTemplate = function (ins) {
        var deferred = $q.defer();
        filesystem_manager.copyTemplate(ins).then(function (success) {
            console.log(success);
            deferred.resolve(success);
        }, function (error) {
            console.log(error);
            deferred.reject(error);
        });

        return deferred.promise;
    }

    private.loadTemplateFromFile = function (filename) {
        var deferred = $q.defer();

        if (angular.equals(private.inspection, {}) || (private.inspection.rowId + '') !== id) {
            filesystem_manager.getTemplate(filename).then(function (success) {
                private.inspection = JSON.parse(success);
                deferred.resolve({
                    value: success
                });
            }, function (error) {
                deferred.reject({
                    value: error
                });
            });
        } else {
            deferred.resolve({
                value: private.inspection
            });
        }

        return deferred.promise;
    }

    private.loadInspectionFromFile = function (filename) {
        var deferred = $q.defer();

        if (angular.equals(private.inspection, {}) || (private.inspection.rowId + '') !== id) {
            filesystem_manager.getInspection(filename).then(function (success) {
                private.inspection = JSON.parse(success);
                deferred.resolve({
                    value: success
                });
            }, function (error) {
                deferred.reject({
                    value: error
                });
            });
        } else {
            deferred.resolve({
                value: private.inspection
            });
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
                    private.inspection.insTemplateGuid = null;
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

                    defer.resolve({
                        value: private.inspection
                    });
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
            .then(function (success) {
                tempDefer.resolve(success);
            }, function (error) {
                tempDefer.reject(error);
            });
        return tempDefer.promise;
        // SQLite
    };

    public.getTemplates = function () {
        var tempDefer = $q.defer();
        filesystem_manager.getTemplates()
            .then(function (success) {
                tempDefer.resolve(success);
            }, function (error) {
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
        return private.inspection.sections[sectionIndex].subsections[subsectionIndex].questions; //defer.promise;
    };

    public.getQuestion = function (insId, sectionIndex, subsectionIndex, questionIndex) {
        return private.inspection.sections[sectionIndex].subsections[subsectionIndex].questions[questionIndex]; //defer.promise;
    };

    public.updateQuestion = function (insParams) {
        var deferPubUpdQuestion = $q.defer();
        var questionToUpdate = private.inspection.sections[insParams.sectionIndex].subsections[insParams.subsectionIndex].questions[insParams.questionIndex];
        private.updateQuestion(questionToUpdate, private.inspection.insId, public.mode).then(function (success) {
            deferPubUpdQuestion.resolve({
                message: 'success in public.updateQuestion'
            });
        }, function (error) {
            deferPubUpdQuestion.reject({
                message: 'Fail - public.updateQuestion: ' + error.message
            });
        });

        return deferPubUpdQuestion.promise;
    };

    public.saveInspection = function (ins) {
        var defer = $q.defer();
        var promise = defer.promise;

        switch (public.mode) {
            case "inspection":
                if (ins === undefined || ins === null) {
                    promise = private.saveInspectionToFile();
                } else if (typeof (ins) == 'object') {
                    promise = private.saveInspectionObjectToFile(ins);
                }
                break;
            case "template":
                if (ins === undefined || ins === null) {
                    promise = private.saveTemplateToFile();
                } else {
                    promise = private.saveTemplateObjectToFile(ins);
                }
                break;
            case "theme":
                promise = private.saveToThemeManager();
                break;
            default:
                defer.reject(public.mode + " is not a valid type.");
        }

        return promise;
    };

    public.startInspection = function (template) {
        var deferred = $q.defer();

        private.copyTemplateToInspection(template).then(function (success) {
            deferred.resolve(success);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    private.copyTemplateToInspection = function (template) {
        var deferred = $q.defer();

        filesystem_manager.copyTemplateToInspection(template).then(function (success) {
            deferred.resolve(success);
        }, function (error) {
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

    private.deleteInspectionFile = function (filename) {
        var deferred = $q.defer();

        filesystem_manager.deleteInspection(filename).then(function (success) {
            deferred.resolve(success);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    private.deleteTemplateFile = function (filename) {
        var deferred = $q.defer();

        // Call filesystem function for deletion
        filesystem_manager.deleteTemplate(filename).then(function (success) {
            deferred.resolve(success);
        }, function (error) {
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

        private.updateInsMetadata().then(function (success) {
            updInspMetadata.resolve({
                message: success.message
            });
        }, function (error) {
            updInspMetadata.reject({
                message: error.message
            });
        });

        return updInspMetadata.promise;
    };

    public.update = function (ins) {
        var deferTitle = $q.defer();

        private.updateInspectionFile(ins).then(function (success) {
            deferTitle.resolve({
                message: success.message
            });
        }, function (error) {
            deferTitle.reject({
                message: error.message
            });
        });

        return deferTitle.promise;
    };

    public.updateTemplate = function (template) {
        var defer = $q.defer();
        var promise = defer.promise;

        promise = private.saveTemplateObjectToFile(template);
        promise.then(function (success) {
            defer.resolve({
                message: success.message
            });
        }, function (error) {
            defer.reject({
                message: error.message
            });
        });

        return promise;
    };

    public.loadNewTemplate = function () {
        var deferred = $q.defer();

        private.inspection = {
            "insTemplateTitle": "",
            "insSourcetype": "template",
            "sections": []
        };
        public.mode = "template";

        private.saveTemplateToFile().then(
            function (data) {
                console.log(data.message);
                deferred.resolve(private.inspection);
            },
            function (data) {
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
    private.updateInspectionFile = function (ins) {
        var deferUpdate = $q.defer();
        // Update hash
        ins.hash = null;
        ins.lastModified = new Date();
        ins.hash = $sha.hash(ins.toString());

        filesystem_manager.saveInspection(ins.guid, JSON.stringify(ins)).then(function (success) {
            deferUpdate.resolve({
                message: success.message
            });
        }, function (error) {
            deferUpdate.reject({
                message: error.message
            });
        });

        return deferUpdate.promise;
    };

    private.saveTemplateToFile = function () {
        var deferred = $q.defer();
        // If no guid is already associated, add one
        if (!private.inspection.guid) {
            private.inspection.guid = filesystem_manager.generateGuid();
        }
        private.inspection.hash = null;
        private.inspection.hash = $sha.hash(private.inspection.toString());

        filesystem_manager.saveTemplate(private.inspection.guid, JSON.stringify(private.inspection))
            .then(function (success) {
                deferred.resolve({
                    value: success
                });
            }, function (error) {
                deferred.reject({
                    value: reject
                });
            });

        return deferred.promise;
    }

    private.saveTemplateObjectToFile = function (template) {
        var deferred = $q.defer();
        // If no guid is already associated, add one
        if (!template.guid) {
            template.guid = filesystem_manager.generateGuid();
        }
        template.hash = null;
        template.lastModified = new Date();
        template.hash = $sha.hash(template.toString());

        filesystem_manager.saveTemplate(template.guid, JSON.stringify(template))
            .then(function (success) {
                deferred.resolve({
                    value: success
                });
            }, function (error) {
                deferred.reject({
                    value: reject
                });
            });

        return deferred.promise;
    }

    private.saveInspectionToFile = function () {
        var deferred = $q.defer();
        
        // If no guid is already associated, add one
        if (!private.inspection.guid) {
            private.inspection.guid = filesystem_manager.generateGuid();
        }
        
        if (private.inspection.insUserId == null) {
            private.inspection.insUserId  = $rootScope.userId;
        }
        
        private.inspection.hash = null;
        private.inspection.lastModified = new Date();
        private.inspection.hash = $sha.hash(private.inspection.toString());

        filesystem_manager.saveInspection(private.inspection.guid, JSON.stringify(private.inspection))
            .then(function (success) {
                deferred.resolve({
                    value: success
                });
            }, function (error) {
                deferred.reject({
                    value: reject
                });
            });

        return deferred.promise;
    }

    private.saveInspectionObjectToFile = function (ins) {
        var deferred = $q.defer();
        // If no guid is already associated, add one
        if (ins.guid) {
            ins.guid = filesystem_manager.generateGuid();
        }
        ins.hash = null;
        ins.lastModified = new Date();
        ins.hash = $sha.hash(ins.toString());

        filesystem_manager.saveInspection(ins.guid, JSON.stringify(ins))
            .then(function (success) {
                deferred.resolve({
                    value: success
                });
            }, function (error) {
                deferred.reject({
                    value: reject
                });
            });

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
