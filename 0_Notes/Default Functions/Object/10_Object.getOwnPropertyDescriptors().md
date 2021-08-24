# Object.getOwnPropertyDescriptors()

The Object.getOwnPropertyDescriptors() method returns **_all_** own property descriptors of a given object.

This method permits examination of the precise description of all own properties of an object.

A property in JavaScript consists of either a string-valued name or a Symbol and a property descriptor.

#### **SYNTAX**

```js
Object.getOwnPropertyDescriptors(obj);
```

#### **EXAMPLE**

> > **Creating a shallow clone**

- Whereas the Object.assign() method will only copy enumerable and own properties from a source object to a target object, you are able to use this method and Object.create() for a shallow copy between two unknown objects:

```
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
```

> > **Creating a subclass**

- A typical way of creating a subclass is to define the subclass, set its prototype to an instance of the superclass, and then define properties on that instance. This can get awkward especially for getters and setters. Instead, you can use this code to set the prototype:

```js
function superclass() {}
superclass.prototype = {
  // Define the superclass constructor, methods, and properties here
};
function subclass() {}
subclass.prototype = Object.create(superclass.prototype, {
  // Define the subclass constructor, methods, and properties here
});
```
