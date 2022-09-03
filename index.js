var readlineSync = require("readline-sync");

var score = 0;
let username = null;
// data of high score
var highScores = [
  {
    name: "uday",
    score: 10,
  }, {
    name: "gitu",
    score: 9,
  },
  {
    name: "surat",
    score: 8,
  },
  {
    name: "sumir",
    score: 6,
  },
  {
    name: "amolak",
    score: 4,
  },]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "jamshedpur"
}, {
  question: "My favorite superhero would be? ",
  answer: "superman"
},
{
  question: "Where do I work? ",
  answer: "home"
}, {
  question: "what should i like to play?",
  answer: "chess"
}, {
  question: "what is my hobbie?",
  answer: "listning music"
}, {
  question: "I'm inlove yes or no?",
  answer: "no"
}, {
  question: "what is favourite color?",
  answer: "skyblue"
}, {
  question: "what is favourite drink?",
  answer: "slice"
}, {
  question: "which bike i like?",
  answer: "harley davidson"
}, {
  question: "which car i like?",
  answer: "volvo"
}];
function welcome() {
  userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " DO YOU KNOW Sant surat?");
}


// play function
function play(question, answer) {
  userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");
    score = score - 1;
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
  // console.log("current score: ", score);
  // console.log("-------------")
}

function showScores() {
  console.log(userName + " Your final SCORED: ", score);
  highScores.map(score => console.log(score.name, " : ", score.score))
  checkForHighScore();
};

function checkForHighScore() {
  if (highScores[0].score === score) {
    console.log("You made a tie with " + highScores[0].name)
  } else if (score === 9) {
    console.log("You are just behind to " + highScores[0].name + " and You made a tie with " + highScores[1].name)
  } else if (score === 8) {
    console.log("You are just behind to " + highScores[1].name + " and You made a tie with " + highScores[2].name)
  } else if (score === 7) {
    console.log("You are just behind to " + highScores[2].name + " and You made a tie with " + highScores[3].name)
  } else if (score === 6) {
    console.log("You are just behind to " + highScores[2].name + " and you made a tie with " + highScores[3].name)
  } else if (score === 4) {
    console.log("You are just behind to " + highScores[3].name + " and You made a tie with " + highScores[4].name)
  } else if (score < 4 && score > 0) {
    console.log("You are just behind to " + highScores[4].name)
  } else {
    console.log("you are not just behind by anyone ")
  }
};
//console.log(highScores)
welcome();
game();
showScores();