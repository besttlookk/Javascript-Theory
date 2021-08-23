# JavaScript NaN

- JavaScript has the number type that allows you to represent numbers including integer and floating-point numbers. And JavaScript number has a special value called NaN, which stands for **Not-a–Number.**
- The NaN is a property of the global object. The **global object is the window object in web browsers:**

```
window.NaN
```

- And the global object in Node.js.

```
global.NaN
```

- The NaN has the type number

```
console.log(typeof NaN); // number
```

## Checking if a value is NaN

- JavaScript provides you with the global function isNaN() that returns true if its argument is NaN:

```
isNaN(valueToCheck)
```

## Why use NaN

- JavaScript uses NaN as the result of a failed operation on numbers including:
  - Parsing numbers
  - Using undefined as an operand
  - Using NaN as an operand
  - Using indeterminate forms
  - Passing invalid arguments to a math function

## Operations return NaN

> > **1) Parsing numbers**

- In JavaScript, you can convert a numeric string to a number. For example:

```
const input = '100';
const num = parseInt(input);

console.log(num); // 100
```

- If JavaScript cannot convert a string to a number, it returns NaN. In this case, NaN indicates that the parsing has failed. For example:

```
const input = 'X100';
const num = parseInt(input);

console.log(num); // NaN
```

`It’s good practice to verify the parsing result using the isNaN function:`

```
const input = 'X100';
const num = parseInt(input);

// set num to 0 if parsing failed
if (isNaN(num)) {
    num = 0;
}

console.log(num); // 0
```

In this example, the parsing has failed therefore it returned NaN. The condition isNaN(num) is true so that the number is assigned to 0.

> > **2) Use undefined as an operand**

- An expression that uses undefined as an operand returns NaN. For example:

```
console.log(undefined * 2); // NaN
```

- In practice, you’ll deal with undefined quite often. For example, when you access a non-existing property of an HTML element and use it in a calculation.

`It’s good practice to avoid using undefined in calculation.`

> > **3) Using NaN as an operand**

- When an expression has the NaN, it always returns NaN. For example:

```
const result = 10 + 1 / NaN;

console.log(result); // NaN
```

> > **4) Using indeterminate forms**

- When an arithmetical operation is in the indeterminate form, it returns NaN. For example:

```
const result = 10 + 0 / 0;
console.log(result); // NaN
```

> > **5) Using invalid arguments of math functions**

- When a math function receives an invalid argument, it returns NaN. For example:

```
const result = Math.sqrt(-1);
console.log(result); // NaN
```
