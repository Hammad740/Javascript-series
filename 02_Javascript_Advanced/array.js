//? Array methods and properties

// https://www.w3schools.com/js/js_array_methods.asp

let names = ['john', 'bob', 'barry', 'olga', 'ben'];

//length
console.log(names.length);
//at
console.log(names.at(0));
console.log(names.at(2));
console.log(names[0]);
console.log(names[2]);
// The at() method returns the same as [].

// concat
//? The concat() method does not change the existing arrays. It always returns a new array.

//? The concat() method can take any number of array arguments.

const myGirls = ['Cecille', 'Lone'];
const myBoys = ['Emil', 'Tobias', 'Linus'];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//reverse
console.log(names.reverse());
// Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

//* pop and push

// The pop() method removes the last element from an array:
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits.pop());

console.log(fruits.push('kiwi'));
//? Appends new elements to the end of an array, and returns the new length of the array.

//shifting and unshifting
console.log(fruits.shift());
// ? Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(fruits.unshift('Lemon'));
//?  Elements to insert at the start of the array.Inserts new elements at the start of an array, and returns the new length of the array.

// must read for pass by value vs pass by reference

//// https://www.scaler.com/topics/javascript/pass-by-value-and-pass-by-reference/

//? Truthy vs Falsy Values

// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.
