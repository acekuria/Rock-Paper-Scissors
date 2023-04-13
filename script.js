
const options = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * 3)];
    return choice;
}   

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'scissors' && computerSelection === 'papaer') ||
               (playerSelection === 'paper' && computerSelection === 'rock'))   {
                return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result === "Tie") {
        return "Its a Tie!";
    } else if (result === 'Player') {
        return `You Win! ${playerSelection} beats ${computerSelection}!`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput === false){
        const playerChoice = prompt("Please enter 'rock' 'paper' or 'scissors'")
        if (playerChoice === null){
            continue;
        }else {
            const choiceInLower = playerChoice.toLowerCase();
            if (options.includes(choiceInLower)) {
                validatedInput = true;
                return choiceInLower;
            }
        
        }
    }
    
}


function game() {
    let scorePlayer = 0
    let scoreComputer = 0
    console.log("Welcome");
    for (let i = 0; i<5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-----------------------------------------------")
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++;
        }
        else  if (checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++;
        }
     }
        console.log("Game Over")
        if (scoreComputer > scorePlayer){
            console.log("Computer Wins!");
        }else if (scoreComputer < scorePlayer){
            console.log("You Win XD");
        }else {
            console.log("Its a Tie");
        }
}
game()


