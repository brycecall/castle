app.controller('generateController', function ($rootScope, $scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, $mdMedia, inspectionService) {

    $scope.report = inspectionService.currentReport;

    $scope.report = reportOne;

    $scope.currentGenPage = Object.keys($scope.report)[1];


   // console.log("REPORT: " + $scope.report);

    $scope.subPage = '';
    $scope.alert = '';
    $scope.images = [];

    var pictureSource = null;
    var destinationType = null;
    var imageLocation = null;
    var cameraDestination = null;

    $scope.toggleLeft = buildToggler('left');


    $scope.getSummaryItems = function(item) {
        if (item.type == 'radio') {
                return item.content;
        }

    };

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

    $scope.submit = function() {
        inspectionService.currentReport = $scope.report;
        inspectionService.io.sendReport(inspectionService.currentReport);
    };

    $rootScope.sendReport_handler = function(data) {
        console.log("SEND REPORT");
    };

     $scope.close = function () {
         $mdSidenav('left').close()
             .then(function () {
                 $log.debug("close LEFT is done");
             });
     };



     $scope.showMessage = function (event, type, message) {
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

     };


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



 });






















