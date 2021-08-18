# Events

- Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired.
- In the case of the Web, events are fired inside the browser window, and tend to be attached to a specific item that resides in it — this might be a single element, set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur.for example:
  - The user selects a certain element or hovers the cursor over a certain element.
  - The user chooses a key on the keyboard.
  - The user resizes or closes the browser window.
  - A web page finishes loading.
  - A form is submitted.
  - A video is played, paused, or finishes.
  - An error occurs.
- Each available event has an **event handler,** which is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires.
- When such a block of code is defined to run in response to an event, **we say we are registering an event handler**.
- Note: **Event handlers are sometimes called event listeners** — they are pretty much interchangeable for our purposes, although strictly speaking, they work together.
- The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

```
Web events are not part of the core JavaScript language — they are defined as part of the APIs built into the browser.
```

## It's not just web pages

- Another thing worth mentioning at this point is that events are not unique to JavaScript — most programming languages have some kind of event model, and the way the model works often differs from JavaScript's way.
- In fact, the event model in JavaScript for web pages differs from the event model for JavaScript as it is used in other environments.
- For example, Node.js is a very popular JavaScript runtime that enables developers to use JavaScript to build network and server-side applications.
- The Node.js event model relies on listeners to listen for events and emitters to emit events periodically — it doesn't sound that different, but the code is quite different, making use of functions like on() to register an event listener, and once() to register an event listener that unregisters after it has run once.
- You can also use JavaScript to build cross-browser add-ons — browser functionality enhancements — using a technology called WebExtensions.The event model is similar to the web events model, but a bit different — event listeners properties are camel-cased (such as onMessage rather than onmessage), and need to be combined with the addListener function
- just wanted to make it clear that events can differ in different programming environments.

## Ways of using web events

- There are a number of ways to add event listener code to web pages so it runs when the associated event fires.

### Event handler properties

- These are the properties that exist to contain event handler code

```
const btn = document.querySelector('button');

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
```

- The onclick property is the event handler property being used in this situation.
- It is essentially a property like any other available on the button (e.g. btn.textContent, or btn.style), but it is a special type — **when you set it to be equal to some code, that code is run when the event fires on the button.**
- You could also set the handler property to be equal to a named function name

```
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

- There are many different event handler properties available: onfocus, onblur, onkeydown etc

### Inline event handlers — don't use these

```
<button onclick="bgChange()">Press me</button>

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
```

- The earliest method of registering event handlers found on the Web involved **event handler HTML attributes** (or inline event handlers) like the one shown above — the attribute value is literally the JavaScript code you want to run when the event occurs.
- The above example invokes a function defined inside a \<script> element on the same page, but you could also insert JavaScript directly inside the attribute, for example:

```
<button onclick="alert('Hello, this is my old-fashioned event handler!');">Press me</button>
```

- You can find HTML attribute equivalents for many of the event handler properties; however, you shouldn't use these — they are considered bad practice.
- It might seem easy to use an event handler attribute if you are doing something really quick, but they quickly become unmanageable and inefficient.
- For a start, it is not a good idea to mix up your HTML and your JavaScript, as it becomes hard to parse — keeping your JavaScript separate is best practice; if it is in a separate file you can apply it to multiple HTML documents.
- Even in a single file, inline event handlers are not a good idea. One button is OK, but what if you had 100 buttons? You'd have to add 100 attributes to the file; it would quickly turn into a maintenance nightmare. With JavaScript, you could easily add an event handler function to all the buttons on the page no matter how many there were, using something like this:

```
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = bgChange;
}
```

- Note that another option here would be to use the forEach() built-in method available on NodeList objects:

```
buttons.forEach(function(button) {
  button.onclick = bgChange;
});
```

```
Note:
Separating your programming logic from your content also makes your site more friendly to search engines.
```

### Adding and removing event handlers

- The modern mechanism for adding event handlers is the addEventListener() method.

```
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange)
```

- Inside the addEventListener() function, we specify two parameters: the name of the event we want to register this handler for, and the code that comprises the handler function we want to run in response to it.
- Note: It is perfectly appropriate to put all the code inside the addEventListener() function, in an anonymous function, like this:

```
btn.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
});
```

- This mechanism has some advantages over the older mechanisms discussed here earlier. First, there is a counterpart function, removeEventListener(), which removes a previously added event handler. For example, this would remove the event handler set in the first code block in this section:

```
btn.removeEventListener('click', bgChange);
```

- Event handlers can also be removed by passing an AbortSignal to addEventListener() and then, later, calling abort() on the controller owning the AbortSignal. For example, to add an event handler that we can remove with an AbortSignal:

```
const controller = new AbortController();

btn.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}, { signal: controller.signal }); // pass an AbortSignal to this hand
```

- Then the event handler created by the code above can be removed like this:

```
controller.abort(); // removes any/all event handlers associated with this controller
```

- For simple, small programs, cleaning up old, unused event handlers isn’t necessary — but for larger, more complex programs, it can improve efficiency. Plus, the ability to remove event handlers allows you to have the same button performing different actions in different circumstances — all you have to do is add or remove handlers.
- The second advantage that addEventListener() has over the older mechanisms discussed here earlier is that it allows you to register multiple handlers for the same listener. The following two handlers wouldn't both be applied:

```
myElement.onclick = functionA;
myElement.onclick = functionB;

The second line overwrites the value of onclick set by the first line.
```

- What would work, however, is the following:

```
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);

Both functions would now run when the element is selected.
```

- In addition, there are other powerful features and options available with this event mechanism.

### What mechanism should I use?

- Of the three mechanisms, you shouldn't use the HTML event handler attributes — these are outdated, and bad practice, as mentioned above.
- The other two are relatively interchangeable, at least for simple uses:
  - Event handler properties have less power and options, but better cross-browser compatibility
  - DOM Level 2 Events (addEventListener(), etc.) are more powerful, but can also become complex and are less well supported

---

## Event objects

- Sometimes inside an event handler function, you'll see a parameter specified with a name such as event, evt, or e. This is called the event object, and it is automatically passed to event handlers to provide extra features and information

```
function bgChange(e) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener('click', bgChange);
```

- The target property of the event object is always a reference to the element the event occurred upon
- **e.target** is incredibly useful when you want to set the same event handler on multiple elements and do something to all of them when an event occurs on them.
- You might, for example, have a set of 16 tiles that disappear when selected. It is useful to always be able to just set the thing to disappear as e.target, rather than having to select it in some more difficult way.
- , we create 16 \<div> elements using JavaScript. We then select all of them using document.querySelectorAll(), then loop through each one, adding an onclick handler to each that makes it so that a random color is applied to each one when selected:

```
const divs = document.querySelectorAll('div');

for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}
```

- Most event handlers you'll encounter have a standard set of properties and functions (methods) available on the event object; Some more advanced handlers, however, add specialist properties containing extra data that they need to function.

### Preventing default behavior

- Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default

### Event bubbling and capture

- Event bubbling and capture are two mechanisms that describe what happens when two handlers of the same event type are activated on one element
- When an event is fired on an element that has parent elements, modern browsers run three different phases — the capturing phase, the target phase, and the bubbling phase.
