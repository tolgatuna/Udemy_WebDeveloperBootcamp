var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
	answer = prompt("are we there yet?");
}
alert("Yes we are !");