// Example
var num = 8;
function doMath() {
	num += 1;
	if(num % 5 === 0) {
		return true;
	}
	return false;
}

num += 1;
doMath(); //Will return true




// Another Example
var str = "hi there!";
function strTest() {
	var str = "Hello!";
	console.log(str);
}

strTest();			// It will write Hello to console
console.log(str);	// But it will write "hi there!" again.




// Another Example
function test() {
	var testVariable = "test";
	console.log(testVariable);
}

test();			// It will print "test" to console.
testVariable;	// it will give error -> ReferenceError: testVariable is not defined




// Another Example
function hi() {
	var name = "Rusty";
	console.log(name);
}

function bye() {
	console.log(name);
}

hi();	// It will print name - Rusty
bye();  // But it wont access the name variable and print undefined