app.controller('dashboardController', function ($rootScope, $scope, castleService, 
                                                $state, $mdSidenav, firebaseIO) {
    castleService.currentPage.toggleNavMenu = true;
    castleService.currentPage.title = "Dashboard";
    castleService.currentPage.icon = "menu";
    $scope.firebaseIO = firebaseIO;
    $scope.insertReport = function() {
        castleService.currentReport = reportTemplates[0];
        console.log(castleService.currentReport);
        
        try {
               firebaseIO.insertReport(castleService.currentReport)
            } catch(result) {
            console.log(result);
        };
    };
    
    $scope.insertTemplate = function() {
        castleService.currentReport = reportTemplates[0];
        console.log(castleService.currentReport);
        
        try {
               firebaseIO.insertTemplate(castleService.currentReport)
            } catch(result) {
            console.log(result);
        };
    };
    
    $scope.insertUser = function() {
        var key = firebaseIO.insertUser("Master", "clilly@maurasoftware.com");
        console.log(key);
    };
    
    $scope.updateReport = function() { 
        
    };
    
    $scope.readUserReports = function() {
        firebaseIO.getReportMeta();
    };
    
    $scope.readReports = function() {
        firebaseIO.readReports();
    };
    
    function checkSetup() {
        if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
          window.alert('The firebase SDK is not configured!');
        }
    };
    
    function initFirebase() {
     // Shortcuts to Firebase SDK features.
//      this.auth = firebase.auth();
//      this.database = firebase.database();
//      this.storage = firebase.storage();
//      // Initiates Firebase auth and listen to auth state changes.
//      this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
    }
    
    window.onload = function() {
        checkSetup();
    };
});
