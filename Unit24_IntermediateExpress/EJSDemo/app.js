var express = require('express');
var app = express();

// Public directory : 
app.use(express.static("public"));

// Use ejs directly (if we write this line, we dont need to say each time blabla.ejs)
app.set("view engine", "ejs");


app.get('/', function(req, res) { 
	res.render("home");		// If we dont write "app.set("view engine", "ejs"); " We have to write home.ejs.
});

app.get('/inlove/:thing', function(req, res){
	var thing = req.params.thing;

	res.render("love", {thingVar: thing});
});

app.get('/posts', function(req, res) {
	var posts = [
		{title: "Post 1", author: "Tolga"},
		{title: "Post 2", author: "Cem"},
		{title: "Post 3", author: "Okan"}
	];

	res.render("posts", {posts: posts});
});

app.listen(3000, function() {
	console.log('Server is listening...');
});
