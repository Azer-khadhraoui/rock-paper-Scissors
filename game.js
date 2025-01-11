let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateScore() {
    const playerScoreElement = document.querySelector('.score');
    playerScoreElement.textContent = `Score: ${playerScore} - ${computerScore}`;
}

function playRound(playerChoice, computerChoice) {
    const resultElement = document.getElementById('result');
    if (playerChoice === computerChoice) {
        resultElement.textContent = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
        resultElement.textContent = "You win!";
    } else {
        computerScore++;
        resultElement.textContent = "Computer wins!";
    }
    updateScore();
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const playerHand = document.getElementById('player-hand');
    const computerHand = document.getElementById('computer-hand');

    
    playerHand.src = `${playerChoice}.png`;

    // Add animations
    playerHand.style.animation = "shakePlayer 2s ease";
    computerHand.style.animation = "shakeComputer 2s ease";

    
    const choices = ['rock', 'paper', 'scissors'];
    let animationInterval = setInterval(() => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        computerHand.src = `${randomChoice}.png`;
    }, 100);

    setTimeout(() => {
        clearInterval(animationInterval);
        computerHand.src = `${computerChoice}.png`;

        playRound(playerChoice, computerChoice);
        playerHand.style.animation = "";
        computerHand.style.animation = "";
    }, 2000);
}

function startGame() {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
        introScreen.classList.add('fadeOut');
        match.classList.remove('fadeOut');
        match.classList.add('fadeIn');
    });
}

startGame();