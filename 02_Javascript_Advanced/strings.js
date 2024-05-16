// ? https://www.w3schools.com/js/js_string_methods.asp

let text = 'Peter Jordan';
let result = text.length;
console.log(result);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(result - 1)); //// Returns the character at the specified index.
console.log(text.indexOf('e')); //// Returns the position of the first occurrence of a substring.
console.log(text.trim());
//// Removes the leading and trailing white space and line terminator characters from a string.
console.log(text.slice(0, 2));

//* Template Literals
//? Backtick character ``
//? Interpolation ${}-insert expression(value)
const name = 'john';
const age = 25;
const sentence = `Hey it's ${name} and i am ${age} years old`;
console.log(sentence);
