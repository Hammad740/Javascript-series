// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.

`js

Syntax:

(function (){ 
// Function Logic Here. 
})();`;

//? generally they are anonymous
(function () {
  let localVariable = 'This is a local variable';
  console.log(localVariable);
})();

// we can store them in a variable also

const result = (function (a, b) {
  return a + b;
})(500, 300);
console.log(result);
