var mongoose = require("mongoose");
mongoose.connect("mongodb://192.168.20.73/blog_demo_2");

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
	posts: [{
		type: mongoose.Schema.Types.ObjectId,
		ref:"Post"
	}]
});

var User = mongoose.model("User",userSchema);

/*User.create({
	email: "tolga@tuna.com",
	name: "tolga"
}, function(err, user) {
	if(err) {
		console.log("Err : " + err);
	} else {
		console.log("User Created : ");
		console.log(user);
	}
});

Post.create({
	title: "How to cook the best burger",
	content: "bla bla bla bla bla bla bla bla bla bla"
}, function(err, post) {
	if(err) {
		console.log("Err : " + err);
	} else {
		console.log("Post Created : ");
		console.log(post);
	}
});*/

/*Post.create({
	title: "How to cook the best burger v2",
	content: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
}, function(err, post) {
	if(err) {
		console.log("Err : " + err);
	} else {
		console.log("Post Created : ");
		console.log(post);
		console.log("And Added to user : ");
		User.findOne({email: "tolga@tuna.com"}, function(err, foundUser) {
			if(err) {
				console.log("Err : " + err);
			} else {
				foundUser.posts.push(post);
				foundUser.save(function(err, editedUser) {
					if(err) {
						console.log("Err : " + err);
					} else {
						console.log("Final User : ");
						console.log(editedUser);
					}
				})
			}
		})
	}
});*/

/*Post.create({
	title: "How to cook the best burger v3",
	content: "asdasdasdsa dsa dasd asd asd sad asd asd asd asdsadsadas das dasd asd sadasdaslşklşkdşlsakşl kdlşsakşl dkasşlk şdkas"
}, function(err, post) {
	if(err) {
		console.log("Err : " + err);
	} else {
		console.log("Post Created : ");
		console.log(post);
		console.log("And Added to user : ");
		User.findOne({email: "tolga@tuna.com"}, function(err, foundUser) {
			if(err) {
				console.log("Err : " + err);
			} else {
				foundUser.posts.push(post);
				foundUser.save(function(err, editedUser) {
					if(err) {
						console.log("Err : " + err);
					} else {
						console.log("Final User : ");
						console.log(editedUser);
					}
				})
			}
		})
	}
});*/

User.findOne({email: "tolga@tuna.com"}, function(err, user) {
	if(err) {
		console.log("Err : " + err);
	} else {
		console.log("User Normal Call : ");
		console.log(user);
	}
});

User.findOne({email: "tolga@tuna.com"}).populate("posts").exec(function(err, user) {
	if(err) {
		console.log("Err : " + err);
	} else {
		console.log("User with populate posts : ");
		console.log(user);
	}
});

