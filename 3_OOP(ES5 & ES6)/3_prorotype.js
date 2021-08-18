/*
----------------------------------JavaScript Prototype Object-------------------
JavaScript is a prototype-based language that facilitates the objects to acquire properties and features from one another.
Here, each object contains a prototype object.

In JavaScript, whenever a function is created the prototype property is added to that function automatically.
This property is a prototype object that holds a constructor property.

Syntax: ClassName.prototype.methodName  

What is the requirement of a prototype object??
  Whenever an object is created in JavaScript, its corresponding functions are loaded into memory. 
  So, a new copy of the function is created on each object creation.
  In a prototype-based approach, all the objects share the same function.
  This ignores the requirement of creating a new copy of function for each object. 
  Thus, the functions are loaded once into the memory.

Prototype Chaining:
  In JavaScript, each object contains a prototype object that acquires properties and methods from it. 
  Again an object's prototype object may contain a prototype object that also acquires properties and methods, and so on. 
  It can be seen as prototype chaining.

  Constructor function --- .prototype----> Prototype
  Constructor function <--- .constructor ---- Prototype

  Note: Person.prototype is NOT the prototype of "Person" rather it is a prototype of object created by Person.

  __proto__ always points to the object prototype

  Person.prototype is object itselt. Remember, every object in JS has a prototype.So,
  Person.prototype must also have a prototype . And that prototype is "Object.prototype"[Person.prototype.__proto__  === Object.prototype]

  Object.prototype is just an object, which means it has to be built using build in "Object Constructor" function.
  This is actually the function which is called behind the seneces when we create object using onject literals.
  That means object literal is just a shortcut of writting "new"

  Object.prototype.__proto__ = null (end of prototype chain)
*/

// It is basically just a function (this is also is ES5)
// in here we define function/method outside the main function defintion(basically we define methods in prototype object of constructor function)
//
// when we initialize the object we get the funtion defination in its protype

//Whenever we create a function(generic / constructor), two objects are automatically created:
// 'prototype' is the property of the function/constructor which points to the 'prototype object'
//prototype object can be 'accessed' using 'Function_name.prototype'

function Book(title, author, year) {
  // instance member
  this.title = title;
  this.author = author;
  this.year = year;
}
// every function in JS has a property called "prototype"
// getsummary 'prototype object' me store hua na hi actual function me
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
// getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};
// --upper ke dono hi functions "prototype" object me stored hai..

// ========================Examine what happens when we create a function======================
// whenever we create any function(generic or contructor ) two objects are created behind the sceans.
// "First object name = name of the function we created" and it hold that function. along with this a property "prototype" is also created with points to the second object(which is 'Prototype object')
console.log(Book);
console.log(Book.prototype);

// initialise the object... this way we can easily create ant number of books.
// Whenever we create a new object use 'new' keyword ,a property called '__proto__' is also created behind the scene which points to the prototype object of the constructor functiom.
// that means to access "prototype" of constructor we need to use "__proto__" property
const book1 = new Book("Book 1", "John Doe", 2013);
// const book2 = new Book('Book 2','Cohleo Pole',2010)

// console.log(book1.__proto__)   // === console.log(Book.prototype)
//--verify
// console.log(book1.__proto__ === Book.prototype)    // true
// console.log(Book === book1.__proto__.constructor)  //true
// console.log(Book === Book.prototype.constructor)  //true
// console.log(Book.prototype.constructor)  // OUTPUT: Book // so there are many ways to access original constructor function

// console.log(book1.example)  // undefine (js engine first search in this instance obj then to prototype obj)

// console.log(book1);
// console.log(book2);
// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(book1.getAge())

//-- to get the arrays of the "value" inside the object
// console.log(Object.values(book1))
// console.log(Object.values(book2))
//-- to get the arrays of the "key" inside the object
// console.log(Object.keys(book1))
// console.log(Object.keys(book2))

// --prototype member
Book.prototype.color = "white"; // this property gets add on prototype object
console.log(book1.color);
// console.log(book2.color)
// console.log(book1)
// console.log(Object.keys(book2))  // will not get protoype member.. for that we have to use " for in" loop

// for (var property in book1) {
//     console.log(book1[property])
// }

//---- what if we want to create  new object which has additinal "function" defintion.
// Book.prototype.revise = function(newYear) {
//     this.year =newYear;   // we are changing the value here from the above function
//     this.revise = true;
// }

// // manipulting the data
// console.log(book2)
// book2.revise(2018);
// console.log(book2)  // we changed one previous value(year) and added one key-value pair
