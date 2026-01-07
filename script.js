// Buttons & Counters

// Red
let RedStepButton = document.getElementById("RedStepButton");
let RedBackButton = document.getElementById("RedBackButton");
let RedScoreCounter = document.getElementById("RedScoreCounter");
let RedTeam = document.getElementById("TeamRed");

// Blue
let BlueStepButton = document.getElementById("BlueStepButton");
let BlueBackButton = document.getElementById("BlueBackButton");
let BlueScoreCounter = document.getElementById("BlueScoreCounter");
let BlueTeam = document.getElementById("TeamBlue");

// Green
let GreenStepButton = document.getElementById("GreenStepButton");
let GreenBackButton = document.getElementById("GreenBackButton");
let GreenScoreCounter = document.getElementById("GreenScoreCounter");
let GreenTeam = document.getElementById("TeamGreen");



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

// System Controls

let Selection = "Right"; // Default Selection

function updateSelectionHighlight() {
    if (Selection === "Right") {
        BlueTeam.setAttribute("hover", "true");
        RedTeam.removeAttribute("hover");
        GreenTeam.removeAttribute("hover");
    } else if (Selection === "Left") {
        RedTeam.setAttribute("hover", "true");
        BlueTeam.removeAttribute("hover");
        GreenTeam.removeAttribute("hover");
    } else if (Selection === "Center") {
        GreenTeam.setAttribute("hover", "true");
        BlueTeam.removeAttribute("hover");
        RedTeam.removeAttribute("hover");
    }
}

window.addEventListener("keydown", function(e) {
    updateRankings();
    switch (e.keyCode) {

        case 39: // Right
            if (Selection === "Right") {
                Selection = "Right";
            } else if (Selection === "Left") {
                Selection = "Center";
            } else if (Selection === "Center") {
                Selection = "Right";
            }
            updateSelectionHighlight();
            break;

        case 38: // Up
            if (Selection === "Right") {
                BlueScore += 1;
                BlueScoreCounter.innerText = BlueScore;
            } else if (Selection === "Left") {
                RedScore += 1;
                RedScoreCounter.innerText = RedScore;
            } else if (Selection === "Center") {
                GreenScore += 1;
                GreenScoreCounter.innerText = GreenScore;
            }
            updateSelectionHighlight();
            break;

        case 37: // Left
            if (Selection === "Right") {
                Selection = "Center";
            } else if (Selection === "Left") {
                Selection = "Left";
            } else if (Selection === "Center") {
                Selection = "Left";
            }
            updateSelectionHighlight();
            break;

        case 40: // Down
            
            if (Selection === "Right") {
                BlueScore -= 1;
                BlueScoreCounter.innerText = BlueScore;
            } else if (Selection === "Left") {
                RedScore -= 1;
                RedScoreCounter.innerText = RedScore;
            } else if (Selection === "Center") {
                GreenScore -= 1;
                GreenScoreCounter.innerText = GreenScore;
            }
            updateSelectionHighlight();
            break;
    }
});   