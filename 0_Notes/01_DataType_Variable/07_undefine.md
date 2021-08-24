# JavaScript undefined

- If you have been working with other programming languages such as Java or C#, you may find that these languages have a null value.
- JavaScript also has null value. Besides, it has undefined value. And both null and undefined values represent empty values in JavaScript.

## What is undefined

- The undefined is a primitive type in JavaScript. So the undefined is a type. And the undefined type has exactly one value that is undefined.

> > **1) Accessing an uninitialized variable**

- When you declare a variable and don’t initialize it to a value, this variable will have a value undefined. For example:

```
let counter;
console.log(counter); // undefined
```

`It’s a good practice to always initialize a variable whenever possible. `

> > **2) Accessing a non-existing property of an object**

- If you access a non-existing property of an object, you’ll get undefined. For example:

```
let counter = {
   current: 0
};
console.log(counter.max); // undefined
```

`It’s good practice to check if the property exists before accessing it. JavaScript provides you with some ways to do so.`

- And the most common way to verify whether the object has a property is to use the in operator

```
'propertyName' in objectName
```

`Note that you need to surround the property name of the object with single or double quotes.`

```js
let counter = {
  current: 0,
};

if ("max" in counter) {
  console.log(counter.max);
}
```

`If you want to assign a default value when the property of an object doesn’t exist, you can use the nullish coalescing operator (??):`

```js
const propValue = object.propName ?? defaultValue;
```

- In this syntax, the nullish coalesing operator (??) returns the defaultValue if the object.propName is **undefined or null.**
- Note that the nullish coalescing operator has been available since ECMAScript 2020.

```js
let counter = { current: 0 };
const max = counter.max ?? 100;
```

> > **3) Function parameters**

- When you call a function with a number of parameters, you often pass the same number of arguments. For example:

```js
const formatCurrency = (amount, currency) => {
  return currency === "$" ? `$${amount}` : `${amount} ${currency}`;
};
```

- The formatCurrency() function has two parameters. When you call it, you pass two arguments like this:

```js
formatCurrency(100, "$"); //
$100;
```

And it returned a result as expected.

- But when you call the formatCurrency() function and don’t pass all the arguments, the parameters inside the function becomes undefined. For example:

```js
formatCurrency(100); // 100 undefined
```

- To avoid this kind of situation, you set a **default value for the function parameters** like this:

```
const formatCurrency = (amount, currency = '$') => {
   return currency === '$' ?
     `$${amount}`: `${amount} ${currency}`;
}
```

- And when you call it without passing the second argument, you’ll get a proper value:

```
formatCurrency(100); // $100
```

> > **4) Function return value**

- A function that doesn’t have a return statement implicitly returns undefined. For example:

```
const log = (message) => {
  const time = (new Date()).toLocaleTimeString();
  console.log(`${time}: ${message}`);
};

const result = log('Hi');
console.log(result); // undefined
```

- Similarly, when a function has a return statement without expression, it also returns undefined. For example:

```
const add = (a,b) => {
    const result = a + b;
    return;
}

let result = add(10,20);
console.log(result);  // undefined
```

Consider the following example:

```
const add = (a,b) => {
    return
       a + b;
};

let result = add(10,20);
console.log(result); // undefined
```

The add() function returns undefined. It should have returned 30 instead.

`The problem is that when you create a new line between the return keyword and the returned expression ( a + b; ), Javascript compiler automatically inserts a semicolon (;) before the new line. This feature is called automatic semicolon insertion (ASI) in JavaScript.`

So that the add() function will look like the following to the JavaScript compiler:

```
const add = (a,b) => {
    return;
       a + b;
};
```

> > **5) Accessing out-of-bounds array elements**

- When you access an array element that is out-of-bounds, you’ll get the undefined value. For example:

```
const colors = ['red', 'green', 'blue'];
console.log(colors[3]); // undefined
```

- In this example, the colors array doesn’t have any element at index 3. Therefore, the colors[3] returns undefined.
