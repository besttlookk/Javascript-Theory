# Number.prototype.toPrecision()

- The toPrecision() method returns a string representing the Number object to the specified precision.

#### **SYNTAX**

```
toPrecision()
toPrecision(precision)

precision Optional
An integer specifying the number of significant digits.
```

#### **Return value**

- A string representing a Number object in fixed-point or exponential notation rounded to precision significant digits. See the discussion of rounding in the description of the Number.prototype.toFixed() method, which also applies to toPrecision().

- If the precision argument is omitted, behaves as Number.prototype.toString(). If the precision argument is a non-integer value, it is rounded to the nearest integer.

#### **EXAMPLES**

```
let numObj = 5.123456

console.log(numObj.toPrecision())    // logs '5.123456'
console.log(numObj.toPrecision(5))   // logs '5.1235'
console.log(numObj.toPrecision(2))   // logs '5.1'
console.log(numObj.toPrecision(1))   // logs '5'

numObj = 0.000123

console.log(numObj.toPrecision())    // logs '0.000123'
console.log(numObj.toPrecision(5))   // logs '0.00012300'
console.log(numObj.toPrecision(2))   // logs '0.00012'
console.log(numObj.toPrecision(1))   // logs '0.0001'

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)) // logs '1.2e+3'
```
