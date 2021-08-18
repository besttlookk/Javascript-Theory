# Javascript Operators

- JavaScript has the following types of operators:

  - Assignment operators
  - Comparison operators
  - Arithmetic operators
  - Bitwise operators
  - Logical operators
  - String operators
  - Conditional (ternary) operator
  - Comma operator
  - Unary operators
  - Relational operators

- JavaScript has both **binary** and **unary operators**, and one special **ternary operator, the conditional operator.**
- A binary operator requires two operands, one before the operator and one after the operator:

```
operand1 operator operand2
```

- A unary operator requires a single operand, either before or after the operator:

```
operator operand

    OR

operand operator

For example, x++ or ++x.
```

## Assignment Operators

- An assignment operator assigns a value to its left operand based on the value of its right operand.
- The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand.
- There are also compound assignment operators that are shorthand for the operations listed in the following

| Operator | Name                            | Example   | Shortcut for   |
| -------- | ------------------------------- | --------- | -------------- |
| =        | Assignment                      | x = y     | x = y          |
| +=       | Addition assignment             | x += 4;   | x = x + 4;     |
| -=       | Subtraction assignment          | x -= 3;   | x = x - 3;     |
| \*=      | Multiplication assignment       | x \*= 3;  | x = x \* 3;    |
| /=       | Division assignment             | x /= 5;   | x = x / 5;     |
| %=       | Remainder assignment            | x %= y    | x = x % y      |
| \*\*=    | Exponentiation assignment       | x \*\*= y | x = x \*\* y   |
| <<=      | Left shift assignment           | x <<= y   | x = x << y     |
| >>=      | Right shift assignment          | x >>= y   | x = x >> y     |
| >>>=     | Unsigned right shift assignment | x >>>= y  | x = x >>> y    |
| &=       | Bitwise AND assignment          | x &= y    | x = x & y      |
| ^=       | Bitwise XOR assignment          | x ^= y    | x = x ^ y      |
| \|=      | Bitwise OR assignment           | x \|= y   | x = x \| y     |
| &&=      | Logical AND assignment          | x &&= y   | x && (x = y)   |
| \|\|=    | Logical OR assignment           | x \|\|= y | x \|\| (x = y) |
| ??=      | Logical nullish assignment      | x ??= y   | x ?? (x = y)   |

#### **Return value and chaining**

- Like most expressions, assignments like x = y have a return value. It can be retrieved by e.g. assigning the expression or logging it:

```
const y = 5
const z = (x = y); // Or equivalently: const z = x = y;

console.log(z); // Log the return value of the assignment x = y. // 5
console.log(x = y); // Or log the return value directly. // 5
```

- The return value matches the expression to the right of the = sign.
- That means that (x = y) returns y, (x += y) returns the resulting sum x + y, (x **= y) returns the resulting power x ** y, and so on.
- In the case of logical assignments, (x &&= y), (x ||= y), and (x ??= y), the return value is that of the logical operation without the assignment, so x && y, x || y, and x ?? y, respectively.

- When chaining these expressions, each assignment is evaluated right-to-left. Consider these examples:

```
w = z = x = y is equivalent to w = (z = (x = y)) or x = y; z = y; w = y

z += x *= y is equivalent to z += (x *= y) or tmp = x * y; x *= y; z += tmp (except without the tmp).
```

#### **Destructuring**

- For more complex assignments, the destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals.

```
var foo = ['one', 'two', 'three'];

// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;
```

---

## Comparison operators

- A comparison operator compares its operands and **returns a logical value** based on whether the comparison is true.
- The operands can be numerical, string, logical, or object values.
- In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison. This behavior generally results in comparing the operands numerically.
- The sole exceptions to type conversion within comparisons involve the **=== and !== operators,** which perform **strict equality and inequality comparisons.** These operators do not attempt to convert the operands to compatible types before checking equality.

