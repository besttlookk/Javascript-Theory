# JS Object

- JavaScript is an object-based language. Everything is an object in JavaScript.
- In JavaScript, objects are king.
- JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.
- In JavaScript, almost "everything" is an object.

  - Booleans can be objects (if defined with the new keyword)
  - Numbers can be objects (if defined with the new keyword)
  - Strings can be objects (if defined with the new keyword)
  - Dates are always objects
  - Maths are always objects
  - Regular expressions are always objects
  - Arrays are always objects
  - Functions are always objects
  - Objects are always objects

- All JavaScript values, except primitives, are objects.

## Creating a JavaScript Object:

- There are 3 ways to create new objects:
  1. Using an object literal.
  2. By creating instance of Object directly (using new keyword)
  3. By using an object constructor (using new keyword)

### 1. JavaScript Object by object literal

```
    syntax :
      object={property1:value1,property2:value2.....propertyN:valueN}
```

### 2. By creating instance of Object

- The following example create a new JavaScript object using new Object(), and then adds 4 properties:

```
    const person = new Object();
    person.firstName = "John";
    person.lastName = "Doe";
    person.age = 50;
    person.eyeColor = "blue";
```

### 3. By using an Object constructor

- Here, you need to create function with arguments.
- Each argument value can be assigned in the current object by using "this" keyword.
- The this keyword refers to the current object.
- It returns the modified target object.

```
  function emp(id,name,salary){
      this.id=id;
      this.name=name;
      this.salary=salary;
  }
  e=new emp(103,"Vimal Jaiswal",30000);

console.log(e.id,e.name,e.salary)
```

## JavaScript Object Methods

| S.No | Methods                            | Description                                                                                                 |
| ---- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1    | Object.assign()                    | This method is used to copy enumerable and own properties from a source object to a target object           |
| 2    | Object.create()                    | This method is used to create a new object with the specified prototype object and properties.              |
| 3    | Object.defineProperty()            | This method is used to describe some behavioral attributes of the property.                                 |
| 4    | Object.defineProperties()          | This method is used to create or configure multiple object properties.                                      |
| 5    | Object.entries()                   | This method returns an array with arrays of the key, value pairs.                                           |
| 6    | Object.freeze()                    | This method prevents existing properties from being removed.                                                |
| 7    | Object.getOwnPropertyDescriptor()  | This method returns a property descriptor for the specified property of the specified object.               |
| 8    | Object.getOwnPropertyDescriptors() | This method returns all own property descriptors of a given object.                                         |
| 9    | Object.getOwnPropertyNames()       | This method returns an array of all properties (enumerable or not) found.                                   |
| 10   | Object.getOwnPropertySymbols()     | This method returns an array of all own symbol key properties.                                              |
| 11   | Object.getPrototypeOf()            | This method returns the prototype of the specified object.                                                  |
| 12   | Object.is()                        | This method determines whether two values are the same value.                                               |
| 13   | Object.isExtensible()              | This method determines if an object is extensible                                                           |
| 14   | Object.isFrozen()                  | This method determines if an object was frozen.                                                             |
| 15   | Object.isSealed()                  | This method determines if an object is sealed.                                                              |
| 16   | Object.keys()                      | This method returns an array of a given object's own property names.                                        |
| 17   | Object.preventExtensions()         | This method is used to prevent any extensions of an object.                                                 |
| 18   | Object.seal()                      | This method prevents new properties from being added and marks all existing properties as non-configurable. |
| 19   | Object.setPrototypeOf()            | This method sets the prototype of a specified object to another object.                                     |
| 20   | Object.values()                    | This method returns an array of values.                                                                     |

---

## Object.assign()

- The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
- Objects are assigned and copied by reference.
- It will return the target object.

#### **SYNTAX**

```
 Object.assign(target, ...sources)
```

#### **PARAMETERS**

- **target**:
  - The target object - what to apply the sources’ properties to, which is returned after it is modified.
- **sources**:

  - The source object(s). - objects containing the properties you want to apply.

- Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.

#### **EXAMPLES**

```
Cloning an object

const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

```
const object1 = {
 a: 1,
 b: 2,
 c: 3
 };
 const object2 = Object.assign({c: 4, d: 5}, object1);
 console.log(object2) // { c: 3, d: 5, a: 1, b: 2 }
const object3= {
 g: 1,
 h: 2,
 i: 3
 };

