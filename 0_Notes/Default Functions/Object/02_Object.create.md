# Object.create()

- The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

#### **SYNTAX**

```
Object.create(proto)
Object.create(proto, propertiesObject)
```

- **propertiesObject (Optional)**
  - If specified and not undefined, an object whose enumerable own properties (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names.
  - These properties correspond to the second argument of Object.defineProperties().
- The proto parameter has to be either
  - null or
  - an Object excluding **primitive wrapper objects.**
- If proto is neither of these a \*\*\_The proto parameter has to be either

null or
an Object excluding primitive wrapper objects.
If proto is neither of these a TypeError is thrown.\*\* is thrown.

#### **EXAMPLES**

```
const people = {
 printIntroduction: function ()
 {
 console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
 }
 };
 const me = Object.create(people);
 me.name = "Marry"; // "name" is a property set on "me", but not on "person"
 me.isHuman = true; // inherited properties can be overwritten
 me.printIntroduction(); // OUTPUT : "My name Marry. Am I human? true"
```

```
Example 2[inheritance]
function fruits() {
 // kisi v function ke ander "this" means "window object"
// console.log(this) // OUTPUT: Window
this.name = 'franco'; // window
}

function fun() {
 fruits.call(this)
 }

fun.prototype = Object.create(fruits.prototype);
 const app = new fun();
 console.log(app.name); //franco
```

```
Classical inheritance with Object.create()
Below is an example of how to use Object.create() to achieve classical inheritance. This is for a single inheritance, which is all that JavaScript supports.

// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);

//If you don't set Rectangle.prototype.constructor to Rectangle,
//it will take the prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

```
Using propertiesObject argument with Object.create()
var o;

// create an object with null as prototype
o = Object.create(null);

o = {};
// is equivalent to:
o = Object.create(Object.prototype);

// Example where we create an object with a couple of
// sample properties. (Note that the second parameter
// maps keys to *property descriptors*.)
o = Object.create(Object.prototype, {
  // foo is a regular 'value property'
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get: function() { return 10; },
    set: function(value) {
      console.log('Setting `o.bar` to', value);
    }
/* with ES2015 Accessors our code can look like this
    get() { return 10; },
    set(value) {
      console.log('Setting `o.bar` to', value);
    } */
  }
});

function Constructor() {}
o = new Constructor();
// is equivalent to:
o = Object.create(Constructor.prototype);
// Of course, if there is actual initialization code
// in the Constructor function,
// the Object.create() cannot reflect it

// Create a new object whose prototype is a new, empty
// object and add a single property 'p', with value 42.
o = Object.create({}, { p: { value: 42 } });

// by default properties ARE NOT writable,
// enumerable or configurable:
o.p = 24;
o.p;
// 42

o.q = 12;
for (var prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// to specify an ES3 property
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
/* is not equivalent to:
This will create an object with prototype : {p: 42 }
o2 = Object.create({p: 42}) */
```

```
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

```

#### **EXAMPLES**

```
const people = {
 printIntroduction: function ()
 {
 console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
 }
 };
 const me = Object.create(people);
 me.name = "Marry"; // "name" is a property set on "me", but not on "person"
 me.isHuman = true; // inherited properties can be overwritten
 me.printIntroduction(); // OUTPUT : "My name Marry. Am I human? true"
```

```
Example 2[inheritance]
function fruits() {
 // kisi v function ke ander "this" means "window object"
// console.log(this) // OUTPUT: Window
this.name = 'franco'; // window
}

function fun() {
 fruits.call(this)
 }

fun.prototype = Object.create(fruits.prototype);
 const app = new fun();
 console.log(app.name); //franco
```

```
Classical inheritance with Object.create()
Below is an example of how to use Object.create() to achieve classical inheritance. This is for a single inheritance, which is all that JavaScript supports.

// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);

//If you don't set Rectangle.prototype.constructor to Rectangle,
//it will take the prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

```
Using propertiesObject argument with Object.create()
var o;

// create an object with null as prototype
o = Object.create(null);

o = {};
// is equivalent to:
o = Object.create(Object.prototype);

// Example where we create an object with a couple of
// sample properties. (Note that the second parameter
// maps keys to *property descriptors*.)
o = Object.create(Object.prototype, {
  // foo is a regular 'value property'
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get: function() { return 10; },
    set: function(value) {
      console.log('Setting `o.bar` to', value);
    }
/* with ES2015 Accessors our code can look like this
    get() { return 10; },
    set(value) {
      console.log('Setting `o.bar` to', value);
    } */
  }
});

function Constructor() {}
o = new Constructor();
// is equivalent to:
o = Object.create(Constructor.prototype);
// Of course, if there is actual initialization code
// in the Constructor function,
// the Object.create() cannot reflect it

// Create a new object whose prototype is a new, empty
// object and add a single property 'p', with value 42.
o = Object.create({}, { p: { value: 42 } });

// by default properties ARE NOT writable,
// enumerable or configurable:
o.p = 24;
o.p;
// 42

o.q = 12;
for (var prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// to specify an ES3 property
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
/* is not equivalent to:
This will create an object with prototype : {p: 42 }
o2 = Object.create({p: 42}) */
```

```
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

```
