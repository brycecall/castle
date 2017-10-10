app.factory('export_manager', function ($rootScope, $cordovaFileTransfer, $sha) {
  var public = {};
  var private = {};

  public.export = function (resource, type) {
    var filename = $sha.hash((new Date()).toString()).substr(0, 12);

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

    var path_to_directory = cordova.file.dataDirectory + "themes";
    var path_to_castle_file = cordova.file.externalRootDirectory;
    JJzip.zip(path_to_directory, {
        target: path_to_castle_file,
        name: filename
      },
      function (result) {
        console.log(result);
        if (window['cordova'] !== undefined && result.success) {
          cordova.plugins.email.open({
            attachments: path_to_castle_file + filename + ".zip"
          })
        }
      },
      function (error) {
        console.log(error);
      })
  }

  private.saveInspection = function () {

  };

  private.saveTemplate = function () {

  };

  private.saveTheme = function () {

  };

  return public;
});
