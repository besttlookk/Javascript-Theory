## String.prototype.slice()

- The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

#### **SYNTAX**

```

slice(beginIndex)
slice(beginIndex, endIndex)

```

#### **EXAMPLE**

```

let str1 = 'The morning is upon us.', // the length of str1 is 23.
str2 = str1.slice(1, 8),
str3 = str1.slice(4, -2),
str4 = str1.slice(12),
str5 = str1.slice(30);
console.log(str2) // OUTPUT: he morn
console.log(str3) // OUTPUT: morning is upon u
console.log(str4) // OUTPUT: is upon us.
console.log(str5) // OUTPUT: ""

```

```

let str = 'The morning is upon us.'
str.slice(-3) // returns 'us.'
str.slice(-3, -1) // returns 'us'
str.slice(0, -1) // returns 'The morning is upon us'

```

---
