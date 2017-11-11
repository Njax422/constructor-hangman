// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

var Letter = function(letter){
	this.character = letter;
	this.found = false;
	this.displayLetter = function(){
		if (this.found) {
			return this.character;
		} else {
			return "_";
		}
	}
}

module.exports = Letter;