const object4 = Object.assign({g: 34, h: 25}, object3);

console.log(object4) // { g: 1, h: 2, i: 3 }
```

- This method can be used if we want to make new object based on existing object

```
Warning for Deep Clone
For deep cloning, we need to use alternatives, because Object.assign() copies property values.

If the source value is a reference to an object, it only copies the reference value.

function test() {
  'use strict';

  let obj1 = { a: 0 , b: { c: 0}};
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
  console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
  console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}

  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
  console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}

  // Deep Clone
  obj1 = { a: 0 , b: { c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
}

test();
```

```
Merging objects

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
```

```
Merging objects with same properties

const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

The properties are overwritten by other objects that have the same properties later in the parameters order.
```

```
Properties on the prototype chain and non-enumerable properties cannot be copied
const obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
  bar: {
    value: 2  // bar is a non-enumerable property.
  },
  baz: {
    value: 3,
    enumerable: true  // baz is an own enumerable property.
  }
});

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

```
Primitives will be wrapped to objects
const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = Symbol('foo');

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
Copy to Clipboard

```

---

## Object.create()

- The Object.create() method is used to create a new object with the specified prototype object and properties.
- We can create an object without a prototype by Object.creates (null).
- The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
- Returns a new object with the specified prototype object and properties.

#### **SYNTAX**

```
Object.create(prototype[, propertiesObject])
----OR----
Object.create(proto)
Object.create(proto, propertiesObject)
```

#### **PARAMETER**

- **prototype/proto:**
  - It is the prototype object from which a new object has to be created.
