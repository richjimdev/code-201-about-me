'use strict';

console.log('js is linked');

//Function to make quoting user's answer easier.
var quickQuotes = function(answerInstert) {
  return '\'' + answerInstert.toUpperCase() + '\'';
};

//Created a couple functions to make the console logs more autonomous.
var questionToConsole = function(answerCheck, qAnswer) {
  if (answerCheck === true) {
    return console.log('User answered question ' + qNumber + ' with ' + quickQuotes(qAnswer) + '. This is CORRECT.');
  } else {
    return console.log('User answered question ' + qNumber + ' with ' + quickQuotes(qAnswer) + '. This is INCORRECT.');
  }
};

var answerUnusable = function(qAnswer) {
  return console.log('User answered question ' + qNumber + ' with ' + quickQuotes(qAnswer) + '. This is NOT an acceptable answer format. Question skipped.');
};

//These variable will be used to define my questions and make other statements easier
var q, qNumber;

//First prompt introducing user to the game, and getting their name.
var yourName = prompt('Welcome to my website! Before we begin let\'s play a quick game. First, tell me your name:');
console.log('User name is ' + yourName + '.');

//A statement allowing the user to quit the game or to play.
var readyPlay = confirm('Okay, ' + yourName + ', try to guess the following questions, using only "Yes/Y" or "No/N" answers. \n\nAre you ready to play? If not, hit cancel');
if (readyPlay === false) {
  alert('Aww :( well come again next time when you\'re ready to play!');
  console.log('User has decided not to play the game. The game has ended.');
} else {
  console.log('User has decided to play the game!');

  //First question
  qNumber = 1;
  var q1 = prompt('Let\'s start with an easy one. Is my name Richard?');
  q = q1;
  if (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y'){
    alert(quickQuotes(q) + ' is correct! Great start!');
    questionToConsole(true, q);
  } else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n'){
    alert(quickQuotes(q) + ' is incorrect. My name is indeed Richard.');
    questionToConsole(false, q);
  } else {
    alert(quickQuotes(q) + ' Is not an acceptable answer. Please answer the next question with "YES/Y" or "NO/N" only.');
    answerUnusable(q);
  }
  //Second question
  qNumber = 2;
  var q2 = prompt('Second question. Are my eyes blue?');
  q = q2;
  if (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y'){
    alert(quickQuotes(q) + ' is wrong! Unfortunately :( Let\'s continue.');
    questionToConsole(false, q);
  } else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n'){
    alert(quickQuotes(q) + ' is correct. My eyes are as dark as my soul. Let\'s continue.');
    questionToConsole(true, q);
  } else {
    alert(quickQuotes(q) + ' Is not an acceptable answer. Please answer the next question with "YES/Y" or "NO/N" only.');
    answerUnusable(q);
  }
  //Third question
  qNumber = 3;
  var q3 = prompt('Question 3. Do I like puppies?');
  q = q3;
  if (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y'){
    alert(quickQuotes(q) + '? You bet! Who doesn\'t love puppies?! Just two more questions');
    questionToConsole(true, q);
  } else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n') {
    alert(quickQuotes(q) + '? You\'re absolutely wrong, my friend. Puppies are fantastic! Just two more questions');
    questionToConsole(false, q);
  } else {
    alert(quickQuotes(q) + ' Is not an acceptable answer. Please answer the next question with "YES/Y" or "NO/N" only.');
    answerUnusable(q);
  }
  //Fourth question
  qNumber = 4;
  var q4 = prompt('Question numbero cuatro. Do I own a dog?');
  q = q4;
  if (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y'){
    alert(quickQuotes(q) + ' is unfortunately wrong :( As much as I love puppies I can\'t currently take care of one. Hang in there, one more question to go!');
    questionToConsole(false, q);
  } else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n') {
    alert(quickQuotes(q) + 'is correct. As much as I love puppies I can\'t currently take care of one. Hang in there, one more question to go!');
    questionToConsole(true, q);
  } else {
    alert(quickQuotes(q) + ' Is not an acceptable answer. Please answer the next question with "YES/Y" or "NO/N" only.');
    answerUnusable(q);
  }
  //Fifth question
  qNumber = 5;
  var q5 = prompt('Final question. Do I speak Spanish?');
  q = q5;
  if (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y'){
    alert(quickQuotes(q) + ' is correct! Muy bien, ' + yourName + '!');
    questionToConsole(false, q);
  } else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n') {
    alert(quickQuotes(q) + ' is not the right answer. Buena suerte la proxima vez, ' + yourName + '!');
    questionToConsole(true, q);
  } else {
    alert(quickQuotes(q) + ' Is not an acceptable answer. Please answer the next question with "YES/Y" or "NO/N" only.');
    answerUnusable(q);
  }
  //Last prompt
  alert('That\'s the end of the game, ' + yourName + '. Thanks for playing!');
  console.log('The game has concluded');
}

