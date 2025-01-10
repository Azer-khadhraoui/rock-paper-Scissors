let score = 0;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
                   (userChoice === 'scissors' && computerChoice === 'paper') ||
                   (userChoice === 'paper' && computerChoice === 'rock')) {
            score++;
            return "You win!";
        } else {
            score--;
            return "You lose!";
        }
    }

    const result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').innerText = `You chose: ${userChoice}, Computer chose: ${computerChoice}. ${result}`;
    document.getElementById('score').innerText = `Score: ${score}`;
}