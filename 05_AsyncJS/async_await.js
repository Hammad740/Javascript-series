//? async
//! The async keyword is used to declare async functions
//! Async functions are functions that are instances of the AsyncFunction constructor
//! Unlike normal functions,async functions always return a promise

function greet() {
  return 'hello';
}
const a = greet();
console.log(a);

async function greet1() {
  return 'hello';
}
const b = greet1();
console.log(b);

//! await keyword can be put in front of any async promise based function  to pause your code until that promise settles and returns its result
//! await only works inside async functions

async function greet2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 2000);
  });
  let result = await promise;
  console.log(result);
}

greet2();
