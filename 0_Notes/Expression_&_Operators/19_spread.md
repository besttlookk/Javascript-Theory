# Left-hand-side expressions : spread

- Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
- Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
- It is commonly used when you want to add a new item to a local data store, or display all stored items plus a new addition.
- When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit.

```js
let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
```

#### **SYNTAX**

- For function calls:

```js
myFunction(...iterableObj); // pass all elements of iterableObj as arguments to function myFunction
```

- For array literals or strings:

```js
[...iterableObj, "4", "five", 6]; // combine two arrays by inserting all elements from iterableObj
```

- For object literals (new in ECMAScript 2018):

```js
let objClone = { ...obj }; // pass all key:value pairs from an object
```

## Rest syntax (parameters)

- Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element

#### **EXAMPLES**

> > **Spread in function calls**

### Replace apply()

- It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function.

```
function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction.apply(null, args);
```

```
With spread syntax the above can be written as:

function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction(...args);
```

- Any argument in the argument list can use spread syntax, and the spread syntax can be used multiple times.

```
function myFunction(v, w, x, y, z) { }
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

### Apply for new operator

- When calling a constructor with new it's not possible to directly use an array and apply() (apply() does a [[Call]] and not a [[Construct]]). However, an array can be easily used with new thanks to spread syntax:

```
let dateFields = [1970, 0, 1];  // 1 Jan 1970
let d = new Date(...dateFields);
```

> > **Spread in array literals**

### A more powerful array literal

- Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of push(), splice(), concat(), etc.
- With spread syntax this becomes much more succinct:

```
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]
```

- Just like spread for argument lists, ... can be used anywhere in the array literal, and may be used more than once.

### copy an array

```js
let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected
```

```js
Note: Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays, as the following example shows. (The same is true with Object.assign() and spread syntax.)

let a = [[1], [2], [3]];
let b = [...a];

b.shift().shift();
//  1

//  Oh no!  Now array 'a' is affected as well:
a
//  [[], [2], [3]]
```

### A better way to concatenate arrays

- Array.prototype.concat() is often used to concatenate an array to the end of an existing array.

```
Without spread syntax, this is done as:

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//  Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

```
With spread syntax this becomes:

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
//  arr1 is now [0, 1, 2, 3, 4, 5]
// Note: Not to use const otherwise, it will give TypeError (invalid assignment
```

- Array.prototype.unshift() is often used to insert an array of values at the start of an existing array.

```
Without spread syntax, this is done as:

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2)

//  arr1 is now [3, 4, 5, 0, 1, 2]
```

```
With spread syntax, this becomes:

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
//  arr1 is now [3, 4, 5, 0, 1, 2]
```

```
Note: Unlike unshift(), this creates a new arr1, and does not modify the original arr1 array in-place.
```

> > **Spread in object literals**

- The Rest/Spread Properties for ECMAScript proposal (ES2018) added spread properties to object literals. It copies own enumerable properties from a provided object onto a new object.

- Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than Object.assign().

```js
let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

- Note that Object.assign() triggers setters, whereas spread syntax doesn't.

- Note that you cannot replace or mimic the Object.assign() function:

```js
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );

let mergedObj1 = merge (obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

let mergedObj2 = merge ({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }

In the above example, the spread syntax does not work as one might expect: it spreads an array of arguments into the object literal, due to the rest parameter.
```

> > **Only for iterables**

- Objects themselves are not iterable, but they become iterable when used in an Array, or with iterating functions such as map(), reduce(), and assign().
- When merging 2 objects together with the spread operator, it is assumed another iterating function is used when the merging occurs.

- Spread syntax (other than in the case of spread properties) can be applied only to iterable objects:

```
let obj = {'key1': 'value1'};
let array = [...obj]; // TypeError: obj is not iterable
```

## JavaScript Object spread operator use cases

> > **1) clone an object**

- You can use the spread operator to clone the own enumerable properties of an object:

`Note that the cloning is always shallow.`

```js
const circle = {
  radius: 10,
};

const clonedCircle = { ...circle };

console.log(clonedCircle); // { radius: 10 }
```

> > **2) Merging objects**

```js
const circle = {
  radius: 10,
};

const style = {
  backgroundColor: "red",
};

const solidCircle = {
  ...circle,
  ...style,
};

console.log(solidCircle);
```

---

## Spread operator vs. Object.assign()

- The spread operator (...) defines new properties in the target object while the Object.assign() method assigns them. It has two side effects.

### 1) Target objects with setters

- The Object.assign() invokes setters on the target object while the spread operator doesn’t.

> > The following illustrates how to clone an object using both Object.assign() and spread operator (...). However, only the Object.assign() method triggers the setters:

```js
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  set diameter(value) {
    this.radius = value / 2;
    console.log("SET ", value);
  }
  get diameter() {
    return this.radius * 2;
  }
}

let circle = new Circle(100);

let cloneCircle1 = Object.assign(circle, {
  diameter: 200,
});

let cloneCircle2 = {
  ...circle,
};
```

### 2) Target objects with read-only properties

- If a target object has a read-only property, you cannot use Object.assign() method to assign a new value to that property. However, the spread operator ( ...) can define a new property.
- Suppose you have an object called blueSquare whose the color property is readonly:

```js
const blueSquare = {
  length: 100,
  color: "blue",
};

Object.defineProperty(blueSquare, "color", {
  value: "blue",
  enumerable: true,
  writable: false,
});

console.log(blueSquare); // { length: 100, color: 'blue' }
```

The following uses the spread operator (...) to merge the style and blueSquare objects:

```js
// merge style and blueSquare objects:
const style = {
  color: "green",
};

const greenSquare = {
  ...blueSquare,
  ...style,
};

console.log(greenSquare); // { length: 100, color: 'green' }
```

However, if you use the Object.assign() method, you will get an error:

```js
// merge style and redSquare objects: ERROR
const redSquare = Object.assign(blueSquare, {
  color: "red",
});

TypeError: Cannot assign to read only property 'color' of object '#<Object>'

```
