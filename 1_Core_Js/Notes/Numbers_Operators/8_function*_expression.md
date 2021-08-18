# Primary Expression: function\* expression

- The function\* keyword can be used to define a generator function inside an expression.

#### **SYNTAX**

```
function* [name]([param1[, param2[, ..., paramN]]]) {
  statements
}
```

- A function* expression is very similar to and has almost the same syntax as a function* statement.
- The main difference between a function* expression and a function* statement is the function name, which can be omitted in function\* expressions to create anonymous generator functions.

#### **EXAMPLE**

```
The following example defines an unnamed generator function and assigns it to x. The function yields the square of its argument:

let x = function*(y) {
   yield y * y;
}
```

```
const foo = function*() {
  yield 'a';
  yield 'b';
  yield 'c';
};

let str = '';
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// expected output: "abc"
```
