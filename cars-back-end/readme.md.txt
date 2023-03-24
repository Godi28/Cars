Instructions

*Navigate to the folder where the project is stored and in command promt, powershell or simlilar command-line interpreter and
type type 'npm start'.

*Open Postman and start a new request and type the URL 'http://localhost:8080/api', select get request and send the request to view
the array of car objects resource.

*To add a new car object type the 'URL http://localhost:8080/api/newcar'select post request and on the tabs below where you
entered the URL select the 'Body' tab. Ensure the content type, in the dropdown menu at the end of the tab options, is set to 
JSON and then type the object you would like to add in this format and send the request: 

{"id":enter a new id number,"make":"enter a car make","model":"enter the model","seats":enter the number of seats}

*To delete an entry based on an id, type the URL 'http://localhost:8080/api/delete/:id' where ':id' is the id of the object you wish
to delete, select delete request and send the request.

* To edit a model of a car object based on an id, type the URL 'http://localhost:8080/api/model/:id/:model' where ':id' is the id of
the object whose model you wish to change and ':model' is the value you wish to change it to, select put request
and send the request.

* To edit the seats of a car object based on an id, type the URL 'http://localhost:8080/api/seats/:id/:seats' where ':id' is the id
of the object whose seat number you wish to change and ':seats' is the value you wish to change it to, select put request
and send the request.