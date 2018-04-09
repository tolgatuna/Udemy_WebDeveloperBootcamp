// --------------------------------------------------
// IMPORTS :
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
// --------------------------------------------------

// --------------------------------------------------
// DATA :
var campgrounds = [
	{name: "Salmon Creek", image: "https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1437679190/campground-photos/cwfi6nzi26glgkctpyko.jpg"},
	{name: "Granite Hill", image: "https://ui.cltpstatic.com/camp/images/ai/000/910/610/910610/published/w/tent52.jpg"},
	{name: "Mountain Goat's Rest", image: "https://www.mountainphotography.com/images/large/201208_balsamGoats1.jpg"}
];

// SETTINGS :
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
// --------------------------------------------------

// --------------------------------------------------
// ----- REQUESTS : -----
// -- GET --
// Main Page(landing):
app.get("/", function(req, res) {
	res.render("landing");
});

// Campgrounds Page:
app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds});
});

// New Campground Form Page : 
app.get("/campgrounds/new", function(req, res) {
	res.render("new");
});

// -- POST --
// Add New Campground : 
app.post("/campgrounds", function(req, res) {
	// Get data from for and add to campgrounds array :
	var name  = req.body.name;
	var image = req.body.image;
	campgrounds.push({name: name, image: image});

	// Redirect back to campground page : 
	res.redirect("/campgrounds");
});
// --------------------------------------------------


// Listen Port 3000:
app.listen(3000, function() {
	console.log("The YeldCamp Server Has Started!");
});