/*
JavaScript arrays are used to store multiple values in a single variable.

Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". In JavaScript, arrays always use numbered indexes. 

There are 3 ways to construct array in JavaScript
      1. By array literal
      2. By creating instance of Array directly (using new keyword)
      3. By using an Array constructor (using new keyword)

-----1) JavaScript array literal
syntax : var arrayname=[value1,value2.....valueN];  

-----2) JavaScript Array directly (new keyword)
syntax: var arrayname=new Array();  

example: 
      var emp = new Array();  
      emp[0] = "Arun";  
      emp[1] = "Varun";  
      emp[2] = "John";  

      console.log(emp)  // [ 'Arun', 'Varun', 'John' ]

------JavaScript array constructor (new keyword)
Here, you need to create instance of array by passing arguments in constructor so that we don't have to provide value explicitly.
var emp=new Array("Jai","Vijay","Smith");  
console.log(emp) // [ 'Jai', 'Vijay', 'Smith' ]

The real strength of JavaScript arrays are the built-in array properties and methods:

--The length Property
      const fruits = ["Banana", "Orange", "Apple", "Mango"];
      fruits.length;   // Returns 4

-- const points = new Array();     // Bad
    const points = [];              // Good 

*/

/*
// ------------The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.

*/

/*
// =========How to Recognize an Array
The problem is that the JavaScript operator typeof returns "object":

Solution 1:To solve this problem ECMAScript 5 defines a new method "Array.isArray()":
      const fruits = ["Banana", "Orange", "Apple"];
      typeof fruits;    // returns object
      Array.isArray(fruits);   // returns true

Solution 2:The "instanceof" operator returns true if an object is created by a given constructor:

      const fruits = ["Banana", "Orange", "Apple"];

      fruits instanceof Array;   // returns true

*/
// ====ways to create and fill array

const newArray = Array.from({ length: 7 }, () => 1);
console.log(newArray); // (1, 1, 1, 1, 1, 1, 1);

const newArray2 = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(newArray2); // [ 1, 2, 3, 4, 5, 6, 7 ]

// array.from is useful to convert nodelIst into array..so that we can apply array methods on it
