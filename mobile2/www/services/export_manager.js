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
  }
  
  private.saveInspection = function() {
    
  };
  
  private.saveTemplate = function() {
    
  };
  
  private.saveTheme = function() {
    
  };
  
  return public;
});