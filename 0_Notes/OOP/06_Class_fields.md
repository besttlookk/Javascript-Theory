# JS Class filelds: Public and Private fields

## Public class fields

- Both **static and instance public fields** are **writable, enumerable, and configurable properties.** As such, unlike their private counterparts, they participate in prototype inheritance.

#### **SYNTAX**

```js
class ClassWithInstanceField {
  instanceField = "instance field";
}

class ClassWithStaticField {
  static staticField = "static field";
}

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}
```

#### **EXAMPLES**

> > **Public static fields**

- Public static fields are useful when you want a **field to exist only once per class, not on every class instance you create.**
- This is useful for **caches, fixed-configuration, or any other data you don't need to be replicated across instances**
- **Public static fields** are declared using the static keyword. They are added to the class constructor at the time of class evaluation using Object.defineProperty(). They are accessed again from the class constructor.

```js
class ClassWithStaticField {
  static staticField = "static field";
}

console.log(ClassWithStaticField.staticField);
// expected output: "static field"
```

Fields without initializers are initialized to **_undefined._**

```js
class ClassWithStaticField {
  static staticField;
}

console.assert(ClassWithStaticField.hasOwnProperty("staticField"));
console.log(ClassWithStaticField.staticField);
// expected output: "undefined"
```

Public static fields are **not reinitialized on subclasses**, but **can be accessed via the prototype chain.**

```js
class ClassWithStaticField {
  static baseStaticField = "base field";
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = "sub class field";
}

console.log(SubClassWithStaticField.subStaticField);
// expected output: "sub class field"

console.log(SubClassWithStaticField.baseStaticField);
// expected output: "base field"
```

When initializing fields, **_this_** refers to the class constructor. You can also reference it by name, and use super to get the superclass constructor (if one exists).

```js
class ClassWithStaticField {
  static baseStaticField = "base static field";
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() {
    return "base static method output";
  }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField);
// expected output: "base static field"

console.log(SubClassWithStaticField.subStaticField);
// expected output: "base static method output"
```

> > **Public instance fields**

- Public instance fields exist on every created instance of a class. By declaring a public field, you can ensure the field is always present, and the class definition is more self-documenting.

- Public instance fields are added with Object.defineProperty() either at construction time in the base class (before the constructor body runs), or just after super() returns in a subclass.

```js
class ClassWithInstanceField {
  instanceField = "instance field";
}

const instance = new ClassWithInstanceField();
console.log(instance.instanceField);
// expected output: "instance field"
```

Fields without initializers are initialized to **_undefined._**

```js
class ClassWithInstanceField {
  instanceField;
}

const instance = new ClassWithInstanceField();
console.assert(instance.hasOwnProperty("instanceField"));
console.log(instance.instanceField);
// expected output: "undefined"
```

Like properties, field names may be computed.

```js
const PREFIX = "prefix";

class ClassWithComputedFieldName {
  [`${PREFIX}Field`] = "prefixed field";
}

const instance = new ClassWithComputedFieldName();
console.log(instance.prefixField);
// expected output: "prefixed field"
```

When initializing fields this refers to the class instance under construction. Just as in public instance methods, if you're in a subclass you can access the superclass prototype using super.

```js
class ClassWithInstanceField {
  baseInstanceField = "base field";
  anotherBaseInstanceField = this.baseInstanceField;
  baseInstanceMethod() {
    return "base method output";
  }
}

class SubClassWithInstanceField extends ClassWithInstanceField {
  subInstanceField = super.baseInstanceMethod();
}

const base = new ClassWithInstanceField();
const sub = new SubClassWithInstanceField();

console.log(base.anotherBaseInstanceField);
// expected output: "base field"

console.log(sub.subInstanceField);
// expected output: "base method output"
```

## Public methods

> > **Public static methods**

- The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.

```js
class ClassWithStaticMethod {
  static staticMethod() {
    return "static method has been called.";
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."
```

- The static methods are added to the class constructor with Object.defineProperty() at class evaluation time. These methods are writable, non-enumerable, and configurable.

> > **Public instance methods**

- As the name implies, public instance methods are methods available on class instances.

```js
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}

const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod());
// expected output: "hello world"
```

- Public instance methods are added to the class prototype at the time of class evaluation using Object.defineProperty(). They are writable, non-enumerable, and configurable.

- You may make use of generator, async, and async generator functions.

