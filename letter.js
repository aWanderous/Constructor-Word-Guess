
Function Letter(value) {
    this.character = value;
    this.guessed = false;
    this.placeHolder = function () {

        if (this.character === " ") {
            this.guessed = true;
            return " ";
        };

        if (this.guessed === false) {
            return "_";
        };
    };

    this.guess = function (guess) {

        if (guess === this.character) {
            this.guessed = true;
            return this.character;
        };
    };
};

module.exports = Letter;