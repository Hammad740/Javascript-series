// while loop
// The while loop loops through a block of code as long as a specified condition is true.

// Syntax
// while (condition) {
//   // code block to be executed
// }

let i = 0;
while (i < 10) {
  let text = 'The number is ';
  text += i;
  console.log(text);
  i++;
}

//? The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// Syntax
// do {
//   // code block to be executed
// }
// while (condition);

let money = 13;
do {
  console.log('You have ' + money + ' dollars');
  money--;
} while (money >= 10);

// for loop

// ? Syntax:

// for (statement 1 ; statement 2 ; statement 3){
//     code here...
// }
// Statement 1: It is the initialization of the counter. It is executed once before the execution of the code block.
// Statement 2: It defines the testing condition for executing the code block
// Statement 3: It is the increment or decrement of the counter & executed (every time) after the code block has been executed.

for (let x = 2; x <= 10; x++) {
  console.log('Value of x:' + x);
}

i = 0;
for (; i <= 10; i++) {
  console.log('Value of i :' + i);
}

// y = 0;
// for (; ; y++) {
//   console.log('value of y :' + y);
// }
// infinite loop

y = 0;
for (; ; y++) {
  console.log('value of y :' + y);
  break;
}
