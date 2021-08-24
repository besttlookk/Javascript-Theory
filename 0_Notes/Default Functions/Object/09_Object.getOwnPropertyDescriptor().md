# Object.getOwnPropertyDescriptor()

The Object.getOwnPropertyDescriptor() method **returns an object** describing the **configuration of a specific property on a given object** (that is, one directly present on an object and not in the object's prototype chain).

`The object returned is mutable but mutating it has no effect on the original property's configuration.`

#### **SYNTAX**

```js
Object.getOwnPropertyDescriptor(obj, prop);
```

#### **EXAMPLES**

```js
const object1 = {
  property1: 42,
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");

console.log(descriptor1.configurable);
// expected output: true

console.log(descriptor1.value);
// expected output: 42
```

```js
var o, d;

o = {
  get foo() {
    return 17;
  },
};
d = Object.getOwnPropertyDescriptor(o, "foo");
// d is {
//   configurable: true,
//   enumerable: true,
//   get: /*the getter function*/,
//   set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
// d is {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = { [Symbol.for("baz")]: 73 };
d = Object.getOwnPropertyDescriptor(o, Symbol.for("baz"));
// d is {
//   configurable: true,
//   enumerable: true,
//   value: 73,
//   writable: true
// }

o = {};
Object.defineProperty(o, "qux", {
  value: 8675309,
  writable: false,
  enumerable: false,
});
d = Object.getOwnPropertyDescriptor(o, "qux");
// d is {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
```

## Non-object coercion

- In ES5, if the first argument to this method is not an object (a primitive), then it will cause a TypeError.
- In ES2015, a non-object first argument will be coerced to an object at first.

```js
Object.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not an object  // ES5 code

Object.getOwnPropertyDescriptor("foo", 0);
// Object returned by ES2015 code: {
//   configurable: false,
//   enumerable: true,
//   value: "f",
//   writable: false
// }
```