- **propertiesObject**:
  - It is an optional parameter. It specifies the enumerable properties to be added to the newly created object.
    ` Exceptions
  - The proto parameter has to be either
    - null or
    - an Object excluding primitive wrapper objects.
  - If proto is neither of these a TypeError is thrown.

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

---

## Object.defineProperty()

- The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
- Returns the object that was passed to the function.

#### **SYNTAX**

```
Object.defineProperty(obj, prop, descriptor)
```

#### **PARAMETERS**

- _obj_

  - The object on which to define the property.

- **prop**

  - The name or Symbol of the property to be defined or modified.

- **descriptor**
  - The descriptor for the property being defined or modified.

---

## Object.defineProperties()

- The Object.defineProperties() method defines new or modifies existing properties directly on an object, and returning the object

#### **SYNTAX**

```
Object.defineProperties(obj, props)
```

#### **PARAMETERS**

- _obj_

  - The object on which to define or modify properties.

- **props**
  - An object whose keys represent the names of properties to be defined or modified and whose values are objects describing those properties.
  - Each value in props must be either a data descriptor or an accessor descriptor; it cannot be both (see Object.defineProperty() for more details).

Data descriptors and accessor descriptors may optionally contain the following keys:

configurable
true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. Defaults to false.

enumerable
true if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to false.

A data descriptor also has the following optional keys:

value
The value associated with the property. Can be any valid JavaScript value (number, object, function, etc). Defaults to undefined.

writable
true if and only if the value associated with the property may be changed with an assignment operator. Defaults to false.

An accessor descriptor also has the following optional keys:

get
A function which serves as a getter for the property, or undefined if there is no getter. The function's return value will be used as the value of the property. Defaults to undefined.

set
A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as its only argument the new value being assigned to the property. Defaults to undefined.

If a descriptor has neither of value, writable, get and set keys, it is treated as a data descriptor. If a descriptor has both value or writable and get or set keys, an exception is thrown.
Example:
const obj = {};  
Object.defineProperties(obj, {  
 property1: {  
 value: 142 //literally you have to type "value"
},  
 property2: {  
 value: 22

}  
});  
console.log(obj) // {}
console.log(obj.property1,obj.property2); //142, 22
\*/

/\*
----------------------------- 4. Object.defineProperty ----------------------------
The Object.defineProperty() method defines a new property directly on an object and returns the object.
To change the flags, we can use Object.defineProperty.
We cannot change it back, because define property doesn?t work on non-configurable properties.

Syntax:
Object.defineProperty(obj, prop, descriptor)

Example:
const object1 = {};  
 Object.defineProperty(object1, 'property1', {  
 value: 40,  
 });  
 console.log(object1.property1); // 40
\*/

/\*
------------------------------------5. Object.entries() -------------------------
JavaScript Object.entries() method is used to return an array of a given object's own enumerable property [key, value] pairs.
The ordering of the properties is the same as that given by looping over the property values of the object manually.

Syntax:
Object.entries(obj)

Example:
const obj = { name: "user1", age: "28", address: "address1"};

    console.log(Object.entries(obj)[0]);  //  [ 'name', 'user1' ]
    console.log(Object.entries(obj)[1]);  //  [ 'age', '28' ]

\*/

/\*
------------------------Object.keys / Object.values ---------------------------------

const obj = { name: "user1", age: "28", address: "address1"};

    console.log(Object.keys(obj));  //  [ 'name', 'age', 'address' ]
    console.log(Object.values(obj));  // [ 'user1', '28', 'address1' ]

\*/

/\*
---------------------- Object.freeze()--------------------------
The Object.freeze() method freezes an object that prevents new properties from being added to it.
This method prevents the modification of existing property, attributes, and values.
This method returns the object that was passed to the function.

Syntax:
Object.freeze(obj)

Example:
const obj = { name: "user1", age: "28", address: "address1"};

console.log(Object.freeze(obj)); // { name: 'user1', age: '28', address: 'address1' }
obj.name = "newName"
console.log(obj) // { name: 'user1', age: '28', address: 'address1' }

\*/

/\*
-----------------------------Object.seal()/ Object.isSealed() / Object.isFreeze()------------------------------------
The Object.seal() method of JavaScript seals an object which prevents new properties from being added to it and marks all existing properties as non-configurable.
The object to be sealed is passed as an argument, and the method returns the object which has been sealed.

Syntax:
Object.seal(obj)

FREEZE vs SEAL
Object.seal() allows changes to the existing properties of an object whereas Object.freeze() does not allow so.
Object.freeze() makes an object immune to everything even little changes cannot be made.
Object.seal() prevents from deletion of existing properties but cannot prevent them from external changes.

Example:
const object1 = {  
 property1: 42  
};  
Object.seal(object1);  
object1.property1 = 45;  
console.log(object1.property1); // 45 // can change seal properties

delete object1.property1; // cannot delete when sealed  
console.log(object1.property1);

const object2 = {  
 property2: 90
};  
Object.freeze(object2)
object2.property2 =67;  
console.log(object2.property2); // can not change once when freezed // 90
delete object2.property2
console.log(object2.property2); // 90 // // cannot delete when freezed

console.log(Object.isFrozen(object1)) // false
console.log(Object.isFrozen(object2)) // true

console.log(Object.isSealed(object1)) // true
console.log(Object.isSealed(object2)) // false

\*/

/\*
------------------------Object.getOwnPropertyName()--------------------------
The Object.getOwnPropertyNames() method returns an array of all properties (except those non-enumerable properties which use symbol) found directly upon a given object.
This method returns an array of string that correspond to the properties found directly upon the object.

Syntax:
Object.getOwnPropertyNames(obj)

Example:
function Pasta(grain, size, shape) {  
 this.grain = grain;  
 this.size = size;  
 this.shape = shape;  
}  
var spaghetti = new Pasta("wheat", 2, "circle");  
var names = Object.getOwnPropertyNames(spaghetti);
console.log(names) // [ 'grain', 'size', 'shape' ]
\*/

/\*
------------------------Object.getPrototypeOf()-----------------------------------
The Object.getPrototypeOf() method of JavaScript returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.
This method returns the prototype of the given object. If there are no inherited properties, this method will return null.

Syntax:
Object.getPrototypeOf(obj)

example:
let animal = {  
 eats: true  
};  
// create a new object with animal as a prototype  
let rabbit = Object.create(animal);  
console.log(Object.getPrototypeOf(rabbit)); // { eats: true }

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}  
console.log(Object.getPrototypeOf(rabbit)); // {}
\*/

/\*
---------------Object.is()-----------------------
The Object.is() method of JavaScript is used to determine whether two values are the same value.
There is a special built-in method that compares values.
This method returns a Boolean indicating whether or not the two arguments are the same value.

Syntax:
Object.is(value1, value2);

\*/

/\*
--------------------------Object.preventExtensions / Object.isExtensible() ---------------------
The Object.preventExtensions() only prevents the addition of new properties from ever being added to an object (i.e., prevents future extensions to the object).
This change is a permanent that means once an object has been made non-extensible, it cannot make extensible again.

const obj = {
num1: 10
};

const obj2 ={
sum1: 50
}
Object.preventExtensions(obj);  
obj.num2 = 3;
console.log(obj) // { num1: 10 }
obj.num1 = 20
console.log(obj) // { num1: 20 } //can change value

console.log( obj.hasOwnProperty("num1") ); // true
console.log( obj.hasOwnProperty("num2") ); // false

console.log(Object.isExtensible(obj)) // false...bcoz its locked
console.log(Object.isExtensible(obj2)) // true

\*/

//-------------------------------------------

// using JSON.stringify()

// let myString = JSON.stringify(person);
// console.log(myString); // JSON format

// but this will not stringigy function. so we first convert the function() into string

// person.fun =person.fun.toString();
// let myString = JSON.stringify(person);
// console.log(myString); // JSON format

//---------------------------------------

// let person = {
// name: "Rahul",
// age: 30,
// city: "Hajipur",
// get lang() {
// return this.language;
// }
// };
// console.log(person);
// console.log(person.lang);

//-------------- CONTRUCTOR ------------------------

// function Detail(fname,lname,age,sex) {
// this.fname = fname;
// this.lname = lname;
// this.age = age;
// this.sex = sex

// }
// // can make as many object through construtor
// let detail1 = new Detail("Prabhash","Ranjan",30,"Male");
// let detail2 = new Detail("Raushan","Jaiswal",29,"Male");

// Detail.natinality = nation;

// -------- PROTOTYPE-------
// Detail.prototype.nationality = "English";// adding into prototype
// detail1.nationality = "Indian";
// console.log(detail1);

// --------INHERITE----------

//suppose we need to create new constrctor but some inputs are taken from already created constructor
// function Employe(fname,lname,age,sex,experience) {
// Detail.call(this,fname,lname,age,sex);
// this.experience = experience;
// }
// let emp1 = new Employe("Rishi","Verma","30","male","2 years");
// console.log(emp1);

// const proto = {
// slogan = function() {
// return "This company is the best";
// },
// changeName : function(newName) {
// // this.name = newName;
// }

// }

// let harry = Object.create(proto);
// harry.name = "Harry";
// harry.role = " Programmer";
// harry.changeName("Harry2")
// console.log(harry)

// -------------------CONSTRUCTOR FUNCTION------------

// function Person(firstName,lastName,dob) {
// this.firstName = firstName;
// this.lastName = lastName;
// this.dob = dob ;
// this.getBirthYear = function() {
// return this.dob.getFullYear();
// }
// this.getFullName = function() {
// return `${this.firstName} ${this.lastName}`;
// }
// }

// // Instantiate object

// const person1 = new Person('Prabhash','Ranjan',4-3-1980);
// const person2 = new Person('Raushan','Jaiswal',3-6-1970);

// console.log(person1);
// console.log(person2);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

//----------important note--------------

// but this is not the best way to do it bcoz when we print any new object it aslo print the function which we mind need while making new object . so we will use "prototype". by this we can attact the methods and properties inside prorototype

// function Person(firstName, lastName, dob) {
// this.firstName = firstName;
// this.lastName = lastName;
// this.dob = dob;
// }

// Person.prototype.getBirthYear = function () {
// return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function () {
// return `${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('Prabhash', 'Ranjan', 4 - 3 - 1980);
// const person2 = new Person('Raushan', 'Jaiswal', 3 - 6 - 1970);

// console.log(person1);
// console.log(person2);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// --------------------class----------------
class Person {
constructor(firstName, lastName, dob) {
this.firstName = firstName;
this.lastName = lastName;
this.dob = dob;
}
getBirthYear() {
return this.dob.getFullYear();
}
getFullName() {
return `${this.firstName} ${this.lastName}`;
}
}

// ----Instantiate object

const person1 = new Person("Prabhash", "Ranjan", 4 - 3 - 1980);
const person2 = new Person("Raushan", "Jaiswal", 3 - 6 - 1970);

console.log(person1);
console.log(person2);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

/\*
// ==Do Not Declare Strings, Numbers, and Booleans as Objects!===

When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

    x = new String();        // Declares x as a String object
    y = new Number();        // Declares y as a Number object
    z = new Boolean();       // Declares z as a Boolean object

Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.
\*/
