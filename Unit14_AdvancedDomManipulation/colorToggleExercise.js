// Way - 1
//var isPurple = false;
//document.querySelector("button").addEventListener("click", function() {
//    if(isPurple) {
//        document.body.style.backgroundColor = "white";
//    } else {
//        document.body.style.backgroundColor = "purple";
//    }
//    isPurple = !isPurple;
//});

// Way - 2
document.querySelector("button").addEventListener("click", function() {
    document.body.classList.toggle("purple")
});