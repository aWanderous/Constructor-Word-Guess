function Letter(value) {
    this.character = value;
    this.guessed = false;
    this.toString = function () {

        if (this.character === " ") {
            this.guessed = true;
            return " ";
        } else if (this.guessed === false) {
            return "_";
        } else {
            return this.character;
        }
    };
    
    this.guess = function (guess) {
        
        if (guess === this.character) {
            this.guessed = true;
        };
    };
};

module.exports = Letter;