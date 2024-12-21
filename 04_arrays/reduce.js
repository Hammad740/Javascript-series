//// array.reduce(function(accumulator,currentValue,index,array){},initialValue)

const { init } = require('express/lib/application');

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, (initialValue = 0));

console.log(sum);

let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let flattened = nestedArray.reduce(function (acc, curr) {
  return acc.concat(curr);
}, []);

console.log(flattened);

let words = ['Hello', 'World', 'JavaScript'];

let sentence = words.reduce(function (acc, curr) {
  return acc + ' ' + curr;
});
console.log(sentence);
