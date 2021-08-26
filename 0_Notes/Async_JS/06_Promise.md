# Graceful asynchronous programming with Promises

- Promises are a comparatively new feature of the JavaScript language that allow you to defer further actions until after a previous action has completed, or respond to its failure.
- This is useful for setting up a sequence of async operations to work correctly.

## What are promises?

- Essentially, a **Promise is an object** that represents an intermediate state of an operation — in effect, a promise that a result of some kind will be returned at some point in the future.
- There is no guarantee of exactly when the operation will complete and the result will be returned, but there is a guarantee that when the result is available, or the promise fails, the code you provide will be executed in order to do something else with a successful result, or to gracefully handle a failure case.
- Generally, you are less interested in the amount of time an async operation will take to return its result (unless of course, it takes far too long!), and more interested in being able to respond to it being returned, whenever that is. And of course, it's nice that it doesn't block the rest of the code execution.
- One of the most common engagements you'll have with promises is with web APIs that return a promise.

### The trouble with callbacks

- Let's talk about ordering pizza as an analogy. There are certain steps that you have to take for your order to be successful, which doesn't really make sense to try to execute out of order, or in order but before each previous step has quite finished:

```js
chooseToppings(function (toppings) {
  placeOrder(
    toppings,
    function (order) {
      collectOrder(
        order,
        function (pizza) {
          eatPizza(pizza);
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);
```

`This is messy and hard to read (often referred to as "callback hell"), requires the failureCallback() to be called multiple times (once for each nested function), with other issues besides.`

> > **Improvements with promises**

- Promises make situations like the above much easier to write, parse, and run.

```js
chooseToppings()
  .then(function (toppings) {
    return placeOrder(toppings);
  })
  .then(function (order) {
    return collectOrder(order);
  })
  .then(function (pizza) {
    eatPizza(pizza);
  })
  .catch(failureCallback);
```

- we only need a single .catch() block to handle all the errors,
- We're able to chain multiple asynchronous actions to occur one after another this way because each .then() block returns a new promise that resolves when the .then() block is done running. Clever, right?
- Using arrow functions, you can simplify the code even further:

```js
chooseToppings()
  .then((toppings) => placeOrder(toppings))
  .then((order) => collectOrder(order))
  .then((pizza) => eatPizza(pizza))
  .catch(failureCallback);
```

- Or even this:

```js
chooseToppings()
  .then((toppings) => placeOrder(toppings))
  .then((order) => collectOrder(order))
  .then((pizza) => eatPizza(pizza))
  .catch(failureCallback);
```

- You could even do this, since the functions just pass their arguments directly, so there isn't any need for that extra layer of functions:

```
chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza).catch(failureCallback);
```

`Note: You can make further improvements with async/await syntax `

- At their most basic, promises are similar to event listeners, but with a few differences:
  - A promise can only succeed or fail once. It cannot succeed or fail twice and it cannot switch from success to failure or vice versa once the operation has completed.
  - If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.

`Bear in mind that the value returned by a fulfilled promise becomes the parameter passed to the next .then() block's callback function.`

```js
fetch("coffee.jpg")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.blob();
    }
  })
  .then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.log(
      "There has been a problem with your fetch operation: " + e.message
    );
  });
```

`Note: .then()/.catch() blocks in promises are basically the async equivalent of a try...catch block in sync code. Bear in mind that synchronous try...catch won't work in async code.`

## Promise terminology recap

- When a promise is created, it is neither in a success or failure state. It is said to be **_pending_**.
- When a promise returns, it is said to be **_resolved._**
  - A successfully resolved promise is said to be fulfilled. It returns a value, which can be accessed by chaining a .then() block onto the end of the promise chain. The callback function inside the .then() block will contain the promise's return value.
  - An unsuccessful resolved promise is said to be rejected. It returns a reason, an error message stating why the promise was rejected. This reason can be accessed by chaining a .catch() block onto the end of the promise chain.

## Running some final code after a promise fulfills/rejects

- There will be cases where you want to run a final block of code after a promise completes, regardless of whether it fulfilled or rejected. Previously you'd have to include the same code in both the .then() and .catch() callbacks, for example:

```js
myPromise
  .then((response) => {
    doSomething(response);
    runFinalCode();
  })
  .catch((e) => {
    returnError(e);
    runFinalCode();
  });
```

- In more recent modern browsers, the .finally() method is available, which can be chained onto the end of your regular promise chain allowing you to cut down on code repetition and do things more elegantly. The above code can now be written as follows:

```js
myPromise
  .then((response) => {
    doSomething(response);
  })
  .catch((e) => {
    returnError(e);
  })
  .finally(() => {
    runFinalCode();
  });
```

`Note: then()/catch()/finally() is the async equivalent to try/catch/finally in sync code.`

## Building your own custom promises

