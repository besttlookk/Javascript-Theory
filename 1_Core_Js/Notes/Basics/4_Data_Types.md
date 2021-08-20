# JavaScript data types and data structures

- Programming languages all have built-in data structures, but these often differ from one language to another.
- JavaScript provides different data types to hold different types of values.
- There are two types of data types in JavaScript.
  1. Primitive data type(7): Number/ string/ Boolean / undefined / null / symbol / bigInt
  2. Non-primitive(reference) data type: Objects/ Array / RegExp
- JavaScript is a **"dynamic type" language,** means you don't need to specify type of the variable because it is dynamically used by JavaScript engine.
- To be able to operate on variables, it is important to know something about the type of the varibale.
- NOTE: When adding a number and a string, JavaScript will treat the number as a string.(Coersion)
- JavaScript evaluates expressions from left to right. Different sequences can produce different results:

```
  let x = 16 + 4 + "Volvo"; //20Volvo
  let x = "Volvo" + 16 + 4; //Volvo164
```

## JavaScript Types are Dynamic,

- JavaScript is a loosely typed and dynamic language.
- Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

```
    let x;           // Now x is undefined
    x = 5;           // Now x is a Number
    x = "John";      // Now x is a String
```

## JavaScript types

- The set of types in the JavaScript language consists of primitive values and objects.
- Primitive values (immutable datum represented directly at the lowest level of the language)
  - Boolean type
  - Null type
  - Undefined type
  - Number type
  - BigInt type
  - String type
  - Symbol type
- Objects (collections of properties)

## Primitive

- In JavaScript, a primitive (primitive value, primitive data type) is data that is **not an object and has no methods.**
- There are 7 primitive data types:

  1. string,
  2. number,
  3. bigint,
  4. boolean,
  5. undefined,
  6. symbol, and
  7. null.

- We refer to values of these types as "primitive values".
- Most of the time, a primitive value is represented directly at the lowest level of the language implementation.

- All primitives are **immutable**, i.e., they cannot be altered.
- It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.
- This example will help you understand that primitive values are immutable

```
// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ
```

- A primitive can be replaced, but it can't be directly altered.

### Primitive wrapper objects in JavaScript

- Except for null and undefined, all primitive values have object equivalents that wrap around the primitive values:
  - **_String_** for the string primitive.
  - **_Number_** for the number primitive.
  - **_BigInt_** for the bigint primitive.
  - **Boolean** for the boolean primitive.
  - **Symbol** for the symbol primitive.
- The wrapper's valueOf() method returns the primitive value.

## Objects

- In computer science, an object is a value in memory which is possibly referenced by an identifier.
- In JavaScript, objects can be seen as a collection of properties.
- With the **object literal syntax,** a limited set of properties are initialized; then properties can be added and removed.
- Property values can be values of any type, including other objects, which enables building complex data structures.
- Properties are identified using key values. A key value is either a String value or a Symbol value.
- There are two types of object properties: The data property and the accessor property.

```
Note: Each property has corresponding attributes. Attributes are used internally by the JavaScript engine, so you cannot directly access them. That's why attributes are listed in double square brackets, rather than single.
```

## "Normal" objects, and functions

- A JavaScript object is a mapping between keys and values. Keys are strings (or Symbols), and values can be anything.
- Functions are regular objects with the additional capability of being callable.

## Determining types using the typeof operator

- The typeof operator returns the type of a variable or an expression:

## Udefined vs Empty value

- Undefined:

  - In JavaScript, a variable without a value, has the value undefined.
  - The type is also undefined.
  - Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

- Empty Values: let car = "";

  - An empty value has nothing to do with undefined.

  - An empty string has both a legal value and a type.
