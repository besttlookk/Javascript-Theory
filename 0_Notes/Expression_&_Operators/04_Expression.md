# Expressions

- An expression is any valid unit of code that resolves to a value.

- Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions:

  - with side effects (for example: those that assign value to a variable)
  - and those that in some sense evaluate and therefore resolve to a value.

- The expression x = 7 is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to seven.

- The code 3 + 4 is an example of the second expression type. This expression uses the + operator to add three and four together without assigning the result, seven, to a variable.

- JavaScript has the following expression categories:
  - Arithmetic: evaluates to a number, for example 3.14159. (Generally uses arithmetic operators.)
  - String: evaluates to a character string, for example, "Fred" or "234". (Generally uses string operators.)
  - Logical: evaluates to true or false. (Often involves logical operators.)
  - Primary expressions: Basic keywords and general expressions in JavaScript.
  - Left-hand-side expressions: Left values are the destination of an assignment.

## Primary expressions

- Basic keywords and general expressions in JavaScript.

### **this**

- Use the this keyword to refer to the current object.
- In general, **this refers to the calling object in a method**.
- Use this either with the dot or the bracket notation:

#### **SYNTAX**

```
this['propertyName']
this.propertyName
```

#### **EXAMPLE**

```
Suppose a function called validate validates an object's value property, given the object and the high and low values:

function validate(obj, lowval, hival) {
  if ((obj.value < lowval) || (obj.value > hival))
    console.log('Invalid Value!');
}

You could call validate in each form element's onChange event handler, using this to pass it to the form element, as in the following example:

<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size=3 onChange="validate(this, 18, 99);">

```

### Grouping operator

- The grouping operator ( ) controls the precedence of evaluation in expressions. For example, you can override multiplication and division first, then addition and subtraction to evaluate addition first.

```
var a = 1;
var b = 2;
var c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence
// addition before multiplication
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9
```

---

## Left-hand-side expressions

- Left values are the destination of an assignment.

### **new**

- You can use the new operator to create an instance of a user-defined object type or of one of the built-in object types. Use new as follows:

```
var objectName = new objectType([param1, param2, ..., paramN]);
```

#### **super**

- The super keyword is used to call functions on an object's parent.
- It is useful with classes to call the parent constructor, for example.

```
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);
```
