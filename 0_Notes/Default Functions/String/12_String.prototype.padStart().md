# String.prototype.padStart()

- The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
- The padding is applied from the start of the current string.

#### **SYNTAX**

```

padStart(targetLength)
padStart(targetLength, padString)

```

#### **PARAMETERS**

- **targetLength**

  - The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.

- **padString Optional**

  - The string to pad the current str with. If padString is too long to stay within the targetLength, it will be truncated from the end. The default value is " " (U+0020 'SPACE').

#### **Return value**

- A String of the specified targetLength with padString applied from the start.

#### **EXAMPLE**

```

'abc'.padStart(10); // " abc"
'abc'.padStart(10, "foo"); // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0"); // "00000abc"
'abc'.padStart(1); // "abc"

```

#### **USE**

```

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '\*');

console.log(maskedNumber);
// expected output: "****\*\*\*\*****5581"

```

---
