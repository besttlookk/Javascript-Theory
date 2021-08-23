# Array.prototype.lastIndexOf()

- The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

#### **SYNTAX**

```
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

- fromIndex Optional
  - The index at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.

`lastIndexOf compares searchElement to elements of the Array using strict equality (the same method used by the ===, or triple-equals, operator).`

#### **EXAMPLES**

> > **Using lastIndexOf**

The following example uses lastIndexOf to locate values in an array.

```
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```

#### **Finding all the occurrences of an element**

- The following example uses lastIndexOf to find all the indices of an element in a given array, using push to add them to another array as they are found.

```
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]

Note that we have to handle the case idx == 0 separately here because the element will always be found regardless of the fromIndex parameter if it is the first element of the array. This is different from the indexOf method.
```
