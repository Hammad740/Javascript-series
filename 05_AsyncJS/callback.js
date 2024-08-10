//! in js functions are first class objects

//// synchronous callback
function greet(name) {
  console.log(`Hello ${name}`);
}
function higherOrderFunctions(callback) {
  const name = 'Hammad';
  callback(name);
}
higherOrderFunctions(greet);

//// asynchronous callback

setTimeout(greet, 2000, 'Afridi');
