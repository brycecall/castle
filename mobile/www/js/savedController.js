app.controller('savedController', function ($scope, castleService, $state) {
    $scope.castleService = castleService;
    castleService.currentPage.title = "Saved Reports";
    $scope.defaultReport = reportOne;
    $scope.switchReport = function(sReport) {
        castleService.currentReport = sReport;
        $state.go("create");
    };
    $scope.reverse = false;
    $scope.orderAttribute = 'date';
    $scope.orderAttributeOptions = ['date', 'title'];
    $scope.schedule = $stateParams.schedule;



/********************************************************
* FILE WRITER
***********************************************************/
//
//     function writeToFile() = {
//        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
//
//     }
   //document.addEventListener("deviceready", onDeviceReadyTwo, false);
   //  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
//
//    function onFileSystemSuccess(fileSystem) {
//        console.log(fileSystem.name);
//        console.log(fileSystem.root.name);
//    }
//
//
//    function gotFS(fileSystem) {
//        fileSystem.root.getFile("saved.txt", {create: true, exclusive: false}, gotFileEntry, fail);
//    }
//
//
//    function gotFileEntry(fileEntry) {
//        gFileEntry = fileEntry;
//        fileEntry.createWriter(gotFileWriter, fail);
//        fileEntry.file(readAsText, fail);
//
//    }
//
//    function gotFileWriter(writer) {
//        writer.onwrite = function(evt) {
//            console.log("write success");
//        };
//        var stringReport = JSON.stringify($scope.report, null,2);
//        //for int
//        writer.write(stringReport);
//    }
//
//    function readAsText(file) {
//        var reader = new FileReader();
//        reader.onloadend = function(evt) {
//            console.log("Read as text");
//            console.log(evt.target.result);
//        };
//        reader.readAsText(file);
//    }
//
//
//    function fail(error) {
//        console.log(error.code);
//    }
//
//
//     $scope.exportReport = function() {
//
//     }

//console.log(JSON.stringify($scope.report));

//console.log('FILE ENTRY: ' + gFileEntry.name);

//     $http.get('reports.').success(function(data){
//        $scope.newReport = data;
//     });



 });
