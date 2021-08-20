# Constructors and object instances

- JavaScript uses special functions called constructor functions to define and initialize objects and their features.
- They are useful because you'll often come across situations in which you don't know how many objects you will be creating;
- constructors provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.
- Let's start by looking at how you could define a person with a normal function

```
function createNewPerson(name) {
  const obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + obj.name + '.');
  };
  return obj;
}
```

- ou can now create a new person by calling this function

```
const salva = createNewPerson('Salva');
salva.name;
salva.greeting();
```

- This works well enough, but it is a bit long-winded; if we know we want to create an object, why do we need to explicitly create a new empty object and return it?
- Fortunately, JavaScript provides us with a handy shortcut, in the form of **_constructor functions_**

- Replace your previous function with the following

```
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
```

- The constructor function is JavaScript's version of a class.
- it has all the features you'd expect in a function, although it doesn't return anything or explicitly create an object — it basically just defines properties and methods.
- Notice also the this keyword being used here as well — it is basically saying that whenever one of these object instances is created, the object's name property will be equal to the name value passed to the constructor call, and the greeting() method will use the name value passed to the constructor call too.

```
Note: A constructor function name usually starts with a capital letter — this convention is used to make constructor functions easier to recognize in code.
```

- call a constructor to create some objects

```
let person1 = new Person('Bob');
let person2 = new Person('Sarah');
```

- A JavaScript constructor method is a special type of method which is used to initialize and create an object.
- It is called when memory is allocated for an object.

- Points to remember:

  1. The constructor keyword is used to declare a constructor method.

  2. The class can contain one constructor method only.
  3. JavaScript allows us to use parent class constructor through super keyword.

Note - If we didn't specify any constructor method, JavaScript use default constructor method.

- It is basically just a function (this is also is ES5): can make as many object through construtor
- to differntiate "constructor" from the " function" we use UPPERCASE in constrctor
- Only difference between both is that we call constructor function with "new" operator
- We can use both function declaration and function expression to define constructor function.
- But array function will not work as fujction constructor(bcoz it doesnot have its own this keyword)

# new operator

- It is a very special operator .It does 4 things behind the scene
  1. new empty object is created.
  2. function is called.And in this.."this" is equal to the newly created object // this = {}
  3. newly created object is linked to the prototype // this will create **proto** property on objects and sets the value equal to prototype of constructor function
  4. function automaticaaly returns the object after adding properties
