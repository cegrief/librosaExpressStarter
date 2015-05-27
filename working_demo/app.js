/*  APP.JS is the file that defines how the nodejs express server is set up. If you don't
include step 5 (below), it can serve client-side applications with no backend code. For 
example, something written entirely in HTML and javascript. 
*/

// STEP 1: LOAD DEPENDENCIES
//	Below are 4 modules that are loaded by the require function
// 	To "require" a module, you first need to make sure it is
// 	installed via npm....although in this case two of them are
// 	built in and do not require installation. 

var http = require('http');	// This is a built in module that let you create a server
var path = require('path');	// This is a built in module that gets you the current path
							// in the machine where this script is running.

var express = require('express');   // we installed this earlier to make a web server
var bodyParser = require('body-parser'); //express middle-ware. Loads all the data sent 
										// to the server into request.body. This makes 
										// life easier.

var multer = require('multer');
										
// STEP 2: CREATE AN EXPRESS INSTANCE										 
var app = express();	// This makes a new express instance


// STEP 3: LOAD EXPRESS MIDDLEWARE 
//		These are functions that get requests from express and pass control to
//		you after they execute. Your control happens by writing the handler code
//		in the "restful" endpoint

app.use(express.static(path.join(__dirname, 'views')));  	//	This serves a static file to the browser. 
															// This serves the HTML in the folder "views" to the client
app.use('/public', express.static(__dirname + '/public/'));	// This serves static files out of the /public folder.
app.use(bodyParser.json());									// This parses the data the client sends to the server and 
															// puts it in req.body. You don't need this if you're
															// just doing a client-side app.

app.use(bodyParser.urlencoded({ extended: false }));

app.use(multer({dest:'./public/uploads/'}));
															
// STEP 4: SET THE PORT TO LISTEN ON
app.set('port', 5000);  // 5000 isn't a standard port. I just didn't want it to be a 
						// low-numbered one. Eventually we'll be forwarding port 80
						// to this port. 

// STEP 5: LOAD ROUTES (loading restful API endpoints specified in routes.services file)
require('./routes/services')(app);

// STEP 6: CREATE OUR SERVER
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});