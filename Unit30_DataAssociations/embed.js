var mongoose = require("mongoose");
mongoose.connect("mongodb://192.168.20.73/blog_demo");

// POST MODEL
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);

// USER MODEL
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});

var User = mongoose.model("User",userSchema);

// Create new User : 
newUser = new User({
	email: "tolga@hotmail.com",
	name: "tolga"
});

newUser.posts.push({
	title: "Test Post",
	content: "This is a test Post!"
});

newUser.save(function(err, user) {
	if(err) {
		console.log("Err : " + err);
	} else {
		console.log("Created User : ");
		console.log(user);
	}
});


User.findOne({name: "tolga"}, function(err, user) {
	if(err) {
		console.log("Err : " + err);
	} else {
		console.log("User : ");
		console.log(user);
		user.posts.push({
			title:"3 Things i really hate",
			content:"Bla bla bla"
		})
		user.save(function(err, user) {
			if(err) {
				console.log("Err : " + err);	
			} else {
				console.log("New User : ");
				console.log(user);
			}
		})
	}
});
