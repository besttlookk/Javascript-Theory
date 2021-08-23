# Array() constructor

- The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.
- The Array() constructor is used to create Array objects.

#### **SYNTAX**

```
// literal constructor
[element0, element1, ..., elementN]

// construct from elements
new Array(element0, element1, ..., elementN)

// construct from array length
new Array(arrayLength)
```

#### **EXAMPLES**

> > **Array literal notation**

- Arrays can be created using the literal notation:

```
let fruits = ['Apple', 'Banana'];

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```

> > **Array constructor with a single parameter**

- Arrays can be created using a constructor with a single number parameter. An array with its length property set to that number and the array elements are empty slots.

```
let fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]);     // undefined
```

> > **Array constructor with multiple parameters**

- If more than one argument is passed to the constructor, a new Array with the given elements is created.

```
let fruits = new Array('Apple', 'Banana');

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```

> > **new Array() Syntax**

```
var emp = new Array();
emp[0] = "Arun";
emp[1] = "Varun";
emp[2] = "John";

console.log(emp)  // [ 'Arun', 'Varun', 'John' ]
```

### The Difference Between Arrays and Objects

- In JavaScript, arrays use numbered indexes.

- In JavaScript, objects use named indexes.

- Arrays are a special kind of objects, with numbered indexes.

### How to Recognize an Array

- The problem is that the JavaScript operator typeof returns "object":

- Solution 1:To solve this problem ECMAScript 5 defines a new method "Array.isArray()":

```
      const fruits = ["Banana", "Orange", "Apple"];
      typeof fruits;    // returns object
      Array.isArray(fruits);   // returns true
```

- Solution 2:The "instanceof" operator returns true if an object is created by a given constructor:

```
      const fruits = ["Banana", "Orange", "Apple"];

      fruits instanceof Array;   // returns true
```

### ways to create and fill array

```
const newArray = Array.from({ length: 7 }, () => 1);
console.log(newArray); // (1, 1, 1, 1, 1, 1, 1);

const newArray2 = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(newArray2); // [ 1, 2, 3, 4, 5, 6, 7 ]
```

`array.from is useful to convert nodelIst into array..so that we can apply array methods on it`

## Array methods

| Methods                   | Description                                                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- |
| concat()                  | It returns a new array object that contains two or more merged arrays.                                     |
| copywithin()              | It copies the part of the given array with its own elements and returns the modified array.                |
| entries()                 | It creates an iterator object and a loop that iterates over each key/value pair.                           |
| every()                   | It determines whether all the elements of an array are satisfying the provided function conditions.        |
| flat()                    | It creates a new array carrying sub-array elements concatenated recursively till the specified depth.      |
| flatMap()                 | It maps all array elements via mapping function, then flattens the result into a new array.                |
| fill()                    | It fills elements into an array with static values.                                                        |
| from()                    | It creates a new array carrying the exact copy of another array element.                                   |
| filter()                  | It returns the new array containing the elements that pass the provided function conditions.               |
| find()                    | It returns the value of the first element in the given array that satisfies the specified condition.       |
| findIndex()               | It returns the index value of the first element in the given array that satisfies the specified condition. |
| forEach()                 | It invokes the provided function once for each element of an array.                                        |
| includes()                | It checks whether the given array contains the specified element.                                          |
| indexOf()                 | It searches the specified element in the given array and returns the index of the first match.             |
| isArray()                 | It tests if the passed value ia an array.                                                                  |
| join()                    | It joins the elements of an array as a string.                                                             |
| keys()                    | It creates an iterator object that contains only the keys of the array, then loops through these keys.     |
| lastIndexOf()             | It searches the specified element in the given array and returns the index of the last match.              |
| map()                     | It calls the specified function for every array element and returns the new array                          |
| of()                      | It creates a new array from a variable number of arguments, holding any type of argument.                  |
| pop()                     | It removes and returns the last element of an array.                                                       |
| push()                    | It adds one or more elements to the end of an array.                                                       |
| reverse()                 | It reverses the elements of given array.                                                                   |
| reduce(function, initial) | It executes a provided function for each value from left to right and reduces the array to a single value. |
| reduceRight()             | It executes a provided function for each value from right to left and reduces the array to a single value. |
| some()                    | It determines if any element of the array passes the test of the implemented function.                     |
| shift()                   | It removes and returns the first element of an array.                                                      |
| slice()                   | It returns a new array containing the copy of the part of the given array.                                 |
| sort()                    | It returns the element of the given array in a sorted order.                                               |
| splice()                  | It add/remove elements to/from the given array.                                                            |
| toLocaleString()          | It returns a string containing all the elements of a specified array.                                      |
| toString()                | It converts the elements of a specified array into string form, without affecting the original array.      |
| unshift()                 | It adds one or more elements in the beginning of the given array.                                          |
| values()                  | It creates a new iterator object carrying values for each index in the array.                              |

## Array method summary

### **TYPE 1: To mutate original array**

1. **Add to original** : push()<end> , unshift()<start>
2. **Remove from original** : pop()<end> , shift()<start>, splice()<any>
3. **Others:** reverse(), sort(), fill()

### **TYPE 2: A new array**

1. **Computed from original** : map()<loop>
2. **filter using condition :** filter()
3. **portion of original :** slice()
4. **Adding original to other :** concat()
5. **Flatening the original :** flat() / flatMap()

### **TYPE 3: An array index:**

1. **Based on value:** indexOf()
2. **Based on test condition:** findIndex()

### **TYPE 4: An array element :**

1. **Based on test condition:** find()

### **TYPE 5: Know if array includes**

1. **Based on value:** includes()
2. **based on condition:** some() /every()

### **TYPE 6 : A new string :** join()

### **TYPE 7 : To transform to value :** reduce()

### **TYPE 8: To just loop array :** forEach()
