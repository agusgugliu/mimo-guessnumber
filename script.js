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
            attempts--;
            feedbackElement.innerHTML = "TOO LOW... Attempts Remaining: " + attempts;
            feedbackElement.style.color = "red";
            break;
        } else {
            attempts--;
            feedbackElement.innerHTML = "TOO HIGH... Attempts Remaining: " + attempts;
            feedbackElement.style.color = "red";
            break;
        }
    }

    if (attempts === 0) {
        feedbackElement.innerHTML = "GAME OVER";
    }
}