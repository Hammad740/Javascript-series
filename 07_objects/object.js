// creating object using object literal
let myObj = {
  name: 'Hammad',
  id: 101,
  roll: 5,
  city: 'Delhi',
  greet: () => {
    console.log('Hello');
  },
};
console.log(myObj);
console.log(myObj.name);
console.log(myObj['id']);
console.log(myObj['city']);
console.log(myObj['greet']);
console.log(myObj.greet());

const person = new Object();

person.name = 'Fazil';
person.age = 19;
console.log(person);
console.log(person['name']);

////  In JavaScript, Objects are King.
// If you Understand Objects, you Understand JavaScript.
// Objects are containers for Properties and Methods.

// Properties are named Values.

// Methods are Functions stored as Properties.

// Properties can be primitive values, functions, or even other objects.

// In JavaScript, almost "everything" is an object.

// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects
// All JavaScript values, except primitives, are objects.

// objects are pass by reference

let obj1 = {
  name: 'Hammad',
  id: 101,
  roll: 5,
  city: 'Delhi',
  greet: () => {
    console.log('Hello');
  },
};
let obj2 = obj1;
console.log(obj2);
obj2.job = 'student';
console.log(obj1);
