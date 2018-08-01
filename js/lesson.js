'use strict';

console.log('js loaded');


// for(setup ; contition ; increment) {
//   do this thing until the condition is false
// }

// while (condition) {
//  keep going until the condition is false
// }

var fruits = ['banana', 'apple', 'watermelon', 'orange'];

console.log(fruits);

for (var i = 1; i <= 10; i = i + 1/* i++*/) {
  console.log('i is ' + i);

}

//same but as a while loop
var j = 1;
while (j <= 10) {
  console.log('j is ' + j);
  j++;
}

for (var k = 0; k < fruits.length; k++) {
  console.log(fruits[k]);
}

var ready = false;

for ()

// while (ready === false) {
//   ready = confirm('are you ready to see the page?');
// }