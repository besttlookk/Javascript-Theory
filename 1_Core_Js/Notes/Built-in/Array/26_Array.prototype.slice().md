# Array.prototype.slice()

- The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

#### **SYNTAX**

```
slice()
slice(start)
slice(start, end)
```

- Parameters

  - start Optional

    - Zero-based index at which to start extraction.

  - A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.

  - If start is undefined, slice starts from the index 0.

  - If start is greater than the index range of the sequence, an empty array is returned.

- end Optional

  - Zero-based index before which to end extraction. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).

  - A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.

  - If end is omitted, slice extracts through the end of the sequence (arr.length).

  - If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).

#### **EXAMPLES**

> > **Return a portion of an existing array\***

```

let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3)

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
```

---
