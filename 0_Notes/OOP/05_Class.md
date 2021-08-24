# JavaScript Class

- A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.
- Unlike other programming languages such as Java and C#, JavaScript classes are syntactic sugar over the prototypal inheritance. In other words, ES6 classes are just special functions.
- We can define the class just like **function declarations** and **function expressions.**
- The JavaScript class contains various class members within a body including methods or constructor.
- According to JavaScript naming conventions, the **name of the class always starts with an uppercase letter.**

## ES6 class declaration

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
```

Instead of using a constructor/prototype pattern, it uses the **_class keyword._**

> In the **_Person class_**, the **_constructor()_** is where you can initialize the **properties of an instance**. J**avaScript automatically calls the constructor() method when you instantiate an object** of the class.

```js
let john = new Person("John Doe");
```

To verify the fact that **classes are special functions**, you can use the typeof operator of to check the type of the Person class.

```js
console.log(typeof Person); // function
```

The john object is also an instance of the Person and Object types:

```js
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
```

## Class vs. Custom type

Despite the similarities between a class and a custom type defined via a constructor function, **there are some important differences.**

> **First,** class declarations are **not hoisted** like function declarations.

> **Second,** all the code inside a class automatically executes in the **strict mode**. And you cannot change this behavior.

> **Third,** class methods are **non-enumerable**. If you use a **constructor/prototype pattern**, you have to use the **Object.defineProperty()** method to make a property non-enumerable.

> **Finally,** calling the class constructor **without the new** operator will result in an error as shown in the following example.

```js
let john = Person("John Doe");

Uncaught TypeError: Class constructor Person cannot be invoked without 'new'
```

`Note that it’s possible to call the constructor function without the new operator. In this case, the constructor function behaves like a regular function.`

## JavaScript Class Expressions

- Similar to functions, classes have expression forms. A class expression provides you with an alternative way to define a new class.
- Here, it is not mandatory to assign the name of the class. So, the **class expression can be named or unnamed.**

- A **_class expression_** doesn’t require an identifier after the class keyword. And **you can use a class expression in a variable declaration and pass it into a function as an argument.**

```js
let Person = class {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
};
```

> A class expression may have a name or not. In above example, we have an **_unnamed class expression._**

> If a class expression has a name, its **name can be local** to the class body. The class is retrieved using class.name property.

```js
var emp = class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
};
console.log(emp.name); // Employee
console.log(Employee.name); // ERROR: Employee is not defined
```

The following creates an instance of the Person class expression. Its syntax is the same as if it were a class declaration.

```js
let person = new Person("John Doe");
```

Like a class declaration, the type of a class expression is also a function.

```js
console.log(typeof Person); // function
```

> Similar to function expressions, class expressions are not hoisted. It means that you cannot create an instance of the class before defining the class expression.

> Unlike class declaration, the **class expression allows us to re-declare the same class.**

```js
//Declaring class
var emp = class {
  //Initializing an object
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  //Declaring method
  detail() {
    console.log(this.id, this.name);
  }
};

//passing object to a variable
var e1 = new emp(101, "Martin Roy");
var e2 = new emp(102, "Duke William");
e1.detail(); //calling method
e2.detail();

//Re-declaring class
var emp = class {
  //Initializing an object
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  detail() {
    console.log(this.id, this.name);
  }
};
//passing object to a variable
var e1 = new emp(103, "James Bella");
var e2 = new emp(104, "Nick Johnson");
e1.detail(); //calling method
```

## First-class citizen

> JavaScript classes are first-class citizens. It means that you can pass a class into a function, return it from a function, and assign it to a variable.

```js
function factory(aClass) {
  return new aClass();
}

let greeting = factory(
  class {
    sayHi() {
      console.log("Hi");
    }
  }
);

greeting.sayHi(); // 'Hi'
```

## Singleton

> Singleton is a design pattern that limits the instantiation of a class to a single instance. It ensures that **only one instance of a class** can be created throughout the system.

**Class expressions** can be used to create a singleton by calling the class constructor immediately.

To do that, you use the **new operator** with a class expression and include the **parentheses at the end of class declaration** as shown in the following example:

```js
let app = new (class {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`Starting the ${this.name}...`);
  }
})("Awesome App");

app.start(); // Starting the Awesome App...
```

---

## Constructor

> The constructor method is a **special method of a class for creating and initializing an object of that class.**

#### **SYNTAX**

```js
constructor() { ... }
constructor(argument0) { ... }
constructor(argument0, argument1) { ... }
constructor(argument0, argument1, ... , argumentN) { ... }
```

`A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.`

If you **don't provide your own constructor**, then a **default constructor** will be supplied for you.

If your class is a **base class**, the **default constructor is empty:**

```js
constructor() {}
```

If your class is a **derived class**, the **default constructor calls the parent constructor,** passing along any arguments that were provided:

```js
constructor(...args) {
  super(...args);
}
```

> > That enables code like this to work:

```js
class ValidationError extends Error {
  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message})`;
  }
}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // This is Error instead of ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}
```

The ValidationError class doesn't need an explicit constructor, because it doesn't need to do any custom initialization. The default constructor then takes care of initializing the parent Error from the argument it is given.

