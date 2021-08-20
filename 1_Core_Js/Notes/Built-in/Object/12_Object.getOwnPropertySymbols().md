# Object.getOwnPropertySymbols()

- The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.

#### **SYNTAX**

```
Object.getOwnPropertySymbols(obj)
```

- Similar to Object.getOwnPropertyNames(), you can get all symbol properties of a given object as an array of symbols.
- Note that Object.getOwnPropertyNames() itself does not contain the symbol properties of an object and only the string properties.

- As all objects have no own symbol properties initially, Object.getOwnPropertySymbols() returns an empty array unless you have set symbol properties on your object.

#### **EXAMPLE**

```
var obj = {};
var a = Symbol('a');
var b = Symbol.for('b');

obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols);        // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]);     // Symbol(a)
```
