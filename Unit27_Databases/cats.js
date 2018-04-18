var mongoose = require('mongoose');

// Connect to DB (Mongo):
mongoose.connect("mongodb://192.168.20.73/cat_app");

// Create a cat schema : 
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

// Create a model from schema with name Cat: 
var Cat = mongoose.model("Cat", catSchema);

// Adding a new cat to the DB :
var george = new Cat({
	name: "George",
	age: 11,
	temperament: "Grouchy"
});
george.save(function(err, cat) {
	if(err) {
		console.log("Something Went Wrong! err : " + err);
	} else {
		console.log("Cat is saved to the db : ");
		console.log(cat);
	}
});

// Or we can create like this : 
Cat.create({
	name: "Mrs Snow",
	age: 15,
	temperament: "Bland"
}, function(err, cat) {
	if(err) {
		console.log("Something Went Wrong! err : " + err);
	} else {
		console.log("Cat is saved to the db : ");
		console.log(cat);
	}
});

// Retrieve all cats grom the DB and console.log each one : 
Cat.find({}, function(err, cats ) {
	if(err) {
		console.log("ERROR : ", err);
	} else {
		console.log("ALL THE CATS : ");
		console.log(cats);
	}
})