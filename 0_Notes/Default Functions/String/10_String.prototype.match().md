# String.prototype.match()

- The match() method retrieves the result of matching a string against a regular expression.

#### **SYNTAX**

```

match(regexp)

```

- If regexp is a non-RegExp object, it is implicitly converted to a RegExp by using new RegExp(regexp).
- If you don't give any parameter and use the match() method directly, you will get an Array with an empty string: [""].

```

const str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
str3 = "The contract was declared null and void.";
str1.match("number"); // "number" is a string. returns ["number"]
str1.match(NaN); // the type of NaN is the number. returns ["NaN"]
str1.match(Infinity); // the type of Infinity is the number. returns ["Infinity"]
str1.match(+Infinity); // returns ["Infinity"]
str1.match(-Infinity); // returns ["-Infinity"]
str2.match(65); // returns ["65"]
str2.match(+65); // A number with a positive sign. returns ["65"]
str3.match(null); // returns ["null"]

```

---
