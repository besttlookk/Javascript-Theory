/*
    Methods	                                Description
concat()	            It returns a new array object that contains two or more merged arrays.
copywithin()	        It copies the part of the given array with its own elements and returns the modified array.
entries()	            It creates an iterator object and a loop that iterates over each key/value pair.
every()	                It determines whether all the elements of an array are satisfying the provided function conditions.
flat()	                It creates a new array carrying sub-array elements concatenated recursively till the specified depth.
flatMap()	            It maps all array elements via mapping function, then flattens the result into a new array.
fill()	                It fills elements into an array with static values.
from()	                It creates a new array carrying the exact copy of another array element.
filter()	            It returns the new array containing the elements that pass the provided function conditions.
find()	                It returns the value of the first element in the given array that satisfies the specified condition.
findIndex()	            It returns the index value of the first element in the given array that satisfies the specified condition.
forEach()	            It invokes the provided function once for each element of an array.
includes()	            It checks whether the given array contains the specified element.
indexOf()	            It searches the specified element in the given array and returns the index of the first match.
isArray()	            It tests if the passed value ia an array.
join()	                It joins the elements of an array as a string.
keys()	                It creates an iterator object that contains only the keys of the array, then loops through these keys.
lastIndexOf()	        It searches the specified element in the given array and returns the index of the last match.
map()	                It calls the specified function for every array element and returns the new array
of()	                It creates a new array from a variable number of arguments, holding any type of argument.
pop()	                It removes and returns the last element of an array.
push()	                It adds one or more elements to the end of an array.
reverse()	            It reverses the elements of given array.
reduce(function, initial)	It executes a provided function for each value from left to right and reduces the array to a single value.
reduceRight()	        It executes a provided function for each value from right to left and reduces the array to a single value.
some()	                It determines if any element of the array passes the test of the implemented function.
shift()	                It removes and returns the first element of an array.
slice()	                It returns a new array containing the copy of the part of the given array.
sort()	                It returns the element of the given array in a sorted order.
splice()	            It add/remove elements to/from the given array.
toLocaleString()	    It returns a string containing all the elements of a specified array.
toString()	            It converts the elements of a specified array into string form, without affecting the original array.
unshift()	            It adds one or more elements in the beginning of the given array.
values()	            It creates a new iterator object carrying values for each index in the array.




*/

let arr1 = [3, 4, 1, 90, 45, 123];
let arr2 = ["ram", "amit", "rohan", 89, "-10"];

//length property
console.log(arr1.length);

/*
--------array iteration
for(i=0;i<arr1.length;i++)
{
console.log(arr1[i]);
}
*/
/*
-----------------------------arr.entries()---------------------------
The entries() method creates a "new iterator object" of an array, holding the key/value pairs for every value in the array. 
A key represents the index number carrying an item as its value. It does not affect the original array.


const arr1 = [1,2,3,4,5,6]
const arr2 = [9,10,11,23]

const nameArr = ['user1', 'user2', 'user3', 'user4']
const entriesItr = nameArr.entries()
console.log(entriesItr)     // { [Iterator] }
for(ele of entriesItr){
  console.log(ele)  // [0, 'user1'], [1, "user2"]......
}


*/

/*
-----------------  Merging (Concatenating) Arrays---------------
The concat() method creates a "new" array by merging (concatenating) existing arrays:

    console.log(arr2.concat(arr1))  //[ 'ram', 'amit', 'rohan', 89, '-10', 3, 4, 1, 90, 45, 123 ] 
    console.log(arr1)               // [ 3, 4, 1, 90, 45, 123 ] 

    console.log(arr2 + arr1)        // ram,amit,rohan,89,-103,4,1,90,45,123
    console.log(typeof (arr2 + arr1))  //string

The concat() method can take any number of array arguments:

    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = arr1.concat(arr2, arr3); //[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan' ] 

The concat() method can also take strings as arguments:

    const arr1 = ["Emil", "Tobias", "Linus"];
    const myChildren = arr1.concat("Peter");  //[ 'Emil', 'Tobias', 'Linus', 'Peter' ] s

-------use of spread operator to merge arrays
    const emotion = ['🙂', '😔'];
    const veggies = ['🥦', '🥒', '🌽', '🥕'];
    const emotionalVeggies = [...emotion, ...veggies];
    console.log(emotionalVeggies); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]
*/

