// Decleration an array : 
var friends = [];
var friends = new Array(); // uncommon

// Arrays can hold any type of data
var randomCollection = [489, true, "Herminone", null];

// Arrays have a length property
randomCollection.length //4

// Use push
randomCollection.push("blabla"); // It push element at the end Array and array will be [489, true, "Herminone", null, blabla]. It also return the last length of array.

// Use pop
randomCollection.pop();			 // It remove the latest item from array and also return the last removed element. Now array [489, true, "Herminone", null]

// Use unshift
randomCollection.unshift("asdasd"); // It add element at the beginning of array. Now array will be [asdasd,489, true, "Herminone", null]. It also return the length of array.

// Use shift
randomCollection.shift();			// It remove the first element from array. Now array will be 489, true, "Herminone", null] again. It also return the removed element.

// Use indexOf
randomCollection.indexOf("Herminone");	//It returns the index of given element. Here result is 2. If array contains same element as twice than it return first one from beginning.
randomCollection.indexOf("No item");	// If array doesn't contains given element then returns -1

// Use slice
var another = randomCollection.slice(1,3); // It copy the array with given indexes. It mean starts from 1 to 3 (doesn't get last element) So another array will be [true, "Herminone"]; And it doesn't alter the current array.
var copyOfRandom = randomCollection.slice(); // It will just copy randomCollection to copyOfRandom.