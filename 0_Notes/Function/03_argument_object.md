# The arguments object

- arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

```
Note: If you're writing ES6 compatible code, then rest parameters should be preferred.
```

```
Note: “Array-like” means that arguments has a length property and properties indexed from zero, but it doesn't have Array's built-in methods like forEach() or map().
```

- The arguments object is a local variable available within all non-arrow functions.
- You can refer to a function's arguments inside that function by using its arguments object. It has entries for each argument the function was called with, with the first entry's index at 0.
- For example, if a function is passed 3 arguments, you can access them as follows:

```js
arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument
```

- Each argument can also be set or reassigned:

```js
arguments[1] = "new value";
```

#### **EXAMPLE**

```js
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);
```
