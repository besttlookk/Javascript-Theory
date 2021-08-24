# Inheritance in JavaScript

- How to create "child" object classes (constructors) that inherit features from their "parent" classes?
- WHAT IF we want to create a different constructor which want to inherit some properties from other constructor(like Car constrctor inheriets Vehicle Constructor )
  Inhertance between class:
  1. Using Constructor function
  2. Using ES5 classes
  3. Object.create

## Inheritance using Constructor function

```js
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
```

```js
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}
```

- **call()**

  - This function basically allows you to call a function defined somewhere else, but in the current context.
  - The first parameter specifies the value of this that you want to use when running the function,
  - and the other parameters are those that should be passed to the function when it is invoked.
  - We want the Magazine() constructor to take the same parameters as the Book() constructor it is inheriting from, so we specify them all as parameters in the call() invocation.

- The last line inside the constructor defines the new "month" property that magazines are going to have, which generic books don't have.
- As a note, we could have done this:

```js
function Magazine(title, author, year, month) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.month = month;
}
```

- But this is just redefining the properties anew, not inheriting them from Book(), so it defeats the point of what we are trying to do. It also takes more lines of code.

## Inheriting from a constructor with no parameters

- Note that if the constructor you are inheriting from doesn't take its property values from parameters, you don't need to specify them as additional arguments in call().

```js
function Brick() {
  this.width = 10;
  this.height = 20;
}
```

- You could inherit the width and height properties by doing this

```jss
function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = "blue";
}
```

- Note that we've only specified this inside call() — no other parameters are required as we are not inheriting any properties from the parent that are set via parameters.

## Setting Magazine()'s prototype and constructor reference

```js
const mag1 = new Magazine("mag 1", "John Doe", "2013", "jan");
```

- All is good so far, **_but we have a problem._**
- We have defined a new constructor, and it has a prototype property, which b**y default just contains an object with a reference to the constructor function itself.**
- It does not contain the methods of the Book constructor's prototype property.

```js
console.log(mag1.__proto__); // Magazine {}
console.log(Magazine.prototype); // Magazine {}
console.log(Magazine.prototype.__proto__); // {}
console.log(mag1.getSummary()); // ERROR: mag1.getSummary is not a function
```

- also check the properties of both the constructor function

```js
console.log(Object.getOwnPropertyNames(Magazine.prototype));
// [ 'constructor' ]

console.log(Object.getOwnPropertyNames(Book.prototype));
// [ 'constructor', 'getSummary' ]
```

```js
console.log(Book.prototype.getSummary); // [λ]
console.log(Magazine.prototype.getSummary); // undefined
```

- **We need to get Magazine() to inherit the methods defined on Book()'s prototype.**
- So how do we do that?
- Here our friend **create()** comes to the rescue again
- In this case we are using it to create a new object and make it the value of Magazine.prototype.

```js
Magazine.prototype = Object.create(Book.prototype);
```

- The new object has Book.prototype as its prototype and will therefore inherit, if and when needed, all the methods available on Book.prototype.

```js
console.log(Magazine.prototype); // Book {} ​​​​​
console.log(Magazine.prototype.__proto__); // Book { getSummary: [λ] }
```

- We need to do one more thing before we move on.
- After adding the last line, **Magazine.prototype's constructor property** is now equal to **Book()**, because we just set Magazine.prototype to reference an object that inherits its properties from Book.prototype!

```js
console.log(Magazine.prototype.constructor); // [λ: Book]
```

- This can become a problem, so we need to set this right.

```js
Magazine.prototype.constructor = Magazine;
```

```js
console.log(Magazine.prototype); // Magazine { constructor: [λ: Magazine] }
console.log(Magazine.prototype.__proto__); // Book { getSummary: [λ] }
console.log(Magazine.prototype.constructor); //[λ: Magazine]
```

#### **OR**

```js
Object.defineProperty(Magazine.prototype, "constructor", {
  value: Magazine,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true,
});
```

```js
console.log(Magazine.prototype); // Magazine {}
console.log(Magazine.prototype.__proto__); // Book { getSummary: [λ] }
console.log(Magazine.prototype.constructor); //[λ: Magazine]
```

## Object member summary

