# Array.prototype.reverse()

- The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

#### **SYNTAX**

```
reverse()
```

- The reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.

- reverse is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.

#### **EXAMPLES**

```
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

```

> > **Reversing the elements in an array**

- The following example creates an array a, containing three elements, then reverses the array. The call to reverse() returns a reference to the reversed array a.

```
const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]
```

> > **Reversing the elements in an array-like object**

- The following example creates an array-like object a, containing three elements and a length property, then reverses the array-like object. The call to reverse() returns a reference to the reversed array-like object a.

```
const a = {0: 1, 1: 2, 2: 3, length: 3};

console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(a); //same syntax for using apply()

console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}

```
