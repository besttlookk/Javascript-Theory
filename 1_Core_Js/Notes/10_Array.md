- The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

## ------------------------------------ARRAY METHODS-------------------------------

## Array.prototype.concat()

- The concat() method is used to merge two or more arrays.
- **This method does not change the existing arrays, but instead returns a new array.**

#### **SYNTAX**

```
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, ... , valueN)
```

#### **EXAMPLE**

```
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

```
# Concatenating values to an array

const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

```
# The following code concatenates nested arrays and demonstrates retention of references:

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]
```

---

## Array.prototype.copyWithin()

- The copyWithin() method shallow copies part of an array to another location in the same array and returns it **without modifying its length.**

#### **SYNTAX**

```
copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)
```

#### **PARAMETERS**

- target

  - Zero-based index at which to copy the sequence to. **If negative,** target will be counted from the end.

  - If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, the copied sequence will be trimmed to fit arr.length.

- **start** (Optional)

  - Zero-based index at which to start copying elements from. If negative, start will be counted from the end.

  - **If start is omitted, copyWithin will copy from index 0.**

- end (Optional)

  - Zero-based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end.

  - **If end is omitted, copyWithin will copy until the last index (default to arr.length).**

#### **EXAMPLE**

```
[1, 2, 3, 4, 5].copyWithin(-2)
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5])

i32a.copyWithin(0, 2)
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

---

## Array.prototype.entries()

- The entries() method returns a **new Array Iterator object** that contains the key/value pairs for each index in the array.

#### **SYNTAX**

```
entries()
```

#### **EXAMPLE**

```
# Iterating with index and element

const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries())
  console.log(index, element);

// 0 'a'
// 1 'b'
// 2 'c'
```

```
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]
```

---

## Array.prototype.every()

- The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

#### **SYNTAX**

```
// Arrow function
every((element) => { ... } )
every((element, index) => { ... } )
every((element, index, array) => { ... } )

// Callback function
every(callbackFn)
every(callbackFn, thisArg)
```

- thisArg (Optional)
  - A value to use as this when executing callbackFn.

#### **EXAMPLE**

```
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

---

## Array.prototype.fill()

- The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
- **It returns the modified array.**

```
fill(value)
fill(value, start)
fill(value, start, end)
```

- If start is negative, it is treated as array.length + start.
- If end is negative, it is treated as array.length + end.
- fill is a mutator method: it will change the array itself and return it, not a copy of it.
- If the first parameter is an object, each slot in the array will reference that object.

```
[1, 2, 3].fill(4)                // [4, 4, 4]
[1, 2, 3].fill(4, 1)             // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)          // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)          // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3)          // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)        // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)      // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5)          // [1, 2, 3]
Array(3).fill(4)                 // [4, 4, 4]
[].fill.call({ length: 3 }, 4)   // {0: 4, 1: 4, 2: 4, length: 3}

// A single object, referenced by each slot of the array:
let arr = Array(3).fill({}) // [{}, {}, {}]
arr[0].hi = "hi"            // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

---

## Array.prototype.filter()

- The filter() method creates a new array with all elements that pass the test implemented by the provided function.
- If no elements pass the test, an empty array will be returned.

```
// Arrow function
filter((element) => { ... } )
filter((element, index) => { ... } )
filter((element, index, array) => { ... } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)
```

```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

---

## Array.prototype.find()

- The find() method returns the value of the **first element** in the provided array that satisfies the provided testing function.
- If no values satisfy the testing function, undefined is returned.

```
// Arrow function
find((element) => { ... } )
find((element, index) => { ... } )
find((element, index, array) => { ... } )

// Callback function
find(callbackFn)
find(callbackFn, thisArg)
```

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

```
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find( ({ name }) => name === 'cherries' );

console.log(result) // { name: 'cherries', quantity: 5 }
```

---

## Array.prototype.findIndex()

- The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
- Otherwise, it returns -1, indicating that no element passed the test.

```
// Arrow function
findIndex((element) => { ... } )
findIndex((element, index) => { ... } )
findIndex((element, index, array) => { ... } )

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

```
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

---

## Array.prototype.flat()

- The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```
flat()
flat(depth)
```

- The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

```
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

```
# reduce and concat

const arr = [1, 2, [3, 4]];

// To flat single level array
arr.flat();
// is equivalent to
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// or with decomposition syntax
const flattened = arr => [].concat(...arr);
```

```
# Flattening nested arrays

const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Copy to Clipboard
```

```
The flat method removes empty slots in arrays:

