# NUMBER

- Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.
- The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
- A number literal like 37 in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use. (JavaScript now has a BigInt type, but it was not designed to replace Number for everyday uses. 37 is still a Number, not a BigInt.)
- When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.

#### **Literal syntax**

```
123    // one-hundred twenty-three
123.0  // same
123 === 123.0  // true
```

#### **Function syntax**

```
Number('123')  // returns the number 123
Number('123') === 123  // true

Number("unicorn")  // NaN
Number(undefined)  // NaN
```

## Number() constructor

- The Number() constructor creates a Number object.

#### **SYNTAX**

```
new Number(value)

The numeric value of the object being created.
```

#### **EXAMPLES**

```
const a = new Number('123'); // a === 123 is false
const b = Number('123');     // b === 123 is true
a instanceof Number;         // is true
b instanceof Number;         // is false
```

### **Static properties**

- **Number.EPSILON**

  - The smallest interval between two representable numbers.

- **Number.MAX_SAFE_INTEGER**

  - The maximum safe integer in JavaScript (2^53 - 1).

- **Number.MAX_VALUE**

  - The largest positive representable number.

- **Number.MIN_SAFE_INTEGER**

  - The minimum safe integer in JavaScript (-(2^53 - 1)).

- **Number.MIN_VALUE**

  - The smallest positive representable number—that is, the positive number closest to zero (without actually being zero).

- **Number.NaN**

  - Special "Not a Number" value.

- **Number.NEGATIVE_INFINITY**

  - Special value representing negative infinity. Returned on overflow.

- **Number.POSITIVE_INFINITY**

  - Special value representing infinity. Returned on overflow.

- **Number.prototype**
  - Allows the addition of properties to the Number object.

---

### **Static methods**

- **Number.isNaN()**

  - Determine whether the passed value is NaN.

- **Number.isFinite()**

  - Determine whether the passed value is a finite number.

- **Number.isInteger()**

  - Determine whether the passed value is an integer.

- **Number.isSafeInteger()**

  - Determine whether the passed value is a safe integer (number between -(2^53 - 1) and 2^53 - 1).

- **Number.parseFloat(string)**

  - This is the same as the global parseFloat() function.

- **Number.parseInt(string, [radix])**
  - This is the same as the global parseInt() function.

---

### **Instance methods**

- **Number.prototype.toExponential(fractionDigits)**

  - Returns a string representing the number in exponential notation.

- **Number.prototype.toFixed(digits)**

  - Returns a string representing the number in fixed-point notation.

- **Number.prototype.toLocaleString([locales [, options]])**

  - Returns a string with a language sensitive representation of this number. Overrides the Object.prototype.toLocaleString() method.

- **Number.prototype.toPrecision(precision)**

  - Returns a string representing the number to a specified precision in fixed-point or exponential notation.

- **Number.prototype.toString([radix])**

  - Returns a string representing the specified object in the specified radix ("base"). Overrides the Object.prototype.toString() method.

- **Number.prototype.valueOf()**
  - Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.
