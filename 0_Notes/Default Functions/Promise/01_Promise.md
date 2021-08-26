# Promise

- A Promise is a **proxy** for a value not necessarily known when the promise is created.
- It allows you to associate handlers with an asynchronous **action's eventual success** value or **failure reason.**
- This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
- A Promise is in one of these states:
  - **pending:** initial state, neither fulfilled nor rejected.
  - **fulfilled:** meaning that the operation was completed successfully.
  - **rejected:** meaning that the operation failed.
- A pending promise can either be **fulfilled with a value** or **rejected with a reason (error).**
- When either of these options happens, the **associated handlers** queued up by a promise's then method are called.

- **A successfully resolved promise is said to be fulfilled.** It returns a value, which can be accessed by chaining a .then() block onto the end of the promise chain. The **callback function inside the .then() block will contain the promise's return value.**
- An **unsuccessful resolved promise is said to be rejected.** It returns a reason, an error message stating why the promise was rejected. **This reason can be accessed by chaining a .catch() block onto the end of the promise chain.**

> > > If the promise has **already been fulfilled or rejected** when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

- As the **Promise.prototype.then()** and **Promise.prototype.catch()** methods return promises, they can be chained.

## Promise() constructor

The Promise constructor is primarily used to **wrap functions that do not already support promises.**

#### **SYNTAX**

```js
new Promise(executor);
```

- **executor**
  - It is a function to be executed by the constructor, during the process of constructing the new Promise object.
  - The executor is custom code that ties an outcome to a promise. You, the programmer, write the executor. Its signature is expected to be:

```js
    function(resolutionFunc, rejectionFunc){
      // typically, some asynchronous operation.
    }
```

**resolutionFunc and rejectionFunc** are also functions, and you can give them whatever actual names you want. Their signatures are simple: **they accept a single parameter of any type.**

```js
resolutionFunc(value); // call on resolved
rejectionFunc(reason); // call on rejected
```

The **resolutionFunc value** parameter **can be another promise object**, in which case the promise gets dynamically inserted into the promise chain.

About the executor, it’s important to understand the following:

- The **executor return value is ignored.**
- If an error is thrown in the executor, the promise is rejected.

So the mechanism by which the code within the executor has affect is as follows:

- At the time when the constructor generates the new Promise object, it also generates a corresponding pair of functions for resolutionFunc and rejectionFunc; **these are "tethered" to the Promise object.**
- The code within the executor has the opportunity to perform some operation and then reflect the operation's outcome (if the value is not another Promise object) as either "resolved" or "rejected", by terminating with an invocation of either the resolutionFunc or the rejectionFunc, respectively.
- In other words, the code within the executor communicates via the side effect caused by resolutionFunc or rejectionFunc. The side effect is that the Promise object either becomes "resolved", or "rejected".

And so, given all the above, here’s a **summary of the typical flow:**

1. The operation within executor is asynchronous and provides a callback.
2. The callback is defined within the executor code.
3. The callback terminates by invoking resolutionFunc.
4. The invocation of resolutionFunc includes a value parameter.
5. The value is passed back to the tethered Promise object.
6. The Promise object (asynchronously) invokes any associated .then(handleResolved).
7. The value received by .then(handleResolved) is passed to the invocation of handleResolved as an input parameter (see Chained Promises).

### Return value

When called via **new,** the **Promise constructor returns a promise object**.

The promise object will become **"resolved"** when either of the functions resolutionFunc or rejectionFunc are invoked.

`Note that if you call resolutionFunc or rejectionFunc and pass another Promise object as an argument, you can say that it is "resolved", but still cannot be said to be "settled".`

#### **EXAMPLES**

> > **Creating a new Promise**

A Promise object is created using the **new keyword and its constructor.**

This constructor takes a function, called the "executor function", as its parameter.This function should take two functions as parameters.

The first of these functions (resolve) is called when the asynchronous task **completes successfully and returns the results of the task as a value.**

The second (reject) is called when the task fails, and returns the reason for failure, which is typically an **error object.**

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue)        // fulfilled
  // or
  //   reject("failure reason")  // rejected
});
```

#### **EXAMPLE**

```js
// lottery promise
const lotteryPromise = new Promise((resolve, reject) => {
  const winnerNumber = Math.trunc(Math.random() * 10) + 1;
  console.log(winnerNumber);
  if (winnerNumber <= 5) reject("You Lose!");
  else resolve("Congratulations! YOU WON!!");
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));
```

```js
// Pretend that this response is coming from the server

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(`${post.title} ----> ${post.body} `);
    });
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: something went wrong");
      }
    }, 2000);
  });
}
createPost({ title: "Post three", body: "This is post three" })
  .then(getPosts)
  .catch((error) => console.log(error));
```

```js
function func1() {
  return new Promise(function (resolve, reject) {
    // promise is a predefine constructor
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function: Your promise has been resolved"); // just to check
        resolve();
      } else {
        console.log("Function: Your promise has not been resolved");
        reject("Sorry not fulfilled"); // reject ke ander "error" messgae hai
      }
    }, 2000);
  });
}

func1()
  .then(function () {
    console.log("Harry: Thanks for resolving");
  })
  .catch(function (error) {
    console.log("Harry: Very bad bro. Reason: " + error);
  });
```

> > **Promisisfy**

```js
// Promisify set timer: changing callback based setTimer into promise based
const wait = (sec) => {
  return new Promise((resolve, _) => {
    setTimeout(resolve, sec * 1000);
  });
};

// we can chain as main set timer one after another without going into callback hell
// wait(1)
//   .then(() => {
//     console.log("1 sec");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 sec");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 sec");
//     return wait(1);
//   })
//   .then(() => console.log("4 sec"));

// same thing using normal setTimeout
//  callback hell
setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 seconds passed");
    setTimeout(() => {
      console.log("3 second passed");
      setTimeout(() => {
        console.log("4 second passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

```js
// Other Promise Combinators: race, allSettled and any
const getJSON = (url) => fetch(url).then((response) => response.json());

// -------Promise.race
// // which ever promise settled first will give result..other will get neglated
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// ---use of promise.race in real life: if a request take much longer: cancel it
// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error("Request took too long!"));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/canada`),
//   timeout(1),
// ])
//   .then((res) => console.log(res[0]))
//   .catch((err) => console.error(err));

//---------------------------------- 2. Promise.allSettled
/*
The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.

n comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other / if you'd like to immediately reject upon any of them rejecting.

*/
// Promise.allSettled([
//   Promise.resolve("Success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Another success"),
// ]).then((res) => console.log(res));

// ------------------------------------- 3. Promise.all---------------
// t rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

// Promise.all([
//   Promise.resolve("Success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Another success"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// ----------------------------------4. Promise.any()
// // Promise.any [ES2021]
// Promise.any([
//   Promise.resolve("Success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Another success"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
```
