# Rest parameters

- The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

#### **SYNTAX**

```js
function f(a, b, ...theArgs) {
  // ...
}
```

- A function definition's last parameter can be prefixed with "..." , which will cause all remaining (user supplied) parameters to be placed within a "standard" JavaScript array..
- Only the last parameter in a function definition can be a rest parameter.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
```

## The difference between rest parameters and the arguments object

- There are three main differences between rest parameters and the arguments object:
  - The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
  - The arguments object has additional functionality specific to itself (like the callee property).
  - The ...restParam bundles all the extra parameters into a single array, therefore it does not contain any named argument defined before the ...restParam. Whereas the arguments object contains all of the parameters -- including all of the stuff in the ...restParam -- unbundled.

#### **EXAMPLES**

> > **Using rest parameters**

- In this example, the first argument is mapped to a and the second to b, so these named arguments are used as normal.

- However, the third argument, manyMoreArgs, will be an array that contains the third, fourth, fifth, sixth ... nth — as many arguments that the user includes.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- notice it's an array
```

- Below, even though there is just one value, the last argument still gets put into an array.

```js
// using the same function definition from example above

myFun("one", "two", "three");

// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- notice it's an array, even though there's just one value
```

- Below, the third argument isn't provided, but manyMoreArgs is still an array (albeit an empty one).

```js
// using the same function definition from example above

myFun("one", "two");

// a, "one"
// b, "two"
// manyMoreArgs, [] <-- yip, still an array
```

> > **Using rest parameters in combination with ordinary parameters**

- In the next example, a rest parameter is used to collect all parameters after the first parameter into an array. Each one of the parameter values collected into the array is then multiplied by the first parameter, and the array is returned:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => {
    return multiplier * element;
  });
}

let arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
```

## Rest parameters are real arrays; the arguments object is not.

- Array methods can be used on rest parameters, but not on the arguments object:
