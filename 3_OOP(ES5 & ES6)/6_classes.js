/*
====================================JavaScript Classes=================================
In JavaScript, classes are the special type of functions. 
We can define the class just like function declarations and function expressions.

The JavaScript class contains various class members within a body including methods or constructor. 
The class is executed in strict mode. So, the code containing the silent error or mistake throws an error.

The class syntax contains two components:
    1.Class declarations
    2.Class expressions

Unlike function declaration, the class declaration is not a part of JavaScript hoisting. 
So, it is required to declare the class before invoking it.

A class can be declared once only. If we try to declare class more than one time, it throws an error.
*/
/*
----------------------1.Class Declarations--------------------------------
A class can be defined by using a class declaration. 
A class keyword is used to declare a class with any particular name.
According to JavaScript naming conventions, the name of the class always starts with an uppercase letter.
*/
//Declaring class
class Employee {
  //Initializing an object
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  //Declaring method
  detail() {
    console.log(this.id, this.name);
  }
}
//passing object to a variable
var e1 = new Employee(101, "Martin Roy");
var e2 = new Employee(102, "Duke William");
e1.detail(); // 101 'Martin Roy'
e2.detail(); // 102 'Duke William'

/*
---------------------2. Class expressions
Another way to define a class is by using a class expression. 
Here, it is not mandatory to assign the name of the class. So, the class expression can be named or unnamed. 
The class expression allows us to fetch the class name. However, this will not be possible with class declaration.

getters and setters can be very useful in data validation

*/
// Unnamed Class Expression: The class can be expressed without assigning any name to it.
const emp = class {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
};

console.log(emp.name); //emp

//Unlike class declaration, the class expression allows us to re-declare the same class.

//Declaring class
var emp = class {
  //Initializing an object
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  //Declaring method
  detail() {
    console.log(this.id, this.name);
  }
};

//passing object to a variable
var e1 = new emp(101, "Martin Roy");
var e2 = new emp(102, "Duke William");
e1.detail(); //calling method
e2.detail();

//Re-declaring class
var emp = class {
  //Initializing an object
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  detail() {
    console.log(this.id, this.name);
  }
};
//passing object to a variable
var e1 = new emp(103, "James Bella");
var e2 = new emp(104, "Nick Johnson");
e1.detail(); //calling method

// --------Named Class Expression Example
// We can express the class with the particular name. Here, the scope of the class name is up to the class body. The class is retrieved using class.name property.

var emp = class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
};
console.log(emp.name); // Employee
// console.log(Employee.name); // ERROR: Employee is not defined

/*
// -------------------SETTER / GETTER and STATIC Method
// every object in js can have getter ans setter properties
Getter and setter are actually function that gets or sets a value. But on the outside they still looks like a regular propertiy.

The JavaScript provides static methods that belong to the class instead of an instance of that class.
So, an instance is not required to call the static method. These methods are called directly on the class itself.

Points to remember
  1.The static keyword is used to declare a static method.
  2. The static method can be of any name.
  3. A class can contain more than one static method.
  4. If we declare more than one static method with a similar name, the JavaScript always invokes the last one.
  5. The static method can be used to create utility functions.
  6. We can use this keyword to call a static method within another static method.
  7. We cannot use this keyword directly to call a static method within the non-static method. In such case, 
    we can call the static method either using the class name or as the property of the constructor.

Array.from is static method as it is only accessible to Array constrctor and not all the arrays



*/
//---------Getter and setter in Object literal
const account = {
  owner: "Prabhash",
  movement: [200, 399, 120, 290],

  // this is helpful when we read something as property but still need to make some calculation before
  get latest() {
    return this.movement.slice(-1).pop();
  },

  // any setter needs o exactly one parameter
  set latest(mov) {
    this.movement.push(mov);
  },
};

// we simply accessing as property
console.log(account.latest); //290

// how to set value...just as other object property
account.latest = 500;

console.log(account.latest); // 500

// ----------------Getter and setter in class

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // we are setting a property which already exist
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else console.log("Given name is not a full name");
  }

  get fullName() {
    return this._fullName;
  }

  static staticMethod() {
    console.log("This is a static method");
  }
}

const person1 = new PersonCl("Rahul kumar", 1990);

console.log(person1.age); // 47

console.log(person1.fullName); // "Rahul Kumar"

PersonCl.staticMethod(); // this is a static method

// =================Static method in Constructor ========================
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  // we shoulc never create method inside constructor function
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

Book.staticMethod = function () {
  console.log("this is a static function");
};

const book1 = new Book("title1", "author1", 2010);

console.log(book1);

Book.staticMethod = function () {
  console.log("this is a static function");
};

Book.staticMethod();
// book1.staticMethod()  // error
