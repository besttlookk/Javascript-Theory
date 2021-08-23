# String.prototype.padEnd()

- The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.
- The padding is applied from the end of the current string.

#### **SYNTAX**

```

padEnd(targetLength)
padEnd(targetLength, padString)

```

#### **PARAMETERS**

- **targetLength**

  - The **length of the resulting string** once the current str has been padded.
  - If the value is lower than str.length, the current string will be returned as-is.

- **padString** (Optional)
  - The string to pad the current str with.
  - If padString is too long to stay within targetLength, it will be truncated

#### **RETURN VALUE**

- A String of the specified targetLength with the padString applied at the end of the current str.

#### **EXAMPLE**

```

'abc'.padEnd(10); // "abc "
'abc'.padEnd(10, "foo"); // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1); // "abc"

```

---
