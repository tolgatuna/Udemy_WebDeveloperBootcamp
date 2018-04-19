// --------------------------------------------------
// IMPORTS :
var express 		 = require('express'),
	app 			 = express(),
	bodyParser 		 = require("body-parser"),
	mongoose 		 = require('mongoose'),
	methodOverride 	 = require("method-override"),
	expressSanitizer = require("express-sanitizer");
// --------------------------------------------------


// --------------------------------------------------
// CONNECT TO THE MONGO DB : 
mongoose.connect("mongodb://192.168.20.73/blog_post_app");

// SCHEMA MONGO SETUP : 
var blogSchema = mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

// CREATE MONGO MODEL : 
var Blog = mongoose.model("Blog", blogSchema);

// SETTINGS :
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());
// --------------------------------------------------


// --------------------------------------------------
// RESTFUL ROUTES : 
// INDEX ROUTE
app.get("/", function(req, res) {
	res.redirect("/blogs");
});
app.get("/blogs", function(req, res) {
	Blog.find({}, function(err, blogs) {
		if(err) {
			console.log("BLOGS CAN NOT GETTED! err : " + err);
		} else {
			res.render("index", {blogs: blogs});
		}
	})
});

// NEW ROUTE
app.get("/blogs/new", function(req, res){
	res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function(req, res){
	req.body.blog.body = req.sanitize(req.body.blog.body);	// Remove script vs for protect hacking
	// create blog 
	Blog.create(req.body.blog, function(err, newBlog){
		if(err) {
			console.log("BLOGS CAN NOT CREATED! err : " + err);
			res.render("new");	//render new form again.
		} else {
			// then, redirect to the index
			res.redirect("/blogs");
		}
	});
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, foundedBlog) {
		if(err) {
			console.log("BLOG CAN NOT FOUNDER! err : " + err);
			res.redirect("/blogs");
		} else {
			res.render("show", {blog: foundedBlog});
		}
	});
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, foundedBlog) {
		if(err) {
			console.log("BLOG CAN NOT FOUNDER! err : " + err);
			res.redirect("/blogs");
		} else {
			res.render("edit", {blog: foundedBlog});
		}
	});
});

// UPDATE ROUTE 
app.put("/blogs/:id", function(req, res) {
	req.body.blog.body = req.sanitize(req.body.blog.body);	// Remove script vs for protect hacking
	
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
		if(err) {
			console.log("BLOG CAN NOT UPDATED! err : " + err);
			res.redirect("/blogs/" + req.params.id);
		} else {
			res.redirect("/blogs/" + req.params.id);
		}
	})
});

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res) {
	Blog.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			console.log("BLOG CAN NOT DELETED! err : " + err);
		} 
		
		res.redirect("/blogs");
	});
});

// --------------------------------------------------


// --------------------------------------------------
// LISTEN PORT 3000 : 
app.listen(3000, function() {
	console.log("The BlogPost Server Has Started! Listening Port: 3000");
});
// --------------------------------------------------