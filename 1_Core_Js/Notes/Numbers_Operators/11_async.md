# Primary expression: async function expression

- The async function keyword can be used to define async functions inside expressions.

- You can also define async functions using an async function statement.

#### **SYNTAX**

```
async function [name]([param1[, param2[, ..., paramN]]]) {
  statements
}
```

- As of ES2015, you can also use arrow functions.
- An async function expression is very similar to, and has almost the same syntax as, an async function statement.
- The main difference between an async function expression and an async function statement is the function name, which can be omitted in async function expressions to create anonymous functions.
- An async function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined

#### **EXAMPLES**

```
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};

const add = async function(x) { // async function expression assigned to a variable
  let a = await resolveAfter2Seconds(20);
  let b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});

(async function(x) { // async function expression used as an IIFE
  let p_a = resolveAfter2Seconds(20);
  let p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
})(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});
```
