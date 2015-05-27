/* This configures the backend api endpoints for a nodejs express server.
	It is a module that exports code to the app.js file. It is as if you
	installed a dependency with the "require" function...except you write
	it yourself.
	
	The functions in here use express routing to listen on different HTTP 
	methods and URLS and run some code when requests are made to the specified
	endpoints. 
	
	A "route" is a combination of a URI, an HTTP method and one (or more) handler
	functions 
	
	Below,  "get" is the HTTP method. "/hello" is the URI, and the function
	is function(req,res){res.send('Hello World from services.js');}.  In this 
	example it is a nameless (lambda) function, but you could replace the lambda
	function with an actual declared JavaScript function in this file. 
	
	If you were to want to replace this lambda function with a fancier function, 
	you might do this..
	
	var foo = function(req,res){
        res.send('Hello World from services.js');
    }
    
    app.get('/hello', foo);
	*/

module.exports = function (app) {

    app.get('/hello', function(req,res){
        res.send('Hello World from services.js');
    });
};
