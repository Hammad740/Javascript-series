// This function logs a greeting message to the console.

function myFunc() {
  // Log the greeting message
  console.log('Hello function');
}

// Call the function
myFunc();

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(100);
console.log(value.toFixed(2));

function add(a = 100, b = 121) {
  console.log(a + b);
}

add();
add(23);
add(34, 56);

//// IIFE
(function (a, b) {
  console.log(a * b);
})(231, 452);

//// function expression

let divide = function (a, b) {
  return a / b;
};

let ans = divide(10, 2);
console.log(ans);

//// Arrow functions

let names = () => {
  console.log('Hello');
};
names();

const mul = (a, b) => a * b;

console.log(mul(2, 3));

const square = (a) => a * a;
console.log(square(6));
