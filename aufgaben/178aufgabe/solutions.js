// # Aufgabe 1
// **Benutze für alle Aufgaben Object oder Array Destructuring**
// ## Aufgabe 1.1.1
// - Lege die Properties des folgenden Objekts in eigenen Variablen ab. Benutze dazu Object Destructuring
// ```js
const car = {
    speed: 250,
    brand: 'BMW',
    model: 'M4',
    price: 79999,
    electric: false
};


const {speed, brand, model, price, electric} = car;
console.log(speed, brand, model, price, electric);


// ## Aufgabe 1.1.2
// - Lege die Property name in einer Variable `firstName` ab.
// - Lege die Property lastName in einer Variable ab und gib ihr den default Wert `“empty”`. Wenn es eine Property `lastName` im Objekt Person gibt soll sie verwendet werden.
// ```js
// const person = {
//     name: “Tom”,
//     email: “tom@gmx.de”,
//     age: 23,
// }
// ```

const person = {
    name: 'Tom',
    email: 'tom@gmx.de',
    age: 23,
};

const {name: firstName, lastName = 'empty' } = person;

console.log(firstName, lastName);


// ## Aufgabe 1.2
// - Lege die ersten zwei Elemente des folgenden Array in eigenen Variablen ab. Benutze dazu Array Destructuring
// - Lege den Rest des Arrays in einer eigenen Variable ab. Benutze dazu auch Array destructuring und die spread `...` Syntax
// ```js
const names = [
    'Mark', 'Lisa', 'Dalia', 'Curtis', 'Tim', 'Ben', 'Olaf'
];

const [first, second] = names;
const [, , ...rest] = names;
console.log(first, second, rest);


