# getter

- The get syntax binds an object property to a function that will be called when that property is looked up.

#### **SYNTAX**

```js
{get prop() { ... } }
{get [expression]() { ... } }


Parameters
prop
The name of the property to bind to the given function.

expression
Starting with ECMAScript 2015, you can also use expressions for a computed property name to bind to the given function.
```

- Sometimes it is desirable to allow access to a property that returns a dynamically computed value, or you may want to reflect the status of an internal variable without requiring the use of explicit method calls. In JavaScript, this can be accomplished with the use of a getter.
- It is not possible to simultaneously have a getter bound to a property and have that property actually hold a value, although it is possible to use a getter and a setter in conjunction to create a type of pseudo-property.
- Note the following when working with the get syntax:
  - It can have an identifier which is either a number or a string;
  - It must have exactly zero parameters
  - It must not appear in an object literal with another get or with a data entry for the same property ({ get x() { }, get x() { } } and { x: ..., get x() { } } are forbidden).

#### **EXAMPLES**

> > **Defining a getter on new objects in object initializers**

- This will create a pseudo-property latest for object obj, which will return the last array item in log.

```js
const obj = {
  log: ['example','test'],
  get latest() {
    if (this.log.length === 0) return undefined;
    return this.log[this.log.length - 1];
  }
}
console.log(obj.latest); // "test"

Note that attempting to assign a value to latest will not change it.
```

> > **Deleting a getter using the delete operator**

- If you want to remove the getter, you can just delete it:

```js
delete obj.latest;
```

> > **Defining a getter on existing objects using defineProperty**

- To append a getter to an existing object later at any time, use Object.defineProperty().

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  get: function () {
    return this.a + 1;
  },
});

console.log(o.b); // Runs the getter, which yields a + 1 (which is 1)
```

> > **Using a computed property name**

```js
const expr = "foo";

const obj = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj.foo); // "bar"
```

## Smart / self-overwriting / lazy getters

- Getters give you a way to define a property of an object, but they do not calculate the property's value until it is accessed. A getter defers the cost of calculating the value until the value is needed. If it is never needed, you never pay the cost.

## get vs. defineProperty

- While using the get keyword and Object.defineProperty() have similar results, there is a subtle difference between the two when used on classes.

- When using get the property will be defined on the instance's prototype, while using Object.defineProperty() the property will be defined on the instance it is applied to.

```js
class Example {
  get hello() {
    return "world";
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"

console.log(Object.getOwnPropertyDescriptor(obj, "hello"));
// undefined

console.log(
  Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), "hello")
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
```
