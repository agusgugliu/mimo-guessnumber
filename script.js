let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

function checkGuess() {
    while (attempts > 0) {
        const inputElement = document.getElementById("guess");
        const feedbackElement = document.getElementById("feedback");
        const feedbackMessage = document.getElementById("fdbMessage");
        const feedbackAttempts = document.getElementById("fdbAttempts");
        const guess = inputElement.value;
        
        if (guess == randomNumber) {
            
            feedbackMessage.innerHTML = "CONGRATS!";
            feedbackMessage.style.color = "#0E2246";
            break;

        } else if (guess < randomNumber) {
            
            attempts--;
            
            feedbackMessage.innerHTML = "TOO LOW.";
            feedbackMessage.style.color = "#A84A54";

            feedbackAttempts.innerHTML = "Attempts Remaining: " + attempts;
            
            break;

        } else {
            
            attempts--;
            
            feedbackMessage.innerHTML = "TOO HIGH.";
            feedbackMessage.style.color = "#A84A54";

            feedbackAttempts.innerHTML = "Attempts Remaining: " + attempts;

            break;

        }
    }
}