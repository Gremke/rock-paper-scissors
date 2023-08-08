// Randomly return 'Rock', 'Papaer', or 'Scissors'
        // Write function that plays single round of Rock Paper Scissors
        // Make functions case-insensitive
        // Return string that declares winner of round
        // Create function called game() call playRound() inside
            // Play 5 rounds
            // report winner
        
const getUserChoice = input => {
    input = prompt('Rock, Paper, or Scissors?').toLowerCase();
        if (input === 'rock' || input === 'paper' || input === 'scissors') {
            return input;
        } else {
            return console.log('Not valid input.');
        }
}
    
const getComputerChoice = () => {
    let computerChoices = ['rock', 'paper', 'scissors'];
    return random = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerChoices = computerChoices.toLowerCase();
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

const game = () => {
  for (let i = 0; i < 5; i++) {
      const b = playRound(getUserChoice(), getComputerChoice());
      if (b == roundResult.draw) { console.log("Tie!") }
      if (b == roundResult.win) { 
          playerScore++;
          console.log("You won the round!");
      }
      if (b == roundResult.lose) {
          compScore++;
          console.log("You lost the round!");
      }
  }

  if (playerScore === compScore) {
      console.log("Tie game!")
  } else if (playerScore !== compScore && playerScore > compScore) {
      console.log("You win the game!")
  } else {
      console.log("You lost the game!")
  }
  console.log(`Player score: ${playerScore}  Bot score: ${compScore}`)
}

let playerScore = 0;
let compScore = 0;            
game();