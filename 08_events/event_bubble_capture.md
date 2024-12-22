In JavaScript, **event bubbling** and **event capturing** are two phases of the event propagation model that describe how events move through the DOM when an event is triggered. Understanding these concepts is important for handling events in a precise and controlled manner.

### Event Propagation Phases:

1. **Event Capturing (Trickling)**:
   In this phase, the event starts from the outermost element and works its way down to the element that triggered the event (the target element). This is also called the "trickling" phase.

2. **Event Bubbling**:
   After the event reaches the target element, it starts to propagate back up the DOM to the outermost elements, "bubbling" upwards.

### Event Flow:

- **Capturing phase** (outer to target)
- **Target phase** (the element that triggered the event)
- **Bubbling phase** (target to outer elements)

### Example:

Let’s say we have the following HTML:

```html
<div id="grandparent">
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
</div>
```

#### Event Bubbling:

```javascript
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Event bubbling example
grandparent.addEventListener('click', () => {
  console.log('Grandparent Clicked');
});
parent.addEventListener('click', () => {
  console.log('Parent Clicked');
});
child.addEventListener('click', () => {
  console.log('Child Clicked');
});
```

When you click on the `child` button, the event first triggers on the `child` element, then bubbles up to the `parent`, and finally reaches the `grandparent`. The output will be:

```
Child Clicked
Parent Clicked
Grandparent Clicked
```

#### Event Capturing:

```javascript
// Event capturing example
grandparent.addEventListener(
  'click',
  () => {
    console.log('Grandparent Clicked (Capturing)');
  },
  true
); // Third parameter 'true' enables capturing phase

parent.addEventListener(
  'click',
  () => {
    console.log('Parent Clicked (Capturing)');
  },
  true
);

child.addEventListener(
  'click',
  () => {
    console.log('Child Clicked (Capturing)');
  },
  true
);
```

In this case, when you click the `child` button, the event starts from the outermost element (`grandparent`), moves down to `parent`, and finally reaches `child`:

```
Grandparent Clicked (Capturing)
Parent Clicked (Capturing)
Child Clicked (Capturing)
```

### Key Differences:

1. **Event Bubbling**:

   - Default behavior in JavaScript.
   - The event propagates from the target element upwards to its ancestors.
   - Event listeners on parent elements are triggered after the child element.

2. **Event Capturing**:
   - Requires explicitly setting the third argument to `true` when adding event listeners (`addEventListener`).
   - The event propagates from the outermost element down to the target element.
   - Event listeners on parent elements are triggered before the child element.

### Example of Both Together:

By using both capturing and bubbling phases, you can control the order of event handling. You can decide whether an event handler should be called during the capturing or bubbling phase by using the third argument in `addEventListener` (`true` for capturing, `false` or omitted for bubbling).

```javascript
grandparent.addEventListener(
  'click',
  () => {
    console.log('Grandparent (Capturing)');
  },
  true
); // Capturing phase

parent.addEventListener('click', () => {
  console.log('Parent (Bubbling)');
}); // Bubbling phase (default)

child.addEventListener('click', () => {
  console.log('Child (Bubbling)');
}); // Bubbling phase (default)
```

### Conclusion:

- **Event Bubbling**: Happens by default, moves from target element up to the root.
- **Event Capturing**: Must be explicitly enabled, moves from the root down to the target element.
- You can use both together by specifying the third parameter in `addEventListener`.

Understanding these phases allows you to control how and when different event listeners should react to user interactions in your web applications.
