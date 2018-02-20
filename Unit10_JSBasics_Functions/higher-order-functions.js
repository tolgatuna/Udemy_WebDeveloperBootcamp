function sing() {
	console.log("twinkle twinkle ....");
	console.log("how i wonder....");
}

setInterval(sing, 1000);
// For stop : 
clearInterval(id);	//setInterval will give an id and we can stop it via use that id and that function.


// Anonymous function example
setInterval(
	function() {
		console.log("It is an anonymous function.");
	}, 1000
)