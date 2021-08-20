# Object.defineProperties()

- The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.

#### **SYNTAX**

```
Object.defineProperties(obj, props)
```

#### **EXAMPLES**

> > **Using Object.defineProperties**

```
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
```

```
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(object1.property1);
// expected output: 42

```
