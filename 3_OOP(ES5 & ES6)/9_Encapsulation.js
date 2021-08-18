/*
=============================JavaScript Encapsulation
The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data.
It allows us to control the data and validate it. 

To achieve an encapsulation in JavaScript: -
    1> Use var keyword to make data members private.
    2> Use setter methods to set the data and getter methods to get that data.

The encapsulation allows us to handle an object using the following properties:
    Read/Write - Here, we use setter methods to write the data and getter methods read that data.

    Read Only - In this case, we use getter methods only.

    Write Only - In this case, we use setter methods only.

*/

//Example of encapsulation that contains two data members with its setter and getter methods.

class Student {
  constructor() {
    var name;
    var marks;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getMarks() {
    return this.marks;
  }
  // setMarks(marks) {
  //   this.marks = marks;
  // }

  // ..validating
  setMarks(marks) {
    if (marks < 0 || marks > 100) {
      alert("Invalid Marks");
    } else {
      this.marks = marks;
    }
  }
}

var stud = new Student();
stud.setName("John");
stud.setMarks(80);
console.log(stud.getName()); //John
console.log(stud.getMarks()); // 80

//  Encapsulation Example: Prototype-based approach
function Student(name, marks) {
  var s_name = name;
  var s_marks = marks;
  console.log(this); // Student {}
  Object.defineProperty(this, "name", {
    get: function () {
      return s_name;
    },
    set: function (s_name) {
      this.s_name = s_name;
    },
  });

  Object.defineProperty(this, "marks", {
    get: function () {
      return s_marks;
    },
    set: function (s_marks) {
      this.s_marks = s_marks;
    },
  });
}
var stud = new Student("John", 80);
console.log(stud.name);
console.log(stud.marks);

// -------------------------------Faking encapsulation-------------
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // protected property: Faking encapsulation
//     this._pin = pin;
//     this._movement = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   getMovement() {
//     return this._movement;
//   }

//   deposite(val) {
//     this._movement.push(val);
//   }

//   withdraw(val) {
//     this.deposite(-val);
//   }

//   // this method sould not be part of public api
//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposite(val);
//       console.log("Loan Approved");
//     }
//   }
// }

// const acc1 = new Account("Prabhash", "IND", "844101");
// console.log(acc1);

// // this is not the good idea
// // Instead of interecting with propery like this directly ..its lot better to interect with these properties directly
// // acc1._movement.push(250) // deposite  // its not good to access private property directly
// // acc1._movement.push(-100) // withdrawal
// // console.log(acc1)

// acc1.deposite(300);
// acc1.withdraw(100);
// acc1.requestLoan(1000);
// // acc1._approveLoan(1000) // not good to access priavte methods
// console.log(acc1.getMovement());
// console.log(acc1);
// console.log(acc1._pin);

// ---------------private class fields and methods-------------------
// 1. public fields
// 2.private fields
// 3. public methods
// 4. private methods

class Account {
  // Public fields
  locale = "eng-IND";

  // private fields
  #movement = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property: Faking encapsulation
    this.#pin = pin;
    // this._movement = []
    // this.locale = "en-IND"

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovement() {
    return this.#movement;
  }

  deposite(val) {
    this.#movement.push(val);
    // to make channing possible
    // this looks good where we set something
    return this;
  }

  withdraw(val) {
    this.deposite(-val);
    return this;
  }

  // this method sould not be part of public api
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposite(val);
      console.log("Loan Approved");
      return this;
    }
  }
}

const acc1 = new Account("Prabhash", "IND", "844101");
console.log(acc1);
acc1.deposite(300);
acc1.withdraw(100);
acc1.requestLoan(1000);

// Channing methods
acc1.deposite(299).deposite(300).withdraw(500).requestLoan(2000).withdraw(500);
