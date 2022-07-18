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