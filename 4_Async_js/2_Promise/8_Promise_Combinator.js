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
