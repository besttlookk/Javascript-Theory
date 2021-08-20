# Number.parseFloat()

- The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

#### **SYNTAX**

```
Number.parseFloat(string)

string
The value to parse. If this argument is not a string, then it is converted to one using the ToString abstract operation. Leading whitespace in this argument is ignored.
```

#### **Return value**

- A floating point number parsed from the given string.

- Or NaN when the first non-whitespace character cannot be converted to a number.

### Number.parseFloat vs parseFloat

- This method has the same functionality as the global parseFloat() function:

```
Number.parseFloat === parseFloat; // true
```

This method is also part of ECMAScript 2015. (Its purpose is modularization of globals.)
