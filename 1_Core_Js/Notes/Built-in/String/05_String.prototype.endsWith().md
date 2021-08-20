# String.prototype.endsWith()

- The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
- This method is **case-sensitive.**

#### **SYNTAX**

```

endsWith(searchString)
endsWith(searchString, length)

```

- **length** (Optional): If provided, it is used as the length of str. Defaults to **str.length.**

#### **EXAMPLE**

```

let str = 'To be, or not to be, that is the question.'

console.log(str.endsWith('question.')) // true
console.log(str.endsWith('to be')) // false
console.log(str.endsWith('to be', 19)) // true

```

---
