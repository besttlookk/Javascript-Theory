/*
--------------------------JavaScript Constructor Method----------------------
A JavaScript constructor method is a special type of method which is used to initialize and create an object. 
It is called when memory is allocated for an object.

Points to remember:
  1.The constructor keyword is used to declare a constructor method.
  2.The class can contain one constructor method only.
  3. JavaScript allows us to use parent class constructor through super keyword.

Note - If we didn't specify any constructor method, JavaScript use default constructor method.


// It is basically just a function (this is also is ES5):  can make as many object through construtor
// to differntiate "constructor" from the " function" we use UPPERCASE in constrctor
// Only difference between both is that we call constructor function with "new" operator
// We can use both function declaration and function expression to define constructor function.
// But array function will not work as fujction constructor(bcoz it doesnot have its own this keyword)

---new opearator
It is a very special operator .It does 4 things behind the scene
    1. new empty object is created.
    2. function is called.And in this.."this" is equal to the newly created object // this = {}
    3. newly created object is linked to the prototype // this will create __proto__ property on objects and sets the value equal to prototype of constructor function
    4. function automaticaaly returns the object after adding properties
*/

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  // we shoulc never create method inside constructor function
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// --Whenever we create a function(generic or contructor), two objects are automatically created
// console.log(Book)  // Book
// console.log(Book.prototype)  // Book {}
// console.log(Book.prototype.__proto__)  // {}

//-- extensite the object... this way we can easily create any number of books using keyword 'new'
// -- __proto__ "property" is created automatically which point to the "prototype" of the constuctor function
const book1 = new Book("Book 1", "John Doe", 2013);
console.log(book1);
console.log(book1.__proto__); // Book {}
// console.log(book1.prototype)  // undefined....sirf main function ka prototype object hota
console.log(book1.__proto__ === Book.prototype); // true, bcoz extensited object points to the prototype object of constructor function

// const book2 = new Book('Book 2','Cohleo Pole',2010)
// console.log(book2);
// console.log(book1.getSummary());
// console.log(book2.getSummary());

// to get the arrays of the "value" inside the object
// console.log(Object.values(book1))
// console.log(Object.values(book2))
// to get the arrays of the "key" inside the object
// console.log(Object.keys(book1))
// console.log(Object.keys(book2))

// --------

// function Hotel(name, rooms, booked) {

//     this.name = name;
//     this.rooms = rooms;
//     this.booked = booked;
//     this.checkAvailability = function() {

//         return this.rooms - this.booked;
//     };
// }

// hotel1 = new Hotel('Quay', 40, 25)

// console.log(hotel1)
// console.log(hotel1.checkAvailability())
// console.log(Object.values(hotel1))
// console.log(Object.keys(hotel1))

// consructor solved one problem(we can create multiple similar object very easily) but here also it print the function in the array/...so we move to "PROTOTYPE"
/* When we create methods inside constructor function:
      And when we create lots and lots of object from this constructor function...each object will carry around this method.
      That would be terribale for the performance...

      To solve this problem we gonna use : PROTOTYPE & PROTOTYPE INHERITANCE

*/

// NOTE: Contstructor function is not the feature of JS..it is just a pattern that is developed by other developer