const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]
```

---

## Array.prototype.forEach()

- The forEach() method executes a provided function once for each array element.
- return value is undefined.

```
// Arrow function
forEach((element) => { ... } )
forEach((element, index) => { ... } )
forEach((element, index, array) => { ... } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

```
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

---

## Array.from()

- The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
- returns a new Array instance.

```
// Arrow function
Array.from(arrayLike, (element) => { ... } )
Array.from(arrayLike, (element, index) => { ... } )

// Mapping function
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

- arrayLike:
  An array-like or iterable object to convert to an array.

```
Array from a String
Array.from('foo');
// [ "f", "o", "o" ]
```

```
Array from a Set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

```
Array from a Map
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

```
Array from a NodeList
// Create an array based on a property of DOM Elements
const images = document.getElementsByTagName('img');
const sources = Array.from(images, image => image.src);
const insecureSources = sources.filter(link => link.startsWith('http://'));
```

```
Array from an Array-like object (arguments)
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

```
Using arrow functions and Array.from()
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
```

---

## Array.prototype.includes()

- The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```
includes(searchElement)
includes(searchElement, fromIndex)
```

- fromIndex Optional

  - The position in this array at which to begin searching for searchElement.

  - The first element to be searched is found at fromIndex for positive values of fromIndex, or at arr.length + fromIndex for negative values of fromIndex (using the absolute value of fromIndex as the number of elements from the end of the array at which to start the search).

  - Defaults to 0.

```
[1, 2, 3].includes(2)         // true
[1, 2, 3].includes(4)         // false
[1, 2, 3].includes(3, 3)      // false
[1, 2, 3].includes(3, -1)     // true
[1, 2, NaN].includes(NaN)     // true
["1", "2", "3"].includes(3)   // false
```

- If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.

```
let arr = ['a', 'b', 'c']

arr.includes('c', 3)    // false
arr.includes('c', 100)  // false
```

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

---

## Array.prototype.indexOf()

- The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

```
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

```
The following example uses indexOf() to locate values in an array.

var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

```
Finding all the occurrences of an element
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

```
Finding if an element exists in the array or not and updating the array
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.
```

---

## Array.prototype.lastIndexOf()

- The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

```
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

- fromIndex Optional
  - The index at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.
- lastIndexOf compares searchElement to elements of the Array using strict equality (the same method used by the ===, or triple-equals, operator).

```
The following example uses lastIndexOf to locate values in an array.

var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```

```
The following example uses lastIndexOf to find all the indices of an element in a given array, using push to add them to another array as they are found.

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

---

## Array.isArray()

- The Array.isArray() method determines whether the passed value is an Array.
- Returns true if the value is an Array; otherwise, false.

```
Array.isArray(value)
```

```
// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });
```

```
instanceof vs isArray
When checking for Array instance, Array.isArray is preferred over instanceof because it works through iframes.

var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr);  // true
// Considered harmful, because doesn't work through iframes
arr instanceof Array; // false
```

```
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```

---

## Array.prototype.join()

- The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
- If the array has only one item, then that item will be returned without using the separator.
- The string conversions of all array elements are joined into one string.

```
Warning: If an element is undefined, null or an empty array [], it is converted to an empty string.

```

join()
join(separator)

```

- Separator (Optional)
  - Specifies a string to separate each pair of adjacent elements of the array.
  - The separator is converted to a string if necessary.
  - If omitted, the array elements are separated with a comma (",").
  - If separator is an empty string, all elements are joined without any characters in between them.
```

```
Joining an array four different ways

var a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'
```

```
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

---

## Array.prototype.keys()

- The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
- Return a new Array iterator object.

```
keys()
```

```
Key iterator doesn't ignore holes
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

```
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2
```

---

## Array.prototype.map()

- The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
- Returns a new array with each element being the result of the callback function.
- You shouldn't be using map if:
  - you're not using the array it returns; and/or
  - you're not returning a value from the callback.
  - use forEach or for...of instead.

```
// Arrow function
map((element) => { ... } )
map((element, index) => { ... } )
map((element, index, array) => { ... } )

// Callback function
map(callbackFn)
map(callbackFn, thisArg)
```

```
let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
```

```
Using map to reformat objects in an array
The following code takes an array of objects and creates a new array containing the newly reformatted objects.

let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
   let rObj = {}
   rObj[obj.key] = obj.value
   return rObj
})
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```

```
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

---

## Array.of()

- The **Array.of()** method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
- Returns a new array instance.

- The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7 (Note: this implies an array of 7 empty slots, not slots with actual undefined values).

```
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]
```

```
Array.of(element0)
Array.of(element0, element1)
Array.of(element0, element1, ... , elementN)
```

```
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

