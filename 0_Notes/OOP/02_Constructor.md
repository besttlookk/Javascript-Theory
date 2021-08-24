# Constructors and object instances

- JavaScript uses special functions called **constructor functions** to define and initialize objects and their features.
- They are useful because you'll often come across situations in which you don't know how many objects you will be creating;
- Constructors provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.
  > > Let's start by looking at how you could **define a person with a normal function**

```js
function createNewPerson(name) {
  const obj = {};
  obj.name = name;
  obj.greeting = function () {
    console.log(`Hi! I'm  ${obj.name} `);
  };
  return obj;
}
```

- We can now create a new person by calling this function

```js
const salva = createNewPerson("Salva");
console.log(salva.name); // Salva
salva.greeting(); // Hi! I'm  Salva
```

- This works well enough, **but** it is a bit long-winded; if we know we want to create an object, why do we need to explicitly create a new empty object and return it?
- Fortunately, JavaScript provides us with a handy shortcut, in the form of **_constructor functions_**

- **Replace your previous function** with the following

```js
function Person(name) {
  //  this = Person {} //if called with "new" operator
  this.name = name;
  this.greeting = function () {
    console.log("Hi! I'm " + this.name + ".");
  };

  // return this
}
```

- The constructor function is **JavaScript's version of a class.**
- Tt has all the features you'd expect in a function, although **it doesn't return anything** or **explicitly create an object** — it basically just defines properties and methods.

`Note: A constructor function name usually starts with a capital letter — this convention is used to make constructor functions easier to recognize in code.`

`- Only difference between both is that we call constructor function with "new" operator`

- Call a constructor to create some objects

```js
let person1 = new Person("Bob");
let person2 = new Person("Sarah");
```

- A JavaScript constructor method is a special type of method which is used to initialize and create an object.
- It is called when memory is allocated for an object.

- Points to remember:

  1. The constructor keyword is used to declare a constructor method.

  2. The class can contain one constructor method only.
  3. JavaScript allows us to use parent class constructor through super keyword.

Note - If we didn't specify any constructor method, JavaScript use default constructor method.

- We can use both **function declaration and function expression** to define constructor function.
- But **arrow function** will not work as fujction constructor(bcoz it doesnot have its own **this** keyword)

`NOTE: Whenever we create a Constructor function, JS behind the scene creates a new function with the same name and a anonymous object.`

`New function with have a property called "prototype" which refer to anonymous object and anonymous object will have a property called "constructor" which refers to that new function`

# new operator

- It is a very special operator .It does 4 things behind the scene
  1. **New empty object** is created.(internally)
  2. function is called.And in this.."this" is equal to the newly created object // **this = {}**
  3. Newly created object is linked to the prototype // this will create **proto** property on objects and sets the value equal to prototype of constructor function
  4. function **automaticaaly returns the object** after adding properties

## Problem with using only Constructor function to create object.

- All the object created from this constructor will have all the methods inside it.
- It is not memory effecient.
- To remody this ..we go for - PROTOTYPE
