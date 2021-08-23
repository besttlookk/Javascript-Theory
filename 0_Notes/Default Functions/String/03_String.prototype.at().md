# String.prototype.at()

- The at() method takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset.
- This method allows for positive and negative integers.
- **Negative integers** count back from the last string character.
- Returns undefined if the given index can not be found.

#### **SYNTAX**

```

at(index)

```

#### **EXAMPLE**

```

// A function which returns the last character of a given string
function returnLast(arr) {
return arr.at(-1);
}

let invoiceRef = 'myinvoice01';

console.log( returnLast(invoiceRef) );
// Logs: '1'

invoiceRef = 'myinvoice02';

console.log( returnLast(invoiceRef) );
// Logs: '2'

```

#### **COMPARING METHODS**

- we compare different ways to select the penultimate (last but one) character of a String.
- Whilst all below methods are valid, it highlights the succinctness and readability of the at() method.

```

const myString = 'Every green bus drives fast.';

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length-2);
console.log(lengthWay); // Logs: 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // Logs: 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // Logs: 't'

```

---
