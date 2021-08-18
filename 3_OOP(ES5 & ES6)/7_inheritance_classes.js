// ---------------------------2.Using ES6 classes for inheritance---------------------------
// To achive inheritance using ES6 classes..we only need : extends keyword and super function
// extends keyword will link the prototype behind the scenes
// super is basically the constructor function of parent class
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Magzine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    // always need to happen first...that way we can access "this"
    super(title, author, year);
    this.month = month;
  }
}

//instantige magazine
const mag1 = new Magazine("book 2", "prabhash", "2019", "jan");
console.log(mag1);
console.log(mag1.getSummary());
console.log(mag1.__proto__); // Magazine {}
console.log(Magazine.prototype); // Magazine {}
console.log(Magazine.prototype.__proto__); // Book{}
console.log(Magazine.prototype.constructor); // [λ: Magazine]

// =========================Example ============================
