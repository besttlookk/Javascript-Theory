# String.prototype.charAt()

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
console.log("The character at index 0 is '" + anyString.charAt() + "'");
// No index was provided, used 0 as default

console.log("The character at index 0 is '" + anyString.charAt(0) + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");

```

#### **OUTPUT**

```

The character at index 0 is B
The character at index 0 is B
The character at index 999 is ''

```

> > **Displaying characters at different locations in a string**

- The following example displays characters at different locations in the string "Brave new world":

```
var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'");
// No index was provided, used 0 as default

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
```

- These lines display the following:

```
The character at index 0   is 'B'

The character at index 0   is 'B'
The character at index 1   is 'r'
The character at index 2   is 'a'
The character at index 3   is 'v'
The character at index 4   is 'e'
The character at index 999 is ''
```
