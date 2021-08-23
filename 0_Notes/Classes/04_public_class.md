# Public class fields

- Both static and instance public fields are writable, enumerable, and configurable properties. As such, unlike their private counterparts, they participate in prototype inheritance.

#### **SYNTAX**

```
class ClassWithInstanceField {
  instanceField = 'instance field'
}

class ClassWithStaticField {
  static staticField = 'static field'
}

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world'
  }
}
```

#### **EXAMPLES**

> > **Public static fields**

- Public static fields are useful when you want a field to exist only once per class, not on every class instance you create. This is useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances
- Public static fields are declared using the static keyword. They are added to the class constructor at the time of class evaluation using Object.defineProperty(). They are accessed again from the class constructor.

```
class ClassWithStaticField {
  static staticField = 'static field'
}

console.log(ClassWithStaticField.staticField)
// expected output: "static field"
```

- Fields without initializers are initialized to undefined.

```
class ClassWithStaticField {
  static staticField
}

console.assert(ClassWithStaticField.hasOwnProperty('staticField'))
console.log(ClassWithStaticField.staticField)
// expected output: "undefined"
```

- Public static fields are not reinitialized on subclasses, but can be accessed via the prototype chain.

```
class ClassWithStaticField {
  static baseStaticField = 'base field'
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = 'sub class field'
}

console.log(SubClassWithStaticField.subStaticField)
// expected output: "sub class field"

console.log(SubClassWithStaticField.baseStaticField)
// expected output: "base field"
```

- When initializing fields, this refers to the class constructor. You can also reference it by name, and use super to get the superclass constructor (if one exists).

```
class ClassWithStaticField {
  static baseStaticField = 'base static field'
  static anotherBaseStaticField = this.baseStaticField

  static baseStaticMethod() { return 'base static method output' }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod()
}

console.log(ClassWithStaticField.anotherBaseStaticField)
// expected output: "base static field"

console.log(SubClassWithStaticField.subStaticField)
// expected output: "base static method output"
```

> > **Public instance fields**

- Public instance fields exist on every created instance of a class. By declaring a public field, you can ensure the field is always present, and the class definition is more self-documenting.

- Public instance fields are added with Object.defineProperty() either at construction time in the base class (before the constructor body runs), or just after super() returns in a subclass.

```
class ClassWithInstanceField {
  instanceField = 'instance field'
}

const instance = new ClassWithInstanceField()
console.log(instance.instanceField)
// expected output: "instance field"
```

- Fields without initializers are initialized to undefined.

```
class ClassWithInstanceField {
  instanceField
}

const instance = new ClassWithInstanceField()
console.assert(instance.hasOwnProperty('instanceField'))
console.log(instance.instanceField)
// expected output: "undefined"
```

- Like properties, field names may be computed.

```
const PREFIX = 'prefix'

class ClassWithComputedFieldName {
    [`${PREFIX}Field`] = 'prefixed field'
}

const instance = new ClassWithComputedFieldName()
console.log(instance.prefixField)
// expected output: "prefixed field"
```

- When initializing fields this refers to the class instance under construction. Just as in public instance methods, if you're in a subclass you can access the superclass prototype using super.

```
class ClassWithInstanceField {
  baseInstanceField = 'base field'
  anotherBaseInstanceField = this.baseInstanceField
  baseInstanceMethod() { return 'base method output' }
}

class SubClassWithInstanceField extends ClassWithInstanceField {
  subInstanceField = super.baseInstanceMethod()
}

const base = new ClassWithInstanceField()
const sub = new SubClassWithInstanceField()

console.log(base.anotherBaseInstanceField)
// expected output: "base field"

console.log(sub.subInstanceField)
// expected output: "base method output"
```

## Public methods

> > **Public static methods**

- The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.

```
class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."
```

- The static methods are added to the class constructor with Object.defineProperty() at class evaluation time. These methods are writable, non-enumerable, and configurable.

> > **Public instance methods**

- As the name implies, public instance methods are methods available on class instances.

```
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world'
  }
}

const instance = new ClassWithPublicInstanceMethod()
console.log(instance.publicMethod())
// expected output: "hello world"
```

- Public instance methods are added to the class prototype at the time of class evaluation using Object.defineProperty(). They are writable, non-enumerable, and configurable.

- You may make use of generator, async, and async generator functions.

```
class ClassWithFancyMethods {
  *generatorMethod() { }
  async asyncMethod() { }
  async *asyncGeneratorMethod() { }
}
```

- Inside instance methods, this refers to the instance itself. In subclasses, super lets you access the superclass prototype, allowing you to call methods from the superclass.

```
class BaseClass {
  msg = 'hello world'
  basePublicMethod() {
    return this.msg
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod()
  }
}

const instance = new SubClass()
console.log(instance.subPublicMethod())
// expected output: "hello world"
```

- Getters and setters are special methods that bind to a class property and are called when that property is accessed or set. Use the get and set syntax to declare a public instance getter or setter.

```
class ClassWithGetSet {
  #msg = 'hello world'
  get msg() {
    return this.#msg
  }
  set msg(x) {
    this.#msg = `hello ${x}`
 }
}

const instance = new ClassWithGetSet()
console.log(instance.msg)
// expected output: "hello world"

instance.msg = 'cake'
console.log(instance.msg)
// expected output: "hello cake"
```
