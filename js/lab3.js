'use strict';

console.log('js is linked');

// var correctConsole = console.log('User answered question ' + allQs.length + ' with: \'' + q1 + ' correctly');
// var wrongConsole = console.log('User answered question ' + allQs.length + ' incorrectly');
var q;


// I need a loop that goes to the next question when it's answered correctly
// loop starts at 0
// loop goes through the question. User input is recorded
// User input is taken and checked for 3 conditions: is it yes/y n/n or other.
// If yes or no then taken to confirm either wrong or right answer
// if 'other' then loop until question is answered properly

//First prompt introducing user to the game, and getting their name.
// var yourName = prompt('Welcome to my website! Before we begin let\'s play a quick game. First, tell me your name:');
// console.log('User name is ' + yourName + '.');

////////////////A question allowing the user to quit the game or to play.
// var readyPlay = confirm('Okay, ' + yourName + ', try to guess the following questions, using only "Yes/Y" or "No/N" answers. \n\nAre you ready to play? If not, hit cancel');
// if (readyPlay === false) {
//   alert('Aww :( well come again next time when you\'re ready to play!');
//   console.log('User has decided not to play the game. The game has ended.');
// } else {
//   console.log('User has decided to play the game!');

// [q2, false],
// [q3, true],
// [q4, false],
// [q5, true]
var q1 = 'Is my name Richard?';
var q2 = 'Second question. Are my eyes blue?';
var q3 = 'Yes is true';

var allQs = [
  [q1, true],
  [q2, false],
  [q3, true]
];

console.log(allQs[0][1]);

// var q1 = prompt(allQs[0]).toLowerCase();
// q = q1;
var score = 0

for (var qNum = 0; qNum < allQs.length; qNum++) {
  var tryAgain = true;
  while (tryAgain === true && qNum < allQs.length){
    q = prompt(allQs[qNum][0]).toLowerCase();
    if (q === 'yes' || q === 'y' || q === 'n' || q === 'no') {
      tryAgain = false;
      if ((q === 'yes' || q === 'y' && allQs[qNum][1] === true) || (q === 'no' || q === 'n' && allQs[qNum][1] === false)) {
        console.log('allQs check is: ' + allQs[qNum][1]);
        alert('Correct!');
        score++;
        //print to console
      } else {
        alert('WRONG!');
        //print to console
      }
      console.log('qNum is: ' + qNum);
    } else {
      alert('Please only use: y, yes, n, or no as answers. Try again.');
      console.log('User submitted an answer in the wrong format.');
      tryAgain = true;
    }
  }
}

alert('Your final score is ' + score + ' out of 7');

// } else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n'){
//   alert(quickQuotes(q) + ' is incorrect. My name is indeed Richard.');
//   //print to console
// } else {
//   alert(quickQuotes(q) + ' Is not an acceptable answer. Please answer the next question with "YES/Y" or "NO/N" only.');
//   answerUnusable(q);
// }

//   //First question

//   //Second question
//   var q2 = prompt('Second question. Are my eyes blue?');
//   q = q2;
//   if (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y'){
//     alert(quickQuotes(q) + ' is wrong! Unfortunately :( Let\'s continue.');
//     questionToConsole(false, q);
//   } else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n'){
//     alert(quickQuotes(q) + ' is correct. My eyes are as dark as my soul. Let\'s continue.');
//     questionToConsole(true, q);
//   } else {
//     alert(quickQuotes(q) + ' Is not an acceptable answer. Please answer the next question with "YES/Y" or "NO/N" only.');
//     answerUnusable(q);
//   }
//   //Third question
//   var q3 = prompt('Question 3. Do I like puppies?');
//   q = q3;
//   if (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y'){
//     alert(quickQuotes(q) + '? You bet! Who doesn\'t love puppies?! Just two more questions');
//     questionToConsole(true, q);
//   } else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n') {
//     alert(quickQuotes(q) + '? You\'re absolutely wrong, my friend. Puppies are fantastic! Just two more questions');
//     questionToConsole(false, q);
//   } else {
//     alert(quickQuotes(q) + ' Is not an acceptable answer. Please answer the next question with "YES/Y" or "NO/N" only.');
//     answerUnusable(q);
//   }
//   //Fourth question
//   var q4 = prompt('Question numbero cuatro. Do I own a dog?');
//   q = q4;
//   if (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y'){
//     alert(quickQuotes(q) + ' is unfortunately wrong :( As much as I love puppies I can\'t currently take care of one. Hang in there, one more question to go!');
//     questionToConsole(false, q);
//   } else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n') {
//     alert(quickQuotes(q) + 'is correct. As much as I love puppies I can\'t currently take care of one. Hang in there, one more question to go!');
//     questionToConsole(true, q);
//   } else {
//     alert(quickQuotes(q) + ' Is not an acceptable answer. Please answer the next question with "YES/Y" or "NO/N" only.');
//     answerUnusable(q);
//   }
//   //Fifth question
//   var q5 = prompt('Final question. Do I speak Spanish?');
//   q = q5;
//   if (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y'){
//     alert(quickQuotes(q) + ' is correct! Muy bien, ' + yourName + '!');
//     questionToConsole(false, q);
//   } else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n') {
//     alert(quickQuotes(q) + ' is not the right answer. Buena suerte la proxima vez, ' + yourName + '!');
//     questionToConsole(true, q);
//   } else {
//     alert(quickQuotes(q) + ' Is not an acceptable answer. Please answer the next question with "YES/Y" or "NO/N" only.');
//     answerUnusable(q);
//   }
//   //Last prompt
//   alert('That\'s the end of the game, ' + yourName + '. Thanks for playing!');
//   console.log('The game has concluded');
// }

