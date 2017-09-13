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
      function(promise) {
        console.log(promise.message);
        console.log(promise.row);
        for (var i = 0; i < promise.row.length; i++) {
          $scope.reports.push(promise.row.item(i));
        }
      //Fail
      }, function(promise) {
        console.log(promise.message);
      }
    );

});

app.controller('inspection_detail', function ($scope, $rootScope) {

});

app.controller('report_preview', function ($scope, $rootScope, $sce, $document) {
  var generator = new jsPDF({
    unit: 'px',
    format: 'a4'
  });

  $scope.pdf = "";
  $scope.data = "";

  $scope.getReport = function () {
    return $sce.trustAsResourceUrl($scope.pdf);
  }

  $scope.update = function () {
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

app.controller('report_send', function ($scope, $rootScope) {

});