/*
//------------------------JOIN()--------
  --toString() vs Join
  The JavaScript method toString() converts an array to a string of (comma separated) array values.
  The join() method also joins all array elements into a string.

  It behaves just like toString(), but in addition you can specify the separator:


      console.log(arr1.toString(), typeof arr1.toString())  //3,4,1,90,45,123  string
      console.log(arr1.toString()[0]); // 3
      console.log(arr1.toString()[1]); // ,
      console.log(arr1.toString()[2]); // 4
      console.log(arr1.toString()[3]); // ,
      console.log(arr1.toString()[4]); // 1
      console.log(arr1.toString()[5]); // ,
      console.log(arr1.toString()[6]); // 9
      console.log(arr1.toString()[7]); // 0
      console.log(arr1.toString()[8]); //  ,
      console.log(arr1.toString().length); // 15

// if we want anything  other than (;) we use join()
          console.log(arr1.join("+"));    // 3+4+1+90+45+123
          console.log(arr1.join("*"));    // 3*4*1*90*45*123
*/

/*
//-----------------------PUSH & POP()----------

The push() method adds a new element to an array (at the end)
The push() method returns the new array length:

    let arrPushLength =arr1.push(15,17)
    console.log(typeof arrPushLength)  // 8 (new length)
    console.log(arr1)  // ORIGINAL ARRAY GET AFFECTED  [ 3, 4, 1, 90, 45, 123, 15, 17 ] 

The pop() method removes the last element from an array
The pop() method returns the value that was "popped out".

console.log(arr1.pop());    //123(returns pop out number)
console.log(arr1)          // [ 3, 4, 1, 90, 45 ](ORIGINAL ARRAY GETS AFFECTED)
*/

/*
//-------------------------SHIFT & UNSHIFT()----------
Shifting is equivalent to popping, working on the first element instead of the last.

The shift() method removes the first array element and "shifts" all other elements to a lower index.

The shift() method returns the value that was "shifted out"

      console.log(arr1.shift())  // 3
      console.log(arr1)    // [ 4, 1, 90, 45, 123 ](afect array)

The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
The unshift() method returns the new array length.

      console.log(arr1.unshift(40,69))  //  8(length )
      console.log(arr1)             // [ 40, 69, 3, 4, 1, 90, 45, 123 ]

they return new array. so it is better to use
they also affect array


*/

/*
// =============Delete
Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits[0];           // Changes the first element in fruits to undefined

Using delete may leave undefined holes in the array. Use pop() or shift() instead.
*/

/*
//-------------------------SPLICE()[[change the originL array]------------

normally we use splice to add items at the desired place but it can also be used to remove items.
change original array.
Syntax : array.splice(start,delete,element1,element2,?,elementn)  

Parameter
    start - It represents the index from where the method start to extract the elements.

    delete - It is optional. It represents the number of elements to be removed.

    element1,element2,...,elementn - It is optional. It represent the elements to be inserted.

Examples:

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");  // [] (nothing is removed)
    console.log(fruits)   // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ] 

The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
he splice() method returns an array with the deleted items:

    console.log(arr1.splice(2,2,"apple","banana"))    // [ 1, 90 ](removed item)
    console.log(arr1)  //  [ 3, 4, 'apple', 'banana', 45, 123 ]

----Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(0, 1);   // Removes the first element



*/

/* 
//-------------------SLICE()[do not chnage the array]:-------------------------
The slice() method slices out a piece of an array into a new array.leave the previous array as it is

Syntax : array.slice(start,end)  

it can take 2 argument
  console.log(arr1.slice(4));  // [ 45, 123 ]
  console.log(arr1.slice(2,4));  //[ 1, 90 ](excluding 4th index)
  console.log(arr1)  // [ 3, 4, 1, 90, 45, 123 ] (original array as it is)
  console.log(arr1.slice())  //  [ 3, 4, 1, 90, 45, 123 ] (copy of original array[shallow copy])
    // above can also be done by spread operator[...arr1]

*/

/*
// ------------------Fill()[change original]----------------------
The JavaScript array fill() method fills the elements of the given array with the specified static values.
This method modifies the original array. It returns undefined, if no element satisfies the condition.
You can change all the elements to a static value or change a few selected items.

Syntax:
    arr.fill(value[, start[, end]])  

Parameter
    value - The static value to be filled.

    start - It is optional. It represents the index from where the value starts filling. By default, it is 0.

    end - It is optional. It represents the index where the value stops filling. By default, it is length-1.

Example:

    const colors = ['red', 'blue', 'green'];

    colors.fill('pink');
    console.log(colors); // ["pink", "pink", "pink"]

    const colors = ['red', 'blue', 'green'];
    colors.fill('pink', 1,3); // ["red", "pink", "pink"]

*/

/* 
// -------------------includes() ---------------------------
You can determine the presence on an element in an array using the includes() method.
If the element is found, the method returns true, and false otherwise.

    const names = ['tom', 'alex', 'bob', 'john'];

    names.includes('tom'); // returns true
    names.includes('july'); // returns false

*/

