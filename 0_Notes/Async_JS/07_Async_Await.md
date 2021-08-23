# Making asynchronous programming easier with async and await

- More recent additions to the JavaScript language are async functions and the await keyword, added in ECMAScript 2017. These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning.

## The basics of async/await

### The async keyword

- First of all we have the async keyword, which you put in front of a function declaration to turn it into an async function. An async function is a function that knows how to expect the possibility of the await keyword being used to invoke asynchronous code.
- Try typing the following lines into your browser's JS console:

```
function hello() { return "Hello" };
hello();
```

- The function returns "Hello" — nothing special, right?
- But what if we turn this into an async function? Try the following:

```
async function hello() { return "Hello" };
hello();
```

- Ah. Invoking the function now returns a promise. This is one of the traits of async functions — their return values are guaranteed to be converted to promises.
- You can also create an async function expression, like so:

```
let hello = async function() { return "Hello" };
hello();
```

- And you can use arrow functions:

```
let hello = async () => { return "Hello" };
```

- So the async keyword is added to functions to tell them to return a promise rather than directly returning the value.

### The await keyword

- The advantage of an async function only becomes apparent when you combine it with the await keyword. await only works inside async functions within regular JavaScript code, however it can be used on its own with JavaScript modules.
- await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.
- You can use await when calling any function that returns a Promise, including web API functions.

## Rewriting promise code with async/await

```
fetch('coffee.jpg')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.blob();
})
.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
```

- let's convert this to use async/await to see how much simpler it makes things:

```
async function myFetch() {
  let response = await fetch('coffee.jpg');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch()
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
```

- Since an async keyword turns a function into a promise, you could refactor your code to use a hybrid approach of promises and await, bringing the second half of the function out into a new block to make it more flexible:

```
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.blob();

}

myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch(e => console.log(e));
```

## But how does it work?

- The await keyword causes the JavaScript runtime to pause your code on this line, not allowing further code to execute in the meantime until the async function call has returned its result — very useful if subsequent code relies on that result!
- Once that's complete, your code continues to execute starting on the next line.

```
let response = await fetch('coffee.jpg');
```

- The response returned by the fulfilled fetch() promise is assigned to the response variable when that response becomes available, and the parser pauses on this line until that occurs
- Once the response is available, the parser moves to the next line, which creates a Blob out of it

## Adding error handling

- And if you want to add error handling, you've got a couple of options.
- You can use a synchronous try...catch structure with async/await

```
async function myFetch() {
  try {
    let response = await fetch('coffee.jpg');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let myBlob = await response.blob();
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);

  } catch(e) {
    console.log(e);
  }
}

myFetch();
```

- If you wanted to use the second (refactored) version of the code that we showed above, you would be better off just continuing the hybrid approach and chaining a .catch() block onto the end of the .then() call, like this:

```
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.blob();

}

myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch((e) =>
  console.log(e)
);
```

- This is because the .catch() block will catch errors occurring in both the async function call and the promise chain. If you used the try/catch block here, you might still get unhandled errors in the myFetch() function when it's called.

## Awaiting a Promise.all()

- async/await is built on top of promises, so it's compatible with all the features offered by promises.
- This includes Promise.all() — you can quite happily await a Promise.all() call to get all the results returned into a variable in a way that looks like simple synchronous code

```
async function fetchAndDecode(url, type) {
  let response = await fetch(url);

  let content;

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    if(type === 'blob') {
      content = await response.blob();
    } else if(type === 'text') {
      content = await response.text();
    }
  }

  return content;


}

async function displayContent() {
  let coffee = fetchAndDecode('coffee.jpg', 'blob');
  let tea = fetchAndDecode('tea.jpg', 'blob');
  let description = fetchAndDecode('description.txt', 'text');

  let values = await Promise.all([coffee, tea, description]);

  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);
}

displayContent()
.catch((e) =>
  console.log(e)
);
```

- By using await here we are able to get all the results of the three promises returned into the values array, when they are all available, in a way that looks very much like sync code.
- We've had to wrap all the code in a new async function, displayContent(), and we've not reduced the code by a lot of lines, but being able to move the bulk of the code out of the .then() block provides a nice, useful simplification, leaving us with a much more readable program.
- For error handling, we've included a .catch() block on our displayContent() call; this will handle errors occurring in both functions.

`Note: It is also possible to use a sync finally block within an async function, in place of a .finally() async block, to show a final report on how the operation went`

## Handling async/await slowdown

- In the slow-async-await.html example, timeTest() looks like this:

```
async function timeTest() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}
```

- Here we await all three timeoutPromise() calls directly, making each one alert after 3 seconds. Each subsequent one is forced to wait until the last one finished — if you run the first example, you'll see the alert box reporting a total run time of around 9 seconds.
- In the fast-async-await.html example, timeTest() looks like this:

```
async function timeTest() {
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
}
```

- Here we store the three Promise objects in variables, which has the effect of setting off their associated processes all running simultaneously.
- Next, we await their results — because the promises all started processing at essentially the same time, the promises will all fulfill at the same time; when you run the second example, you'll see the alert box reporting a total run time of just over 3 seconds!
- There is an issue with the above pattern however — it could lead to unhandled errors.
- Let's update the previous examples, this time adding a rejected promise and a catch statement in the end:

```
function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("successful");
    }, interval);
  });
};

function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      reject("error");
    }, interval);
  });
};

async function timeTest() {
  await timeoutPromiseResolve(5000);
  await timeoutPromiseReject(2000);
  await timeoutPromiseResolve(3000);
}

let startTime = Date.now();
timeTest().then(() => {})
.catch(e => {
  console.log(e);
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert("Time taken in milliseconds: " + timeTaken);
})
```

- In the above example, the error is handled properly, and the alert appears after approximately 7 seconds.

Now onto the second pattern:

```
function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("successful");
    }, interval);
  });
};

function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      reject("error");
    }, interval);
  });
};

async function timeTest() {
  const timeoutPromiseResolve1 = timeoutPromiseResolve(5000);
  const timeoutPromiseReject2 = timeoutPromiseReject(2000);
  const timeoutPromiseResolve3 = timeoutPromiseResolve(3000);

  await timeoutPromiseResolve1;
  await timeoutPromiseReject2;
  await timeoutPromiseResolve3;
}

let startTime = Date.now();
timeTest().then(() => {
}).catch(e => {
  console.log(e);
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert("Time taken in milliseconds: " + timeTaken);
})
```

- In this example, we have an unhandled error in the console (after 2 seconds), and the alert appears after approximately 5 seconds.
- To start the promises in parallel and catch the error properly, we could use Promise.all(), as discussed earlier:

```

function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("successful");
    }, interval);
  });
};

function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      reject("error");
    }, interval);
  });
};

async function timeTest() {
  const timeoutPromiseResolve1 = timeoutPromiseResolve(5000);
  const timeoutPromiseReject2 = timeoutPromiseReject(2000);
  const timeoutPromiseResolve3 = timeoutPromiseResolve(3000);

  const results = await Promise.all([timeoutPromiseResolve1, timeoutPromiseReject2, timeoutPromiseResolve3]);
  return results;
}

let startTime = Date.now();
timeTest().then(() => {
}).catch(e => {
  console.log(e);
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert("Time taken in milliseconds: " + timeTaken);
})
```

- In this example, the error is handled properly after around 2 seconds and we also see the alert after around 2 seconds.
- The Promise.all() rejects when any of the input promises are rejected. If you want all the promises to settle and then use some of their fulfilled values, even when some of them are rejected, you could use Promise.allSettled() instead.
