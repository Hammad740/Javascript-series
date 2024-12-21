//// array.filter(function(currentValue,index,array){});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(function (num, index) {
  console.log(index);
  return num % 2 == 0;
});

console.log(evenNumbers);

let oddNumbers = numbers.filter((num) => num % 2 != 0);
console.log(oddNumbers);