```js
class ClassWithFancyMethods {
  *generatorMethod() {}
  async asyncMethod() {}
  async *asyncGeneratorMethod() {}
}
```

- Inside instance methods, this refers to the instance itself. In subclasses, super lets you access the superclass prototype, allowing you to call methods from the superclass.

```js
class BaseClass {
  msg = "hello world";
  basePublicMethod() {
    return this.msg;
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod();
  }
}

const instance = new SubClass();
console.log(instance.subPublicMethod());
// expected output: "hello world"
```

Getters and setters are special methods that bind to a class property and are called when that property is accessed or set. Use the get and set syntax to declare a public instance getter or setter.

```js
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg);
// expected output: "hello world"

instance.msg = "cake";
console.log(instance.msg);
// expected output: "hello cake"
```

---

# Private class Fleild

Class fields are public by default, but private class members can be created by using a hash # prefix. The privacy encapsulation of these class features is enforced by JavaScript itself.

#### **SYNTAX**

```js
class ClassWithPrivateField {
  #privateField;
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return "hello world";
  }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;
}

class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return "hello world";
  }
}
```

#### **EXAMPLES**

> > **Private instance fields**

- Private instance fields are declared with # names (pronounced "hash names"), which are identifiers prefixed with #.
- The # is a part of the name itself.
- Private fields are accessible on the class constructor from inside the class declaration itself.
- They are used for declaration of field names as well as for accessing a field's value.
- It is a syntax error to refer to # names from out of scope. It is also a syntax error to refer to private fields that were not declared before they were called, or to attempt to remove declared fields with delete.

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
    delete this.#privateField;   // Syntax error
    this.#undeclaredField = 444; // Syntax error
  }
}

const instance = new ClassWithPrivateField()
instance.#privateField === 42;   // Syntax error
```

`Note: Use the in operator to check for potentially missing private fields (or private methods). This will return true if the private field or method exists, and false otherwise.`

- Like public fields, private fields are added at construction time in a base class, or at the point where super() is invoked in a subclass.

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}

class SubClass extends ClassWithPrivateField {
  #subPrivateField;

  constructor() {
    super();
    this.#subPrivateField = 23;
  }
}

new SubClass();
// SubClass {#privateField: 42, #subPrivateField: 23}
```

> > **Private static fields**

- Private static fields are added to the class constructor at class evaluation time. The limitation of static variables being called by only static methods still holds.

```js
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }
}

console.log(ClassWithPrivateStaticField.publicStaticMethod() === 42);
// true
```

- There is a restriction on private static fields: Only the class which defines the private static field can access the field. This can lead to unexpected behavior when using this. In the following example, this refers to the SubClass class (not the BaseClassWithPrivateStaticField class) when we try to call SubClass.basePublicStaticMethod(), and so causes a TypeError.

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42;
    return this.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends BaseClassWithPrivateStaticField {}

let error = null;

try {
  SubClass.basePublicStaticMethod();
} catch (e) {
  error = e;
}

console.log(error instanceof TypeError);
// true
console.log(error);
// TypeError: Cannot write private member #PRIVATE_STATIC_FIELD
// to an object whose class did not declare it
```

## Private methods

> > **Private instance methods**

- Private instance methods are methods available on class instances whose access is restricted in the same manner as private instance fields.

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return "hello world";
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// hello world
```

- Private instance methods may be generator, async, or async generator functions. Private getters and setters are also possible, although not in generator, async, or async generator forms.

```js
class ClassWithPrivateAccessor {
  #message;

  get #decoratedMessage() {
    return `🎬${this.#message}🛑`;
  }
  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = "hello world";
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor();
// 🎬hello world🛑
```

> > **Private static methods**

- Like their public equivalent, private static methods are called on the class itself, not instances of the class.
- Like private static fields, they are only accessible from inside the class declaration.

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod1() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }

  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

console.log(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
// true
console.log(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
// true
```

- Private static methods may be generator, async, and async generator functions.
- The same restriction previously mentioned for private static fields holds for private static methods, and similarly can lead to unexpected behavior when using this. In the following example, when we try to call Derived.publicStaticMethod2(), this refers to the Derived class (not the Base class) and so causes a TypeError

```js
class Base {
  static #privateStaticMethod() {
    return 42;
  }
  static publicStaticMethod1() {
    return Base.#privateStaticMethod();
  }
  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1());
// 42
console.log(Derived.publicStaticMethod2());
// TypeError: Cannot read private member #privateStaticMethod
// from an object whose class did not declare it
```
