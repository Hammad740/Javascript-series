JavaScript mein, asynchronous programming ke liye kuch built-in functions hote hain, jinke through aap delayed execution ya repeated execution achieve kar sakte ho. Sabse commonly used functions hain `setTimeout`, `setInterval`, aur `setImmediate`. Main aapko in teeno ke baare mein Hinglish mein explain karta hoon.

### 1. `setTimeout`

`setTimeout` ek function hai jo specified time delay ke baad ek particular function ko execute karta hai. Yeh ek baar hi execute hota hai.

**Syntax:**

```javascript
setTimeout(function, delay);
```

- **function**: Yeh wo function hai jo delay ke baad execute hoga.
- **delay**: Time delay in milliseconds (1000 milliseconds = 1 second).

**Example:**

```javascript
console.log('Start');
setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);
console.log('End');
```

Is example mein, "Start" aur "End" turant print ho jayenge, lekin "This runs after 2 seconds" 2 second baad print hoga.

### 2. `setInterval`

`setInterval` ek function hai jo specified interval ke baad repeatedly execute hota rehta hai, jab tak aap usse stop nahi karte. Matlab, yeh repeatedly har interval ke baad execute hoga.

**Syntax:**

```javascript
setInterval(function, interval);
```

- **function**: Yeh wo function hai jo har interval ke baad execute hoga.
- **interval**: Time interval in milliseconds.

**Example:**

```javascript
setInterval(() => {
  console.log('This runs every 3 seconds');
}, 3000);
```

Is example mein, yeh function har 3 second baad repeat hota rahega jab tak aap usse manually stop nahi karte.

### 3. `setImmediate`

`setImmediate` ek function hai jo event loop ke current cycle ke end par turant execute hota hai. Matlab, yeh synchronous code ke turant baad execute hota hai, bina kisi delay ke. Yeh commonly server-side Node.js applications mein use hota hai.

**Syntax:**

```javascript
setImmediate(function);
```

- **function**: Yeh wo function hai jo turant execute hoga.

**Example:**

```javascript
console.log('Start');
setImmediate(() => {
  console.log('This runs immediately after the synchronous code');
});
console.log('End');
```

Is example mein, "Start" aur "End" print hone ke baad hi "This runs immediately after the synchronous code" print hoga.

### Differences:

- `setTimeout`: Function ko ek specific delay ke baad ek baar execute karta hai.
- `setInterval`: Function ko repeatedly ek specific interval ke baad execute karta hai.
- `setImmediate`: Function ko synchronous code ke complete hone ke turant baad execute karta hai.

In teeno functions ka use aapko asynchronous programming mein flexibility deta hai, jaise ki delayed execution ya repeated tasks ko efficiently handle karna.
