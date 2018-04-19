var mongoose = require("mongoose");

// POST MODEL
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);
module.exports = Post;