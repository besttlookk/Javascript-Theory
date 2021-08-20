# JS Function

- Functions are reusable blocks of code that you can write once and run again and again, saving the need to keep repeating code all the time.
- code inside functions runs in a separate scope than code outside functions

- A JavaScript function is a block of code designed to perform a particular task.

- A JavaScript function is executed when "something" invokes it (calls it).

```
function name(parameter1, parameter2, parameter3) {
// code to be executed
}

This form of creating a function is also known as function declaration. It is always hoisted, so you can call function above function definition and it will work fine.
```

- **Function parameters** are listed inside the parentheses () in the function definition.

- **Function arguments** are the values received by the function when it is invoked.

- Inside the function, the arguments (the parameters) behave as local variables.

## Built-in browser functions

- The JavaScript language has many built-in functions to allow you to do useful things without having to write all that code yourself.
- In fact, some of the code you are calling when you invoke a built in browser function couldn't be written in JavaScript — many of these functions are calling parts of the background browser code, which is written largely in low-level system languages like C++, not web languages like JavaScript.

- Bear in mind that some built-in browser functions are not part of the core JavaScript language — some are defined as part of browser APIs, which build on top of the default language to provide even more functionality.

## Anonymous functions & Function Expression

- you can also create a function that doesn't have a name:

```
function() {
  alert('hello');
}
```

- This is called an anonymous function — it has no name!
- It also won't do anything on its own. You generally use an anonymous function along with an event handler,
- You can also assign an anonymous function to be the value of a variable, for example:

```
const myGreeting = function() {
  alert('hello');
}

This form of creating a function is also known as function expression. Unlike function declaration, function expressions are not hoisted.
```

- This effectively gives the function a name; you can also assign the function to be the value of multiple variables, for example:

```
let anotherGreeting = myGreeting;
```

- This function could now be invoked using either of:

```
myGreeting();
anotherGreeting();
```

## Function parameters

- Some functions require parameters to be specified when you are invoking them — these are values that need to be included inside the function parentheses, which it needs to do its job properly.
- Parameters are sometimes called arguments, properties, or even attributes.
- It should also be noted that sometimes parameters are optional — you don't have to specify them. If you don't, the function will generally adopt some kind of default behavior.As an example, the array join() function's parameter is optional:
- Starting with ECMAScript 2015, there are two new kinds of parameters: default parameters and rest parameters.

#### **Default parameters**

- In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value. This is exactly what default parameters do.

```
- Without default parameters

In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value. This is exactly what default parameters do.

function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a * b;
}

multiply(5); // 5

```

```
With default parameters (post-ECMAScript 2015)
With default parameters, a manual check in the function body is no longer necessary. You can put 1 as the default value for b in the function head:

function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5
```

#### **Rest parameters**

- The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

```
In the following example, the function multiply uses rest parameters to collect arguments from the second one to the end. The function then multiplies these by the first argument.

function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Functions versus methods

## Function Hoisting

- Hoisting is JavaScript's default behavior of moving **declarations** to the top of the current scope.

- **Hoisting applies to variable declarations and to "function declarations".**

- Because of this, JavaScript functions can be called before they are declared:

- **Functions defined using an expression are not hoisted.**

## Function scope and conflicts:

- . When you create a function, the variables and other things defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.
- The top level outside all your functions is called the **global scope**. Values defined in the global scope are accessible from everywhere in the code.
- JavaScript is set up like this for various reasons — but mainly because of **security and organization.** Sometimes you don't want variables to be accessible from everywhere in the code — external scripts that you call in from elsewhere could start to mess with your code and cause problems because they happen to be using the same variable names as other parts of the code, causing conflicts. This might be done maliciously, or just by accident.
- It is a bit like a zoo. The lions, zebras, tigers, and penguins are kept in their own enclosures, and only have access to the things inside their enclosures — in the same manner as the function scopes. If they were able to get into other enclosures, problems would occur.
- The zoo keeper is like the global scope — they have the keys to access every enclosure, to restock food, tend to sick animals, etc.

```
Note:
  The same scoping rules do not apply to loop (e.g. for() { ... }) and conditional blocks (e.g. if() { ... }) — they look very similar, but they are not the same thing!

