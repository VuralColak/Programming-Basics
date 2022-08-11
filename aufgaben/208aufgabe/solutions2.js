//////////////////////////////////////
// Objects: Teil 2

// 1. Überprüfe, ob eine Zahl innerhalb eines bestimmten Bereichs liegt. Erstelle eine Funktion isWithinRange, die überprüft, ob eine Zahl innerhalb des Bereichs der Eigenschaften min und max eines Objekts liegt. Nimm an, dass min <= max immer wahr ist.

// Beispiele:
// isWithinRange(4, { min: 0, max: 5 }) ➞ true
// isWithinRange(4, { min: 4, max: 5 }) ➞ true
// isWithinRange(4, { min: 6, max: 10 }) ➞ false
// isWithinRange(5, { min: 5, max: 5 }) ➞ true

console.log(' ');
console.log('------Aufgabe-1-------');
console.log(' ');

function isWithinRange (num, {min, maks}){
    if(num >= min && num<= maks){
    console.log(true)
    } else{
    console.log(false);
    };
}
    
    
    
isWithinRange(4, { min: 0, maks: 5 });
isWithinRange(4, { min: 4, maks: 5 });
isWithinRange(4, { min: 6, maks: 10 }); 
isWithinRange(5, { min: 5, maks: 5 });





//////////////////////////////////////
// Scrabble. Erstelle eine Funktion calcMaxScrabbleScore, die bei einem Array von Scrabble-Steinen die maximale Punktzahl zählt, die ein Spieler mit den Steinen in seiner Hand erreichen kann. Beispiel:
// const scrabbleHand = [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// console.log(calcMaxScrabbleScore(scrabbleHand)); ➞ 28
// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// Hier wäre die maximale Punktzahl des Spielers 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

console.log(' ');
console.log('------Aufgabe-2-------');
console.log(' ');


const scrabbleHand = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
];


function calcMaxScrabbleScore(x2) {
    let newArr2 = [];
    for (let i = 0; i < x2.length; i++) {
        newArr2.push(Object.values(x2[i]));
    };

    const numArr = []
    for(let j = 0; j < newArr2.length; j++){
    numArr.push(newArr2[j].splice(1, 1))
    }
    
    let sum = 0
    for(let k = 0; k < numArr.length; k++){
    sum += parseInt(numArr[k])
    }
    return sum;
}

console.log(calcMaxScrabbleScore(scrabbleHand));



//////////////////////////////////////
// 3. Ist es ein leeres Objekt? Erstelle eine Funktion isEmptyObject, die true zurückgibt, wenn ein Objekt leer ist, und false, wenn nicht.

// Beispiele:
// isEmptyObject({}) ➞ true
// isEmptyObject({a: 1}) ➞ false

console.log(' ');
console.log('------Aufgabe-3-------');
console.log(' ');

function isEmptyObject(x) {
    if (Object.entries(x).length <= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEmptyObject({}));
console.log(isEmptyObject({a: 1}));



//////////////////////////////////////
// 4. Buchstaben zählen. Erstelle eine Funktion, die die Anzahl der Vorkommen jedes Buchstabens in einer Zeichenkette zählt. Gib ein Objekt mit Schlüssel-Wert-Paaren von Buchstaben und der Anzahl der Vorkommen für jeden Buchstaben zurück.

// Beispiel:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

console.log(' ');
console.log('------Aufgabe-4-------');
console.log(' ');



// let counter = str => {
//     return str.split('').reduce((total, letter) => {
//       total[letter] ? total[letter]++ : total[letter] = 1;
//       return total;
//     }, {});
// };

function countLetters(string) {
    let result = {};
    const arr = string.split("");
    for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]] === undefined) {
    result[arr[i]] = 1;
    } else {
    result[arr[i]] += 1;
    }
    }
    console.log('buaraya bak')
console.log(result[arr[4]]);
    return result;
}

// console.log(counter("tree"));
// console.log(counter("computer.com"));

console.log(countLetters("tree"));
console.log(countLetters("computer.com"));


//////////////////////////////////////
// 5. Kostenloser Versand. Erstelle eine Funktion, die bestimmt, ob eine Online-Bestellung versandkostenfrei sein soll. Eine Bestellung ist versandkostenfrei, wenn der Gesamtpreis der Artikel 50 € übersteigt.

// Beispiele:
// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

console.log(' ');
console.log('------Aufgabe-5-------');
console.log(' ');


function freeShipping(x5) {
    
    var newArr5 = Object.values(x5);
    let sum5 = 0;
    for (let i = 0; i < newArr5.length; i++) {
        sum5 += newArr5[i];
    }

    if(sum5 > 50){
        return true;
    } else {
        return false;
    }
};


console.log(freeShipping({ "Sponge": 3.50, "Soap": 5.99 })); // ➞ false
console.log(freeShipping({ "Surround Sound Equipment": 499.99 })); // ➞ true
console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })); // ➞ false




//////////////////////////////////////
// 6. Programmierobjekt.
// const programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes"
// };

// Schreibe einen Befehl, der die Sprache “Go” an das Ende des Arrays “languages” anfügt.

// Ändere die Schwierigkeit auf 7.

// Schreibe eine Anweisung mit dem Schlüsselwort delete, um den Schlüssel jokes aus dem Programmierobjekt zu entfernen.
// Schreibe eine Anweisung, um dem Programmierobjekt einen neuen Schlüssel namens “isFun” mit dem Wert “true” hinzuzufügen.

// Durchlaufe in einer Schleife das Array languages und gib alle Sprachen in console.log aus.

// Gib in einer Schleife alle Schlüssel des Programmierobjekts in console.log ein.

// Verwende eine Schleife, um alle Werte des Programmierobjekts zu protokollieren.

// Füge die Methode worthwhile hinzu, die den Wert “Learning the programming languages: JavaScript, Python, Ruby, Go ist lohnend und herausfordernd”, wenn die Schlüssel “isChallenging” und “isRewarding” den Wert true haben.

// Bonus: Erkläre in einem Kommentar, was gedruckt wird, wenn wir eine Objektmethode über die Konsole protokollieren, ohne sie aufzurufen, und warum.

// Bonus:
// Achte darauf, dass kein anderer Code die Eigenschaften des Objekts löschen oder ändern kann.

console.log(' ');
console.log('------Aufgabe-6-------');
console.log(' ');


const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes"
  };

programming.languages.push('Go');
programming.difficulty=7;
programming.isFun=true;
delete programming.jokes;

console.log(programming);

for (let i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);   
};

console.log(' ');

for (let i = 0; i < Object.keys(programming).length; i++) {
    console.log(Object.keys(programming)[i]);   
};

console.log(' ');

for (let i = 0; i < Object.values(programming).length; i++) {
    console.log(Object.values(programming)[i]);   
};

console.log(' ');

programming.worthwhile = function () {
    if (this.isChallenging === true && this.isRewarding === true) {
        console.log(`Learning the programming languages: ${this.languages} ist lohnend und herausfordernd.`);
    }
}

programming.worthwhile();
console.log(programming.worthwhile);