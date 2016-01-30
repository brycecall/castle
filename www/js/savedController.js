app.controller('savedController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, $mdMedia, inspectionService, $http, reportService, $rootScope) {

inspectionService.currentPage.title = "Saved";

$scope.savedReports = {};


//          $scope.report = {};
//   function applyRemoteData(remoteData) {
//     }
//
//     serverService.getReport().then(function (report) {
//         applyRemoteData(report)
//     });


    inspectionService.request("/report/c/1").success(function(response) {
        if (response != null && response != "") {
            $scope.savedReports = response;

        } else {
            $scope.savedReports = {};
            console.log("EMPTY!");
        }
    });

    $scope.switchReport = function(sReport) {
        //console.log(sReport['rep_json']);

        var temp = sReport['rep_json'];
        if (typeof temp != 'object') {
            temp = JSON.parse(sReport['rep_json']);
        }
        //console.log(temp);
        inspectionService.currentReport = temp;
        reportService.setTheReport(temp);
        $rootScope.$broadcast('reportChange', inspectionService.currentReport);
       // console.log("This is special");

    }


   // console.log(JSON.stringify(reportOne))


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
