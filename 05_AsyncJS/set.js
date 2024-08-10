// function greet() {
//   console.log('hammad');
// }

// const timeOutId = setTimeout(() => {
//   greet();
// }, 2000);

// console.log(timeOutId);
// clearTimeout(timeOutId);

////*setTimeout ek ID return karega (jo ek number hota hai) aur aap is ID ko timeoutId variable mein store kar sakte ho. Yeh ID us specific timeout ko identify karti hai.

////* clearTimeout ek function hai jo setTimeout ke through set ki gayi timeout operation ko cancel karne ke liye use hota hai. Matlab, agar aapne ek timeout set kiya hai lekin aap chahte ho ki woh execute na ho, toh aap clearTimeout use kar sakte ho us timeout ko cancel karne ke liye

// function greet1() {
//   console.log('hammad');
// }

// const intervalId = setInterval(() => {
//   greet1();
// }, 2000);

// console.log(intervalId);
// clearInterval(intervalId);

// timers and intervals are not part of js itself.They are implemented by the browser and setTimeout and setInterval are basically names given to that functionality in js

//! recursive setTimeout
setTimeout(function run() {
  console.log('Hello');
  setTimeout(run, 100);
}, 100);
