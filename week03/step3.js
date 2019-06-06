'use strict';

function createBase(base) {
  // Replace this comment and the next line with your code
  function addY(y) {
    return base + y;
  }
  base = addY(0);
  console.log(base);
  return addY;
}



let addSix = createBase(6); //
//console.log(typeof addSix);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
