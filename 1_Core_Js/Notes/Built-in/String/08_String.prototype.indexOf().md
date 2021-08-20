# String.prototype.indexOf()

- The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.
- **Returns -1 if the value is not found.**

#### **SYNTAX**

```

indexOf(searchValue)
indexOf(searchValue, fromIndex)

```

- If no string is explicitly provided, searchValue will be coerced to "undefined", and this value will be searched for in str.
- **fromIndex**:
  - An integer representing the index at which to start the search. Defaults to 0.
  - For fromIndex values lower than 0, or greater than str.length, the search starts at index 0 and str.length, respectively.

#### **RETURN VALUE**

- The index of the **first occurrence of searchValue**, or **-1 if not found.**

- An **empty string searchValue produces strange results.** With no fromIndex value, or any fromIndex value lower than the string's length, the **returned value is the same as the fromIndex value:**

```

'hello world'.indexOf('') // returns 0
'hello world'.indexOf('', 0) // returns 0
'hello world'.indexOf('', 3) // returns 3
'hello world'.indexOf('', 8) // returns 8

```

- However, with **any fromIndex value equal to or greater than the string's length, the returned value is the string's length:**

```

'hello world'.indexOf('', 11) // returns 11
'hello world'.indexOf('', 13) // returns 11
'hello world'.indexOf('', 22) // returns 11

```

- In the former instance, JS seems to find an empty string just after the specified index value. In the latter instance, JS seems to be finding an empty string at the end of the searched string.

#### **EXAMPLE**

```

'Blue Whale'.indexOf('Blue') // returns 0
'Blue Whale'.indexOf('Blute') // returns -1
'Blue Whale'.indexOf('Whale', 0) // returns 5
'Blue Whale'.indexOf('Whale', 5) // returns 5
'Blue Whale'.indexOf('Whale', 7) // returns -1
'Blue Whale'.indexOf('') // returns 0
'Blue Whale'.indexOf('', 9) // returns 9
'Blue Whale'.indexOf('', 10) // returns 10
'Blue Whale'.indexOf('', 11) // returns 10

```

#### **Checking occurrences**

- Note that **0 doesn't evaluate to true** and **-1 doesn't evaluate to false.** Therefore, when checking if a specific string exists within another string, the correct way to check would be:

```

'Blue Whale'.indexOf('Blue') !== -1 // true
'Blue Whale'.indexOf('Bloe') !== -1 // false

```

#### Using indexOf() to count occurrences of a letter in a string

```

const str = 'To be, or not to be, that is the question.'
let count = 0
let position = str.indexOf('e')

while (position !== -1) {
count++
position = str.indexOf('e', position + 1)
}

console.log(count) // displays 4

```

---
