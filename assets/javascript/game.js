// User Input for Guessing the letter

// Guess Left Display + Guessed Letters Display

// Wins and Loss Detection

// Record Wins & Loss

// Reset Game

var thoughts = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;


// Defines Letter Input into an Array
var userGuess = [];


// Defines your inputs into a HTML
// document.getElementById() : Returns a reference to the element by its ID
var userText = document.getElementById("user-text");

// Defines amount of of guesses
var totalGuess = 10;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = thoughts[Math.floor(Math.random() * thoughts.length)];
console.log(computerGuess);

// document : the webpage
// onkeyup : the press of the keys
// function(event) : perform function when event (keypress) on document occurs?
document.onkeyup = function(event) {
	// userText.textContent : variable.sends event.key to "document.getElementById("user-text")
	userText.textContent = event.key;
	// push to array, event key
	userGuess.push(event.key);

	if (event.key === computerGuess) {
		wins++;
		totalGuess = 10;
		userGuess = [];
	}

		// Subtract 1 from total Guesses
	totalGuess--;
		// totalGuess = totalGuess -1
		// totalGuess -= 1

	if (totalGuess < 1) {
		losses++;
		totalGuess = 10;
		userGuess = [];
	}



	// 
	document.getElementById("wins").innerHTML = wins;
	// 
	document.getElementById("losses").innerHTML = losses;
	// send event.key to user-text in the HTML, in var array.join (makes a list of inputs)
	document.getElementById("user-text").innerHTML = userGuess.join();
	// send event.key number of presses to totalGuess (10)
	document.getElementById("guess-left").innerHTML = totalGuess;
}