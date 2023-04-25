
const options = ['rock', 'paper', 'scissors']
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
rockButton.classList.add('size')
scissorsButton.classList.add('size')
paperButton.classList.add('size')
const resultsDiv = document.querySelector('.results')
const containerDiv = document.querySelector
('#container')



const h4 = document.createElement('h4')
let scorePlayer = 0;
let scoreComputer = 0;

playerName = prompt("What\'s your name challenger! I'm intruiged!")
const h1 = document.createElement('h1')
h1.innerText = `Welcome ${playerName}`
containerDiv.insertBefore(h1, rockButton)

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * 3)];
    return choice;
}   

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'scissors' && computerSelection === 'paper') ||
               (playerSelection === 'paper' && computerSelection === 'rock'))   {
                return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    const h3 = document.createElement('h3');
    resultsDiv.appendChild(h3)
    
    if (result === "Tie") {
        h3.innerText = "Its a Tie!";
    } else if (result === 'Player') {
        h3.innerText = `You Win! ${playerSelection} beats ${computerSelection}!`
    } else {
        h3.innerText = `You Lose! ${computerSelection} beats ${playerSelection}!`
    }
}
function endGame () {
    if (scorePlayer===5 ) {
        const h2 = document.createElement('h2')
        h2.classList.add('green')
        h2.innerText = `What a gladiator! \You won ${scorePlayer} to ${scoreComputer} !`
        resultsDiv.append(h2)
        }
    else if (scoreComputer === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('red')
        h2.innerText = `Unlucky fighter! \You lost  ${scoreComputer} to ${scorePlayer} !`
        resultsDiv.append(h2)
        }
    }
   


rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    const result = playRound(playerSelection, computerSelection);
    if (checkWinner(playerSelection, computerSelection) == "Player") {
        scorePlayer++;
        console.log(scorePlayer)
    }
    else if (checkWinner(playerSelection, computerSelection) == "Computer") {
        scoreComputer++;
        console.log(scoreComputer)
    }
    h4.innerText = `Your Score: ${scorePlayer}. Computer Score: ${scoreComputer} `
    resultsDiv.appendChild(h4)
    endGame()
     
 });
 
 paperButton.addEventListener('click', () => {
     const computerSelection = getComputerChoice();
     const playerSelection = 'paper';
     const result = playRound(playerSelection, computerSelection)
     if (checkWinner(playerSelection, computerSelection) == "Player") {
        scorePlayer++;
        console.log(scorePlayer)
    }
    else if (checkWinner(playerSelection, computerSelection) == "Computer") {
        scoreComputer++;
        console.log(scoreComputer)
    }
    h4.innerText = `Your Score: ${scorePlayer}. Computer Score: ${scoreComputer} `
    resultsDiv.appendChild(h4)
    endGame()
 
 });
 
 scissorsButton.addEventListener('click', () => {
     const computerSelection = getComputerChoice();
     const playerSelection = 'scissors';
     const result = playRound(playerSelection, computerSelection);
     if (checkWinner(playerSelection, computerSelection) == "Player") {
        scorePlayer++;
        console.log(scorePlayer)
    }
    else if (checkWinner(playerSelection, computerSelection) == "Computer") {
        scoreComputer++;
        console.log(scoreComputer)
    } h4.innerText = `Your Score: ${scorePlayer}. Computer Score: ${scoreComputer} `
    resultsDiv.appendChild(h4)
    endGame()
 });
 
 

    
    


