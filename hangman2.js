// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.
// Each constructor function should be in it's own file and be exported and required wherever needed.
// Look into function prototypes and use them for a few of your constructor's methods.
// Notes

// var inquirer = require("inquirer");
var Word = require("./word.js");
var game = {
	words: ['grumpy cat','lolcat','success kid','kermit','willy wonka','sheldon','oprah','philosoraptor'],
	word: null,
	startGame: function(){
		this.memeName = this.words[Math.floor(Math.random()*this.words.length)];
		this.currentWord = new Word(this.memeName);
		this.currentWord.getLetters();
		console.log(this.currentWord.wordRender());
	}


	// var word = words[index];
	// 	console.log('word: ', word);
	// var answerArray = [];
	// var guesses = [];
	// var guessesRemaining = 6;
	// var winPoints=0;
	// var keepPlaying;

	// console.log(answerArray);



}

game.startGame();