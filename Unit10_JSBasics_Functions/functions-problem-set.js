// isEven function : 
function isEven(num) {
	return (num % 2 === 0); 
}

// factorial function : 
function factorial(num) {
	if(typeof num !== "number") {
		console.log("This is not a number !!!");
		return;
	}

	var fac = 1;
	for(var i = 2 ; i <= num ; i++) {
		fac *= i;
	}

	return fac;
}

// kebab to snake function :
function kebabToSnake(str) {
	if(typeof str !== "string") {
		console.log("This is not a string!");
		return;
	}

	var newStr = str.replace(/-/g, "_");
	return newStr;
}