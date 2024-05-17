//? map() creates a new array from calling a function for every array element.

//? map() does not execute the function for empty elements.

//?  map() does not change the original array

` Syntax
array.map(function(cuurentValue,index,arr))

function()--->Required.
A function to be run for each array element.

currentValue--->Required.
The value of the current element.

index---> Optional.
The index of the current element.

arr--->Optional.
The array of the current element.
`;

const persons = [
  { firstName: 'Malcon', lastName: 'Reynolds' },
  { firstName: 'Kaylee', lastName: 'Fryee' },
  { firstName: 'Jaynee', lastName: 'Cobb' },
];

x = persons.map(getFullName);

function getFullName(item) {
  return [item.firstName, item.lastName].join(' ');
}
console.log(x);
