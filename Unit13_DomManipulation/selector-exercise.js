// EXERCISES SOLUTIONS
// Used selector-exercise.html

// Question - 1 - Select first <p> in four different ways
document.querySelector('p');        // it returns first
document.querySelector('#first');   // with id
document.querySelector('.special'); // With class
document.querySelectorAll('.special')[0]; // With class select all and return first
document.getElementById('first');   // with getElementById
document.getElementsByClassName('special')[0];      //Get elements by class name and return first one.
document.getElementsByTagName('p')[0];  // Get All paragraphs and return first one