// Current structure of inspection object as of 12/21

var section = {
              id: promise.row.item(i).secRowId,
              title: promise.row.item(i).secTitle,
              sourceType: promise.row.item(i).secSourceType,
              inspectionId: promise.row.item(i).secInspectionId,
              order: promise.row.item(i).secOrder,
              subsections: []
            }
            // Build subsections
            for (var j = i; promise.row.item(j) && promise.row.item(i).secRowId == promise.row.item(j).secRowId; j++) {
              // Build subsection
              var subsection = {
                id: promise.row.item(j).susRowId,
                title: promise.row.item(j).susTitle,
                sectionId: promise.row.item(j).susSectionId,
                inspectionId: promise.row.item(j).susInspectionId,
                sourceType: promise.row.item(j).susSourceType,
                order: promise.row.item(j).susOrder,
                questions: []
              }
              // Build questions
              // Validation check to make sure there are questions (many subs dont have them currently but this will likely not be the case in the future)
              if (promise.row.item(j).queRowId) {
                for (var k = j; promise.row.item(k) && promise.row.item(j).susRowId == promise.row.item(k).susRowId; k++) {
                  // Build question object
                  var question = {
                    id: promise.row.item(k).queRowId,
                    title: promise.row.item(k).queTitle,
                    description: promise.row.item(k).queDescription,
                    subsectionId: promise.row.item(k).queSubSectionId,
                    sectionId: promise.row.item(k).secRowId,
                    inspectionId: promise.row.item(k).queInspectionId,
                    sourceType: promise.row.item(k).sourceType,
                    type: promise.row.item(k).queType,
                    values: [],
                    validation: {
                      type: promise.row.item(k).queValidationType,
                      min: promise.row.item(k).queMin,
                      max: promise.row.item(k).queMax,
                      isRequired: promise.row.item(k).queRequired
                    },
                    answer: null,
                    answers: [],
                    notApplicable: promise.row.item(k).queNotApplicable,
                    severity: null,
                    showSummaryRemark: promise.row.item(k).queShowSummaryRemark,
                    showDescription: promise.row.item(k).queShowDescription,
                    order: promise.row.item(k).queOrder,
                    photos: []
                  }
                  // Build answers
                  for (var l = k; promise.row.item(l) && promise.row.item(k).queRowId == promise.row.item(l).queRowId; l++) {
                    var answer = {
                      id: promise.row.item(l).ansRowId,
                      key: promise.row.item(l).ansValue,
                      questionId: promise.row.item(l).ansQuestionId,
                      sourceType: promise.row.item(l).ansSourceType,
                      inspectionId: promise.row.item(l).ansInspectionId,
                      type: promise.row.item(l).ansType,
                      checked: promise.row.item(l).ansChecked,
                      autoComment: promise.row.item(l).ansAutoComment,
                      order: promise.row.item(l).ansOrder,
                      photos: []
                    }
                    question.values.push(answer);
                    // Check to see if this answer was a selected answer by inspector
                    if (promise.row.item(l).ansChecked) {
                      // If multi, push onto answers list. Otherwise, store in single answer key.
                      if (promise.row.item(l).ansType == 'multi') {
                        question.answers.push(answer.key);
                      } else {
                        question.answer = answer.key;
                      }
                    }
                    if (promise.row.item(l).ansRowId) {
                      for (var m = l; promise.row.item(m) && promise.row.item(l).ansRowId == promise.row.item(m).ansRowId; m++) {
                        if (promise.row.item(m).phoRowId) {
                          var photo = {
                            id: promise.row.item(m).phoRowId,
                            link: promise.row.item(m).phoLink,
                            title: promise.row.item(m).phoTitle,
                            questionId: promise.row.item(m).phoQuestionId,
                            answerId: promise.row.item(m).phoAnswerId,
                            inspectionId: promise.row.item(m).phoInspectionId,
                            sourceType: promise.row.item(m).phoSourceType,
                            order: promise.row.item(m).phoOrder
                          }
                          answer.photos.push(photo);
                          question.photos.push(photo);
                        }
                      }
                    }
                  }
                }
              }
            }


