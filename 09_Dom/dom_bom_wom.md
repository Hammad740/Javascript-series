![WOM, DOM, and BOM Diagram](![alt text](image.png))

The **Window Object Model (WOM)**, **Document Object Model (DOM)**, and **Browser Object Model (BOM)** are foundational concepts for working with web browsers and JavaScript. Each one refers to different aspects of interacting with a webpage. Let’s break them down step by step with easy-to-understand explanations and details.

---

### 1. **Window Object Model (WOM)**

The **Window Object Model** represents the **browser's window**. In simpler terms, it refers to the **window** that displays your webpage. Everything you see on the browser, including the webpage itself, is controlled by this window object.

#### Key Points:

- The `window` object is the **global object** in the browser. This means that all global variables, functions, and objects in JavaScript are part of the `window` object.
- For example, `window.alert()` is a method that displays an alert box in the browser. You can call it just by using `alert()`, because `window` is implied.

#### Example:

```javascript
window.alert('Hello World'); // Shows an alert box
alert('Hello World'); // This works too, because window is implied
```

**Key Properties & Methods**:

- `window.location`: Gives you information about the current URL (e.g., redirect to another page).
- `window.history`: Provides access to the browser's history (e.g., go back or forward in history).
- `window.setTimeout()`: Executes a function after a certain delay.
- `window.innerHeight`: Gives the height of the browser window.

The `window` object also contains the **DOM** and **BOM**.

---

### 2. **Document Object Model (DOM)**

The **Document Object Model** represents the **structure** of an HTML document (your webpage) as a **tree of objects**. This is where you interact with and manipulate the content (like text, images, forms, etc.) and structure (like elements, attributes) of your webpage.

#### Key Points:

- The **DOM** treats everything in your HTML page (like `<div>`, `<p>`, and `<a>`) as **objects** or **nodes**.
- You can use JavaScript to dynamically change the DOM. For example, adding new elements, removing elements, or updating content.
- The main object to access the DOM is `document`.

#### Example:

```html
<body>
  <h1 id="title">Hello World</h1>
  <button onclick="changeTitle()">Change Title</button>

  <script>
    function changeTitle() {
      const titleElement = document.getElementById('title'); // Accessing an element
      titleElement.innerText = 'Title Changed!'; // Modifying content in the DOM
    }
  </script>
</body>
```

In the above example:

- `document.getElementById('title')` accesses the `<h1>` element by its `id`.
- `innerText` modifies the text inside the `<h1>` element.

**Key DOM Methods**:

- `document.getElementById()`: Gets an element by its `id`.
- `document.querySelector()`: Selects the first element that matches a CSS selector.
- `document.createElement()`: Creates a new HTML element.
- `document.appendChild()`: Adds a new child element to a parent.

---

### 3. **Browser Object Model (BOM)**

The **Browser Object Model** allows JavaScript to interact with the **browser window outside of the webpage**. It includes objects like `window`, `navigator`, `screen`, `history`, and `location`.

#### Key Points:

- The **BOM** deals with things like the browser's location, navigation history, and screen properties, not just the content of the webpage (which is managed by the DOM).
- While the DOM is standardized, the BOM is not strictly defined, and browsers might implement parts of it differently.

#### Example:

```javascript
// BOM examples:
console.log(window.location.href); // Gets the current URL
window.location.href = 'https://www.example.com'; // Redirects the user to a new URL

console.log(window.history.length); // Shows how many pages are in the browsing history
window.history.back(); // Goes back to the previous page
```

**Key BOM Objects**:

- `window.location`: Provides information about the current URL and allows URL redirection.
- `window.history`: Allows navigation through the user's browser history.
- `window.navigator`: Provides information about the browser and the user's device.
- `window.screen`: Provides information about the user’s screen (e.g., screen width, height, etc.).

---

### Comparison of WOM, DOM, and BOM

| Feature                | **WOM** (Window Object Model)                      | **DOM** (Document Object Model)                         | **BOM** (Browser Object Model)                                         |
| ---------------------- | -------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| **What it Represents** | The browser window and global scope                | The structure of the HTML document                      | The browser environment outside of the page (URL, history, etc.)       |
| **Main Object**        | `window`                                           | `document`                                              | `window.location`, `window.history`, `window.navigator`                |
| **Purpose**            | Controls the browser window and global environment | Manipulates HTML content and structure                  | Interacts with the browser (e.g., location, history, screen)           |
| **Examples**           | `window.alert()`, `window.innerWidth`              | `document.getElementById()`, `document.createElement()` | `window.location.href`, `window.history.back()`, `window.screen.width` |

---

### Summary:

1. **Window Object Model (WOM)**: The global object that represents the browser window. Everything (DOM, BOM, etc.) is a part of the `window` object.

2. **Document Object Model (DOM)**: Represents the webpage’s content and structure. You can manipulate HTML elements, attributes, and styles dynamically using JavaScript.

3. **Browser Object Model (BOM)**: Interacts with the browser’s features outside of the webpage (e.g., URL, navigation, history, and screen properties).

Together, these models allow JavaScript to control the entire browsing experience, from interacting with the content (DOM) to managing the browser window (BOM) and accessing global features (WOM).
