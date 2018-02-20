var number;
var secretNumber = 7;

while(number !== secretNumber)
{
	number = Number(prompt("Enter Guessing Number?"));

	if(number === secretNumber) {
		alert("Well Done!! Correct!");
	}
	else if(number > secretNumber) {
		alert("Entered Number is bigger than secret number!");
	}
	else {
		alert("Entered Number is lower than secret number!");	
	}
	
}