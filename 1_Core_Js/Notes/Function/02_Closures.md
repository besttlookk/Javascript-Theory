# Closures

- Closures are one of the most powerful features of JavaScript. JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).
- However, the outer function does not have access to the variables and functions defined inside the inner function. This provides a sort of encapsulation for the variables of the inner function.
- Also, since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the duration of the outer function execution, if the inner function manages to survive beyond the life of the outer function.
- A closure is created when the inner function is somehow made available to any scope outside the outer function.

```
var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer
                             //function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
}
myPet = pet('Vivie');

myPet();
```

- It can be much more complex than the code above. An object containing methods for manipulating the inner variables of the outer function can be returned.

```
var createPet = function(name) {
  var sex;

  return {
    setName: function(newName) {
      name = newName;
    },

    getName: function() {
      return name;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
        newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet('Vivie');
pet.getName();                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
pet.getSex();                   // male
pet.getName();                  // Oliver
```
