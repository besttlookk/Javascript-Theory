# Handling text — Strings in JavaScript

- The String object is used to represent and manipulate a sequence of characters.
- Strings are useful for holding data that can be represented in text form.

## Creating strings

- Strings can be created as **primitives, from string literals**, or as **objects, using the String() constructor:**

```
const string1 = "A string primitive";
```

```
const string2 = new String("A String object");
```

- String primitives and string objects can be used interchangeably in most situations.
- String literals can be specified using **single or double quotes**, which are treated identically, or using the backtick character "`".
- This last form specifies a **template literal**: with this form you can interpolate expressions.

## Finding the length of a string

```
let browserType = 'mozilla';
browserType.length;   // 7
```

## Retrieving a specific string character

- You can return any character inside a string by using square bracket notation — this means you include square brackets ([]) on the end of your variable name.
- Inside the square brackets you include the number of the character you want to return, so for example to retrieve the first letter you'd do this:

```
browserType[0];  // m
```

- To retrieve the last character of any string, we could use the following line, combining this technique with the length property we looked at above:

```
browserType[browserType.length-1]; // a
```

## Useful string methods

- Most things are objects in JavaScript. When you create a string, your variable becomes a **string object instance**, and as a result has a large number of properties and methods available to it.

```

let string = 'This is my string';

```

```

string.__proto__   // String

```

| Methods             | Description                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| charAt()            | It provides the char value present at the specified index.                                                            |
| charCodeAt()        | It provides the Unicode value of a character present at the specified index.                                          |
| concat()            | It provides a combination of two or more strings.                                                                     |
| indexOf()           | It provides the position of a char value present in the given string.                                                 |
| lastIndexOf()       | It provides the position of a char value present in the given string by searching a character from the last position. |
| search()            | It searches a specified regular expression in a given string and returns its position if a match occurs.              |
| match()             | It searches a specified regular expression in a given string and returns that regular expression if a match occurs.   |
| replace()           | It replaces a given string with the specified replacement.                                                            |
| substr()            | It is used to fetch the part of the given string on the basis of the specified starting position and length.          |
| substring()         | It is used to fetch the part of the given string on the basis of the specified index.                                 |
| slice()             | It is used to fetch the part of the given string. It allows us to assign positive as well negative index.             |
| toLowerCase()       | It converts the given string into lowercase letter.                                                                   |
| toLocaleLowerCase() | It converts the given string into lowercase letter on the basis of host?s current locale.                             |
| toUpperCase()       | It converts the given string into uppercase letter.                                                                   |
| toLocaleUpperCase() | It converts the given string into uppercase letter on the basis of host?s current locale.                             |
| toString()          | It provides a string representing the particular object.                                                              |
| valueOf()           | It provides the primitive value of string object.                                                                     |
| split()             | It splits a string into substring array, then returns that newly created array.                                       |
| trim()              | It trims the white space from the left and right side of the string.                                                  |

---

## String.prototype.at()

- The at() method takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset.
- This method allows for positive and negative integers.
- **Negative integers** count back from the last string character.
- Returns undefined if the given index can not be found.

#### **SYNTAX**

```
at(index)
```

#### **EXAMPLE**

```
// A function which returns the last character of a given string
function returnLast(arr) {
  return arr.at(-1);
}

let invoiceRef = 'myinvoice01';

console.log( returnLast(invoiceRef) );
// Logs: '1'

invoiceRef = 'myinvoice02';

console.log( returnLast(invoiceRef) );
// Logs: '2'
```

#### **COMPARING METHODS**

- we compare different ways to select the penultimate (last but one) character of a String.
- Whilst all below methods are valid, it highlights the succinctness and readability of the at() method.

```
const myString = 'Every green bus drives fast.';

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length-2);
console.log(lengthWay); // Logs: 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // Logs: 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // Logs: 't'
```

---

## String.prototype.charAt()

- The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.

#### **SYNTAX**

```
chatAt(index)
```

#### **PARAMETER**

- index
  - An integer between 0 and str.length - 1.
  - If the index cannot be converted to the integer or no index is provided, the default is 0, **so the first character of str is returned.**
  - Do NOT accept negative value. If given, empty string is returned.

#### **RETURN VALUE**

- A string representing the character (exactly one UTF-16 code unit) at the specified index.
- If index is out of range, charAt() returns an empty string.

#### **EXAMPLE**

```
var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'");
// No index was provided, used 0 as default

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
```

#### **OUTPUT**

```
The character at index 0   is B
The character at index 0   is B
The character at index 999   is ''
```

---

## String.prototype.concat()

- The concat() method concatenates the string arguments to the calling string and returns a new string.
- If the arguments are not of the type string, they are converted to string values before concatenating.
- It is **strongly recommended** that the assignment operators (+, +=) are used instead of the concat() method.

#### **SYNTAX**

```
concat(str1)
concat(str1, str2)
concat(str1, str2, ... , strN)
```

#### **EXAMPLE**

```
let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.

let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList)  // "Hello Venkat!"

"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"
```

---

## String.prototype.endsWith()

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

console.log(str.endsWith('question.'))  // true
console.log(str.endsWith('to be'))      // false
console.log(str.endsWith('to be', 19))  // true
```

---

## String.prototype.startsWith()

- The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

#### **SYNTAX**

```
startsWith(searchString)
startsWith(searchString, length)
```

#### **EXAMPLE**

```
//startswith
let str = 'To be, or not to be, that is the question.'

console.log(str.startsWith('To be'))          // true
console.log(str.startsWith('not to be'))      // false
console.log(str.startsWith('not to be', 10))  // true
```

---

## String.prototype.includes()

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

console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))             // true

```

---

