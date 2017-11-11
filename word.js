var Letter = require("./letter.js");

var Word = function(word){
	this.word = word;
	this.letters = [];
	this.completed = false;
	this.getLetters = function(){
		for (var i = 0; i < this.word.length; i++) {
			var newLetter = new Letter(this.word[i])
			this.letters.push(newLetter);
		}
	}
	this.wordRender = function(){
		var string = "";
		for (var i = 0; i < this.letters.length; i++) {
			string += this.letters[i].displayLetter();
		}
		return string;
	}
}

module.exports = Word;