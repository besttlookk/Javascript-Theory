# Number.prototype.toFixed()

- The toFixed() method formats a number using fixed-point notation.

#### **SYNTAX**

```
toFixed()
toFixed(digits)
```

- **digits Optional**
  - The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0.

### Exceptions

- RangeError

  - If digits is too small or too large. Values between 0 and 100, inclusive, will not cause a RangeError. Implementations are allowed to support larger and smaller values as chosen.

- TypeError
  - If this method is invoked on an object that is not a Number.

`Warning: Floating point numbers cannot represent all decimals precisely in binary. This can lead to unexpected results, such as 0.1 + 0.2 === 0.3 returning false `

### Description

- toFixed() returns a string representation of numObj that does not use exponential notation and has exactly digits digits after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length. If the absolute value of numObj is greater or equal to 1e+21, this method calls Number.prototype.toString() and returns a string in exponential notation

#### **EXAMPLE**

```
let numObj = 12345.6789

numObj.toFixed()       // Returns '12346': note rounding, no fractional part
numObj.toFixed(1)      // Returns '12345.7': note rounding
numObj.toFixed(6)      // Returns '12345.678900': note added zeros
(1.23e+20).toFixed(2)  // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2)  // Returns '0.00'
2.34.toFixed(1)        // Returns '2.3'
2.35.toFixed(1)        // Returns '2.4'. Note it rounds up
2.55.toFixed(1)        // Returns '2.5'. Note it rounds down - see warning above
-2.34.toFixed(1)       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
(-2.34).toFixed(1)     // Returns '-2.3'
```
