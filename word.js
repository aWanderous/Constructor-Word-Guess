var Letter = require("./letter");

function Word(answer) {

    this.hero = [];
    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.hero.push(letter);
    };

    this.log = function () {
        answerLog = "";
        for (var i = 0; i < this.hero.length; i++) {
            answerLog + this.hero[i] + " ";
        }
        console.log(answerLog + "\n");
    };

    this.userGuess = function (input) {
        for (var i = 0; i < this.hero.length; i++) {
            this.hero[i].guess(input);
        }
    };
};

module.exports = Word;