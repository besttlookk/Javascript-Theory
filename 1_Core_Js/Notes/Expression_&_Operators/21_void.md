# Unary operator : void

- The void operator is used in either of the following ways:

```
void (expression)
void expression
```

- The void operator specifies an expression to be evaluated without returning a value. expression is a JavaScript expression to evaluate. - The parentheses surrounding the expression are optional, but it is good style to use them.
- This operator allows evaluating expressions that produce a value into places where an expression that evaluates to undefined is desired.
- The void operator is often used merely to obtain the undefined primitive value, usually using "void(0)" (which is equivalent to "void 0"). In these cases, the global variable undefined can be used.
- It should be noted that the precedence of the void operator should be taken into account and that parentheses can help clarify the resolution of the expression following the void operator:

```
void 2 == '2';   // (void 2) == '2', returns false
void (2 == '2'); // void (2 == '2'), returns undefined
```

#### **EXAMPLES**

> > **Immediately Invoked Function Expressions**

- When using an immediately-invoked function expression, void can be used to force the function keyword to be treated as an expression instead of a declaration.

```
void function iife() {

  console.log("Executed!");

}();

// Output: "Executed!"

Executing the above function without the void keyword will result in an Uncaught SyntaxError.
```

> > **JavaScript URIs**

- When a browser follows a javascript: URI, it evaluates the code in the URI and then replaces the contents of the page with the returned value, unless the returned value is undefined.
- The void operator can be used to return undefined

```
<a href="javascript:void(0);">
  Click here to do nothing
</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

```
Note: javascript: pseudo protocol is discouraged over other alternatives, such as unobtrusive event handlers.
```

> > **Non-leaking Arrow Functions**

- Arrow functions introduce a short-hand braceless syntax that returns an expression.
- This can cause unintended side effects by returning the result of a function call that previously returned nothing.
- To be safe, when the return value of a function is not intended to be used, it can be passed to the void operator to ensure that (for example) changing APIs do not cause arrow functions' behaviors to change.

```
button.onclick = () => void doSomething();

This ensures the return value of doSomething changing from undefined to true will not change the behavior of this code.
```
