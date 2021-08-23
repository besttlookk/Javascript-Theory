# CALL, APPLY, BIND

## Call

- Call is a method of an object that can substitute a different object than the one it is written on.

```
const wizard = {
  name: "Merlin",
  health: 100,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  }
};

const archer = {
  name: "Robin Hood",
  health: 30
};
console.log(archer); // health: 30

wizard.heal.call(archer, 50, 20);

console.log(archer); // health: 100
```

- In this example call is used to borrow the heal method from the wizard and is used on the archer (which is actually pointing this to archer), with the optional arguments added.

## Apply

- Apply is almost identical to call, except that instead of a comma separated list of arguments, it takes an array of arguments.

```
// instead of this
// wizard.heal.call(archer, 50, 20)
// apply looks like this
wizard.heal.apply(archer, [50, 20]);
// this has the same result
```

## Bind

- Unlike call and apply, bind does not run the method it is used on, but rather returns a new function that can then be called later.

```
console.log(archer); // health: 30
const healArcher = wizard.heal.bind(archer, 50, 20);
healArcher();
console.log(archer); // health: 100
```

## Currying with bind

- Currying is breaking down a function with multiple arguments into one or more functions that each accept a single argument.

```
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(4); // 8

let multiplyByTen = multiply.bind(this, 10);
multiplyByTen(6); // 60
```

> > **Exercise: Find the largest number in an array**

```
const array = [1, 2, 3];

function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

getMaxNumber(array); // 3
```

> > **Exercise 2: How would you fix this?**

```
const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter;

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' but doesn't
// ANSWER
// change this line
const giveMeTheCharacterNOW = character.getCharacter.bind(character);
console.log("?", giveMeTheCharacterNOW()); // ? Simon
```
