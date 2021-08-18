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
