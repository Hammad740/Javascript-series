//? The find() method returns the value of the first element that passes a test.

//? The find() method executes a function for each array element.

//? The find() method returns undefined if no elements are found.

//? The find() method does not execute the function for empty elements.

//? The find() method does not change the original array.

`js
syntax
array.find(function(currentValue,index,arr))

function() --->	Required.
A function to run for each array element.

currentValue --->Required.
The value of the current element.

index --->Optional.
The index of the current element.

arr--->Optional.
The array of the current element.

`;

const persons = [
  {
    firstName: 'Malcon',
    lastName: 'Reynolds',
    age: 24,
    position: 'developer',
    id: 1,
  },
  {
    firstName: 'Kaylee',
    lastName: 'Fryee',
    age: 27,
    position: 'designer',
    id: 2,
  },
  { firstName: 'Jaynee', lastName: 'Cobb', age: 40, position: 'boss', id: 3 },
  {
    firstName: 'Mary',
    lastName: 'Cobb',
    age: 25,
    position: 'developer',
    id: 4,
  },
];

const person = persons.find(function (person) {
  return person.id == 2;
});

console.log(person);
