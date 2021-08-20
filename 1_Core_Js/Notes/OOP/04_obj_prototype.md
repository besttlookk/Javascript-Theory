# Object prototypes

- Prototypes are the mechanism by which JavaScript objects inherit features from one another

## A prototype-based language?

- JavaScript is often described as a prototype-based language — to provide inheritance,
- objects can have a prototype object, which acts as a template object that it inherits methods and properties from.
- An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on.
- This is often referred to as a **_prototype chain,_** and explains why different objects have properties and methods defined on other objects available to them.
- In JavaScript, a link is made between the object instance and its prototype (its **proto** property, which is derived from the prototype property on the constructor), and the properties and methods are found by walking up the chain of prototypes.
- JavaScript is a prototype-based language that facilitates the objects to acquire properties and features from one another.
- Here, each object contains a prototype object.
- In JavaScript, whenever a function is created the prototype property is added to that function automatically.
- This property is a prototype object that holds a constructor property.

```
  ClassName.prototype.methodName
```

## What is the requirement of a prototype object??

- Whenever an object is created in JavaScript, its corresponding functions are loaded into memory.
- So, a new copy of the function is created on each object creation.
- In a prototype-based approach, all the objects share the same function.
- This ignores the requirement of creating a new copy of function for each object.
- Thus, the functions are loaded once into the memory.

## Prototype Chaining:

- In JavaScript, each object contains a prototype object that acquires properties and methods from it.
- Again an object's prototype object may contain a prototype object that also acquires properties and methods, and so on.
- It can be seen as prototype chaining.

```
Constructor function --- .prototype----> Prototype
Constructor function <--- .constructor ---- Prototype
```

```
Note: Person.prototype is NOT the prototype of "Person" rather it is a prototype of object created by Person.
```

- \_\_proto\_\_ property always points to the object prototype.

- Person.prototype is object itselt. Remember, every object in JS has a prototype.So,
  Person.prototype must also have a prototype . And that prototype is "Object.prototype"

```
  Person.prototype.__proto__ === Object.prototype
```

- Object.prototype is just an object, which means it has to be built using build in "Object Constructor" function.
  T- his is actually the function which is called behind the seneces when we create object using object literals. That means object literal is just a shortcut of writting "new"

```
  Object.prototype.__proto__ = null (end of prototype chain)
```

#### **EXAMPLE**

```
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};
```

```
const book1 = new Book("Book 1", "John Doe", 2013);
```

```
console.log(book1.__proto__ === Book.prototype)    // true
console.log(Book === book1.__proto__.constructor)  //true
console.log(Book === Book.prototype.constructor)  //true
console.log(Book.prototype.constructor)  // OUTPUT: Book
```

```
console.log(book1.getSummary());
console.log(book1.getAge())
```

## Other ways to create object instance

- By now we have seen 3 methods to create object:
  1. Using object literal
  2. Using the Object() constructor
  3. Using Constructor function
- Constructors can help you give your code order—you can create constructors in one place, then create instances as needed, and it is clear where they came from.
- However, some people prefer to create object instances without first creating constructors, especially if they are creating only a few instances of an object.
- JavaScript has a built-in method called create() that allows you to do that
- With it, you can create a new object, using an existing object as the prototype of the newly created object.

### **Object.create()**

```
const book2 = Object.create(book1)
```

```
console.log(book2)                        // Book {}
console.log(book2.__proto__)              // Book { title: 'Book 1', author: 'John Doe', year: 2013 }
console.log(book2.__proto__.__proto__)    // Book { getSummary: [λ], getAge: [λ] }
```

```
console.log(book2.getSummary())   // Book 1 was written by John Doe in 2013 
console.log(book2.getAge())       // Book 1 is 8 years old 
```

- You'll see that book2 has been created based on book1 as its prototype —it has the same properties and method available to it.

#### **EXAMPLE**

```
# We first create prototype

const BookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

   getAge: function () {
     const years = new Date().getFullYear() - this.year;
     return `${this.title} is ${years} years old `;
   },
};
```

```
const book1 = Object.create(BookProtos);
```

```
console.log(book1)   // {}
console.log(book1.__proto__) //   { getSummary: [λ: getSummary], getAge: [λ: getAge] }
```

```
book1.title = "book 1";
book1.author = "prabhash";
book1.year = "2013";
```

```
console.log(book1)     // { title: 'book 1', author: 'prabhash', year: '2013' }
console.log(book1.getSummary())   // book 1 was written by prabhash in 2013 
```

- We can do same things in short too

```
const book1 = Object.create(BookProtos, {
   title: { value: "book 1" },
   author: { value: "prabhash" },
   year: { value: "2013" },
});
```

- We can make above example better by makking inti() fuunction inside the prototype. It will look similar to constructor function, but its not

```
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

const book1 = Object.create(BookProtos); // creating connection
book1.init("book1", "Prabhash", "2021"); // accessing the prototype method to initialize

console.log(book1); //{ title: 'book1', author: 'Prabhash', year: '2021' }
```
