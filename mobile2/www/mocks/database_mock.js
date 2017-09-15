app.factory('database_mock', function ($q) {
  var public = {};
  var private = {};

  public.initTables = function () {
    console.info("DATABASE: ");
    console.log(arguments);
    var deferred = $q.defer();
    deferred.resolve({message: 'successful init tables'});
    return deferred.promise;
  };
    
  public.getReports = function() {
    console.info("DATABASE: " + arguments);
      var columns = [{insLastModified: '9-12-17', insLastSubmitted: '9-12-17', insJobId: 10, insType: 'Residential', insName: 'Smith Inspection', insUserId: 1},
                {insLastModified: '10-1-17', insLastSubmitted: '9-11-17', insJobId: 9, insType: 'Residential', insName: 'Jones Inspection', insUserId: 1},
                {insLastModified: '6-12-17', insLastSubmitted: '6-12-17', insJobId: 13, insType: 'Residential', insName: 'Smith Inspection', insUserId: 1},
                {insLastModified: '9-1-17', insLastSubmitted: '9-1-17', insJobId: 21, insType: 'Residential', insName: 'Smith Inspection', insUserId: 1},
                {insLastModified: '9-12-17', insLastSubmitted: '9-12-17', insJobId: 1, insType: 'Commercial', insName: 'Walmart Inspection', insUserId: 1}
               ];
    var deferred = $q.defer();
    deferred.resolve({
      row: {
          length:5,
          item: function(index){
              return columns[index];
          }
      },message: 'Successful database select'
    });
    return deferred.promise;
  };

  public.getThemes = function() {
   console.info("DATABASE: " + arguments);
    var columns = [{themeTitle: 'Home Theme', themeBlob: 'a whole bunch of text', userId: 1},
                   {themeTitle: 'Commercial Theme', themeBlob: 'a whole bunch of text', userId: 1}];
    var deferred = $q.defer();
    deferred.resolve({
      row: {
          length: 2,
          item: function(index){
              return columns[index];
          }
      },message: 'Successful database select'
    });
    return deferred.promise;
  };
  
  public.getTemplates = function() {
    var columns = [{temOrganizationId: 1, temTitle: 'Home Template', temBlob: 'a whole bunch more text', userId: 1},
                   {temOrganizationId: 1, temTitle: 'Commercial Template', temBlob: 'a whole bunch more text', userId: 1}];
    var deferred = $q.defer();
    deferred.resolve({
      row: {
          length: 2,
          item: function(index){
              return columns[index];
          }
      },message: 'Successful database select'
    });
    return deferred.promise;
  };

  public.createUser = function () {
    console.info("DATABASE: ");
    console.log(arguments);
  };

  public.validCredentials = function () {
    console.info("DATABASE: ");
    console.log(arguments);
    var deferred = $q.defer();
    deferred.resolve({
      validCreds: true,
      message: 'name found'
    });
    return deferred.promise;
  };
  
  public.initSections = function () {
    console.info("DATABASE: ");
    console.log(arguments);
    var deferred = $q.defer();
    deferred.resolve({message: 'successful init section'});
    return deferred.promise;
  }
  
  public.getSections = function () {
    console.info("DATABASE: " + arguments);
    var columns = [{rowId: 1, secTitle: 'Field Notes', secInspectionId: 1},
                   {rowId: 2, secTitle: 'Site', secInspectionId: 1},
                   {rowId: 3, secTitle: 'Exterior', secInspectionId: 1},
                   {rowId: 4, secTitle: 'Roofing', secInspectionId: 1},
                   {rowId: 5, secTitle: 'Structural', secInspectionId: 1},
                   {rowId: 6, secTitle: 'Thermal', secInspectionId: 1},
                   {rowId: 7, secTitle: 'Plumbing', secInspectionId: 1},
                   {rowId: 8, secTitle: 'Heating', secInspectionId: 1},
                   {rowId: 9, secTitle: 'Cooling', secInspectionId: 1},
                   {rowId: 10, secTitle: 'Electrical', secInspectionId: 1},
                   {rowId: 11, secTitle: 'Interior', secInspectionId: 1},
                   {rowId: 12, secTitle: 'Life or Safety', secInspectionId: 1}];
    var deferred = $q.defer();
    deferred.resolve({
      row: {
          length: 12,
          item: function(index){
              return columns[index];
          }
      },message: 'Successful database select'
    });
    return deferred.promise;      
  }
  
  public.initSubSections = function () {
    console.info("DATABASE: ");
    console.log(arguments);
    var deferred = $q.defer();
    deferred.resolve({message: 'successful init Subsectionss'});
    return deferred.promise;
  }
  
  public.getSubSections = function (sectionId) {
    console.info("DATABASE: " + arguments);
    var allColumns = [{susTitle: 'Observations', susSectionId: 1},
                   {susTitle: 'Evaluation', susSectionId: 2},
                   {susTitle: 'Attached Steps or Platforms', susSectionId: 2},
                   {susTitle: 'Siding or Wall Cladding', susSectionId: 3},
                   {susTitle: 'Wall Fenestrations', susSectionId: 3},
                   {susTitle: 'Attached Garage or Carport', susSectionId: 3},
                   {susTitle: 'Roof Covering(s)', susSectionId: 4},
                   {susTitle: 'Fenestrations', susSectionId: 4},
                   {susTitle: 'Gutters & Down-Spouts', susSectionId: 4},
                   {susTitle: 'Roof Framing (Visible in Attic)', susSectionId: 5},
                   {susTitle: 'Floor Framing', susSectionId: 5},
                   {susTitle: 'Foundation', susSectionId: 5},
                   {susTitle: 'Attic', susSectionId: 6},
                   {susTitle: 'Crawl Spaces or Unfinished Basements', susSectionId: 6},
                   {susTitle: 'Interior Ventilation or Exhaust Fans', susSectionId: 6},
                   {susTitle: 'Plumbing System', susSectionId: 7},
                   {susTitle: 'Faucets or Fixtures', susSectionId: 7},
                   {susTitle: 'Water Heater', susSectionId: 7},
                   {susTitle: 'Heating System', susSectionId: 8},
                   {susTitle: 'Central Furnace or Heat Pump (Inside)', susSectionId: 8},
                   {susTitle: 'Ducting', susSectionId: 8},
                   {susTitle: 'Fireplaces or Stoves', susSectionId: 8},
                   {susTitle: 'Cooling Systems', susSectionId: 9},
                   {susTitle: 'Evaporative Coil or Heat Pump (Inside)', susSectionId: 9},
                   {susTitle: 'Compressor or Condenser (Outside)', susSectionId: 9},
                   {susTitle: 'Electrical System', susSectionId: 10},
                   {susTitle: 'Fixtures, Switches, or Detectors', susSectionId: 10},
                   {susTitle: 'Living Room', susSectionId: 11},
                   {susTitle: 'Kitchen', susSectionId: 11},
                   {susTitle: 'Laundry', susSectionId: 11},
                   {susTitle: 'Bathroom(s)', susSectionId: 11},
                   {susTitle: 'General', susSectionId: 11},
                   {susTitle: 'Concerns', susSectionId: 12}];
    var columns = [];
    for (var i = 0; i < allColumns.length; i++) {
      console.log('Section Id before loop: ' + sectionId);
      console.log('allColumn sectionId value: ' + allColumns[i].susSectionId);
      if(allColumns[i].susSectionId.toString() === sectionId) {
          console.log('match found');
          var obj = {};
          obj.susTitle = allColumns[i].susTitle;
          obj.susSectionId = allColumns[i].susSectionId;
          columns.push(obj);
          console.log(columns);
      }
    }
    
    console.log(columns);
    var deferred = $q.defer();
    deferred.resolve({
      row: {
          length: columns.length,
          item: function(index){
              return columns[index];
          }
      },message: 'Successful database select'
    });
    return deferred.promise;  
  }
  
  return public;
});
