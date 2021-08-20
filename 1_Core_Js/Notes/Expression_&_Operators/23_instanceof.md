# Relational Operator: instanceof

- The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

#### **SYNTAX**

```
object instanceof constructor
```

- The instanceof operator tests the presence of constructor.prototype in object's prototype chain.

- where objectName is the name of the object to compare to objectType, and objectType is an object type, such as Date or Array.
- Use instanceof when you need to confirm the type of an object at runtime.

```

var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
// statements to execute
}
```

```
// defining constructors
function C() {}
function D() {}

let o = new C()

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D

o instanceof Object           // true, because:
C.prototype instanceof Object // true

C.prototype = {}
let o2 = new C()

o2 instanceof C  // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C

D.prototype = new C()  // add C to [[Prototype]] linkage of D
let o3 = new D()
o3 instanceof D        // true
o3 instanceof C        // true since C.prototype is now in o3's prototype chain
```

#### **EXAMPLES**

```
The following example shows the behavior of instanceof with String objects.

let literalString = 'This is a literal string';
let stringObject  = new String('String created with constructor');

literalString instanceof String;  // false, string literal is not a String
stringObject  instanceof String;  // true

literalString instanceof Object;  // false, string literal is not an Object
stringObject  instanceof Object;  // true

stringObject  instanceof Date;    // false
```

```
The following example shows the behavior of instanceof with Date objects.

let myDate = new Date();

myDate instanceof Date;      // true
myDate instanceof Object;    // true
myDate instanceof String;    // false
```

```
The following example shows the behavior of instanceof with objects created using Object.create()

function Shape() {
}

function Rectangle() {
  Shape.call(this); // call super constructor.
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

let rect = new Rectangle();

rect instanceof Object;    // true
rect instanceof Shape;     // true
rect instanceof Rectangle; // true
rect instanceof String;    // false

let literalObject     = {};
let nullObject  = Object.create(null);
nullObject.name = "My object";

literalObject    instanceof Object;   // true, every object literal has Object.prototype as prototype
({})             instanceof Object;   // true, same case as above
nullObject       instanceof Object;   // false, prototype is end of prototype chain (null)
```

## Demonstrating that mycar is of type Car and type Object

```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
let mycar = new Car('Honda', 'Accord', 1998)
let a = mycar instanceof Car     // returns true
let b = mycar instanceof Object  // returns true
```
