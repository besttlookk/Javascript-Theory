# Array.prototype.push()

- The push() method adds one or more elements to the end of an array and returns the new length of the array.
- Returns the new length property of the object upon which the method was called.

#### **SYNTAX**

```
push(element0)
push(element0, element1)
push(element0, element1, ... , elementN)
```

#### **EXAMPLES**

> > **Adding elements to an array**

```
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
```

> > **Merging two arrays**

- This example uses spread syntax to push all elements from a second array into the first one.

```
let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

Merging two arrays can also be done with the concat() method.
```

```
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

---
