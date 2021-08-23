# Array.isArray()

- The Array.isArray() method determines whether the passed value is an Array.
- Returns true if the value is an Array; otherwise, false.

#### **SYNTAX**

```
Array.isArray(value)
```

#### **EXAMPLES**

> > **Using Array.isArray**

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

> > **instanceof vs isArray**

- When checking for Array instance, Array.isArray is preferred over instanceof because it works through iframes.

```
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
