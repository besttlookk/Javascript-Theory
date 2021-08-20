# Array.prototype.join()

- The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
- return A string with all array elements joined. If arr.length is 0, the empty string is returned.

#### **SYNTAX**

```
join()
join(separator)
```

`Warning: If an element is undefined, null or an empty array [], it is converted to an empty string.`

#### **EXAMPLES**

> > **Joining an array four different ways**

- The following example creates an array, a, with three elements, then joins the array four times: using the default separator, then a comma and a space, then a plus and an empty string.

```
var a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'
```

> > **Joining an array-like object**

- The following example joins array-like object (arguments), by calling Function.prototype.call on Array.prototype.join.

```
function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
//expected output: "1,a,true"
```
