'use strict';
console.log('js is linked');

var q;
var score = 0;
var q1 = 'Is my name Richard?';
var q2 = 'Second question. Are my eyes blue?';
var q3 = 'Do I like puppies?';
var q4 = 'Do I have long hair?';
var q5 = 'Final question. Do I speak Spanish?';

// Array holding all my questions and wether a  'y' answer is correct or not
var allQs = [
  [q1, true],
  [q2, false],
  [q3, true],
  [q4, false],
  [q5, true]
];

var pets = ['dog', 'cat', 'fish', 'turtle', 'monkey', 'lizard', 'parrot'];

// This function processes the first 5 questions
function questionProcess(q){
  if (q === 'yes' || q === 'y' || q === 'n' || q === 'no') {
    tryAgain = false;
    if (((q === 'yes' || q === 'y') && allQs[i][1] === true) || ((q === 'no' || q === 'n') && allQs[i][1] === false)) {
      alert('Correct!');
      score++;
      console.log('User answered question ' + (i + 1) + ' with \'' + q + '\'. This is CORRECT.');
    } else {
      alert('Wrong!');
      console.log('User answered question ' + (i + 1) + ' with \'' + q + '\'. This is INCORRECT.');
    }
  } else {
    alert('Please only use: y, yes, n, or no as answers. Try again.');
    console.log('User submitted an answer in the wrong format.');
    tryAgain = true;
  }
}

// function to process question 6
function q6Checker(q6){

  if (q6 === null)
  {
    an6 = true;
    alert('You skipped the question! You lost a point!');
    console.log('User hit "cancel" and has skipped question 6.');
  } else if (q6 === '') {
    alert('Please enter an answer or hit "cancel" to quit this question.');
    console.log('User did not enter any data.');
  } else if (parseInt(q6) > randoNum)
  {
    q6Tries--;
    alert('Too high! ' + q6Tries + ' attempt/s left.');
    console.log('User guessed too high.');
  } else if (parseInt(q6) < randoNum)
  {
    q6Tries--;
    alert('Too low! ' + q6Tries + ' attempt/s left.');
    console.log('User guessed too low.');
  } else if (parseInt(q6) === randoNum)
  {
    alert('Congrats! ' + q6 + ' was the right answer!');
    console.log('User guessed the right number. The answer was ' + randoNum + '.');
    an6 = true;
    score++;
  } else
  {
    alert('\'' + q6 + '\' is not a valid response. Please enter a number between 1 and 25');
    console.log('User entered an invalid answer');
  }

}

// function to process question 7
function q7Checker(q7){
  if (q7 === null) {
    an7 = true;
    alert('You skipped the question! You lost a point!');
    console.log('User hit "cancel" and has skipped question 7.');
  } else if (q7 === '') {
    alert('Please enter an answer or hit "cancel" to quit this question.');
    console.log('User did not enter any data.');
  } else if (pets.includes(q7) === true) {
    alert('Congrats, ' + q7 + ' is correct!');
    console.log('User guessed a right answer.');
    an7 = true;
    score++;
  } else {
    q7Tries--;
    alert('\'' + q7 + '\' is incorrect. You have ' + q7Tries + ' attempts left.');
    console.log('User entered a wrong answer');
  }
}


var yourName = prompt('Welcome to my website! Before we begin let\'s play a quick game. First, tell me your name:');
console.log('User name is ' + yourName + '.');

// Give the user the option to opt out of the game
var readyPlay = confirm('Okay, ' + yourName + ', try to guess the following questions, using only "Yes/Y" or "No/N" answers. \n\nAre you ready to play? If not, hit cancel');
if (readyPlay === false) {
  alert('Aww :( well come again next time when you\'re ready to play!');
  console.log('User has decided not to play the game. The game has ended.');
} else {
  console.log('User has decided to play the game!');

  // Loop that will run the first 5 questions
  for (var i = 0; i < allQs.length; i++) {
    var tryAgain = true;
    while (tryAgain === true && i < allQs.length) {
      q = prompt(allQs[i][0]).toLowerCase();
      questionProcess(q);
    }
  }

  alert('Great job! Now we\'ll do a couple of different questions.');

  //Question 6
  var an6;
  var randoNum = Math.floor(Math.random() * 25) + 1;
  // console.log('Number generated is ' + randoNum); < if I want to see the number in the log.
  var q6Tries = 4;

  // Question 6 function call/loop
  do {
    var q6 = prompt('What number (between 1-25) am I thinking of right now? You have ' + q6Tries + ' tries!');
    an6 = false;
    q6Checker(q6);
  } while (an6 === false && q6Tries > 0);

  var q7Tries = 6;
  var an7;

  // Question 7 function call/loop
  do {
    var q7 = prompt('Now try to guess a type of pet I have owned. You have ' + q7Tries + ' attempts.').toLowerCase();
    an7 = false;
    q7Checker(q7);
  } while (an7 === false && q7Tries > 0);

  alert('The possible anwers were: dog, cat, fish, turtle, monkey, lizard and parrot.');

  // Final alert plus score
  alert('This concludes the game, ' + yourName + '. Your final score is ' + score + ' out of 7');
  console.log('User\'s final score is: ' + score + ' out of 7');
}