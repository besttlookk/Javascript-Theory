# Left-hand-side expressions : Property accessors

- Property accessors provide access to an object's properties by using the dot notation or the bracket notation.
- A method is a property that can be called

```
object.property
object['property']
```

## Dot notation

- In the object.property syntax, the property must be a valid JavaScript identifier.

## Bracket notation

- In the object[property_name] syntax, the property_name is just a string or Symbol. So, it can be any string, including '1foo', '!bar!', or even ' ' (a space).

```
document.createElement('pre')
    OR

document['createElement']('pre')

A space before bracket notation is allowed.

document ['createElement']('pre')
```

## Method binding

- A method is not bound to the object that it is a method of. Specifically, this is not fixed in a method. Put another way, this does not necessarily refer to the object containing a method. Instead, this is "passed" by the function call.

#### **EXAMPLES**

```
const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);
// expected output: "Mario"

const person2 = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(person2['lastname']);
// expected output: "Doe"

```

## Bracket notation vs. eval

- JavaScript novices often make the mistake of using eval() where the bracket notation can be used instead.

- For example, the following syntax is often seen in many scripts.

```
x = eval('document.forms.form_name.elements.' + strFormControl + '.value')
```

- eval() is slow and should be avoided whenever possible.
- Also, strFormControl would have to hold an identifier, which is not required for names and ids of form controls.
- It is better to use bracket notation instead:

```
x = document.forms['form_name'].elements[strFormControl].value
```
