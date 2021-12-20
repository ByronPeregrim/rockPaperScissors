//Rock, paper, scissors console game created by Byron Peregrim on 12/13/21



//Function generates computers choice of rock, paper, or scissors
function getComputerChoice() { 
    rockPaperScissorArray = ['Rock', 'Paper', 'Scissors'];
    randomNumber = Math.floor(Math.random()*rockPaperScissorArray.length);
    return rockPaperScissorArray[randomNumber]; 
};

//Function checks players choice and computers choice and decides winner.
function playRound(playerSelection, computerPlay) {
    return (playerSelection === 'Rock' && computerPlay === 'Rock') ? 'rock'
        : (playerSelection === 'Rock' && computerPlay === 'Paper') ? 'paper'
        : (playerSelection === 'Rock' && computerPlay === 'Scissors') ? 'scissors'
        : (playerSelection === 'Paper' && computerPlay === 'Paper') ? 'paper'
        : (playerSelection === 'Paper' && computerPlay === 'Scissors') ? 'scissors'
        : (playerSelection === 'Paper' && computerPlay === 'Rock') ? 'rock'
        : (playerSelection === 'Scissors' && computerPlay === 'Scissors') ? 'scissors'
        : (playerSelection === 'Scissors' && computerPlay === 'Rock') ? 'rock'
        : (playerSelection === 'Scissors' && computerPlay === 'Paper') ? 'paper'
        : 'You didn\'t choose rock, paper, or scissors'

};

playerScore = 0;
computerScore = 0;

//Execute after every round to check if either player reached score limit
//if either player reaches 5 points, winner is announced and score resets.
function checkIfWinner() {
    if (playerScore === 5) {
        alert('You win the game!');
        playerScore = 0;
        computerScore = 0;
        playerResult.textContent = 'Player score: ' + playerScore;
        computerResult.textContent = 'Computer score: ' + computerScore;
    };
    if (computerScore === 5) {
        alert('Sorry! You lost the game!');
        playerScore = 0;
        computerScore = 0;
        playerResult.textContent = 'Player score: ' + playerScore;
        computerResult.textContent = 'Computer score: ' + computerScore;
    };
};

//Announces round winner and adds score to the UI
function roundScoreRock () {
    result = playRound('Rock', getComputerChoice());
    if (result === 'scissors') {
        playerScore += 1;
        playerResult.textContent = 'Player score: ' + playerScore;
        alert(`Computer threw ${result}! You won that round!`);
    } else if (result === 'paper') {
        computerScore += 1;
        computerResult.textContent = 'Computer score: ' + computerScore;
        alert(`Computer thew ${result}! You lost that round!`);
    } else {
        alert(`Computer thew ${result}! That round was a tie!`);
    };
    checkIfWinner();
};

function roundScorePaper () {
    result = playRound('Paper', getComputerChoice());
    if (result === 'rock') {
        playerScore += 1;
        playerResult.textContent = 'Player score: ' + playerScore;
        alert(`Computer threw ${result}! You won that round!`);
    } else if (result === 'scissors') {
        computerScore += 1;
        computerResult.textContent = 'Computer score: ' + computerScore;
        alert(`Computer thew ${result}! You lost that round!`);
    } else {
        alert(`Computer thew ${result}! That round was a tie!`);
    };
    checkIfWinner();
};

function roundScoreScissors () {
    result = playRound('Scissors', getComputerChoice());
    if (result === 'paper') {
        playerScore += 1;
        playerResult.textContent = 'Player score: ' + playerScore;
        alert(`Computer threw ${result}! You won that round!`);
    } else if (result === 'rock') {
        computerScore += 1;
        computerResult.textContent = 'Computer score: ' + computerScore;
        alert(`Computer thew ${result}! You lost that round!`);
    } else {
        alert(`Computer thew ${result}! That round was a tie!`);
    };
    checkIfWinner();
};


//Add rock, paper, scissor buttons to DOM. add event listeners. attached functions to activate on event

const rock = document.querySelector('#rockButton');
rock.addEventListener('click', function (){
    roundScoreRock();
 });

const paper = document.querySelector('#paperButton');
paper.addEventListener('click', function (){
    roundScorePaper();
});

const scissors = document.querySelector('#scissorsButton');
scissors.addEventListener('click', function (){
    roundScoreScissors();
});



//add score box to DOM, add <p> that will keep track of player/comp score

const scoreBox = document.querySelector('#scoreBox');

const playerResult = document.createElement('p');
scoreBox.appendChild(playerResult);
playerResult.classList.add('playerResult');
playerResult.textContent = 'Player score: ' + playerScore;

const computerResult = document.createElement('p');
scoreBox.appendChild(computerResult);
computerResult.classList.add('computerResult');
computerResult.textContent = 'Computer Score: ' + computerScore;








