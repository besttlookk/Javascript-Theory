# Left-hand-side expressions : new operator

- The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

#### **SYNTAX**

```js
new constructor[([arguments])]

constructor
A class or function that specifies the type of the object instance.

arguments
A list of values that the constructor will be called with.
```

- The new keyword does the following things:
  1. Creates a blank, plain JavaScript object.
  2. Adds a property to the new object (**proto**) that links to the constructor function's prototype object.
  3. Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
  4. Returns this if the function doesn't return an object.

```
AFTER STEP 2
Note: Properties/objects added to the construction function prototype are therefore accessible to all instances created from the constructor function (using new).
```

- Creating a user-defined object requires two steps:
  1. Define the object type by writing a function that specifies its name and properties. For example, a constructor function to create an object Foomight look like this:
  2. Create an instance of the object with new

```js
function Foo(bar1, bar2) {
  this.bar1 = bar1;
  this.bar2 = bar2;
}

var myFoo = new Foo("Bar 1", 2021);
```

- You can add a shared property to a previously defined object type by using the Function.prototype property. This defines a property that is shared by all objects created with that function, rather than by just one instance of the object type.

```js
function Car() {}
car1 = new Car();
car2 = new Car();

console.log(car1.color); // undefined

Car.prototype.color = "original color";
console.log(car1.color); // 'original color'

car1.color = "black";
console.log(car1.color); // 'black'

console.log(Object.getPrototypeOf(car1).color); // 'original color'
console.log(Object.getPrototypeOf(car2).color); // 'original color'
console.log(car1.color); // 'black'
console.log(car2.color); // 'original color'
```