| Operator                  | Description                                                                                | Examples returning true |
| ------------------------- | ------------------------------------------------------------------------------------------ | ----------------------- |
| Equal(==)                 | Returns true if the operands are equal.                                                    | 3 == "3"                |
| Not Equal(!=)             | Returns true if the operands are not equal.                                                | 4 != "3"                |
| Strict Equal(===)         | Returns true if the operands are equal and of the same type.                               | var1 = 3 ; var1 === 3   |
| Strict Not Equal(!==)     | Returns true if the operands are of the same type but not equal, or are of different type. | var1 = 3; var1 !== 3    |
| Greater Than(>)           | Returns true if the left operand is greater than the right operand.                        | "12" > 2                |
| Less Than(<)              | Returns true if the left operand is less than the right operand.                           | "2" < 12                |
| Greater than or equal(>=) | Returns true if the left operand is greater than or equal to the right operand.            | "12" >= 12              |
| Less Than or Equal(<=)    | Returns true if the left operand is less than or equal to the right operand.               | 5 <= "5"                |

```
Note: => is not an operator, but the notation for Arrow functions.
```

```
 === : strict equality comperision(no coersion)
  == : loose equality comparision(allow type coersion)
```

```
let x = "John";
let y = new String("John");

// typeof x will return string
// typeof y will return object

(x == y) is "true" because x and y have equal values
(x === y) is "false" because x and y have different types (string and object)
```

- When using the === operator, equal values may not be equal, because the === operator expects equality in both data type and value.

```
NOTE: Objects cannot be compared
let x = new String("John");
let y = new String("John");

(x == y) is false because x and y are objects
```

- Comparing two JavaScript objects will always return false.

---

## Arithmetic operators

- An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value.

| Operator | Description                  |
| -------- | ---------------------------- |
| +        | Addition                     |
| -        | Subtraction                  |
| \*       | Multiplication               |
| \*\*     | Exponentiation (ES2016)      |
| /        | Division                     |
| %        | Modulus (Division Remainder) |
| ++       | Increment                    |
| --       | Decrement                    |

OTHER ARITHMETIC OPERATORS: Increment Operator(++), Decrement Operator(--), Unary Negation(-), Unary plus(+)

```
Note: You may sometimes see exponents expressed using the older Math.pow() method, which works in a very similar way. For example, in Math.pow(7, 3), 7 is the base and 3 is the exponent, so the result of the expression is 343. Math.pow(7, 3) is equivalent to 7**3.
```

## Increment(++) and decrement(--) operators

- For a start, note that you can't apply these directly to a number, which might seem strange, but we are assigning a variable a new updated value, not operating on the value itself.

```
The following will return an error:

3++;
```

- So, you can only increment an existing variable. Try this:

```
let num1 = 4;
num1++;  //  4 returns
```

- When you do this, you'll see a value of 4 returned — this is because the browser returns the current value, then increments the variable

- You can see that it's been incremented if you return the variable value again:

```
num1;   // 5
```

- The same is true of --

```
Note: You can make the browser do it the other way round — increment/decrement the variable then return the value — by putting the operator at the start of the variable instead of the end.
```

```
let num1 = 4;
++num1;  //  5 returns
```

- Both of increment and decrement operators have two versions: **prefix and postfix.**

- It’s important to note that the **prefix decrement**, the value of the variable changed before the statement is evaluated.

- The only difference between the postfix and prefix is that JavaScript doesn’t evaluate them until the containing statement has been evaluated.

## Unary operator

- The simplest operators in JavaScript are unary operators.
- A unary operator works on one operand. The unary operators in JavaScript are:
  - Unary plus (+) – convert an operand into a number
  - Unary minus (-) – convert an operand into a number and negate the value after that.
  - prefix / postfix increments (++) – add one to its operand
  - prefix / postfix decrements (--) – subtract one from its operand.

```
let a = 10;
a = +a; // 10
a = -a; // -10
```

- In case you apply the unary plus or minus on a non-numeric value, it performs the same conversion as the Number() function.

```
let s = '10';
console.log(+s); // 10

In this example, s is a string. However, when we placed the unary plus operator in front of it, the string s is converted to a number.
```

- The following example shows how the unary operator converts boolean values into numbers, false to 0 and true to 1.

```
let f = false,
    t = true;
console.log(+f); // 0
console.log(+t); // 1
```

- **Increment / Decrements operators**

```
let i = 10, j = 20;
let m = i-- + j;
console.log(m); // 30
console.log(i); // 9
```

```
i = 10;
let n = --i + j;
console.log(n); // 29
console.log(i); // 9
```

---

