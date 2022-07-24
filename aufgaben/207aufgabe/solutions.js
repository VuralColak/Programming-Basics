////////////////////////////////////
console.log("     ");
console.log("----------Aufgabe-1----------");
console.log("     ");

/*Aufgabe 1 (Karte ziehen)
Implementiere eine Funktion mit dem Namen getCard welche eine zufällige Karte aus dem Array cards entfernt und als String zurückgibt. Wenn man die Funktion getCard 52 mal aufgerufen hat soll sie zurück geben "Der Stapel ist leer".
Nutze folgenden Code:
const cards = ["2 Pik","3 Pik","4 Pik","5 Pik","6 Pik", "7 Pik", "8 Pik", "9 Pik", "10 Pik", "Bube Pik", "Dame Pik", "König Pik", "Ass Pik", "2 Kreuz","3 Kreuz","4 Kreuz","5 PKreuzik","6 Kreuz", "7 Kreuz", "8 Kreuz", "9 Kreuz", "10 Kreuz", "Bube Kreuz", "Dame Kreuz", "König Kreuz", "Ass Kreuz", "2 Karo","3 Karo","4 Karo","5 Karo","6 Karo", "7 Karo", "8 Karo", "9 Karo", "10 Karo", "Bube Karo", "Dame Karo", "König Karo", "Ass Karo", "2 Herz","3 Herz","4 Herz","5 Herz","6 Herz", "7 Herz", "8 Herz", "9 Herz", "10 Herz", "Bube Herz", "Dame Herz", "König Herz", "Ass Herz"]

Bonus:
Implementiere eine Funktion mit dem Namen shuffleCards welche die Karten im Array cards mischt.*/


const cards = ["2 Pik","3 Pik","4 Pik","5 Pik","6 Pik", "7 Pik", "8 Pik", "9 Pik", "10 Pik", "Bube Pik", "Dame Pik", "König Pik", "Ass Pik", "2 Kreuz","3 Kreuz","4 Kreuz","5 PKreuzik","6 Kreuz", "7 Kreuz", "8 Kreuz", "9 Kreuz", "10 Kreuz", "Bube Kreuz", "Dame Kreuz", "König Kreuz", "Ass Kreuz", "2 Karo","3 Karo","4 Karo","5 Karo","6 Karo", "7 Karo", "8 Karo", "9 Karo", "10 Karo", "Bube Karo", "Dame Karo", "König Karo", "Ass Karo", "2 Herz","3 Herz","4 Herz","5 Herz","6 Herz", "7 Herz", "8 Herz", "9 Herz", "10 Herz", "Bube Herz", "Dame Herz", "König Herz", "Ass Herz"];




// Bonus:
// Implementiere eine Funktion mit dem Namen shuffleCards welche die Karten im Array cards mischt.

const ShuffleCardsArray = [];

function shuffleCards(ourCards) {

    

    for (let i = ourCards.length; i > 0; i--) {
        
        const indexNo = parseInt(Math.random()*(ourCards.length));
        // console.log(indexNo);
        var newCard2 = ourCards.splice(indexNo, 1).join("");
        // console.log(newCard2);
        ShuffleCardsArray.push(newCard2);
        
    };

    return ShuffleCardsArray;

};

console.log(shuffleCards(cards));



// function getCard(myCard) {

//     for (let i = myCard.length; i > 0; i--) {
//         const indexNo = parseInt(Math.random()*(myCard.length));
//         // console.log(indexNo);
//         var newCard = myCard.splice(indexNo, 1).join("");
//         console.log(newCard);
//         if(myCard.length === 0){
//             console.log({cards});
//             return "Der Stapel ist leer";
//         };
//     };
// };

function getCard(myCard) {
    
        for (let i = myCard.length; i >= 0; i--) {
            if(myCard.length > 0){
                const indexNo = parseInt(Math.random()*(myCard.length));
                // console.log(indexNo);
                var newCard = myCard.splice(indexNo, 1).join("");
                console.log(newCard);
            } else {
                console.log({cards});
                return "Der Stapel ist leer";
            };
            
        };
    
};

console.log(getCard(ShuffleCardsArray));




////////////////////////////////////
console.log("     ");
console.log("----------Aufgabe-2----------");
console.log("     ");




/*Aufgabe 2 (Passwort Generator)
Implementiere eine Funktion mit dem Namen createPassword welche ein zufällig erzeugtes Passwort zurückgibt.
Die Funktion gibt einen string zurück
Die Funktion erhält 4 Parameter
1. length, eine number, gibt die Länge des Passworts an
2. useSmallLetters, ein boolean, gibt an ob das Passwort kleine Buchstaben von a-z enthalten soll
3. useCapitalLetters, ein boolean, gibt an ob das Passwort große Buchstaben von A-Z enthalten soll
4. useSpecialCharacters, ein boolean, gibt an ob das Passwort Sonderzeichen wie @ ! $ % & * enthalten soll.*/


const capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["@", "!", "$", "%", "&", "*"];
const allCharacters = (capitalLetters + smallLetters + numbers + specialCharacters).replaceAll(/,/g, '');
console.log(allCharacters);
console.log(allCharacters.length);




