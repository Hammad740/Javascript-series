**Destructuring** is a convenient way to extract values from arrays or objects and assign them to variables. It allows you to "unpack" values from arrays or properties from objects into distinct variables in a clean and concise syntax.

### **1. Array Destructuring:**

You can extract values from an array and assign them to variables based on their position.

#### **Example: Basic Array Destructuring**:

```javascript
const numbers = [1, 2, 3];

const [first, second, third] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
```

- The first element of the `numbers` array is assigned to the variable `first`, the second to `second`, and the third to `third`.

#### **Skipping Elements in Array Destructuring**:

You can skip over elements by leaving empty spaces.

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, , third] = numbers; // Skipping the second element

console.log(first); // 1
console.log(third); // 3
```

#### **Default Values in Array Destructuring**:

You can assign default values in case the array doesn’t have enough elements.

```javascript
const numbers = [1];

const [first, second = 10] = numbers;

console.log(first); // 1
console.log(second); // 10 (default value)
```

#### **Swapping Variables Using Destructuring**:

Array destructuring allows a clean way to swap variables without needing a temporary variable.

```javascript
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
```

### **2. Object Destructuring:**

Object destructuring allows you to extract properties from an object and assign them to variables with the same name as the properties.

#### **Example: Basic Object Destructuring**:

```javascript
const person = {
  name: 'Hammad',
  age: 23,
  city: 'Durgapur',
};

const { name, age, city } = person;

console.log(name); // Hammad
console.log(age); // 23
console.log(city); // Durgapur
```

- The `name`, `age`, and `city` properties of the `person` object are extracted and assigned to variables with the same names.

#### **Renaming Variables in Object Destructuring**:

You can assign properties to variables with different names.

```javascript
const person = {
  name: 'Hammad',
  age: 23,
  city: 'Durgapur',
};

const { name: fullName, age: years, city: location } = person;

console.log(fullName); // Hammad
console.log(years); // 23
console.log(location); // Durgapur
```

- Here, the `name` property is assigned to `fullName`, `age` to `years`, and `city` to `location`.

#### **Default Values in Object Destructuring**:

You can provide default values if the property is `undefined` or missing.

```javascript
const person = {
  name: 'Hammad',
  city: 'Durgapur',
};

const { name, age = 30, city } = person;

console.log(name); // Hammad
console.log(age); // 30 (default value since age is not defined in person)
console.log(city); // Durgapur
```

#### **Nested Object Destructuring**:

If an object contains nested objects, you can destructure them as well.

```javascript
const person = {
  name: 'Hammad',
  address: {
    city: 'Durgapur',
    state: 'West Bengal',
  },
};

const {
  name,
  address: { city, state },
} = person;

console.log(name); // Hammad
console.log(city); // Durgapur
console.log(state); // West Bengal
```

- You can destructure properties from nested objects in one step.

### **3. Mixed Destructuring (Arrays and Objects)**:

You can combine both array and object destructuring in more complex scenarios.

#### **Example**:

```javascript
const person = {
  name: 'Hammad',
  hobbies: ['coding', 'reading', 'cycling'],
};

const {
  name,
  hobbies: [hobby1, hobby2],
} = person;

console.log(name); // Hammad
console.log(hobby1); // coding
console.log(hobby2); // reading
```

- Here, we destructured both the `name` property and the first two elements from the `hobbies` array inside the `person` object.

### **4. Function Parameter Destructuring**:

You can destructure arrays or objects passed as arguments to functions.

#### **Example with Objects**:

```javascript
function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = {
  name: 'Hammad',
  age: 23,
};

printPerson(person); // Output: Name: Hammad, Age: 23
```

- In this example, the function directly destructures the `person` object passed as an argument.

#### **Example with Arrays**:

```javascript
function sum([a, b]) {
  return a + b;
}

console.log(sum([5, 10])); // 15
```

### **Summary**:

- **Array Destructuring**: Allows you to extract values from arrays based on position and assign them to variables.
- **Object Destructuring**: Allows you to extract properties from objects and assign them to variables with the same name or different names.
- **Mixed Destructuring**: Lets you combine array and object destructuring.
- **Default Values**: Provide fallback values if the array or object doesn’t have enough elements or properties.
- **Function Parameter Destructuring**: Enables cleaner function arguments handling when passing objects or arrays.

Destructuring helps make your code more concise and readable by reducing the need for repetitive property access or array indexing.
