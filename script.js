let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

function guessNumb() {
    const inputNumber = document.getElementById('guess');
    const feedbackElement = document.getElementById('resultStr');
    const guess = inputNumber.value;

    if (guess === randomNum) {
        feedbackElement.innerHTML = "CONGRATULATIONS";
        feedbackElement.style.color = "gold";
        break;
    } else if (guess < randomNum) {
        feedbackElement.innerHTML = "TOO LOW!";
        feedbackElement.style.color = "red";
        break;
    } else {
        feedbackElement.innerHTML = "TOO HIGH!";
        feedbackElement.style.color = "orange";
        break;
    }
}