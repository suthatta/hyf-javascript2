'use strict';

function foo(func) {
  return function (print) {
    return func + print;
  };
}
function bar() {
  console.log('Hello, I am bar!');
}
foo(bar());

// Do not change or remove anything below this line
module.exports = foo;

