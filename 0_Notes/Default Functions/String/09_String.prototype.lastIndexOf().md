## String.prototype.lastIndexOf()

- The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

#### **SYNTAX**

```

lastIndexOf(searchValue)
lastIndexOf(searchValue, fromIndex)

```

- **fromIndex** (Optional)
  - The index of the last character in the string to be considered as the beginning of a match.
  - The default value is +Infinity. If fromIndex >= str.length, the whole string is searched. If fromIndex < 0, the behavior will be the same as if it would be 0.

#### **EXAMPLE**

```

'canal'.lastIndexOf('a'); // returns 3
'canal'.lastIndexOf('a', 2); // returns 1
'canal'.lastIndexOf('a', 0); // returns -1
'canal'.lastIndexOf('x'); // returns -1
'canal'.lastIndexOf('c', -5); // returns 0
'canal'.lastIndexOf('c', 0); // returns 0
'canal'.lastIndexOf(''); // returns 5
'canal'.lastIndexOf('', 2); // returns 2

```

---
