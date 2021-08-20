# Function

- Every JavaScript function is actually a Function object. This can be seen with the code (function(){}).constructor === Function, which returns true.

## Function() constructor

- The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically, but suffers from security and similar (but far less significant) performance issues to Global_Objects/eval.
- However, unlike eval, the Function constructor creates functions which execute in the global scope only.

#### **SYNTAX**

```
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, ... , argN, functionBody)
```

- Function objects created with the Function constructor are parsed when the function is created. This is less efficient than declaring a function with a function expression or function statement and calling it within your code because such functions are parsed with the rest of the code.

- All arguments passed to the function are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed. Omitting an argument will result in the value of that parameter being undefined.

- Invoking the Function constructor as a function (without using the new operator) has the same effect as invoking it as a constructor.

#### **EXAMPLES**

> > **Specifying arguments with the Function constructor**

```
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments, and returns the sum of those arguments
const adder = new Function('a', 'b', 'return a + b');

// Call the function
adder(2, 6);
// 8
```

## Function.length

- The length property indicates the number of parameters expected by the function.

```
function func1() {}

function func2(a, b) {}

console.log(func1.length);
// expected output: 0

console.log(func2.length);
// expected output: 2
```

- length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the rest parameter and only includes parameters before the first one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.

### Data property of the Function constructor

- The Function constructor is itself a Function object. Its length data property has a value of 1. The property attributes are: Writable: false, Enumerable: false, Configurable: true.

### Property of the Function prototype object

- The length property of the Function prototype object has a value of 0.

#### **EXAMPLES**

```
console.log(Function.length); /* 1 */

console.log((function()        {}).length); /* 0 */
console.log((function(a)       {}).length); /* 1 */
console.log((function(a, b)    {}).length); /* 2 etc. */

console.log((function(...args) {}).length);
// 0, rest parameter is not counted

console.log((function(a, b = 1, c) {}).length);
// 1, only parameters before the first one with
// a default value is counted
```

---

## Function.name

- A Function object's read-only name property indicates the function's name as specified when it was created, or it may be either anonymous or '' (an empty string) for functions created anonymously.

```
const func1 = function() {};

const object = {
  func2: function() {}
};

console.log(func1.name);
// expected output: "func1"

console.log(object.func2.name);
// expected output: "func2"
```

#### **EXAMPLES**

> > **Function statement name**

- The name property returns the name of a function statement.

```
function doSomething() {}
doSomething.name; // "doSomething"
```

> > **Function constructor name**

- Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is "anonymous".

```
(new Function).name; // "anonymous"
```

> > **Anonymous function expression**

- Anonymous function expressions that were created using the keyword function or arrow functions would have "" (an empty string) as their name.

```
(function() {}).name; // ""
(() => {}).name; // ""
```

> > **Inferred function names**

- Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).

```
let f = function() {};
let object = {
  someMethod: function() {}
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

- You can define a function with a name in a function expression

```
let object = {
  someMethod: function object_someMethod() {}
};
console.log(object.someMethod.name); // logs "object_someMethod"

try { object_someMethod } catch(e) { console.log(e); }
// ReferenceError: object_someMethod is not defined
```

- The name property is read-only and cannot be changed by the assigment operator:

```
 let object = {
  // anonymous
  someMethod: function() {}
};

object.someMethod.name = 'otherMethod';
console.log(object.someMethod.name); // someMethod
```

- To change it, use Object.defineProperty().
  > > **Shorthand method names**

```
var o = {
  foo(){}
};
o.foo.name; // "foo";
```

> > **Bound function names**

- Function.bind() produces a function whose name is "bound " plus the function name.

```
function foo() {};
foo.bind({}).name; // "bound foo"
```

> > **Function names for getters and setters**

- When using get and set accessor properties, "get" or "set" will appear in the function name.

```
let o = {
  get foo(){},
  set foo(x){}
};

var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```
