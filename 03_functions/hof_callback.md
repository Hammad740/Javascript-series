### **Callbacks in JavaScript**

A **callback** is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are often used for asynchronous operations (like handling user input, fetching data from a server, or performing file I/O), but they can also be used in synchronous code.

**Key points about Callbacks:**

- They allow you to control the flow of your program by executing code after a certain task is completed.
- Callbacks are used in asynchronous functions, for example, with `setTimeout`, `fetch`, or `addEventListener`.

### **Example of a Callback:**

```javascript
function greet(name, callback) {
  console.log('Hello, ' + name);
  callback(); // This is the callback function
}

function farewell() {
  console.log('Goodbye!');
}

greet('Hammad', farewell);
```

**Explanation:**

- The `greet` function takes two arguments: a `name` and a `callback` function.
- After logging the greeting message, it calls the `callback` function (`farewell`) to log "Goodbye!".

### **Asynchronous Example of Callbacks:**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log('Data fetched!');
    callback(); // Once data is fetched, execute callback
  }, 1000);
}

function displayData() {
  console.log('Displaying data...');
}

fetchData(displayData); // "Data fetched!" will be logged after 1 second, then "Displaying data..." will be logged
```

**Explanation:**

- `fetchData` simulates fetching data with a delay (using `setTimeout`).
- After the data is fetched (after 1 second), it calls the `displayData` callback.

### **Higher-Order Functions (HOF) in JavaScript**

A **Higher-Order Function (HOF)** is a function that:

1. Takes one or more functions as arguments.
2. Returns a function as its result.

In simple terms, an HOF is a function that can operate on other functions—either by taking them as arguments or returning them.

**Key points about HOFs:**

- They are commonly used in JavaScript to work with functions in a flexible and modular way.
- Functions like `map`, `filter`, and `reduce` in arrays are built-in higher-order functions.

### **Example of a Higher-Order Function:**

```javascript
function multiply(a, b) {
  return a * b;
}

function applyOperation(a, b, operation) {
  return operation(a, b); // operation is the HOF argument (callback)
}

console.log(applyOperation(2, 3, multiply)); // 6
```

**Explanation:**

- `applyOperation` is a higher-order function because it takes a function (`multiply`) as an argument.
- It uses this function (`multiply`) to perform an operation on `a` and `b`.

### **Built-in Higher-Order Functions:**

1. **Array `map()`**: Creates a new array by applying a function to every element of the original array.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]
```

2. **Array `filter()`**: Creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

3. **Array `reduce()`**: Executes a reducer function on each element of the array, resulting in a single output value.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);

console.log(sum); // 10
```

### **Callback and HOF Together:**

A higher-order function often accepts a callback as an argument, combining both concepts. For example, `Array.prototype.map()` is a higher-order function that takes a callback function to transform the elements of an array.

```javascript
const numbers = [1, 2, 3, 4];
const squared = numbers.map(function (num) {
  return num * num; // callback passed to map
});

console.log(squared); // [1, 4, 9, 16]
```

### **Conclusion:**

- **Callbacks** are used to define actions to be performed after a task is completed, especially in asynchronous operations.
- **Higher-Order Functions** are functions that take other functions as arguments or return functions, allowing you to compose behavior in a flexible and reusable way.
