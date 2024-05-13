// // https://www.w3schools.com/js/js_variables.asp

//// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const

//// https://www.w3schools.com/js/js_let.asp

//// The let keyword was introduced in ES6 (2015)

//// Variables declared with let have Block Scope

//// Variables declared with let must be Declared before use

////  Variables declared with let cannot be Redeclared in the same scope

//// Naming variables in JavaScript
// Variable names must start with a letter, an underscore ( _ ) or a dollar sign ( $ ).
// Variable names cannot contain spaces.
// Variables cannot be the same as reserved keywords such as if or const .
// By convention, JavaScript variable names are written in camelCase.

var value = 'some value';
console.log(value);

let myName = 'john';
console.log(myName);

// using const - can't re-assign
const lastName = 'jordan';
console.log(lastName);

//// String concatenation-combine string values
//// `` - backticks (template strings) is easier option
const website = 'youtube';
const url = 'https://www.' + website + '.com';
console.log(url);

// how js is loosely typed language?
// Since JavaScript is a loosely typed language, you are not required to correctly predict the kind of data that will be kept in a variable. Depending on the information you supply to a variable (such as this ‘ ‘ or " " to signify string values), JavaScript will automatically type it.

//loosely typed= don't declare type

const number = 34;
const number2 = 2.45;
const number3 = '2.45';
console.log(number, number2, number3);

// +=,-=,*=,/=,++,--,%
// % operator returns the remainder after integer division
let no = 40;
no += 5;
console.log(no);
no -= 5;
console.log(no);
no *= 5;
console.log(no);
no++;
console.log(no);
no--;
console.log(no);

const slices = 100 % 6;
console.log(slices);

// https://www.w3schools.com/js/js_type_conversion.asp

// must read for type coercion in js
