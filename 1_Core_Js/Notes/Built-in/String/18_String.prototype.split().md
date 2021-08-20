# String.prototype.split()

- The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
- The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

#### **SYNTAX**

```

split()
split(separator)
split(separator, limit)

```

- If separator contains multiple characters, that entire character sequence must be found in order to split.
- If separator is omitted or does not occur in str, the returned array contains one element consisting of the entire string.
- If separator appears at the beginning (or end) of the string, it still has the effect of splitting. The result is an empty (i.e. zero length) string, which appears at the first (or last) position of the returned array.
- If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".
- A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.
- If limit is 0, [] is returned.

#### **EXAMPLE**

```

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

```

---
