let hour = 4;
if (hour < 18) {
  greeting = 'Good Day';
}

console.log(greeting);

let age = 20;
if (age < 18) {
  console.log('You are not an adult');
} else if (age >= 18 && age < 21) {
  console.log('You are an adult, but you cannot drink alcohol.');
} else if (age >= 21 && age < 65) {
  console.log('You are an adult and you can drink alcohol.');
} else {
  console.log('You are an adult');
}

/**
 switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
 */

/**
 
 This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.
 */
console.log(new Date().getDay());
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    console.log(day);
    break;
  case 0:
    day = 'Sunday';
    console.log(day);
    break;
  case 1:
    day = 'Monday';
    console.log(day);
    break;
  case 2:
    day = 'Tuesday';
    console.log(day);
    break;
  case 3:
    day = 'Wednesday';
    console.log(day);
    break;
  case 4:
    day = 'Thursday';
    console.log(day);
    break;
  case 5:
    day = 'Friday';
    console.log(day);
    break;
  case 6:
    day = 'Saturday';
    console.log(day);
    break;

  default:
    console.log('hh');
    break;
}

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = 'Soon it is Weekend';
    break;
  case 0:
  case 6:
    text = 'It is Weekend';
    break;
  default:
    text = 'Looking forward to the Weekend';
}

// == checks only value
// === checks value and type

const num1 = 6;
const num2 = '6';

const value1 = num1 == num2;
const value2 = num1 === num2;
console.log(value1);
console.log(value2);
