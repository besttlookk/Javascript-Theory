# Promise.all() : static method

The **Promise.all() method** takes an **iterable of promises as an input**, and **returns a single Promise** that **resolves to an array of the results of the input promises.**

This returned promise will resolve when **all of the input's promises have resolved, or if the input iterable contains no promises.**

It **rejects immediately upon any of the input promises rejecting or non-promises throwing an error,** and will reject with this **first rejection message / error.**

#### **SYNTAX**

```js
Promise.all(iterable);
```

#### **RETURN VALUE**

It returns an **already resolved Promise** if the iterable passed is **empty or all promises are already resolved or contains NO promise at all**

It returns a **pending Promise in all other cases**. This returned promise is then resolved/rejected asynchronously (**as soon as the stack is empty**) when all the promises in the given iterable have resolved, or if any of the promises reject.

`Returned values will be in order of the Promises passed, regardless of completion order.`

#### **DESCRIPTION**

This method can be useful for aggregating the results of multiple promises(independent).

It is typically used when there are multiple related asynchronous tasks that the **overall code relies** on to work successfully — **all of whom we want to fulfill before the code execution continues.**

In **comparison,** the promise returned by **Promise.allSettled()** will wait for all input promises to complete, regardless of whether or not one rejects. Consequently, it will always return the final result of every promise and function from the input iterable.

### **Fulfillment**

The returned promise is fulfilled with an array containing all the resolved values (including non-promise values) in the iterable passed as the argument.

If an **empty iterable is passe**d, then the promise returned by this method is **fulfilled synchronously.** The **resolved value is an empty array.**

If a nonempty iterable is passed, and all of the promises fulfill, or are not promises, then the promise returned by this method is fulfilled asynchronously.

### **Rejection**

If any of the passed-in promises reject, Promise.all asynchronously rejects with the value of the promise that rejected, whether or not the other promises have resolved.

#### **EXAMPLES**

> > **USNING PROMISE.ALL()**

Promise.all **waits** for all fulfillments (or the first rejection).

```js
const p1 = Promise.resolve(3);
const p2 = 1337; // non-promise
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 2000);
});
// const p4 = new Promise((_ , reject) => {
//   setTimeout(() => {
//     reject("failure")
//   }, 3000)
// })
console.log({ p1 });
console.log({ p2 });
console.log({ p3 });

const pall = Promise.all([p1, p2])
  .then((values) => {
    console.log(values); // [3, 1337, "foo"]
  })
  .catch((error) => console.log(error));
console.log(pall);
```

If the iterable contains non-promise values, they will be ignored, but still counted in the returned promise array value (if the promise is fulfilled):

```js
// this will be counted as if the iterable passed is empty, so it gets fulfilled(synchromously)
const p = Promise.all([1, 2, 3]);
p.then((value) => console.log(value)); // [1, 2, 3]

// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
var p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
p2.then((value) => console.log(value)); // [1, 2, 3, 444]

// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
var p3 = Promise.all([1, 2, 3, Promise.reject(555)]);
p3.then((value) => console.log(value)).catch((error) => console.log(error)); // 555

console.log(p);
console.log(p2);
console.log(p3);

// using setTimeout we can execute code after the stack is empty
setTimeout(function () {
  console.log(p);
  console.log(p2);
  console.log(p3);
});
```

#### **Output**

```
Promise { Pending }
Promise { Pending }
Promise { Pending }

(3)[1, 2, 3]
(4) [1, 2, 3, 444]
555

Promise { <state>: "fulfilled", <value>: Array[3] }
Promise { <state>: "fulfilled", <value>: Array[4] }
Promise { <state>: "rejected", <reason>: 555 }
```

> > **Asynchronicity or synchronicity of Promise.all**

This following example demonstrates the asynchronicity (or synchronicity, if the iterable passed is empty) of Promise.all:

```js
// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(p);
});
```

#### **Output**

```
Promise { <state>: "pending" }
the stack is now empty
Promise { <state>: "fulfilled", <value>: Array[2] }
```

> > The same thing happens if **Promise.all rejects:**

```js
var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(p);
});
```

#### **Output**

```
Promise { <state>: "pending" }
the stack is now empty
Promise { <state>: "rejected", <reason>: 44 }
```

> > But, Promise.all resolves **synchronously if and only if the iterable passed is empty:**

```js
var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log(p);
console.log(p2);
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(p2);
});
```

#### **Output**

```
Promise { <state>: "fulfilled", <value>: Array[0] }
Promise { <state>: "pending" }
the stack is now empty
Promise { <state>: "fulfilled", <value>: Array[2] }
```

> > **Promise.all fail-fast behavior**

Promise.all is rejected if any of the elements are rejected. For example, if you pass in four promises that resolve after a timeout and one promise that rejects immediately, then Promise.all will reject immediately.

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 2000);
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 3000);
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("four"), 4000);
});
var p5 = new Promise((resolve, reject) => {
  reject(new Error("reject"));
});

// Using .catch:
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error.message);
  });

//From console:
//"reject"
```

> > It is possible to **change this behavior** by handling possible rejections:

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1_delayed_resolution"), 1000);
});

var p2 = new Promise((resolve, reject) => {
  reject(new Error("p2_immediate_rejection"));
});

Promise.all([
  p1.catch((error) => {
    return error;
  }),
  p2.catch((error) => {
    return error;
  }),
]).then((values) => {
  console.log(values[0]); // "p1_delayed_resolution"
  console.error(values[1]); // "Error: p2_immediate_rejection"
});
```

> > More example

```js
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
```

```js
// when ever we have lots of promise which does not depand on each other..its better to run all of then at once
// Running Promises in one after another(NOt good)
// Running Promises in Parallel
const getJSON = (url) => fetch(url).then((response) => response.json());

const get3Countries = async function (c1, c2, c3) {
  try {
    // promise.all returts a promise
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries("portugal", "canada", "tanzania");
```

> > same using async/ await

```
// const getJSON = (url) => fetch(url).then((response) => response.json());

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const [data1] = await getJSON(
//       `https://restcountries.eu/rest/v2/name/${c1}`
//     );
//     const [data2] = await getJSON(
//       `https://restcountries.eu/rest/v2/name/${c2}`
//     );
//     const [data3] = await getJSON(
//       `https://restcountries.eu/rest/v2/name/${c3}`
//     );
//     console.log([data1.capital, data2.capital, data3.capital]);
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries("portugal", "canada", "tanzania");
```

> > without promise.all

```js
const getJSON = (url) => fetch(url).then((response) => response.json());

const get3Countries = function (c1, c2, c3) {
  let d1, d2, d3;
  return getJSON(`https://restcountries.eu/rest/v2/name/${c1}`)
    .then((res) => {
      d1 = res;
      return getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
    })
    .then((res) => {
      d2 = res;
      return getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);
    })
    .then((res) => {
      d3 = res;
      return [d1, d2, d3];
    })
    .catch((err) => console.log(err));
};
const dataPromise = get3Countries("portugal", "canada", "tanzania");

dataPromise.then((res) => console.log(res));
```
