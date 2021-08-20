# unary operator- delete

- The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
- delete operator has nothing to do with directly freeing memory.. Memory management is done indirectly via breaking references

```
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

- If the delete operator succeeds, it removes the property from the object. Trying to access it afterwards will yield undefined.
- The delete operator returns true if the operation is possible; it returns false if the operation is not possible.

```
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = {h: 4};
delete myobj.h; // returns true (can delete user-defined properties)
```

- However, it is important to consider the following scenarios:

  - If the property which you are trying to delete does not exist, delete will not have any effect and will return true
  - If a property with the same name exists on the object's prototype chain, then, after deletion, the object will use the property from the prototype chain (in other words, delete only has an effect on own properties).
  - Any property declared with var cannot be deleted from the global scope or from a function's scope
    - As such, delete cannot delete any functions in the global scope (whether this is part from a function definition or a function expression).
    - Functions which are part of an object (apart from the global scope) can be deleted with delete.
  - Any property declared with let or const cannot be deleted from the scope within which they were defined.
  - Non-configurable properties cannot be removed. This includes properties of built-in objects like Math, Array, Object and properties that are created as non-configurable with methods like Object.defineProperty().

```
  var Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}

console.log(delete Employee.name);   // returns true
console.log(delete Employee.age);    // returns true

// When trying to delete a property that does
// not exist, true is returned
console.log(delete Employee.salary); // returns true
```

## Non-configurable properties

- When a property is marked as non-configurable, delete won't have any effect, and will return false. In strict mode this will raise a TypeError.

```
var Employee = {};
Object.defineProperty(Employee, 'name', {configurable: false});

console.log(delete Employee.name);  // returns false
```

- var, let, and const create non-configurable properties that cannot be deleted with the delete operator

```
var nameOther = 'XYZ';

// We can access this global property using:
Object.getOwnPropertyDescriptor(window, 'nameOther');

// output: Object {value: "XYZ",
//                  writable: true,
//                  enumerable: true,
//                  configurable: false}

// Since "nameOther" is added using with the
// var keyword, it is marked as "non-configurable"

delete nameOther;   // return false

In strict mode, this would have raised an exception.
```

## Strict vs. non-strict mode

- When in strict mode, if delete is used on a direct reference to a variable, a function argument or a function name, it will throw a SyntaxError.
- Therefore, to avoid syntax errors in strict mode, you must use the delete operator in the form of delete object.property or delete object['property'].

```
Object.defineProperty(globalThis, 'variable1', { value: 10, configurable: true, });
Object.defineProperty(globalThis, 'variable2', { value: 10, configurable: false, });

// SyntaxError in strict mode.
console.log(delete variable1); // true

// SyntaxError in strict mode.
console.log(delete variable2); // false
```

```
function func(param) {
  // SyntaxError in strict mode.
  console.log(delete param); // false
}

// SyntaxError in strict mode.
console.log(delete func); // false
```

## Deleting array elements

- Since arrays are just objects, it's technically possible to delete elements from them. This is however regarded as a bad practice, try to avoid it.
- When you delete an array property, the array length is not affected and other elements are not re-indexed.
- This holds even if you delete the last element of the array.
- To achieve that behavior, it is much better to just overwrite the element with the value undefined. To actually manipulate the array, use the various array methods such as splice.

- When the delete operator removes an array element, that element is no longer in the array.

```
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
console.log(trees.length) //5
delete trees[3];
console.log(trees) //  [ 'redwood', 'bay', 'cedar', , 'maple' ]
console.log(trees.length) // 5

if (3 in trees) {
    // this is not executed
}
```

- If you want an array element to exist but have an undefined value, use the undefined value instead of the delete operator. I

```
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees[3] = undefined;
if (3 in trees) {
    // this is executed
}
```

- If instead, you want to remove an array element by changing the contents of the array, use the splice() method.

```
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees.splice(3,1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```
