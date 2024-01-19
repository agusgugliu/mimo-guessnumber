let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

function guessNumb() {
    while (attempts>0) {
        let numGuess = document.getElementById("guess").value;
        const result = document.getElementById("resultStr");

        if (numGuess === randomNum) {
            result.innerHTML = "CORRECT";
            result.style.color = "green";
            break;
        } else if (numGuess < randomNum) {
            result.innerHTML = "TOO LOW";
            result.style.color = "red";
            attempts--;
            break;
        } else {
            result.innerHTML = "TOO HIGH";
            result.style.color = "red";
            attempts--;
            break;
        }
    }

    if attempts === 0 {
        result.innerHTML = "GAME OVER";
        break;
    }
}