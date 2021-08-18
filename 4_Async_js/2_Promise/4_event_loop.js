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
