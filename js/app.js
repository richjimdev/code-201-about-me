'use strict';

console.log('js is linked');

//Function to make quoting user's answer easier.
var quickQuotes = function(answerInstert) {
  return '\'' + answerInstert.toUpperCase() + '\'';
};

var answerCheck;

var questionToConsole = function(answerCheck, qNumber, qAnswer) {
  if (answerCheck === true) {
    return console.log('User answered question ' + qNumber + ' with ' + quickQuotes(qAnswer) + '. This is correct.');
  } else {
    return console.log('User ');
  }
};

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
  var q1 = prompt('Let\'s start with an easy one. Is my name Richard?');
  if (q1.toLowerCase() === 'yes' || q1.toLowerCase() === 'y'){
    alert(quickQuotes(q1) + ' is correct! Great start!');
    //console.log('User answered question 1 correctly.');
    questionToConsole(true, 1, q1);
  } else {
    alert(quickQuotes(q1) + ' is incorrect. My name is indeed Richard.');
    console.log('User answered question 1 incorrectly.');
  }
  //Second question
  var q2 = prompt('Second question. Are my eyes blue?');
  if (q2.toLowerCase() === 'yes' || q2.toLowerCase() === 'y'){
    alert(quickQuotes(q2) + ' is wrong! Unfortunately :( Let\'s continue.');
    console.log('User answered question 2 incorrectly.');
  } else {
    alert(quickQuotes(q2) + ' is correct. My eyes are as dark as my soul. Let\'s continue.');
    console.log('User answered question 2 correctly.');
  }
  //Third question
  var q3 = prompt('Question 3. Do I like puppies?');
  if (q3.toLowerCase() === 'yes' || q3.toLowerCase() === 'y'){
    alert(q3 + '? You bet! Who doesn\'t love puppies?! Just two more questions');
    console.log('User answered question 3 correctly.');
  } else {
    alert(quickQuotes(q3) + '? You\'re absolutely wrong, my friend. Puppies are fantastic! Just two more questions');
    console.log('User answered question 3 incorrectly.');
  }
  //Fourth question
  var q4 = prompt('Question numbero cuatro. Do I own a dog?');
  if (q4.toLowerCase() === 'yes' || q4.toLowerCase() === 'y'){
    alert(quickQuotes(q4) + ' is unfortunately wrong :( As much as I love puppies I can\'t currently take care of one. Hang in there, one question to go!');
    console.log('User answered question 4 incorrectly.');
  } else {
    alert(quickQuotes(q4) + '? You\'re absolutely wrong, my friend. Puppies are fantastic! Hang in there, one question to go!');
    console.log('User answered question 3 correctly.');
  }
}

