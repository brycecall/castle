 angular.module('fbiApp').controller('generateController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, $mdMedia, $location, $anchorScroll, $rootScope, $window, $compile) {

     $scope.toggleLeft = buildToggler('left');

     /**
      * Build handler to open/close a SideNav; when animation finishes
      * report completion in console
      */
     function buildToggler(navID) {
         var debounceFn = $mdUtil.debounce(function () {
             $mdSidenav(navID)
                 .toggle()
                 .then(function () {
                     $log.debug("toggle " + navID + " is done");

                 });
         }, 300);

         return debounceFn;
     }

     $scope.report = reportOne;
//     $scope.fieldNotes = fieldNotes;


     $scope.currentGenPage = Object.keys($scope.report)[1];
     $scope.subPage = '';

     $scope.close = function () {
         $mdSidenav('left').close()
             .then(function () {
                 $log.debug("close LEFT is done");
             });
     };


     $scope.alert = '';
     $scope.showMessage = function (event, type, message) {
         //         message.replace('\n', '<br />');

         $mdDialog.show(
             $mdDialog.alert()
             .title(type + ' Message')
             .content(message)
             .ariaLabel('')
             .ok('Close!')
             .targetEvent(event)
         );
     };

     $scope.scrollToTop = function () {
         $timeout(function () {
             document.getElementById("testAgain").scrollTop = 0;
             console.log("called ");
         });
     };

         $scope.navigatePage = function (sectionkey) {
         $scope.close();
         $scope.currentGenPage = sectionkey;
         document.getElementById("testAgain").scrollTop = 0;
     };


     $scope.notSorted = function (obj) {
         return obj ? Object.keys(obj) : [];
     };

     $scope.filterExisting = function (items) {
         var result = [];

//         for (var i = 0; i < items.length; i++) {
//             var value = items[i];
//
//                if (value.i != '') {
//                    result.push(value);
//                }
//         }

        angular.forEach(items, function(value, key) {

            if (value.i != '') {
                //result.push(value);
                result[key] = value;
            }
        });


         return result ? Object.keys(result) : [];

       };

//
//     $scope.$watch(function() { return $mdMedia('gt-md'); }, function(big) {
//        console.log(big);
//      });

     $scope.images = [];



    var pictureSource;
    var destinationType;
    var imageLocation;
    var cameraDestination;

     document.addEventListener("deviceready", onDeviceReady1, false);

    // device APIs are available
    function onDeviceReady1() {
        console.log('Prepairing Device');
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        deviceIsReady = true;
        console.log('Device Readiness Complete');
    }





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

/********************************************************
* CAMERA
***********************************************************/
    // Called when a photo is successfully retrieved
    function onPhotoDataSuccess(imageData) {
        //alert("Calls after photo is taken, returning to device");

        // Show the captured photo
        $scope.$apply(function () {
            cameraDestination.i = "data:image/jpeg;base64," + imageData;
        });
    }


  // Called when a photo is successfully retrieved
    function onPhotoURISuccess(imageURI) {
        //alert("Calls when we change to add item page");

        // Get image handle
        //
        var smallImage = document.getElementById('smallImage');

        // Show the captured photo
        // The inline CSS rules are used to resize the image
        //
        smallImage.src = imageURI;
        imageLocation = imageURI;
    }

  // Capture Photo button will call this function
   $scope.capturePhoto = function capturePhoto() {
      //alert("Call when button is pressed");

      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, $scope.onFail(), {
          quality: 50,
          encodingType : encodingType.JPEG,
          targetWidth:260,
          targeHeight: 260,
          correctOrientation: true,
          destinationType: destinationType.DATA_URL });

    }

   // A button will call this function
    $scope.getPhoto = function getPhoto(source) {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(onPhotoURISuccess, $scope.onFail(), {
            quality: 50,
            encodingType : encodingType.JPEG,
            targetWidth:260,
            targeHeight: 260,
            correctOrientation: true,
            destinationType: destinationType.FILE_URI,
            sourceType: source });


    }


    $scope.initCameraAction = function(pCheckboxval) {
        cameraDestination =  pCheckboxval;

        $scope.capturePhoto()
        //$scope.$apply();


     }

    // Called if something bad happens.
    $scope.onFail = function onFail(message) {
      // alert('Failed because: ' + message);
    }

    //Cancel the add opperation
    $scope.cancel = function() {
        window.history.back();
    }

    //Complete the save operation
    $scope.save = function() {
        $scope.addItem();
        window.history.back();
    }



//    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
//            console.log("got main dir",dir);
//            dir.getFile("log.txt", {create:true}, function(file) {
//                console.log("got the file", file);
//                logOb = file;
//                writeLog("App started");
//            });
//        });
//
//function writeLog(str) {
//	if(!logOb) return;
//	var log = str + " [" + (new Date()) + "]\n";
//	console.log("going to log "+log);
//	logOb.createWriter(function(fileWriter) {
//
//		fileWriter.seek(fileWriter.length);
//
//		var blob = new Blob([log], {type:'text/plain'});
//		fileWriter.write(blob);
//		console.log("ok, in theory i worked");
//	}, fail);
//}
//
//writeLog("I am file contents... hopefully");
//
//function justForTesting() {
//	logOb.file(function(file) {
//		var reader = new FileReader();
//
//		reader.onloadend = function(e) {
//			console.log(this.result);
//		};
//
//		reader.readAsText(file);
//	}, fail);
//
//}
//



//    function win(writer) {
//        writer.onwrite = function(evt) {
//            console.log("write success");
//        };
//        writer.write("some sample text");
//    };
//
//    var ffail = function(evt) {
//        console.log(error.code);
//    };
//
//    entry.createWriter(win, ffail);

 });






















