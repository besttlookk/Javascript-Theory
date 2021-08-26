# Promise.prototype.then()

**The then() method returns a Promise.**

It takes up to two arguments: **callback functions for the success and failure cases of the Promise.**

#### **SYNTAX**

```js
p.then(onFulfilled[, onRejected]);

p.then(value => {
  // fulfillment
}, reason => {
  // rejection
});
```

`Note: If one or both arguments are omitted or are provided non-functions, then then will be missing the handler(s), but will not generate any errors. If the Promise that then is called on adopts a state (fulfillment or rejection) for which then has no handler, the returned promise adopts the final state of the original Promise on which then was called.`

#### **PARAMETERS**

**onFulfilled (Optional)**

- A Function called if the Promise is fulfilled.
- This function has one argument, the fulfillment value. If it is not a function, it is internally replaced with an **"Identity" function** (it returns the received argument).

**onRejected (Optional)**

- A Function called if the Promise is rejected.
- This function has one argument, the rejection reason. If it is not a function, it is internally replaced with a "Thrower" function (it throws an error it received as argument).

#### **RETURN VALUE**

Once a Promise is fulfilled or rejected, the respective handler function (onFulfilled or onRejected) will be called asynchronously (scheduled in the current thread loop). The behavior of the handler function follows a specific set of rules. If a handler function:

- **returns a value,** the **promise returned by then** gets **resolved with the returned value** as its value.

```js
let p1 = Promise.resolve(34).then((value) => value); // Returning Value === 34
console.log(p1);
setTimeout(() => {
  console.log(p1);
}, 0);
```

#### **OUTPUT**

```
Promise {<pending>}
Promise {<fulfilled> : 34}
```

- **doesn't return anything,** the promise returned by then **gets resolved with an undefined value.**

```js
let p1 = Promise.resolve(34).then((value) => console.log(value)); // we are not returning from then method
console.log(p1);
setTimeout(() => {
  console.log(p1);
}, 0);
```

#### **OUTPUT**

```
Promise {<pending>}
34
Promise {<fulfilled> : undefined}
```

- **throws an error,** the promise returned by **_then_** gets **rejected with the thrown error as its value.**

```js
let p3 = Promise.reject("Request failed")
  .then((value) => console.log(value))
  .catch((error) => {
    throw new Error(error);
  });
console.log(p3);
setTimeout(() => {
  console.log(p3);
}, 0);
```

#### **OUTPUT**

```
Promise {<pending>}
<!-- error  -->
Promise {<rejected> : Error : request vailed}
```

- **returns an already fulfilled promise,** the promise returned by then **gets fulfilled with that promise's value as its value.**

```js
let p4 = Promise.resolve(34).then((value) => Promise.resolve(value));

console.log(p4);
setTimeout(() => {
  console.log(p4);
}, 0);
```

#### **OUTPUT**

```
Promise {<pending>}
Promise {<fullfilles> : 34}
```

- r**eturns an already rejected promise,** the promise returned by then gets rejected with that promise's value as its value.

```js
let p5 = Promise.resolve(34)
  .then((value) => {
    if (value === 34) return Promise.reject("Request Failed");
  })
  .catch((error) => {
    throw new Error(error);
  });
console.log(p5);
setTimeout(() => {
  console.log(p5);
}, 0);
```

#### **OUTPUT**

```
Promise {<pending>}
<!-- error -->
Promise {<rejected> : Error: Request Failed}
```

- **returns another pending promise object**, the resolution/rejection of the promise returned by then will be subsequent to the resolution/rejection of the promise returned by the handler. Also, the **resolved value of the promise returned by then will be the same as the resolved value of the promise returned by the handler.**

```js
let p6 = Promise.resolve(34).then((value) => {
  return new Promise((resolve, reject) => {
    let error = false; // try changing error to true

    if (!error) resolve(value);
    else reject("Request Failed");
  });
});

console.log(p6);
setTimeout(() => {
  console.log(p6);
}, 0);
```

#### **OUTPUT**

```
<!-- in case error is false -->
Promise {<pending>}
Promise {<fullfilled> : 34}
```

```
<!-- in case error is true -->
Uncaught (in promise) Request Failed
Promise {<fullfilled> : 34}
```

> > Following, an example to demonstrate the asynchronicity of the then method.

```js
// using a resolved promise, the 'then' block will be triggered instantly,
// but its handlers will be triggered asynchronously as demonstrated by the console.logs
const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then((value) => {
  console.log(
    "this gets called after the end of the main stack. the value received and returned is: " +
      value
  );
  return value;
});
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(() => {
  console.log(thenProm);
});

// logs, in order:
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// "this gets called after the end of the main stack. the value received and returned is: 33"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 33}
```

- As the then and Promise.prototype.catch() methods return promises, they can be chained — an operation called composition.

#### **EXAMPLES**

> > **Using the then method**

```js
var p1 = new Promise((resolve, reject) => {
  resolve("Success!");
  // or
  // reject(new Error("Error!"));
});

p1.then(
  (value) => {
    console.log(value); // Success!
  },
  (reason) => {
    console.error(reason); // Error!
  }
);
```

> > **Chaining**

- The then method returns a Promise which allows for method chaining.

- If the function passed as handler to then returns a Promise, an equivalent Promise will be exposed to the subsequent then in the method chain. The below snippet simulates asynchronous code with the setTimeout function.

```js
Promise.resolve("foo")
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(function (string) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        string += "bar";
        resolve(string);
      }, 1);
    });
  })
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then(function (string) {
    setTimeout(function () {
      string += "baz";
      console.log(string); // foobarbaz
    }, 1);
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then(function (string) {
    console.log(
      "Last Then:  oops... didn't bother to instantiate and return " +
        "a promise in the prior then so the sequence may be a bit " +
        "surprising"
    );

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string); // foobar
  });

// logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
```
