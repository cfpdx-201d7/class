'use strict';

var firstAnswer = prompt('Do you like cake?', 'Yes or No');
var lowerCaseAnswer = firstAnswer.toLowerCase();

console.log(firstAnswer);

if (lowerCaseAnswer === 'yes' || 'y') {
  console.log('answered yes');
} else if (lowerCaseAnswer == 'no') {
  console.log('Answered no');
} else {
  console.log('I dont even know');
}
