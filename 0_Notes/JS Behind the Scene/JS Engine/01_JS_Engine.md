# JAVASCRIPT ENGINE

- A JavaScript engine is a computer program that you give JavaScript code to and it tells the computer how to execute it.
- Basically a translator for the computer between JavaScript and a language that the computer understands.
- But what happens inside of the engine? Well, that depends on the engine. There are many JavaScript Engines out there and typically they are created by web browser vendors.
- All engines are standardized by ECMA Script or ES.

## THE PARSER

- Parsing is the process of analyzing the source code, checking it for errors, and breaking it up into parts.

## THE AST

- The parser produces a data structure called the Abstract Syntax Tree or AST.
- AST is a tree graph of the source code that does not show every detail of the original syntax, but contains structural or content-related details.
- Certain things are implicit in the tree and do not need to be shown, hence the title abstract.

## THE INTERPRETER

- An interpreter directly executes each line of code line by line, without requiring them to be compiled into a machine language program. - Interpreters can use different strategies to increase performance. They can parse the source code and execute it immediately, translate it into more efficient machine code, execute precompiled code made by a compiler, or some combination of these.
- In the V8 engine, the interpreter outputs bytecode.

`Nifty Snippet: The first JavaScript engine was written by Brendan Eich, the creator of JavaScript, in 1995 for the Netscape navigator web browser. Originally, the JavaScript engine only consisted of an interpreter. This later evolved into the SpiderMonkey engine, still used by the Firefox browser.`

## THE COMPILER

- The compiler works ahead of time to convert instructions into a machine-code or lower-level form so that they can be read and executed by a computer.
- It runs all of the code and tries to figure out what the code does and then compiles it down into another language that is easier for the computer to read.
- Have you heard of **Babel or TypeScript?** They are heavily used in the Javascript ecosystem and you should now have a good idea of what they are.
- Babel is a Javascript compiler that takes your modern JS code and returns browser compatible JS (older JS code).
- Typescript is a superset of Javascript that compiles down to Javascript. Both of these do exactly what compilers do. Take one language and convert into a different one!

## THE COMBO

- In modern engines, the interpreter starts reading the code line by line while the profiler watches for frequently used code and flags then passes is to the compiler to be optimized.
- In the end, the JavaScript engine takes the bytecode the interpreter outputs and mixes in the optimized code the compiler outputs and then gives that to the computer.
- This is called "Just in Time" or JIT Compiler.

`Nifty Snippet: Back in 1995 we had no standard between the browsers for compiling JavaScript. Compiling code on the browser or even ahead of time was not feasible because all the browsers were competing against each other and could not agree on an executable format. Even now, different browsers have different approaches on doing things. Enter WebAssembly a standard for binary instruction (executible) format. Keep your eye on WebAssembly to help standardize browsers abilities to exectute JavaScript in the future! WebAssemby`

## WRITING OPTIMIZED CODE

- We want to write code that helps the compiler make its optimizations, not work against it making the engine slower.

### Memoization

- Memoization is a way to cache a return value of a function based on its parameters.
- This makes the function that takes a long time run much faster after one execution.
- If the parameter changes, it will still have to reevaluate the function.

```
// Bad Way
function addTo80(n) {
  console.log('long time...')
  return n + 80
}

addTo80(5)
addTo80(5)
addTo80(5)

// long time... 85
// long time... 85
// long time... 85

// Memoized Way
functions memoizedAddTo80() {
  let cache = {}
  return function(n) { // closure to access cache obj
    if (n in cache) {
      return cache[n]
    } else {
      console.log('long time...')
      cache[n] = n + 80
      return cache[n]
    }
  }
}
const memoized = memoizedAddTo80()

console.log('1.', memoized(5))
console.log('2.', memoized(5))
console.log('3.', memoized(5))
console.log('4.', memoized(10))

// long time...
// 1. 85
// 2. 85
// 3. 85
// long time...
// 4. 90
```

#### Here are a few things you should avoid when writing your code if possible:

- eval()
- arguments
- for in
- with
- delete

There are a few main reasons these should be avoided.

- JavaScript Hidden Classes and Inline Caching in V8
  Managing Arguments

### **Inline Caching**

```
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`
}

const userData = {
  firstName: 'Brittney',
  lastName: 'Postma
}

findUser(userData)

// if this findUser(userData) is called multiple times,
// then it will be optimized (inline cached) to just be 'found Brittney Postma'
```

- If this code gets optimized to return only 1 name, then the computer would have to do a lot more work if you needed to return a different user.

### **Hidden Classes**

```
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;

delete obj1.x = 30;
```

- By setting these values in a different order than they were instantiated, we are making the compiler slower because of hidden classes.
- Hidden classes are what the compiler uses under the hood to say that these 2 objects have the same properties.
- If values are introduced in a different order than it was set up in, the compiler can get confused and think they don't have a shared hidden class, they are 2 different things, and will slow down the computation.
- Also, the reason the delete keyword shouldn't be used is because it would change the hidden class.

```
// This is the more optimized version of the code.

function Animal(x, y) {
  // instantiating a and b in the constructor
  this.a = x;
  this.b = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

// and setting the values in order
obj1.a = 30;
obj1.b = 100;
obj2.a = 30;
obj2.b = 100;
```

## Managing Arguments

- There are many ways using arguments that can cause a function to be unoptimizable. Be very careful when using arguments and remember:
- Safe Ways to Use Arguments
  - arguments.length
  - arguments[i] when i is a valid integer
  - NEVER use arguments directly without .length or [i]
  - STRICTLY fn.apply(y, arguments) is ok
