# Optional chaining (?.)

- The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

- The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

- This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. - It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.

- Optional chaining cannot be used on a non-declared root object, but can be used with an undefined root object.

#### **SYNTAXT**

```
obj.val?.prop
obj.val?.[expr]
obj.arr?.[index]
obj.func?.(args)
```

- consider an object obj which has a nested structure. Without optional chaining, looking up a deeply-nested subproperty requires validating the references in between, such as:

```
let nestedProp = obj.first && obj.first.second;
```

- With the optional chaining operator (?.), however, you don't have to explicitly test and short-circuit based on the state of obj.first before trying to access obj.first.second:

```
let nestedProp = obj.first?.second;
```

- By using the ?. operator instead of just ., JavaScript knows to implicitly check to be sure obj.first is not null or undefined before attempting to access obj.first.second. If obj.first is null or undefined, the expression automatically short-circuits, returning undefined.

- This is equivalent to the following, except that the temporary variable is in fact not created:

```
let temp = obj.first;
let nestedProp = ((temp === null || temp === undefined) ? undefined : temp.second);
```

## Optional chaining with function calls

- You can use optional chaining when attempting to call a method which may not exist. This can be helpful, for example, when using an API in which a method might be unavailable, either due to the age of the implementation or because of a feature which isn't available on the user's device.
- Using optional chaining with function calls causes the expression to automatically return undefined instead of throwing an exception if the method isn't found:

```
let result = someInterface.customMethod?.();
```

```
Note: If there is a property with such a name and which is not a function, using ?. will still raise a TypeError exception (someInterface.customMethod is not a function).
```

```
Note: If someInterface itself is null or undefined, a TypeError exception will still be raised (someInterface is null). If you expect that someInterface itself may be null or undefined, you have to use ?. at this position as well: someInterface?.customMethod?.()
```

## Dealing with optional callbacks or event handlers

- If you use callbacks or fetch methods from an object with a destructuring assignment, you may have non-existent values that you cannot call as functions unless you have tested their existence. Using ?., you can avoid this extra test:

```
// Written as of ES2019
function doSomething(onContent, onError) {
  try {
    // ... do something with the data
  }
  catch (err) {
    if (onError) { // Testing if onError really exists
      onError(err.message);
    }
  }
}
```

```
// Using optional chaining with function calls
function doSomething(onContent, onError) {
  try {
   // ... do something with the data
  }
  catch (err) {
    onError?.(err.message); // no exception if onError is undefined
  }
}
```

## Optional chaining with expressions

- You can also use the optional chaining operator when accessing properties with an expression using the bracket notation of the property accessor:

```
let nestedProp = obj?.['prop' + 'Name'];
```

## Optional chaining not valid on the left-hand side of an assignment

```
let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

## Array item access with optional chaining

```
let arrayItem = arr?.[42];
```

#### **EXAMPLES**

```
This example looks for the value of the name property for the member bar in a map when there is no such member. The result is therefore undefined.

let myMap = new Map();
myMap.set("foo", {name: "baz", desc: "inga"});

let nameBar = myMap.get("bar")?.name;
```

> > **Short-circuiting evaluation**

```
When using optional chaining with expressions, if the left operand is null or undefined, the expression will not be evaluated. For instance:

let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];

console.log(x); // 0 as x was not incremented
```

> > **Stacking the optional chaining operator**

```
With nested structures, it is possible to use optional chaining multiple times:

let customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls" // detailed address is unknown
  }
};
let customerCity = customer.details?.address?.city;

// … this also works with optional chaining function call
let customerName = customer.name?.getName?.(); // method does not exist, customerName is undefined
```

> > **Combining with the nullish coalescing operator**

```
The nullish coalescing operator may be used after optional chaining in order to build a default value when none was found:

let customer = {
  name: "Carl",
  details: { age: 82 }
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city`
```
