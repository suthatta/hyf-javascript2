'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) { numbers.push(i); }

  numbers.forEach(number => {
    if (number % 3 === 0) { threeCallback(number); }
    if (number % 5 === 0) { fiveCallback(number); }

  });


  // Replace this comment and the next line with your code
  console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log("Number is divisible by 3: " + number);
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log("Number is divisible by 5: " + number);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
