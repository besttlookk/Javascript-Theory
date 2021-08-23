## String.prototype.concat()

- The concat() method concatenates the string arguments to the calling string and returns a new string.
- Changes to the original string or the returned string don't affect the other.
- If the arguments are not of the type string, they are converted to string values before concatenating.
- It is **strongly recommended** that the assignment operators (+, +=) are used instead of the concat() method.

#### **SYNTAX**

```

concat(str1)
concat(str1, str2)
concat(str1, str2, ... , strN)

```

#### **EXAMPLE**

```

let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.

let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList) // "Hello Venkat!"

"".concat({}) // [object Object]
"".concat([]) // ""
"".concat(null) // "null"
"".concat(true) // "true"
"".concat(4, 5) // "45"

```

---
