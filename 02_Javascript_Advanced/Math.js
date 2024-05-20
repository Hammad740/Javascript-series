// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)

console.log(Math.round(4.6), Math.round(4.5), Math.round(4.4));

console.table([
  Math.ceil(4.9),
  Math.ceil(4.7),
  Math.ceil(4.4),
  Math.ceil(4.2),
  Math.ceil(-4.2),
]);

console.log(
  Math.trunc(4.9),
  Math.trunc(4.7),
  Math.trunc(4.4),
  Math.trunc(4.2),
  Math.trunc(-4.2)
);

console.log(
  Math.floor(4.9),
  Math.floor(4.7),
  Math.floor(4.4),
  Math.floor(4.2),
  Math.floor(-4.2)
);

//Math.sign(x)
//? return if negative then -1,if postive then 1,if null or 0 then 0

console.log(Math.sign(-2));
console.log(Math.sign(-5));
console.log(Math.sign(0));
console.log(Math.sign(null));
console.log(Math.sign(3));

// Math.pow(x,y)

// Math.pow(x, y) returns the value of x to the power of y
console.log(Math.pow(8, 2));

//? Math.abs(x) returns the absolute (positive) value of x
console.log(Math.abs(-4.7));

//Math.sqrt(x) returns the square root of x
console.log(Math.sqrt(64));

//? Reference for date object -> https://www.w3schools.com/js/js_dates.asp
