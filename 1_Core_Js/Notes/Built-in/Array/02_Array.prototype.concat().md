# Array.prototype.concat()

- The concat() method is used to merge two or more arrays.
- **This method does not change the existing arrays, but instead returns a new array.**

#### **SYNTAX**

```
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, ... , valueN)
```

#### **EXAMPLE**

```
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

```
# Concatenating values to an array

const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

```
# The following code concatenates nested arrays and demonstrates retention of references:

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]
```
