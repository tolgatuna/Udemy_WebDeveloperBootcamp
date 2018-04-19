// --------------------------------------------------
// IMPORTS :
var express 	= require('express'),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require('mongoose'),
	Campground  = require('./models/campground'),
	seedDB		= require('./seeds');
// --------------------------------------------------

// --------------------------------------------------
// SEED THE DB : 
seedDB();

// CONNECT TO THE MONGO DB : 
mongoose.connect("mongodb://192.168.20.73/yelp_camp");

// SETTINGS :
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
// --------------------------------------------------

// --------------------------------------------------
// ----- REQUESTS : -----
// -- GETS --
// Main Page(landing):
app.get("/", function(req, res) {
	res.render("landing");
});

// INDEX - Campgrounds Page:
app.get("/campgrounds", function(req, res){
	Campground.find({}, function(err, camps) {
		if(err) {
			console.log("ERROR : ", err);
		} else {
			res.render("index", {campgrounds: camps});
		}
	});
});

// NEW - New Campground Form Page : 
app.get("/campgrounds/new", function(req, res) {
	res.render("new");
});

// SHOW - Select a campground for more details
app.get("/campgrounds/:id", function(req, res) {
	// find the campground with provided by ID
	Campground.findById(req.params.id).populate("comments").exec(function(err, camp) {
		if(err) {
			console.log("ERROR : ", err);
			res.redirect("/campgrounds");
		}
		else {
			res.render("show", {campground : camp});
		}
	});
	
});

// -- POSTS --
// CREATE - Add New Campground : 
app.post("/campgrounds", function(req, res) {
	// Get data from for and add to campgrounds array :
	var name  = req.body.name;
	var image = req.body.image;
	var desc  = req.body.description;
	Campground.create({
		name: name,
		image: image,
		description: desc
	}, function(err, camp) {
		if(err) {
			console.log("Campground Create Error ! err : " + err);
		} else {
			console.log("Campground is created : ");
			console.log(camp);
		}
	})

	// Redirect back to campground page : 
	res.redirect("/campgrounds");
});
// --------------------------------------------------


// Listen Port 3000:
app.listen(3000, function() {
	console.log("The YeldCamp Server Has Started!");
});