let computerScore = 0;
let playerScore = 0;

function getcomputerChoice(){
    const computerSelection = (Math.floor(Math.random() * 3))
    switch(computerSelection){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissor'
    }
}
function getplayerChoice (){
  choice = prompt("Rock, paper or scissor").toLowerCase();
  return choice;
}

const computerSelection = getcomputerChoice();
const playerSelection = getplayerChoice();

function playRound(computerSelection, playerSelection){

    if(computerSelection == 'rock' && playerSelection == 'paper' ||
    computerSelection == 'paper' && playerSelection == 'scissor' ||
    computerSelection == 'scissor' && playerSelection == 'rock')
    {
        playerScore++;
        return `You won, ${playerSelection} beats ${computerSelection} \nYou: ${playerScore}, Computer: ${computerScore}`;
    }

    else if(computerSelection == 'rock' && playerSelection == 'scissor'||
    computerSelection == 'paper' && playerSelection == 'rock' ||
    computerSelection == 'scissor' && playerSelection == 'paper')
    {   
        computerScore++;
        return `Computer won, ${computerSelection} beats ${playerSelection} \nYou: ${playerScore}, Computer: ${computerScore}`;
    }
    else if(computerSelection === playerSelection){
        return `It's a draw. \nYou: ${playerScore}, Computer: ${computerScore}`
    }
    else{
        return `Input ERR`;
    }
}

function game(){
    for(let i = 1; i<=5; i++){
        console.log(playRound(getcomputerChoice(),getplayerChoice()));
    }
    if(computerScore > playerScore){
            console.log('Computer won this round.');
    }
    else if(playerScore > computerScore){
        console.log('Congratulations! you won this round.');
    }
    else{
        console.log("Uff! what a tough game.");
    }
}


game();