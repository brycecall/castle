 angular.module('fbiApp').controller('savedController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, $mdMedia, inspectionService, $http) {
     inspectionService.currentPage.title = "Saved"

/********************************************************
* FILE WRITER
***********************************************************/
//
//     function writeToFile() = {
//        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
//
//     }


    function gotFS(fileSystem) {
        fileSystem.root.getFile("saved.txt", {create: true, exclusive: false}, gotFileEntry, fail);
    }


    function gotFileEntry(fileEntry) {
        gFileEntry = fileEntry;
        fileEntry.createWriter(gotFileWriter, fail);
        fileEntry.file(readAsText, fail);

    }

    function gotFileWriter(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        var stringReport = JSON.stringify($scope.report, null,2);
        //for int
        writer.write(stringReport);
    }

    function readAsText(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("Read as text");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    }


    function fail(error) {
        console.log(error.code);
    }


     $scope.exportReport = function() {

     }

//console.log(JSON.stringify($scope.report));

//console.log('FILE ENTRY: ' + gFileEntry.name);

     $http.get('repots.json').success(function(data){
        $scope.newReport = data;
     });


 });
