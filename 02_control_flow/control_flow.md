In JavaScript, a **`switch` statement** is used to execute one block of code out of multiple options, based on the value of a given expression. It's similar to an `if...else if...else` chain, but often more readable when you need to compare the same value to multiple different cases.

### Syntax:

```js
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  // More cases...
  default:
  // Code to execute if none of the cases match
}
```

- **`expression`**: This is the value being evaluated.
- **`case value1, value2, etc.`**: These are the possible values the expression is compared against.
- **`break`**: The `break` statement is used to exit the switch block after a matching case is executed. Without `break`, the program would continue executing the next case, even if it doesn't match.
- **`default`**: This is an optional section that runs if no cases match the expression.

### Example:

```js
let day = 3;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  default:
    console.log('Invalid day');
}
```

**Output**:

```
Wednesday
```

Here, the value of `day` is `3`, so the code inside `case 3:` is executed, and it prints "Wednesday". The `break` statement ensures that the program exits the switch after the match is found, so no other cases are checked.

### `default` Case:

The `default` case is executed when none of the specified cases match the expression.

```js
let color = 'purple';

switch (color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Unknown color');
}
```

**Output**:

```
Unknown color
```

Since "purple" does not match any of the cases, the `default` block is executed.

### Multiple Cases for the Same Output:

You can group cases together if they should execute the same block of code.

```js
let fruit = 'apple';

switch (fruit) {
  case 'apple':
  case 'banana':
  case 'mango':
    console.log('This is a fruit');
    break;
  default:
    console.log('Unknown item');
}
```

**Output**:

```
This is a fruit
```

Here, "apple", "banana", and "mango" will all produce the same output.

### Example Without `break`:

If the `break` statement is omitted, the switch statement will continue to the next case, even if a match is found. This is known as **"fall-through"** behavior.

```js
let grade = 'B';

switch (grade) {
  case 'A':
    console.log('Excellent');
  case 'B':
    console.log('Good');
  case 'C':
    console.log('Average');
  default:
    console.log('Grade not recognized');
}
```

**Output**:

```
Good
Average
Grade not recognized
```

Since there is no `break`, after matching `case 'B':`, it continues executing all following cases until the end of the switch statement.

### Summary:

- Use a `switch` statement when you have multiple cases to compare against the same expression.
- Use `break` to stop execution once a case is matched.
- The `default` case runs when no other cases match.

In JavaScript, loops allow you to repeat a block of code multiple times. They are very useful when you need to perform repetitive tasks or iterate over arrays, objects, or other iterable data structures.

### Types of Loops in JavaScript:

1. **`for` loop**
2. **`while` loop**
3. **`do...while` loop**
4. **`for...in` loop**
5. **`for...of` loop**

---

### 1. `for` Loop

The `for` loop is used when you know how many times you want to repeat a block of code.

#### Syntax:

```js
for (initialization; condition; increment / decrement) {
  // Code to execute
}
```

#### Example:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**Explanation:**

- The loop starts with `i = 0`.
- It runs the block of code as long as `i < 5`.
- After each iteration, `i` is incremented by 1 (`i++`).

**Output**:

```
0
1
2
3
4
```

---

### 2. `while` Loop

The `while` loop continues running as long as a specified condition is `true`.

#### Syntax:

```js
while (condition) {
  // Code to execute
}
```

#### Example:

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

**Explanation:**

- The loop will keep running as long as `i < 5`.
- The value of `i` is incremented in each iteration.

**Output**:

```
0
1
2
3
4
```

---

### 3. `do...while` Loop

The `do...while` loop is similar to the `while` loop, but it guarantees that the block of code is executed at least once, even if the condition is initially `false`.

#### Syntax:

```js
do {
  // Code to execute
} while (condition);
```

#### Example:

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

**Explanation:**

- The loop runs once before checking the condition.
- Then it keeps running as long as `i < 5`.

**Output**:

```
0
1
2
3
4
```

---

### 4. `for...in` Loop

The `for...in` loop is used to iterate over the **properties** of an object. It's useful for looping through the keys in an object.

#### Syntax:

```js
for (let key in object) {
  // Code to execute
}
```

#### Example:

```js
let person = { name: 'Hammad', age: 21, city: 'Delhi' };

for (let key in person) {
  console.log(key + ': ' + person[key]);
}
```

**Output**:

```
name: Hammad
age: 21
city: Delhi
```

---

### 5. `for...of` Loop

The `for...of` loop is used to iterate over **iterable** objects like arrays, strings, Maps, and Sets. It gives you the values of the elements rather than their indices (or properties like in `for...in`).

#### Syntax:

```js
for (let element of iterable) {
  // Code to execute
}
```

#### Example:

```js
let fruits = ['apple', 'banana', 'mango'];

for (let fruit of fruits) {
  console.log(fruit);
}
```

**Output**:

```
apple
banana
mango
```

---

### Loop Control Statements:

1. **`break`**: Used to exit a loop early, even if the loop condition has not been met.
2. **`continue`**: Skips the current iteration and moves to the next one.

#### Example of `break`:

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exit the loop when i is 3
  }
  console.log(i);
}
```

**Output**:

```
0
1
2
```

#### Example of `continue`:

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skip the iteration when i is 3
  }
  console.log(i);
}
```

**Output**:

```
0
1
2
4
```

---

### Summary of Loops in JavaScript:

- **`for` loop**: Best when you know how many iterations you need.
- **`while` loop**: Good for looping until a condition is no longer true.
- **`do...while` loop**: Similar to `while`, but always runs at least once.
- **`for...in` loop**: Used for iterating over object properties.
- **`for...of` loop**: Used for iterating over iterable objects (arrays, strings, etc.).

Loops allow you to efficiently repeat actions, handle collections of data, and process logic iteratively.
