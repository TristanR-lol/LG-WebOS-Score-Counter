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


// Ranking 
let RankingRed = document.getElementById("RankingRed");
let RankingBlue = document.getElementById("RankingBlue");
let RankingGreen = document.getElementById("RankingGreen");

function getMedalEmoji(position) {
    if (position === 0) return "🥇";
    if (position === 1) return "🥈";
    if (position === 2) return "🥉";
}

function updateRankings() {
    let scores = [
        { team: 'Red', score: RedScore },
        { team: 'Blue', score: BlueScore },
        { team: 'Green', score: GreenScore }
    ];
    scores.sort((a, b) => b.score - a.score);

    RankingRed.innerText = getMedalEmoji(scores.findIndex(s => s.team === 'Red'));
    RankingBlue.innerText = getMedalEmoji(scores.findIndex(s => s.team === 'Blue'));
    RankingGreen.innerText = getMedalEmoji(scores.findIndex(s => s.team === 'Green'));
}


// Event Listeners

// Red
RedStepButton.addEventListener("click", () => {
    RedScore += 1;
    RedScoreCounter.innerText = RedScore;
    updateRankings();
});
RedBackButton.addEventListener("click", () => {
    RedScore -= 1;
    RedScoreCounter.innerText = RedScore;
    updateRankings();
});

// Blue
BlueStepButton.addEventListener("click", () => {
    BlueScore += 1;
    BlueScoreCounter.innerText = BlueScore;
    updateRankings();
});
BlueBackButton.addEventListener("click", () => {
    BlueScore -= 1;
    BlueScoreCounter.innerText = BlueScore;
    updateRankings();
});

// Green
GreenStepButton.addEventListener("click", () => {
    GreenScore += 1;
    GreenScoreCounter.innerText = GreenScore;
    updateRankings();
});
GreenBackButton.addEventListener("click", () => {
    GreenScore -= 1;
    GreenScoreCounter.innerText = GreenScore;
    updateRankings();
});