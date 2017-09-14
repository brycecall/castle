// Register the Page
app.config(function ($stateProvider) {
  $stateProvider
    .state('inspection', {
      url: "/inspection",
      templateUrl: "pages/inspection/inspection.html",
      controller: "inspection"
    })
    .state('inspection_detail', {
      url: "/inspection/detail",
      templateUrl: "pages/inspection/inspection_detail.html",
      controller: "inspection_detail"
    });
});

// Define the page controller
app.controller('inspection', function ($scope, $rootScope, camera_manager, database) {
  $scope.reports = [];
  console.log('welcome to reports');
  $scope.camera_manager = camera_manager;
  //insert dummy report data
  /*  var reportData = database.initReports();
    reportData.then(
        //Success
        function(promise) {
          console.log(promise.message);
        },
        //Fail
        function(promise) {
          console.log(promise.message);
        }
    );*/

  var reports = database.getReports();
  reports.then(
    //Success
    function (promise) {
      console.log(promise.message);
      console.log(promise.row);
      for (var i = 0; i < promise.row.length; i++) {
        $scope.reports.push(promise.row.item(i));
      }
      //Fail
    },
    function (promise) {
      console.log(promise.message);
    }
  );

});

app.factory('$', function($window) { return $window.jQuery; });

app.controller('inspection_detail', function ($scope, $) {
    $scope.question = {
        'title':'What are your favorite colors?',
        'description':'Just pick the ones you actually like.',
        'type':'checkbox',
        'values': [
            {'key':'orange', 'remark':''},
            {'key':'red'},
            {'key':'green'},
            {'key':'pink'},
            {'key':'purple mountain majesty'},
            {'key':'yellow'}
        ],
        'answers': [
            'orange'
        ],
        'answer':null,
        'value':null,
        'validation':{
            'type':'number',
            'min':null,
            'max':null,
            'isRequired':true
        },
        'notApplicable':false,
        'severity':null
  
    };

    $scope.toggle = function(item, list) {
        var index = list.indexOf(item);
        if (index > -1) {
          list.splice(index, 1);
        }
        else {
          list.push(item);
        }
    };

    $scope.exists = function(value, array) {
        return $.inArray( value, array ) > -1;
    };
    
    $scope.setSeverity = function(value) {
        $scope.question.severity = value;
    };
    
    $scope.severityList = [
        { 'icon': 'cancel', 'title': 'Non-Issue' }, 
        { 'icon': 'info_outline', 'title': 'Informational' }, 
        { 'icon': 'warning', 'title': 'Minor Concerns' }, 
        { 'icon': 'error', 'title': 'Major Concerns' }
    ];
    
});