function createPassword(myPass){
    const myPassword = [];
    for(let i=0; i < 5; i++){
        
        myPassword.push(myPass[parseInt(Math.random()*(myPass.length))]);
    };
    myPassword.splice(myPass[parseInt(Math.random()*(myPass.length))], 1, capitalLetters[parseInt(Math.random()*(capitalLetters.length))],smallLetters[parseInt(Math.random()*(smallLetters.length))], numbers[parseInt(Math.random()*(numbers.length))], specialCharacters[parseInt(Math.random()*(specialCharacters.length))]);
    return myPassword.join("");
};

console.log(createPassword(allCharacters));
// console.log(createPassword(smallLetters));




////////////////////////////////////
console.log("     ");
console.log("----------Aufgabe-3----------");
console.log("     ");




/*Aufgabe 3 (Symmetrischer Unterschied)
Implementiere eine Funktion mit dem namen symmetricDifference(), die zwei Arrays als Parameter erhält und ein Array mit deren symmetrischer Differenz zurückgibt. Das zurückgegebene Array darf nur eindeutige Werte enthalten (keine Duplikate).
Beispiel:
symmetricDifference([1, 2], [ ]) sollte [1, 2] zurückgeben
symmetricDifference([1, 2], [1]) sollte [2] zurückgeben
symmetricDifference([1, 2], [1, 3]) sollte [2, 3] zurückgeben
symmetricDifference([1, 2, 3], [5, 2, 1, 4]) sollte [3, 4, 5] zurückgeben
symmetricDifference([1, 2, 3, 3], [5, 2, 1, 4]) sollte [3, 4, 5] zurückgeben
symmetricDifference([1, 2, 3], [5, 2, 1, 4, 5]) sollte [3, 4, 5] zurückgeben*/



// function symmetricDifference(arrAufgabe3a, arrAufgabe3b) {
//     const longArrayLength = (arrAufgabe3a.length > arrAufgabe3b.length) ? arrAufgabe3a : arrAufgabe3b;
//     const shortArrayLength = (arrAufgabe3a.length <= arrAufgabe3b.length) ? arrAufgabe3a : arrAufgabe3b;
//     const newArrAufgabe3a = [];
//     const newArrAufgabe3b = [];
//     for (let i = 0; i < longArrayLength.length; i++) {
//         if (shortArrayLength.includes(longArrayLength[i])) {
//             newArrAufgabe3b.push(longArrayLength[i]);
//         }else {
//             newArrAufgabe3a.push(longArrayLength[i]);
//         };
//     };
//     return newArrAufgabe3a;
// };


// function symmetricDifference(arrAufgabe3a, arrAufgabe3b) {
//     const newArrayAufgabe3a = arrAufgabe3a.concat(arrAufgabe3b);
//     const newArrayAufgabe3b = arrAufgabe3a.concat(arrAufgabe3b);
//     const newArrayAufgabe3c = [];
//     const newArrayAufgabe3d = [];
//     const newArrayAufgabe3e = [];
//     for (let i = 0; i < newArrayAufgabe3a.length; i++) {
//         if (newArrayAufgabe3b.includes(newArrayAufgabe3a[i])) {
//             newArrayAufgabe3c.push(newArrayAufgabe3a[i]);
//             newArrayAufgabe3b.shift();
//         } else if (newArrayAufgabe3c.includes(newArrayAufgabe3a[i]) && newArrayAufgabe3b.includes(newArrayAufgabe3a[i])) {
//             newArrayAufgabe3d.push(newArrayAufgabe3a[i]);
//         } else {
//             newArrayAufgabe3e.push(newArrayAufgabe3a[i]);
//         };
//     };
//     return newArrayAufgabe3e;
// };




function symmetricDifference(arrAufgabe3a, arrAufgabe3b) {
    let uniqueChars3a = arrAufgabe3a.filter((c, index) => {
        return arrAufgabe3a.indexOf(c) === index;
    });
    let uniqueChars3b = arrAufgabe3b.filter((c, index) => {
        return arrAufgabe3b.indexOf(c) === index;
    }); 
    const newArrayAufgabe3a = (uniqueChars3a.concat(uniqueChars3b)).sort(function(a, b) {
        return a - b;
    });
    const newArrayAufgabe3b = [];
    let newArrayAufgabe3c = newArrayAufgabe3a.filter((c, index) => {
        return newArrayAufgabe3a.indexOf(c) !== index;
    });

    for (let i = 0; i < newArrayAufgabe3a.length; i++) {
        if (!newArrayAufgabe3c.includes(newArrayAufgabe3a[i])) {
            newArrayAufgabe3b.push(newArrayAufgabe3a[i]);
        };
    };
    return newArrayAufgabe3b;
};

console.log(symmetricDifference([1, 2], [ ]));
console.log(symmetricDifference([1, 2], [1]));
console.log(symmetricDifference([1, 2], [1, 3]));
console.log(symmetricDifference([1, 2, 3], [5, 2, 1, 4]));
console.log(symmetricDifference([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(symmetricDifference([1, 2, 3], [5, 2, 1, 4, 5]));
