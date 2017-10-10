app.factory('export_manager', function ($rootScope, $cordovaFileTransfer, $sha) {
  var public = {};
  var private = {};
  
  public.export = function(resource, type) {
    var filename = $sha.hash((new Date()).toString()) + ".castle";
    
    switch (type) {
      case "inspection":
        break;
      case "template":
        break;
      case "theme":
        break;
      default:
        break;
    }
    
    Zeep.zip({
      from: cordova.file.dataDirectory,
      to: cordova.file.externalDataDirectory + filename
    }, function(result) {
      console.log(result);
      window.open(cordova.file.externalDataDirectory + filename);
    }, function(error) {
      console.log(error);
    })
  }
  
  private.saveInspection = function() {
    
  };
  
  private.saveTemplate = function() {
    
  };
  
  private.saveTheme = function() {
    
  };
  
  return public;
});