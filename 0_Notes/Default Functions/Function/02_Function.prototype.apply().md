# Function.prototype.apply()

- The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

```
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2
```

#### **SYNTAX**

```
apply(thisArg)
apply(thisArg, argsArray)
```

#### **PARAMETERS**

- **_thisArg_**
  - The value of this provided for the call to func.

`Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, null and undefined will be replaced with the global object, and primitive values will be boxed. This argument is required.`

- **argsArray Optional**

  - An array-like object, specifying the arguments with which func should be called, or null or undefined if no arguments should be provided to the function.

- Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array. See below for browser compatibility information.

#### **Return value**

- The result of calling the function with the specified this value and arguments

`Note: While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.`

`Note: When the first argument is undefined or null a similar outcome can be achieved using the array spread syntax.`

#### **DESCRIPTION**

- You can assign a different this object when calling an existing function. this refers to the current object (the calling object). With apply, you can write a method once, and then inherit it in another object, without having to rewrite the method for the new object.

- apply is very similar to call(), except for the type of arguments it supports. You use an arguments array instead of a list of arguments (parameters). With apply, you can also use an array literal, for example, func.apply(this, ['eat', 'bananas']), or an Array object, for example, func.apply(this, new Array('eat', 'bananas')).

- You can also use arguments for the argsArray parameter. arguments is a local variable of a function. It can be used for all unspecified arguments of the called object. Thus, you do not have to know the arguments of the called object when you use the apply method. You can use arguments to pass all the arguments to the called object. The called object is then responsible for handling the arguments.

- Since ECMAScript 5th Edition, you can also use any kind of object which is array-like. In practice, this means it's going to have a length property, and integer ("index") properties in the range (0..length - 1). For example, you could use a NodeList, or a custom object like { 'length': 2, '0': 'eat', '1': 'bananas' }.

#### **EXAMPLES**

> > **Using apply to append an array to another**

- You can use push to append an element to an array. And, because push accepts a variable number of arguments, you can also push multiple elements at once.

- But, if you pass an array to push, it will actually add that array as a single element, instead of adding the elements individually. So you end up with an array inside an array.

- What if that is not what you want? concat does have the desired behavior in this case, but it does not append to the existing array—it instead creates and returns a new array.

- But you wanted to append to the existing array... So what now? Write a loop? Surely not?

apply to the rescue!

```
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

> > **Using apply and built-in functions**

- Clever usage of apply allows you to use built-in functions for some tasks that would probably have otherwise been written by looping over the array values.

- As an example, here are Math.max/Math.min, used to find out the maximum/minimum value in an array.

```
// min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

let min = Math.min.apply(null, numbers);

// vs. simple loop based algorithm
max = -Infinity, min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
```
