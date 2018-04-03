// Import Express Library : 
var express = require('express');

// Create variable 
var app = express();

// ----------------------------------- = -----------------------------------
// --------- ROUTES --------- 
// "/" => Hi there
app.get('/', function(req, res) {
	res.send("Hi there");
});

// "/bye" => Goodbye!
app.get('/bye', function(req, res) {
	res.send("Goodbye");
});

// "/dog" => Hoaaw!
app.get('/dog', function(req, res) {
	res.send("Hoaaw");
});

// Route Param Examples : 
app.get('/r/:subredditName', function(req, res) {
	var subreddit = req.params.subredditName;
	res.send("Welcome to subredit : " + subreddit.toUpperCase());
});

app.get('/r/:subredditName/comments/:commentID/:title', function(req, res) {
	console.log(req.params);
	res.send("Welcome to subredit Comments. Selected subredit :  " + req.params.subredditName + " Comment Id : " + req.params.commentID + " Title : " + req.params.title);
});

// '*' - it must be at the end of routes! 
// Because if it will be on the top, any other roots will be useful! It will catch all request and write that dummy text to screen
app.get('*', function(req, res) {
	res.send("You have entered wrong route! What the hack are you doing?");
})
// ----------------------------------- 0 -----------------------------------

// Tell Express to Listen for requests (start server)
app.listen(3000, function() {
	console.log("Server has started!");
})