# Array.prototype.concat()

- The concat() method is used to merge two or more arrays.
- **This method does not change the existing arrays, but instead returns a new array.**

#### **SYNTAX**

```
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, ... , valueN)
```

#### **EXAMPLE**

```
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

```
# Concatenating values to an array

const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

```
# The following code concatenates nested arrays and demonstrates retention of references:

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]
```

- The concat() method creates a "new" array by merging (concatenating) existing arrays:

```
    console.log(arr2.concat(arr1))  //[ 'ram', 'amit', 'rohan', 89, '-10', 3, 4, 1, 90, 45, 123 ] 
    console.log(arr1)               // [ 3, 4, 1, 90, 45, 123 ] 

    console.log(arr2 + arr1)        // ram,amit,rohan,89,-103,4,1,90,45,123
    console.log(typeof (arr2 + arr1))  //string
```

- The concat() method can take any number of array arguments:

```
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = arr1.concat(arr2, arr3); //[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan' ] 
```

- The concat() method can also take strings as arguments:

```
    const arr1 = ["Emil", "Tobias", "Linus"];
    const myChildren = arr1.concat("Peter");  //[ 'Emil', 'Tobias', 'Linus', 'Peter' ] s
```

- use of spread operator to merge arrays

```
const emotion = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];
const emotionalVeggies = [...emotion, ...veggies];
console.log(emotionalVeggies); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]
```
