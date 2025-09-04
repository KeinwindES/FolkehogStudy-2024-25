function changeMaxNum() {
    const newMaxNumber = document.getElementById('change').value;
    maxSecretNumber = parseInt(newMaxNumber);
    document.getElementById('maxnumber').innerHTML = maxSecretNumber;

    secretNumber = Math.round(maxSecretNumber * Math.random());
    console.log(secretNumber);

   // let guess = document.getElementById('guess').value;
   // if (guess > maxSecretNumber) {
   //     document.getElementById('answer').innerHTML = "Max number is " + maxSecretNumber;
   // }

    
}