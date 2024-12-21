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
console.log(typeof ('5' - 3));

console.log(true + 1);
console.log(true + 11);
console.log(true - 2);
console.log(false - 1);
console.log(false + 10);
console.log('******');
console.log(true + true);
console.log(true - false);
console.log(true * true);

// explicit coercion

let str = '123';
let num = Number(str);
console.log(num);

/// operators
console.log('***************');

console.log(2 * 3);
console.log(3 ** 4);
console.log(5 % 3);
console.log(5 / 3);

let ans = 0.1 + 0.2;
console.log(ans);
let ans2 = 0.2 + 0.2;
console.log(ans2);

//// 0.1 + 0.2 results in 0.30000000000000004 due to floating-point precision errors.
//// 0.2 + 0.2 results in 0.4, which doesn't have the same issue.

// loose equality
console.log(1 == '1');
console.log(true == 1);
console.log(null == undefined);

// strict equality
console.log(1 === '1');
console.log(true === 1);