var default_template = 
    {
        "insLastModified":"Sun Oct 08 2017 15:22:12 GMT-0600 (MDT)",
        "insLastSubmitted":"Sun Oct 08 2017 15:22:12 GMT-0600 (MDT)",
        "insJobId":null,
        "insType":"Residential",
        "insName":null,
        "insUserId":1,
        "rowId":1,
        "insId":1,
        "insSourceType":"Inspection",
        "sections":[
            {
                "id":1,
                "title":"Field Notes",
                "sourceType":"Template",
                "inspectionId":1,
                "subsections":[
                    {
                        "id":1,
                        "title":"Observations",
                        "sectionId":1,
                        "inspectionId":1,
                        "sourceType":"Template",
                        "questions":[
                            {
                                "id":1,
                                "title":"Person(s) Present",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"checkbox",
                                "values":[
                                    {
                                        "id":1,
                                        "key":"Inspector",
                                        "questionId":1,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":2,
                                        "key":"Buyer",
                                        "questionId":1,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":3,
                                        "key":"Resident",
                                        "questionId":1,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":4,
                                        "key":"Builder of Builders Rep",
                                        "questionId":1,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":5,
                                        "key":"Owner or Seller",
                                        "questionId":1,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":6,
                                        "key":"Agent",
                                        "questionId":1,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":7,
                                        "key":"Friends or Other",
                                        "questionId":1,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"false"
                                },
                                "answer":null,
                                "answers":["Inspector"],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":2,
                                "title":"Person(s) Providing Property Access",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"checkbox",
                                "values":[
                                    {
                                        "id":8,
                                        "key":"Inspector",
                                        "questionId":2,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":9,
                                        "key":"Buyer",
                                        "questionId":2,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":10,
                                        "key":"Resident",
                                        "questionId":2,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":11,
                                        "key":"Builder of Builders Rep",
                                        "questionId":2,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":12,
                                        "key":"Owner or Seller",
                                        "questionId":2,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":13,
                                        "key":"Agent",
                                        "questionId":2,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":14,
                                        "key":"Friends or Other",
                                        "questionId":2,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"false"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":3,
                                "title":"Year Built",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"number",
                                "values":[
                                    {
                                        "id":15,
                                        "key":null,
                                        "questionId":3,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":1700,
                                    "max":2017,
                                    "isRequired":"true"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":4,
                                "title":"Square Feet of the Property",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"number",
                                "values":[
                                    {
                                        "id":16,
                                        "key":null,
                                        "questionId":4,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":0,
                                    "max":50000,
                                    "isRequired":"true"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":5,
                                "title":"Type of Property",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"radio",
                                "values":[
                                    {
                                        "id":17,
                                        "key":"Single Family",
                                        "questionId":5,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":18,
                                        "key":"Single Use",
                                        "questionId":5,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":19,
                                        "key":"Multiple Use",
                                        "questionId":5,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":20,
                                        "key":"Duplex",
                                        "questionId":5,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":21,
                                        "key":"Triplex",
                                        "questionId":5,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":22,
                                        "key":"Multi Family",
                                        "questionId":5,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":23,
                                        "key":"Detached",
                                        "questionId":5,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"true"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":6,
                                "title":"Property Use",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"radio",
                                "values":[
                                    {
                                        "id":24,
                                        "key":"Residential",
                                        "questionId":6,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":25,
                                        "key":"Apartment",
                                        "questionId":6,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":26,
                                        "key":"Retail Store",
                                        "questionId":6,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":27,
                                        "key":"Business",
                                        "questionId":6,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":28,
                                        "key":"Industrial",
                                        "questionId":6,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":29,
                                        "key":"Commercial",
                                        "questionId":6,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"true"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":7,
                                "title":"Number of Stories",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"radio",
                                "values":[
                                    {
                                        "id":30,
                                        "key":"Rambler",
                                        "questionId":7,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":31,
                                        "key":"One Level",
                                        "questionId":7,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":32,
                                        "key":"Split-Entry",
                                        "questionId":7,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":33,
                                        "key":"Split-Level",
                                        "questionId":7,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":34,
                                        "key":"One Story",
                                        "questionId":7,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":35,
                                        "key":"Two Story",
                                        "questionId":7,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":36,
                                        "key":"Three Story",
                                        "questionId":7,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":37,
                                        "key":"Mid-Rise",
                                        "questionId":7,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":38,
                                        "key":"Multi-Level",
                                        "questionId":7,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"true"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":8,
                                "title":"Building Frame",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"radio",
                                "values":[
                                    {
                                        "id":39,
                                        "key":"Wood-Framed",
                                        "questionId":8,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":40,
                                        "key":"Steel-Framed",
                                        "questionId":8,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":41,
                                        "key":"Concrete",
                                        "questionId":8,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":42,
                                        "key":"CMU or Block",
                                        "questionId":8,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":43,
                                        "key":"Masonry",
                                        "questionId":8,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":44,
                                        "key":"Tilt-Up",
                                        "questionId":8,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":45,
                                        "key":"Wood-Frame on Steel Carriage",
                                        "questionId":8,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":46,
                                        "key":"ICF",
                                        "questionId":8,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"true"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":9,
                                "title":"Building Type",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"radio",
                                "values":[
                                    {
                                        "id":47,
                                        "key":"Home",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":48,
                                        "key":"Twin Home",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":49,
                                        "key":"Town Home",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":50,
                                        "key":"Mobile Home",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":51,
                                        "key":"Log Home",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":52,
                                        "key":"Manucfactured Home",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":53,
                                        "key":"Prefabbed Structure",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":54,
                                        "key":"Condominium",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":55,
                                        "key":"Building",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":56,
                                        "key":"Garage",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":57,
                                        "key":"Low-Rise",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":58,
                                        "key":"Mid-Rise",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":59,
                                        "key":"High-Rise",
                                        "questionId":9,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"true"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":10,
                                "title":"Property Configurations",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"checkbox",
                                "values":[
                                    {
                                        "id":60,
                                        "key":"With Lower Parking Garage",
                                        "questionId":10,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":61,
                                        "key":"With Basement & Garage",
                                        "questionId":10,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":62,
                                        "key":"With Garage",
                                        "questionId":10,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":63,
                                        "key":"With Garage & Crawlspace",
                                        "questionId":10,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":64,
                                        "key":"With Full Basement",
                                        "questionId":10,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":65,
                                        "key":"With Daylight Basement",
                                        "questionId":10,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":66,
                                        "key":"With Basement & Crawlspace(s)",
                                        "questionId":10,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":67,
                                        "key":"With Slab-On-Grade",
                                        "questionId":10,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":68,
                                        "key":"Over Adjoining Unit(s)",
                                        "questionId":10,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":69,
                                        "key":"Over Adjoining Basement Unit",
                                        "questionId":10,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"true"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":11,
                                "title":"Property Orientation",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"dropdown",
                                "values":[
                                    {
                                        "id":70,
                                        "key":"North",
                                        "questionId":11,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":71,
                                        "key":"East",
                                        "questionId":11,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":72,
                                        "key":"West",
                                        "questionId":11,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":73,
                                        "key":"South",
                                        "questionId":11,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":74,
                                        "key":"North-East",
                                        "questionId":11,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":75,
                                        "key":"North-West",
                                        "questionId":11,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":76,
                                        "key":"South-East",
                                        "questionId":11,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":77,
                                        "key":"South-West",
                                        "questionId":11,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"false"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":12,
                                "title":"Vehicle Parking",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"checkbox",
                                "values":[
                                    {
                                        "id":78,
                                        "key":"At Curbside",
                                        "questionId":12,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":79,
                                        "key":"In a Rear Alley",
                                        "questionId":12,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":80,
                                        "key":"In the Driveway",
                                        "questionId":12,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":81,
                                        "key":"In an Attached Garage(s)",
                                        "questionId":12,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":82,
                                        "key":"In a Detached Garage(s)",
                                        "questionId":12,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":83,
                                        "key":"In an Attached Carport",
                                        "questionId":12,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":84,
                                        "key":"In a Detached Carport",
                                        "questionId":12,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":85,
                                        "key":"In a Covered Parking Space",
                                        "questionId":12,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":86,
                                        "key":"In an Open Parking Space",
                                        "questionId":12,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":87,
                                        "key":"In a Secured Parking Garage",
                                        "questionId":12,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":88,
                                        "key":"In an Open Parking Garage",
                                        "questionId":12,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":89,
                                        "key":"In an Open, Striped Parking Lot",
                                        "questionId":12,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"false"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":13,
                                "title":"Utilities",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"checkbox",
                                "values":[
                                    {
                                        "id":90,
                                        "key":"Electricity",
                                        "questionId":13,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":91,
                                        "key":"Water",
                                        "questionId":13,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":92,
                                        "key":"Gas",
                                        "questionId":13,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":93,
                                        "key":"Oil",
                                        "questionId":13,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":94,
                                        "key":"Propane",
                                        "questionId":13,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"false"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":14,
                                "title":"What Utilities were OFF",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"checkbox",
                                "values":[
                                    {
                                        "id":95,
                                        "key":"Electricity",
                                        "questionId":14,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":96,
                                        "key":"Water",
                                        "questionId":14,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":97,
                                        "key":"Gas",
                                        "questionId":14,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":98,
                                        "key":"Oil",
                                        "questionId":14,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    },
                                    {
                                        "id":99,
                                        "key":"Propane",
                                        "questionId":14,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"multi",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"false"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":15,
                                "title":"Property Occupancy",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"dropdown",
                                "values":[
                                    {
                                        "id":100,
                                        "key":"Occupied",
                                        "questionId":15,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":101,
                                        "key":"Mostly Occupied",
                                        "questionId":15,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":102,
                                        "key":"Mostly Vacant",
                                        "questionId":15,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    },
                                    {
                                        "id":103,
                                        "key":"Vacant",
                                        "questionId":15,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"single",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"true"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            },
                            {
                                "id":16,
                                "title":"Observation Images",
                                "description":"",
                                "subsectionId":1,
                                "inspectionId":1,
                                "type":"photo",
                                "values":[
                                    {
                                        "id":104,
                                        "key":null,
                                        "questionId":16,
                                        "sourceType":"Template",
                                        "inspectionId":1,
                                        "type":"photo",
                                        "remark":""
                                    }],
                                "validation":{
                                    "type":null,
                                    "min":null,
                                    "max":null,
                                    "isRequired":"false"
                                },
                                "answer":null,
                                "answers":[],
                                "notApplicable":"false",
                                "severity":null,
                                "showSummaryRemark":"true",
                                "showDescription":"true",
                                "photos":[]
                            }]
                    }]
            },
            {"id":2,"title":"Site","sourceType":"Template","inspectionId":1,"subsections":[{"id":2,"title":"Evaluation","sectionId":2,"inspectionId":1,"sourceType":"Template","questions":[{"id":17,"title":"Conditions","description":"","subsectionId":2,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":18,"title":"Limitations","description":"","subsectionId":2,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":19,"title":"Driveway","description":"","subsectionId":2,"inspectionId":1,"type":"radio","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":20,"title":"Driveway Condition","description":"","subsectionId":2,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":21,"title":"Patio","description":"","subsectionId":2,"inspectionId":1,"type":"radio","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":22,"title":"Patio Condition","description":"","subsectionId":2,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":23,"title":"Walkways and Steps","description":"","subsectionId":2,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":24,"title":"Retaining Wall","description":"","subsectionId":2,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":25,"title":"Retaining Wall Condition","description":"","subsectionId":2,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":26,"title":"Safety Fencing Location","description":"","subsectionId":2,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":27,"title":"Safety Fencing Type","description":"","subsectionId":2,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":28,"title":"Safety Fencing Condition","description":"","subsectionId":2,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":29,"title":"Landscaping","description":"","subsectionId":2,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":30,"title":"Safety Concern","description":"","subsectionId":2,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":31,"title":"Evaluation Images","description":"","subsectionId":2,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":3,"title":"Attached Steps or Platforms","sectionId":2,"inspectionId":1,"sourceType":"Template","questions":[{"id":32,"title":"Porch or Stoop","description":"","subsectionId":3,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":33,"title":"Porch or Stoop Condition","description":"","subsectionId":3,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":34,"title":"Yard Steps","description":"","subsectionId":3,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":35,"title":"Deck or Balcony","description":"","subsectionId":3,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":36,"title":"Deck or Balcony Condition","description":"","subsectionId":3,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":37,"title":"Moisture Conditions","description":"","subsectionId":3,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":38,"title":"Attached Steps or Platforms Images","description":"","subsectionId":3,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]}]},{"id":3,"title":"Exterior","sourceType":"Template","inspectionId":1,"subsections":[{"id":4,"title":"Siding or Wall Cladding","sectionId":3,"inspectionId":1,"sourceType":"Template","questions":[{"id":39,"title":"Conditions","description":"","subsectionId":4,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":40,"title":"Limitations","description":"","subsectionId":4,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":41,"title":"Types of Wall Cladding","description":"","subsectionId":4,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":42,"title":"Wall Cladding Condition","description":"","subsectionId":4,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":43,"title":"Flashing at Fenestrations","description":"","subsectionId":4,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":44,"title":"Trim or Soffit or Fascia","description":"","subsectionId":4,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":45,"title":"Trim or Soffit or Fascia Condition","description":"","subsectionId":4,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":46,"title":"Siding or Wall Cladding Images","description":"","subsectionId":4,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":5,"title":"Wall Fenestrations","sectionId":3,"inspectionId":1,"sourceType":"Template","questions":[{"id":47,"title":"Window Frame or Trim","description":"","subsectionId":5,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":48,"title":"Window Frame or Trim Condition","description":"","subsectionId":5,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":49,"title":"Exterior Doors","description":"","subsectionId":5,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":50,"title":"Exterior Doors Condition","description":"","subsectionId":5,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":51,"title":"Caulking","description":"","subsectionId":5,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":52,"title":"Wall Fenestrations Images","description":"","subsectionId":5,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":6,"title":"Attached Garage or Carport","sectionId":3,"inspectionId":1,"sourceType":"Template","questions":[{"id":53,"title":"Conditions","description":"","subsectionId":6,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":54,"title":"Limitations","description":"","subsectionId":6,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":55,"title":"Vehicle Parking","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":56,"title":"Floor","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":57,"title":"Floor Condition","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":58,"title":"Firewall Location","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":59,"title":"Firewall Condition","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":60,"title":"Firedoor Location","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":61,"title":"Exterior Service Door","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":62,"title":"Exterior Service Door Condition","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":63,"title":"Car Door","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":64,"title":"Car Door Condition","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":65,"title":"Automatic Door Opener","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":66,"title":"Safety Reverse","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":67,"title":"Condition","description":"","subsectionId":6,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":68,"title":"Attached Garage or Carport Images","description":"","subsectionId":6,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]}]},{"id":4,"title":"Roofing","sourceType":"Template","inspectionId":1,"subsections":[{"id":7,"title":"Roof Covering(s)","sectionId":4,"inspectionId":1,"sourceType":"Template","questions":[{"id":69,"title":"Conditions","description":"","subsectionId":7,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":70,"title":"Limitations","description":"","subsectionId":7,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":71,"title":"Roof Covering(s)","description":"","subsectionId":7,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":72,"title":"Viewed Roof From","description":"","subsectionId":7,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":73,"title":"Style(s)","description":"","subsectionId":7,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":74,"title":"Pitch","description":"","subsectionId":7,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":75,"title":"Age of Roof Covering","description":"","subsectionId":7,"inspectionId":1,"type":"number","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":76,"title":"Number of Layers of Roof Covering","description":"","subsectionId":7,"inspectionId":1,"type":"number","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":77,"title":"Roof Covering","description":"","subsectionId":7,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":78,"title":"Roof Covering Condition","description":"","subsectionId":7,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":79,"title":"Valley(s)","description":"","subsectionId":7,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":80,"title":"Valley(s) Condition","description":"","subsectionId":7,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":81,"title":"Roof Covering(s) Images","description":"","subsectionId":7,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":8,"title":"Fenestrations","sectionId":4,"inspectionId":1,"sourceType":"Template","questions":[{"id":82,"title":"Perforations (through-roof)","description":"","subsectionId":8,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":83,"title":"Perforations Condition(s)","description":"","subsectionId":8,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":84,"title":"Skylights or Skywalls","description":"","subsectionId":8,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":85,"title":"Skylights or Skywalls Condition","description":"","subsectionId":8,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":86,"title":"Flashing(s)","description":"","subsectionId":8,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":87,"title":"Flashing(s) Condition","description":"","subsectionId":8,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":88,"title":"Fenestrations Images","description":"","subsectionId":8,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":9,"title":"Gutters & Down-Spouts","sectionId":4,"inspectionId":1,"sourceType":"Template","questions":[{"id":89,"title":"Type","description":"","subsectionId":9,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":90,"title":"Gutters & Down-Spouts Condition","description":"","subsectionId":9,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":91,"title":"Down-Spout Discharge","description":"","subsectionId":9,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":92,"title":"Down-Spout Discharge Condition","description":"","subsectionId":9,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":93,"title":"Gutters or Down Spouts Images","description":"","subsectionId":9,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]}]},{"id":5,"title":"Structural","sourceType":"Template","inspectionId":1,"subsections":[{"id":10,"title":"Roof Framing (Visible in Attic)","sectionId":5,"inspectionId":1,"sourceType":"Template","questions":[{"id":94,"title":"Conditions","description":"","subsectionId":10,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":95,"title":"Limitations","description":"","subsectionId":10,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":96,"title":"Roof System","description":"","subsectionId":10,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":97,"title":"Diaphragm Sheathing","description":"","subsectionId":10,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":98,"title":"Diaphragm Sheathing Condition","description":"","subsectionId":10,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":99,"title":"Missing or Inadequate","description":"","subsectionId":10,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":100,"title":"Roof Framing Images","description":"","subsectionId":10,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":11,"title":"Floor Framing","sectionId":5,"inspectionId":1,"sourceType":"Template","questions":[{"id":101,"title":"Notice","description":"","subsectionId":11,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":102,"title":"Sub-Floor System","description":"","subsectionId":11,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":103,"title":"Beams (Girders)","description":"","subsectionId":11,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":104,"title":"Joists & Sheathing","description":"","subsectionId":11,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":105,"title":"I-Beams","description":"","subsectionId":11,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":106,"title":"Diaphragm","description":"","subsectionId":11,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":107,"title":"Posts(Columns)","description":"","subsectionId":11,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":108,"title":"Posts(Columns) Condition","description":"","subsectionId":11,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":109,"title":"Stairs","description":"","subsectionId":11,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":110,"title":"Stairs Condition","description":"","subsectionId":11,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":111,"title":"Inadequate","description":"","subsectionId":11,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":112,"title":"Basement or Crawl Floor","description":"","subsectionId":11,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":113,"title":"Basement or Crawl Floor Condition","description":"","subsectionId":11,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":114,"title":"Floor Framing Images","description":"","subsectionId":11,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":12,"title":"Foundation","sectionId":5,"inspectionId":1,"sourceType":"Template","questions":[{"id":115,"title":"Type of Foundation","description":"","subsectionId":12,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":116,"title":"Condition of Foundation","description":"","subsectionId":12,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":117,"title":"Limited By","description":"","subsectionId":12,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":118,"title":"WDI or WDO (Wood-Destroying)","description":"","subsectionId":12,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":119,"title":"Cracks","description":"","subsectionId":12,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":120,"title":"Drainage","description":"","subsectionId":12,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":121,"title":"Sump Pump","description":"","subsectionId":12,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":122,"title":"Foundation Images","description":"","subsectionId":12,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]}]},{"id":6,"title":"Thermal","sourceType":"Template","inspectionId":1,"subsections":[{"id":13,"title":"Attic","sectionId":6,"inspectionId":1,"sourceType":"Template","questions":[{"id":123,"title":"Conditions","description":"","subsectionId":13,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":124,"title":"Limitations","description":"","subsectionId":13,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":125,"title":"Access","description":"","subsectionId":13,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":126,"title":"Location","description":"","subsectionId":13,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":127,"title":"Viewed","description":"","subsectionId":13,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":128,"title":"Attic Insulation Location","description":"","subsectionId":13,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":129,"title":"Attic Insulation Quantity (in)","description":"","subsectionId":13,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":130,"title":"Attic Insulation Type","description":"","subsectionId":13,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":131,"title":"Attic Insulation Condition","description":"","subsectionId":13,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":132,"title":"Attic Ventilation","description":"","subsectionId":13,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":133,"title":"Condition of Ventilation","description":"","subsectionId":13,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":134,"title":"Humidity","description":"","subsectionId":13,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":135,"title":"Infestation","description":"","subsectionId":13,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":136,"title":"Ventilation Notice","description":"","subsectionId":13,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":137,"title":"Attic Images","description":"","subsectionId":13,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":14,"title":"Crawl Spaces or Unfinished Basements","sectionId":6,"inspectionId":1,"sourceType":"Template","questions":[{"id":138,"title":"Access","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":139,"title":"Location","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":140,"title":"Viewed","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":141,"title":"Sub-Floor Insulation Location","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":142,"title":"Sub-Floor Insulation Type","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":143,"title":"Sub-Floor Insulation Retention","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":144,"title":"Sub-Floor Insulation Condition","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":145,"title":"Crawl-Space Ventilation","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":146,"title":"Condition of Crawl-Space Ventilation","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":147,"title":"Vapor Barrier","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":148,"title":"Moisture","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":149,"title":"Drainage","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":150,"title":"Infestation","description":"","subsectionId":14,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":151,"title":"Crawl Space or Basement Images","description":"","subsectionId":14,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":15,"title":"Interior Ventilation or Exhaust Fans","sectionId":6,"inspectionId":1,"sourceType":"Template","questions":[{"id":152,"title":"Whole House Ventilation","description":"","subsectionId":15,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":153,"title":"Whole House Ventilation Condition","description":"","subsectionId":15,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":154,"title":"Moisture Reduction Fans","description":"","subsectionId":15,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":155,"title":"Condition of Moisture Reduction Fans","description":"","subsectionId":15,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":156,"title":"Moisture Notice","description":"","subsectionId":15,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":157,"title":"Interior Ventilation or Exhaust Fan Images","description":"","subsectionId":15,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]}]},{"id":7,"title":"Plumbing","sourceType":"Template","inspectionId":1,"subsections":[{"id":16,"title":"Plumbing System","sectionId":7,"inspectionId":1,"sourceType":"Template","questions":[{"id":158,"title":"Conditions","description":"","subsectionId":16,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":159,"title":"Limitations","description":"","subsectionId":16,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":160,"title":"Water Supply Source","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":161,"title":"Main Water Shut Off Valve Location","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":162,"title":"Water Pressure","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":163,"title":"Water Temperature","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":164,"title":"Waste System","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":165,"title":"Main Entry Piping","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":166,"title":"Main Entry Piping Condition","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":167,"title":"Pressure (psi)","description":"","subsectionId":16,"inspectionId":1,"type":"number","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":168,"title":"Pressure","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":169,"title":"Water Lines","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":170,"title":"Condition of Water Lines","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":171,"title":"Lead (other than solder joints)","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":172,"title":"Disimlar Metal Connection (Potential Electrolysis)","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":173,"title":"DMV Piping","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":174,"title":"Condition of DMV Piping","description":"","subsectionId":16,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":175,"title":"Plumbing System Images","description":"","subsectionId":16,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":17,"title":"Faucets or Fixtures","sectionId":7,"inspectionId":1,"sourceType":"Template","questions":[{"id":176,"title":"Faucets","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":177,"title":"Leaking","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":178,"title":"Faucets or Fixtures Location","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":179,"title":"Accessories","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":180,"title":"Disposer","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":181,"title":"Dishwasher","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":182,"title":"Dishwasher Condition","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":183,"title":"Sinks or Fixtures","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":184,"title":"Grout Condition","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":185,"title":"Drainage","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":186,"title":"Sinks or Fixtures Location","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":187,"title":"Toilet","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":188,"title":"Tub or Shower Surround(s)","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":189,"title":"Condition of Tub or Shower Surround(s)","description":"","subsectionId":17,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":190,"title":"Faucet or Fixtures Images","description":"","subsectionId":17,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":18,"title":"Water Heater","sectionId":7,"inspectionId":1,"sourceType":"Template","questions":[{"id":191,"title":"Energy Source","description":"","subsectionId":18,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":192,"title":"Brand Name","description":"","subsectionId":18,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":193,"title":"Approximate Age (Years Old)","description":"","subsectionId":18,"inspectionId":1,"type":"number","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":194,"title":"Capacity (in Gallons)","description":"","subsectionId":18,"inspectionId":1,"type":"dropbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":195,"title":"Model Number","description":"","subsectionId":18,"inspectionId":1,"type":"text","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":196,"title":"Serial Number","description":"","subsectionId":18,"inspectionId":1,"type":"text","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":197,"title":"Water Temperature","description":"","subsectionId":18,"inspectionId":1,"type":"number","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":198,"title":"Condition","description":"","subsectionId":18,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":199,"title":"TPRV Connection","description":"","subsectionId":18,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":200,"title":"Exhaust","description":"","subsectionId":18,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":201,"title":"Water Heater Images","description":"","subsectionId":18,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]}]},{"id":8,"title":"Heating","sourceType":"Template","inspectionId":1,"subsections":[{"id":19,"title":"Heating System","sectionId":8,"inspectionId":1,"sourceType":"Template","questions":[{"id":202,"title":"Conditions","description":"","subsectionId":19,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":203,"title":"Limitations","description":"","subsectionId":19,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":204,"title":"Energy Source(s)","description":"","subsectionId":19,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":205,"title":"System Type","description":"","subsectionId":19,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":206,"title":"Boiler","description":"","subsectionId":19,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":207,"title":"Heat Pump","description":"","subsectionId":19,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":208,"title":"Stove","description":"","subsectionId":19,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":209,"title":"Solar","description":"","subsectionId":19,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":210,"title":"Heating System Images","description":"","subsectionId":19,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":20,"title":"Central Furnace or Heat Pump","sectionId":8,"inspectionId":1,"sourceType":"Template","questions":[{"id":211,"title":"Brand Name","description":"","subsectionId":20,"inspectionId":1,"type":"dropdown","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":212,"title":"Capacity","description":"","subsectionId":20,"inspectionId":1,"type":"dropdown","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":213,"title":"Year of Manufacture","description":"","subsectionId":20,"inspectionId":1,"type":"number","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":214,"title":"Model Number","description":"","subsectionId":20,"inspectionId":1,"type":"text","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":215,"title":"Serial Number","description":"","subsectionId":20,"inspectionId":1,"type":"text","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":216,"title":"Posted Service History","description":"","subsectionId":20,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":217,"title":"Posted Service History Condition","description":"","subsectionId":20,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":218,"title":"Central Furnace or Heat Pump Images","description":"","subsectionId":20,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":21,"title":"Ducting","sectionId":8,"inspectionId":1,"sourceType":"Template","questions":[{"id":219,"title":"Ducts","description":"","subsectionId":21,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":220,"title":"Reduced Vent","description":"","subsectionId":21,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":221,"title":"Filter","description":"","subsectionId":21,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":222,"title":"Disconnect or Typical Safety Controls","description":"","subsectionId":21,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":223,"title":"Ducting Images","description":"","subsectionId":21,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":22,"title":"Fireplaces or Stoves","sectionId":8,"inspectionId":1,"sourceType":"Template","questions":[{"id":224,"title":"Conditions","description":"","subsectionId":22,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":225,"title":"Limitations","description":"","subsectionId":22,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":226,"title":"Fireplace or Stove Type","description":"","subsectionId":22,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":227,"title":"Mantle or Hearth","description":"","subsectionId":22,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":228,"title":"Firebox","description":"","subsectionId":22,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":229,"title":"Damper","description":"","subsectionId":22,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":230,"title":"Chimney","description":"","subsectionId":22,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":231,"title":"Fireplace or Stoves Images","description":"","subsectionId":22,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]}]},{"id":9,"title":"Cooling","sourceType":"Template","inspectionId":1,"subsections":[{"id":23,"title":"Cooling Systems","sectionId":9,"inspectionId":1,"sourceType":"Template","questions":[{"id":232,"title":"Conditions","description":"","subsectionId":23,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":233,"title":"Limitations","description":"","subsectionId":23,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":234,"title":"Temperature Differential","description":"","subsectionId":23,"inspectionId":1,"type":"number","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":235,"title":"Air Conditioner Type","description":"","subsectionId":23,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":236,"title":"Energy Source","description":"","subsectionId":23,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":237,"title":"Cooling Systems Images","description":"","subsectionId":23,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":24,"title":"Evaporative Coil or Heat Pump (Inside)","sectionId":9,"inspectionId":1,"sourceType":"Template","questions":[{"id":238,"title":"Brand Name","description":"","subsectionId":24,"inspectionId":1,"type":"dropdown","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":239,"title":"Capacity","description":"","subsectionId":24,"inspectionId":1,"type":"dropdown","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":240,"title":"Year of Manufacture","description":"","subsectionId":24,"inspectionId":1,"type":"number","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":241,"title":"Model Number","description":"","subsectionId":24,"inspectionId":1,"type":"text","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":242,"title":"Serial Number","description":"","subsectionId":24,"inspectionId":1,"type":"text","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":243,"title":"Evaporative Coil or Heat Pump Images","description":"","subsectionId":24,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":25,"title":"Compressor or Condenser (Outside)","sectionId":9,"inspectionId":1,"sourceType":"Template","questions":[{"id":244,"title":"Brand Name","description":"","subsectionId":25,"inspectionId":1,"type":"dropdown","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":245,"title":"Capacity","description":"","subsectionId":25,"inspectionId":1,"type":"dropdown","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":246,"title":"Year of Manufacture","description":"","subsectionId":25,"inspectionId":1,"type":"number","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":247,"title":"Model Number","description":"","subsectionId":25,"inspectionId":1,"type":"text","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":248,"title":"Serial Number","description":"","subsectionId":25,"inspectionId":1,"type":"text","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":249,"title":"Compressor or Condenser Condition","description":"","subsectionId":25,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":250,"title":"Refrigerant Lines","description":"","subsectionId":25,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":251,"title":"Compressor or Condensor Images","description":"","subsectionId":25,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]}]},{"id":10,"title":"Electrical","sourceType":"Template","inspectionId":1,"subsections":[{"id":26,"title":"Electrical System","sectionId":10,"inspectionId":1,"sourceType":"Template","questions":[{"id":252,"title":"Conditions","description":"","subsectionId":26,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":253,"title":"Limitations","description":"","subsectionId":26,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":254,"title":"Main Service Entry","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":255,"title":"Condition of Main Service Entry","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":256,"title":"Ground Connection","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":257,"title":"Meter Location","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":258,"title":"Meter Condition","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":259,"title":"Grounding","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":260,"title":"Ground Wiring","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":261,"title":"Condition of Main Electrical Disconnect","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":262,"title":"Main Electrical Disconnect Location","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":263,"title":"Main Panel","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":264,"title":"Reason for Non Evaluation","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":265,"title":"Breakers or Fuses","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":266,"title":"Service Size (AMPS)","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":267,"title":"Service Size (VOLTS)","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":268,"title":"Breaker(s)","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":269,"title":"Location","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":270,"title":"Branch Wiring","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":271,"title":"Condition of Branch Wiring","description":"","subsectionId":26,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":272,"title":"Electrical System Images","description":"","subsectionId":26,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":27,"title":"Fixtures, Switches, or Detectors","sectionId":10,"inspectionId":1,"sourceType":"Template","questions":[{"id":273,"title":"Fixtures","description":"","subsectionId":27,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":274,"title":"Fixtures Condition","description":"","subsectionId":27,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":275,"title":"Switches or Receptacles","description":"","subsectionId":27,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":276,"title":"Condition of Switches or Receptacles","description":"","subsectionId":27,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":277,"title":"Carbon Monoxide Detectors","description":"","subsectionId":27,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":278,"title":"Smoke Detectors","description":"","subsectionId":27,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":279,"title":"Caution Label","description":"","subsectionId":27,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":280,"title":"Fixtures, Switches, or Detectors Images","description":"","subsectionId":27,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]}]},{"id":11,"title":"Interior","sourceType":"Template","inspectionId":1,"subsections":[{"id":28,"title":"Living Room","sectionId":11,"inspectionId":1,"sourceType":"Template","questions":[{"id":281,"title":"Conditions","description":"","subsectionId":28,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":282,"title":"Limitations","description":"","subsectionId":28,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":283,"title":"Entry Door(s)","description":"","subsectionId":28,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":284,"title":"Entry Door(s) Condition","description":"","subsectionId":28,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":285,"title":"Weatherstrip","description":"","subsectionId":28,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":286,"title":"Window(s)","description":"","subsectionId":28,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":287,"title":"Ceiling Fan","description":"","subsectionId":28,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":288,"title":"Heat Source","description":"","subsectionId":28,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":289,"title":"Light, Switches, or Receptacles (Refer To Electrical Section)","description":"","subsectionId":28,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":290,"title":"Comments","description":"","subsectionId":28,"inspectionId":1,"type":"text","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":291,"title":"Living Room Images","description":"","subsectionId":28,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":29,"title":"Kitchen","sectionId":11,"inspectionId":1,"sourceType":"Template","questions":[{"id":292,"title":"Appliances","description":"","subsectionId":29,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":293,"title":"Cabinets","description":"","subsectionId":29,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":294,"title":"Countertops","description":"","subsectionId":29,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":295,"title":"Countertops Condition","description":"","subsectionId":29,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":296,"title":"Backsplash & Self Edge","description":"","subsectionId":29,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":297,"title":"Caulking","description":"","subsectionId":29,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":298,"title":"Grout","description":"","subsectionId":29,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":299,"title":"Exhaust Fan","description":"","subsectionId":29,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":300,"title":"Heat Source","description":"","subsectionId":29,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":301,"title":"Lights or Switches or Receptacles (Refer To Electrical Section)","description":"","subsectionId":29,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":302,"title":"Kitchen Images","description":"","subsectionId":29,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":30,"title":"Laundry","sectionId":11,"inspectionId":1,"sourceType":"Template","questions":[{"id":303,"title":"Appliances","description":"","subsectionId":30,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":304,"title":"Dryer","description":"","subsectionId":30,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":305,"title":"Exhausted","description":"","subsectionId":30,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":306,"title":"Exhaust Appears","description":"","subsectionId":30,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":307,"title":"Exhaust Fan","description":"","subsectionId":30,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":308,"title":"Laundry Images","description":"","subsectionId":30,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":31,"title":"Bathroom(s)","sectionId":11,"inspectionId":1,"sourceType":"Template","questions":[{"id":309,"title":"Walls or Ceilings","description":"","subsectionId":31,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":310,"title":"Condition of Walls or Ceilings","description":"","subsectionId":31,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":311,"title":"Floors","description":"","subsectionId":31,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":312,"title":"Caulking","description":"","subsectionId":31,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":313,"title":"Heat","description":"","subsectionId":31,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":314,"title":"Exhaust Fan","description":"","subsectionId":31,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":315,"title":"Lights or Switches or Receptacles (Refer To Electrical Section)","description":"","subsectionId":31,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":316,"title":"Bathroom Images","description":"","subsectionId":31,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]},{"id":32,"title":"General","sectionId":11,"inspectionId":1,"sourceType":"Template","questions":[{"id":317,"title":"Walls or Ceilings","description":"","subsectionId":32,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":318,"title":"Walls or Ceilings Condition","description":"","subsectionId":32,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":319,"title":"Floor Coverings","description":"","subsectionId":32,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":320,"title":"Floor Coverings Condition","description":"","subsectionId":32,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":321,"title":"Interior Doors","description":"","subsectionId":32,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":322,"title":"Interior Doors Condition","description":"","subsectionId":32,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":323,"title":"Window Type(s)","description":"","subsectionId":32,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":324,"title":"Window(s) Condition","description":"","subsectionId":32,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":325,"title":"Safety Concern","description":"","subsectionId":32,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":326,"title":"Lights or Switches or Receptacles (Refer To Electrical Section) or DUPLICATE?!?!","description":"","subsectionId":32,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":327,"title":"General Images","description":"","subsectionId":32,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]}]},{"id":12,"title":"Life or Safety","sourceType":"Template","inspectionId":1,"subsections":[{"id":33,"title":"Concerns","sectionId":12,"inspectionId":1,"sourceType":"Template","questions":[{"id":328,"title":"Conditions","description":"","subsectionId":33,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":329,"title":"Limitations","description":"","subsectionId":33,"inspectionId":1,"type":"textarea","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":330,"title":"Tripping or Falling Hazard(s)","description":"","subsectionId":33,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":331,"title":"Fire Hazards","description":"","subsectionId":33,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":332,"title":"Pest Related","description":"","subsectionId":33,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":333,"title":"Poison Baits","description":"","subsectionId":33,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":334,"title":"Building Materials (Refer To Specific Sections)","description":"","subsectionId":33,"inspectionId":1,"type":"checkbox","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":335,"title":"Comments","description":"","subsectionId":33,"inspectionId":1,"type":"text","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]},{"id":336,"title":"Potential Safety Concern Images","description":"","subsectionId":33,"inspectionId":1,"type":"photo","values":[{"id":null,"key":null,"questionId":null,"sourceType":null,"inspectionId":null,"type":null,"remark":""}],"validation":{"type":null,"min":null,"max":null,"isRequired":"false"},"answer":null,"answers":[],"notApplicable":"false","severity":null,"showSummaryRemark":"true","showDescription":"true","photos":[]}]}]}]}