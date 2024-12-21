//// syntax

// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

// array.map(function (currentValue, index, array) {});

const numbers = [1, 2, 3, 4, 5];
const newArr = numbers.map(myFunction);

function myFunction(item, index) {
  console.log(index);
  return item * 10;
}
console.log(newArr);

const persons = [
  { firstName: 'Malcom', lastName: 'Reynolds' },
  { firstName: 'Morty', lastName: 'Smith' },
  { firstName: 'Rick', lastName: 'Sanchez' },
  { firstName: 'Beth', lastName: 'Smith' },
];

let ans = persons.map(getFullName);

function getFullName(item, index) {
  console.log(index);
  return [item.firstName, item.lastName];
}
console.log(persons);
console.log(ans);

let int = [1, 2, 3, 4, 5];
let doubled = int.map((x) => {
  return x * 2;
});

console.log(doubled);
