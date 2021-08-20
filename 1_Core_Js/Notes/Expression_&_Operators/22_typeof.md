# Unary operator : typeof

#### **typeof**

- The typeof operator is used in either of the following ways:

```
typeof operand
typeof (operand)
```

- The typeof operator returns a string indicating the type of the unevaluated operand.
- operand is the string, variable, keyword, or object for which the type is to be returned.
- The parentheses are optional.

```
var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();

typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
typeof doesntExist; // returns "undefined"
```

```
For the keywords true and null, the typeof operator returns the following results:

typeof true; // returns "boolean"
typeof null; // returns "object"
```

```
For property values, the typeof operator returns the type of value the property contains:

typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"
```

```
For methods and functions, the typeof operator returns results as follows:
typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"
```

```
For predefined objects, the typeof operator returns results as follows:

typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"
```

### typeof null

```
// This stands since the beginning of JavaScript
typeof null === 'object';
```

### Need for parentheses in Syntax

```
// Parentheses can be used for determining the data type of expressions.
let iData = 99;

typeof iData + ' Wisen'; // 'number Wisen'
typeof (iData + ' Wisen'); // 'string'
```
