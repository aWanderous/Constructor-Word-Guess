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

// random hero generator
var theHero = heroes[Math.floor(Math.random() * heroes.length)];
var chosenHero = new Word(theHero);

// guessed letters in array
var correctLetters = [];
var incorrectLetters = [];
var solved = false;

//generate new word
function newHero() {
    var theHero = heroes[Math.floor(Math.random() * heroes.length)];
    chosenHero = new Word(theHero);
    correctLetters = [];
    incorrectLetters = [];
    guessCount = 10;
    solved = false;
};

function play() {

    if (solved) {
        newHero();
    };

    //test if letter correct
    var wordDone = [];
    chosenHero.hero.forEach(checkDone);
    chosenHero.log();

    // letters left to guess
    if (wordDone.includes(false)) {

        inquirer
            .prompt([{
                type: "input",
                message: "Guess a letter in the word.",
                name: "guesses"
            }]).then(function (input) {

                //check if input correctly
                if (!letters.includes(input.guesses) || input.guesses.length > 1 || input.guesses === "") {
                    console.log("\n Please enter a letter.\n");
                    play();
                } else {

                    //check if entered already
                    if (incorrectLetters.includes(input.guesses) || correctLetters.includes(input.guesses)) {
                        console.log("\n This letter has already been guessed\n");
                        play();
                    } else {

                        // check if guess is correct
                        var spellCheck = [];
                        chosenHero.userGuess(input.guesses);
                        chosenHero.hero.forEach(spelling);

                        if (spellCheck.join('') === wordDone.join('')) {
                            console.log("\nThat was incorrect...\n");
                            incorrectLetters.push(input.guesses);
                            guessCount--;
                        } else {
                            console.log("\nThat's correct!\n");
                            correctLetters.push(input.guesses);
                        };
                    };
                };
                // score update                
                chosenHero.log();
                console.log("Guesses left: " + guessCount);
                console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                if (guessCount > 0) {
                    play();
                } else {
                    losses++;
                    console.log("Sorry, you lose...\n");
                    console.log("Score is:\nWins: " + wins + "\nLoses: " + losses);
                    reset();
                };

                function spelling(key) {
                    spellCheck.push(key.guessed)
                };

            });

    } else {
        wins++;
        console.log("You Win!!\n");
        console.log("Score is:\nWins: " + wins + "\nLoses: " + losses);
        reset();
    }

    function checkDone(key) {
        wordDone.push(key.guessed);
    };
};

function reset() {
    inquirer
        .prompt([{
            type: "list",
            message: "Would you like to play again?",
            choices: ["Play again", "Exit"],
            name: "reset"
        }]).then(function (input) {
            if (input.reset === "Play again") {
                console.log("---------- new word ----------")
                solved = true;
                newHero();
                play();
            } else {
                return
            }
        })
}

play();