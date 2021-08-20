# Array.prototype.find()

- The find() method returns the value of the **first element** in the provided array that satisfies the provided testing function.
- If no values satisfy the testing function, undefined is returned.

#### **SYNTAX**

```
// Arrow function
find((element) => { ... } )
find((element, index) => { ... } )
find((element, index, array) => { ... } )

// Callback function
find(callbackFn)
find(callbackFn, thisArg)
```

- If you need the index of the found element in the array, use findIndex().
- If you need to find the index of a value, use Array.prototype.indexOf(). (It’s similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
- If you need to find if a value exists in an array, use Array.prototype.includes(). Again, it checks each element for equality with the value instead of using a testing function.
- If you need to find if any element satisfies the provided testing function, use Array.prototype.some().

#### **EXAMPLES**

> > **Find an object in an array by one of its properties**

```
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
Copy to Clipboard
```

> > **Using arrow function and destructuring**

```
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find( ({ name }) => name === 'cherries' );

console.log(result) // { name: 'cherries', quantity: 5 }
```

> > **Find a prime number in an array**

- The following example finds an element in the array that is a prime number (or returns undefined if there is no prime number):

```
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

- The following examples show that nonexistent and deleted elements are visited, and that the value passed to the callback is their value when visited:

```
// Declare array with no elements at indexes 2, 3, and 4
const array = [0,1,,,,5,6];

// Shows all indexes, not just those with assigned values
array.find(function(value, index) {
  console.log('Visited index ', index, ' with value ', value);
});

// Shows all indexes, including deleted
array.find(function(value, index) {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ', index, ' with value ', value);
});
// expected output:
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
```
