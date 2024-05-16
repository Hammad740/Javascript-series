//? A js function is a block of code designed to perform a particular task

// syntax
// function name(parameter1,parameter2,parameter3...){
//     // code to be executed
// }

// function declaration
function myFunction() {
  let a = 10,
    b = 20;
  console.log(a + b);
}
// function call
myFunction();

//? parmeters=> when we declare or define the functio.They are the placeholders
//? arguments=>when we invoke/call/or run the function

function myName(name) {
  console.log('Hello there ' + name);
}
myName('Anna');

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
let value = toCelsius(100);
console.log(value);

// Syntax for Function Declaration:

// function functionName(x, y) { statements... return (z) };

// Syntax for Function Expression (anonymous):

// let variableName = function(x, y) { statements... return (z) };

const add = function addValues(num1, num2) {
  return num1 + num2;
};
let x = add(5, 6);
console.log(x);

//? anonymous function
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(34, 67));
