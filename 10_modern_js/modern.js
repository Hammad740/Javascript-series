// Object properties

const { set } = require('mongoose');

// traditional way
const name = 'Hammad';
const age = 22;

const person = { name: name, age: age };
console.log(person);

// modern way
const person2 = { name, age };
console.log(person2);

// computed properties
const key = 'email';
const person3 = { [key]: '1B0Cf@example.com' };
console.log(person3);

// destructing of arrays
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);

const [first, second, ...rest] = numbers;
console.log(first, second, rest);

let a = 10,
  b = 20;
[a, b] = [b, a];
console.log(a, b);

const [x = 10, y] = [3, 5];
console.log(x, y);

// destructing of objects
const person4 = {
  firstName: 'Hammad',
  currentAge: 22,
  email: '1B0Cf@example.com',
};

const { firstName, currentAge, email } = person4;
console.log(firstName, currentAge, email);
console.log(person4.currentAge);
console.log(person4['email']);

function printPerson({ firstName, currentAge }) {
  console.log(`${firstName} is ${age} years old`);
}

printPerson(person4);

function sum([a, b]) {
  return a + b;
}

console.log(sum([23, 53]));

// spread operator
//? copying an array
let fruits = ['apple', 'banana', 'mango'];

let newFruits = [...fruits];
console.log(newFruits);

//? copying an object
let person5 = { ...person4 };
console.log(person5);

//? merging two arrays or objects
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// converts string to array
const nation = 'INDIA';
console.log(nation.split(''));
// convert array to strings
const vegetables = ['carrot', 'tomato', 'potato'];
console.log(vegetables.join(' '));

let str = 'Hammad';
console.log(...str);
console.log([...str]);

function sumNum(...numbers) {
  console.log(typeof numbers);
  console.log(
    numbers.reduce((acc, curr) => acc + curr),
    0
  );
}
sumNum(1, 2, 3, 4, 5);

///padStart(length, padStr)
const companyName = 'Google';
console.log(companyName.padStart(10, '*'));
//padEnd(length, padStr)
console.log(companyName.padEnd(10, '*'));

// flattening an array of arrays
let nestedArray1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(nestedArray1.flat());

let nestedArray2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, [8, 9], 10],
];
console.log(nestedArray2.flat(2));

// callback hell

function data() {
  setTimeout(() => {
    console.log('Data fetched');
    setTimeout(() => {
      console.log('Data processed');
      setTimeout(() => {
        console.log('Data displayed');
      }, 1000);
    }, 1000);
  }, 1000);
}

data();
