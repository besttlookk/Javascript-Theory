# Array.prototype.findIndex()

- The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
- Otherwise, it returns -1, indicating that no element passed the test.
- See also the find() method, which returns the value of an array element, instead of its index.

#### **SYNTAX**

```
// Arrow function
findIndex((element) => { ... } )
findIndex((element, index) => { ... } )
findIndex((element, index, array) => { ... } )

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

- The findIndex() method executes the callbackFn function once for every index in the array until it finds the one where callbackFn returns a truthy value.
- If such an element is found, findIndex() immediately returns the element's index. If callbackFn never returns a truthy value (or the array's length is 0), findIndex() returns -1.

```
Note: Unlike other array methods such as Array.some(), callbackFn is run even for indexes with unassigned values.
```

- callbackFn is invoked with three arguments:
  - The value of the element
  - The index of the element
  - The Array object being traversed
- If a thisArg parameter is passed to findIndex(), it will be used as the this inside each invocation of the callbackFn. If it is not provided, then undefined is used.

- The range of elements processed by findIndex() is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. callbackFn will not process the elements appended to the array after the call to findIndex() begins. If an existing, unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time findIndex() visits the element's index.Elements that are deleted are still visited.

`Warning: Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).`

#### **EXAMPLES**

```
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

```

> > **Find the index of a prime number in an array**

- The following example returns the index of the first element in the array that is a prime number, or -1 if there is no prime number.

```
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
```

> > **Find index using arrow function**

```
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
```