/*
// --------------------indexOf()-------------------------
You may want to know the index position of an element in array. 
You can use the indexOf() method to get that. It returns the index of the first occurrence of an element in the array. 
If an element is not found, the indexOf() method returns -1.

        const names = ['tom', 'alex', 'bob', 'john'];

        names.indexOf('alex'); // returns 1
        names.indexOf('rob'); // returns -1

There is another method lastIndexOf() that helps you find the index of the last occurrence of an element in the array. Like indexOf(), lastIndexOf() also returns -1 if the element is not found.

        const names = ['tom', 'alex', 'bob', 'tom'];

        names.indexOf('tom'); // returns 0
        names.lastIndexOf('tom'); // returns 3

/*
// --------------------reverse()[modifies original]----------------------
As the name suggests, the reverse() method reverses the elements' positions in the array so that the last element goes into the first position and the first one to the last.

    const names = ['tom', 'alex', 'bob'];

    names.reverse(); // returns ["bob", "alex", "tom"]
*/

/*
// ---------------------copywithin----------------
The JavaScript array copyWithin() method copies the part of the given array with its own elements and returns the modified array.
This method doesn't change the length of the modified array.
Syntax:
    array.copyWithin(target, start, end)  

Parameter
    target - The position where the copied element takes place.

    start - It is optional. It represents the index from where the method starts copying elements. By default, it is 0.

    end - It is optional. It represents the index at which elements stops copying. By default, it is array.length-1.

Example:
    const arr1 = [1,2,3,4,5,6]
    console.log(arr1.copyWithin(1,2,4)) // [ 1, 3, 4, 4, 5, 6 ]

*/

/*
-------------------------------------------------arr.flat()------------------------------------------
The flat() method is an inbuilt array method that flattens a given array into a newly created one-dimensional array. 
It concatenates all the elements of the given multidimensional array, and flats upto the specified depth. 
We can specify the depth limit to where we need to flatten the array. By default, the depth limit is 1.
It returns a newly created array containing all the sub-array elements concatenated into it.

Syntax
    var newArr=arr.flat(<depth>);  

Example:
const twoDimArr=[90,18,[89,56],[13,20,[67,17]]];
console.log(twoDimArr.flat(1))      // [ 90, 18, 89, 56, 13, 20, [ 67, 17 ] ]
console.log(twoDimArr.flat(2))      // [ 90, 18, 89, 56, 13, 20, 67, 17 ]

*/

/*
-----------------------------arr.from()-----------------------------
The from() method creates a new array that holds the shallow copy from an array or iterable object. 
When applied to a string, each word gets converted to an array element in the new array.

Note: Array from() method allows to create a new array from an array-like object, specified with a length property and indexed elements. 
The length property of the from() method is 1 usually.

Syntax:
    Array.from(object,map_fun,thisArg);  

Parameter
    object: It is the name of the array-like or iterable object on which from() method will be applied.
    map_fun: It is an optional parameter used for calling the elements of the array via map() function.
    thisArg: An optional parameter whose value is used as 'this' when we execute the map_fun.

Example:
var set = new Set(['C','C++','Java','C','Java','C++','Python','Perl']); //A set of different values.
console.log(Array.from(set))  // [ 'C', 'C++', 'Java', 'Python', 'Perl' ]

Example 2:
console.log(Array.from({length: 9}, (v, i) => i)) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
*/

/*
--------------------arr.keys() & aa.values--------
The keys() method creates and returns a new iterator object which holds the key for every index in the array. 
This method does not affect the original array.
It returns a new array iterator object.

Example:
const arr2 = [9,10,11,23]

const keysItr = arr2.keys()
console.log(keysItr) // { [Iterator] }
for(ele of keysItr ){
  console.log(ele)     // [0,1,2,3]
}
const valuesItr = arr2.values()
console.log(valuesItr)
for(ele of valuesItr ){
  console.log(ele)  // [9,10,11,23]
} 


*/

/*
// ------------------Array method summary ----------------------------

TYPE 1: To mutate original array
    a> Add to original : push()<end> , unshift()<start>
    b> Remove from original : pop()<end> , shift()<start>, splice()<any>
    c> Others: reverse(), sort(), fill()

TYPE 2: A new array
    a> Computed from original : map()<loop>
    b> filter using condition : filter()
    c> portion of original : slice()
    d> Adding original to other : concat()
    e> Flatening the original : flat() / flatMap()

TYPE 3: An array index:
    a> Based on value: indexOf()
    b> Based on test condition: findIndex()

TYPE 4: An array element : 
    a> Based on test condition: find()

TYPE 5: Know if array includes
    a> Based on value: includes()
    b> based on condition: some() /every()

TYPE 6 : A new string : join()

TYPE 7 : To transform to value : reduce()

TYPE 8: To just loop array : forEach()


*/
