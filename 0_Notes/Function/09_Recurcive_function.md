# JavaScript Recursive Function

- A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.

```js
function recurse() {
  // ...
  recurse();
  // ...
}
```

- A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely. So a recursive function typically looks like the following:

```js
function recurse() {
  if (condition) {
    // stop calling itself
    //...
  } else {
    recurse();
  }
}
```

- Generally, you use recursive functions to break down a big problem into smaller ones. Typically, you will find the recursive functions in data structures like binary trees and graphs and algorithms such as binary search and quicksort.

### **EXAMPLES**

```js
function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(3);
3;
2;
1;
```

- The countDown() seems to work as expected.
- However, as mentioned in the Function type tutorial, the function’s name is a reference to the actual function object.
- If the function name is set to null somewhere in the code, the recursive function will stop working.
- For example, the following code will result in an error:

```js
let newYearCountDown = countDown;
// somewhere in the code
countDown = null;
// the following function call will cause an error
newYearCountDown(10);
```

Error:

```
Uncaught TypeError: countDown is not a function
```

How the script works:

- First, assign the countDown function name to the variable newYearCountDown.

- Second, set the countDown function reference to null.
- Third, call the newYearCountDown function.

The code causes an error because the body of the countDown() function references the countDown function name, which was set to null at the time of calling the function.

To fix it, you can use a named function expression as follows:

```js
let countDown = function f(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    f(nextNumber);
  }
};

let newYearCountDown = countDown;
countDown = null;
newYearCountDown(10);
```

> > **Calculate the sum of digits of a number example**

```js
function sumOfDigits(num) {
  if (num == 0) {
    return 0;
  }
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}
```

```
f(324) = 4 + f(32)
f(324) = 4 + 2 + f(3)
f(324) = 4 + 2 + 3
```
