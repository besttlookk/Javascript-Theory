// ---------------3rd way of implementing prototypal inheritance
// prototype object
// const BookProtos = {
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },

//   getAge: function () {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old `;
//   },
// };

// create the object(two ways to do it)

// const book1 = Object.create(BookProtos); // we are passing the prototype...making connection manually
// book1.title = "book 1";
// book1.author = "prabhash";
// book1.year = "2013";

// console.log(book1);

// ------------or-------------------

// here we are manually making the connection between object and constrcutor function through "__proto__" properties
// const book1 = Object.create(BookProtos, {
//   title: { value: "book 1" },
//   author: { value: "prabhash" },
//   year: { value: "2013" },
// });

// console.log(book1.__proto__ === BookProtos); // here BookProtos is actually prototype of book1

// console.log(book1);

// ==================better way ========================

// prototype object
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
console.log(book1.getSummary());
