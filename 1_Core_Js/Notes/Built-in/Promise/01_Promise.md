# Promise

- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- A Promise is a proxy for a value not necessarily known when the promise is created.
- It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
- This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
- A Promise is in one of these states:
  - pending: initial state, neither fulfilled nor rejected.
  - fulfilled: meaning that the operation was completed successfully.
  - rejected: meaning that the operation failed.
- A pending promise can either be fulfilled with a value or rejected with a reason (error).
- When either of these options happens, the associated handlers queued up by a promise's then method are called.
- If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.
- As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

## Promise() constructor

- The Promise constructor is primarily used to wrap functions that do not already support promises.

#### **SYNTAX**

```
new Promise(executor)
```

- executor
  - A function to be executed by the constructor, during the process of constructing the new Promise object.
  - The executor is custom code that ties an outcome to a promise. You, the programmer, write the executor. Its signature is expected to be:

```
    function(resolutionFunc, rejectionFunc){
      // typically, some asynchronous operation.
    }
```

- resolutionFunc and rejectionFunc are also functions, and you can give them whatever actual names you want. Their signatures are simple: they accept a single parameter of any type.

```
    resolutionFunc(value) // call on resolved
    rejectionFunc(reason) // call on rejected
```

- The resolutionFunc value parameter can be another promise object, in which case the promise gets dynamically inserted into the promise chain.
- About the executor, it’s important to understand the following:
  - The executor return value is ignored.
  - If an error is thrown in the executor, the promise is rejected.
- So the mechanism by which the code within the executor has affect is as follows:
  - At the time when the constructor generates the new Promise object, it also generates a corresponding pair of functions for resolutionFunc and rejectionFunc; these are "tethered" to the Promise object.
  - The code within the executor has the opportunity to perform some operation and then reflect the operation's outcome (if the value is not another Promise object) as either "resolved" or "rejected", by terminating with an invocation of either the resolutionFunc or the rejectionFunc, respectively.
  - In other words, the code within the executor communicates via the side effect caused by resolutionFunc or rejectionFunc. The side effect is that the Promise object either becomes "resolved", or "rejected".
- And so, given all the above, here’s a summary of the typical flow:
  1. The operation within executor is asynchronous and provides a callback.
  2. The callback is defined within the executor code.
  3. The callback terminates by invoking resolutionFunc.
  4. The invocation of resolutionFunc includes a value parameter.
  5. The value is passed back to the tethered Promise object.
  6. The Promise object (asynchronously) invokes any associated .then(handleResolved).
  7. The value received by .then(handleResolved) is passed to the invocation of handleResolved as an input parameter (see Chained Promises).

### Return value

- When called via new, the Promise constructor returns a promise object. The promise object will become "resolved" when either of the functions resolutionFunc or rejectionFunc are invoked. Note that if you call resolutionFunc or rejectionFunc and pass another Promise object as an argument, you can say that it is "resolved", but still cannot be said to be "settled".

#### **EXAMPLES**

> > **Creating a new Promise**

- A Promise object is created using the new keyword and its constructor. This constructor takes a function, called the "executor function", as its parameter.
- This function should take two functions as parameters.
- The first of these functions (resolve) is called when the asynchronous task completes successfully and returns the results of the task as a value.
- The second (reject) is called when the task fails, and returns the reason for failure, which is typically an error object.

```
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue)        // fulfilled
  // or
  //   reject("failure reason")  // rejected
});
```

---
