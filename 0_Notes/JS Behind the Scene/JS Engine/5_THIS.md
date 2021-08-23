# this

- JavaScript has the **_this_** keyword that behaves differently from other programming languages, which may confuse you at first.
- In JavaScript, you can use the **_this_** keyword in the **global and function contexts.**
- Moreover, the behavior of the **_this_** keyword changes between **strict and non-strict mode**.

## What is the **_this_** keyword

`The "this" references the "object" of which the function is a property. In other words, the this references the object that is currently calling the function.`

### Global context

- Back in Execution Context, we talked about how the JavaScript engine creates the global execution context and initializes **_this_** to the global window object.
- In the **global context,** the **_this_** references the global object, which is the **_window object on the web browser or global object on Node.js._**

```js
this; // Window {...}
window; // Window {...}
this === window; // true

// In non-strict mode this inside function points to window object
function a() {
  console.log(this);
}

a();

// Window {...}
```

- In the example above, it is easy to understand that this is equal to the window object, but what about inside of function a? Well, what object is function a apart of? In the dev tools, if you expand the window object and scroll down the list, you will see a() is a method on the window object. By calling a(), you are essentially saying window.a() to the console.

- If you **assign a property** to this object in the global context, JavaScript will add the property to the global object as shown in the following example:

```js
this.color = "Red";
console.log(window.color); // 'Red'
```

### Function context

- In JavaScript, you can **invoke a function** in the following ways:
  1. **Function** invocation
  2. **Method** invocation
  3. **Constructor** invocation
  4. **Indirect** invocation

`Each function invocation defines its own context, therefore, the this behaves differently than you may expect.`

> > **1) Simple function invocation**

- In the **non-strict mode**, the _this_ references the global object when the function is called as follows:

```js
function show() {
  console.log(this === window); // true
}

show();
```

- Calling the show() function is the same as:

```js
window.show();
```

- In the **strict mode**, JavaScript sets the **_this_** to **undefined.** Consider the following example:

```js
"use strict";

function show() {
  console.log(this === undefined); // true
}

show();
```

`If you want to apply the strict mode to a specific function only, you place it at the top of the function body.`

`Note that the strict mode has been available since ECMAScript 5.1. The strict mode applies to both function and inner functions within the function.`

```js
function show() {
  "use strict";
  console.log(this === undefined); // true

  function display() {
    console.log(this === undefined); // true
  }
  display();
}

show();
```

> > **2) Method invocation**

- When you call a method of an object, JavaScript sets this to the object that owns the method.

```js
let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

console.log(car.getBrand()); // Honda
```

- Since a method is a property of an object which is a value, you can store it in a variable.

```js
let brand = car.getBrand;
```

- And then call the method via the variable

```js
console.log(brand()); // undefined
```

- You get undefined instead of "Honda" because when you call a method without specifying its object, JavaScript sets this to the global object in non-strict mode and undefined in the strict mode.

- **_this_** refers to whatever is on the **left of the . (dot)** when calling a method.

- To fix this issue, you use the **bind() method** of the **Function.prototype object**. The bind() method creates a new function whose the this keyword is set to a specified value.

```js
let brand = car.getBrand.bind(car);
console.log(brand()); // Honda
```

- In this example, the bind() method sets the this to the bike object, therefore, you see the value of the brand property of the bike object on the console.

```js
let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

let bike = {
  brand: "Harley Davidson",
};

let brand = car.getBrand.bind(bike);
console.log(brand()); // Harley Davidson
```

- Still confused? Try this:

```js
function whichName() {
  console.log(this.name);
}

var name = "window";

const obj1 = {
  name: "Obj 1",
  whichName,
};
const obj2 = {
  name: "Obj 2",
  whichName,
};

whichName(); // window
obj1.whichName(); // Obj 1
obj2.whichName(); // Obj 2
```

- Another way to look at **_this_** is to check **which object called it.**

```js
const a = function() {
  console.log("a", this);
  const b = function() {
    console.log("b", this);
    const c = {
      hi: function() {
        console.log("c", this);
      }
    };
    c.hi(); // new obj c called function
  };
  b(); // ran by a window.a(b())
};
a(); // called by window

OUTPUT :
 a Window {…}
 b Window {…}
 c {hi: ƒ}
```

> > **3) Constructor invocation**

- When you use the **_new keyword_** to create an instance of a function object, you use the function as a constructor.

```js
function Car(brand) {
  this.brand = brand;
}

Car.prototype.getBrand = function () {
  return this.brand;
};

var car = new Car("Honda");
console.log(car.getBrand()); // Honda
```

- JavaScript creates a new object and sets this to the newly created object. This pattern works great with only one potential problem.
- Now, you can invoke the Car() as a function or as a constructor. If you omit the new keyword as follows:

```js
var bmw = Car("BMW");
console.log(bmw.brand);
// => TypeError: Cannot read property 'brand' of undefined
```

- **To make sure that the Car() function is always invoked using constructor invocation**, you add a check at the beginning of the Car() function as follows:

```js
function Car(brand) {
  if (!(this instanceof Car)) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}
```

- Since the _this_ value in the Car() sets to the global object, the bmw.brand returns undefined.
- To make sure that the Car() function is always invoked using constructor invocation, you add a check at the beginning of the Car() function as follows:

```js
function Car(brand) {
  if (!(this instanceof Car)) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}
```

- ES6 introduced a meta-property named **_new.target_** that allows you to detect whether a function is invoked as a **simple invocation or as a constructor.**

```js
function Car(brand) {
  if (!new.target) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}
```

> > **4) Indirect Invocation**

- In JavaScript, **functions are first-class citizens**. In other words, functions are objects, which are instances of the Function type.
- The Function type has two methods: call() and apply() . These methods allow you to set the this value when calling a function. For example:

```js
function getBrand(prefix) {
  console.log(prefix + this.brand);
}

let honda = {
  brand: "Honda",
};
let audi = {
  brand: "Audi",
};

getBrand.call(honda, "It's a "); // It's a Honda
getBrand.call(audi, "It's an "); // It's an Audi
```

- In this example, we called the getBrand() function indirectly using the call() method of the getBrand function. We passed honda and audi object as the first argument of the call() method, therefore, we got the corresponding brand in each call.

## Arrow functions

- ES6 introduced a new concept named arrow function. In arrow functions, JavaScript sets the this lexically.
- It means the **arrow function does not create its own execution context**, but inherits the _this_ from the outer function where the arrow function is defined. See the following example:

```js
let getThis = () => this;
console.log(getThis() === window); // true
```

- Since an arrow function does not create its own execution context, defining a method using an arrow function will cause an issue. For example:

```js
function Car() {
  this.speed = 120;
}

Car.prototype.getSpeed = () => {
  return this.speed;
};

var car = new Car();
car.getSpeed(); // TypeError
```

- *Inside the getSpeed() method, the this value reference the global objec*t, not the Car object. Therefore the car.getSpeed() invocation causes an error because the global object does not have the speed property.

---

## Here is **_this_** 4 ways:

- **new keyword binding** - the **new** keyword changes the meaning of this to be the object that is being created.
- **implicit binding** - **_"this"_** refers to the object that is calling it. It is implied, without doing anything its just how the language works.
- **explicit binding** - using the **"bind"** keyword to change the meaning of "this".
- **arrow functions as methods** - **_"this"_** is **lexically** scoped, refers to it's current surroundings and no further. However, if **"this"** is inside of a method's function, it falls out of scope and belongs to the window object. To correct this, you can use a higher order function to return an arrow function that calls "this".

> > **"new" binding**

```

function Person(name, age) {
this.name = name;
this.age = age;
console.log(this);
}

const person1 = new Person("person1", 55);
// this = Person { name: 'person1', age: 55 }

```

> > **implicit binding**

```

//implicit binding
const person = {
name: "person",
age: 20,
hi() {
console.log("hi " + this);
}
};

person.hi();
// this = person { name: 'person', age: 20, hi(){...} }

```

> > **explicit binding**

```

let name = "Brittney";

const person3 = {
name: "person3",
age: 50,
hi: function() {
console.log("hi " + this.name);
}.bind(window)
};

person3.hi();
// hi Brittney
// this = window {...}

```

> > **arrow functions inside objects**

```

const person4 = {
name: "person4",
age: 40,
hi: function() {
var inner = () => {
console.log(this);
};
return inner();
}
};

person4.hi();
// this = person4 { name: 'person4', age: 40, hi() {...} }
// if either function is changed around, it doesn't work

```

## More on **_this_**

- It is a special variable that is created for every execution context(every function).

- **'This' is not static**. It depends on how the function is called, and its value is only assigned when the function is "actually called";

- **Different ways a function can be called:**

  1. **as a method**(function attach to the object) :
     when we call this method inside the "method". it will simply point to the object in which the method is called

  2. **Simple function call**: undefined(in strict mode) or Window object

  3. **Arrow function**: this of surrounding function(lexical this). arrow function does not get its own this keywoard.

  4. **Event Listener** :\<DOM element that the handler is attached to>

  5. **new/ call / apply/ bind**

`NOTE: 'this' will never points to the function itselt(in which it is used) and also not its variable envioroment`

---

## Lexical vs Dynamic Scope

- A big gotcha for a lot of people working with **_this_** is when a function is ran inside of another function. It gets a little confusing, but we can remember **who called the function.**

```

const obj = {
name: "Billy",
sing() {
console.log("a", this);
var anotherFunc = function() {
console.log("b", this);
};
anotherFunc();
}
};
obj.sing();

// a {name: "Billy", sing: ƒ}
// b Window {…}

```

- In the example above, the **obj called sing()** and then anotherFunc() was called within the sing() function.
- In JavaScript, that function defaults to the Window object. It happens because **everything in JavaScript is lexically scoped** except for the **this** keyword.
- It doesn't matter where it is written, it matters how it is called.
- Changing anotherFunc() instead to an arrow function will fix this problem, as seen below.
- **Arrow functions do not bind or set their own context for this**.
- If this is used in an arrow function, it is taken from the outside.
- Arrow functions **also have no arguments created** as functions do.

```

const obj = {
name: "Billy",
sing() {
console.log("a", this);
var anotherFunc = () => {
console.log("b", this);
};
anotherFunc();
}
};
obj.sing();

// a {name: "Billy", sing: ƒ}
// b {name: "Billy", sing: ƒ}

```

> > **last example to really solidify our knowledge of this.**

```

var b = {
name: "jay",
say() {
console.log(this);
}
};

var c = {
name: "jay",
say() {
return function() {
console.log(this);
};
}
};

var d = {
name: "jay",
say() {
return () => console.log(this);
}
};

b.say(); // b {name: 'jay', say()...}

c.say(); // function() {console.log(this)}

c.say()(); // Window {...}
// c.say() gets the function and the Window runs it

d.say(); // () => console.log(this)
// returned the arrow function

d.say()(); // d {name: 'jay', say()...}
// arrow function does not rebind this and inherits this from parent

```

- After everything is said and done, using **this** can still be a bit confusing. If you aren't sure what it's referencing, just console.log(this) and see where it's pointing.

`Nifty Snippet: Context and Scope can sometimes be confusing terms in JavaScript. Context refers to the value of the this keyword. Scope refers to the current context and visibility of variables.`
