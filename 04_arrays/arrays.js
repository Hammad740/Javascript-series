//// Arrays

const cars = ['volvo', 'bmw', 'audi', 'mercedes'];

console.log(cars[0]);
console.log(cars[1]);

const fruits = [];
fruits[0] = 'apple';
fruits[1] = 'banana';
console.log(fruits);

// using new keyword
const cars2 = new Array('volvo', 'bmw', 'audi', 'mercedes');

console.log(cars2);
console.log(typeof cars2);
console.log(cars2.length);
console.log(cars2.sort());

////  Arrays are special kinds of objects.

//? Different array methods

const fruits2 = ['apple', 'banana', 'mango'];

fruits2.push('orange');
console.log(fruits2);
console.log(Array.isArray(fruits2));

//// toString() method
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(fruits2.toString());

//// at() method
// Returns the item located at the specified index.
let fruit2 = fruits2.at(2);
console.log(fruit2);
console.log(fruits2[2]);

// concat() method

let vegetables = ['carrot', 'tomato'];
let food = fruits2.concat(vegetables);
console.log(food);
