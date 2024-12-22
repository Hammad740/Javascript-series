function multiply(a, b) {
  return a * b;
}

function applyOperation(a, b, operation) {
  return operation(a, b);
}

let result = applyOperation(34, 22, multiply);
console.log(result);