## String.prototype.indexOf()

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
'Blue Whale'.indexOf('Blue')      // returns  0
'Blue Whale'.indexOf('Blute')     // returns -1
'Blue Whale'.indexOf('Whale', 0)  // returns  5
'Blue Whale'.indexOf('Whale', 5)  // returns  5
'Blue Whale'.indexOf('Whale', 7)  // returns -1
'Blue Whale'.indexOf('')          // returns  0
'Blue Whale'.indexOf('', 9)       // returns  9
'Blue Whale'.indexOf('', 10)      // returns 10
'Blue Whale'.indexOf('', 11)      // returns 10
```

#### **Checking occurrences**

- Note that **0 doesn't evaluate to true** and **-1 doesn't evaluate to false.** Therefore, when checking if a specific string exists within another string, the correct way to check would be:

```
'Blue Whale'.indexOf('Blue') !== -1  // true
'Blue Whale'.indexOf('Bloe') !== -1  // false
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

console.log(count)  // displays 4
```

---

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
'canal'.lastIndexOf('a');     // returns 3
'canal'.lastIndexOf('a', 2);  // returns 1
'canal'.lastIndexOf('a', 0);  // returns -1
'canal'.lastIndexOf('x');     // returns -1
'canal'.lastIndexOf('c', -5); // returns 0
'canal'.lastIndexOf('c', 0);  // returns 0
'canal'.lastIndexOf('');      // returns 5
'canal'.lastIndexOf('', 2);   // returns 2
```

---

## String.prototype.match()

- The match() method retrieves the result of matching a string against a regular expression.

#### **SYNTAX**

```
match(regexp)
```

- If regexp is a non-RegExp object, it is implicitly converted to a RegExp by using new RegExp(regexp).
- If you don't give any parameter and use the match() method directly, you will get an Array with an empty string: [""].

```
const str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
str1.match("number");   // "number" is a string. returns ["number"]
str1.match(NaN);        // the type of NaN is the number. returns ["NaN"]
str1.match(Infinity);   // the type of Infinity is the number. returns ["Infinity"]
str1.match(+Infinity);  // returns ["Infinity"]
str1.match(-Infinity);  // returns ["-Infinity"]
str2.match(65);         // returns ["65"]
str2.match(+65);        // A number with a positive sign. returns ["65"]
str3.match(null);       // returns ["null"]
```

---

## String.prototype.padEnd()

- The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.
- The padding is applied from the end of the current string.

#### **SYNTAX**

```
padEnd(targetLength)
padEnd(targetLength, padString)
```

#### **PARAMETERS**

- **targetLength**

  - The **length of the resulting string** once the current str has been padded.
  - If the value is lower than str.length, the current string will be returned as-is.

- **padString** (Optional)
  - The string to pad the current str with.
  - If padString is too long to stay within targetLength, it will be truncated

#### **RETURN VALUE**

- A String of the specified targetLength with the padString applied at the end of the current str.

#### **EXAMPLE**

```
'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
```

---

## String.prototype.padStart()

- The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
- The padding is applied from the start of the current string.

#### **SYNTAX**

```
padStart(targetLength)
padStart(targetLength, padString)
```

#### **EXAMPLE**

```
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

#### **USE**

```
const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "************5581"

```

---

## String.prototype.repeat()

- The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, **concatenated together.**

#### **SYNTAX**

```
repeat(count)
```

- repeat count must be non-negative.(RangeError)
- repeat count must be less than infinity and not overflow maximum string size.(RangeCount)

#### **EXAMPLE**

```
'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0)   // RangeError

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2)
// 'abcabc' (repeat() is a generic method)
```

---

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
console.log(newstr);  // Twas the night before Christmas...
```

```
let re = /apples/gi;
let str = 'Apples are round, and apples are juicy.';
let newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.
```

---

## String.prototype.search()

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
console.log(str2)  // OUTPUT: he morn
console.log(str3)  // OUTPUT: morning is upon u
console.log(str4)  // OUTPUT: is upon us.
console.log(str5)  // OUTPUT: ""
```

```
let str = 'The morning is upon us.'
str.slice(-3)      // returns 'us.'
str.slice(-3, -1)  // returns 'us'
str.slice(0, -1)   // returns 'The morning is upon us'
```

---

## String.prototype.substring()

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
console.log(text.substring(5, 2))  // => "zil"
console.log(text.slice(5, 2))      // => ""
```

- If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.

```
console.log(text.substring(-5, 2))  // => "Mo"
console.log(text.substring(-5, -2)) // => ""
```

- slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

```
console.log(text.slice(-5, 2))   // => ""
console.log(text.slice(-5, -2))  // => "zil"
```

---

## String.prototype.split()

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

## String.prototype.toString()

- The toString() method returns a string representing the specified object.

#### **SYNTAX**

```
toString()
```

#### **EXAMPLE**

```
const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.toString());
// expected output: "foo"
```

---

## String.prototype.trim()

- The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

#### **SYNTAX**

```
trim()
```

#### **EXAMPLE**

```
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";
```

## String.prototype.trimStart()

- The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method

#### **SYNTAX**

```
trimStart()

trimLeft()
```

#### **EXAMPLE**

```
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// expected output: "Hello world!   ";
```

```
var str = '   foo  ';

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str);        // 'foo  '
```

---

## String.prototype.trimEnd()

- The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.

#### **SYNTAX**

```
trimEnd()

trimRight()
```

#### **EXAMPLE**

```
var str = '   foo  ';

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str);        // '   foo'
```

---

## String.prototype.valueOf()

- The valueOf() method returns the primitive value of a String object.

#### **SYNTAX**

```
valueOf()
```

- This value is equivalent to String.prototype.toString().

#### **EXAMPLE**

```
const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.valueOf());
// expected output: "foo"
```
