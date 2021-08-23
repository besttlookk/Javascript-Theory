# String.prototype.substring()

- The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

#### **SYNTAX**

```

substring(indexStart)
substring(indexStart, indexEnd)

```

- If indexEnd is omitted, substring() extracts characters to the end of the string.
- If indexStart is equal to indexEnd, substring() returns an empty string.
- If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped;
- Any argument value that is **less than 0** or greater than stringName.length is treated as if it were 0 and stringName.length, respectively.
- Any argument value that is NaN is treated as if it were 0.

#### **EXAMPLE**

```

let anyString = 'Mozilla'

// Displays 'M'
console.log(anyString.substring(0, 1))
console.log(anyString.substring(1, 0))

// Displays 'Mozill'
console.log(anyString.substring(0, 6))

// Displays 'lla'
console.log(anyString.substring(4))
console.log(anyString.substring(4, 7))
console.log(anyString.substring(7, 4))

// Displays 'Mozilla'
console.log(anyString.substring(0, 7))
console.log(anyString.substring(0, 10))

```

- Differences between substring() and slice()
  - There are a couple of subtle differences between the two, especially in the way negative arguments are dealt with.
- The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.

```

let text = 'Mozilla'
console.log(text.substring(5, 2)) // => "zil"
console.log(text.slice(5, 2)) // => ""

```

- If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.

```

console.log(text.substring(-5, 2)) // => "Mo"
console.log(text.substring(-5, -2)) // => ""

```

- slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

```

console.log(text.slice(-5, 2)) // => ""
console.log(text.slice(-5, -2)) // => "zil"

```

---
