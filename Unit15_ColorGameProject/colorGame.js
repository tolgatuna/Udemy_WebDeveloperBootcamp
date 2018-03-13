var gameBackgroundColor = "#232323";
var randColorSize = 6;
var colors = [];
var pickedColor;

var selectedColorDisplay = document.getElementById("selectedColorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var title = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    /* Squares Click Event Handler */
    setUpSquares();
    
    /* Restart Button */
    setUpRestartButton();

    /* Mode Buttons */
    setUpModeButtons();
    
    restartGame();
}

function setUpSquares() {
    for(var i = 0 ; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            if(this.style.backgroundColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                title.style.background = pickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.background = gameBackgroundColor;
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function setUpRestartButton() {
    resetButton.addEventListener("click", function() {
        restartGame();
    });
}

function setUpModeButtons() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? randColorSize = 3 : randColorSize = 6;
            restartGame();
        });
    }
}

function restartGame() {
    colors = generateRandomColors(randColorSize);
    pickedColor = pickColor();
    selectedColorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    title.style.background = "steelblue";
    
    for(var i = 0 ; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
            
    }
}

function changeColors(color) {
    for(var i = 0 ; i < squares.length ; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = color;
        } else {
            squares[i].style.display = "none";
        }
    }
}

function pickColor() {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateRandomColors(num) {
    var randColors = [];
    
    for(var i = 0 ; i < num ; i++) {
        randColors.push(randomColor());
    }
    
    return randColors;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + b + ", " + g + ")";
}