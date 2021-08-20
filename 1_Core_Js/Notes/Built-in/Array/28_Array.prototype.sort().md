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
