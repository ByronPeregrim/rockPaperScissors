//Rock, paper, scissors console game created by Byron Peregrim on 12/13/21



//Function generates computers choice of rock, paper, or scissors
function getComputerChoice() { 
    rockPaperScissorArray = ['Rock', 'Paper', 'Scissors'];
    randomNumber = Math.floor(Math.random()*rockPaperScissorArray.length);
    return rockPaperScissorArray[randomNumber]; 
}


//Function checks players choice and computers choice and decides winner.
function playRound(playerSelection, computerPlay) {
    return (playerSelection === 'Rock' && computerPlay === 'Rock') ? 'Tie! Play again!'
        : (playerSelection === 'Rock' && computerPlay === 'Paper') ? 'You lose! Try again!'
        : (playerSelection === 'Rock' && computerPlay === 'Scissors') ? 'Congratulations! You won!'
        : (playerSelection === 'Paper' && computerPlay === 'Paper') ? 'Tie! Play again!'
        : (playerSelection === 'Paper' && computerPlay === 'Scissors') ? 'You lose! Try again!'
        : (playerSelection === 'Paper' && computerPlay === 'Rock') ? 'Congratulations! You won!'
        : (playerSelection === 'Scissors' && computerPlay === 'Scissors') ? 'Tie! Play again!'
        : (playerSelection === 'Scissors' && computerPlay === 'Rock') ? 'You lose! Try again!'
        : (playerSelection === 'Scissors' && computerPlay === 'Paper') ? 'Congratulations! You won!'
        : 'You didn\'t choose rock, paper, or scissors'

};

//Function plays 5 rounds, tracks score, declares winner after 5 rounds.
function game() {
    playerScore = 0;
    computerScore = 0;
    counter = 0
    while (counter < 5) {
        let askPlayer = (prompt('Choose Rock, Paper, or Scissors')).toLowerCase();
        let playerSelection = askPlayer.charAt(0).toUpperCase() + askPlayer.slice(1);
        let result = playRound(playerSelection, getComputerChoice());
        if (result === 'Congratulations! You won!') {
            playerScore += 1
            counter += 1
            console.log('That\'s one point for you!')
        } else if (result === 'You lose! Try again!') {
            computerScore += 1
            counter += 1
            console.log('That\'s one for the computer!')
        } else if (result === 'You didn\'t choose rock, paper, or scissors') {
            console.log('Please choose rock, paper, or scissors.')
        } else {
            counter += 1
            console.log('That round was a tie!')
        };
    };


    console.log('Player score: ' + playerScore);
    console.log('Computer score: ' + computerScore);


    return (playerScore > computerScore) ? 'Congratulations! You won the game!'
        : (playerScore < computerScore) ? 'I\'m sorry, you lose.'
        : 'You tied with the computer! How lame!';
 

    };

console.log(game());









