var name = prompt("What is your name?");
var answer = prompt('Well hello ' + name + ', my name is johnny 5! Would you like to play a guessing game? (yes or no)');

if ( answer.toUpperCase() === 'YES' ) {
  alert("Great! lets begin the game " + name);
} else {
  alert("Ok, well your going to play anyways! Mo hahaha!")
};
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?')
if (parseInt(guess)=== randomNumber) {
  document.write('<p><h1>Awesome! The number was ' + randomNumber + ' You guessed right!</h1></p>')
} else {
  document.write('<p><h1>Sorry that is incorrect, The number was ' + randomNumber + '!</h1></p>');
}
