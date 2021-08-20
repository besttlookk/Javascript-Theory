## String.prototype.replace()

- The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
- The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
- If pattern is a string, only the first occurrence will be replaced.

#### **SYNTAX**

```

replace(regexp, newSubstr)
replace(regexp, replacerFunction)

replace(substr, newSubstr)
replace(substr, replacerFunction)

```

#### **EXAMPLE**

```

let str = 'Twas the night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr); // Twas the night before Christmas...

```

```

let re = /apples/gi;
let str = 'Apples are round, and apples are juicy.';
let newstr = str.replace(re, 'oranges');
console.log(newstr); // oranges are round, and oranges are juicy.

```

---
