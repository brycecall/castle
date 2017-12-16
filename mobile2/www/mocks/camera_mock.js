app.factory('camera_mock', function () {
    var MockCameraPreview = {};
    
    MockCameraPreview.startCamera = function(options, onSuccess, onError) {
        options = options || {};
        options.x = options.x || 0;
        options.y = options.y || 0;
        options.width = options.width || window.screen.width;
        options.height = options.height || window.screen.height;
        options.camera = options.camera || MockCameraPreview.CAMERA_DIRECTION.FRONT;
        if (typeof(options.tapPhoto) === 'undefined') {
            options.tapPhoto = true;
        }

        if (typeof (options.tapFocus) == 'undefined') {
          options.tapFocus = false;
        }

        options.previewDrag = options.previewDrag || false;
        options.toBack = options.toBack || false;
        if (typeof(options.alpha) === 'undefined') {
            options.alpha = 1;
        }
        console.log("Camera started!");
    };
    
    MockCameraPreview.cameraCallback = function() {
        console.log("camera callback");
    };
    MockCameraPreview.takeRapidModePicture = function (insId) {
          console.log("Picture Taken!");
          MockCameraPreview.cameraCallback();
    };

    MockCameraPreview.stopCamera = function(onSuccess, onError) {
        console.log("Camera Stopped!");
    };

    MockCameraPreview.switchCamera = function(onSuccess, onError) {
        console.log("Camera switched!");
    };

    MockCameraPreview.hide = function(onSuccess, onError) {
        console.log("You hit hide!");
    };

    MockCameraPreview.show = function(onSuccess, onError) {
        console.log("You hit show!");
    };

    MockCameraPreview.takePicture = function(opts, onSuccess, onError) {
        console.log("You took a picture!");
    };

    MockCameraPreview.setColorEffect = function(effect, onSuccess, onError) {
        console.log("Color effects set!");
    };

    MockCameraPreview.setZoom = function(zoom, onSuccess, onError) {
        console.log("Zoom set!");
    };

    MockCameraPreview.getMaxZoom = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.getZoom = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.setPreviewSize = function(dimensions, onSuccess, onError) {
        console.log("preview size set!");
    };

    MockCameraPreview.getSupportedPictureSizes = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.getSupportedFlashModes = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.setFlashMode = function(flashMode, onSuccess, onError) {
        console.log("Flash mode set!");
    };

    MockCameraPreview.getFlashMode = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.getSupportedFocusModes = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.getFocusMode = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.setFocusMode = function(focusMode, onSuccess, onError) {
        console.log("Focus Mode set!");
    };

    MockCameraPreview.tapToFocus = function(xPoint, yPoint, onSuccess, onError) {
           console.log("Tap to focus set!");
    };


    MockCameraPreview.getExposureModes = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.getExposureMode = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.setExposureMode = function(exposureMode, onSuccess, onError) {
        console.log("Exposure mode set!");
    };

    MockCameraPreview.getExposureCompensation = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.setExposureCompensation = function(exposureCompensation, onSuccess, onError) {
        console.log("exposure compensation set!");
    };

    MockCameraPreview.getExposureCompensationRange = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.getSupportedWhiteBalanceModes = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.getWhiteBalanceMode = function(onSuccess, onError) {
        return 5;
    };

    MockCameraPreview.setWhiteBalanceMode = function(whiteBalanceMode, onSuccess, onError) {
        console.log("white balance set!");
    };

    MockCameraPreview.FOCUS_MODE = {
        FIXED: 'fixed',
        AUTO: 'auto',
        CONTINUOUS: 'continuous', // IOS Only
        CONTINUOUS_PICTURE: 'continuous-picture', // Android Only
        CONTINUOUS_VIDEO: 'continuous-video', // Android Only
        EDOF: 'edof', // Android Only
        INFINITY: 'infinity', // Android Only
        MACRO: 'macro' // Android Only
    };

    MockCameraPreview.EXPOSURE_MODE = {
        LOCK: 'lock',
        AUTO: 'auto', // IOS Only
        CONTINUOUS: 'continuous', // IOS Only
        CUSTOM: 'custom' // IOS Only
    };

    MockCameraPreview.WHITE_BALANCE_MODE = {
        LOCK: 'lock',
        AUTO: 'auto',
        CONTINUOUS: 'continuous',
        INCANDESCENT: 'incandescent',
        CLOUDY_DAYLIGHT: 'cloudy-daylight',
        DAYLIGHT: 'daylight',
        FLUORESCENT: 'fluorescent',
        SHADE: 'shade',
        TWILIGHT: 'twilight',
        WARM_FLUORESCENT: 'warm-fluorescent'
    };

    MockCameraPreview.FLASH_MODE = {
        OFF: 'off',
        ON: 'on',
        AUTO: 'auto',
        RED_EYE: 'red-eye', // Android Only
        TORCH: 'torch'
    };

    MockCameraPreview.COLOR_EFFECT = {
        AQUA: 'aqua', // Android Only
        BLACKBOARD: 'blackboard', // Android Only
        MONO: 'mono',
        NEGATIVE: 'negative',
        NONE: 'none',
        POSTERIZE: 'posterize',
        SEPIA: 'sepia',
        SOLARIZE: 'solarize', // Android Only
        WHITEBOARD: 'whiteboard' // Android Only
    };

    MockCameraPreview.CAMERA_DIRECTION = {
        BACK: 'back',
        FRONT: 'front'
    };

    return MockCameraPreview;
});