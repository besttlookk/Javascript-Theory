# Array.prototype.map()

- The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
- Returns a new array with each element being the result of the callback function.
- You shouldn't be using map if:
  - you're not using the array it returns; and/or
  - you're not returning a value from the callback.
  - use forEach or for...of instead.

#### **SYNTAX**

```
// Arrow function
map((element) => { ... } )
map((element, index) => { ... } )
map((element, index, array) => { ... } )

// Callback function
map(callbackFn)
map(callbackFn, thisArg)
```

- map calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results. callbackFn is invoked only for indexes of the array which have assigned values (including undefined).

- It is not called for missing elements of the array; that is:
  - indexes that have never been set;
  - indexes which have been deleted.

### When not to use map()

Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; use forEach or for...of instead.

You shouldn't be using map if:

- you're not using the array it returns; and/or
- you're not returning a value from the callback.

#### **EXAMPLES**

> > **Mapping an array of numbers to an array of square roots**

- The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.

```
let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
```

> > **Using map to reformat objects in an array**

- The following code takes an array of objects and creates a new array containing the newly reformatted objects.

```
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

> > **Mapping an array of numbers using a function containing an argument**

- The following code shows how map works when a function requiring one argument is used with it. The argument will automatically be assigned from each element of the array as map loops through the original array.

```
let numbers = [1, 4, 9]
let doubles = numbers.map(function(num) {
  return num * 2
})

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]
```

```
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

---
