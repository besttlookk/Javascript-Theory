# Object initializer

- Objects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation).
- An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).

```
let o = {}
let o = {a: 'foo', b: 42, c: {}}

let a = 'foo', b = 42, c = {}
let o = {a: a, b: b, c: c}

let o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {}
};
```

## New notations in ECMAScript 2015

```
// Shorthand property names (ES2015)
let a = 'foo', b = 42, c = {};
let o = {a, b, c}

// Shorthand method names (ES2015)
let o = {
  property(parameters) {}
}

// Computed property names (ES2015)
let prop = 'foo';
let o = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there'
}
```

- An object initializer is an expression that describes the initialization of an Object. Objects consist of properties, which are used to describe an object.
- The values of object properties can either contain primitive data types or other objects.

## Object literal notation vs JSON

- The object literal notation is not the same as the JavaScript Object Notation (JSON). Although they look similar, there are differences between them:
  - JSON permits only property definition using "property": value syntax. The property name must be double-quoted, and the definition cannot be a shorthand.
  - In JSON the values can only be strings, numbers, arrays, true, false, null, or another (JSON) object.
  - A function value (see "Methods" below) can not be assigned to a value in JSON.
  - Objects like Date will be a string after JSON.parse().
  - JSON.parse() will reject computed property names and an error will be thrown

#### **EXAMPLES**

### Creating objects

```
An empty object with no properties can be created like this:

let object = {}
```

- However, the advantage of the literal or initializer notation is, that you are able to quickly create objects with properties inside the curly braces. You notate a list of key: value pairs delimited by comma

```
let object = {
  foo: 'bar',
  age: 42,
  baz: {myProp: 12}
}
```

### Accessing properties

- Object properties can be accessed by using the dot notation or the bracket notation.

```
object.foo // "bar"
object['age'] // 42
object.baz          // {myProp: 12}
object.baz.myProp   //12
```

### Property definitions

- Oftentimes, there are variables in your code that you would like to put into an object.

```
let a = 'foo',
    b = 42,
    c = {};

let o = {
  a: a,
  b: b,
  c: c
}
```

- With ECMAScript 2015, there is a shorter notation available to achieve the same:

```
let a = 'foo',
    b = 42,
    c = {};

// Shorthand property names (ES2015)
let o = {a, b, c}

// In other words,
console.log((o.a === {a}.a)) // true
```

## Duplicate property names

- When using the same name for your properties, the second property will overwrite the first.

```
let a = {x: 1, x: 2}
console.log(a) // {x: 2}
```

## Method definitions

- A property of an object can also refer to a function or a getter or setter method.

```
let o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {}
}
```

- In ECMAScript 2015, a shorthand notation is available, so that the keyword "function" is no longer necessary.

```
// Shorthand method names (ES2015)
let o = {
  property(parameters) {},
}
```

- In ECMAScript 2015, there is a way to concisely define properties whose values are generator functions:

```
let o = {
  *generator() {
    ...........
  }
};
```

## Computed property names

- Starting with ECMAScript 2015, the object initializer syntax also supports computed property names.
- That allows you to put an expression in brackets [], that will be computed and used as the property name.
- This is reminiscent of the bracket notation of the property accessor syntax,
- Now you can use a similar syntax in object literals, too:

```
// Computed property names (ES2015)
let i = 0
let a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
}

console.log(a.foo1) // 1
console.log(a.foo2) // 2
console.log(a.foo3) // 3

const items = ["A","B","C"];
const obj = {
[items]: "Hello"
}
console.log(obj); // A,B,C: "Hello"
console.log(obj["A,B,C"]) // "Hello"

let param = 'size'
let config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
}

console.log(config) // {size: 12, mobileSize: 4}
```

## Spread properties

- The Rest/Spread Properties for ECMAScript proposal (stage 4) adds spread properties to object literals. It copies own enumerable properties from a provided object onto a new object.

- Shallow-cloning (excluding prototype) or merging objects is now possible using a shorter syntax than Object.assign().

```
let obj1 = { foo: 'bar', x: 42 }
let obj2 = { foo: 'baz', y: 13 }

let clonedObj = { ...obj1 }
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 }
// Object { foo: "baz", x: 42, y: 13 }
Copy to Clipboard
```

```
Warning: Note that Object.assign() triggers setters, whereas the spread operator doesn't!
```

```
const object1 = { a: 'foo', b: 42, c: {} };

console.log(object1.a);
// expected output: "foo"

const a = 'foo';
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c };

console.log(object2.b);
// expected output: 42

const object3 = { a, b, c };

console.log(object3.a);
// expected output: "foo"
```
