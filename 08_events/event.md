# Event Object in JS

The **Event** object in JavaScript is used to store information about an event that has occurred. It is passed as an argument to event handler functions, allowing them to access details about the event.

## Properties

The **Event** object has several properties, including:

1. **type**: The type of event that occurred (e.g., `'click'`, `'mouseover'`, etc.).
2. **target**: The element that triggered the event.
3. **currentTarget**: The element that is currently handling the event.
4. **preventDefault()**: A method that cancels the default action of the event (e.g., stopping a form submission).
5. **stopPropagation()**: A method that prevents the event from bubbling up the DOM tree, stopping it from reaching parent elements.

## Methods

The **Event** object also has several methods, including:

1. **preventDefault()**: Cancels the default action of the event, such as preventing a link from following its `href`.
2. **stopPropagation()**: Stops the event from bubbling up to ancestor elements, useful in event delegation.
3. **stopImmediatePropagation()**: Prevents other event handlers from being called, even those on the same element.

## Event Types

There are many different types of events that can occur in JavaScript, including:

1. **Mouse events**: `click`, `mouseover`, `mouseout`, `mousedown`, `mouseup`.
2. **Keyboard events**: `keydown`, `keyup`, `keypress`.
3. **Touch events**: `touchstart`, `touchmove`, `touchend` (for touch devices).
4. **Form events**: `submit`, `input`, `change`, `focus`, `blur`.
5. **DOM events**: `DOMContentLoaded`, `load`, `scroll`, `resize`.

## Example

Here's an example of how to use the **Event** object in JavaScript:

```javascript
// Add an event listener to a button
document.getElementById('myButton').addEventListener('click', function (event) {
  // Access the Event object
  console.log(event.type); // "click"
  console.log(event.target); // The button element
  // Prevent the default action of the event
  event.preventDefault();
});
```

In this example:

- `event.type` retrieves the type of event (`'click'`).
- `event.target` refers to the element that initiated the event (`<button>`).
- `event.preventDefault()` prevents the default behavior of the button (if it were in a form, it would stop form submission).

## Additional Information

- The **Event** object is not the same as the event handler function. The event handler function is called when an event occurs, and it receives the **Event** object as an argument.
- Many event properties vary depending on the type of event. For instance, mouse events have `clientX`, `clientY` for coordinates, while keyboard events have `key` and `keyCode` for key details.

## Specialized Event Objects

Depending on the event type, the **Event** object can have additional properties. Here are some examples:

### Mouse Events

Properties: `clientX`, `clientY`, `button`, `offsetX`, `offsetY`.
Example events: `click`, `mousemove`, `mousedown`, `mouseup`.

### Keyboard Events

Properties: `key`, `keyCode`, `which`, `altKey`, `ctrlKey`, `shiftKey`.
Example events: `keydown`, `keyup`, `keypress`.

### Touch Events

Properties: `touches`, `changedTouches`, `targetTouches` (related to fingers on touch devices).
Example events: `touchstart`, `touchmove`, `touchend`.

### Form Events

Properties: `target.value`, `submitter` (related to form submission).
Example events: `submit`, `input`, `change`, `focus`.

### Conclusion

- The **Event** object is a fundamental part of handling user interactions in JavaScript.
- It provides rich information about the event and methods to control event behavior (e.g., preventing default actions or stopping propagation).
- Understanding the event object is essential for building interactive web applications where user input and actions trigger changes in the UI or logic.
