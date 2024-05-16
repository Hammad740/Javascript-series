// https://www.w3schools.com/js/js_arrays.asp

////An array is a special variable, which can hold more than one value:
const cars = ['BMW', 'VOLVO', 'SAAB'];

console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
cars[0] = 'SEDAN';
console.log(cars);

// syntax
// const array_name = [item1, item2, ...];

// using the new keyword
const bikes = new Array('Apache', 'Splendor', 'Yamaha');
console.log(bikes);

// converting array to string
const fruits = ['banana', 'apple', 'pineapple'];
console.log(fruits.toString());

//// Arrays are objects
//* Arrays are special type of objects.The typeof operator in js returns object for arrays

// method to identify the array

console.log(Array.isArray(bikes));
