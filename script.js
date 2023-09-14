// Randomly return 'Rock', 'Papaer', or 'Scissors'
  // Write function that plays single round of Rock Paper Scissors
  // Make functions case-insensitive
  // Return string that declares winner of round
  // Create function called game() call playRound() inside
    // Play 5 rounds
    // report winner

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => playGame('rock'));

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => playGame('paper'));

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playGame('scissors'));

function playGame(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  b = playRound(playerSelection, computerSelection);
  result = document.querySelector('.result');
  score = document.querySelector('.score');

  if (playerScore === 3 || compScore === 3) {
    return;
  }
  if (b == roundResult.draw) { 
    result.textContent = `Tie! You selected ${playerSelection}. Bot selected ${computerSelection}.`;
    score.textContent = `Player score: ${playerScore}  Bot score: ${compScore}`;
  }
  if (b == roundResult.win) { 
    playerScore++;
    result.textContent = `You won the round! You selected ${playerSelection}. Bot selected ${computerSelection}.`;
    score.textContent = `Player score: ${playerScore}  Bot score: ${compScore}`;
  }
  if (b == roundResult.lose) {
    compScore++;
    result.textContent = `You lost the round! You selected ${playerSelection}. Bot selected ${computerSelection}.`;
    score.textContent = `Player score: ${playerScore}  Bot score: ${compScore}`;
  }

  if (playerScore === 3) {
    result.textContent = 'You won the game! Hit Reset Game to play again.';
    score.textContent = `Player score: ${playerScore}  Bot score: ${compScore}`;
    document.querySelector(".resetButton").style.display = "block";
    return;
  } else if (compScore === 3) {
    result.textContent = 'You lost the game! Hit Reset Game to play again.';
    score.textContent = `Player score: ${playerScore}  Bot score: ${compScore}`;
    document.querySelector(".resetButton").style.display = "block";
    return;
  } 
};

const getComputerChoice = () => {
  let computerChoices = ['rock', 'paper', 'scissors'];
  return random = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
    
const roundResult = {
  draw: 'Draw!',
  win: 'You win the round!',
  lose: 'You lose the round!',
}
            
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return roundResult.draw;
  }
              
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return roundResult.lose;
    }  else {
      return roundResult.win;
    }
  }
              
  if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return roundResult.lose;
    } else {
      return roundResult.win;
    }
  }
                
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return roundResult.lose;
    } else {
      return roundResult.win;
    }
  }
}

const reset = document.querySelector('.resetButton');
reset.addEventListener('click', () => resetGame());

const resetGame = () => {
  playerScore = 0;
  compScore = 0;
  result.textContent = 'To play click rock, paper, or scissors.';
  score.textContent = 'Player score: 0 Bot score: 0';
  document.querySelector(".resetButton").style.display = "none";
};

let playerScore = 0;
let compScore = 0;