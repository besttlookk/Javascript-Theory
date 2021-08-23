# Array.from()

- The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
- returns a new Array instance.

#### **SYNTAX**

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

- Array.from() lets you create Arrays from:

  - array-like objects (objects with a length property and indexed elements); or
  - iterable objects (objects such as Map and Set).

- Array.from() has an optional parameter mapFn, which allows you to execute a map() function on each element of the array being created.

- More clearly, Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg), except that it does not create an intermediate array, and mapFn only receives two arguments (element, index).

`Note: This is especially important for certain array subclasses, like typed arrays, since the intermediate array would necessarily have values truncated to fit into the appropriate type.`

- The length property of the from() method is 1.

- In ES2015, the class syntax allows sub-classing of both built-in and user-defined classes. As a result, static methods such as Array.from() are "inherited" by subclasses of Array, and create new instances of the subclass, not Array.

#### **EXAMPLES**

> > **Array from a String**

```
Array.from('foo');
// [ "f", "o", "o" ]
```

> > **Array from a Set**

```
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

> > **Array from a Map**

```
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

> > **Array from a NodeList**

```
Array from a NodeList
// Create an array based on a property of DOM Elements
const images = document.getElementsByTagName('img');
const sources = Array.from(images, image => image.src);
const insecureSources = sources.filter(link => link.startsWith('http://'));
```

> > **Array from an Array-like object (arguments)**

```
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

> > **Using arrow functions and Array.from()**

```
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

```
var set = new Set(['C','C++','Java','C','Java','C++','Python','Perl']); //A set of different values.
console.log(Array.from(set))  // [ 'C', 'C++', 'Java', 'Python', 'Perl' ]

Example 2:
console.log(Array.from({length: 9}, (v, i) => i)) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
```
