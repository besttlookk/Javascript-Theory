# Left-hand-side expressions : super

- The super keyword is used to access and call functions on an object's parent.

- The super.prop and super[expr] expressions are valid in any method definition in both classes and object literals.

#### **SYNTAX**

```
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);
```

- When used in a constructor, the super keyword appears alone and must be used before the this keyword is used.
- The super keyword can also be used to call functions on a parent object.

#### **EXAMPLES**

> > **Using super in classes**

```
class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }
}
```

> > **Super-calling static methods**

```
You are also able to call super on static methods.

class Rectangle {
  static logNbSides() {
    return 'I have 4 sides';
  }
}

class Square extends Rectangle {
  static logDescription() {
    return super.logNbSides() + ' which are all equal';
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
```

> > **Deleting super properties will throw an error**

```
You cannot use the delete operator and super.prop or super[expr] to delete a parent class' property, it will throw a ReferenceError.

class Base {
  foo() {}
}
class Derived extends Base {
  delete() {
    delete super.foo; // this is bad
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

> > **super.prop cannot overwrite non-writable properties**

```
When defining non-writable properties with e.g. Object.defineProperty, super cannot overwrite the value of the property.

class X {
  constructor() {
    Object.defineProperty(this, 'prop', {
      configurable: true,
      writable: false,
      value: 1
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2;   // Cannot overwrite the value.
  }
}

var y = new Y();
y.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1
```

> > **Using super.prop in object literals**

```
Super can also be used in the object initializer / literal notation. In this example, two objects define a method. In the second object, super calls the first object's method. This works with the help of Object.setPrototypeOf() with which we are able to set the prototype of obj2 to obj1, so that super is able to find method1 on obj1.

var obj1 = {
  method1() {
    console.log('method 1');
  }
}

var obj2 = {
  method2() {
    super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
```
