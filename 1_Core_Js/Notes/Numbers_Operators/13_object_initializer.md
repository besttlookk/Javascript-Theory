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
