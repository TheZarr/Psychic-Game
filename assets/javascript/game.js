//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;



//Lets the computer select a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 guesses
// guesses = guesses || 9
GuessesLeft = function () {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

LetterToGuess = function () {
  letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};
GuessesSoFar = function () {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
reset = function () {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  LetterToGuess();
  GuessesLeft();
  GuessesSoFar();
}

LetterToGuess();
GuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function (event) {
  guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  GuessesLeft();
  GuessesSoFar();

  if (guessesLeft > 0) {
    if (userGuess == letterToGuess) {
      wins++;
      document.querySelector('#wins').innerHTML = "Wins: " + wins;
      alert("Yes, you are not a puny Fairy!");
      reset();
    }
  } else if (guessesLeft == 0) {
    // Then we will loss and we'll update the html to display the loss 
    losses++;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    alert("HAHAHA you are Puny Fairy and you Lose!");
    // Then we'll call the reset. 
    reset();
  }
};