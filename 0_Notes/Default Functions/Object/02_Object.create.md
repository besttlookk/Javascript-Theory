# Object.create()

- The Object.create() method creates a new object, **using an existing object as the prototype of the newly created object.**

#### **SYNTAX**

```js
Object.create(proto);
Object.create(proto, propertiesObject);
```

#### **PARAMETERS**

- **propertiesObject (Optional)**
  - **If specified and not undefined,** an object whose enumerable own properties (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names.
- The proto parameter has to be either

  - null or
  - an Object excluding **primitive wrapper objects.**

- If proto is neither of these a TypeError is thrown.\*\* is thrown.

#### **EXAMPLES**

> > creating new object

```js
const people = {
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(people); // people object is now the prototype of me

// Adding properties to newly created object "me"
me.name = "Marry"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction(); // OUTPUT : "My name Marry. Am I human? true"
```

> > Example 2[inheritance]

```js
function fruits() {
  // kisi v function ke ander "this" means "window object"
  // console.log(this) // OUTPUT: Window
  this.name = "franco"; // window
}
fruits.prototype.getTaste = function () {
  return "sweet";
};

function fun() {
  fruits.call(this);
}

fun.prototype = Object.create(fruits.prototype);
const app = new fun();
console.log(app.name); //franco
console.log(app.getTaste()); // sweet
```

> > Classical inheritance with **Object.create()**

Below is an example of **how to use Object.create() to achieve classical inheritance.** This is for a single inheritance, which is all that JavaScript supports.

```js
// Shape - superclass: Constructor
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor. To access properties of Shape constructor
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);

//If you don't set Rectangle.prototype.constructor to Rectangle,
//it will take the prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).

Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

> > create an object with null as prototype

```js
var o;

o = Object.create(null); // {}
// is equivalent to:
o = Object.create(Object.prototype);
```

> > Using propertiesObject argument with Object.create()

```js
// Example where we create an object with a couple of
// sample properties. (Note that the second parameter
// maps keys to *property descriptors*.)
o = Object.create(Object.prototype, {
  // foo is a regular 'value property'
  foo: {
    writable: true,
    configurable: true,
    value: "hello",
  },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get: function () {
      return 10;
    },
    set: function (value) {
      console.log("Setting `o.bar` to", value);
    },
    /* with ES2015 Accessors our code can look like this
    get() { return 10; },
    set(value) {
      console.log('Setting `o.bar` to', value);
    } */
  },
});

console.log(o); // {} // bcoz by default enumerable for both properties is by default false

Object.defineProperty(o, "foo", {
  enumerable: true,
});

console.log(o); // { foo: 'hello' }

console.log(o.bar); // 10

o.bar = 20; // Setting `o.bar` to 20
```

```js
function Constructor() {}
o = new Constructor();
// is equivalent to:
o = Object.create(Constructor.prototype);
// Of course, if there is actual initialization code
// in the Constructor function,
// the Object.create() cannot reflect it
```

```js
// Create a new object whose prototype is a new, empty
// object and add a single property 'p', with value 42.
o = Object.create({}, { p: { value: 42 } });

// by default properties ARE NOT writable,
// enumerable or configurable:
o.p = 24;
console.log(o.p); // 42  (configurable is false)
console.log(o); // {}    (enumerable is false)

o.q = 12;
for (var prop in o) {
  console.log(prop); // q
}

delete o.p; // false
console.log(o.p); // 42
```

> > to specify an ES3 property

```js
o1 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  }
);
/* is not equivalent to:
This will create an object with prototype : {p: 42 }
o1 = Object.create({p: 42}) */
```

```js
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```
