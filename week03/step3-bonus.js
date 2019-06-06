'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  // Replace this comment and the next line with your code
  let temp = {};
  for (let i = 0; i < arr.length; i++)
    temp[arr[i]] = true;
  let newTemp = [];
  for (let copy in temp)
    newTemp.push(copy);
  console.log(arr);
  return newTemp;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
