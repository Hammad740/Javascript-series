The **rest parameter** in JavaScript allows a function to accept an **indefinite number of arguments** as an array, making it easier to work with functions that take a variable number of inputs. It is represented by three dots (`...`) followed by a parameter name, and it collects all remaining arguments into a single array.

### **Syntax**:

```javascript
function functionName(...restParameter) {
  // Function body
}
```

### **Example: Using Rest Parameters**:

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
```

**Explanation**:

- The `sum` function can accept any number of arguments.
- The `...numbers` syntax collects all the arguments passed into an array called `numbers`.
- The `reduce` method is then used to sum all the numbers.

### **Rest Parameters vs. Arguments Object**:

Before rest parameters, the `arguments` object was used to handle variable-length arguments. However, the `arguments` object:

- Is not a real array (it’s array-like but lacks array methods like `map`, `filter`, etc.).
- Cannot be used in arrow functions.
- Cannot explicitly define which arguments to collect.

Rest parameters solve these issues by providing a true array and making the function signature more explicit.

#### **Example**:

```javascript
function showArguments(...args) {
  console.log(args); // logs an array of all arguments
}

showArguments(1, 'hello', true); // [1, 'hello', true]
```

### **Example: Combining Rest Parameters with Regular Parameters**:

You can combine rest parameters with regular parameters, but the rest parameter must always be the **last parameter** in the function definition.

```javascript
function multiply(multiplier, ...numbers) {
  return numbers.map((num) => num * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
```

**Explanation**:

- The first parameter (`multiplier`) is a regular parameter.
- The rest parameter (`...numbers`) collects the remaining arguments into an array.
- The `map` function is used to multiply each number by the `multiplier`.

### **Rest Parameters with Destructuring**:

Rest parameters can also be combined with destructuring to gather remaining properties in objects or remaining elements in arrays.

#### **Example: Rest Parameters with Object Destructuring**:

```javascript
const person = {
  name: 'Hammad',
  age: 23,
  city: 'Durgapur',
  country: 'India',
};

const { name, ...details } = person;

console.log(name); // Hammad
console.log(details); // { age: 23, city: 'Durgapur', country: 'India' }
```

#### **Example: Rest Parameters with Array Destructuring**:

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

### **Rules and Limitations**:

- Rest parameters **must be the last parameter** in the function.
- There can only be **one rest parameter** in a function.

#### **Invalid Example**:

```javascript
function wrongFunction(...rest, anotherParam) {
  // Error: Rest parameter must be last formal parameter
}
```

### **Use Cases**:

1. **Variadic functions** (functions that take a variable number of arguments) such as `Math.max`, `sum`, or any function where the number of parameters isn’t fixed.
2. **Passing remaining parameters** to another function.
3. **Combining** regular parameters and collecting the rest into an array for further processing.

### **Summary**:

- The **rest parameter** is used to gather multiple arguments into an array.
- It is more flexible and modern than the `arguments` object.
- It must be the **last** parameter in the function.
- Rest parameters are useful for handling functions with **variable numbers of arguments** or for destructuring remaining properties or elements in objects or arrays.
