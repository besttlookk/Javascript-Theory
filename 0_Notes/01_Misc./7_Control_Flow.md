# Control Flow and Error Handling

- In any programming language, the code needs to make decisions and carry out actions accordingly depending on different inputs.

1. if/else
2. switch
3. try/catch/finally

## if...else statements

- Let's look at by far the **most common type of conditional statement** you'll use in JavaScript — the humble if...else statement.

```
    if (condition1) {
      //  block of code to be executed if condition1 is true
    } else if (condition2) {
      //  block of code to be executed if the condition1 is false and condition2 is true
    } else {
      //  block of code to be executed if the condition1 is false and condition2 is false
    }
```

- You should note that you don't have to include the else and the second curly brace block — the following is also perfectly legal code:

```
if (condition) {
  code to run if condition is true
}

run some other code
```

- As a final point, you may sometimes see if...else statements written without the curly braces, in the following shorthand style:

```
if (condition) code to run if condition is true
else run some other code instead
```

- Any value that is not **false, undefined, null, 0, NaN, or an empty string ('')** actually returns true when tested as a conditional statement, therefore you can use a variable name on its own to test whether it is true, or even that it exists (that is, it is not undefined.) So for Example:

```
let cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}
```

- If you want to test multiple conditions without writing nested if...else statements, logical operators can help you.

```
if (choice === 'sunny' && temperature < 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if (choice === 'sunny' && temperature >= 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
}
```

- A common mistake when using the logical OR operator in conditional statements is to try to state the variable whose value you are checking once, and then give a list of values it could be to return true, separated by || (OR) operators. For example:

```
WRONG!!!

if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

- In this case the condition inside if(...) will always evaluate to true since 7 (or any other non-zero value) always evaluates to true. This condition is actually saying "if x equals 5, or 7 is true — which it always is".

```
RIGHT!!!

if (x === 5 || x === 7 || x === 10 ||x === 20) {
  // run my code
}
```

---

## Switch statements

- They take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it.
- Use the switch statement to select one of many code blocks to be executed.

```

switch(expression) {
case x:
// code block
break;
case y:
// code block
break;
default:
// code block
}

```

- This is how it works:
  - The switch expression is evaluated once.
  - The value of the expression is compared with the values of each case.
  - If there is a match, the associated block of code is executed.
  - If there is no match, the default code block is executed.

#### **The break Keyword**

- When JavaScript reaches a break keyword, it breaks out of the switch block.
- This will stop the execution inside the switch block.
- It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

```

Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

```

- The default case does not have to be the last case in a switch block:
- If default is not the last case in the switch block, remember to end the default case with a break.

##### **Common Code Blocks**

```

switch (new Date().getDay()) {
case 4:
case 5:
text = "Soon it is Weekend";
break;
case 0:
case 6:
text = "It is Weekend";
break;
default:
text = "Looking forward to the Weekend";
}

```

- Switch cases use **strict comparison (===).**

---

## Ternary operator

```
( condition ) ? run this code : run this code instead
```
