# Array.prototype.keys()

- The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
- Return a new Array iterator object.

#### **SYNTAX**

```
keys()
```

#### **EXAMPLES**

> > **Key iterator doesn't ignore holes**

```
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
