const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('.choices button');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = getResult(playerChoice, computerChoice);
        
        computerChoiceDisplay.textContent = computerChoice;
        resultDisplay.textContent = result;
    });
});

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'It\'s a draw!';
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'You win!';
    } 
    return 'You lose!';
}
