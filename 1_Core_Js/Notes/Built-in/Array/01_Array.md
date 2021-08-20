# Array() constructor

- The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.
- The Array() constructor is used to create Array objects.

#### **SYNTAX**

```
// literal constructor
[element0, element1, ..., elementN]

// construct from elements
new Array(element0, element1, ..., elementN)

// construct from array length
new Array(arrayLength)
```

#### **EXAMPLES**

> > **Array literal notation**

- Arrays can be created using the literal notation:

```
let fruits = ['Apple', 'Banana'];

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```

> > **Array constructor with a single parameter**

- Arrays can be created using a constructor with a single number parameter. An array with its length property set to that number and the array elements are empty slots.

```
let fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]);     // undefined
```

> > **Array constructor with multiple parameters**

- If more than one argument is passed to the constructor, a new Array with the given elements is created.

```
let fruits = new Array('Apple', 'Banana');

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```
