console.log('Let\'s define a secret number');
let maxSecretNumber = 100;
document.getElementById('maxnumber').innerHTML = maxSecretNumber;

let secretNumber = Math.round(maxSecretNumber * Math.random());
console.log(secretNumber);