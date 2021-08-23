# Storing the information you need — Variables

## What is a variable?

- A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.
- One special thing about variables is that they can contain just about anything — not just strings and numbers. Variables can also contain complex data and even entire functions to do amazing things
- **A JavaScript variable is simply a name of storage location.**
- There are two types of variables in JavaScript : **local variable and global variable.**
- A JavaScript **local variable is declared inside block or function.** It is accessible within the function or block only.
- A JavaScript **global variable is accessible** from any function. A variable i.e. declared outside the function or declared with window object is known as global variable.
- To declare JavaScript global variables inside function, you need to use window object.

```js
For Example
    function m(){
        window.value=100;//declaring global variable by window object
    }
    function n(){
        alert(window.value);//accessing global variable from other function
    }
```

- When you declare a variable outside the function, it is added in the window object internally. You can access it through window object also.

```js
Example;
var value = 50;
function a() {
  alert(window.value); //accessing global variable
}
```

## Declaring a variable

- To use a variable, you've first got to create it — more accurately, we call this declaring the variable. To do this, we type the keyword **var or let** followed by the name you want to call your variable:

```js
let myName;
let myAge;
```

- They currently have no value; they are empty containers. When you enter the variable names, you should get a value of undefined returned. If they don't exist, you'll get an error message

`Note: Don't confuse a variable that exists but has no defined value with a variable that doesn't exist at all — they are very different things. In the box analogy you saw above, not existing would mean there's no box (variable) for a value to go in. No value defined would mean that there is a box, but it has no value inside it.`

## Initializing a variable

- Once you've declared a variable, you can initialize it with a value. You do this by typing the variable name, followed by an equals sign (=), followed by the value you want to give it.

```js
myName = "Chris";
myAge = 37;
```

- You can declare and initialize a variable at the same time, like this:

```js
let myDog = "Rover";
```

## Updating a variable

- Once a variable has been initialized with a value, you can change (or update) that value by giving it a different value.

## An aside on variable naming rules

- You can call a variable pretty much anything you like, but there are limitations. Generally, you should stick to just using **Latin characters (0-9, a-z, A-Z) and the underscore character.**
- You shouldn't use other characters because they may cause errors or be hard to understand for an international audience.
- **Don't use underscores at the start of variable names** — this is used in certain JavaScript constructs to mean specific things, so may get confusing.
- **Don't use numbers at the start of variables.** This isn't allowed and causes an error.
- A safe convention to stick to is so-called **"lower camel case",** where you stick together multiple words, using lower case for the whole first word and then capitalize subsequent words. We've been using this for our variable names in the article so far.
- **Make variable names intuitive,** so they describe the data they contain. Don't just use single letters/numbers, or big long phrases.
- Variable names cannot contain spaces.
- **Variables are case sensitive** — so myage is a different variable from myAge.
- One last point: you also need to **avoid using JavaScript reserved words as your variable names** — by this, we mean the words that make up the actual syntax of JavaScript! So, you can't use words like var, function, let, and for as variable names. Browsers recognize them as different code items, and so you'll get errors.

## Dynamic typing

- JavaScript is a "dynamically typed language", which means that, unlike some other languages, you don't need to specify what data type a variable will contain (numbers, strings, arrays, etc).

For example, if you declare a variable and give it a value enclosed in quotes, the browser treats the variable as a string:

```
let myString = 'Hello';
```

## Constants in JavaScript

- Many programming languages have the concept of a constant — a value that once declared can't be changed.
- There are many reasons why you'd want to do this, from security (if a third party script changed such values it could cause problems) to debugging and code comprehension (it is harder to accidentally change values that shouldn't be changed and mess things up).

- In the early days of JavaScript, constants didn't exist. In modern JavaScript, we have the keyword const, which lets us store values that can never be changed:

```
const daysInWeek = 7;
const hoursInDay = 24;
```

- const works in exactly the same way as let, except that you can't give a const a new value. In the following example, **the second line would throw an error:**

```
const daysInWeek = 7;
daysInWeek = 8;
```
