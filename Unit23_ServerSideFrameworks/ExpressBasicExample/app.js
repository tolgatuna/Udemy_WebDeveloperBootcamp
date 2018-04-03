var express = require('express');

var app = express();

/*
 * Visiting "/" should print "Hi there, welcome to my assignment!"
 */
app.get('/', function(req, res) {
	res.send("Hi there, welcome to my assignment!");
});


/*
 * Visiting "/speak/pig" should print "The pig says 'Oink'"
 * Visiting "/speak/cov" should print "The cow says 'Moo'"
 * Visiting "/speak/dog" should print "The dog says 'Woof Woof'"
 */
 app.get('/speak/:type', function(req, res) {
 	// It is a one way : 
 	/*switch(req.params.type) {
 		case 'pig':
 			res.send("The pig says 'Oink'");
 			break;
		case 'cov':
			res.send("The cow says 'Moo'");
 			break;
		case 'dog':
			res.send("The dog says 'Woof Woof'");
 			break;
		default:
			res.send("I dont know the animal!");
 			break;
 	}*/
 	// Other good way create dictionary: 
 	var sounds = {
 		pig: "Oink",
 		cow: "Moo",
 		dog: "Woof Woof!",
 		cat: "I hate you human",
 		fish: '...'
 	};
 	var animal = req.params.type;
 	if(sounds[animal])
 		res.send("The " + animal + " says " + sounds[animal]);
 	else
 		res.send("I dont know the animal!");
 });


/*
 * Visiting "/repeat/hello/3" should print "hello hello hello"
 * Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
 * Visiting "/repeat/blah/2"  should print "blah blah"
 */
 app.get('/repeat/:type/:count', function(req, res){
 	var count = Number(req.params.count);
 	if(count<= 0)
 		res.send('Count is less than or equal to 0');

 	var str = "";
 	for(var i = 0 ; i < count ; i++) {
 		str += req.params.type + " ";
 	}
 	res.send(str);
 });

/* 
 * If a user visits any other route, print: 
 *	 "Sorry, page not found... What are you doing with your life"
 */
 app.get('*', function(req, res){
 	res.send("Sorry, page not found... What are you doing with your life?");
 });

/* LISTEN PORT 3000 */
app.listen(3000, function() {
	console.log("Server is started");
});