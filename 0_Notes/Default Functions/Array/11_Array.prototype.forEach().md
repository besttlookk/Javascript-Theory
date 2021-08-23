# Array.prototype.forEach()

- The forEach() method executes a provided function once for each array element.
- return value is undefined.

#### **SYNTAX**

```
// Arrow function
forEach((element) => { ... } )
forEach((element, index) => { ... } )
forEach((element, index, array) => { ... } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

- If a thisArg parameter is provided to forEach(), it will be used as callback's this value. The thisArg value ultimately observable by callbackFn is determined according to the usual rules for determining the this seen by a function.
- The range of elements processed by forEach() is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. If existing elements of the array are changed or deleted, their value as passed to callbackFn will be the value at the time forEach() visits them; elements that are deleted before being visited are not visited. If elements that are already visited are removed (e.g. using shift()) during the iteration, later elements will be skipped.
- forEach() executes the callbackFn function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.
- forEach() does not mutate the array on which it is called. (However, callbackFn may do so)

```
Note: There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

Early termination may be accomplished with:

    A simple for loop
    A for...of / for...in loops
    Array.prototype.every()
    Array.prototype.some()
    Array.prototype.find()
    Array.prototype.findIndex()

Array methods: every(), some(), find(), and findIndex() test the array elements with a predicate returning a truthy value to determine if further iteration is required.
```

```
Note: forEach expects a synchronous function.

forEach does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callback.

let ratings = [5, 4, 5];
let sum = 0;

let sumFunction = async function (a, b)
{
  return a + b
}

ratings.forEach(async function(rating) {
  sum = await sumFunction(sum, rating)
})

console.log(sum)
// Naively expected output: 14
// Actual output: 0
```

#### **EXAMPLES**

```
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

> > **No operation for uninitialized values (sparse arrays)**

```
const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach(function(element) {
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)

// 1
// 3
// 7
// numCallbackRuns: 3
// comment: as you can see the missing value between 3 and 7 didn't invoke callback function.
```

> > **Converting a for loop to forEach**

```
const items = ['item1', 'item2', 'item3']
const copyItems = []

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}

// after
items.forEach(function(item){
  copyItems.push(item)
})
```

> > **Printing the contents of an array**

```
Note: In order to display the content of an array in the console, you can use console.table(), which prints a formatted version of the array.

The following example illustrates an alternative approach, using forEach().
```

- The following code logs a line for each element in an array:

```
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element)
}

// Notice that index 2 is skipped, since there is no item at
// that position in the array...
[2, 5, , 9].forEach(logArrayElements)
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

> > **Using thisArg**

- The following (contrived) example updates an object's properties from each entry in the array:

```
function Counter() {
  this.sum = 0
  this.count = 0
}
Counter.prototype.add = function(array) {
  array.forEach(function countEntry(entry) {
    this.sum += entry
    ++this.count
  }, this)
}

const obj = new Counter()
obj.add([2, 5, 9])
obj.count
// 3
obj.sum
// 16


Since the thisArg parameter (this) is provided to forEach(), it is passed to callback each time it's invoked. The callback uses it as its this value.
```

```
Note: If passing the callback function used an arrow function expression, the thisArg parameter could be omitted, since all arrow functions lexically bind the this value.
```

> > **An object copy function**

- The following code creates a copy of a given object.

- There are different ways to create a copy of an object. The following is just one way and is presented to explain how Array.prototype.forEach() works by using ECMAScript 5 Object.\* meta property functions.

```
function copy(obj) {
  const copy = Object.create(Object.getPrototypeOf(obj))
  const propNames = Object.getOwnPropertyNames(obj)

  propNames.forEach(function(name) {
    const desc = Object.getOwnPropertyDescriptor(obj, name)
    Object.defineProperty(copy, name, desc)
  })

  return copy
}

const obj1 = { a: 1, b: 2 }
const obj2 = copy(obj1) // obj2 looks like obj1 now
```

> > **Modifying the array during iteration**

- When the entry containing the value two is reached, the first entry of the whole array is shifted off—resulting in all remaining entries moving up one position. Because element four is now at an earlier position in the array, three will be skipped.

- forEach() does not make a copy of the array before iterating.

```
let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
  console.log(word)
  if (word === 'two') {
    words.shift() //'one' will delete from array
  }
}) // one // two // four

console.log(words);  //['two', 'three', 'four']
```

> > **Flatten an array**

- The following example is only here for learning purpose. If you want to flatten an array using built-in methods you can use Array.prototype.flat().

```
function flatten(arr) {
  const result = []

  arr.forEach(function(i) {
    if (Array.isArray(i)) {
      result.push(...flatten(i))
    } else {
      result.push(i)
    }
  })

  return result
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]

flatten(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
