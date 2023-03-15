const cpuScore = document.querySelector(".computer-score");
const humanScore = document.querySelector(".human-score");

let computerScore = 0;
let playerScore = 0;
//generate random computer choice
function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
        default:
            return "rock";
    }
}

function playRound(playerSelection, computerSelection) {
    const resultBox = document.querySelector(".result");
    if (playerSelection == computerSelection) {
        resultBox.textContent = "Draw!!";
        computerScore++;
        playerScore++;
    }
    else if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissor" ||
        playerSelection == "scissor" && computerSelection == "rock") {
        resultBox.textContent = `Computer Won! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    else {
        resultBox.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }
    cpuScore.textContent = computerScore;
    humanScore.textContent = playerScore;
}

function game() {
    const rockBtn = document.querySelector(".rock");
    rockBtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound("rock", computerSelection);
    });
    const paperBtn = document.querySelector(".paper");
    paperBtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound("paper", computerSelection);
    });
    const scissorBtn = document.querySelector(".scissor");
    scissorBtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound("scissor", computerSelection);
    })
}

game();

