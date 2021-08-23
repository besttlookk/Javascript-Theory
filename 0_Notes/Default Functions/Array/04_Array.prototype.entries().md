# Array.prototype.entries()

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
