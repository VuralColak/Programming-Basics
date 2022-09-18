// JavaScript For Of


// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:



const cars = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (let x of cars) {
  text1 += x + ' ';
}

console.log({text1});



let language = "JavaScript";

let text2 = "";
for (let x of language) {
  text2 += x + " ";
}

console.log({text2});