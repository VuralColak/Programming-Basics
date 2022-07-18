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


/////////////////////////////////////////////////

console.log(" ");
console.log("--------- Replace Method ------------");
console.log(" ");


// The replace() method searches a string for a value or a regular expression.

// The replace() method returns a new string with the value(s) replaced.

// The replace() method does not change the original string.

// Syntax
// string.replace(searchValue, newValue)

// searchValue	Required.
// The value, or regular expression, to search for.
// 
// newValue	Required.
// The new value (to replace with).



const textReplace1 = "Visit Microsoft!";
let newTextReplace1 = textReplace1.replace("Microsoft", "W3Schools");
const textReplace2 = "Mr Blue has a blue house and a blue car.";
let newTextReplace2 = textReplace2.replace(/blue/g, "red"); // burada g bütün blue'lerin degismesini saglar.
let newTextReplace3 = textReplace2.replace(/blue/gi, "red"); // A global, case-insensitive replacement (Global, büyük/küçük harfe
// duyarsız bir değiştirme:)
let newTextReplace4 = textReplace2.replace(/blue|house|car/gi, function (x) {
    return x.toUpperCase();
  }); // A function to return the replacement text (Değiştirilen metni return etme fonksiyonu)



console.log({newTextReplace1});
console.log({newTextReplace2});
console.log({newTextReplace3});
console.log({newTextReplace4});


const textReplace3 = "es2021 first sample code first";
console.log(textReplace3.replaceAll(/first/g, ''));

// Regular expressions are unsafe to use because they contain escape characters that need for certain functions, and these are not readable.

// the latest version (ES2021) of javascript includes a built-in replaceAll method to prevent such issues,

console.log(textReplace3.replace(/first/g, ''));


let textReplace4 = 'JS will, JS will, JS will rock you.';
let newTextReplace5 = textReplace4.replaceAll('JS','JavaScript');

console.log({newTextReplace5});



let textReplace5 = 'JS will, Js will, js will rock you.';

let patternReplace = /js/gi;

let newTextReplace6 = textReplace5.replaceAll(patternReplace, function(match, offset, textReplace5) {
    if(match === 'JS') return 'JavaScript';
    if(match === 'Js') return 'Javascript';
    if(match === 'js') return 'javascript';
    return '';
});

console.log({newTextReplace6});





/////////////////////////////////////////////////

console.log(" ");
console.log("--------- Replace Method ------------");
console.log(" ");