# JavaScript let: Declaring Block-Scoped Variables

- In ES5, when you declare a variable using the **var keyword**, the scope of the variable is **either global or local**.
- If you declare a variable outside of a function, the scope of the variable is global. When you declare a variable inside a function, the scope of the variable is local.
- ES6 provides a new way of declaring a variable by using the let keyword. The let keyword is similar to the var keyword, except that these variables are blocked-scope
- In JavaScript, blocks are denoted by curly braces {} , for example, the if else, for, do while, while, try catch and so on:

```js
let x = 10;
if (x == 10) {
  let x = 20;
  console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script
```

Because the let keyword declares a block-scoped variable, the x variable inside the if block is a new variable and it shadows the x variable declared at the top of the script. Therefore, the value of x in the console is 20.

## JavaScript let and global object

- When you declare a **global variable using the var** keyword, **you add that variable to the property list of the global object.** In the case of the web browser, the global object is the window
- However, when you use the **let keyword** to declare a variable, that variable is **not attached to the global object as a property.**

```js
var a = 10;
console.log(window.a); // 10

let b = 20;
console.log(window.b); // undefined
```

## JavaScript let and callback function in a for loop

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

The intention of the code is to output numbers from 0 to 4 to the console every second. However, it outputs the number 5 five times:

```
5
5
5
5
5
```

`In this example, the variable i is a global variable. After the loop, its value is 5. When the callback functions are passed to the setTimeout() function executes, they reference the same variable i with the value 5.`

> > In ES5, you can fix this issue by creating another scope so that each callback function references a new variable. And to create a new scope, you need to create a function. Typically, you use the IIFE pattern as follows:

```js
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}
```

#### Output:

```
0
1
2
3
4
```

`In ES6, the let keyword declares a new variable in each loop iteration(block level scope). Therefore, you just need to replace the var keyword with the let keyword to fix the issue:`

```js
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

To make the code completely ES6 style, you can use an arrow function as follows:

```js
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

## Redeclaration

- The var keyword allows you to redeclare a variable without any issue:

```js
var counter = 0;
var counter;
console.log(counter); // 0
```

- However, redeclaring a variable using the let keyword will result in an error:

```js
let counter = 0;
let counter;
console.log(counter); // Uncaught SyntaxError: Identifier 'counter' has already been declared
```

## JavaScript let variables and hoisting

```js
{
  console.log(counter); //
  let counter = 10; // Uncaught ReferenceError: Cannot access 'counter' before initialization
}
```

`the JavaScript engine will hoist a variable declared by the let keyword to the top of the block. However, the JavaScript engine does not initialize the variable. Therefore, when you reference an uninitialized variable, you’ll get a ReferenceError.`

## Temporal death zone (TDZ)

- A variable declared by the let keyword has a so-called temporal dead zone (TDZ). The TDZ is the time from the start of the block until the variable declaration is processed.

> > The following example illustrates that the temporal dead zone is time-based, not location-based.

```js
{
  // enter new scope, TDZ starts
  let log = function () {
    console.log(message); // messagedeclared later
  };

  // This is the TDZ and accessing log
  // would cause a ReferenceError

  let message = "Hello"; // TDZ ends
  log(); // called outside TDZ
}
```

`Note that if you access a variable declared by the let keyword in the TDZ, you’ll get a ReferenceError `

```js
{
  // TDZ starts
  console.log(typeof myVar); // undefined
  console.log(typeof message); // ReferenceError
  let message; // TDZ ends
}
```

> The temporal death zone prevents you from accidentally referencing a variable before its declaration.

---

## Differences Between var and let

### **#1: Variable scopes**

- The **var** variables belong to the **global scope** when you define them **outside a function**. It means that the counter variable is accessible by any functions.
- When you declare a variable **inside a function using the var keyword**, the **scope of the variable is local.**
- Variable define by "let" has **block scope**

### **#2: Creating global properties**

- The global **var variables** are **added to the global object as properties**. The global object is window on the web browser and global on Node.js:
- However, the let variables are **not** added to the global object:

### **#3: Redeclaration**

- The var keyword allows you to redeclare a variable without any issue:
- However, if you redeclare a variable with the let keyword, you will get an error:

### **#4: The Temporal dead zone**

- The let variables have temporal dead zones while the var variables don’t.
