// The forEach() method calls a function for each element in an array.

`js
syntax
array.forEach(function(currentValue,index,arr))

function() --->	Required.
A function to run for each array element.

currentValue --->Required.
The value of the current element.

index --->Optional.
The index of the current element.

arr--->Optional.
The array of the current element.

return value ---> undefined
`;
let sum = 0;
const numbers = [23, 59, 80, 20, 10, 74, 88];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
  console.log(sum);
}

const numbers2 = [34, 56, 67, 23, 86];
numbers2.forEach(myFunction2);

function myFunction2(item, index, arr) {
  arr[index] = item * 100;
  console.log(arr);
}
