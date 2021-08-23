# JavaScript Constructor Function

- Technically speaking, a constructor function is a regular function with the following convention:
  - The name of a constructor function starts with a **capital letter** like Person, Document, etc.
  - A **constructor function should be called only with the new operator**.

`Note that ES6 introduces the class keyword that allows you to define a custom type. And classes are just syntactic sugar over the constructor functions with some enhancements.`

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
```

- To create a new instance of the Person, you use the new operator:

```js
let person = new Person("John", "Doe");
```

- Basically, the new operator does the following:
  - Create a new empty object and assign it to this.
  - Assign the arguments 'John' and 'Doe' to the firstName and lastName properties.
  - Return the **_this_** value.

> > It’s functionally equivalent to the following:

```js
function Person(firstName, lastName) {
  // this = {};

  // add properties to this
  this.firstName = firstName;
  this.lastName = lastName;

  // return this;
}
```

> > Therefore, the following statement:

```js
let person = new Person("John", "Doe");
```

> > … returns the same result as the following statement:

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};
```

`However, the constructor function Person allows you to create multiple similar objects.`

```js
let person1 = new Person("Jane", "Doe");
let person2 = new Person("James", "Smith");
```

## Adding methods to JavaScript constructor functions

- An object may have methods that manipulate its data. To add a method to an object created via the constructor function, you can use the **_this_** keyword

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
```

`The problem with the constructor function is that when you create multiple instances of the Person, the this.getFullName() is duplicated in every instance. This is not memory efficient`

`To resolve this, you can use the prototype so that all instances of a custom type can share the same method.`

## Returning from constructor functions

- Typically, a constructor function implicitly returns this that set to the newly created object. But if it has a return statement, then here’s the rule:
  - If return is called with an **object**, the constructor function returns that object instead of this.
  - If return is called with a value other than an object, it’s ignored.

## Calling a constructor function without the new keyword

- It’s possible to call a constructor function without the new keyword like this:

```js
let person = Person("John", "Doe");
```

- In this case, the Person just executes like a regular function. Therefore, the this inside the Person function doesn’t bound to the person variable but the global object.

> > If you attempt to access the firstName or lastName property, you’ll get an error:

```js
console.log(person.firstName); // TypeError: Cannot read property 'firstName' of undefined
```

- Similarly, you cannot access the getFullName() method since it’s bound to the global object.

```js
person.getFullName(); // TypeError: Cannot read property 'getFullName' of undefined
```

`To prevent a constructor function to be invoked without the new keyword, ES6 introduced the "new.target" property.`

- If a constructor function is called with the new keyword, the new.target returns a reference to the function. Otherwise, it returns undefined.
- By leveraging the new.target, you can force users of the constructor function to call it with the new keyword. And you can throw an error if they don’t do so like this:

```js
function Person(firstName, lastName) {
  if (!new.target) {
    throw Error("Cannot be called without the new keyword");
  }

  this.firstName = firstName;
  this.lastName = lastName;
}
```

> > Alternatively, you can make the syntax more flexible by creating a new Person object if the users of the constructor function don’t use the new keyword:

```js
function Person(firstName, lastName) {
  if (!new.target) {
    return new Person(firstName, lastName);
  }

  this.firstName = firstName;
  this.lastName = lastName;
}

let person = Person("John", "Doe");

console.log(person.firstName);
```

`This pattern is often used in JavaScript libraries and frameworks to make the syntax more flexible.`
