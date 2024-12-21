### Variables in JavaScript

**Variables** are used to store data values that can be accessed and manipulated later in the code. In JavaScript, variables can be declared using `var`, `let`, or `const`.

### Rules for Declaring Variables

1. **Variable names must start with a letter**, underscore `_`, or dollar sign `$`. They cannot start with a number.
   ```js
   let myVar = 10; // valid
   let 1var = 10; // invalid
   ```
2. **Names are case-sensitive**. For example, `myVar` and `myvar` are different variables.
   ```js
   let myVar = 10;
   let myvar = 20;
   console.log(myVar, myvar); // Outputs: 10 20
   ```
3. **No reserved keywords**: You cannot use JavaScript reserved words like `if`, `else`, `return`, `for`, `var`, etc. as variable names.
   ```js
   let if = 5; // invalid
   ```
4. **Variable names should be descriptive** to make the code easier to read and maintain.

### Data Types in JavaScript

JavaScript is a **dynamically typed language**, which means you don’t have to specify the data type of a variable when declaring it.

Here are the main data types:

1. **Primitive Data Types**:

   - **Number**: Represents both integers and floating-point numbers.
     ```js
     let age = 25;
     let price = 99.99;
     ```
   - **String**: Represents a sequence of characters.
     ```js
     let name = 'Hammad';
     ```
   - **Boolean**: Represents either `true` or `false`.
     ```js
     let isLoggedIn = true;
     ```
   - **Null**: Represents an empty or non-existent value.
     ```js
     let value = null;
     ```
   - **Undefined**: A variable that has been declared but not yet assigned a value.
     ```js
     let someVar;
     console.log(someVar); // Outputs: undefined
     ```
   - **Symbol**: A unique and immutable data type, often used to create unique object property keys.
     ```js
     let sym = Symbol('unique');
     ```
   - **BigInt**: Allows representation of integers larger than the `Number` type can handle.
     ```js
     let bigInt = 123456789012345678901234567890n;
     ```

2. **Non-Primitive Data Type**:
   - **Object**: Used to store collections of data and more complex entities.
     ```js
     let person = {
       name: 'Hammad',
       age: 21,
     };
     ```

### Difference Between `var`, `let`, and `const`

1. **`var`**:

   - **Function-scoped**: Variables declared using `var` are scoped to the nearest function block. If declared outside a function, it becomes a global variable.
   - **Can be redeclared**: Variables can be re-declared and updated.
   - **Hoisting**: Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
     ```js
     console.log(x); // Outputs: undefined
     var x = 5;
     ```
   - **Not block-scoped**: `var` does not respect block-level scope (e.g., inside `if` or `for` blocks).
     ```js
     if (true) {
       var a = 10;
     }
     console.log(a); // Outputs: 10
     ```

2. **`let`**:

   - **Block-scoped**: Variables declared with `let` are confined to the block in which they are declared.
     ```js
     if (true) {
       let b = 20;
     }
     console.log(b); // ReferenceError: b is not defined
     ```
   - **Cannot be redeclared** in the same scope, but can be updated.
     ```js
     let c = 30;
     c = 40; // Valid
     let c = 50; // SyntaxError: Identifier 'c' has already been declared
     ```
   - **Hoisting**: Variables declared with `let` are hoisted but not initialized. You cannot use them before the declaration.
     ```js
     console.log(d); // ReferenceError: Cannot access 'd' before initialization
     let d = 10;
     ```

3. **`const`**:
   - **Block-scoped**: Similar to `let`, `const` is also block-scoped.
   - **Cannot be reassigned or redeclared** after the initial assignment. You must initialize it at the time of declaration.
     ```js
     const e = 50;
     e = 60; // TypeError: Assignment to constant variable
     ```
   - **Hoisting**: Variables declared with `const` are hoisted but not initialized, similar to `let`.
     ```js
     console.log(f); // ReferenceError: Cannot access 'f' before initialization
     const f = 70;
     ```
   - **Objects and Arrays with `const`**: Though the reference to the object or array cannot change, the contents of the object or array can be modified.
     ```js
     const arr = [1, 2, 3];
     arr.push(4); // Valid, array is modified
     arr = [5, 6]; // Invalid, cannot reassign the array
     ```

### Summary of `var`, `let`, and `const`:

| Feature            | `var`                                                 | `let`                            | `const`                                                |
| ------------------ | ----------------------------------------------------- | -------------------------------- | ------------------------------------------------------ |
| Scope              | Function-scoped                                       | Block-scoped                     | Block-scoped                                           |
| Redeclaration      | Allowed                                               | Not allowed                      | Not allowed                                            |
| Reassignment       | Allowed                                               | Allowed                          | Not allowed                                            |
| Hoisting           | Yes (initialized as `undefined`)                      | Yes (but not initialized)        | Yes (but not initialized)                              |
| Temporal Dead Zone | No                                                    | Yes                              | Yes                                                    |
| Use case           | Use with caution, often replaced by `let` and `const` | Used when reassignment is needed | Used for constants or objects that won't be reassigned |