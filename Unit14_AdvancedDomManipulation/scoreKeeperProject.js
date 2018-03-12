var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input[type=\"number\"]");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    gameOver = false; 
}

resetButton.addEventListener("click", resetGame);

numInput.addEventListener("change", function() {
    if(this.value === "") {
        winningScoreDisplay.textContent = 5;
        winningScore = 5;
        resetGame();
    }
    else {
        winningScoreDisplay.textContent = this.value;
        winningScore = Number(this.value);
        resetGame();
    }
    
});