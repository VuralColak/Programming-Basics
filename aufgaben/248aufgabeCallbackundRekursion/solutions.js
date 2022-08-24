console.log(' ');
console.log('-----Aufgabe-1.1------');
console.log(' ');

// # Callbacks

// ## 1.1

// -   Erstelle eine Funktion, die eine Begrüßungsnachricht ausgibt.
// -   Erstelle eine weitere Funktion, die ein Array von verschiedenen Namen und eine Begrüßungsfunktion (callback) empfängt und jeden Namen begrüßt.

// ```javascript
// greetMessage("John"); // drucke "Guten Morgen, John"

// greetUsers(["John", "Peter", "Mark"], greetMessage);
// // "Guten Morgen, John"
// // "Guten Morgen, Peter"
// // "Guten Morgen, Markus"
// ```

function greetMessage(name) {
    console.log(`Guten Morgen, ${name}.`);
};

// greetMessage('John');

function greetUsers(array, greetMessage) {
    const greeting = array.forEach(element => {
        greetMessage(element);
    });
    return greeting;
};

greetUsers(["John", "Peter", "Mark"], greetMessage);


console.log(' ');
console.log('-----Aufgabe-1.2------');
console.log(' ');


// ## 1.2

// -   Schreibe eine Funktion getSquaredNumber, die die Quadratzahl einer gegebenen Zahl zurückgibt.
// -   Schreibe eine weitere Funktion getSquaredNumbersFromArray, welche ein Array mit Zahlen und die Funktion getSquaredNumber (callback) als Parameter erhält und die Quadratzahl jeder Zahl im Array zurückgibt.

// ```javascript
// const array = [1, 2, 3, 4];
// getSquaredNumber(2); // 4
// getSquaredNumbersFromArray(array, getSquaredNumber); // 1, 4, 9, 16
// ```


function getSquaredNumber(num) {
    const result = num * num;
    console.log(result);
};

const array = [1, 2, 3, 4];

function getSquaredNumbersFromArray(arr, getSquaredNumber) {
    const mainResult = arr.forEach(element => {
        getSquaredNumber(element);
    });
    return mainResult;
};

getSquaredNumbersFromArray(array, getSquaredNumber);




console.log(' ');
console.log('-----Aufgabe-2.1------');
console.log(' ');


// # Recursion

// - Benutze Recursion um die Aufgaben zu lösen 
// - for, while, do while, forEach, map, filter etc sind nicht erlaubt

// ## 2.1

// - Implementiere eine Funktion getSumOfArray, welche ein Array erhält und die Summe zurückgibt.


// ```javascript
//     const array = [1, 2, 3, 4, 5, 6]
//     getSumOfArray(array) // 21
// ```

const array1 = [1, 2, 3, 4, 5, 6];
let N = array1.length;

function findSum(A, N) {
    if (N <= 0)
        return 0;
    return (findSum(A, N - 1) + A[N - 1]);
}
 

console.log(findSum(array1, N));



console.log(' ');
console.log('-----Aufgabe-2.2------');
console.log(' ');


// ## 2.2

// - Schreiben Sie eine Funktion reverse, die einen string als Parameter erhält und den string umgekehrt zurückgibt.

// ```javascript
//     const hello = "hello world"
//     reverse(hello) // dlrow olleh
// ```


const hello = "hello world";

function reverse (str) {
    if (str === "") {
        return "";
    } else {
    return reverse(str.substr(1)) + str.charAt(0);
    }
}


console.log(reverse(hello)) // dlrow olleh 