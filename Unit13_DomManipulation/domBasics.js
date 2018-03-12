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


// --     DOM Selectors & Manipulate:     --
// Select : 
var tag = document.getElementById('highlight');

// Manipulate Style : 
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

// Add/Remove toggle some class : 
tag.classList.add("some-class"); 
tag.classList.remove("another-class");
tag.classList.toggle("another-class");  // If class is exist remove it, else if class doesnt exist add that class the selected element.

// Manipulating Text & Content :
var tag = document.querySelector("p");
console.log("Current Text : ", tag.textContent);
console.log("Current Text : ", tag.innerHTML);
tag.textContent = "blah blah blah";

var tag = document.querySelector("ul");
console.log("Current Text : ", tag.textContent);    //Print all "li" texts inside ul
console.log("Current Text : ", tag.innerHTML);
tag.innerHTML = "<li>Test 1</li><li>Test 2</li><li>Test 3</li>" // innerHTML can render html tags

// Manipulating Attributes : 
var link = document.querySelector("a");
console.log("Current href : ", link.getAttribute("href"));
link.setAttribute("href", "https://www.facebook.com");

var img  = document.querySelector("img");
img.setAttribute("src", "corgi.png");
img.setAttribute("alt", "corgi dog image.");
// -----------------------------------------0