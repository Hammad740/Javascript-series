//// data types

//number
let x = 50;
console.log(x);

// string
let firstName = 'John';
console.log(firstName);

// boolean
let isTrue = true;
console.log(isTrue);

//null
let value = null;
console.log(value);

//undefined
let someVar;
console.log(someVar);

//symbol
let symbolVar = Symbol('fruit');
console.log(symbolVar);

//bigint
let a = BigInt(100);
console.log(a);

// non primitive data types
let obj = {
  age: 24,
  name: 'John',
};
console.log(obj);

console.log(typeof null);
console.log(typeof undefined);

//// The reason typeof null returns "object" is due to a legacy bug from the early implementation of JavaScript. It's a quirk that persists today for compatibility reasons. To properly check for null, use the === null check instead of typeof.

// parseint

let str = '100';
console.log(parseInt(str));

let str2 = '100.56';
console.log(parseFloat(str2));
