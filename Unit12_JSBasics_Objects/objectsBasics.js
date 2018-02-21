// -- Object decleration : --
//>All at Once
var person  = {
	name: "Travis",
	age : 21,
	city: "LA",
	isStudent: false
}
//>Make an empty object and then add to it
var person = {};
person.name = "Travis";
person.age  = 21;
person.city = "LA"
person.isStudent = false;
//>Another way of initializing an Object
var person = new Object();
person.name = "Travis";
person.age  = 21;
person.city = "LA"
person.isStudent = false;
// --------------------------


// -- Use object variables :  --
console.log("Person : ", person);

console.log("NAME   : " , person["name"]);
console.log("AGE    : " , person["age"]);

console.log("NAME   : " , person.name);
console.log("AGE    : " , person.age);
// -----------------------------


// -- Few differences between usage :  --
//>You cannot use dot notation if the property start with a number : 
someObject.1blah; 	  //INVALID
someObject["1blah"];  //VALID
//>You can lookup using a variable with bracket notation
var str = "name";
someObject.str 		  //INVALID - doesn't look for "name", it search str
someObject[str]	      //VALID   - does evalute str and looks for "name"
//>You cannot use dot notation for propery names with spaces
someObject.fav col 	  //INVALID
someObject["fav col"] //VALID
// --------------------------------------


// --     Updating Data :      --
person["age"] += 1;
person.city = "London";
person.isStudent = "No";
// ------------------------------


// -- Object can hold all sorts of data :  --
var junkObject = {
	age: 27,
	color: "purple",
	isStudent: true,
	friends: ["Horatio", "Hamlet"],
	pet: {
		name: "Rusty",
		species: "Dog",
		age: 2
	},
	printObject: function() {
		console.log("Age : " , this.age, " Color : ", this.color);
	}
}
// ------------------------------------------


// --   Objects array example:   --
var posts = [
	{
		title: "blabla",
		author: "cold",
		comments: ["post 1", "post 2"]
	},
	{
		title: "cats",
		author: "cat lover",
		comments: ["post for cats 1", "post for cats 2"]
	}
];

console.log(posts[0].title);
// ------------------------------------


// --   Objects examples:   --
// Exercise 1 :
var someObject = {};
someObject._name = "Hedwig";	// VALID
someObject.age = 6;				// VALID
var prop = "color"
someObject[prop] = "red";		// VALID
someObject.123 = true;			// INVALID
// Exercise 2 - Movie DB :
var movies = [
	{
		title: "In Bruges",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: "Mad Max Fury Road",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Les Miserables",
		rating: 3.5,
		hasWatched: false
	}
];

movies.forEach(function(movie) {
	var str = movie.hasWatched ? " watched \"" : " not seen \"";
	console.log("You have" + str + movie.title + "\" - " + movie.rating +" stars");
});
// Exercise 3 - Adding Methods to an Object : 
var chuckFriends = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["bob","tina"],
	addFriend: function(friend) {
		this.friends.push(friend);
	},
	listFriends: function() {
		console.log("------------- - -------------");
		this.friends.forEach(function(friend, indx) {
			console.log(indx + ": " + friend);
		});
		console.log("------------- 0 -------------");
	}
}
// ------------------------------