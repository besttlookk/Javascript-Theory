# Object.is()

The Object.is() method determines whether **two values are the same value.**

**Returns a Boolean** indicating whether or not the two arguments are the same value.

#### **SYNTAX**

```js
Object.is(value1, value2);
```

> Two values are the same **if one of the following holds:**

- both undefined
- both null
- both true or both false
- both strings of the same length with the same characters in the same order
- both the same object (**meaning both values reference the same object in memory)**
- both numbers and
  - both +0
  - both -0
  - both NaN
  - or both non-zero and both not NaN and both have the same value

**This is not the same as being equal according to the == operator.**

**The == operator applies various coercions to both sides** (if they are not the same Type) before testing for equality (resulting in such behavior as "" == false being true), **but Object.is doesn't coerce either value.**

This is also **not the same as being equal according to the === operator.**

**The only difference between Object.is() and === is in their treatment of signed zeroes and NaNs.**

For example, **the === operator (and the == operator) treats the number values -0 and +0 as equal**.

Also, **the === operator treats Number.NaN and NaN as not equal.**

#### **EXAMPLES**

> > **Using Object.is**

```js
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo); // true
Object.is(foo, bar); // false

// Case 2: Signed zero
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true
Object.is(0n, -0n); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
```
