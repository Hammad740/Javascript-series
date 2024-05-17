//? The filter() method creates a new array filled with elements that pass a test provided by a function.

//? The filter() method does not execute the function for empty elements.

//?  The filter() method does not change the original array.

`js
syntax
array.filer(function(currentValue,index,arr))

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
  { firstName: 'Malcon', lastName: 'Reynolds', age: 24, position: 'developer' },
  { firstName: 'Kaylee', lastName: 'Fryee', age: 27, position: 'designer' },
  { firstName: 'Jaynee', lastName: 'Cobb', age: 40, position: 'boss' },
  { firstName: 'Mary', lastName: 'Cobb', age: 25, position: 'developer' },
];

const youngPeople = persons.filter(function (person) {
  return person.age <= 25;
});
console.log(youngPeople);

const developers = persons.filter(function (person) {
  return person.position == 'developer';
});
console.log(developers);
