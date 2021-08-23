# Introducing JavaScript objects

- In JavaScript, an object is an **unordered collection of key-value pairs**. Each key-value pair is called a **property**.
- The key of a property can be a string and the value of a property can be any valid JavaScript value e.g., a string, a number, an array, and **even a function**.
- When a function is a property of of an object, it’s often called a **method.**
- In JavaScript, most things are objects, from core JavaScript features like arrays to the browser APIs built on top of JavaScript.

- JavaScript is an object-based language. Everything is an object in JavaScript. objects are king.
- JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.
- In JavaScript, almost "everything" is an object.

  - Booleans can be objects (if defined with the new keyword)
  - Numbers can be objects (if defined with the new keyword)
  - Strings can be objects (if defined with the new keyword)
  - Dates are always objects
  - Maths are always objects
  - Regular expressions are always objects
  - Arrays are always objects
  - Functions are always objects
  - Objects are always objects

- All JavaScript values, except primitives, are objects.

## Creating a JavaScript Object:

- There are 3 ways to create new objects:
  1.  using an object literal.
  2.  By creating instance of Object directly (using new keyword)
  3.  By using an object constructor (using new keyword)

---

## METHOD 1: Creating object by object literal

#### **SYNTAX**

```
  object={property1:value1,property2:value2.....propertyN:valueN}
```

- An object like this is referred to as an object literal — we've literally written out the object contents as we've come to create it.
- It is very common to create an object using an object literal when you want to transfer a series of structured, related data items in some manner. for example sending a request to the server to be put into a database
- Sending a single object is much more efficient than sending several items individually, and it is easier to work with than an array, when you want to identify individual items by name.

`The object literal syntax is convenient for creating a single object. `

#### **EXAMPLE**

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + ".");
  },
};
```

`To access a property of an object, you use one of two notations: the dot notation and array-like notation.`

### **Dot notation**

- you accessed the object's properties and methods using dot notation.
- The object name (person) acts as the namespace — it must be entered first to access anything encapsulated inside the object
- Next you write a dot, then the item you want to access — this can be the name of a simple property, an item of an array property, or a call to one of the object's methods,

```js
person.name;
person.name[0];
person.age;
person.interests[1];
person.bio();
person.greeting();
```

- **Sub-namespaces**
  - It is even possible to make the value of an object member another object.

```js
## changing name to

name : {
  first: 'Bob',
  last: 'Smith'
},
```

- Here we are effectively creating a **_sub-namespace._** This sounds complex, but really it's not — to access these items you just need to chain the extra step onto the end with another dot.

```js
person.name.first;
person.name.last;
```

### **Bracket notation/ Array-like notation**

- There is another way to access object properties — using bracket notation.

```js
person["age"];
person["name"]["first"];
```

- This looks very similar to how you access the items in an array, and it is basically the same thing — instead of using an index number to select an item, you are using the name associated with each member's value.
- It is no wonder that objects are sometimes called associative arrays — they map strings to values in the same way that arrays map numbers to values.

### **Setting object members / Adding a new property to an object**

- Unlike objects in other programming languages such as Java and C++, you can add a property to an object after object creation.
- you can also set (update) the value of object members by declaring the member you want to set (using dot or bracket notation), like this:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

- Setting members doesn't just stop at updating the values of existing properties and methods; you can also create completely new members.

```js
person["eyes"] = "hazel";
person.farewell = function () {
  alert("Bye everybody!");
};
```

- One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names too.
- Let's say we wanted users to be able to store custom value types in their people data, by typing the member name and value into two text inputs. We could get those values like this:

```js
let myDataName = nameInput.value;
let myDataValue = nameValue.value;
```

- We could then add this new member name and value to the person object like this:

```js
person[myDataName] = myDataValue;
```

- Adding a property to an object using the method above isn't possible with dot notation, which can only accept a literal member name, not a variable value pointing to a name.

`When a property name contains spaces, you need to place it inside quotes. `

`Note that it’s not a good practice to use spaces in the property names of an object.`

## Deleting a property of an object

- To delete a property of an object, you use the delete operator:

```js
delete objectName.propertyName;
```

## Checking if a property exists

- To check if a property exists in an object, you use the in operator:

```js
propertyName in objectName;
```

- The in operator returns true if the propertyName exists in the objectName.

```js
let employee = {
  firstName: "Peter",
  lastName: "Doe",
  employeeId: 1,
};

console.log("ssn" in employee); // false
console.log("employeeId" in employee); // true
```

## Iterating over properties of an object using for...in loop

- To iterate over all properties of an object **without knowing property names**, you use the **for...in loop**:

```js
for (let key in object) {
  // ...
}
```

```js
let website = {
  title: "JavaScript Tutorial",
  url: "https://www.javascripttutorial.net",
  tags: ["es6", "javascript", "node.js", "reactjs", "react native"],
};

for (const key in website) {
  console.log(key);
}
```

#### Output:

```output
"title"
"url"
"tags"
```

## Methods

- Besides data, objects can have actions. The **actions of objects are known as methods**.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};

person.greet = function () {
  console.log("Hello!");
};
person.greet(); // Hello
```

In this example, we used a **_function expression_** to create the function and assigned it to the greet property of the person object.

- Besides using a function expression, you can define a function and assign it to an object like this:

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};

function greet() {
  console.log("Hello, World!");
}

person.greet = greet;

person.greet();
```

## Method shorthand

- It’s possible to **define methods of an object using the object literal syntax** as shown in the following example:

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log("Hello, World!");
  },
};
```

- ES6 provides you with the concise method syntax that allows you to make it shorter to define a method for an object:

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  greet() {
    console.log("Hello, World!");
  },
};

person.greet();
```

## The _this_ value

- Inside the method, the this value references the object used to invoke the method. Therefore, you can access an object property using the this value as follows

```js
this.propertyName;
```

#### **So why not just write person instead?**

- when we start creating constructors and so on, this is very useful — it always ensures that the correct values are used when a member's context changes (for example, two different person object instances may have different names, but we want to use their own name when saying their greeting).

---

## METHOD 2: Creating object using Object() Constructor

- First of all, you can use the Object() constructor to create a new object.
- Yes, even generic objects have a constructor, which generates an empty object.

```js
let person1 = new Object();

person1.name = "Chris";
person1["age"] = 38;
person1.greeting = function () {
  alert("Hi! I'm " + this.name + ".");
};
```

- You can also pass an object literal to the Object() constructor as a parameter, to prefill it with properties/methods.

```js
let person1 = new Object({
  name: "Chris",
  age: 38,
  greeting: function () {
    alert("Hi! I'm " + this.name + ".");
  },
});
```
