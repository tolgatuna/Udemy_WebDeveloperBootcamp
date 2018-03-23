// NODE EXERCISE 1

//	Using the commant line, create a file "echo.js"
//  Inside the file, write a function named echo that takes 2 arguments: a string and a number
//  It should print out the string, number number of times

echo("Echo !!!",10);
echo("Tater Tost ",3);

// Add the above 2 examples to the end of your file
// Lastly, run the contents of "echo.js" using node from command line(node echo.js)


// NODE EXERCISE 2
// AVARAGE GRADE

// Create a new file, "grader.js"

// In the file define a new function named "avarage"
// It should take a single parameter: an array of test scores (all numbers)
// It should return the avarage score in the array, rounded the nearest whole number

var scores = [90, 98, 89, 100, 100, 86, 94];
avarage(scores);	// should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
avarage(scores2); 	// should return 68