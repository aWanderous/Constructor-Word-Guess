function Letter(value) {
    this.character = value;
    this.guessed = false;
    this.toString = function () {

        if (this.character === " ") {
            this.guessed = true;
            console.log(" ");
            return " ";
        } else if (this.guessed === false) {
            console.log("_");
            return "_";
        } else {
            console.log(this.character);
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