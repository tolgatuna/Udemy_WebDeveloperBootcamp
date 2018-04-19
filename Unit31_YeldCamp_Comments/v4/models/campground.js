var mongoose 	= require('mongoose');

// SCHEMA MONGO SETUP : 
var campgroundSchema = mongoose.Schema({
	name: String,
	image: String,
	description: String,
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

// CREATE MONGO MODEL : 
//var Campground = mongoose.model("Campground", campgroundSchema);
module.exports = mongoose.model("Campground", campgroundSchema);