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

#### **EXAMPLES**

> > **Number.isNaN**

```
console.log(Number.isNaN(23)); //false(bcoz it is a number)
console.log(Number.isNaN("23")); //false
console.log(Number.isNaN("23f")); // false
console.log(Number.isNaN("abc")); //false (vallue)
console.log(Number.isNaN(+"20px")); //true (here we are trying coersion: but result is NaN )
console.log(Number.isNaN(20 / 0)); // false (infinity)

this is not the best eay to check for number< Better way: isFinite()
```

> > **Number.isFinite()**

```
console.log(Number.isFinite(23)); // true
console.log(Number.isFinite("23")); //false
console.log(Number.isFinite("23f")); // false
console.log(Number.isFinite("abc")); // false
console.log(Number.isFinite(+"20px")); // false
console.log(Number.isFinite(20 / 0)); // false
```

> > **Number.isInteger**

- if you are sure that the value is number..then this method is good
- Determine whether the passed value is an integer.

```
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(0.2)); // false
console.log(Number.isInteger(20.2)); //false
console.log(Number.isInteger(20 / 0)); //false
```

> > \*\*bigInt

- to store any length number

```
console.log(2233333445566693939394); //2.233333445566694e+21(does not have precision)
console.log(2233333445566693939394n); // 2233333445566693939394(adding n conver it into bigInt)
console.log(BigInt(2233333445566693939394)); // 2233333445566693939394 (using bigInt function)
```

- all the usual operatior still works the same

```
console.log(1000n + 2000n); // 3000
console.log(typeof (1000n + 2000n)); // bigInt
```

- it is not possible to mix bigInt to regular number
- Math operators will not work with bigInt

```
console.log(Math.sqrt(16n)); //ERROR: cannot convert bigInt to number

console.log(3 / 2); //1.5
console.log(3n / 2n); //1(cuts off decimal part)
```

## Internationlize number

```
const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  // useGrouping: false,
};

console.log("US:      ", new Intl.NumberFormat("en-US", options).format(num)); // US:       €3,884,764.23
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num)); // Germany:  3.884.764,23 €
console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
```

#### **SUMMARY**

| Methods                                                                 | Description                                                                             |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| isFinite()                                                              | It determines whether the given value is a finite number.                               |
| isInteger()                                                             | It determines whether the given value is an integer.                                    |
| parseFloat() It converts the given string into a floating point number. |
| parseInt()                                                              | It converts the given string into an integer number.                                    |
| toExponential()                                                         | It returns the string that represents exponential notation of the given number.         |
| toFixed()                                                               | It returns the string that represents a number with exact digits after a decimal point. |
| toPrecision()                                                           | It returns the string representing a number of specified precision.                     |
| toString()                                                              | It returns the given number in the form of string.                                      |
