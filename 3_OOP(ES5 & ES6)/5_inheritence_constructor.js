/*
// WHAT IF we want to create a different constructor which want to inherit some properties from other constructor(like Car constrctor inheriets Vehicle Constructor )
  Inhertance between class:
  1. Using Constructor function
  2. Using ES5 classes
  3. Object.create

*/

//================================================1. Constructor funtion ==================================================================
// --1st Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// -- 2nd constructor :Magazine Constructor
function Magazine(title, author, year, month) {
  // --isse sirf Book object ki intance variable ka accsess milega prototype variables and methods ka nahi
  // here we are simply calling the function..and in strict mode.."this" inside function is undefined.
  // thats why we need to "call" method to explicitly tell what should be the value of "this"
  Book.call(this, title, author, year);
  this.month = month;
}

//----instantiate Magazine [before inheritance]
// const mag1 = new Magazine("mag 1", "John Doe", "2013", "jan");

// console.log(mag1.__proto__); // Magazine {}
// console.log(Magazine.prototype); // Magazine {}
// console.log(Magazine.prototype.__proto__); // {}  // uptill now..we have made inheritance..we just use property of Book constructor
// // console.log(mag1.getSummary())  // ERROR: mag1.getSummary is not a function
// console.log(Book.prototype);

// all we want is : Magazine.prototype.__proto__ === Book.prototype : we have to make this connection manually : Using Object.create: it takes prototype as argument
Magazine.prototype = Object.create(Book.prototype);
// ----------Instantiate MAgazine [after inheritance]
const mag1 = new Magazine("mag 1", "John Doe", "2013", "jan");

console.log(mag1.__proto__); // Book{} -----It shoud have been : Magazine {}
console.log(Magazine.prototype); // Book{} ----It should have been:  Magazine {}
console.log(Magazine.prototype.__proto__); // Book {getSumary}
console.log(mag1.getSummary()); //        mag 1 was written by John Doe in 2013

console.log(mag1 instanceof Book); // true ....BUT its not mag1 is the instance of Magazine...lets check
console.log(Magazine.prototype.constructor); // Book...BUT it should have been Magazine...this is all happening because of Object.create..we need to correct that
Magazine.prototype.constructor = Magazine;

console.log(mag1.__proto__); //      Magazine { constructor: [λ: Magazine] }
console.log(Magazine.prototype); //   Magazine { constructor: [λ: Magazine] }

// --prototal chain
console.log(mag1 instanceof Magazine); //true
console.log(mag1 instanceof Book); // true
console.log(mag1 instanceof Object); // true

/*
-----SUMMARY of Class inheritance using Constructor function ---------------
Fully inheritence is a three step process:
  1. Book.call()
  2. Magzine.prototype = Object.create(Book.prototype) 
  3. Magzine.prototype.constructor = Magzine 
*/

// =========================================Example===========================

// // Constructor function
// var Mobile = function () {};
// //-- Prototype method
// Mobile.prototype.getModel = function () {
//   return this.model;
// };

// var Samsung = function (model, price) {
//   // since we are not using any property of Mobile..we are not calling Mobile constructor
//   this.model = model;
//   this.price = price;
// };

// var Lenovo = function (model) {
//   // since we are not using any property of Mobile..we are not calling Mobile constructor
//   this.model = model;
// };

// // Making Samsung & Lenovo Inheritance of Mobile
// Samsung.prototype = Object.create(Mobile.prototype);
// Lenovo.prototype = Object.create(Mobile.prototype);
// console.log(Samsung.prototype.__proto__ === Mobile.prototype); // true
// console.log(Lenovo.prototype.__proto__ === Mobile.prototype); // true

// //-- resetting the constructor of samsung & Lenevo
// Samsung.prototype.constructor = Samsung;
// Lenovo.prototype.constructor = Lenovo;

// Samsung.prototype.getPrice = function () {
//   return this.price;
// };

// //-- creating obj
// const galaxy = new Samsung("Galaxy", 3000);
// const phn2 = new Lenovo("phn 2");

// console.log(galaxy.getModel()); // Galaxy
// console.log(galaxy.getPrice()); // 3000
// console.log(phn2.getModel()); // phn 2
/*
// ---------------------------Upgrading above example --------------------------
What if we need to have lots and lots of constructor inheriting.........for all we have to make link and then correct the constructor
To ease this work we make a function:

*/

const Mobile = function () {};
Mobile.prototype.getModel = function () {
  return this.model;
};

function extend(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

const Samsung = function (model, price) {
  // since we are not using any property of Mobile..we are not calling Mobile constructor
  this.model = model;
  this.price = price;
};

const Lenovo = function (model) {
  // since we are not using any property of Mobile..we are not calling Mobile constructor
  this.model = model;
};

extend(Samsung, Mobile);
extend(Lenovo, Mobile);

//-- creating obj
const galaxy = new Samsung("Galaxy", 3000);
const phn2 = new Lenovo("phn 2");

console.log(galaxy.getModel()); // Galaxy
console.log(galaxy.getPrice()); // 3000
console.log(phn2.getModel()); // phn 2