- To summarize, you've got four types of property/method to worry about:

  1. Those defined inside a constructor function that are given to object instances.
     - These are fairly easy to spot — in your own custom code, they are the members defined inside a constructor using the this.x = x type lines; in built in browser code, they are the members only available to object instances (usually created by calling a constructor using the new keyword, e.g.

  ```js
  let myInstance = new myConstructor()).
  ```

  2. Those defined directly on the constructor themselves
     - that are available only on the constructor.
     - These are commonly only available on built-in browser objects, and are recognized by being chained directly onto a constructor, not an instance.

  ```js
  For example, Object.keys(). These are also known as static properties/methods.
  ```

  3. Those defined on a constructor's prototype, which are inherited by all instances and inheriting object classes.
     - These include any member defined on a Constructor's prototype property, e.g.

  ```
  myConstructor.prototype.x().
  ```

  4. Those available on an object instance,
     - which can either be an object created when a constructor is instantiated

#### **SUMMARY OF INHERITANCE USING CONSTRUCTOR**

1. Book.call()
2. Magzine.prototype = Object.create(Book.prototype)
3. Magzine.prototype.constructor = Magzine

---

## ECMAScript 2015 Classes

- ECMAScript 2015 introduces class syntax to JavaScript as a way to write reusable classes using easier, cleaner syntax, which is more similar to classes in C++ or Java.

```js
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}
```

- The class statement indicates that we are creating a new class. Inside this block, we define all the features of the class:
- The constructor() method defines the constructor function that represents our Person class.
- greeting() and farewell() are class methods. Any methods you want associated with the class are defined inside it, after the constructor.
- We can now instantiate object instances using the new operator, in just the same way as we did before:

```js
let han = new Person("Han", "Solo", 25, "male", ["Smuggling"]);
han.greeting();
// Hi! I'm Han

let leia = new Person("Leia", "Organa", 19, "female", ["Government"]);
leia.farewell();
// Leia has left the building. Bye for now
```

`Note: Under the hood, your classes are being converted into Prototypal Inheritance models — this is just syntactic sugar. But I'm sure you'll agree that it's easier to write.`

### Inheritance with class syntax

- Above we created a class to represent a person. They have a series of attributes that are common to all people; in this section we'll create our specialized Teacher class, making it inherit from Person using modern class syntax. This is called creating a subclass or subclassing.
- To create a subclass we use the extends keyword to tell JavaScript the class we want to base our class on,

```js
class Teacher extends Person {
  constructor(subject, grade) {
    this.subject = subject;
    this.grade = grade;
  }
}
```

- but there's a little catch.
- Unlike old-school constructor functions where the new operator does the initialization of this to a newly-allocated object, this isn't automatically initialized for a class defined by the extends keyword, i.e the sub-classes.
- Therefore running the above code will give an error:

```
Uncaught ReferenceError: Must call super constructor in derived class before
accessing 'this' or returning from derived constructor
```

- For sub-classes, the **_this_** initialization to a newly allocated object is always dependant on the parent class constructor, i.e the constructor function of the class from which you're extending.
- Here we are extending the Person class — the Teacher sub-class is an extension of the Person class. So for Teacher, the this initialization is done by the Person constructor.
- To call the parent constructor we have to use the super() operator, like so:

```js
class Teacher extends Person {
  constructor(subject, grade) {
    super(); // Now 'this' is initialized by calling the parent constructor.
    this.subject = subject;
    this.grade = grade;
  }
}
```

- There is no point having a sub-class if it doesn't inherit properties from the parent class.
- It is good then, that the super() operator also accepts arguments for the parent constructor.
- Looking back to our Person constructor, we can see it has the following block of code in its constructor method:

```js
 constructor(first, last, age, gender, interests) {
   this.name = {
     first,
     last
   };
   this.age = age;
   this.gender = gender;
   this.interests = interests;
}
```

- Since the super() operator is actually the parent class constructor, passing it the necessary arguments of the Parent class constructor will also initialize the parent class properties in our sub-class, thereby inheriting it

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
```

- Now when we instantiate Teacher object instances, we can call methods and properties defined on both Teacherand Person as we'd expect:

```js
let snape = new Teacher(
  "Severus",
  "Snape",
  58,
  "male",
  ["Potions"],
  "Dark arts",
  5
);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
snape.age; // 58
snape.subject; // Dark arts
```

### Getters and Setters

- There may be times when we want to change the values of an attribute in the classes we create or we don't know what the final value of an attribute will be.
- Using the Teacher example, we may not know what subject the teacher will teach before we create them, or their subject may change between terms.
- We can handle such situations with getters and setters.
- Let's enhance the Teacher class with getters and setters. The class starts the same as it was the last time we looked at it.
- Getters and setters work in pairs. A getter returns the current value of the variable and its corresponding setter changes the value of the variable to the one it defines.

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}
```

- In our class above we have a getter and setter for the subject property.
- We use \_ to create a separate value in which to store our name property. Without using this convention, we would get errors every time we called get or set.
- At this point:
  - To show the current value of the \_subject property of the snape object we can use the snape.subject getter method.
  - To assign a new value to the \_subject property we can use the snape.subject="new value" setter method.

```js
// Check the default value
console.log(snape.subject); // Returns "Dark arts"

// Change the value
snape.subject = "Balloon animals"; // Sets _subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape.subject); // Returns "Balloon animals"
```

`Note: Getters and setters can be very useful at times, for example when you want to run some code every time a property is requested or set. For simple cases, however, plain property access without a getter or setter will do just fine.`

`Note: Because of the way JavaScript works, with the prototype chain, etc., the sharing of functionality between objects is often called delegation. Specialized objects delegate functionality to a generic object type.`

---

## Inheritence using Object.create()

```js
const BookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },

  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old `;
  },

  init(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  },
};
```

```js
const MagazineProtos = Object.create(BookProtos);
MagazineProtos.init = function (title, author, year, coverImage) {
  BookProtos.init.call(this, title, author, year);
  this.coverImage = coverImage;
};
const mag1 = Object.create(MagazineProtos);
```

```js
console.log(mag1); //{}
console.log(mag1.__proto__); // { init}
console.log(mag1.__proto__.__proto__); //{getSummary, getAge, init}

mag1.init("magazine 1", "Prabhash", 2021, "ImageSrc");
console.log(mag1.getSummary()); // magazine 1 was written by Prabhash in 2021
```
