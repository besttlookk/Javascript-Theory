# Object.assign()

The **Object.assign() method** is used to **copy the values of all enumerable own properties** from one or more source objects to a target object.

Objects are assigned and **copied by reference.**

It will return the target object.

#### **SYNTAX**

```js
Object.assign(target, ...sources);
```

#### **PARAMETERS**

- **target**:
  - **The target object** - what to apply the sources’ properties to, which is returned after it is modified.
- **sources**:

  - The source object(s). - objects containing the properties you want to apply.

- **Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.**

#### **EXAMPLES**

> > Cloning an object

```js
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

copy.a = 2; // { a: 1 }
console.log(copy.a); // 2
console.log(obj.a); // 1
```

> > same key property

```js
const object1 = {
  a: 1,
  b: 2,
  c: 3,
};
const object2 = Object.assign({ c: 4, d: 5 }, object1);
console.log(object2); // { c: 3, d: 5, a: 1, b: 2 }
const object3 = {
  g: 1,
  h: 2,
  i: 3,
};

const object4 = Object.assign({ g: 34, h: 25 }, object3);

console.log(object4); // { g: 1, h: 2, i: 3 }
```

This method can be used if we want to make new object based on existing object

> > Shallow clone

```js
Warning for Deep Clone
For deep cloning, we need to use alternatives, because Object.assign() copies property values.

//If the source value is a reference to an object, it only copies the reference value(address)

function test() {
  'use strict';

  let obj1 = { a: 0 , b: { c: 0}};
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

  // NO EFFECT
  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
  console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

  // NO EFFECT
  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
  console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}

  // SEE THE CHANGE: bcoz in both object "b" property refercing the same value
  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
  console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}

  // Deep Clone
  obj1 = { a: 0 , b: { c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
}

test();
```

> > Merging objects

```js
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.
```

> > Merging objects with same properties

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

// The properties are overwritten by other objects that have the same properties later in the parameters order.
```

> > Properties on the prototype chain and non-enumerable properties cannot be copied

```js
const obj = Object.create(
  { foo: 1 },
  {
    // foo is on obj's prototype chain.
    bar: {
      value: 2, // bar is a non-enumerable property.
    },
    baz: {
      value: 3,
      enumerable: true, // baz is an own enumerable property.
    },
  }
);

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
console.log(obj.foo); // 1
console.log(copy.foo); // undefine
```

> > Primitives will be wrapped to objects

```js
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```