## Bitwise opeartor

- Bit operators work on 32 bits numbers.

- Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

| Operator | Description           | Example | Same as      | Result | Decimal |
| -------- | --------------------- | ------- | ------------ | ------ | ------- |
| &        | AND                   | 5 & 1   | 0101 & 0001  | 0001   | 1       |
| \|       | OR                    | 5 \| 1  | 0101 \| 0001 | 0101   | 5       |
| ~        | NOT                   | ~ 5     | ~0101        | 1010   | 10      |
| ^        | XOR                   | 5 ^ 1   | 0101 ^ 0001  | 0100   | 4       |
| <<       | Zero fill left shift  | 5 << 1  | 0101 << 1    | 1010   | 10      |
| >>       | Signed right shift    | 5 >> 1  | 0101 >> 1    | 0010   | 2       |
| >>>      | Zero fill right shift | 5 >>> 1 | 0101 >>> 1   | 0010   | 2       |

- **Bitwise XOR:(^)**

  - Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.]

```
Note that all 32 bits are inverted using the Bitwise NOT operator, and that values with the most significant (left-most) bit set to 1 represent negative numbers (two's-complement representation). ~x evaluates to the same value that -x - 1 evaluates to.

~15	-16	~ 0000 0000 ... 0000 1111 = 1111 1111 ... 1111 0000
~9	-10	~ 0000 0000 ... 0000 1001 = 1111 1111 ... 1111 0110
```

#### **Bitwise shift operators**

- The bitwise shift operators take two operands: the first is a quantity to be shifted, and the second specifies the number of bit positions by which the first operand is to be shifted.
- The direction of the shift operation is controlled by the operator used.

- Shift operators convert their operands to thirty-two-bit integers and return a **result of either type Number or BigInt**: specifically,
- if the type of the left operand is BigInt, they return BigInt; otherwise, they return Number.

- **Left shift( a << b):**
  - Shifts a in binary representation "b bits" to the left, shifting in zeros from the right.
  - Excess bits shifted off to the left are discarded.
  - Zero bits are shifted in from the right.

```
9<<2 yields 36, because 1001 shifted 2 bits to the left becomes 100100, which is 36.
```

- **Sign-propagating right shift( a >> b):**

  - This operator shifts the first operand the specified number of bits to the right.
  - Excess bits shifted off to the right are discarded.
  - Copies of the leftmost bit are shifted in from the left.

```
9>>2 yields 2, because 1001 shifted 2 bits to the right becomes 10, which is 2. Likewise, -9>>2 yields -3, because the sign is preserved.
```

- **Zero-fill right shift(a >>> b):**
  - This operator shifts the first operand the specified number of bits to the right.
  - Excess bits shifted off to the right are discarded.
  - Zero bits are shifted in from the left.

```
19>>>2 yields 4, because 10011 shifted 2 bits to the right becomes 100, which is 4. For non-negative numbers, zero-fill right shift and sign-propagating right shift yield the same result.
```

---

## Logical Operators

- Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value.
- However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value.

| Operator           | Usage            | Description                                                                                                                                                                                 |
| ------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logical AND (\&\&) | expr1 \&\& expr2 | Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, \&\& returns true if both operands are true; otherwise, returns false.        |
| Logical OR (\|\|)  | expr1 \|\| expr2 | Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, \|\| returns true if either operand is true; if both are false, returns false. |
| Logical NOT (\!)   | \!expr           | Returns false if its single operand that can be converted to true; otherwise, returns true.                                                                                                 |

```
FALSLY VALUE

Examples of expressions that can be converted to false are those that evaluate to null, 0, NaN, the empty string (""), or undefined.
```

```
The following code shows examples of the && (logical AND) operator.

var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = 'Cat' && 'Dog';    // t && t returns Dog
var a6 = false && 'Cat';    // f && t returns false
var a7 = 'Cat' && false;    // t && f returns false
```

```
The following code shows examples of the || (logical OR) operator.

var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = 'Cat' || 'Dog';    // t || t returns Cat
var o6 = false || 'Cat';    // f || t returns Cat
var o7 = 'Cat' || false;    // t || f returns Cat
```

```
The following code shows examples of the ! (logical NOT) operator.

var n1 = !true;  // !t returns false
var n2 = !false; // !f returns true
var n3 = !'Cat'; // !t returns false
```

