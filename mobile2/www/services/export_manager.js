app.factory('export_manager', function ($rootScope) {
  var public = {};
  var private = {};
  
  // Mock the ZEEP object
  var Zeep = (Zeep ? Zeep : ZeepMock);
  var ZeepMock = {};
  ZeepMock.zip = function () {};
  ZeepMock.unzip = function () {};
  
  public.export = function(resource, type) {
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
      to: cordova.file.cacheDirectory + "test.zip"
    }, function(result) {
      console.log(result);
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