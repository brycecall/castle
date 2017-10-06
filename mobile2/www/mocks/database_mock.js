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

  /* TODO actually mock the inspection */
  public.getInspection = function (id) {
    var deferred = $q.defer();
    deferred.resolve({'messages':'success', 
                      'value':
      {
        'insLastModified': '9-12-17', 
        'insLastSubmitted': '9-12-17', 
        'insJobId': 10, 
        'insType': 'Residential', 
        'insName': 'Smith Inspection', 
        'insUserId': 1,
        'rowId': 0, 
        'insId': 0, 
        'sections':[
            {   
                'title':'Colors',
                'subsections':[
            {
                'title':'Good Colors',
                'questions':[
                {
                'title': 'What are your favorite colors?',
                'description': 'Just pick the ones you actually like.',
                'type': 'photo',
                'values': [
                      {
                        'key': 'orange',
                        'remark': ''
                      },
                      {
                        'key': 'red'
                      },
                      {
                        'key': 'green'
                      },
                      {
                        'key': 'pink'
                      },
                      {
                        'key': 'purple mountain majesty'
                      },
                      {
                        'key': 'yellow'
                      }
                ],
                'answers': [
                        'orange'
                    ],
                'answer': null,
                'value': null,
                'validation': {
                  'type': 'number',
                  'min': null,
                  'max': null,
                  'isRequired': true
                },
                'notApplicable': false,
                'severity': null,
                'showSummaryRemark':true,
                'showDescription':true,
                'photos':[]
              },
               {
                'title': 'What are your favorite colors?',
                'description': 'Just pick the ones you actually like.',
                'type': 'checkbox',
                'values': [
                      {
                        'key': 'orange',
                        'remark': ''
                      },
                      {
                        'key': 'red'
                      },
                      {
                        'key': 'green'
                      },
                      {
                        'key': 'pink'
                      },
                      {
                        'key': 'purple mountain majesty'
                      },
                      {
                        'key': 'yellow'
                      }
                ],
                'answers': [
                        'orange'
                    ],
                'answer': null,
                'value': null,
                'validation': {
                  'type': 'number',
                  'min': null,
                  'max': null,
                  'isRequired': true
                },
                'notApplicable': false,
                'severity': null,
                'showSummaryRemark':true,
                'showDescription':true,
                'photos':[]
              },
               {
                'title': "What is Stephen's favorite color?",
                'description': 'Just pick the ones you actually like.',
                'type': 'radioButton',
                'values': [
                      {
                        'key': 'orange',
                        'remark': ''
                      },
                      {
                        'key': 'red'
                      },
                      {
                        'key': 'green'
                      },
                      {
                        'key': 'pink'
                      },
                      {
                        'key': 'purple mountain majesty'
                      },
                      {
                        'key': 'yellow'
                      }
                ],
                'answers': [
                        'orange'
                    ],
                'answer': null,
                'value': null,
                'validation': {
                  'type': 'number',
                  'min': null,
                  'max': null,
                  'isRequired': true
                },
                'notApplicable': false,
                'severity': null,
                'showSummaryRemark':true,
                'showDescription':true,
                'photos':[]
              }
            ]}
        ]}]
      }});
    return deferred.promise;
  };

     public.getInspectionById = function (id) {
    var deferred = $q.defer();
    var columns = [{"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Present","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":1,"ansValue":"Inspector","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":1,"ansRowId":1},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Present","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":1,"ansValue":"Buyer","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":1,"ansRowId":2},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Present","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":1,"ansValue":"Resident","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":1,"ansRowId":3},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Present","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":1,"ansValue":"Builder of Builders Rep","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":1,"ansRowId":4},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Present","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":1,"ansValue":"Owner or Seller","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":1,"ansRowId":5},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Present","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":1,"ansValue":"Agent","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":1,"ansRowId":6},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Present","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":1,"ansValue":"Friends or Other","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":1,"ansRowId":7},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Providing Property Access","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":2,"ansValue":"Inspector","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":2,"ansRowId":8},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Providing Property Access","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":2,"ansValue":"Buyer","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":2,"ansRowId":9},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Providing Property Access","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":2,"ansValue":"Resident","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":2,"ansRowId":10},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Providing Property Access","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":2,"ansValue":"Builder of Builders Rep","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":2,"ansRowId":11},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Providing Property Access","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":2,"ansValue":"Owner or Seller","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":2,"ansRowId":12},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Providing Property Access","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":2,"ansValue":"Agent","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":2,"ansRowId":13},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Person(s) Providing Property Access","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":2,"ansValue":"Friends or Other","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":2,"ansRowId":14},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Year Built","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"number","queMin":1700,"queMax":2017,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":3,"ansValue":null,"ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":3,"ansRowId":15},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Square Feet of the Property","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"number","queMin":0,"queMax":50000,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":4,"ansValue":null,"ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":4,"ansRowId":16},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Type of Property","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":5,"ansValue":"Single Family","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":5,"ansRowId":17},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Type of Property","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":5,"ansValue":"Single Use","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":5,"ansRowId":18},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Type of Property","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":5,"ansValue":"Multiple Use","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":5,"ansRowId":19},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Type of Property","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":5,"ansValue":"Duplex","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":5,"ansRowId":20},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Type of Property","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":5,"ansValue":"Triplex","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":5,"ansRowId":21},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Type of Property","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":5,"ansValue":"Multi Family","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":5,"ansRowId":22},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Type of Property","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":5,"ansValue":"Detached","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":5,"ansRowId":23},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Use","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":6,"ansValue":"Residential","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":6,"ansRowId":24},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Use","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":6,"ansValue":"Apartment","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":6,"ansRowId":25},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Use","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":6,"ansValue":"Retail Store","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":6,"ansRowId":26},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Use","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":6,"ansValue":"Business","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":6,"ansRowId":27},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Use","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":6,"ansValue":"Industrial","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":6,"ansRowId":28},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Use","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":6,"ansValue":"Commercial","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":6,"ansRowId":29},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Number of Stories","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":7,"ansValue":"Rambler","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":7,"ansRowId":30},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Number of Stories","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":7,"ansValue":"One Level","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":7,"ansRowId":31},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Number of Stories","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":7,"ansValue":"Split-Entry","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":7,"ansRowId":32},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Number of Stories","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":7,"ansValue":"Split-Level","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":7,"ansRowId":33},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Number of Stories","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":7,"ansValue":"One Story","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":7,"ansRowId":34},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Number of Stories","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":7,"ansValue":"Two Story","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":7,"ansRowId":35},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Number of Stories","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":7,"ansValue":"Three Story","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":7,"ansRowId":36},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Number of Stories","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":7,"ansValue":"Mid-Rise","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":7,"ansRowId":37},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Number of Stories","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":7,"ansValue":"Multi-Level","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":7,"ansRowId":38},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Frame","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":8,"ansValue":"Wood-Framed","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":8,"ansRowId":39},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Frame","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":8,"ansValue":"Steel-Framed","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":8,"ansRowId":40},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Frame","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":8,"ansValue":"Concrete","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":8,"ansRowId":41},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Frame","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":8,"ansValue":"CMU or Block","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":8,"ansRowId":42},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Frame","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":8,"ansValue":"Masonry","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":8,"ansRowId":43},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Frame","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":8,"ansValue":"Tilt-Up","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":8,"ansRowId":44},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Frame","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":8,"ansValue":"Wood-Frame on Steel Carriage","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":8,"ansRowId":45},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Frame","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":8,"ansValue":"ICF","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":8,"ansRowId":46},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"Home","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":47},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"Twin Home","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":48},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"Town Home","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":49},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"Mobile Home","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":50},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"Log Home","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":51},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"Manucfactured Home","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":52},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"Prefabbed Structure","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":53},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"Condominium","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":54},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"Building","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":55},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"Garage","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":56},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"Low-Rise","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":57},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"Mid-Rise","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":58},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Building Type","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"radio","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":9,"ansValue":"High-Rise","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":9,"ansRowId":59},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Configurations","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":10,"ansValue":"With Lower Parking Garage","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":10,"ansRowId":60},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Configurations","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":10,"ansValue":"With Basement & Garage","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":10,"ansRowId":61},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Configurations","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":10,"ansValue":"With Garage","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":10,"ansRowId":62},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Configurations","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":10,"ansValue":"With Garage & Crawlspace","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":10,"ansRowId":63},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Configurations","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":10,"ansValue":"With Full Basement","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":10,"ansRowId":64},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Configurations","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":10,"ansValue":"With Daylight Basement","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":10,"ansRowId":65},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Configurations","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":10,"ansValue":"With Basement & Crawlspace(s)","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":10,"ansRowId":66},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Configurations","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":10,"ansValue":"With Slab-On-Grade","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":10,"ansRowId":67},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Configurations","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":10,"ansValue":"Over Adjoining Unit(s)","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":10,"ansRowId":68},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Configurations","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":10,"ansValue":"Over Adjoining Basement Unit","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":10,"ansRowId":69},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Orientation","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"dropdown","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":11,"ansValue":"North","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":11,"ansRowId":70},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Orientation","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"dropdown","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":11,"ansValue":"East","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":11,"ansRowId":71},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Orientation","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"dropdown","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":11,"ansValue":"West","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":11,"ansRowId":72},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Orientation","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"dropdown","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":11,"ansValue":"South","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":11,"ansRowId":73},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Orientation","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"dropdown","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":11,"ansValue":"North-East","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":11,"ansRowId":74},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Orientation","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"dropdown","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":11,"ansValue":"North-West","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":11,"ansRowId":75},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Orientation","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"dropdown","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":11,"ansValue":"South-East","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":11,"ansRowId":76},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Orientation","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"dropdown","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":11,"ansValue":"South-West","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":11,"ansRowId":77},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Vehicle Parking","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":12,"ansValue":"At Curbside","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":12,"ansRowId":78},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Vehicle Parking","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":12,"ansValue":"In a Rear Alley","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":12,"ansRowId":79},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Vehicle Parking","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":12,"ansValue":"In the Driveway","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":12,"ansRowId":80},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Vehicle Parking","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":12,"ansValue":"In an Attached Garage(s)","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":12,"ansRowId":81},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Vehicle Parking","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":12,"ansValue":"In a Detached Garage(s)","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":12,"ansRowId":82},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Vehicle Parking","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":12,"ansValue":"In an Attached Carport","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":12,"ansRowId":83},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Vehicle Parking","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":12,"ansValue":"In a Detached Carport","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":12,"ansRowId":84},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Vehicle Parking","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":12,"ansValue":"In a Covered Parking Space","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":12,"ansRowId":85},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Vehicle Parking","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":12,"ansValue":"In an Open Parking Space","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":12,"ansRowId":86},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Vehicle Parking","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":12,"ansValue":"In a Secured Parking Garage","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":12,"ansRowId":87},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Vehicle Parking","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":12,"ansValue":"In an Open Parking Garage","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":12,"ansRowId":88},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Vehicle Parking","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":12,"ansValue":"In an Open, Striped Parking Lot","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":12,"ansRowId":89},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Utilities","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":13,"ansValue":"Electricity","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":13,"ansRowId":90},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Utilities","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":13,"ansValue":"Water","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":13,"ansRowId":91},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Utilities","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":13,"ansValue":"Gas","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":13,"ansRowId":92},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Utilities","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":13,"ansValue":"Oil","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":13,"ansRowId":93},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Utilities","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":13,"ansValue":"Propane","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":13,"ansRowId":94},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"What Utilities were OFF","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":14,"ansValue":"Electricity","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":14,"ansRowId":95},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"What Utilities were OFF","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":14,"ansValue":"Water","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":14,"ansRowId":96},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"What Utilities were OFF","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":14,"ansValue":"Gas","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":14,"ansRowId":97},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"What Utilities were OFF","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":14,"ansValue":"Oil","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":14,"ansRowId":98},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"What Utilities were OFF","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"checkbox","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":14,"ansValue":"Propane","ansType":"multi","rowId":1,"secRowId":1,"susRowId":1,"queRowId":14,"ansRowId":99},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Occupancy","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"dropdown","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":15,"ansValue":"Occupied","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":15,"ansRowId":100},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Occupancy","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"dropdown","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":15,"ansValue":"Mostly Occupied","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":15,"ansRowId":101},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Occupancy","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"dropdown","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":15,"ansValue":"Mostly Vacant","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":15,"ansRowId":102},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Property Occupancy","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":true,"queType":"dropdown","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":15,"ansValue":"Vacant","ansType":"single","rowId":1,"secRowId":1,"susRowId":1,"queRowId":15,"ansRowId":103},
 {"insLastModified":"9-12-17","insLastSubmitted":"9-12-17","insJobId":10,"insType":"Residential","insName":"Smith Inspection","insUserId":1,"insThemeId":null,"insThemeResponseBlob":null,"insTemplateId":null,"insTemplateResponseBlob":null,"secTitle":"Field Notes","secInspectionId":1,"susTitle":"Observations","susSectionId":1,"queTitle":"Observation Images","queDescription":"","queSubSectionId":1,"queAnswered":false,"queRequired":false,"queType":"photo","queMin":null,"queMax":null,"queNotApplicable":false,"queShowSummaryRemark":true,"queShowDescription":true,"ansQuestionId":16,"ansValue":null,"ansType":"photo","rowId":1,"secRowId":1,"susRowId":1,"queRowId":16,"ansRowId":104}];
  console.log(columns.length);  
  deferred.resolve({
      row: {
          length:104,
          item: function(index){
              return columns[index];
          }
      },message: 'Successful database select'
    });
    return deferred.promise;
  };
    
  public.getReports = function() {
    console.info("DATABASE: " + arguments);
      var columns = [{insId: 0, insLastModified: '9-12-17', insLastSubmitted: '9-12-17', insJobId: 10, insType: 'Residential', insName: 'Smith Inspection', insUserId: 1},
                     {insId: 1, insLastModified: '10-1-17', insLastSubmitted: '9-11-17', insJobId: 9, insType: 'Residential', insName: 'Jones Inspection', insUserId: 1},
                     {insId: 2, insLastModified: '6-12-17', insLastSubmitted: '6-12-17', insJobId: 13, insType: 'Residential', insName: 'Smith Inspection', insUserId: 1},
                     {insId: 3, insLastModified: '9-1-17', insLastSubmitted: '9-1-17', insJobId: 21, insType: 'Residential', insName: 'Smith Inspection', insUserId: 1},
                     {insId: 4, insLastModified: '9-12-17', insLastSubmitted: '9-12-17', insJobId: 1, insType: 'Commercial', insName: 'Walmart Inspection', insUserId: 1}
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
    var columns = [{rowId: 1, insOrganizationId: 1, insTemplateTitle: 'Home Template', insTemplateResponseBlob: 'a whole bunch more text', insUserId: 1},
                   {rowId: 1, insOrganizationId: 1, insTemplateTitle: 'Commercial Template', insTemplateResponseBlob: 'a whole bunch more text', insUserId: 1}];
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
