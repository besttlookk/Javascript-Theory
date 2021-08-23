# JavaScript Factory Functions

- A factory function is a function that returns a new object.
  > > The following creates a person object named john:

```js
let john = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(john.getFullName()); // John Doe
```

> > Suppose that you need to create another similar object called jane, you can duplicate the code as follows:

```js
let jane = {
  firstName: "Jane",
  lastName: "Doe",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(jane.getFullName()); // Jane Doe
```

- The more object you want to create, the more duplicate code you need to copy.

- To avoid copying the same code all over again and again, you can develop a function that creates the person object:

```js
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + " " + lastName;
    },
  };
}
```

- When a function creates an object, it is called a factory function. The createPerson() is a factory function because it returns a new person object.

> > The following code uses the createPerson() factory function to create two objects john and jane:

```js
let john = createPerson("John", "Doe"),
  jane = createPerson("Jane", "Doe");

console.log(john.getFullName());
console.log(jane.getFullName());
```

- With the factory function, you create any number of the person objects you want without duplicating code.
- When you create an object, that object requires a space in the memory. If you have a thousand person objects, you need one thousand spaces in the memory to store these objects. These person objects, however, have the same getFullName() method.
  > > To avoid repeating the same getFullName() function in the memory, you can remove the getFullName() method from the person object:

```js
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}
```

And move this method to another object:

```js
const behavior = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};
```

> > And before calling the getFullName() method on the person object, you can assign the method of the behavior object to the person object as follows:

```js
let john = createPerson("John", "Doe"),
  jane = createPerson("Jane", "Doe");

john.getFullName = behavior.getFullName;
jane.getFullName = behavior.getFullName;

console.log(john.getFullName());
console.log(jane.getFullName());
```

- It’ll more difficult if you have many methods and have to assign them manually.

  `This is why the Object.create() method comes into play.`

`However, in practice, you will rarely see the factory functions. Instead, you will see the function constructors or the classes.`
