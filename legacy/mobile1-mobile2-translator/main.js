window.addEventListener('load', function() {
  var view = document.querySelector("code");
  console.info(oldTemplates[0].data);
  var newTemplate = translate(oldTemplates[0].data);
  console.info(newTemplate);
  view.innerHTML = JSON.stringify(newTemplate);
})

function translate(template) {
  var buffer = {};
  
  buffer.insLastModified = "Sun Oct 08 2017 15:22:12 GMT-0600 (MDT)";
  buffer.insLastSubmitted = "Sun Oct 08 2017 15:22:12 GMT-0600 (MDT)";
  buffer.insType = template.job.reportInf.reportTitle.title;
  buffer.insName = null;
  buffer.insUserId = 1;
  buffer.insId = null;
  buffer.insSourceType = "Template";
  buffer.sections = [];
  
  for (var i = 0; i < template.sections.length; i++) {
    var section = {};
    var currentSection = template.sections[i];
    
    section.id = null;
    section.title = template.sections[i].title;
    section.sourceType = buffer.insSourceType;
    section.inspectionId = buffer.insId;
    section.order = i;
    section.subsections = [];
    
    for (var j = 0; j < currentSection.pages.length; j++) {
      var subsection = {};
      var currentPage = currentSection.pages[j];
      
      subsection.id = null;
      subsection.title = currentPage.title;
      subsection.sectionId = section.id;
      subsection.inspectionId = buffer.insId;
      subsection.sourceType = buffer.insSourceType;
      subsection.order = j;
      subsection.questions = [];
      
      for (var k = 0; k < currentPage.items.length; k++) {
        var question = {};
        var currentQuestion = currentPage.items[k];
        
        question.id = null;
        question.title = currentQuestion.title;
        question.description = "";
        question.subsectionId = subsection.id;
        question.inspectionId = buffer.insId;
        question.sectionId = section.id;
        question.type = currentQuestion.type;
        question.order = k;
        question.values = [];
        
        for (var m = 0; currentQuestion.content && m < currentQuestion.content.length; m++) {
          var value = {};
          
          value.id = null;
          value.key = currentQuestion.content[m].title;
          value.questionId = question.id;
          value.sourceType = buffer.insSourceType;
          value.inspectionId = buffer.insId;
          value.order = m;
          value.remark = "";
          
          question.values.push(value);
        }
        
        question.validation = {
          "type" : null,
          "min" : null,
          "max" : null,
          "isRequired" : currentQuestion.required
        };
        question.answer = null;
        question.answers = [];
        question.notApplicable = false;
        question.severity = null;
        question.showSummaryRemark = true;
        question.showDescription = true;
        question.photos = [];
        
        subsection.questions.push(question);
      }
      
      section.subsections.push(subsection);
    }
    
    buffer.sections.push(section);
  }
  
  return buffer;
}