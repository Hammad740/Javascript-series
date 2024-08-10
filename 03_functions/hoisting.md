# Hoisting in JavaScript

## Overview

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase. This means that a variable can be used before it has been declared.

## Example of Hoisting

```javascript
console.log(x); // undefined
var x = 5;
```

In this example, the variable `x` is declared after it is used. However, JavaScript will hoist the declaration of `x` to the top of the scope, so the code will run without any errors.

## Understanding Hoisting

Hoisting can be useful for organizing your code and making it more readable. However, it is important to understand how hoisting works to avoid unexpected behavior in your code.

### Key Points About Hoisting

1. **Only Declarations are Hoisted:**

   - Only the declarations are hoisted, not the initializations. This means that you cannot use a variable before it has been assigned a value.
   - Example:
     ```javascript
     console.log(x); // undefined
     var x = 5; // Initialization happens here
     ```

2. **Function Declarations:**

   - Function declarations are hoisted before variable declarations.
   - Example:
     ```javascript
     myFunction(); // "Hello, world!"
     function myFunction() {
       console.log('Hello, world!');
     }
     ```

3. **Arrow Functions and Block-Scoped Declarations:**
   - Hoisting does not apply to arrow functions or variables declared with the `const` or `let` keywords.
   - Example:
     ```javascript
     console.log(y); // ReferenceError: Cannot access 'y' before initialization
     let y = 10;
     ```

## Conclusion

Hoisting is a useful feature of JavaScript that can help you write more organized and readable code. However, understanding how hoisting works is crucial to avoid unexpected behavior in your code.
