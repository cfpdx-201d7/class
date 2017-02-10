// function sum() {
//   var result = 2 + 4;
//   var message;

//   if (result > 5) {
//     message = 'WHOA THATS HUGE';
//   } else {
//     message = 'kinda small';
//   }

//   return [result, message];
// }

// var firstSumArray = sum();
// var firstResult = firstSumArray[0];

// var secondSumArray = sum();
// var secondResult = secondSumArray[0];

// var megaSum = secondResult + firstResult;


function sum(firstValue, secondValue) {
  var result = firstValue + secondValue;
  var message = 'some message';

  return [result, message];
}



var megaSum = sum(sum(2, 2)[0], sum(3, 3)[0])[0];
