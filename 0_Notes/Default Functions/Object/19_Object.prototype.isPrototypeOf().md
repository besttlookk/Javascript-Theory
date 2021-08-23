# Object.prototype.isPrototypeOf()

- The isPrototypeOf() method checks if an object exists in another object's prototype chain.
- returns a Boolean indicating whether the calling object lies in the prototype chain of the specified object.

#### **SYNTAX**

```
isPrototypeOf(object)
```

```
Note: isPrototypeOf() differs from the instanceof operator. In the expression "object instanceof AFunction", the object prototype chain is checked against AFunction.prototype, not against AFunction itself.
```

- The isPrototypeOf() method allows you to check whether or not an object exists within another object's prototype chain.

#### **EXAMPLES**

> > **Using isPrototypeOf**

- This example demonstrates that Baz.prototype, Bar.prototype, Foo.prototype and Object.prototype exist in the prototype chain for object baz:

```
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

// prototype chains:
// foo: Foo <- Object
// bar: Bar <- Foo <- Object
// baz: Baz <- Bar <- Foo <- Object
console.log(Baz.prototype.isPrototypeOf(baz));    // true
console.log(Baz.prototype.isPrototypeOf(bar));    // false
console.log(Baz.prototype.isPrototypeOf(foo));    // false
console.log(Bar.prototype.isPrototypeOf(baz));    // true
console.log(Bar.prototype.isPrototypeOf(foo));    // false
console.log(Foo.prototype.isPrototypeOf(baz));    // true
console.log(Foo.prototype.isPrototypeOf(bar));    // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

- The isPrototypeOf() method — along with the instanceof operator — comes in particularly handy if you have code that can only function when dealing with objects descended from a specific prototype chain; e.g., to guarantee that certain methods or properties will be present on that object.

- For example, to execute some code that’s only safe to run if a baz object has Foo.prototype in its prototype chain, you can do this:

```
if (Foo.prototype.isPrototypeOf(baz)) {
  // do something safe
}
```
