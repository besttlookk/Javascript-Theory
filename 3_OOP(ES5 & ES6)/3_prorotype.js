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
