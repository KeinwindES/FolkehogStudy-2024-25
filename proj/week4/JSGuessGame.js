function guess() {
    let guess = document.getElementById('guess').value;

    if (guess === "") {
        document.getElementById('answer').innerHTML = "Please enter a number!";
        return;
    }

    if (guess == secretNumber) {
        document.getElementById('answer').innerHTML = "Correct!";
    }
    
    else if (guess < secretNumber) {
        document.getElementById('answer').innerHTML = "Too low, go higher!";
    }
    
    else if (guess > secretNumber) {
        document.getElementById('answer').innerHTML = "Too high, go lower!";
    }
    
    else if (guess > maxSecretNumber) {
        document.getElementById('answer').innerHTML = "Max number is " + maxSecretNumber;
    }

    else if (guess < 0) {
        document.getElementById('answer').innerHTML = "Please enter a positive number!";
    }
}