- The good news is that, in a way, you've already built your own promises. When you've chained multiple promises together with .then() blocks, or otherwise combined them to create custom functionality, you are already making your own custom async promise-based functions
- Combining different promise-based APIs together to create custom functionality is by far the most common way you'll do custom things with promises, and shows the flexibility and power of basing most modern APIs around the same principle. There is another way, however.

> > **Using the Promise() constructor**

- It is possible to build your own promises using the Promise() constructor. The main situation in which you'll want to do this is when you've got code based on an old-school asynchronous API that is not promise-based, which you want to promisify. This comes in handy when you need to use existing, older project code, libraries, or frameworks along with modern promise-based code.

- Let's have a look at a simple example to get you started — here we wrap a setTimeout() call with a promise — this runs a function after two seconds that resolves the promise (using the passed resolve() call) with a string of "Success!".

```js
let timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 2000);
});
```

- **resolve() and reject() are functions that you call to fulfil or reject the newly-created promise.** In this case, the promise fulfills with a string of "Success!".
- So when you call this promise, you can chain a .then() block onto the end of it and it will be passed a string of "Success!". In the below code we alert that message:

```js
timeoutPromise.then((message) => {
  alert(message);
});
```

- or even just

```
timeoutPromise.then(alert);
```

- The above example is not very flexible — the promise can only ever fulfil with a single string, and it doesn't have any kind of reject() condition specified (admittedly, setTimeout() doesn't really have a fail condition, so it doesn't matter for this simple example).

`Note: Why resolve(), and not fulfill()? The answer we'll give you, for now, is it's complicated.`

> > **Rejecting a custom promise**

- We can create a promise that rejects using the reject() method — just like resolve(), this takes a single value, but in this case, it is the reason to reject with, i.e., the error that will be passed into the .catch() block.

- Let's extend the previous example to have some reject() conditions as well as allowing different messages to be passed upon success.

```js
function timeoutPromise(message, interval) {
  return new Promise((resolve, reject) => {
    if (message === "" || typeof message !== "string") {
      reject("Message is empty or not a string");
    } else if (interval < 0 || typeof interval !== "number") {
      reject("Interval is negative or not a number");
    } else {
      setTimeout(() => {
        resolve(message);
      }, interval);
    }
  });
}
```

- Inside the Promise constructor, we do several checks inside if ... else structures:
- Since the timeoutPromise() function returns a Promise, we can chain .then(), .catch(), etc. onto it to make use of its functionality. Let's use it now — replace the previous timeoutPromise usage with this one:

```js
timeoutPromise("Hello there!", 1000)
  .then((message) => {
    alert(message);
  })
  .catch((e) => {
    console.log("Error: " + e);
  });
```

## Using Promises

- Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.
- Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
- Imagine a function, createAudioFileAsync(), which asynchronously generates a sound file given a configuration record and two callback functions, one called if the audio file is successfully created, and the other called if an error occurs.

```js
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```

- If createAudioFileAsync() were rewritten to return a promise, you would attach your callbacks to it instead:

```
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

- This convention has several advantages. We will explore each one.

#### **ADVANTAGE 1 : Guarantees**

- Unlike old-fashioned passed-in callbacks, a promise comes with some guarantees:
  - Callbacks added with then() will never be invoked before the completion of the current run of the JavaScript event loop.
  - These callbacks will be invoked even if they were added after the success or failure of the asynchronous operation that the promise represents.
  - Multiple callbacks may be added by calling then() several times. They will be invoked one after another, in the order in which they were inserted.

#### **ADVANTAGE 1 : Chaining**

- A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step.
- We accomplish this by creating a promise chain.
- Here's the magic: the then() function returns a new promise, different from the original:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

##### **OR**

```js
const promise2 = doSomething().then(successCallback, failureCallback);
```

- This second promise (promise2) represents the completion not just of doSomething(), but also of the successCallback or failureCallback you passed in, which can be other asynchronous functions returning a promise. When that's the case, any callbacks added to promise2 get queued behind the promise returned by either successCallback or failureCallback.
- In the old days, doing several asynchronous operations in a row would lead to the classic callback pyramid of doom:

```js
doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log("Got the final result: " + finalResult);
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);
```

## Chaining after a catch

- It's possible to chain after a failure, i.e. a catch, which is useful to accomplish new actions even after an action failed in the chain. Read the following example:

```js
new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
})
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });
```

- This will output the following text:

```
Initial
Do that
Do this, no matter what happened before
```

`Note: The text "Do this" is not displayed because the "Something failed" error caused a rejection.`

## Error propagation

- You might recall seeing failureCallback three times in the pyramid of doom earlier, compared to only once at the end of the promise chain:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

- If there's an exception, the browser will look down the chain for .catch() handlers or onRejected. This is very much modeled after how synchronous code works:

```js
try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch (error) {
  failureCallback(error);
}
```

- This symmetry with asynchronous code culminates in the async/await syntactic sugar in ECMAScript 2017:

```
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch(error) {
    failureCallback(error);
  }
}
```

- Promises solve a fundamental flaw with the callback pyramid of doom, by catching all errors, even thrown exceptions and programming errors. This is essential for functional composition of asynchronous operations.

## Creating a Promise around an old callback API

- A Promise can be created from scratch using its constructor. This should be needed only to wrap old APIs.
- In an ideal world, all asynchronous functions would already return promises. Unfortunately, some APIs still expect success and/or failure callbacks to be passed in the old way. The most obvious example is the setTimeout() function:

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

- Mixing old-style callbacks and promises is problematic. If saySomething() fails or contains a programming error, nothing catches it. setTimeout is to blame for this.
- Luckily we can wrap setTimeout in a promise. Best practice is to wrap problematic functions at the lowest possible level, and then never call them directly again:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

- Basically, the promise constructor takes an executor function that lets us resolve or reject a promise manually. Since setTimeout() doesn't really fail, we left out reject in this case.

## Composition

- Promise.resolve() and Promise.reject() are shortcuts to manually create an already resolved or rejected promise respectively. This can be useful at times.

- Promise.all() and Promise.race() are two composition tools for running asynchronous operations in parallel.

- We can start operations in parallel and wait for them all to finish like this:

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  /* use result1, result2 and result3 */
});
```

