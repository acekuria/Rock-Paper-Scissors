
function getPlayerChoice() {
    let playerChoice = prompt("Enter 'rock', 'paper' or 'scissors'.");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    return getPlayerChoice();
    } else {
    playerChoice = playerChoice;
    return playerChoice;;
    }
}

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3)
         if (choice === 0) {
             let computerChoice = "rock";
             return computerChoice;
         }
         if (choice === 1) {
             let computerChoice = "paper";
             return computerChoice;
         }
         else {
             let computerChoice = "scissors";
             return computerChoice;
         }
 }
let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice()
// function playRound returns the winner of the round
// if playerChoice = computerChoice, then print draw and carry out the function again.
// if playerChoice = rock and computerChoice = scissors, print "you win".
// if playerChoice = paper and computerChoice = rock, print "you win".
// if playerChoice = scissors and computerChoice = paper, print "you win".
// else print "You lose" 


function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        console.log("Draw!\n Go Again!");
    }
    else if (playerChoice === "rock" && computerChoice === "scissors"){
        console.log("You Win! Rock beats Scissors XD");
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock XD");
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper XD");
    }
    else {
        console.log("You lose! :(")
    }
 }

 playRound(playerChoice, computerChoice)

function game() {
    
}