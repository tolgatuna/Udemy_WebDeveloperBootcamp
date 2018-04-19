var mongoose 	= require('mongoose');

// SCHEMA MONGO SETUP : 
var commentSchema = mongoose.Schema({
	text: String,
	author: String
});

// CREATE MONGO MODEL : 
module.exports = mongoose.model("Comment", commentSchema);