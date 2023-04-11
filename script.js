
function getComputerChoice () {
   let choice = Math.floor(Math.random() * 3)
        if (choice === 0) {
            console.log("Rock");
        }
        else if (choice===1) {
            console.log("Paper");
        }
        else {
            console.log("Scissors")
        }
}

getComputerChoice()

// function playRound returns the winner of the round
// if playerSelection = computerSelection, then print draw and carry out the function again.
// if playerSelection = rock and computerSelection = scissors, print "you win".
// if playerSelection = paper and computerSelection = rock, print "you win".
// if playerSelection = scissors and computerSelection = paper, print "you win".
// else print "You lose" 

let playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        console.log("Draw!\n Go Again!");
            playRound((playerSelection, computerSelection))
    }
    if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! XD");
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! XD");
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! XD");
    }
    else {
        console.log("You lose! :(")
    }
 }


