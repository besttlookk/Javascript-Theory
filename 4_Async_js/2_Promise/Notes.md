# JavaScript Promises

## What are promises?

- It is an Object that can be used as a placeholder for the furture result of asynchronousoperation.
- It is like a container for an asynchronously delivered value.
- A container for future value(response from an AJAX call)

## Promise analogy : Lottery ticket

- Promise that I will receive money if I guess correct output
- That means whenever we buy a lottery ticket, esentially we buy a promise that we gonna win money in the future if i get correct outcome
- Lottery draw happens asynchronously
- If correct outcome, I receive money, bcoz it was promised.

## Benifites of using promise:

- We no longerneed to rely on events and callbacks passes toasynchronous function to handle asynchrous result.
- Instead of nesting callback, we can chain promises for a sequenceof asynchronous operations:**escaping callbacks hell**

## Promises Lifecycle

- Since promises works with async operations, they are time sensitive, so they change over time , so promises can be in different state.And this is what we call lifecycle of a promise:

  - Before the future value is available: **PENDING**
  - When async tasks finises: task is **SETTLED**
  - There are 2 different types of settled promises:**FULFILLED PROMISE** and **REJECTED PROMISE**
    - Fullfilled :Success!The valueis now available
    - Rejected :An error happened.
  - Promise is always settled once. From there state will never change.

- When we already have a promise: we **Consumes the promise**

## JavaScript Promise Object

- A JavaScript Promise object contains both the producing code and calls to the consuming code:

### Promise Syntax

```

let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

## Promise Object Properties

- A JavaScript Promise object can be:
  - Pending
  - Fulfilled
  - Rejected
- The Promise object supports two **properties: state and result.**

- While a Promise object is **"pending"** (working), the **result is undefined.**

- When a Promise object is **"fulfilled",** the **result is a value.**

- When a Promise object is **"rejected",** the **result is an error object.**
  <div style="color:red">
      You cannot access the Promise properties state and result.

  You must use a Promise method to handle promises.

</div>

## Promise How To

Here is how to use a Promise:

```
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

- **Promise.then() takes two arguments, a callback for success and another for failure.**

- **Both are optional, so you can add a callback for success or failure only.**

```
Example
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```

---
