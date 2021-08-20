# String.prototype.search()

- The search() method executes a search for a match between a regular expression and this String object.
- It returns the index of the first match between the regular expression and the given string, or -1 if no match was found.

#### **SYNTAX**

```

search(regexp)

```

#### **EXAMPLE**

```

let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re)) // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)) // returns -1 cannot find '.' dot punctuation

```

```

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."

```

---
