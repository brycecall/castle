factory.sendRequest = function(method, url, data) {

    $http({
     method: method,
     url: url,
     headers: {
       'Content-Type': undefined
     },
     data: data
    }).then(
        
    function successCallback(response) {
        console.log(response.data);
        return response.data;
    }, 
    function errorCallback(response) {
        console.log(error);
        return {'status':'error'};
    });
};


factory.user = {
                "name":"",
                "email":"",
                "pw":""
			};


//  adding a user to the firebase db  
//  expected result
//	{
//		"status":"", //success, failure
//		"reason":"" //some error codes that make sense to us
//	}
factory.insertUser = function(data) {
    var url = "api/insert/user/";
    var result = factory.sendRequest("POST", url, data);
};

		
//authenticating a user in the firebase db  
//api/authuser/
//POST (JSON)
//	{
//		"email":"",
//		"pw":""
//	}
//return	
//	{
//		"status":"", //success, failure
//		"reason":"" //invalid email, invalid password, "" if successful
//	}
factory.authUser = function(data) {
    var url = "api/authuser/";
    var result = factory.sendRequest("POST", url, data);
    return result;
};




//inserting an inspection
//api/insert/inspection/
//POST (JSON)
//	{} //inspection JSON
//return
//	{
//		"id":"" //report id
//	}
factory.insertInspection = function(data) {
    var url = "api/insert/inspection/";
    var result = factory.sendRequest("POST", url, data);
    return result;
};


//inserting an inspection from an id
//api/insert/inspection/{id}
//POST (JSON)
//	{
//		"id":"", //report id
//		"inspection": {} //report JSON
//	}
//return 
//	{
//		"status":"", //success, failure
//		"reason":"" //"" if successful
//	}
factory.insertInspectionById = function(data, id) {
    var url = "api/insert/inspection/" + id;
    var result = factory.sendRequest("POST", url, data);
    return result;
};


//updating an inspection
//api/update/inspection/
//POST (JSON)
//	{
//		"id":"", //report id
//		"inspection": {} //report JSON
//	}
//return 
//	{
//		"status":"", //success, failure
//		"reason":"" //"" if successful
//	}
factory.updateInspection = function(data) {
    var url = "api/update/inspection/";
    var result = factory.sendRequest("POST", url, data);
    return result;
};


factory.addDays = function(date, days) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + days,
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    );
};

//selecting inspections from a user
//api/select/inspections/{email}/{type}/{sortfield = date}/{ascending=false}/{startdate = today-month}/{enddate=today}
//GET
//return
//[] //array of inspection JSON objects
//note:
//type //inspection, template
factory.selectInspectionByEmail = function(email, type, sortField = "date", ascending = false, startDate, endDate) {
    var url = "api/select/inspections/" + email + "/" + type + "/";
    if (startDate == null || startDate == undefined)
    {
        startDate = factory.addDays(new Date, -30).toUTCString();
    }
    if (endDate == null || endDate == undefined)
    {
        endDate = new Date().toUTCString();
    }
    url += sortField + "/" + ascending + "/" + startDate + "/" + endDate + "/";
    return factory.sendRequest("GET", url);
};

//selecting inspections from a user
//api/select/inspections/meta/{email}/{type}/{sortfield = date}/{ascending=false}/{startdate = today-month}/{enddate=today}
//GET
//return
//[] //array of inspection meta data JSON objects
//note:
//type //inspection, template
factory.selectInspectionMetaByEmail = function(email, type, sortField = "date", ascending = false, startDate, endDate) {
    var url = "api/select/meta/inspections/" + email + "/" + type + "/";
    if (startDate == null || startDate == undefined)
    {
        startDate = factory.addDays(new Date, -30).toUTCString();
    }
    if (endDate == null || endDate == undefined)
    {
        endDate = new Date().toUTCString();
    }
    url += sortField + "/" + ascending + "/" + startDate + "/" + endDate + "/";
    return factory.sendRequest("GET", url);
};

//selecting inspections by id
//api/select/inspection/{id}
//GET
//return
//{} //inspection json object
factory.selectInspectionByUser = function(id) {
    var url = "api/select/inspections/" + id + "/";
    return factory.sendRequest("GET", url);
};

//deleting an inspection
//api/delete/inspection/{id}
//DELETE (JSON)
//return 
//	{
//		"status":"", //success, failure
//		"reason":"" //"" if successful
//	}
factory.deleteInspection = function(id) {
    var url = "api/delete/inspection/" + id + "/";
    return factory.sendRequest("DELETE", url);
};

//selecting a user
//api/select/user

//deleting a user
//api/delete/user