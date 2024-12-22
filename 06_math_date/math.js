// math object is a built in js object used for mathematical calculations
//// math object methods

console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LN2);

// Math.round() method rounds a number to the nearest integer
console.log(Math.round(4.9));
console.log(Math.round(4.1));

// Math.ceil() method rounds a number up to the nearest integer
console.log(Math.ceil(4.1));
console.log(Math.ceil(5.3));

// Math.floor() method rounds a number down to the nearest integer

console.log(Math.floor(4.9));
console.log(Math.floor(3.1));

// Math.trunc() returns the integer part of x

console.log(Math.trunc(4.9));
console.log(Math.trunc(3.1));

// Math.sign() returns the sign of a number
console.log(Math.sign(-4));
console.log(Math.sign(5.2));

// Math.pow() returns the value of x to the power of y

console.log(Math.pow(2, 3));

// Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());
let x = Math.random() * 10;
console.log(x.toFixed(2));
console.log(x.toPrecision(5));
