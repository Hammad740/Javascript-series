const str = 'Hello world';
console.log(str.length);
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));

//The zero-based index of the desired character.
//Returns the character at the specified index.
console.log(str.charAt(3));

let str2 = `Hello world`;

//Converts all the alphabetic characters in a string to lowercase.
console.log(str2.toLowerCase());

//Converts all the alphabetic characters in a string to uppercase.
console.log(str2.toUpperCase());

console.log(str2.concat(str));

// includes
let sentence = 'Javascript is awesome';
console.log(sentence.includes('awesome'));

let str3 = '     Hello World!    ';
console.log(str3.trim());

// strings are immutable

let str4 = 'Hello';
str4[3] = 'W';
console.log(str4);

let firstName = 'Hammad';

let lastname = 'Ansari';
let fullName = `Hello ${firstName} ${lastname}`;
console.log(fullName);
