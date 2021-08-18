// Book Prototype
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

// Magazine prototype inheriting from Book prottype
const MagazineProtos = Object.create(BookProtos);
MagazineProtos.init = function (title, author, year, coverImage) {
  BookProtos.init.call(this, title, author, year);
  this.coverImage = coverImage;
};
const mag1 = Object.create(MagazineProtos);

console.log(mag1); //{}
console.log(mag1.__proto__); // { init}
console.log(mag1.__proto__.__proto__); //{getSummary, getAge, init}

mag1.init("magazine 1", "Prabhash", 2021, "ImageSrc");
console.log(mag1.getSummary()); // magazine 1 was written by Prabhash in 2021
