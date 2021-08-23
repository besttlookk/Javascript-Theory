# Array.prototype.includes()

- The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

#### **SYNTAX**

```
includes(searchElement)
includes(searchElement, fromIndex)
```

- fromIndex Optional

  - The position in this array at which to begin searching for searchElement.

  - The first element to be searched is found at fromIndex for positive values of fromIndex, or at arr.length + fromIndex for negative values of fromIndex (using the absolute value of fromIndex as the number of elements from the end of the array at which to start the search).

  - Defaults to 0.

- Return value

  - A Boolean which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

  - Values of zero are all considered to be equal, regardless of sign. (That is, -0 is considered to be equal to both 0 and +0), but false is not considered to be the same as 0.

`Note: Technically speaking, includes() uses the sameValueZero algorithm to determine whether the given element is found.`

#### **EXAMPLES**

```
[1, 2, 3].includes(2)         // true
[1, 2, 3].includes(4)         // false
[1, 2, 3].includes(3, 3)      // false
[1, 2, 3].includes(3, -1)     // true
[1, 2, NaN].includes(NaN)     // true
["1", "2", "3"].includes(3)   // false
```

> > **fromIndex is greater than or equal to the array length**

- If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.

```
let arr = ['a', 'b', 'c']

arr.includes('c', 3)    // false
arr.includes('c', 100)  // false
```

> > **Computed index is less than 0**

- If fromIndex is negative, the computed index is calculated to be used as a position in the array at which to begin searching for searchElement. If the computed index is less than or equal to 0, the entire array will be searched.

```
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

let arr = ['a', 'b', 'c']

arr.includes('a', -100) // true
arr.includes('b', -100) // true
arr.includes('c', -100) // true
arr.includes('a', -2)   // false
```
