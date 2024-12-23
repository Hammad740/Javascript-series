function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function farewell() {
  console.log('Goodbye!..');
}

greet('Hammad', farewell);

function fetchData(callback) {
  setTimeout(() => {
    console.log('Data fetched');
    callback();
  }, 1000);
}

function displayData() {
  console.log('Displaying data');
}
fetchData(displayData);

// hof returning another function
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5));
