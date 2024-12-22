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
