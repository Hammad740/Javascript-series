// concatenation

let firstName = 'Hammad';
let lastName = 'Ansari';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// coercion

// implicit conversion
let result = 'The answer is: ' + 42;
console.log(result);
console.log(typeof result);

console.log(10 + '20');
console.log(9 - '5');

console.log(true + 1);
console.log(true + 11);
console.log(true - 2);
console.log(false - 1);
console.log(false + 10);

// explicit coercion

let str = '123';
let num = Number(str);
console.log(num);
