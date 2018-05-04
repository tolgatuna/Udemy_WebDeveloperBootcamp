var mongoose 				= require('mongoose'),
	passportLocalMongose 	= require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
	username: String,
	password: String
});

// Passport Local Mongoose integration via our Schema
UserSchema.plugin(passportLocalMongose);

module.exports = mongoose.model('User', UserSchema);