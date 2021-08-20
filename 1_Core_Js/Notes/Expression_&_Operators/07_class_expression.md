# Primary Expression: class expression

- The class expression is one way to define a class in ECMAScript 2015. Similar to function expressions, class expressions can be named or unnamed.
- If named, the name of the class is local to the class body only.
- JavaScript classes use prototype-based inheritance.

#### **SYNTAX**

```
const MyClass = class [className] [extends otherClassName] {
  // class body
}
```

- A class expression has a similar syntax to a class declaration (statement). As with class statements, the body of a class expression is executed in strict mode.
- There are several differences between class expressions and class statements, however:
  - Class expressions may omit the class name ("binding identifier"), which is not possible with class statements.
  - Class expressions allow you to redefine (re-declare) classes without throwing a SyntaxError. This is not the case with class statements.
- The constructor method is optional. Classes generated with class expressions will always respond to typeof with the value "function".

```
'use strict';
let Foo = class {};  // constructor property is optional
Foo = class {};      // Re-declaration is allowed

typeof Foo;             // returns "function"
typeof class {};        // returns "function"

Foo instanceof Object;   // true
Foo instanceof Function; // true
class Foo {}            // Throws SyntaxError (class declarations do not allow re-declaration)
```

#### **EXAMPLE: A simple class expression**

```
This is just a simple anonymous class expression which you can refer to using the variable Foo.

const Foo = class {
  constructor() {}
  bar() {
    return 'Hello World!';
  }
};

const instance = new Foo();
instance.bar();  // "Hello World!"
Foo.name;        // "Foo"
```

#### **EXAMPLE: Named class expressions**

- If you want to refer to the current class inside the class body, you can create a named class expression. The name is only visible within the scope of the class expression itself.

```
const Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
}
const bar = new Foo();
bar.whoIsThere();  // "NamedFoo"
NamedFoo.name;     // ReferenceError: NamedFoo is not defined
Foo.name;          // "NamedFoo"
```