```

## Functions inside functions

- Keep in mind that you can call a function from anywhere, even inside another function.
- This is often used as a way to keep code tidy — if you have a big complex function, it is easier to understand if you break it down into several sub-functions:

```
function myBigFunction() {
  let myValue;

  subFunction1();
  subFunction2();
  subFunction3();
}

function subFunction1() {
  console.log(myValue);
}

function subFunction2() {
  console.log(myValue);
}

function subFunction3() {
  console.log(myValue);
}

Just make sure that the values being used inside the function are properly in scope.
```

- The example above would throw an error ReferenceError: myValue is not defined, because although the myValue variable is defined in the same scope as the function calls, it is not defined inside the function definitions — the actual code that is run when the functions are called.
- To make this work, you'd have to pass the value into the function as a parameter, like this:

```
function myBigFunction() {
  let myValue = 1;

  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}
```

## Function return values

- Some functions don't return a significant value, but others do. It's important to understand what their values are, how to use them in your code, and how to make functions return useful values.

---

## Different types of functions

### Anonymous Function

- An anonymous function is a function without a function name.
- Only function expressions can be anonymous, function declarations must have a name.

```
// When used as a function expression
(function () {});
// or using the ECMAScript 2015 arrow notation
() => {};
```

### Named Function

- A named function is a function with a function name:

```
// Function declaration
function foo() {};

// Named function expression
(function bar() {});

// or using the ECMAScript 2015 arrow notation
const foo = () => {};
```

### Inner and Outer Function:

- An inner function is a function inside another function (square in this case).
- An outer function is a function containing a function

```
function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
};
//Using ECMAScript 2015 arrow notation
const addSquares = (a,b) => {
   const square = x => x*x;
   return square(a) + square(b);
};
```

### Recursive Function

- A recursive function is a function that calls itself.

```
function loop(x) {
   if (x >= 10)
      return;
   loop(x + 1);
};
//Using ECMAScript 2015 arrow notation
const loop = x => {
   if (x >= 10)
      return;
   loop(x + 1);
};
```

### Immediately Invoked Function Expressions (IIFE)

- function that is called directly after the function is loaded into the browser’s compiler.
- The way to identify an IIFE is by locating the extra left and right parenthesis at the end of the function’s definition.
- Function expressions can be made "self-invoking".
- A self-invoking expression is invoked (started) automatically, without being called.
- You cannot self-invoke a function declaration. You have to add parentheses around the function to indicate that it is a function expression:

```
(function () {
let x = "Hello!!";  // I will invoke myself
})();
```

## Functions are Objects

- The typeof operator in JavaScript returns "function" for functions.

- But, JavaScript functions can best be described as objects.

- JavaScript functions have both properties and methods.

- The arguments.length property returns the number of arguments received when the function was invoked:

```
function myFunction(a, b) {
  return arguments.length;
}
```

## Arrow function

- Arrow functions allows a short syntax for writing "function expressions".

- You don't need the function keyword, the return keyword, and the curly brackets.

```
        // ES5
        var x = function(x, y) {
        return x * y;
        }

        // ES6
        const x = (x, y) => x * y;
```

- Arrow functions do not have their own "this". With arrow functions there are no binding of this.
  They are not well suited for defining object methods.

- Arrow functions are NOT hoisted. They must be defined before they are used.

- Using "const" is safer than using var, because a function expression is always constant value.

- You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

---

## First Class Function

- A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
- JavaScript treat function as a **first-class-citizens.** This means that functions are simply a value and are just another type of object.

#### **EXAMPLE | Assign a function to a variable**

```


