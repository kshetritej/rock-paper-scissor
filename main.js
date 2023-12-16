const cpuScore = document.querySelector(".computer-score");
const humanScore = document.querySelector(".human-score");

const reload = document.querySelector('.reload-btn');

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
    }
    else if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissor" ||
        playerSelection == "scissor" && computerSelection == "rock") {
        resultBox.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    else {
        resultBox.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }
    cpuScore.textContent = computerScore;
    humanScore.textContent = playerScore;

    if (computerScore === 5 || playerScore === 5) {
        // game is over, disable the buttons
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => (button.disabled = true));
        
        if(playerScore ===5){
          humanScore.textContent = `Winner`;
          resultBox.textContent = `Game Over. RELOAD page to Play Again!!`;
        }
        else if(computerScore ===5){
            cpuScore.textContent = `Winner`;
            resultBox.textContent = `Game Over. RELOAD page to Play Again!!`;
        }
    }
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

