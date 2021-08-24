# JavaScript Object

- Objects can be created using the **Object() constructor or the object initializer / literal syntax. or with many more methods..**
- It is used to store various keyed collections and more complex entities.
- **Nearly all objects in JavaScript are instances of Object**; a typical object inherits properties (including methods) from Object.prototype, **although these properties may be shadowed (a.k.a. overridden)**. However, an Object may be deliberately created for which this is not true (e.g. by **Object.create(null))**, or it may be altered so that this is no longer true (e.g. **with Object.setPrototypeOf)**.
- Changes to the Object prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain
- This provides a very powerful although potentially dangerous mechanism to override or extend object behavior.

## Deleting a property from an object

- There isn't any method in an Object itself to delete its own properties (such as Map.prototype.delete()). To do so, one must use the **delete operator**.

---

## Object() constructor

- The Object constructor creates an object wrapper for the given value.
  - If the value is **null or undefined,** it will **create and return an empty object**.
  - Otherwise, it will return an object of a Type that corresponds to the given value.
  - If the value is an object already, it will return the value.
- When called in a non-constructor context, Object behaves identically to new Object().

#### **SYNTAX**

```js
new Object();
new Object(value);
```

#### **EXAMPLES**

> > **Creating a new Object**

```js
let o = new Object();
o.foo = 42;

console.log(o); // Object { foo: 42 }
```

> > **Using Object given undefined and null types**

The following examples store an empty Object object in o:

```js
let o = new Object();
console.log(new Object())   {}

```

```js
let o = new Object(undefined);
console.log(new Object(undefined))  {}

```

```js
let o = new Object(null);
console.log(new Object(null));
```

---

## JavaScript Object Properties

- JavaScript specifies **characteristics of properties** of objects via **internal attributes** surrounded by the two pair of square brackets e.g., **_[[Enumerable]]_**.
- There are **two types** of object properties: **data properties** and **accessor properties**.

### 1) Data properties

- A data property contains a **single location for a data value**.
- **A data property has four attributes:**
  1. **[[Configurarable]]** – determines whether a property can be **redefined or removed via delete operator.**
  2. **[[Enumerable]]** – indicates that if a property will be returned in the for...in loop.
  3. **[[Writable]]** – specifies that the value of a **property can be changed.**
  4. **[[Value]]** – contains the actual value of a property.
- By **default**, the **[[Configurable]] , [[Enumerable]], and [[Writable]]** attributes set to **_true_** for all properties defined directly on an object.
- The default value of the [**[Value]] attribute is undefined.**

> > The following example creates a person object which has the firstName and lastName properties with the configurable, enumerable, and writable attributes set to true. Their values are set to 'John' and 'Doe' respectively:

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};
```

```js
console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
```

#### Output

```
{ value: 'John',
  writable: true,
  enumerable: true,
  configurable: true }
```

`To change any attribute of a property, you use the Object.defineProperty() method.`

- The Object.defineProperty() method accepts three arguments:
  1. An object.
  2. A property name of the object.
  3. A property descriptor object that has four properties: configurable, enumerable, writable, and value.

`If you use the Object.defineProperty() method to define a property of the object, the default values of [[Configurable]], [[Enumerable]], and [[Writable]] are set to false unless otherwise specified.`

- The following example creates a person object and adds the ssn property to it using the Object.defineProperty() method:

```js
"use strict"; // if not in strict mode... it will not throw error

let person = {};
Object.defineProperty(person, "ssn", {
  configurable: false,
  value: "012-38-9119",
});
delete person.ssn; // TypeError: Cannot delete property 'ssn' of #<Object>
```

`In addition, once a property is defined as non-configurable, it cannot become configurable.`

- If you use the Object.defineProperty() method to **change any attribute other than the writable**, you’ll get an **error.**

```js
"use strict";

let person = {};
Object.defineProperty(person, "ssn", {
  configurable: false,
  value: "012-38-9119",
});

Object.defineProperty(person, "ssn", {
  configurable: true,
});

// TypeError: Cannot redefine property: ssn
```

> > The following makes the ssn property non-enumerable by setting the enumerable attribute to false.

```js
let person = {};
person.age = 25;
person.ssn = "012-38-9119";

// updating property: changing enumerable from default true to false
Object.defineProperty(person, "ssn", {
  enumerable: false,
});

for (let prop in person) {
  console.log(prop); // age
}

// adding new property using Object.defineProperty: by default enumerable is false
Object.defineProperty(person, "name", {
  value: "user1",
});

console.log(person); // { age: 25 }
```

### 2) Accessor properties

- Similar to data properties, accessor properties also have [[Configurable]] and [[Enumerable]] attributes.
- But the accessor properties have the [[Get]] and [[Set]] attributes instead of [[Value]] and [[Writable]].
- When you **read data from an accessor property**, the [[Get]] function is called automatically to return a value. The **default return value of the [[Get]] function is undefined.**

- If you assign a value to an accessor property, the [[Set]] function is called automatically.

- **To define an accessor property, you must use the Object.defineProperty() method.**

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};

Object.defineProperty(person, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
  set: function (value) {
    let parts = value.split(" ");
    if (parts.length == 2) {
      this.firstName = parts[0];
      this.lastName = parts[1];
    } else {
      throw "Invalid name format";
    }
  },
});

console.log(person.fullName); // 'John Doe'
```

## Define multiple properties: Object.defineProperties()

- In ES5, you can define multiple properties in a single statement using the Object.defineProperties() method.
  > > In this example, we defined three data properties: name, price, and tax, and one accessor property netPrice for the product object.

```js
var product = {};

Object.defineProperties(product, {
  name: {
    value: "Smartphone",
  },
  price: {
    value: 799,
  },
  tax: {
    value: 0.1,
  },
  netPrice: {
    get: function () {
      return this.price * (1 + this.tax);
    },
  },
});

console.log(
  "The net price of a " +
    product.name +
    " is " +
    product.netPrice.toFixed(2) +
    " USD"
); // The net price of a Smartphone is 878.90 USD
```

## JavaScript object property descriptor

- The **Object.getOwnPropertyDescriptor() method** allows you to get the **descriptor object of a property.**
- The Object.getOwnPropertyDescriptor() method takes two arguments:
  1. An object
  2. A property of the object
- It returns a descriptor object that describes a property. the descriptor object has four properties:** configurable, enumerable, writable, and value.**

> > The following example gets the descriptor object of the name property of the product object in the prior example.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");

console.log(descriptor);
```

#### Output

```
{ value: 'John',
  writable: true,
  enumerable: true,
  configurable: true }
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
