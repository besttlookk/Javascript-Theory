# Object.entries()

- The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
- This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well).
- The order of the array returned by Object.entries() is the same as that provided by a for...in loop.
- If there is a need for different ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.
- The ordering of the properties is the same as that given by looping over the property values of the object manually.

#### **SYNTAX**

```
Object.entries(obj)
```

#### **EXAMPLES**

```
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// returns an empty array for any primitive type except for strings (see the above example), since primitives have no own properties
console.log(Object.entries(100)); // [ ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

> > **Converting an Object to a Map**

- The new Map() constructor accepts an iterable of entries. With Object.entries, you can easily convert from Object to Map:

```
const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

#### **Iterating through an Object**

- Using Array Destructuring, you can iterate through objects easily.

```
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
```
