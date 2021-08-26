"use strict";

/**
 ES6 Job Queue/ Micro-Task queue
ES6 introduced the concept of job queue/micro-task queue which is used by Promises in JavaScript. The difference between the message queue and the job queue is that the job queue has a higher priority than the message queue, which means that promise jobs inside the job queue/ micro-task queue will be executed before the callbacks inside the message queue.

console.log('Script start');
setTimeout(() => {
  console.log('setTimeout');
}, 0);
new Promise((resolve, reject) => {
    resolve('Promise resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
console.log('Script End');

console.log('Script start');
setTimeout(() => {
  console.log('setTimeout 1');
}, 0);
setTimeout(() => {
  console.log('setTimeout 2');
}, 0);
new Promise((resolve, reject) => {
    resolve('Promise 1 resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
new Promise((resolve, reject) => {
    resolve('Promise 2 resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
console.log('Script End');
 */
// -------------AJAX REVISION ------------------

// AJAX call using HttpRequest Object ----> replaced by Fetch API
//  https://jsonplaceholder.typicode.com/todos/1

// properties of xhr: readyState / resposeText / status / statusText / onLoad / onreadystatechange
// methods of xhr : open / send
// resposeStattus : 1 / 2/ 3/ 4
// instance of XHR object created
// const xhr = new XMLHttpRequest();
// console.log(xhr.readyState); // 0  --> request NOT initialized

// sending request
// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
// console.log(xhr.readyState); // 1  --> request initialized & server connection  establish

// xhr.onload = function () {
//   console.log(xhr.readyState); // 4 request finised and response is ready
//   console.log(xhr.response);
// };

// xhr.onreadystatechange = function () {
//   console.log(xhr.readyState);  // 3: request received  /4: request processing
//   console.log(xhr.response);
// };

// xhr.send();

// ----------------Callback----------------------------
//  first class function Vs Higher order function
// what is callback
// synchronous callback and async callback

// -------------------------------fetch API
// **The fetch() method takes one mandatory argument**, the path to the resource you want to fetch.
//  **It returns a Promise that resolves to the Response** to that request —even if the server response is an HTTP error status.
//  Y**ou can create a request and response directly using the Request() and Response() constructors,**
//  The fetch() method of the WindowOrWorkerGlobalScope mixin starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.
//  const fetchResponsePromise = fetch(resource [, init])
//  init (Optional) - method(GET/POST...) / headers / body ...etc

// const posts = [
//   { title: "Post One", body: "This is post one" },
//   { title: "Post two", body: "This is post two" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       console.log(`${post.title} ----> ${post.body} `);
//     });
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);

//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Error: something went wrong");
//       }
//     }, 2000);
//   });
// }
// createPost({ title: "Post three", body: "This is post three" })
//   .then(getPosts)
//   .catch((error) => console.log(error));

// const p1 = Promise.resolve(3);
// const p2 = 1337; // non-promise
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 2000);
// });
// // const p4 = new Promise((_ , reject) => {
// //   setTimeout(() => {
// //     reject("failure")
// //   }, 3000)
// // })
// console.log({ p1 });
// console.log({ p2 });
// console.log({ p3 });

// const pall = Promise.all([p1, p2])
//   .then((values) => {
//     console.log(values); // [3, 1337, "foo"]
//   })
//   .catch((error) => console.log(error));
// console.log(pall);

// ----
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
