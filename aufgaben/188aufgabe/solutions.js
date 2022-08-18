console.log(' ');
console.log('------Aufgabe-1---------');
console.log(' ');


// #### 1. Gesamtbestellungen abfragen

// -   Berechne die Gesamtzahl der Bestellungen.

// ```javascript
// const orders = [
//     { amount: 250 },
//     { amount: 400 },
//     { amount: 100 },
//     { amount: 325 },
// ];
// ```

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
];


const gesamtZahl = orders.reduce((preis, element) => (preis + element.amount), 0);

console.log(gesamtZahl);

// Lösung-2

// const summe = orders.reduce((prev, curr) => {
//     return prev + curr.amount
//     }, 0)
    
//     console.log(summe);




console.log(' ');
console.log('------Aufgabe-2---------');
console.log(' ');


// #### 2. Inkrementieren um 1

// ```javascript
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// ```

// -   Erstellen Sie eine Funktion, die jedes Element in `arrayOfNumbers` um 1 erhöht. Geben Sie das neue Array von modifizierten Elementen zurück.




const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const um1Inkrementieren = (param) => param.map((element) => element +1);

console.log(um1Inkrementieren(arrayOfNumbers));




console.log(' ');
console.log('------Aufgabe-3---------');
console.log(' ');


// #### 3. Gerade Zahlen filtern

// -   Erstellen Sie eine Funktion namens filterEvens, die ein Array filtert und nur gerade Zahlen zurückgibt. Die Funktion sollte ein Array von Zahlen als Argument nehmen und keine Schleife verwenden.

// -   Beispiele:

// ```javascript
// filterEvens([1, 2, 3, 11, 12, 13]); //returned [2,12]
// filterEvens([22, 2, 31, 110, 6, 13]); //returned [22,2,110,6]
// ```


const filterEvens1 = [1, 2, 3, 11, 12, 13]; //returned [2,12]
const filterEvens2 = [22, 2, 31, 110, 6, 13]; //returned [22,2,110,6]

const filterEvens = (array) => array.filter((element) => element % 2 === 0);

console.log(filterEvens(filterEvens1));
console.log(filterEvens(filterEvens2));



console.log(' ');
console.log('------Aufgabe-4---------');
console.log(' ');


// #### 4. Freunde filtern

// -   Erstelle eine Funktion, die ein übergebenes Array nach einem "Suchbefehl" filtert.

// -   Beispiele

// ```javascript
// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, "ka")); // ["Rika"];
// console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];
// ```


const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (array, str) => array.filter((element) => element.includes(str));

console.log(filterItems(friends, "ka"));
console.log(filterItems(friends, "e"));


console.log(' ');
console.log('------Aufgabe-5---------');
console.log(' ');


// #### 5. Summe

// -   Schreiben Sie eine Funktion namens sum, die die Methode reduce verwendet, um ein Array von Zahlen zu summieren.

// -   Beispiele:

// ```javascript
// sum([1, 2, 3, 4, 5]); //gibt 15 zurück
// sum([6, 7, 7]); //liefert 20
// ```

const sum1= [1, 2, 3, 4, 5]; //gibt 15 zurück
const sum2=[6, 7, 7]; //liefert 20

const summe = (array)=> array.reduce((total, element)=> {
return total + element}, 0);


console.log(summe(sum1));
console.log(summe(sum2));


console.log(' ');
console.log('------Aufgabe-6---------');
console.log(' ');


// #### 6. Quadratwurzel

// -   Schreibe eine Funktion die ein Array aus Numbers als Parameter erhält. Finde für jede Zahl die Quadratwurzel und gebe das neue Array zurück.

const quadratwurzel = (array) => array.map((element) => Math.sqrt(element));

console.log(quadratwurzel([81, 64, 49, 36]));
console.log(quadratwurzel([64]));
console.log(quadratwurzel([49]));
console.log(quadratwurzel([36]));

