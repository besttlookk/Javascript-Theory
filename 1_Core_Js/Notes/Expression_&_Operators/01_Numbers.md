# Numbers

- Unlike some other programming languages, **JavaScript only has one data type for numbers,** both integers and decimals — you guessed it, Number.
- This means that whatever type of numbers you are dealing with in JavaScript, you handle them in exactly the same way.

```
Note: Actually, JavaScript has a second number type, BigInt, used for very, very large integers.
```

## Useful Number methods

- The Number object, an instance of which represents all standard numbers you'll use in your JavaScript, has a number of useful methods available on it for you to manipulate numbers.

| Methods         | Description                                                                             |
| --------------- | --------------------------------------------------------------------------------------- |
| isNaN()         | Determine whether the passed value is NaN.                                              |
| isFinite()      | It determines whether the given value is a finite number.                               |
| isInteger()     | It determines whether the given value is an integer.                                    |
| parseFloat()    | It converts the given string into a floating point number.                              |
| parseInt()      | It converts the given string into an integer number.                                    |
| toExponential() | It returns the string that represents exponential notation of the given number.         |
| toFixed()       | It returns the string that represents a number with exact digits after a decimal point. |
| toPrecision()   | It returns the string representing a number of specified precision.                     |
| toString()      | It returns the given number in the form of string.                                      |

## Converting to number data types

| Method(Global) | Description                                             |
| -------------- | ------------------------------------------------------- |
| Number()       | Returns a number, converted from its argument.          |
| parseFloat()   | Parses its argument and returns a floating point number |
| parseInt()     | Parses its argument and returns an integer              |