> However, **if you provide your own constructor**, and **your class derives from some parent class**, then you must **_explicitly call the parent class constructor using super_**. For example:

```js
class ValidationError extends Error {
  constructor(message) {
    super(message); // call parent class constructor
    this.name = "ValidationError";
    this.code = "42";
  }

  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
  }
}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // Now this is ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}
```

`There can be only one special method with the name "constructor" in a class. Having more than one occurrence of a constructor method in a class will throw a SyntaxError error.`

#### **EXAMPLES**

> > **Using the constructor method**

```js
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // NOTE: In derived classes, `super()` must be called before you
    // can use `this`. Leaving this out will cause a ReferenceError.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.height = value ** 0.5;
    this.width = value ** 0.5;
  }
}
```

---

## Getters and Setters

> **_Setters are special methods_** used to **define values only**. Similarly, **_Getters_** are special methods used to **return a value only.**

getters and setters can be very useful in **data validation.**

Getter and setter are actually function that gets or sets a value. But on the outside they **still looks like a regular propertiy**.

> > The following example defines a class called Person:

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

let person = new Person("John");
console.log(person.name); // John
```

The Person class has a property name and a constructor. The constructor initializes the name property to a string.

Sometimes, you don’t want the name property to be accessed directly like this:

```js
person.name;
```

To do that, you may come up with a pair of methods that manipulate the name property. For example:

```js
class Person {
  constructor(name) {
    this.setName(name);
  }
  getName() {
    return this.name;
  }
  setName(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this.name = newName;
  }
}

let person = new Person("Jane Doe");
console.log(person); // Jane Doe

person.setName("Jane Smith");
console.log(person.getName()); // Jane Smith
```

The **getName() method** returns the value of the name property.

The **setName() method** assigns an argument to the name property. The setName() removes the whitespaces from both ends of the newName argment and throws an exception if the newName is empty.

The **constructor() calls** the setName() method to initialize the name property:

> > ES6 provides a **specific syntax for defining the getter and sette**r using the get and set keywords. For example:

```js
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this._name = newName;
  }
}
```

> **First,** the name property is changed to **\_name** to avoid the name collision with the getter and setter.

> Second, the getter uses the get keyword followed by the method name:

To call the getter, you use the following syntax:

```js
let name = person.name;
```

When JavaScript sees the access to name property of the Person class, it checks if the Person class has any name property.

**If not,** JavaScript checks if the Person class has **any method that binds to the name property.** In this example, the **name() method binds to the name property via the get keyword**. Once JavaScript finds the **getter method, it executes the getter method and returns a value.**

> **Third,** the setter uses the set keyword followed by the method name:

JavaScript will call the name() setter when you assign a value to the name property like this:

```js
person.name = "Jane Smith";
```

If a class has only getter but not setter and you attempt to use the setter, **the change won’t take any effect.** See the following example:

```js
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

let person = new Person("Jane Doe");
console.log(person.name);

// attempt to change the name, but cannot
person.name = "Jane Smith";
console.log(person.name); // Jane Doe
```

> > Another Example

```js
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // we are setting a property which already exist
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else console.log("Given name is not a full name");
  }

  get fullName() {
    return this._fullName;
  }

  static staticMethod() {
    console.log("This is a static method");
  }
}

const person1 = new PersonCl("Rahul kumar", 1990);

console.log(person1.age); // 47

console.log(person1.fullName); // "Rahul Kumar"

PersonCl.staticMethod(); // this is a static method
```

---

## Static Method

The **static keyword** defines a **static method or property for a class**.

Neither static methods nor static properties can be called on instances of the class. Instead, **they're called on the class itself.**

Static methods are often **utility functions**, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or **any other data you don't need to be replicated across instances.**

#### **SYNTAX**

```js
static methodName() { ... }
static propertyName [= value];
```

#### **EXAMPLES**

> > **Using static members in classes**

The following example demonstrates several things:

- How a static member (method or property) is defined on a class.
- That a class with a static member can be sub-classed.
- How a static member can and cannot be called.

```js
class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = "I square the triple of any number you provide";
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

const tp = new Triple();

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // 'Tripler'

// This throws because calculate() is a static member, not an instance member.
console.log(tp.calculate()); // 'tp.calculate is not a function'
```

> > **Calling static members from another static method**

In order to call a static method or property within another static method of the same class, you can use the this keyword.

```
class StaticMethodCall {
  static staticProperty = 'static property';
  static staticMethod() {
    return 'Static method and ' + this.staticProperty + ' has been called';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}
StaticMethodCall.staticMethod();
// 'Static method and static property has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method and static property has been called from another static method'
```

> > **Calling static members from a class constructor and other methods**

Static members are not directly accessible using the this keyword from non-static methods. You need to call them using the class name: CLASSNAME.STATIC_METHOD_NAME() / CLASSNAME.STATIC_PROPERTY_NAME or by calling the method as a property of the constructor: this.constructor.STATIC_METHOD_NAME() / this.constructor.STATIC_PROPERTY_NAME

```
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty); // 'static property'
    console.log(this.constructor.staticProperty); // 'static property'
    console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
    console.log(this.constructor.staticMethod()); // 'static method has been called.'
  }

  static staticProperty = 'static property';
  static staticMethod() {
    return 'static method has been called.';
  }
}
```
