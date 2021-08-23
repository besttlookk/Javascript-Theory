# Object.isExtensible()

- The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).
- returns a Boolean indicating whether or not the given object is extensible.

#### **SYNTAX**

```
Object.isExtensible(obj)
```

- Objects are extensible by default: they can have new properties added to them, and (in engines that support **proto**) their **proto** property can be modified.
- An object can be marked as non-extensible using Object.preventExtensions(), Object.seal(), or Object.freeze().

#### **EXAMPLES**

> > **Using Object.isExtensible**

```
// New objects are extensible.
var empty = {};
Object.isExtensible(empty); // === true

// ...but that can be changed.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Sealed objects are by definition non-extensible.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// Frozen objects are also by definition non-extensible.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false
```

> > **Non-object coercion**

- In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
- In ES2015, a non-object argument will be treated as if it was a non-extensible ordinary object, return false.

```
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES2015 code)
```