---

## Array.prototype.pop()\*

- The pop() method removes the last element from an array and returns that element.
- This method changes the length of the array.
- Returning the removed element from the array; undefined if the array is empty.
- Array.prototype.shift() has similar behavior to pop, but applied to the first element in an array.

```
pop()
```

```
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

```
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

---

## Array.prototype.push()\*

- The push() method adds one or more elements to the end of an array and returns the new length of the array.
- Returns the new length property of the object upon which the method was called.

```
push(element0)
push(element0, element1)
push(element0, element1, ... , elementN)
```

```
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
```

```
Merging two arrays
This example uses spread syntax to push all elements from a second array into the first one.

let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

Merging two arrays can also be done with the concat() method.
```

```
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

---

## Array.prototype.reduce()

- The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
- The reducer function takes four arguments:
  1. Accumulator
  2. Current Value
  3. Current Index
  4. Source Array
- Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.

```
// Arrow function
reduce((accumulator, currentValue) => { ... } )
reduce((accumulator, currentValue, index) => { ... } )
reduce((accumulator, currentValue, index, array) => { ... } )
reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

```
const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[    50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax);     // 100

// callback is not invoked
[    50].reduce(getMax);     // 50
[      ].reduce(getMax, 1);  // 1

[      ].reduce(getMax);     // TypeError
```

```
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

---

## Array.prototype.reverse()

- The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```
reverse()
```

```
const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]
```

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

---

## Array.prototype.shift()\*

- The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
- Returns the removed element from the array; undefined if the array is empty.

```
shift()
```

```
Removing an element from an array
The following code displays the myFish array before and after removing its first element. It also displays the removed element:

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift();

console.log('myFish after:', myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted);
// Removed this element: angel
```

```
Using shift() method in while loop
The shift() method is often used in condition inside while loop. In the following example every iteration will remove the next element from an array, until it is empty:

var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( typeof (i = names.shift()) !== 'undefined' ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John
```

---

## Array.prototype.slice()

- The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

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

```
Return a portion of an existing array
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

## Array.prototype.some()

- The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

```
// Arrow function
some((element) => { ... } )
some((element, index) => { ... } )
some((element, index, array) => { ... } )

// Callback function
some(callbackFn)
some(callbackFn, thisArg)
```

```
Testing value of array elements
The following example tests whether any element in the array is bigger than 10.

function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

```
Checking whether a value exists in an array
To mimic the function of the includes() method, this custom function returns true if the element exists in the array:

const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

```
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```

---

## Array.prototype.sort()

- The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

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

```
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

```
Arrays of objects can be sorted by comparing the value of one of their properties.

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

---

## Array.prototype.splice()

- The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

```
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```

- Parameters

  - start

    - The index at which to start changing the array.

    - If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many element as item[n*] provided.

    - If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If array.length + start is less than 0, it will begin from index 0.

  - deleteCount Optional

    - An integer indicating the number of elements in the array to remove from start.

    - If deleteCount is omitted, or if its value is equal to or larger than array.length - start (that is, if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted.

    - If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

  - item1, item2, ... Optional
    - The elements to add to the array, beginning from start. If you do not specify any elements, splice() will only remove elements from the array.

- Return value

  - An array containing the deleted elements.

  - If only one element is removed, an array of one element is returned.

  - If no elements are removed, an empty array is returned.

```
Remove 0 (zero) elements before index 2, and insert "drum"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

```
Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

```
Remove 1 element at index 3
let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
```

```
Remove 1 element at index 2, and insert "trumpet"
let myFish = ['angel', 'clown', 'drum', 'sturgeon']
let removed = myFish.splice(2, 1, 'trumpet')

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
```

```
Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
```

```
Remove 2 elements, starting from index 2
let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed = myFish.splice(2, 2)

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
```

```
Remove 1 element from index -2
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1)

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
```

```
Remove all elements, starting from index 2
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
```

---

## Array.prototype.toString()

- The toString() method returns a string representing the specified array and its elements.

```
toString()
```

```
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```

---

## Array.prototype.unshift()\*

- The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
- Return the new length property of the object upon which the method was called.

```
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, ... , elementN)
```

```
let arr = [4, 5, 6]

arr.unshift(1, 2, 3)
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6] // resetting the array

arr.unshift(1)
arr.unshift(2)
arr.unshift(3)

console.log(arr)
// [3, 2, 1, 4, 5, 6]
```

```
let arr = [1, 2]

arr.unshift(0)               // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1)          // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3])        // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5])  // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2
```
