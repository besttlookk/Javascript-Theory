- Special variable that is created for every execution context(every function).
  Takes the value of (points to ) the owner of the function in which the "this" keyword is used.

- 'This' is not static . It depends on how the function is called , and its value is only assigned when the function is "actually called";

- 4 different ways a function can be called

  1. as a method(function attach to the object) :
     when we call this method inside the "method". it will simply point to the object in which the method is called

  2. Simple function call: undefined(in strict mode) or Window object

  3. Arrow function: this of surrounding function(lexical this). arrow function does not get its own this keywoard.

  4. Event Listener :<DOM element that the handler is attached to>

  5. new/ call / apply/ bind

- NOTE: 'this' will never points to the function itselt(in which it is used) and also not its variable envioroment
