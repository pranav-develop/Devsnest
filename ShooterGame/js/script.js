//jshint esversion: 8
const target = document.querySelector(".target");
const time = document.querySelector(".time-counter > span");
const score = document.querySelector(".score > span");
let counter = -1;
const totalTime = 60;
let started = false;
let timeLeft = 60;

target.addEventListener("click", gameManager);

function gameManager() {
    changePlace();
    if (!started) {
        started = true;
        startGame();
    }
}

function changePlace() {
    counter++;
    let left = window.innerWidth * Math.random() - 100;
    let top = window.innerHeight * Math.random() - 100;
    target.style.left = `${left < 0 ? 0 : left}px`;
    target.style.top = `${top < 150 ? 150 : top}px`;
    updateScore();
}

changePlace();

function changeTime() {
    timeLeft--;
    time.textContent = timeLeft;
    if (timeLeft <= 0) {
        gameFinished();
        clearInterval(timeInterval);
    }
    console.log(timeInterval);
}

function gameFinished() {
    console.log("finished called");
    alert(`Game Over. Your final Score is ${counter}.`);
    window.location.reload();
}

function updateScore() {
    score.textContent = counter;
}

function startGame() {
    let timeInterval = setInterval(changeTime, 1000);
}
