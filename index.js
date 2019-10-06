// the counters starting points
var wins = 0;
var losses = 0;
var guessCount = 10;


// letters in array
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// words in array
var words = ["hawkman","aquaman","batman","superman","wonder woman", "green arrow", "captain america", "daredevil", "falcon", "hulk", "ironman", "thor", "robin", "storm", "war machine", "doctor strange", "spiderman"];

var theHero = words[Math.floor(Math.random() * words.length)];


inquirer
.prompt([
    type = "input",
    message = "guess a letter in the word."
    name = "guesses"
  ])
 