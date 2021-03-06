# Number.prototype.toString()

- The toString() method returns a string representing the specified Number object.

#### **SYNTAX**

```
toString()
toString(radix)

radix Optional
An integer in the range 2 through 36 specifying the base to use for representing numeric values.
```

#### **Description**

- The Number object overrides the toString() method of the Object object. (It does not inherit Object.prototype.toString()). For Number objects, the toString() method returns a string representation of the object in the specified radix.

- The toString() method parses its first argument, and attempts to return a string representation in the specified radix (base). For radices above 10, the letters of the alphabet indicate numerals greater than 9. For example, for hexadecimal numbers (base 16), a through f are used.

- If the radix is not specified, the preferred radix is assumed to be 10.

- If the numObj is negative, the sign is preserved. This is the case even if the radix is 2; the string returned is the positive binary representation of the numObj preceded by a - sign, not the two's complement of the numObj.

- If the numObj is not a whole number, the 'dot' sign is used to separate the decimal places.

#### **EXAMPLES**

```
let count = 10

console.log(count.toString())    // displays '10'
console.log((17).toString())     // displays '17'
console.log((17.2).toString())   // displays '17.2'

let x = 6

console.log(x.toString(2))       // displays '110'
console.log((254).toString(16))  // displays 'fe'

console.log((-10).toString(2))   // displays '-1010'
console.log((-0xff).toString(2)) // displays '-11111111'
```
