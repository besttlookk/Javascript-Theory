/*
Q: What is Object orianted programmin?
A: OOP is a programming paradigm(style of the code-how we write and organize the code) based on concept of objects

// we use objects to model(describe) real-world or abstract features.

objects may contain data(properties) and code(methods) .By using objects, we pack "data and corresponding behavior" into one block.

In OOP, objects are self-contained pieces/blocks of code.

Objects are "building blocks" of our applications, and interect with one another.

Interection happen through a "public interface"(API): Methods that the code "outside" of the object can access and use to communicate with the object.

OOP was developed with the goal of organizing code, to make it  more flexible and easier to maintain(avoid "spaghetti code")

*/
/*
Q: How do we actually design classes ? How do we model real-world data into classes?
A: The 4 funcdamental principal of OOP 
  1. Abstraction
  2. Encapsulation
  3. Inheritance
  4. Polymorphism

// --Abstraction:
Ignoring or hiding details that "doesn't matter", allowing us to get overview perspective of the thing we are implementing, 
instead of messing with details that doesn't matter to our implementation.

// -- Encapsulation
Keeping properties and methods private inside the class, so they are not accessible from outside the class. 
Some methods can be exposed as a public interface(API)

WHY?
It prevents external code from accidently manipulating internal properties/state
Allow to change internal implementation without the risk of breaking the code


// --Inheritance
Making all properties and methods of a certain class available to to a child class,
forming a hierarchinal between classes.
This allows to reuse common logic and to model real-world relationships


// ---Polymorphism:
A child class can overwrite a method it inherited from a parent class

*/

/*
-----------------OOP in JS: prototype---------------
Objects are linked to a prototype object
Prototypal inheritance(Delegation): The prototype contains methods(behaviour) that are accessible to all objects linked to that prototype.
Its the case of Instance inheriting from the class
Behaviour is delegated to the linked prototype object.
In other OOP , behaviour is copied from class to all instances.

Array.prototype is the prototype of all array objects we created in JS. Therefore, all arrays have access to the map method.
const arr = [2,4,5]
arr.__proto__ === Array.prototype

*/

/*
Ques: how do we actually create prototype ? and how do we link objects to prototype? How can we create new objects, without having classes?
Ans: 3 ways to implement OOP in JS
  1. Constructor function
      > Techinque to create objects from a function
      > This is how built-in objects like arrays , maps or sets are actually implemented.

  2. ES6 classes
      > Modern alternatives to constructor function synstax
      > "Syntactic sugar" : behind the scenes, ES6 classes work exactly like constructor function
      > ES6 class DO NOT bahave like classes in "classical OOP"
  3.Object.create()
      > Easiest and most straightforwad way of linking an object to a prototype object.
      > Not used much

4 pillars of OOP still works

*/
