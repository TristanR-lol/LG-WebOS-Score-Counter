// Buttons & Counters

// Red
let RedStepButton = document.getElementById("RedStepButton");
let RedBackButton = document.getElementById("RedBackButton");
let RedScoreCounter = document.getElementById("RedScoreCounter");

// Blue
let BlueStepButton = document.getElementById("BlueStepButton");
let BlueBackButton = document.getElementById("BlueBackButton");
let BlueScoreCounter = document.getElementById("BlueScoreCounter");

// Green
let GreenStepButton = document.getElementById("GreenStepButton");
let GreenBackButton = document.getElementById("GreenBackButton");
let GreenScoreCounter = document.getElementById("GreenScoreCounter");

// Scores

let RedScore = 0;
let BlueScore = 0;
let GreenScore = 0;

// Event Listeners

// Red
RedStepButton.addEventListener("click", () => {
    RedScore += 1;
    RedScoreCounter.innerText = RedScore;
});
RedBackButton.addEventListener("click", () => {
    RedScore -= 1;
    RedScoreCounter.innerText = RedScore;
});

// Blue
BlueStepButton.addEventListener("click", () => {
    BlueScore += 1;
    BlueScoreCounter.innerText = BlueScore;
});
BlueBackButton.addEventListener("click", () => {
    BlueScore -= 1;
    BlueScoreCounter.innerText = BlueScore;
});

// Green
GreenStepButton.addEventListener("click", () => {
    GreenScore += 1;
    GreenScoreCounter.innerText = GreenScore;
});
GreenBackButton.addEventListener("click", () => {
    GreenScore -= 1;
    GreenScoreCounter.innerText = GreenScore;
});