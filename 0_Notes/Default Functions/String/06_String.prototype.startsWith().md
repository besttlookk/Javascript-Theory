# String.prototype.startsWith()

- The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
- return true if the given characters are found at the beginning of the string; otherwise, false.

#### **SYNTAX**

```

startsWith(searchString)
startsWith(searchString, length)

```

- **position Optional**
  - The position in this string at which to begin searching for searchString. Defaults to 0.

#### **EXAMPLE**

```

//startswith
let str = 'To be, or not to be, that is the question.'

console.log(str.startsWith('To be')) // true
console.log(str.startsWith('not to be')) // false
console.log(str.startsWith('not to be', 10)) // true

```

---
