let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

function checkGuess() {
    while (attempts >= 0) {
        const inputElement = document.getElementById("guess");
        const feedbackElement = document.getElementById("feedback");
        const guess = inputElement.value;
        
        if (guess == randomNumber) {
            feedbackElement.innerHTML = "CONGRATULATIONS! The number was\t" + randomNumber;
            feedbackElement.style.color = "green";
            break;
        } else if (guess < randomNumber) {
            attempts--;
            feedbackElement.innerHTML = "TOO LOW!\nAttempts Remaining:\t" + attempts;
            feedbackElement.style.color = "red";
            break;
        } else {
            attempts--;
            feedbackElement.innerHTML = "TOO HIGH!\nAttempts Remaining:\t" + attempts;
            feedbackElement.style.color = "orange";
            break;
        }
    }
}