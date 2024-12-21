The `map()` method in JavaScript is a powerful array method that creates a **new array** by applying a provided function to every element of the original array. The function you provide is called once for each element, and the result of the function is stored in the new array. The `map()` method does not modify the original array.

### Syntax:

```js
let newArray = array.map(callback(element, index, array));
```

- **`callback`**: A function that is called for every element in the array. It takes three arguments:
  - **`element`**: The current element being processed in the array.
  - **`index`** (optional): The index of the current element.
  - **`array`** (optional): The array `map` was called on.
- **Returns**: A new array with the transformed elements.

### Example 1: Basic Transformation

```js
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]
```

Here, the `map()` method multiplies each element in the `numbers` array by 2, and the result is stored in a new array `doubled`.

### Example 2: Using Arrow Functions

```js
let numbers = [1, 2, 3, 4];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### Example 3: Mapping Objects

```js
let users = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Doe' },
];

let fullNames = users.map(function (user) {
  return user.firstName + ' ' + user.lastName;
});

console.log(fullNames); // ['John Doe', 'Jane Doe']
```

Here, we are mapping over an array of objects, combining the `firstName` and `lastName` properties for each object into a full name.

### Key Points:

- **Creates a new array**: `map()` does not modify the original array but returns a new array.
- **Transformation**: The transformation logic is defined by the `callback` function.
- **Same length**: The length of the new array will always be the same as the original array, as each element is processed.

### Example 4: Index and Array Parameters

```js
let numbers = [1, 2, 3];
let doubledWithIndex = numbers.map(function (num, index) {
  return num * index;
});
console.log(doubledWithIndex); // [0, 2, 6]
```

In this case, we are using the index in the `map()` callback function to multiply the element by its position.

### Conclusion:

The `map()` method is useful when you want to transform an array by applying a function to each element, and it is particularly handy for tasks like transforming data, extracting specific fields from objects, or any situation where you need to produce a new array based on the original array’s data.

The `filter()` method in JavaScript creates a **new array** with all the elements that pass the test implemented by a provided function. This means that for each element in the original array, the `filter()` method checks whether the element satisfies a condition, and if so, it includes it in the new array.

### Syntax:

```js
let newArray = array.filter(callback(element, index, array));
```

- **`callback`**: A function to test each element of the array. It returns `true` to keep the element, or `false` to exclude it.
  - **`element`**: The current element being processed.
  - **`index`** (optional): The index of the current element.
  - **`array`** (optional): The array `filter` was called on.
- **Returns**: A new array with elements that pass the test. If no elements pass, it returns an empty array.

### Example 1: Basic Filtering

```js
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4, 6]
```

Here, the `filter()` method checks for even numbers and includes only those in the `evenNumbers` array.

### Example 2: Using Arrow Functions

```js
let numbers = [1, 2, 3, 4, 5, 6];
let oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5]
```

In this case, we use an arrow function to filter out odd numbers.

### Example 3: Filtering Objects in an Array

```js
let people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 18 },
  { name: 'Mike', age: 30 },
];

let adults = people.filter(function (person) {
  return person.age >= 18;
});

console.log(adults);
// Output:
// [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 18 },
//   { name: 'Mike', age: 30 }
// ]
```

Here, the `filter()` method is used to return only those people who are 18 or older.

### Example 4: Filtering with Index and Array Parameters

```js
let numbers = [10, 20, 30, 40];
let filteredNumbers = numbers.filter(function (num, index) {
  return index > 1; // Only keep elements after index 1
});
console.log(filteredNumbers); // [30, 40]
```

In this case, we use the `index` parameter to filter out elements based on their position in the array.

### Key Points:

- **Creates a new array**: Like `map()`, `filter()` returns a new array without modifying the original array.
- **Only elements that pass the test**: The elements that return `true` from the callback function are included in the new array.
- **Returns an empty array if no elements pass**: If no elements meet the condition, `filter()` returns an empty array.

### Example 5: Filtering Strings in an Array

```js
let words = ['apple', 'banana', 'grape', 'kiwi', 'mango'];
let filteredWords = words.filter(function (word) {
  return word.length > 4;
});
console.log(filteredWords); // ['apple', 'banana', 'grape', 'mango']
```

In this example, the `filter()` method creates a new array with only the words that have more than 4 letters.

### Conclusion:

The `filter()` method is useful for creating a subset of an array based on some condition, such as filtering numbers, strings, or objects. It is particularly handy for tasks like searching or creating arrays based on criteria.
