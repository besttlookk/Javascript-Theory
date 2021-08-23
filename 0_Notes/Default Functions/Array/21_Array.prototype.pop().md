# Array.prototype.pop()

- The pop() method removes the last element from an array and returns that element.
- This method changes the length of the array.
- Returning the removed element from the array; undefined if the array is empty.
- If you call pop() on an empty array, it returns undefined.
- Array.prototype.shift() has similar behavior to pop, but applied to the first element in an array.

#### **SYNTAX**

```
pop()
```

#### **EXAMPLES**

> > **Removing the last element of an array**

```
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

```
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
```
