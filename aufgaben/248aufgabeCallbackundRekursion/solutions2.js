console.log(' ');
console.log('-----Aufgabe-1------');
console.log(' ');


// ## 1. How much is true? (mittel)

// Implementiere eine Funktion die zählt wieviele Elemente eines Array true sind

// ### Beispiele

// ```js
// countTrue([true, false, false, true, false]); // ➞ 2

// countTrue([false, false, false, false]); // ➞ 0

// countTrue([]); // ➞ 0
// ```

// ### Notizen

// -   Return 0 wenn das Array leer ist


let result = 0;
function countTrue(arr) {
    if (arr === true) {
        result++;
    }
    return result; 
}
console.log(result);

function giveTrueCount(param, countTrue) {
    const result2 = param.forEach(element => {
        countTrue(element);
    });
    return result;
};


giveTrueCount([true, false, false, true, false], countTrue);

giveTrueCount([false, false, false, false], countTrue);





console.log(' ');
console.log('-----Aufgabe-2------');
console.log(' ');



// ## 2. Numbers in string (schwer)

// Erstellen Sie eine Funktion, die ein Array von Zeichenketten annimmt und ein Array zurückgibt, das nur die Zeichenketten enthält, die Zahlen enthalten. Wenn es keine Zeichenketten mit Zahlen gibt, wird ein leeres Array zurückgegeben.

// ### Beispiele

// ```js
// numInStr(["1a", "a", "2b", "b"]); // ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]); // ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]); // ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]); // ➞ ["test1"]
// ```

// ### Notes

// Die Zeichenketten können Leerzeichen oder beliebige andere Zeichen enthalten.


function numInStr(arr) {
    return arr.filter((element) => {
        for( let i = 0; i < element.length; i++){
            if(!isNaN(element.charAt(i)) && !(element.charAt(i) === " ") ){
            return element;
            };
        };
    })
}
    
console.log(numInStr(["1a", "a", "2b", "b"])); 
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));




console.log(' ');
console.log('-----Aufgabe-3------');
console.log(' ');


// ## Souvenir Shop (sehr schwer)

// Bei einem Urlaub im Ausland siehst du einen Souvenirladen und beschließen, hineinzugehen. Dort gibt es Schneekugeln, Postkarten, Kühlschrankmagnete und all die anderen Dinge, die man normalerweise findet.

// Schreibe eine Funktion die berechnet wieviele Dinge du maximal kaufen kannst. Als Parameter erhält die Funktion ein Array von Preisen und eine Zahl (Das Geld in deinem Geldbeutel).

// ### Beispiele

// ```js
// maxItems(["1", "1", "2"], "3"); // ➞ 2

// maxItems(["10", "7", "2", "60"], "20"); // ➞ 3

// maxItems(["15", "5", "30", "30", "10"], "2"); // ➞ "Nicht genug Geld!"
// ```

// ### Notizen

// -   Wenn du dir nichts leisten kannst, return "Nicht genug Geld!".
// -   Die Preise sind ganze Zahlen.



function maxItems(price, money) {
    const sortedPrice = price.sort((a, b) => a - b)        
    const myArray = []
    for(let i = 0; i < sortedPrice.length; i++){
        money = money - sortedPrice[i]
        if(money > 0){
            myArray.push(sortedPrice[i])
        } 
    }
    if(myArray.length === 0) {
        return "Nicht genug Geld!"
    }; return myArray.length
}

console.log(maxItems(["10", "7", "2", "60"], "20"));
console.log(maxItems(["1", "1", "2"], "3"));
console.log(maxItems(["15", "5", "30", "30", "10"]));






