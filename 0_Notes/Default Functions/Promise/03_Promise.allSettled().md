# Promise.allSettled() : static method

- The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

- It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.

- In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other / if you'd like to immediately reject upon any of them rejecting.

#### **SYNTAX**

```
Promise.allSettled(iterable);

iterable
  An iterable object, such as an Array, in which each member is a Promise.
```

#### **RETURN VALUE**

- A pending Promise that will be asynchronously fulfilled once every promise in the specified collection of promises has completed, either by successfully being fulfilled or by being rejected. At that time, the returned promise's handler is passed as input an array containing the outcome of each promise in the original set of promises.

- However, if and only if an empty iterable is passed as an argument, Promise.allSettled() returns a Promise object that has already been resolved as an empty array.

- For each outcome object, a status string is present. If the status is fulfilled, then a value is present. If the status is rejected, then a reason is present. The value (or reason) reflects what value each promise was fulfilled (or rejected) with.

#### **EXAMPLES**

> > **Promise.prototype.then()**

```
Promise.allSettled([
  Promise.resolve(33),
  new Promise(resolve => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error('an error'))
])
.then(values => console.log(values));

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
```

> > **await**

```
const values = await Promise.allSettled([
  Promise.resolve(33),
  new Promise(resolve => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error('an error'))
])
console.log(values)

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
```

```
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"
```
