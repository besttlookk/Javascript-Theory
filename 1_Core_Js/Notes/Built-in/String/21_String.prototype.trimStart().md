# String.prototype.trimStart()

- The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method

#### **SYNTAX**

```

trimStart()

trimLeft()

```

#### **EXAMPLE**

```

const greeting = ' Hello world! ';

console.log(greeting);
// expected output: " Hello world! ";

console.log(greeting.trimStart());
// expected output: "Hello world! ";

```

```

var str = ' foo ';

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo '

```

---
