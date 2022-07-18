console.log(" ");
console.log("--------- Split Method ------------");
console.log(" ");



// split() splits a string into an array of substrings, and returns the array:

// The split() method does not change the original string.

// If (" ") is used as separator, the string is split between words.

// string.split(separator, limit);

// separator	Optional.
// A string or regular expression to use for splitting.
// If omitted, an array with the original string is returned.

// limit	Optional.
// An integer that limits the number of splits.
// Items after the limit are excluded.




let text = "How are you doing today?";
const myArray1 = text.split(" "); // Split the words:
const myArray2 = text.split(""); // Split the characters, including spaces:
const myArray3 = text.split(" ", 3); // Use the limit parameter:
const chars = text.split(""); // Split a string into characters and return the second character:
const myArray4 = text.split("o"); // Use a letter as a separator:
const myArray5 = text.split(); // If the separator parameter is omitted, an array with the original string is returned:



console.log({text});
console.log({myArray1});
console.log("myArray1[1] : " + myArray1[1]);
console.log({myArray2});
console.log({myArray3});
console.log("chars[1] : ", chars[1]);
console.log({myArray4});
console.log({myArray5});




/////////////////////////////////////

console.log(" ");
console.log("--------- Slice Method ------------");
console.log(" ");



// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

// array.slice(start, end)
// 
// start	Optional.
// Start position. Default is 0.
// Negative numbers select from the end of the array.
// 
// end	Optional.
// End position. Default is last element.
// Negative numbers select from the end of the array.


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const citrus = fruits.slice(1, 3); // Select elements:
const myBest = fruits.slice(-3, -1); // Select elements using negative values:

console.log({citrus});
console.log({myBest});


/////////////////////////////////////////////////

console.log(" ");
console.log("--------- Join Method ------------");
console.log(" ");

// The join() method returns an array as a string.

// The join() method does not change the original array.

// Any separator can be specified. The default is comma (,).

// array.join(separator)

// separator	Optional.
// The separator to be used.
// Default is a comma.


const fruitsJoin = ["Banana", "Orange", "Apple", "Mango"];

let textJoin1 = fruitsJoin.join();
let textJoin2 = fruitsJoin.join(" and ");
let textJoin3 = fruitsJoin.join("");

console.log({textJoin1});
console.log({textJoin2});
console.log({textJoin3});




/////////////////////////////////////////////////

console.log(" ");
console.log("--------- Splice Method ------------");
console.log(" ");

// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.

// array.splice(index, howmany, item1, ....., itemX)

// index	    Required.
//             The position to add/remove items.
//             Negative value defines the position from the end of the array.

// howmany	    Optional.
//             Number of items to be removed.

// item1, ..., Optional.
// itemX       New elements(s) to be added.

// Return Value
// An array containing the removed items (if any).


const fruitsSplice = ["Banana", "Orange", "Apple", "Mango"];
const fruitsSplice2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
var fruitsSplice3 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements: 
fruitsSplice.splice(2, 0, "Lemon", "Kiwi");
// At position 2, remove 2 items: 
fruitsSplice2.splice(2, 2);
// At position 2, add 2 elements, remove 1: 
fruitsSplice3.splice(2, 1, "Lemon", "Kiwi");

console.log({fruitsSplice});
console.log({fruitsSplice2});
console.log({fruitsSplice3});

