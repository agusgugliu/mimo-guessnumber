let secretNumber = Math.floor(Math.random() * 101);
let attempts = 5;

function makeGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let message = '';

    if (isNaN(userGuess)) {
        message = 'Please enter a valid number.';
    } else if (userGuess === secretNumber) {
        message = `Congratulations! You guessed the number ${secretNumber}.`;
        attempts = 0;
    } else {
        attempts--;
        if (attempts > 0) {
            message = userGuess < secretNumber ? 'Try higher!' : 'Try lower!';
            message += ` You have ${attempts} attempts left.`;
        } else {
            message = `Game over! The number was ${secretNumber}.`;
        }
    }

    document.getElementById('message').innerText = message;
}