# Array.prototype.every()

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
