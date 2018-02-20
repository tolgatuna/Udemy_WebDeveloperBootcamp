var todoArray = [];
var command;

while(command !== "quit") 
{
	command = prompt("What would you like to do?");

	switch(command) 
	{
		case "new": 
			addToArray(todoArray);
			break;

		case "list":
			printArray(todoArray);
			break;

		case "listReverse":
			printArrayReverse(todoArray);
			break;

		case "delete":
			deleteFromArray(todoArray);
			break;

		case "deleteByIndex":
			deleteFromArrayViaIndex(todoArray);
			break;

		case "isUniform":
			checkArrayIsUniform(todoArray);
			break;

		case "quit" :
			break;	
		default :
			console.error("Unknow command is entered!");
	}
}

console.log("YOU QUIT THE APP...");

function addToArray(array) {
	var newItem = prompt("What would you like to add to todo list?");	
	console.log(newItem , " is added to the list");		
	todoArray.push(newItem);
}

function deleteFromArray(array) {
	var deleteItem = prompt("What would you like to delete from todo list?");
	var indx = array.indexOf(deleteItem);

	if(indx >= 0) {
		console.log(deleteItem , " is deleted from the list");
		return array.splice(indx, 1);
	}
	else {
		console.error("Item not found!");
		return array;
	}
}

function deleteFromArrayViaIndex(array) {
	var deleteIndx = Number(prompt("What would you like to delete from todo list (Enter Index)?"));

	if(deleteIndx >= 0 && deleteIndx < array.length) {
		console.log(array[deleteIndx] + " is deleted from the list");
		return array.splice(deleteIndx, 1);
	}
	else {
		console.error("Item not found!");
		return array;
	}
}

function printArray(array) {
	console.log("---------------------");
	array.forEach(function(item, index) {
		console.log(index + ": " + item);
	});
	console.log("---------------------");		
}

function printArrayReverse(array) {
	console.log("---------------------");
	for(var i = array.length - 1 ; i >= 0; i--) {
		console.log(i + ": " + array[i]);
	};
	console.log("---------------------");				
}

function checkArrayIsUniform(array) {
	if(array.length > 0) {
		var firstItem = array[0];
		for(var i = 1 ; i < array.length ; i++) {
			if(firstItem !== array[i]) {
				console.log("Array is not uniform");
				return false;
			}
		}
		console.log("Array is uniform");
		return true;
	}
	else {
		console.error("Array is empty!");
		return false;
	}
}