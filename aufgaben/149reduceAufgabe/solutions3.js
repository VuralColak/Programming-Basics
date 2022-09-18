// hasCertainValue
// Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

// DE
// Schreiben Sie eine Funktion namens hasCertainValue, die ein Array von Objekten und einen Schlüssel sowie einen Wert akzeptiert und true zurückgibt, wenn jedes einzelne Objekt im Array diesen Wert für den spezifischen Schlüssel enthält. Andernfalls sollte es false zurückgeben.

// let arr = [
//   { title: "Instructor", first: "Elie", last: "Schoppik" },
//   { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
//   { title: "Instructor", first: "Matt", last: "Lane" },
//   { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
// ];
// hasCertainValue(arr, "title", "Instructor"); // true
// hasCertainValue(arr, "first", "Elie"); // false

let arr = [
  { title: "Instructor", first: "Elie", last: "Schoppik" },
  { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: "Matt", last: "Lane" },
  { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
];


const hasCertainValue = (array, key, value) => {
    return array.every((element) => element[key] === value);
};


console.log(hasCertainValue(arr, "title", "Instructor")); // true
console.log(hasCertainValue(arr, "first", "Elie")); // false