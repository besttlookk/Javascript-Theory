# Array.prototype.toString()

- The toString() method returns a string representing the specified array and its elements.

#### **SYNTAX**

```
toString()
```

- The Array object overrides the toString method of Object. For Array objects, the toString method joins the array and returns one string containing each array element separated by commas.

- JavaScript calls the toString method automatically when an array is to be represented as a text value or when an array is referred to in a string concatenation.

### ECMAScript 5 semantics

- Starting in JavaScript 1.8.5 (Firefox 4), and consistent with ECMAScript 5th edition semantics, the toString() method is generic and can be used with any object. Object.prototype.toString() will be called, and the resulting value will be returned.

#### **EXAMPLES**

```
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```

---
