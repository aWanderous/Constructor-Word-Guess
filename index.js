var Word = require('./word');
var inquirer = require('inquirer');

// the counters starting points
var wins = 0;
var losses = 0;
var guessCount = 10;


// letters in array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// words in array
var heroes = ["hawkman", "aquaman", "batman", "superman", "wonder woman", "green arrow", "captain america", "daredevil", "falcon", "hulk", "ironman", "thor", "robin", "storm", "war machine", "doctor strange", "spiderman"];

// guessed letters in array
var correctLetters = [];
var incorrectLetters = [];

function newHero() {
    var theHero = heroes[Math.floor(Math.random() * heroes.length)];
    var chosenHero = new Word(theHero);

    var solved = false;
    guessCount = 10;
};

function play() {

    if (solved) {
        newHero();
    };

    var wordDone = [];
    chosenHero.hero.forEach(spellCheck);

    if (wordDone.includes(false)) {

        inquirer
            .prompt([
                type = "input",
                message = "Guess a letter in the word.",
                name = "guesses"
            ]).then(function (input) {

                if (!letters.includes(input.guesses) || input.guesses.length > 1 || input.guesses === "") {
                    console.log("\n Please enter a letter.\n");
                    play();
                } else {
                    if (incorrectLetters.includes(input.guesses) || correctLetters.includes(input.guesses)) {
                        console.log("\n This letter has already been guessed\n");
                        play();
                    }
                }

            })

    };

};

newHero();
play();