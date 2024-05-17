//? Higher order functions and callback
function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

add(2, 4, function (val) {
  console.log(val);
});

// function as an argument
function greet(name, greetingFunction) {
  return greetingFunction(name);
}

function sayHello(name) {
  return `Hello,${name}`;
}

function sayGoodbye(name) {
  return `Goodbye,${name}!`;
}

console.log(greet('Alice', sayHello));
console.log(greet('Alice', sayGoodbye));

//// function returning a function

function createMultipler(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = createMultipler(2);
const triple = createMultipler(3);

console.log(double(5));
console.log(triple(10));
