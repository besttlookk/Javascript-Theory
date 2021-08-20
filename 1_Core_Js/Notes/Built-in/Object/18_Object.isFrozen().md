# Object.isFrozen()

- The Object.isFrozen() determines if an object is frozen.
- returns A Boolean indicating whether or not the given object is frozen.

#### **SYNTAX**

```
Object.isFrozen(obj)
```

- An object is frozen if and only if it is not extensible, all its properties are non-configurable, and all its data properties (that is, properties which are not accessor properties with getter or setter components) are non-writable.

#### **EXAMPLES**

> > **Using Object.isFrozen**

```
// A new object is extensible, so it is not frozen.
Object.isFrozen({}); // === false

// An empty object which is not extensible
// is vacuously frozen.
var vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen); // === true

// A new object with one property is also extensible,
// ergo not frozen.
var oneProp = { p: 42 };
Object.isFrozen(oneProp); // === false

// Preventing extensions to the object still doesn't
// make it frozen, because the property is still
// configurable (and writable).
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp); // === false

// ...but then deleting that property makes the object
// vacuously frozen.
delete oneProp.p;
Object.isFrozen(oneProp); // === true

// A non-extensible object with a non-writable
// but still configurable property is not frozen.
var nonWritable = { e: 'plep' };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, 'e', {
  writable: false
}); // make non-writable
Object.isFrozen(nonWritable); // === false

// Changing that property to non-configurable
// then makes the object frozen.
Object.defineProperty(nonWritable, 'e', {
  configurable: false
}); // make non-configurable
Object.isFrozen(nonWritable); // === true

// A non-extensible object with a non-configurable
// but still writable property also isn't frozen.
var nonConfigurable = { release: 'the kraken!' };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, 'release', {
  configurable: false
});
Object.isFrozen(nonConfigurable); // === false

// Changing that property to non-writable
// then makes the object frozen.
Object.defineProperty(nonConfigurable, 'release', {
  writable: false
});
Object.isFrozen(nonConfigurable); // === true

// A non-extensible object with a configurable
// accessor property isn't frozen.
var accessor = { get food() { return 'yum'; } };
Object.preventExtensions(accessor);
Object.isFrozen(accessor); // === false

// ...but make that property non-configurable
// and it becomes frozen.
Object.defineProperty(accessor, 'food', {
  configurable: false
});
Object.isFrozen(accessor); // === true

// But the easiest way for an object to be frozen
// is if Object.freeze has been called on it.
var frozen = { 1: 81 };
Object.isFrozen(frozen); // === false
Object.freeze(frozen);
Object.isFrozen(frozen); // === true

// By definition, a frozen object is non-extensible.
Object.isExtensible(frozen); // === false

// Also by definition, a frozen object is sealed.
Object.isSealed(frozen); // === true
```

> > **Non-object coercion**

- In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError. In ES2015, a non-object argument will be treated as if it was a frozen ordinary object, return true.

```
Object.isFrozen(1);
// TypeError: 1 is not an object (ES5 code)

Object.isFrozen(1);
// true                          (ES2015 code)
```
