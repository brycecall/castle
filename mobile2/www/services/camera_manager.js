app.factory('camera_manager', function (camera_mock, $state) {
  var public = {};
  var private = {};


  if (window["CameraPreview"] === undefined) {
    console.log("Initialized Mock Camera");
    CameraPreview = camera_mock;
  }
    
  private.options = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    camera: CameraPreview.CAMERA_DIRECTION.BACK,
    toBack: true,
    tapPhoto: false,
    tapFocus: true,
    previewDrag: false
  };
    
  /* Stores a list of photos returned from takePicture */
  public.photos = [];
  public.rapidModePhoto = {};
    
  /* meant to store the state to return to after the Camera usage is done. */
  public.returnState = '';
  public.title = '';
  public.answerKey = '';
    
  public.setOptionsSize = function (width, height) {
    private.options.width = width;
    private.options.height = height;
  };

  public.startCamera = function () {
    CameraPreview.startCamera(private.options);
  };

  public.stopCamera = function () {
    CameraPreview.stopCamera();
  };

  public.takePicture = function () {
    CameraPreview.takePicture(function (imgData) {
    var photoURL = 'data:image/jpeg;base64,' + imgData;
    document.getElementById('originalPicture').style.backgroundImage = 'url(' + photoURL + ')';
        public.photos.push({'link':photoURL});
    });
    
  };
  public.cameraCallback = function(){
        console.log("camera callback");
  };
  public.takeRapidModePicture = function () {
    CameraPreview.takePicture(function (imgData) {
    var photoURL = 'data:image/jpeg;base64,' + imgData;
        public.rapidModePhoto = { 'link':photoURL };
    });
    public.cameraCallback();
  };

  public.switchCamera = function () {
    CameraPreview.switchCamera();
  };

  public.show = function () {
    CameraPreview.show();
  };

  public.hide = function () {
    CameraPreview.hide();
  };

  public.changeFlashMode = function (mode) {
    CameraPreview.setFlashMode(mode);
  };

  public.changeZoom = function (zoom) {
    CameraPreview.setZoom(zoom);
  };

  public.changePreviewSize = function () {
    window.smallPreview = !window.smallPreview;
    if (window.smallPreview) {
      CameraPreview.setPreviewSize({
        width: 100,
        height: 100
      });
    } else {
      CameraPreview.setPreviewSize({
        width: window.screen.width,
        height: window.screen.height
      });
    }
  };

  public.showSupportedPictureSizes = function () {
    CameraPreview.getSupportedPictureSizes(function (dimensions) {
      dimensions.forEach(function (dimension) {
        console.log(dimension.width + 'x' + dimension.height);
      });
    });
  };

  public.openCameraControl = function () {
    $state.go("camera");
  };
    


  public.accept = function () {

  };

  public.cancel = function () {

  };

  return public;
});
