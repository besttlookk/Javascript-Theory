# Array.prototype.sort()

- The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

#### **SYNTAX**

```
// Functionless
sort()

// Arrow function
sort((firstEl, secondEl) => { ... } )

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(firstEl, secondEl) { ... })
```

- If compareFunction(a, b) returns a value > than 0, sort b before a.
- If compareFunction(a, b) returns a value ≤ 0, leave a and b in the same order.
- compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.

```
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

```
To compare numbers instead of strings, the compare function can subtract b from a. The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):

function compareNumbers(a, b) {
  return a - b;
}
```

- The sort method can be conveniently used with function expressions:

```
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

- ES2015 provides arrow function expressions with even shorter syntax.

```
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]
```

- Arrays of objects can be sorted by comparing the value of one of their properties.

```
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
```

```
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

#### **EXAMPLES**

> > **Creating, displaying, and sorting an array**

- The following example creates four arrays and displays the original array, then the sorted arrays. The numeric arrays are sorted without a compare function, then sorted using one.

```
let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numericStringArray = ['80', '9', '700'];
let numberArray = [40, 1, 5, 200];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // [700, 80, 9]
numericStringArray.sort(compareNumbers); // [9, 80, 700]

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, 700, 80, 9]
mixedNumericArray.sort(compareNumbers); // [1, 5, 9, 40, 80, 200, 700]
```

// ----------Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a "compare function":

// ---------The Compare Function
// The purpose of the compare function is to define an alternative sort order.

// The compare function should return a negative, zero, or positive value, depending on the arguments:

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative a is sorted before b.

// If the result is positive b is sorted before a.

// If the result is 0 no changes are done with the sort order of the two values.

//------ Sort companies by start year(conditional sorting)[USE TERNARY OPERATOR]

// const sortedCompanies = companies.sort(function(c1, c2) {
// if(c1.start > c2.start) {
// return 1;
// } else {
// return -1;
// }
// });

// ---------better---
// const sortedCompanies = companies.sort((a,b)=> {a.start > b.start ? 1 : -1

// });

// console.log(sortedCompanies)

// ----------sort ages(SORT Alphabatically)

// this will sort according to the first digit of the number...WRONG
// const sortAges = ages.sort();
// console.log(sortAges);
// ---correct

// for asending order
// const sortAges = ages.sort((a,b)=> a - b);
// console.log(sortAges);

// decending order

// const sortAges = ages.sort((a,b)=> b-a);
// console.log(sortAges);

## finding max and min values in a array

// [There are no built-in functions for finding the highest or lowest value in a JavaScript array. ]

// sorting method can be used to find min and max value but it is inefficient if we only wish to find max and min vale.

// USING MATHS.max.apply()
let points = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
return Math.max.apply(null, arr);
}

console.log(myArrayMax(points));

function myArrayMin(arr) {
return Math.min.apply(null, arr);
}

console.log(myArrayMin(points));

// HOME MADE SOLUTION

function myArrayMax(arr) {
var len = arr.length;
var max = -Infinity;
while (len--) {
if (arr[len] > max) {
max = arr[len];
}
}
return max;
}

function myArrayMin(arr) {
var len = arr.length;
var min = Infinity;
while (len--) {
if (arr[len] < min) {
min = arr[len];
}
}
return min;
}

// -------------------------------------------

// Sorting Object Arrays
// JavaScript arrays often contain objects:
var cars = [
{ type: "Volvo", year: 2016 },
{ type: "Saab", year: 2001 },
{ type: "BMW", year: 2010 },
];

Even if objects have properties of different data types, the sort() method can be used to sort the array.

The solution is to write a compare function to compare the property values:
cars.sort(function(a, b){return a.year - b.year});

Comparing string properties is a little more complex

cars.sort(function(a, b){
var x = a.type.toLowerCase();
var y = b.type.toLowerCase();
if (x < y) {return -1;}
if (x > y) {return 1;}
return 0;
});

\*/

/\*
// -------------easy way to find max min value of array

const filterArray = [ 3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5 ] 
let maxValue = filterArray[0]
let minValue = filterArray[0]

filterArray.forEach(item => {
item > maxValue ? maxValue = item : item < minValue ? minValue = item : null
})

console.log(maxValue) // 17
console.log(minValue) // -6

\*/
---------------------------Sorting Number-----------------------

he purpose of the compare function is to define an alternative sort order.

    let points = [40, 100, 1, 5, 25, 10];
    console.log(points.sort())   // [ 1, 10, 100, 25, 40, 5 ] 
    console.log(points.sort(function(a, b){return b - a}))
    //to sort in ASCENDING ORDER
    console.log(points.sort(function(a, b){return a - b}))


    function(a, b){return a - b}

When the sort() function compares two values,
it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.
If the result is positive b is sorted before a.
If the result is 0 no changes are done with the sort order of the two values.
