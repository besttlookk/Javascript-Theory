/*
---------------------2. Class expressions
The class expression allows us to fetch the class name. However, this will not be possible with class declaration.


*/
// Unnamed Class Expression: The class can be expressed without assigning any name to it.
const emp = class {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
};

console.log(emp.name); //emp

//

/*
// -------------------SETTER / GETTER and STATIC Method
// every object in js can have getter ans setter properties

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
