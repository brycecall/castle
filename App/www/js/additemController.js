angular.module('fashionApp').controller('additemController', ['$scope', 'fashionService', function($scope, fashionService) {  

    fashionService.currentPage.title = "Closet";
    
  $scope.data = {
  items: ['Pants','Shirt','Jacket','Hat', 'Shoes', 'Shorts', 'Watch', 'Sweater', 'Jewelry', 'Pikachu', 'Squirtle', 'Charmander', 'Bulbasaur' ],
  photo: 'http://si.wsj.net/public/resources/images/RV-AP734_DRESS2_JV_20150227173256.jpg',
  };
  
  var pictureSource;
  var destinationType;

   // device APIs are available
  function onDeviceReady() {
      //alert("Calls when app starts");
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
      document.addEventListener("deviceready",onDeviceReady,false);

  // Called when a photo is successfully retrieved
    function onPhotoDataSuccess(imageData) {
      //alert("Calls after photo is taken, returning to device");

      // Get image handle
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      smallImage.src = "data:image/jpeg;base64," + imageData;
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
    }

  // Capture Photo button will call this function
  $scope.capturePhoto = function capturePhoto() {
      //alert("Call when button is pressed");

      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, $scope.onFail(), { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

   // A button will call this function
    $scope.getPhoto = function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, $scope.onFail(), { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

   // Called if something bad happens.
    $scope.onFail = function onFail(message) {
      //alert('Failed because: ' + message);
    }

}]);
