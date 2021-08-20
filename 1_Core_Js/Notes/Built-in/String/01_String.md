# String() constructor

- The String constructor is used to create a new String object.
- When called instead as a function, it performs type conversion to a primitive string, which is usually more useful.

#### **SYNTAX**

```
new String(thing)
String(thing)
```

#### **EXAMPLES**

> > **String constructor and String function**

- String function and String constructor produce different results:

```
typeof String('Hello world'); // string
typeof new String('Hello world'); // object
```

- Here, the function produces a string (the primitive type) as promised. However, the constructor produces an instance of the type String (an object wrapper) and that's why you rarely want to use the String constructor at all.

## String length

- The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
- For an empty string, length is 0.

- This property returns the number of code units in the string. UTF-16, the string format used by JavaScript, uses a single 16-bit code unit to represent the most common characters, but needs to use two code units for less commonly-used characters, so it's possible for the value returned by length to not match the actual number of characters in the string.

ECMAScript 2016 (ed. 7) established a maximum length of 2^53 - 1 elements. Previously, no maximum length was specified. In Firefox, strings have a maximum length of 2**30 - 2 (~1GB). In versions prior to Firefox 65, the maximum length was 2**28 - 1 (~256MB).

For an empty string, length is 0.

The static property String.length is unrelated to the length of strings, it's the arity of the String function (loosely, the number of formal parameters it has), which is 1.

## Unicode

- Since `length` counts code units instead of characters, if you want to get the number of characters you need something like this:

```
function getCharacterLength (str) {
  // The string iterator that is used here iterates over characters,
  //  not mere code units
  return [...str].length;
}

console.log(getCharacterLength('A\uD87E\uDC04Z')); // 3

// While not recommended, you could add this to each string as follows:

Object.defineProperty(String.prototype, 'charLength', {
  get () {
    return getCharacterLength(this);
  }
});

console.log('A\uD87E\uDC04Z'.charLength); // 3
```

#### **EXAMPLES**

> > **Basic usage**

```
let x = 'Mozilla';
let empty = '';

console.log(x + ' is ' + x.length + ' code units long');
/* "Mozilla is 7 code units long" */

console.log('The empty string has a length of ' + empty.length);
// expected output: "The empty string has a length of 0"

```

> > **Assigning to length**

```
let myString = "bluebells";

// Attempting to assign a value to a string's .length property has no observable effect.
myString.length = 4;
console.log(myString);
// expected output: "bluebells"
console.log(myString.length);
// expected output: 9
```

--- # Handling text — Strings in JavaScript

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

string.**proto** // String

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
