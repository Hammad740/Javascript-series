Promises in JavaScript are like **vaade** (promises) in real life. Jab hum kisi ko vaada karte hain, toh ya toh hum us vaade ko **nibhate** hain (fulfill) ya nahi (reject). JavaScript me bhi promises ka kaam kuch aisa hi hota hai.

## must read docs:-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise

### Samjho aise:

Jab hum koi asynchronous operation shuru karte hain, jaise ki server se data fetch karna, toh hum ye nahi jaante ki wo operation kab khatam hoga. Isliye hum us operation ko handle karne ke liye ek promise return karte hain.

### Promise ke 3 states hoti hain:

1. **Pending**: Jab tak operation chal raha hota hai, tab tak promise "pending" state me hota hai. Matlab abhi tak kuch final nahi hua hai.

2. **Fulfilled**: Agar operation successful hota hai, toh promise "fulfilled" state me chala jata hai. Matlab promise ne jo output dena tha, wo mil gaya.

3. **Rejected**: Agar operation fail ho jata hai, ya koi error aa jati hai, toh promise "rejected" state me chala jata hai. Matlab operation unsuccessful raha.

### Example:

Maan lo tumne dost se ek promise kiya ki tum usko paise wapas doge.

- Agar tumne paise wapas diye, toh tumhara vaada **nibh gaya** (fulfilled).
- Agar tumne paise nahi diye ya tumhare paas paise nahi hain, toh tumhara vaada **toot gaya** (rejected).

JavaScript me, tum ise kuch aise likhte:

```javascript
let myPromise = new Promise(function (resolve, reject) {
  // Ye code asynchronous operation ko represent karta hai
  let successful = true;

  if (successful) {
    resolve('Paise mil gaye!');
  } else {
    reject('Paise nahi mile!');
  }
});

myPromise
  .then(function (result) {
    console.log(result); // Paise mil gaye!
  })
  .catch(function (error) {
    console.log(error); // Paise nahi mile!
  });
```

### `.then()` aur `.catch()`:

- **`.then()`** tab call hota hai jab promise **fulfilled** hota hai, aur ye us data ko handle karta hai jo resolve() ke through aaya hai.
- **`.catch()`** tab call hota hai jab promise **rejected** hota hai, aur ye us error ko handle karta hai jo reject() ke through aaya hai.

### Promise chaining:

Agar tumhe ek ke baad ek asynchronous operations karne hain, toh tum promises ko chain kar sakte ho:

```javascript
myPromise
  .then((result) => {
    console.log(result);
    return 'Agla step';
  })
  .then((nextResult) => {
    console.log(nextResult);
  })
  .catch((error) => {
    console.log(error);
  });
```

Promise chaining se tum multiple asynchronous tasks ko sequentially handle kar sakte ho, bina callback hell me fasse.

In short, promises JavaScript me asynchronous operations ko handle karne ka ek tarika hain, jo code ko clean aur manageable banate hain.
