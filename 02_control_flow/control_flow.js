let temp = 40;

if (temp > 30) {
  console.log('It is hot outside');
} else {
  console.log('It is not hot outside');
}

let num = 20;
if (num % 2 == 0) {
  console.log(num + ' is even');
} else {
  console.log(num + ' is odd');
}

// switch case

const expression = 'Papayas';
switch (expression) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.80 a pound.');
    break;
  case 'Papayas':
    console.log('Papayas are $2.07 a pound.');
    break;
  default:
    break;
}

//// while loop

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//// do while loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);

//// for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// for in loop
// to iterate the properties of an object

let person = {
  name: 'Hammad',
  age: 25,
  city: 'Delhi',
};

for (let k in person) {
  console.log(k + ': ' + person[k]);
}

// for of loop

let fruits = ['apple', 'banana', 'mango'];

for (let fruit of fruits) {
  console.log(fruit);
}
