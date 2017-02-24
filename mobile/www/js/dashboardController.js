app.controller('dashboardController', function ($rootScope, $scope, castleService, 
                                                $state, $mdSidenav, firebaseIO, $timeout) {
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
    
    $scope.upcomingJobs = [];
    
    $scope.getDayString = function(dayNum) {
        var day = null;
        switch(dayNum) 
        {
            case 0:
                day = "Sun"
                break;
            case 1:
                day = "Mon"
                break;
            case 2:
                day = "Tue"
                break;
            case 3:
                day = "Wed"
                break;
            case 4:
                day = "Thu"
                break;
            case 5:
                day = "Fri"
                break;
            case 6:
                day = "Sat"
                break;
        }  
        return day
    };
    
    $scope.getMonthString = function(monthNum) {
        var month = null;
        switch(monthNum) 
        {
            case 0:
                month = "Jan" 
                break;
            case 1:
                month = "Feb"
                break;
            case 2:
                month = "Mar"
                break;
            case 3:
                month = "Apr"
                break;
            case 4:
                month = "May"
                break;
            case 5:
                month = "Jun"
                break;
            case 6:
                month = "Jul"
                break;
            case 7:
                month = "Aug" 
                break;
            case 8:
                month = "Sep"
                break;
            case 9:
                month = "Oct"
                break;
            case 10:
                month = "Nov"
                break;
            case 11:
                month = "Dec"
                break;
        }  
        return month
    };
    
    $scope.getTimeString = function(date) {
          var hours = date.getHours();
          var suffix = "AM";
          var result = "";
          if (hours > 12) {
              hours = hours - 12;
              suffix = "PM";
          }
        return hours + ":" + date.getMinutes() + suffix;          
    };
    
    $scope.getUpcomingJobs = function() {
       //$scope.upcomingJobs = firebaseIO.getReportMeta();  
        
        var date = new Date();
        $timeout(function(){
        $scope.upcomingJobs.push(
            {
                "day":$scope.getDayString(date.getDay()),
                "date":date.getDate() + " " + $scope.getMonthString(date.getMonth()),
                "time":$scope.getTimeString(date),
                "client":"Anderson Property",
                "address":"5803 W 58th Ave  W - Kent, WA"
            }
        );
        },0);

        
    }();
    
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
