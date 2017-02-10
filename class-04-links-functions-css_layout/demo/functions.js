'use strict';
var greeting = 'GLOBAL HI';

function sayHi() {
  var greeting = 'LOCAL HI';
  console.log('from local: ', greeting);
}

sayHi();
console.log('from global: ', greeting);
