# Object

- Objects can be created using the Object() constructor or the object initializer / literal syntax.
- It is used to store various keyed collections and more complex entities.
- Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden). However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null)), or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).
- Changes to the Object prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain
- This provides a very powerful although potentially dangerous mechanism to override or extend object behavior.
- The Object constructor creates an object wrapper for the given value.
  - If the value is null or undefined, it will create and return an empty object.
  - Otherwise, it will return an object of a Type that corresponds to the given value.
  - If the value is an object already, it will return the value
- When called in a non-constructor context, Object behaves identically to new Object().

## Deleting a property from an object

- There isn't any method in an Object itself to delete its own properties (such as Map.prototype.delete()). To do so, one must use the delete operator.

---

## Object() constructor

- The Object constructor creates an object wrapper for the given value.
  - If the value is null or undefined, it will create and return an empty object.
  - Otherwise, it will return an object of a Type that corresponds to the given value.
  - If the value is an object already, it will return the value.
- When called in a non-constructor context, Object behaves identically to new Object().

#### **SYNTAX**

```
new Object()
new Object(value)
```

#### **EXAMPLES**

> > **Creating a new Object**

```
let o = new Object()
o.foo = 42

console.log(o)
// Object { foo: 42 }
```

> > **Using Object given undefined and null types**

- The following examples store an empty Object object in o:

```
let o = new Object()
```

```
let o = new Object(undefined)
```

```
let o = new Object(null)
```

---

## Methods

| S.No | Methods                            | Description                                                                                                 |
| ---- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1    | Object.assign()                    | This method is used to copy enumerable and own properties from a source object to a target object           |
| 2    | Object.create()                    | This method is used to create a new object with the specified prototype object and properties.              |
| 3    | Object.defineProperty()            | This method is used to describe some behavioral attributes of the property.                                 |
| 4    | Object.defineProperties()          | This method is used to create or configure multiple object properties.                                      |
| 5    | Object.entries()                   | This method returns an array with arrays of the key, value pairs.                                           |
| 6    | Object.freeze()                    | This method prevents existing properties from being removed.                                                |
| 7    | Object.getOwnPropertyDescriptor()  | This method returns a property descriptor for the specified property of the specified object.               |
| 8    | Object.getOwnPropertyDescriptors() | This method returns all own property descriptors of a given object.                                         |
| 9    | Object.getOwnPropertyNames()       | This method returns an array of all properties (enumerable or not) found.                                   |
| 10   | Object.getOwnPropertySymbols()     | This method returns an array of all own symbol key properties.                                              |
| 11   | Object.getPrototypeOf()            | This method returns the prototype of the specified object.                                                  |
| 12   | Object.is()                        | This method determines whether two values are the same value.                                               |
| 13   | Object.isExtensible()              | This method determines if an object is extensible                                                           |
| 14   | Object.isFrozen()                  | This method determines if an object was frozen.                                                             |
| 15   | Object.isSealed()                  | This method determines if an object is sealed.                                                              |
| 16   | Object.keys()                      | This method returns an array of a given object's own property names.                                        |
| 17   | Object.preventExtensions()         | This method is used to prevent any extensions of an object.                                                 |
| 18   | Object.seal()                      | This method prevents new properties from being added and marks all existing properties as non-configurable. |
| 19   | Object.setPrototypeOf()            | This method sets the prototype of a specified object to another object.                                     |
| 20   | Object.values()                    | This method returns an array of values.                                                                     |
