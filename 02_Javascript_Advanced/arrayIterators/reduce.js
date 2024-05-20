//? The reduce() method executes a reducer function for array element.

//? The reduce() method returns a single value: the function's accumulated result.

//? The reduce() method does not execute the function for empty array elements.

//? The reduce() method does not change the original array.

`syntax
array.reduce(function(accumalator,currentValue,currentIndex,arr),initial value)

function()--->Required.
A function to be run for each element in the array.

Reducer function parameters:
accumulator---> Required.
The initialValue, or the previously returned value of the function.

currentValue--->Required.
The value of the current element.

currentIndex--->Optional.
The index of the current element.
arr	Optional.

The array the current element belongs to.
initialValue--->Optional.
A value to be passed to the function as the initial value.


Return Value
The accumulated result from the last call of the callback function.


`;

// note
// At the first callback, there is no return value from the previous callback.

// Normally, array element 0 is used as initial value, and the iteration starts from array element 1.

// If an initial value is supplied, this is used, and the iteration starts from array element 0.

const items = [
  { name: 'Rice', price: 10 },
  { name: 'Chicken', price: 25 },
  { name: 'Wheat', price: 15 },
  { name: 'Oil', price: 12 },
];
let totalPrice = 0;
items.forEach(function (item) {
  totalPrice += item.price;
});
console.log(totalPrice);

const result = items.reduce(function (total, item) {
  console.log(`Total:${total}`);
  console.log(`Item:${item.price}`);
  return total + item.price;
}, 0);

console.log(result);

// second example

const fruits = [
  'apple',
  'banana',
  'orange',
  'apple',
  'orange',
  'banana',
  'banana',
];
const count = fruits.reduce(function (accumalator, fruit) {
  accumalator[fruit] = (accumalator[fruit] || 0) + 1;
  return accumalator;
}, {});

console.log(count);

// example 3
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = nestedArray.reduce(
  (accumalator, currnet) => accumalator.concat(currnet),
  []
);
console.log(flattenedArray);