- Sequential composition is possible using some clever JavaScript:

```
[func1, func2, func3].reduce((p, f) => p.then(f), Promise.resolve())
.then(result3 => { /* use result3 */ });
```

- Basically, we reduce an array of asynchronous functions down to a promise chain equivalent to: Promise.resolve().then(func1).then(func2).then(func3);
- This can be made into a reusable compose function, which is common in functional programming:

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
```

- The composeAsync() function will accept any number of functions as arguments, and will return a new function that accepts an initial value to be passed through the composition pipeline:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

- In ECMAScript 2017, sequential composition can be done more with async/await:

```
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

## Timing

- To avoid surprises, functions passed to then() will never be called synchronously, even with an already-resolved promise:

```js
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
```

- Instead of running immediately, the passed-in function is put on a microtask queue, which means it runs later (only after the function which created it exits, and when the JavaScript execution stack is empty), just before control is returned to the event loop; i.e. pretty soon:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### Task queues vs microtasks

- Promise callbacks are handled as a Microtask whereas setTimeout() callbacks are handled as Task queues.

```js
const promise = new Promise(function (resolve, reject) {
  console.log("Promise callback");
  resolve();
}).then(function (result) {
  console.log("Promise callback (.then)");
});

setTimeout(function () {
  console.log("event-loop cycle: Promise (fulfilled)", promise);
}, 0);

console.log("Promise (pending)", promise);
```

- The code above will output:

```
Promise callback
Promise (pending) Promise {<pending>}
Promise callback (.then)
event-loop cycle: Promise (fulfilled) Promise {<fulfilled>}
```

## 3 Ways to Promise

- There are 3 ways you could want promises to resolve, parallel (all together), sequential (1 after another), or a race (doesn't matter who wins).

```js
const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done: ${output1} ${output2} ${output3}`;
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);

// race is done: a
// parallel is done: a b c
// sequence is done: a b c
```

#### **EXAMPLE**

```js
// Promise Consuming

// manual error handling: rejected promise do not thow error...we have to manually throw error
// making two related async call

function findCountry(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`) //fetch returns promise
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then((data) => {
      console.log(data[0]);
      console.log(`Capital of ${data[0].name} is ${data[0].capital} `);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error("No neighbour found");
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then((data) => {
      console.log(`Neighbour Country is ${data.name}`);
    })
    .catch((err) => console.error(err.message));
}

findCountry("canada");
```

```js
// =========================Minimizing above code==============================
function getJSON(url, errMsg) {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errMsg}(${response.status})`);
    return response.json();
  });
}

function findCountry(country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    "Country Not Found!"
  )
    .then((data) => {
      console.log(`Capital of ${data[0].name} is ${data[0].capital} `);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error("No neighbour found");
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        "Country Not Found!"
      );
    })

    .then((data) => {
      console.log(`Neighbour Country is ${data.name}`);
    })
    .catch((err) => console.error(err.message));
}

findCountry("canada");
```

#### Event loop & micro task

```js
// Notice the order of printing in console
// setTimer callback function after the exacusting of timer get to the "callback queue"
// promise once fullfilled get into "microtask queue"
// "microtask queue" has higher priority over "callback queue"
console.log("Test Start"); // 1st to print
setTimeout(() => console.log("0 sec timer"), 0); // even though timer is of 0 secds...callback function will only run if all the micro task is complete...how much time it take
Promise.resolve("Resolved promise 1").then((res) => console.log(res)); // 3rd to print
Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res); // 4th to print
});

console.log("Test End"); // 2nd to print
```
