'use strict';
console.log('js is linked');

var q;
var score = 0;
var q1 = 'Is my name Richard?';
var q2 = 'Second question. Are my eyes blue?';
var q3 = 'Do I like puppies?';
var q4 = 'Do I have long hair?';
var q5 = 'Final question. Do I speak Spanish?';

var allQs = [
  [q1, true],
  [q2, false],
  [q3, true],
  [q4, false],
  [q5, true]
];

var yourName = prompt('Welcome to my website! Before we begin let\'s play a quick game. First, tell me your name:');
console.log('User name is ' + yourName + '.');

var readyPlay = confirm('Okay, ' + yourName + ', try to guess the following questions, using only "Yes/Y" or "No/N" answers. \n\nAre you ready to play? If not, hit cancel');
if (readyPlay === false) 
{
  alert('Aww :( well come again next time when you\'re ready to play!');
  console.log('User has decided not to play the game. The game has ended.');
} else
{
  console.log('User has decided to play the game!');
  // Loop that will run the first 5 questions
  for (var qNum = 0; qNum < allQs.length; qNum++)
  {
    var tryAgain = true;
    while (tryAgain === true && qNum < allQs.length)
    {
      q = prompt(allQs[qNum][0]).toLowerCase();
      if (q === 'yes' || q === 'y' || q === 'n' || q === 'no')
      {
        tryAgain = false;
        if (((q === 'yes' || q === 'y') && allQs[qNum][1] === true) || ((q === 'no' || q === 'n') && allQs[qNum][1] === false))
        {
          alert('Correct!');
          score++;
          console.log('User answered question ' + (qNum + 1) + ' with \'' + q + '\'. This is CORRECT.');
        } else {
          alert('Wrong!');
          console.log('User answered question ' + (qNum + 1) + ' with \'' + q + '\'. This is INCORRECT.');
        }
      } else {
        alert('Please only use: y, yes, n, or no as answers. Try again.');
        console.log('User submitted an answer in the wrong format.');
        tryAgain = true;
      }
    }
  }
  //Question 6


  alert('Your final score is ' + score + ' out of 7');
  console.log('User\'s final score is: ' + score + ' out of 7');
}