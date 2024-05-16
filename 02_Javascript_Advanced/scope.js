// global vs local scope
// any variable outside code block{} is said to be in global scope
// can be access anywhere

let names = 'bob';
function calculate() {
  console.log(names);
  names = 'orange';
}
calculate();

if (true) {
  console.log(names);
  names = 'banana';
}
console.log(names);

// local scope
// can not be access outside of the code blocks
