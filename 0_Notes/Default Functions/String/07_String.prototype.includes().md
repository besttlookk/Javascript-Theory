# String.prototype.includes()

- The includes() method performs a **case-sensitive search** to determine whether one string may be found within another string, **returning true or false as appropriate.**

#### **SYNTAX**

```

includes(searchString)
includes(searchString, position)

```

- position: The position within the string at which to begin searching for searchString. (Defaults to 0.)

#### **EXAMPLE**

```

const str = 'To be, or not to be, that is the question.'

console.log(str.includes('To be')) // true
console.log(str.includes('question')) // true
console.log(str.includes('nonexistent')) // false
console.log(str.includes('To be', 1)) // false
console.log(str.includes('TO BE')) // false
console.log(str.includes('')) // true

```

---
