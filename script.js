let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

function checkGuess() {
    while (attempts > 0) {
        const inputElement = document.getElementById("guess");
        const feedbackElement = document.getElementById("feedback");
        const guess = inputElement.value;
        if (guess == randomNumber) {
            feedbackElement.innerHTML = "Congratulations!";
            feedbackElement.style.color = "green";
            break;
        } else if (guess < randomNumber) {
            feedbackElement.innerHTML = "Too low! Try again.";
            feedbackElement.style.color = "red";
            break;
            attempts--;
        } else {
            feedbackElement.innerHTML = "Too high! Try again.";
            feedbackElement.style.color = "red";
            break;
            attempts--;
        }
    }

    if (attempts === 0) {
        feedbackElement.innerHTML = "GAME OVER";
    }
}