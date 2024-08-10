//? A promise is a proxy for a value not necessarily known when proxy is not known

//? A promise is a simply Object in js
//? A promise is always is in one of the states
//? pendin,fulfilled and rejected

const promise = new Promise((resolve, reject) => {
  let successful = false;
  if (successful) {
    resolve('Paise mil gaye!');
  } else {
    reject('Paise nahi mile!');
  }
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

const promise1 = Promise.resolve(3);
const promise2 = 43;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);
