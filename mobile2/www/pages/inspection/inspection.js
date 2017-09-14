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
    })
    .state('report_preview', {
      url: "/report/preview",
      templateUrl: "pages/inspection/report_preview.html",
      controller: "report_preview"
    })
    .state('report_send', {
      url: "/report/send",
      templateUrl: "pages/inspection/report_send.html",
      controller: "report_send"
    })
    .state('inspection_new', {
      url: "/inspection/new",
      templateUrl: "pages/inspection/inspection_new.html",
      controller: "inspection_new"
    });
});

// Define the page controller
app.controller('inspection', function ($scope, $rootScope, $state, camera_manager, action_manager, database) {
  $scope.reports = [];
  console.log('welcome to reports');
  $scope.camera_manager = camera_manager;
  action_manager.addAction('New Inspection', 'add', function() {
    $state.go("inspection_new");
  //  
  });
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

app.controller('inspection_new', function ($scope, $rootScope, database) {
  $scope.themes = [];
  $scope.templates = [];
  
  // Init themes & templates
  /*var themeData = database.initThemes();
  themeData.then(
      //Success
      function(promise) {
        console.log(promise.message);
      }, 
      //Fail
      function(promise) {
        console.log(promise.message);
      }
  );*/
  /*var templateData = database.initTemplates();
  templateData.then(
      //Success
      function(promise) {
        console.log(promise.message);
      }, 
      //Fail
      function(promise) {
        console.log(promise.message);
      }
  );*/
  
  // Get themes & templates
  var themeGetter = database.getThemes();
  themeGetter.then(
    //Success
    function (promise) {
      console.log(promise.message);
      console.log(promise.row);
      for (var i = 0; i < promise.row.length; i++) {
        $scope.themes.push(promise.row.item(i));
      }
      //Fail
    },
    function (promise) {
      console.log(promise.message);
    }
  );
    
  var templateGetter = database.getTemplates();
  templateGetter.then(
    //Success
    function (promise) {
      console.log(promise.message);
      for (var i = 0; i < promise.row.length; i++) {
        $scope.templates.push(promise.row.item(i));
      }
      //Fail
    },
    function (promise) {
      console.log(promise.message);
    }
  );
    
});

app.controller('inspection_detail', function ($scope, $rootScope) {

});

app.controller('report_preview', function ($scope, $rootScope, $sce, $document) {

  $scope.pdf = "";
  $scope.data = "";

  $scope.getReport = function () {
    return $sce.trustAsResourceUrl($scope.pdf);
  }

  $scope.update = function () {
    pdf.htmlToPDF({
      data: "<html>" + $scope.data + "</html>",
      documentSize: "A4",
      landscape: "portrait",
      type: "share"
    }, function (data) {
      data = data.replace('\n', '');
      $scope.pdf = "data:application/pdf;base64," + data;
      console.log($scope.pdf);
    });


    /*var element = document.createElement("div");
    document.querySelector("#buffer").appendChild(element);
    element.innerHTML = $scope.data;
    var canvas_promise = html2canvas(element, {
      imageTimeout: 2000,
      removeContainer: true
    });

    canvas_promise.then(function (canvas) {
      var image = canvas.toDataURL("image/png");
      document.querySelector("#buffer").removeChild(element);
      generator.addImage(image, 'JPEG', 20, 20);
      $scope.pdf = generator.output("datauristring");
    })*/

    /*if (generator) {
      delete generator;
      generator = new jsPDF();
    }

    var element = document.createElement("div");
    element.innerHTML = $scope.data;
    var promise = generator.addHTML($scope.data, 15, 15, {
      proxy: "http://127.0.0.1:60201/"
    });
    promise.then(function (canvas) {
      console.log(canvas.toDataURL("image/png"))
      document.querySelector("#buffer").appendChild(canvas);
      $scope.pdf = generator.output("datauristring");
    });*/
  }

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