#### **Short-circuit evaluation**

- As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:

```
  - false && anything is short-circuit evaluated to false.
  - true || anything is short-circuit evaluated to true.
```

```
Note that for the second case, in modern code you can use the new Nullish coalescing operator (??) that works like ||,

but it only returns the second expression, when the first one is "nullish", i.e. null or undefined.And Not falsly.

It is thus the better alternative to provide defaults, when values like '' or 0 are valid values for the first expression, too.
```

---

## JavaScript String Operators

- In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.
- The += assignment operator can also be used to add (concatenate) strings:
- When used on strings, the + operator is called the concatenation operator.

```
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2; //John Doe

The shorthand assignment operator += can also be used to concatenate strings.

let text1 = "What a very ";
text1 += "nice day"; What a very nice day
```

---

## Conditional (ternary) operator

- The conditional operator is the only JavaScript operator that takes three operands.
- The operator can have one of two values based on a condition.

#### **SYNTAX**

```
condition ? val1 : val2
```

#### **EXAMPLE**

```
var status = (age >= 18) ? 'adult' : 'minor';
```

- If condition is true, the operator has the value of val1. Otherwise it has the value of val2.

---

## Comma operator (,)

- The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand.
- This lets you create a compound expression in which multiple expressions are evaluated, with the compound expression's final value being the value of the rightmost of its member expressions.
- This is commonly used to provide multiple parameters to a for loop.
- It is regarded bad style to use it elsewhere, when it is not necessary.
- Often two separate statements can and should be used instead.

```
For example, if a is a 2-dimensional array with 10 elements on a side, the following code uses the comma operator to update two variables at once. The code prints the values of the diagonal elements in the array:



var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
//                                ^
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);
```

```
var a, b, c;

a = b = 3, c = 4; // Returns 4 in console
console.log(a); // 3 (left-most)
```

```
var x, y, z;

x = (y = 5, z = 6); // Returns 6 in console
console.log(x); // 6 (right-most)
```

---

## Unary operators:

- A unary operation is an operation with only one operand.

| Operator   | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| delete     | **Delete Operator**- Deletes a property from the object.            |
| in         | In Operator checks if object has the given property                 |
| instanceof | Returns true if an object is an instance of an object type          |
| new        | creates an instance (object)                                        |
| typeof     | Returns the type of a variable                                      |
| void       | it discards the expression's return value.                          |
| yield      | checks what is returned in a generator by the generator's iterator. |

#### **delete:**

- The delete operator deletes an object's property

```
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

- If the delete operator succeeds, it removes the property from the object. Trying to access it afterwards will yield undefined. The delete operator returns true if the operation is possible; it returns false if the operation is not possible.

```
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = {h: 4};
delete myobj.h; // returns true (can delete user-defined properties)
```

- **Deleting array elements**
  - Since arrays are just objects, it's technically possible to delete elements from them. This is however regarded as a bad practice, try to avoid it.
  - When you delete an array property, the array length is not affected and other elements are not re-indexed
  - To achieve that behavior, it is much better to just overwrite the element with the value undefined. To actually manipulate the array, use the various array methods such as splice.

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

#### **void**

- The void operator is used in either of the following ways:

```
void (expression)
void expression
```

- The void operator specifies an expression to be evaluated without returning a value. expression is a JavaScript expression to evaluate. - The parentheses surrounding the expression are optional, but it is good style to use them.

---

## Relational operators

- A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.

### **in**

- The in operator returns true if the specified property is in the specified object. The syntax is:

```
propNameOrNumber in objectName
```

- where propNameOrNumber is a string, numeric, or symbol expression representing a property name or array index, and objectName is the name of an object.

```
// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
'length' in trees; // returns true (length is an Array property)

// built-in objects
'PI' in Math;          // returns true
var myString = new String('coral');
'length' in myString;  // returns true

// Custom objects
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true
```

#### **instanceof**

- The instanceof operator returns true if the specified object is of the specified object type.

```
objectName instanceof objectType
```

- where objectName is the name of the object to compare to objectType, and objectType is an object type, such as Date or Array.
- Use instanceof when you need to confirm the type of an object at runtime.

```
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```
