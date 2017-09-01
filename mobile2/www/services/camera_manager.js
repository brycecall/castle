app.factory('camera_manager', function (camera_mock, $location) {
  var public = {};
  var private = {};
  var CameraPreview = CameraPreview || camera_mock;
    
  private.options = {
      x: 0,
      y: 0,
      width: 300,
      height: 300,
      camera: CameraPreview.CAMERA_DIRECTION.BACK,
      toBack: false,
      tapPhoto: true,
      tapFocus: false,
      previewDrag: true
  };
    
  public.setOptionsSize = function(width, height) {
      private.options.width = width;
      private.options.height = height;
  };
    
  public.startCamera = function(){
      CameraPreview.startCamera(private.options);
  };

  public.stopCamera = function(){
    CameraPreview.stopCamera();
  };

  public.takePicture = function(){
    CameraPreview.takePicture(function(imgData){
        document.getElementById('originalPicture').src = 'data:image/jpeg;base64,' + imgData;
    });
  };

  public.switchCamera = function(){
    CameraPreview.switchCamera();
  };

  public.show = function(){
    CameraPreview.show();
  };

  public.hide = function(){
    CameraPreview.hide();
  };

  public.changeFlashMode = function() {
    var mode = document.getElementById('selectFlashMode').value;
    CameraPreview.setFlashMode(mode);
  };

  public.changeZoom = function(){
    var zoom = document.getElementById('zoomSlider').value;
    document.getElementById('zoomValue').innerHTML = zoom;
    CameraPreview.setZoom(zoom);
  };

  public.changePreviewSize = function() {
    window.smallPreview = !window.smallPreview;
    if (window.smallPreview){
      CameraPreview.setPreviewSize({width: 100, height: 100});
    } else {
      CameraPreview.setPreviewSize({width: window.screen.width, height: window.screen.height});
    }
  };

  public.showSupportedPictureSizes = function() {
    CameraPreview.getSupportedPictureSizes(function(dimensions){
      dimensions.forEach(function(dimension) {
        console.log(dimension.width + 'x' + dimension.height);
      });
    });
  };

  public.openCameraControl = function() {
       $location.path("/camera");
  };
    
  public.accept = function() {
         
  };
    
  public.cancel = function() {
         
  };
    
  return public;
});
