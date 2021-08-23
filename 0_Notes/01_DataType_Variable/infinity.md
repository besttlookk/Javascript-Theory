# JavaScript Infinity

- The Infinity is a property of the global object. In other words, it’s a global variable.
- JavaScript also has a negative Infinity (-Infinity) where its value is Number.NEGATIVE_INFINITY. The -Infinity is smaller than any finite number.
- The type of the Infinity is number :

```
const result = typeof (Infinity);

console.log(result); // number
```

## Checking for Infinity

- JavaScript provides the Number.isFinite() that checks if a value is finite:

```
Number.isFinite(value);
```

- It returns true if the value is finite; In case the value is infinite, the Number.isFinite() returns false.

```
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
```

- Also, you can compare a value with Infinity like this:

```
let counter = 100;
console.log(counter === Infinity); // false
```

- And an infinite number equals another infinite number:

```
console.log(Infinity === Infinity); // true
```

## Pitfalls of Infinity

> > **1) parseFloat() function**

- Suppose you have a form that collects user information. On the form, you have a field that allows users to enter their weight.

- Since the value of the form field is a string, you need to convert it to a number:

```
let weight = parseInt('120kg');
console.log(weight); // 120
```

- This is working fine. If users enter a string that cannot be converted to a number, the parseInt() returns a NaN:

```
let weight = parseInt('More than 100kg');
console.log(weight); // NaN
```

- If the input string is Infinity, the parseInt() also returns NaN because it doesn’t recognize the infinite number:

```
let weight = parseInt('Infinity');
console.log(weight); // NaN
```

- But if you use the parseFloat() function like this:

```
let weight = parseFloat('Infinity');
console.log(weight); // Infinity
```

- …the parseFloat() function recognizes the Infinity and returns an infinite number.

- So it’s a good practice to issue a validation error when an input field has the 'Infinity' string.

> > **2) JSON serialization**

- The JSON.stringify() serializes an infinite number to null. For example:

```
const resource = {
    amount: Infinity
};
let result = JSON.stringify(resource);

console.log(result);

Output:

{"amount":null}
```

> > **3) Math methods**

- Some Math functions return an infinite number.

- The following Math.min() method returns the smallest numbers in the ratings array:

```
let ratings = [1, 2, 3, 4, 5];

let max = Math.min(...ratings);
console.log(max); // 1
```

- However, when the ratings array is empty, the Math.min() method returns Infinity:

```
let ratings = [1, 2, 3, 4, 5];

//
somewhere in the code
ratings = []; // empty array
//

let max = Math.min(...ratings);
console.log(max); // Infinity
```
