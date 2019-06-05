'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log("x: " + x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
/*
Function f1 passed argument from x to val and print x out.
But x was declare by const and we cannot change the x value. that why the result printed 9.

Function f2 passed argument from object y by using construction val.x
Actaully we can not change const value. But by using construction can change the value of x.
and print out x:10
*/
