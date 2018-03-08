// -- See DOM (Document Object Model) of any page: --
console.dir(document);
// --------------------------------------------------



// -- Select And Manipulate : --
// Ex 1 - Select h1 and set color to pink :
var h1 = document.querySelector('h1');
h1.style.color = "pink";

// Ex 2 - Select body and change its color every second blue / white :
var body = document.querySelector('body');
var isBlue = false;

setInterval(function() {
    if(isBlue) {
        body.style.backgroundColor = "white";
        isBlue = false;
    } else {
        body.style.backgroundColor = "blue";
        isBlue = true;
    }
}, 1000);

// Ex 3 - 
// -----------------------------



// --     DOM Selectors :     --
// * USE simplePage.html
// By Element Id (document.getElementById()): 
var tagById = document.getElementById('highlight');
tagById.style.color = 'red';

// By Element Class Name (document.getElementsByClassName()): 
var tagByClassName = document.getElementsByClassName("bolded");
for(var i = 0 ; i < tagByClassName.length ; i++)
    tagByClassName[i].style.fontWeight = 700;

// By Element Tag Name (document.getElementsByTagName()):
var tagByTagName = document.getElementsByTagName('li');
for(var i = 0 ; i < tagByTagName.length ; i++)
    tagByTagName[i].style.fontStyle = 'italic';

// Query Selector (document.querySelector()): 
// Ex 1 - Id selection
var tag = document.querySelector('#highlight');
// Ex 2 - Class selection
var tag = document.querySelector('.bolded');    // It gives very first match!! (Just one element)
// Ex 3 - Tag Name selection
var tag = document.querySelector('h1'); // // It gives very first match!! (Just one element)
// Ex 4 - Complex selection like css (Select a tag with class special inside of li)
var tag = document.querySelector('li a .special'); 

// Query Selector All (document.querySelectorAll()): 
// Same way getElementsBLABLA 
// Ex 1 - Tag Name selection
document.querySelectorAll('h1'); // Select all h1 elements and returns an array.
// Ex 2 - Class selection : 
var tag = document.querySelectorAll('.bolded'); // Select all elements with have class bolded
// Not: it is also possible with select id ('#')i but it just return a value in a array. So not useful.
// -----------------------------