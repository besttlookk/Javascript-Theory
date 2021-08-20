# Object.keys()

- The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
- returns an array of strings that represent all the enumerable properties of the given object.
- Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object.
- The ordering of the properties is the same as that given by looping over the properties of the object manually.

#### **SYNTAX**

```
Object.keys(obj)
```

##### **EXAMPLES**

> > **Using Object.keys**

```
// simple array
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

- If you want all properties—including non-enumerables—see Object.getOwnPropertyNames().

> > **Non-object coercion**

- In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.

- From ES2015 onwards, a non-object argument will be coerced to an object.

```
// In ES5
Object.keys('foo');  // TypeError: "foo" is not an object

// In ES2015+
Object.keys('foo');  // ["0", "1", "2"]
```
