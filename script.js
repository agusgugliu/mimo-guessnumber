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
            
            if (attempts === 0) {
                feedbackMessage.innerHTML = "G A M E   O V E R";
                feedbackMessage.style.color = "#A84A54";

                feedbackAttempts.innerHTML = "The correct number was: " + randomNumber;
            } else {

                feedbackMessage.innerHTML = "TOO LOW.";
                feedbackMessage.style.color = "#A84A54";

                feedbackAttempts.innerHTML = "Attempts Remaining: " + attempts;
            }
            
            break;

        } else {
            
            attempts--;
            
            if (attempts === 0) {
                feedbackMessage.innerHTML = "G A M E   O V E R";
                feedbackMessage.style.color = "#A84A54";

                feedbackAttempts.innerHTML = "The correct number was: " + randomNumber;
            } else {

                feedbackMessage.innerHTML = "TOO HIGH.";
                feedbackMessage.style.color = "#A84A54";

                feedbackAttempts.innerHTML = "Attempts Remaining: " + attempts;
            }
            break;

        }
    }

    while (attempts === 0) {
        const feedbackMessage = document.getElementById("fdbMessage");
        const feedbackAttempts = document.getElementById("fdbAttempts");

        feedbackMessage.innerHTML = "G A M E   O V E R";
        feedbackMessage.style.color = "#A84A54";

        feedbackAttempts.innerHTML = "The correct number was: " + randomNumber;
    }
}