const foo = function() {
   console.log("foobar");
}

// Invoke it using the variable
foo();

We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.

Even if your function was named, you can use the variable name to invoke it. Naming it will be helpful when debugging your code. But it won't affect the way we invoke it.

```

#### **EXAMPLE | Pass a function as an Argument**

```
function sayHello() {
  return "Hello, ";
}

function greeting(helloMessage, name) {
 console.log(helloMessage() + name);  // Hello, JavaScript
}

// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");

```

```
The function that we pass as an argument to another function, is called a **Callback function**. sayHello is a Callback function.
```

#### **EXAMPLE | Return a function**

```
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}

In this example; We need to return a function from another function - We can return a function because we treated function in JavaScript as a value.
```

```
A function that returns a function is called a Higher-Order Function.


Higher-Order Function: A function that receives another function as an argument or that returns a new function or both is called Higher-order functions. Higher-order functions are only possible because of the First-class function.

Note: Functions such as filter(),map(),reduce(),some() etc, these all are example of Higher-Order Functions.
```

- Now, we need to invoke sayHello function and its returned Anonymous Function. To do so, we have two ways:
  1. Using a Varibale

```
const sayHello = function() {
   return function() {
      console.log("Hello!");
   }
}
const myFunc = sayHello();
myFunc();

You have to use another variable. If you invoked sayHello directly, it would return the function itself without invoking its returned function.
```

2. Using double parentheses

```
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
sayHello()();
```

#### **Key Differences between First-Order Function and Higher-Order Function:-**

| First-Order Function                                                                                    | Higher-Order Function                                                                                        |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Function are treated as a variable that can be assigned to any other variable or passed as an argument. | Function receives another function as an argument or returns First-order a new function or both.             |
| The “first-class” concept only has to do with functions in programming languages.                       | The “higher-order” concept can be applied to functions in general, like functions in the mathematical sense. |
| The presence of the First-class function implies the presence of a higher-order function.               | The presence of a Higher-order function does not imply the presence of a First-order function.               |

---

## call/apply/bind

```
const nameobj = {
firstName: "Prabhash",
lastName: "Ranjan",
age: 31,
summary() {
console.log(`${this.firstName} ${this.lastName} is of age ${this.age}`);
},
};

const newNameobj = {
firstName: "Rahul",
lastName: "Kumar",
age: 30,
};

const newNameobj2 = {
firstName: "Sunil",
lastName: "kumar",
age: "28",
};

// this method can be used as method of many different objects
const summ = nameobj.summary;
```

- here summ is function..and inside summ "this" is undefined..
- this method has no idea which object it is refering to when you call that method on its own
- we have to tel JS explicitly or manually what "this" keyword whould look like.
- there are 3 functions methods for that:
  1. call : It is used to call a function contains this value and an argument list.
  2. apply: It is used to call a function contains this value and a single array of arguments.
  3. bind : It is used to create a new function.

```
  summ() //ERROR
```

- call(pointing which obj to refer...and then pass all the arguments if any)

```
  summ.call(newNameobj);
```

- apply(it is similar to call but it takes aruments as a array)(not used much anymore)

- bind()
  - Bind does not immediatly call the function..but it gives a new function with :this binded
  - this is easily that "call" as we dont have to use call again and again each time
  - now we have binded version of function...

```
const bindSumm = summ.bind(newNameobj);
bindSumm(); // Rahul Kumar is of age 30 // we can pass argument in this function if any
```

- we can also bind the argument during binding phase..
- this way those argument is fixed

```
 ex: const bindSum = summ.bind(newNameobj, agument1) // whenever we call bindSum..first argument is fixed = argument1
```

## clousure

- A function has access to the varibale enviormen(VE) of the EXECUSION CONTEXTin which itwas created
- Closure:VE attacthedto the function,exactlyas it wasat the timeand place the function was created.- - Closure scope has PRIORITY over scope-chain
