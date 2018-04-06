var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Friend Array : 
var friends = ["Tony", "Cem", "Tolga", "Ahmet"];

// Home Page : 
app.get('/', function(req, res) {
	res.render('home');
});


// Friend Page : 
app.get('/friends', function(req, res) {
	res.render('friends', {friends: friends});
});


app.post('/addfriend', function(req, res) {
	var newFriendName = req.body.newfriendname;
	friends.push(newFriendName);
	res.redirect("/friends");
});


// LISTEN PORT 3000 :
app.listen(3000, function() {
	console.log("Server started!");
})