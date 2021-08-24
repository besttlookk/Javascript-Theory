# Object.isSealed()

The Object.isSealed() method determines if an object is sealed.

Return A Boolean indicating whether or not the given object is sealed.

An object is sealed if it is not extensible and if all its properties are non-configurable and therefore not removable **(but not necessarily non-writable).**

#### **SYNTAX**

```js
Object.isSealed(obj);
```

#### **EXAMPLES**

> > **Using Object.isSealed**

```js
// Objects aren't sealed by default.
var empty = {};
Object.isSealed(empty); // === false

// If you make an empty object non-extensible,
// it is vacuously sealed.
Object.preventExtensions(empty);
Object.isSealed(empty); // === true

// The same is not true of a non-empty object,
// unless its properties are all non-configurable.
var hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // === false

// But make them all non-configurable
// and the object becomes sealed.
Object.defineProperty(hasProp, "fee", {
  configurable: false,
});
Object.isSealed(hasProp); // === true

// The easiest way to seal an object, of course,
// is Object.seal.
var sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // === true

// A sealed object is, by definition, non-extensible.
Object.isExtensible(sealed); // === false

// A sealed object might be frozen,
// but it doesn't have to be.
Object.isFrozen(sealed); // === true
// (all properties also non-writable)

var s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // === false
// ('p' is still writable)

var s3 = Object.seal({
  get p() {
    return 0;
  },
});
Object.isFrozen(s3); // === true
// (only configurability matters for accessor properties)
```

> > **Non-object coercion**

- In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
- In ES2015, a non-object argument will be treated as if it was a sealed ordinary object, return true.

```
Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
```
