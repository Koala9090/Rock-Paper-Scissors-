document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons button');
    const roundResults = document.querySelector('.round-results');
    const scoreDisplay = document.querySelector('.score');
    const winnerDisplay = document.querySelector('.winner');
    
    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.className;
            const computerChoice = getComputerChoice();
            const result = determineWinner(playerChoice, computerChoice);
            updateScore(result);
            displayResults(playerChoice, computerChoice, result);
            if (playerScore === 5 || computerScore===5){
                disableButtons();
            };
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(player, computer) {
        if (player === computer) {
            return 'draw';
        }
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'player';
        }
        return 'computer';
    }

    function updateScore(result) {
        if (result === 'player') {
            playerScore++;
        } else if (result === 'computer') {
            computerScore++;
        }
        scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    }

    function displayResults(playerChoice, computerChoice, result) {
        roundResults.textContent = `Player chose ${playerChoice}, Computer chose ${computerChoice}.`;
        if (result === 'draw') {
            winnerDisplay.textContent = "It's a draw!";
        } else {
            winnerDisplay.textContent = `${result.charAt(0).toUpperCase() + result.slice(1)} wins this round!`;
        }
    }
    function disableButtons() {
        document.querySelectorAll("button").forEach(button => button.disabled = true);
    }
});