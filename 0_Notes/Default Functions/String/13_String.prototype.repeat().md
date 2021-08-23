## String.prototype.repeat()

- The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, **concatenated together.**

#### **SYNTAX**

```

repeat(count)

```

- repeat count must be non-negative.(RangeError)
- repeat count must be less than infinity and not overflow maximum string size.(RangeCount)

#### **EXAMPLE**

```

'abc'.repeat(-1) // RangeError
'abc'.repeat(0) // ''
'abc'.repeat(1) // 'abc'
'abc'.repeat(2) // 'abcabc'
'abc'.repeat(3.5) // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0) // RangeError

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2)
// 'abcabc' (repeat() is a generic method)

```

---
